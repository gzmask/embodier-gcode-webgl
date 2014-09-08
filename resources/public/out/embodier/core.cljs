(ns embodier.core
  (:require
    [embodier.webcomponents :as web]
    [embodier.canvasdraw :as draw]
    [goog.events :as events]
    [secretary.core :as secretary :include-macros true :refer [defroute]]
    [reagent.core :as reagent])
  (:import [goog History]
           [goog.history EventType]))

(reagent/render-component [web/app] (.-body js/document))

(secretary/set-config! :prefix "#")

(defroute upload "/svg" []
  (reset! web/routes (assoc web/default :svg-file true)))

(defroute upload "/gcode" []
  (reset! web/routes (assoc web/default :gcode-file true)))

(defroute layers "/layers" []
  (reset! web/routes (assoc web/default :layer-view true)))

(defroute "/" []
  (reset! web/routes (assoc web/default :gcode-file true)))

(def history (History.))

(events/listen history EventType.NAVIGATE
  (fn [e] (secretary/dispatch! (.-token e))))

(.setEnabled history true)
