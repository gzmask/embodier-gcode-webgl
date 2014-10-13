(ns embodier.routes
  (:require [secretary.core :as secretary :include-macros true :refer [defroute]]))

(defroute "/users/:id" {:as params}
  (js/console.log (str "User: " (:id params))))

(secretary/dispatch! "/users/gf3")
