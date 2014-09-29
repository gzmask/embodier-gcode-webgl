(ns embodier.canvasdraw)

(def THREE js/THREE)

(defn draw-partics
  "given a collection of points ({:x ?, :y ?}, ...), returns a threejs ParticleSystem"
  [points color]
  (let [geo (THREE.Geometry.)
        mat (THREE.ParticleSystemMaterial. (clj->js {:color color
                                                     :size 0.1}))
        partics (THREE.ParticleSystem. geo mat)
        points- (filter (fn [p] (if (or (nil? (:x p))
                                       (nil? (:y p))
                                       (nil? (:z p)))
                                 false
                                 true))
                        points)
        p-list (for [p points-] (THREE.Vector3. (:x p) (:y p) (:z p)))]
    (set!
      (-> geo .-vertices)
      (apply array p-list))
    partics))

(defn draw-line
  "given a collection of points ({:x ? :y ? :z ? :e ?} ...), returns a threejs line"
  [points color]
  (let [geo (THREE.Geometry.)
        mat (THREE.LineBasicMaterial. (clj->js {:color color}))
        line (THREE.Line. geo mat)
        points- (filter (fn [p]
                          "filter out points missing one of x,y,z,e"
                          (if (or (nil? (:x p))
                                  (nil? (:y p))
                                  (nil? (:z p))
                                  (nil? (:e p)))
                            false
                            true))
                        points)
        p-list (for [p points-] (THREE.Vector3. (:x p) (:y p) (:z p)))]
    (set!
      (-> geo .-vertices)
      (apply array p-list))
    line))

(defn first-layer-num
  "given the layers of the model, return the number of first layer"
  [layers]
  (loop [num 0]
    (if (or
          (not (empty?  (filter (fn [p]
                                  (if (or (nil? (:x p)) (nil? (:y p)) (nil? (:z p)))
                                    false
                                    true))
                                (nth layers num))))
          (> num (dec (count layers))))
      num
      (recur (inc num)))))

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

(defn update-scene [scene layers current-layer]
  (let [children (.-children scene)]
    (loop [i (dec (count children))]
      (if (< i 0)
        (do
          (.add scene (draw-line (nth @layers @current-layer) 0x00ff00))
          (loop [i (dec @current-layer)]
            (if (< i 0)
              nil
              (recur (do (.add scene (draw-partics (nth @layers i) 0x0000aa))
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
  [layers current-layer]
  (nth
  (for [layer @layers]
    (reduce (fn [p p-]
              {:x (/ (+
                       (if (NaN? (js/parseInt (:x p))) 0
                         (js/parseInt (:x p)))
                       (if (NaN? (js/parseInt (:x p-))) 0
                         (js/parseInt (:x p-)))
                       ) 2)
               :y (/ (+
                       (if (NaN? (js/parseInt (:y p))) 0
                         (js/parseInt (:y p)))
                       (if (NaN? (js/parseInt (:y p-))) 0
                         (js/parseInt (:y p-)))
                       ) 2)
               :z (/ (+
                       (if (NaN? (js/parseInt (:z p))) 0
                         (js/parseInt (:z p)))
                       (if (NaN? (js/parseInt (:z p-))) 0
                         (js/parseInt (:z p-)))
                       ) 2)})
            {:x 0 :y 0 :z 0} layer)) @current-layer))

(defn show-layer
  [layers dom-id current-layer scene camera renderer req-id]
  ;this function gets call every time a layer is changed, need fixing
  (let [dom (.getElementById js/document dom-id)
        width 640
        height 480
        ;scene (THREE.Scene.)
        ;camera (THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000)
        render #(.render @renderer @scene @camera)
        control (trackball-control @camera render dom)
        center-point {:x 0 :y 0 :z 10}
        animate (fn an[]
                  (reset! req-id (js/requestAnimationFrame an))
                  (.update control)
                  (render))]
    (.setSize @renderer width height)
    (set! (.-innerHTML dom) "")
    (.appendChild dom (.-domElement @renderer))
    (update-scene @scene layers current-layer)
    ;need a function to set camera to center
    (set! (.-y (.-position @camera))  -25)
    (set! (.-z (.-position @camera))  25)
    (.lookAt @camera (THREE.Vector3.
                      (:x center-point)
                      (:y center-point)
                      (:z center-point)))
    (js/cancelAnimationFrame @req-id)
    (animate)
    ))
