(ns embodier.fileapi
  (:require 
    [clojure.string :as s]))

(defn collapseZ [cmds]
  "collapse :z to all points"
  (loop [resultcmds nil
         counter 0
         last-z 0]
    (if (= counter (count cmds))
      (reverse (filter #(if (nil? (first %)) false true) resultcmds))
      (recur 
        (cons 
          (for [cmd (nth cmds counter)] 
            (if (nil? (:z cmd)) 
              (if (or (not (nil? (:x cmd))) (not (nil? (:y cmd))))
                (assoc cmd :z last-z)
                cmd)
              nil))
          resultcmds)
        (inc counter)
        (if (= (:z (first (nth cmds counter))) nil) 
          last-z 
          (:z (first (nth cmds counter))))))))

(defn cmd-map [cmds]
  "translate each command to a map like {:x 1, :y 2, ...}"
  (filter (complement empty?)
    (for [part cmds]
      (filter (complement empty?)
        (for [cmd part]
          (apply merge (filter #(if (not= % nil) true false)
            (for [token (s/split cmd #"\s")]
              (cond 
                (re-find #"^X-*\d+.*$" token) {:x (re-find #"-*\d+\.*\d*" token)}
                (re-find #"^Y-*\d+.*$" token) {:y (re-find #"-*\d+\.*\d*" token)}
                (re-find #"^Z-*\d+.*$" token) {:z (re-find #"-*\d+\.*\d*" token)}
                (re-find #"^F-*\d+.*$" token) {:f (re-find #"-*\d+\.*\d*" token)}
                (re-find #"^E-*\d+.*$" token) {:e (re-find #"-*\d+\.*\d*" token)}
                :else nil)))))))))

(defn layered [str-ary]
  "partition the G1 commands array by Z axis movements"
  (partition-by (fn [s] 
                  (if (re-find (re-pattern "^G1.*Z.*") s)
                    false
                    true))
                str-ary))

(defn filterG1 [str-ary]
  "filter out commands that is not started with G1"
  (filter (fn [s] 
            (if (re-find (re-pattern "^G1.*") s)
              true
              false)) 
          str-ary))

(defn readFile [layers file] 
  (let [raw-str (-> file .-target .-result)]
    (reset! layers (-> raw-str s/split-lines filterG1 layered cmd-map collapseZ))
    ;(.log js/console (print-str (s/join "\n" @layers)))
    ;(.log js/console (print-str (s/join "\n" (nth @layers 0))))
    ;(.log js/console (print-str (s/join "\n" (nth @layers 2))))
    ))

(defn setOnLoad [f layers]
  (let [reader (js/FileReader.)] 
    (set! (.-onload reader) (partial readFile layers))
    (.readAsText reader f)))
