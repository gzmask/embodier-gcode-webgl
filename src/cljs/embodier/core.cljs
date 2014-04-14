(ns embodier.core
  (:require 
    [embodier.webcomponents :as web]
    [embodier.canvasdraw :as draw]
    [goog.events :as events]
    [secretary.core :as secretary :include-macros true :refer [defroute]]
    [reagent.core :as reagent])
  (:import [goog History]
           [goog.history EventType]))

(secretary/set-config! :prefix "#")

(defroute upload "/upload" []
  (reset! web/routes (assoc web/default :upload-file true)))

(defroute layers "/layers" []
  (reset! web/routes (assoc web/default :layer-view true)))

(defroute "/" []
  (reset! web/routes (assoc web/default :upload-file true)))

(def history (History.))

(events/listen history EventType.NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)

(reagent/render-component [web/app] (.-body js/document))
