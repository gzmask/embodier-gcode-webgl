(ns embodier.webcomponents
  (:require
    [embodier.fileapi :as file]
    [embodier.canvasdraw :as draw]
    [reagent.core :refer [atom]]))

(def default {:gcode-file false
              :svg-file false
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
(def renderer (atom (if (draw/NaN? (.-WebGLRenderingContext js/window))
                      (draw/THREE.WebGLRenderer.)
                      (draw/THREE.CanvasRenderer.))))
(def renderer2 (atom (if (draw/NaN? (.-WebGLRenderingContext js/window))
                       (draw/THREE.WebGLRenderer.)
                       (draw/THREE.CanvasRenderer.))))

(defn logo []
  [:div {:style {:font-size "35px"}} "Embodier"])

(defn about []
  [:a {:href "http://gzmask.wordpress.com"} "About Me"])

(defn github []
  [:a {:href "https://github.com/gzmask/embodier"} "Github"])

(defn header []
   [:div.row
    [:div.col-md-2.col-md-offset-2 [logo]]
    [:div.col-md-1.col-md-offset-2 {:style {:background-color "#ccc"}} [about]]
    [:div.col-md-1 {:style {:background-color "#ccc"}} [github]]])

(defn uploadsvg-button []
  [:input#uploadsvg-button {:type "file"
                         :name "files[]"
                         :style {:color "#555"}
                         :on-change #(file/setOnLoad (aget (.. % -target -files) 0) layers)}])
(defn upload-button []
  [:input#upload-button {:type "file"
                         :name "files[]"
                         :style {:color "#555"}
                         :on-change #(file/setOnLoad (aget (.. % -target -files) 0) layers)}])

(defn svg-dropper []
  [:div
    [:div.row
     [:div.col-md-4.col-md-offset-1
      [:div#file-dropper.bcircle.circle_file [:span.glyphicon.glyphicon-hdd] " SVG Analysor"]]]
    [:div.row
     [:div.col-md-3.col-md-offset-3 [uploadsvg-button]]]])

(defn gcode-dropper []
  [:div
    [:div.row
     [:div.col-md-4.col-md-offset-1
      [:div#file-dropper.bcircle.circle_file [:span.glyphicon.glyphicon-hdd] " Gcode Analysor"]]]
    [:div.row
     [:div.col-md-3.col-md-offset-3 [upload-button]]]])

(defn layer-view-before []
  [:div#layer-view-before.bcircle.circle_layer
   [:canvas#mycanvas]])

(defn layer-view-after []
  [:div#layer-view-after.bcircle.circle_layer])

(defn control-cb [name]
  [:div.col-md-6 [:div.input-group [:span.input-group-addon [:input {:type "checkbox"}]]
     [:span.input-group-addon name]]])

(defn control-range! [name min max]
    [:div.col-md-12 [:div.input-group
                     [:input {:type "range"
                              :name name
                              :value @current-layer-num
                              :on-change #(do
                                            (reset! current-layer-num (-> % .-target .-value))
                                            (draw/show-layer layers "layer-view-before" current-layer-num scene camera renderer req-id))
                                            ;(draw/show-layer layers "layer-view-after" current-layer-num scene2 camera renderer2 req-id2))
                              :min min :max max
                              :style {:padding-top "4px"}
                              }]
                     [:span.input-group-addon name ": " @current-layer-num]]])

(defn layer-viewer []
  [:div#layer-view.row
   [:div.col-md-8
    [:div.row
        [:span.col-md-offset-6 "hold 'D' to drag"]]
    [:div.row
        [:div.col-md-11.col-md-offset-1 [layer-view-before]]]
    [:div.row
        [:span.col-md-offset-6.glyphicon.glyphicon-circle-arrow-down.btn-lg]]
    [:div.row
        [:div.col-md-11.col-md-offset-1 [layer-view-after]]]]
   [:div.col-md-4
    [:div.row
      [control-cb "control one"]
      [control-cb "control two"]]
    [:div.row
      [control-cb "control three"]
      [control-cb "control four"]]
    [:div.row
     [control-range! "layer" (draw/first-layer-num @layers) (dec (count @layers))]]
    ]])

(defn app []
  [:div
   [header]
   [:a {:href "#/"} "home"][:br]
   [:a {:href "#/svg"} "svg"][:br]
   [:a {:href "#/gcode"} "gcode"][:br]
   [:a {:href "#/layers"} "layers"][:br]
   (for [x (range 4)] ^{:key x} [:br])
   (if (:layer-view @routes) [layer-viewer])
   (if (:gcode-file @routes) [gcode-dropper])
   (if (:svg-file @routes) [svg-dropper])
   ])
