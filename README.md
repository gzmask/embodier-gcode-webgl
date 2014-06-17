# gcode layer view

Transform a Gcode file of a 3d printable model into single extrusion.

## Usage
open resources/public/index.html in any modern browser

## Design
Using the slic3r's feature: --export-svg        Export a SVG file containing slices instead of G-code.
to produce a single extrusion.

## Repl how to
Using austin
lein repl
(cemerick.austin.repls/exec :exec-cmds ["open" "-ga" "/Applications/Google Chrome.app"])
