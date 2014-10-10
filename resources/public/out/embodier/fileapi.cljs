(ns embodier.fileapi
  (:require
    [clojure.string :as s]))

(defn reverse-layerscmd 
  "reverse each layers cmds"
  [layers-cmds]
  (for [cmds layers-cmds]
    (reverse cmds)))

(defn collapseY
  "stores Y into each command"
  [layers-cmds]
  (for [cmds layers-cmds]
    (loop [resultcmds nil
           counter 0
           last-y 0]
      (if (= counter (count cmds))
        resultcmds
        (recur
          (if (nil? (:y (nth cmds counter))) 
            (cons (assoc (nth cmds counter) :y last-y) resultcmds)
            (cons (nth cmds counter) resultcmds))
          (inc counter)
          (if (nil? (:y (nth cmds counter))) 
            last-y 
            (:y (nth cmds counter))))))))

(defn collapseX
  "stores X into each command"
  [layers-cmds]
  (for [cmds layers-cmds]
    (loop [resultcmds nil
           counter 0
           last-x 0]
      (if (= counter (count cmds))
        resultcmds
        (recur
          (if (nil? (:x (nth cmds counter))) 
            (cons (assoc (nth cmds counter) :x last-x) resultcmds)
            (cons (nth cmds counter) resultcmds))
          (inc counter)
          (if (nil? (:x (nth cmds counter))) 
            last-x 
            (:x (nth cmds counter))))))))

(defn collapseE
  "stores extrusions into each command"
  [layers-cmds]
  (for [cmds layers-cmds]
    (loop [resultcmds nil
           counter 0
           last-extrusion 0]
      (if (= counter (count cmds))
        resultcmds
        (recur
          (if (nil? (:e (nth cmds counter))) 
            (cons (assoc (nth cmds counter) :e last-extrusion :e- last-extrusion) resultcmds)
            (cons (assoc (nth cmds counter) :e- last-extrusion) resultcmds))
          (inc counter)
          (if (nil? (:e (nth cmds counter))) 
            last-extrusion 
            (:e (nth cmds counter))))))))

(defn remove-jumps
  "filter each layer cmds according to extrusion directions"
  [layers-cmds]
  (for [cmds layers-cmds]
    (filter (fn [cmd] ;if this cmd gives a positive extrusion
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
              (assoc cmd :z last-z)
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
    (reset! layers (-> raw-str s/split-lines filterG1 layered cmd-map collapseZ collapseX collapseY collapseE reverse-layerscmd remove-jumps))
    ;(.log js/console (print-str (s/join "\n" @layers)))
    ;(.log js/console (print-str (nth @layers 1)))
    ;(.log js/console (print-str (nth @layers 2)))
    ))

(defn setOnLoad
  "called by web component of file onload. f (file) being read into layers atom"
  [f layers]
  (let [reader (js/FileReader.)]
    (set! (.-onload reader) (partial readFile layers))
    (.readAsText reader f)))
