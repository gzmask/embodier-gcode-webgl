(ns embodier.fileapi
  (:require 
    [clojure.string :as s]))

(defn layered [str-ary]
  (partition-by (fn [s] 
                  (if (re-find (re-pattern "^G1.*Z.*") s)
                    false
                    true))
                str-ary))

(defn filterG1 [str-ary]
  (filter (fn [s] 
            (if (re-find (re-pattern "^G1.*") s)
              true
              false)) 
          str-ary))

(defn readFile [file] 
  (let [raw-str (-> file .-target .-result)]
    (doseq [ary (-> raw-str s/split-lines filterG1 layered)]
      (.log js/console (print-str ary)))))

(defn setOnLoad [f]
  (let [reader (js/FileReader.)] 
    (set! (.-onload reader) readFile)
    (.readAsText reader f)))
