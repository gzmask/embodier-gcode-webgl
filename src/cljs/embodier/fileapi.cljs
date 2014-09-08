(ns embodier.fileapi
  (:require
    [clojure.string :as s]))

(defn last-extrusion
  "stores extrusions into each command"
  [layers-cmds]
  (for [cmds layers-cmds]
    (loop [resultcmds nil
           counter 0
           last-extrusion 0]
      (if (= counter (count cmds))
        resultcmds
        (recur
          (cons (assoc (nth cmds counter) :e- last-extrusion) resultcmds)
          (inc counter)
          (:e (nth cmds counter)))))))

(comment defn extrusionize [layers-cmds]
  "partition each layer cmds according to extrusion directions(position/negative :e)"
  (for [cmds layers-cmds]
    (partition-by (fn [cmd]
                    "if this cmd gives a positive extrusion"
                    (if (> (:e cmd) (:e- cmd))
                      true
                      false))
                  cmds)))

(defn extrusionize
  "filter each layer cmds according to extrusion directions"
  [layers-cmds]
  (for [cmds layers-cmds]
    (filter (fn [cmd]
              "if this cmd gives a positive extrusion"
              (if (> (:e cmd) (:e- cmd))
                true
                false))
            cmds)))

(defn collapseZ
  "collapse :z to all points"
  [layers-cmds]
  (loop [resultcmds nil
         counter 0
         last-z 0]
    (if (= counter (count layers-cmds))
      (reverse (filter #(if (nil? (first %)) false true) resultcmds))
      (recur
        (cons
          (for [cmd (nth layers-cmds counter)]
            (if (nil? (:z cmd))
              (if (or (not (nil? (:x cmd))) (not (nil? (:y cmd))))
                (assoc cmd :z last-z)
                cmd)
              nil))
          resultcmds)
        (inc counter)
        (if (= (:z (first (nth layers-cmds counter))) nil)
          last-z
          (:z (first (nth layers-cmds counter))))))))

(defn cmd-map
  "translate each command to a map like {:x 1, :y 2, ...}"
  [layers-cmds]
  (filter (complement empty?)
    (for [part layers-cmds]
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

(defn layered
  "partition the G1 commands array by Z axis movements"
  [str-ary]
  (partition-by (fn [s]
                  (if (re-find (re-pattern "^G1.*Z.*") s)
                    false
                    true))
                str-ary))

(defn filterG1
  "filter out commands that is not started with G1"
  [str-ary]
  (filter (fn [s]
            (if (re-find (re-pattern "^G1.*") s)
              true
              false))
          str-ary))

(defn readFile [layers file]
  (let [raw-str (-> file .-target .-result)]
    (reset! layers (-> raw-str s/split-lines filterG1 layered cmd-map collapseZ last-extrusion extrusionize))
    ;(.log js/console (print-str (s/join "\n" @layers)))
    ;(.log js/console (print-str (nth @layers 0)))
    ;(.log js/console (print-str (nth @layers 2)))
    ))

(defn setOnLoad
  "called by web component of file onload. f (file) being read into layers atom"
  [f layers]
  (let [reader (js/FileReader.)]
    (set! (.-onload reader) (partial readFile layers))
    (.readAsText reader f)))
