(defproject embodier "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [secretary "1.1.0"]
                 [reagent "0.4.2"]]
  :plugins [[lein-cljsbuild "1.0.2"]
            [com.cemerick/austin "0.1.4"]]
  :source-paths ["src/clj"]
  :cljsbuild {
  :builds [{:id "embodier"
          :source-paths ["src/cljs"]
          :compiler {
            :output-to "resources/public/out/embodier.js"
            :output-dir "resources/public/out" 
            :preamble ["reagent/react.js"]
            :optimizations :none
            :source-map true}}]})
