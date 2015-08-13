(ns embodier.canvasdraw)

(def THREE js/THREE)

(defn notify [text] 
  (set! (.-innerHTML (.getElementById js/document "notification")) text))

(defn three-partics
  "given a collection of points ({:x ?, :y ?}, ...), returns a threejs ParticleSystem"
  [points color]
  (let [geo (THREE.Geometry.)
        mat (THREE.ParticleBasicMaterial. (clj->js {:size 0.2, :color color})) 
        p-list (for [p points] (THREE.Vector3. (:x p) (:y p) (:z p)))
        setup (set! (-> geo .-vertices) (apply array p-list))
        partics (THREE.ParticleSystem. geo mat)]
    partics))

(defn three-line
  "given two of points ({:x ? :y ? :z ?} ...), returns a threejs line"
  [points color]
  (let [geo (THREE.Geometry.)
        mat (THREE.LineBasicMaterial. (clj->js {:color color}))
        line (THREE.Line. geo mat)
        p-list (for [p points] (THREE.Vector3. (:x p) (:y p) (:z p)))]
    (set!
      (-> geo .-vertices)
      (apply array p-list)) 
    line))

(defn draw-lines 
  "given cmds with :next, add lines to scene in pairs accordingly"
  [cmds scene color]
  (doseq [cmd cmds] 
    (if (not (nil? (:next cmd)))
      (let [p [cmd (nth cmds (:next cmd))]] 
        (.add scene (three-line p color))))))

(defn trackball-control [cam render dom]
  (let [control (THREE.TrackballControls. cam dom)]
    (set! (.-rotateSpeed control) 1.0)
    (set! (.-zoomSpeed control) 1.2)
    (set! (.-panSpeed control) 0.8)
    (set! (.-noZoom control) false)
    (set! (.-noPan control) false)
    (set! (.-staticMoving control) true)
    (set! (.-dynamicDampingFactor control) 0.3)
    (set! (.-keys control) (array 65 83 68))
    (.addEventListener control "change" render)
    control))

(defn update-scene 
  "add layers from file-api into the scene"
  [scene layers current-layer]
  (let [children (.-children scene)]
    (loop [i (dec (count children))]
      (if (< i 0)
        (do
          (draw-lines (nth @layers @current-layer) scene 0x000000)
          (loop [i (dec @current-layer)]
            (if (< i 0)
              (notify "Render is done.")
              (recur (do (.add scene (three-partics (nth @layers i) 0x555555))
                         (dec i))))))
        (recur
          (do
            (.remove scene (aget children i))
            (dec i)))))))

(defn NaN? [node]
  "this is the js nil."
  (and (= (.call js/toString node) (str "[object Number]"))
       (js/eval (str node " != +" node ))))

(defn get-center
  "given an array of {:x :y :z} points, find the center point"
  [cmds]
  (reduce (fn [p p-]
            {:x (/ (+ (js/parseInt (:x p))
                      (js/parseInt (:x p-))) 2)
             :y (/ (+ (js/parseInt (:y p)) 
                      (js/parseInt (:y p-))) 2)
             :z (/ (+ (js/parseInt (:z p)) 
                      (js/parseInt (:z p-))) 2)}) cmds))

(def width 640)
(def height 480)
(def scene (THREE.Scene.))
(def camera (THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000))
(set! (.-y (.-position camera))  -25)
(set! (.-z (.-position camera))  25)
(def renderer (THREE.WebGLRenderer.))
(.setClearColorHex renderer 0xcccccc 1)

(defn show-layer
  [layers dom-id current-layer req-id]
  (let [dom (.getElementById js/document dom-id)
        center-point {:x 0 :y 0 :z 0};(get-center (nth @layers @current-layer))
        render #(.render renderer scene camera)
        control (trackball-control camera render dom)
        animate (fn an[]
                  (reset! req-id (js/requestAnimationFrame an))
                  (.update control)
                  (render))]
    (.setSize renderer width height)
    (set! (.-innerHTML dom) "")
    (.appendChild dom (.-domElement renderer)) 
    (update-scene scene layers current-layer)
    (set! (.-target control) (THREE.Vector3. (:x center-point) (:y center-point) (:z center-point)))
    (js/cancelAnimationFrame @req-id)
    (animate)
    ))
