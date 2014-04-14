(ns embodier.canvasdraw)

(def THREE js/THREE)

(defn example []
  (let [scene (THREE.Scene.)
        width 640
        height 480
        camera (THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000 )
        renderer (THREE.CanvasRenderer.)
        geometry (THREE.CubeGeometry. 1 1 1)
        material (THREE.MeshBasicMaterial. (clj->js {:color 0x00ff00}))
        cube (THREE.Mesh. geometry material)
        render (fn cb []
                   (js/requestAnimationFrame cb) 
                   (set! (.-x (.-rotation cube))  (+ 0.1 (.-x (.-rotation cube))) )
                   (set! (.-y (.-rotation cube))  (+ 0.1 (.-y (.-rotation cube))) )
                   (.render renderer scene camera)
                 ) 
        ]
    (.setSize renderer width height)
    (.appendChild (.getElementById js/document "layer-view-before") (.-domElement renderer) )
    (.add scene cube)
    (set! (.-z (.-position camera))  5)
    (render)
    )
  )

(defn draw-line [points color]
  "given a collection of points ({:x ?, :y ?}, ...), returns a threejs line"
  (let [geo (THREE.Geometry.)
        mat (THREE.LineBasicMaterial. (clj->js {:color color}))
        line (THREE.Line. geo mat)
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
    line))

(defn show-layer [layers dom-id current-layer]
  (let [scene (THREE.Scene.)
        width 640
        height 480
        camera (THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000)
        renderer (THREE.CanvasRenderer.)
        render (fn cb []
                 ;(js/requestAnimationFrame cb)
                 (.render renderer scene camera))
        ]
    (.setSize renderer width height)
    (.replaceChild (.getElementById js/document dom-id) 
                   (.-domElement renderer)
                   (.-firstChild (.getElementById js/document dom-id)))
    (.add scene (draw-line (nth @layers current-layer) 0x00ff00))
    (loop [i (dec current-layer)]
      (if (< i 0)
        nil
        (recur (do (.add scene (draw-line (nth @layers i) 0x0000aa))
                   (dec i)))))
    (set! (.-y (.-position camera))  -25)
    (set! (.-z (.-position camera))  25)
    (.lookAt camera (THREE.Vector3. 0 0 10))
    (render)
    ))
