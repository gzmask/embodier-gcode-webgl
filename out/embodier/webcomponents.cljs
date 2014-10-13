(ns embodier.webcomponents
  (:require
    [embodier.fileapi :as file]
    [embodier.canvasdraw :as draw]
    [reagent.core :refer [atom]]))

(def default {:gcode-file false
              :layer-view false})

(def width 640)
(def height 480)
(def routes (atom (assoc default :upload-file true)))
(def layers (atom nil))
(def current-layer-num (atom 0))
(def req-id (atom nil))
(def req-id2 (atom nil))
(def scene (atom (draw/THREE.Scene.)))
(def scene2 (atom (draw/THREE.Scene.)))
(def camera (atom (draw/THREE.PerspectiveCamera. 75 (/ width height) 0.1 1000)))
(def renderer (atom (draw/THREE.WebGLRenderer.)))
(def renderer2 (atom (draw/THREE.WebGLRenderer.)))

(defn logo []
  [:div {:style {:font-size "35px"}} "Gcode Viewer"])

(defn github []
  [:a {:href "https://github.com/gzmask/embodier"} "Github"])

(defn header [] 
  [:div.row 
   [:div.col-md-2 [logo]] 
   [:div.col-md-1 {:style {:background-color "#ccc"}} [:a {:href "#/"} "Home"]]
   [:div.col-md-1 {:style {:background-color "#ccc"}} [:a {:href "#/gcode"} "Gcode File"]]
   [:div.col-md-1 {:style {:background-color "#ccc"}} [:a {:href "#/layers"} "View Layers"]] 
   [:div.col-md-1 {:style {:background-color "#ccc"}} [github]]])

(defn upload-button []
  [:input#upload-button {:type "file"
                         :name "files[]"
                         :style {:color "#555"}
                         :on-change #(file/setOnLoad (aget (.. % -target -files) 0) layers)}])

(defn gcode-dropper []
  [:div
    [:div.row
     [:div.col-md-4.col-md-offset-1
      [:div#file-dropper.bcircle.circle_file [:span.glyphicon.glyphicon-hdd] "Select Gcode File"]]]
    [:div.row
     [:div.col-md-3.col-md-offset-3 [upload-button]]]])

(defn layer-view-before []
  [:div#layer-view-before.bcircle.circle_layer
   [:canvas#mycanvas]])

(defn control-range! [name min max]
    [:div.col-md-10.col-md-offset-2 [:div.input-group
                     [:input {:type "range"
                              :name name
                              :value @current-layer-num
                              :on-change #(do
                                            (reset! current-layer-num (-> % .-target .-value))
                                            (draw/show-layer layers "layer-view-before" current-layer-num scene camera renderer req-id))
                              :min min :max max
                              :style {:padding-top "4px"}
                              }]
                     [:span.input-group-addon name ": " @current-layer-num]]])

(defn layer-viewer []
  [:div#layer-view.row
   [:div.col-md-8
    [:div.row 
     [control-range! "layer" (draw/first-layer-num @layers) (dec (count @layers))]  ]
    [:div.row 
     [:div.col-md-11.col-md-offset-1 [layer-view-before]]]
    [:div.row 
     [:span.col-md-offset-6 "hold 'D' to drag"]]]])

(defn app []
  [:div
   [header]
   (for [x (range 4)] ^{:key x} [:br])
   (if (:layer-view @routes) [layer-viewer])
   (if (:gcode-file @routes) [gcode-dropper])
   ])
