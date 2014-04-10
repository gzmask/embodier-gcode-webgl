(ns embodier.webcomponents
  (:require 
    [embodier.fileapi :as file]
    [reagent.core :refer [atom]]))

(def default {:upload-file false
              :layer-view false})

(def routes (atom (assoc default :upload-file true)))

(defn logo []
  [:div {:style {:font-size "35px"}} "Embodier"])

(defn about []
  [:a {:href "http://richever.ca/about#About"} "About Us"])

(defn github []
  [:a {:href "https://github.com/gzmask"} "Github"])

(defn header []
   [:div.row  
    [:div.col-md-2.col-md-offset-2 [logo]]
    [:div.col-md-1.col-md-offset-2 {:style {:background-color "#ccc"}} [about]]
    [:div.col-md-1 {:style {:background-color "#ccc"}} [github]]])

(defn upload-button []
  [:input#upload-button {:type "file" 
                         :name "files[]"
                         :style {:color "#555"}
                         :on-change #(file/setOnLoad (aget (.. % -target -files) 0))}])

(defn file-dropper []
  [:div 
    [:div.row 
     [:div.col-md-4.col-md-offset-1 
      [:div#file-dropper.bcircle.circle_file [:span.glyphicon.glyphicon-hdd] " Upload file here"]]]
    [:div.row 
     [:div.col-md-3.col-md-offset-3 [upload-button]]]])

(defn layer-view-before []
  [:div#layer-view-before.bcircle.circle_layer])

(defn layer-view-after []
  [:div#layer-view-after.bcircle.circle_layer])

(defn control-cb [name]
  [:div.col-md-6 [:div.input-group [:span.input-group-addon [:input {:type "checkbox"}]]
     [:span.input-group-addon name]]])

(defn control-range! [name min max]
  (let [layer (atom min)]
    (fn [] 
      [:div.col-md-12 [:div.input-group 
                       [:span.input-group-addon name ": " @layer]
                       [:input {:type "range" 
                                :name name 
                                :value @layer 
                                :on-change #(reset! layer (-> % .-target .-value)) 
                                :min min :max max
                                :style {:padding-top "4px"}
                                }]
                       [:span.input-group-addon max]]])))

(defn layer-viewer []
  [:div#layer-view.row 
   [:div.col-md-8
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
     [control-range! "layer" 0 100]]
    ]])

(defn timer-component []
  (let [seconds-elapsed (atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       "Seconds Elapsed: " @seconds-elapsed])))

(defn app []
  [:div 
   [header]
   [:a {:href "#/"} "home"][:br]
   [:a {:href "#/upload"} "upload"][:br]
   [:a {:href "#/layers"} "layers"][:br]
   (for [x (range 4)] ^{:key x} [:br])
   (if (:layer-view @routes) [layer-viewer])
   (if (:upload-file @routes) [file-dropper])
   [timer-component]
   ])
