# gcode layer viewer

View Gcode extrusion paths in WebGL

## What is embodier
The Gcode viewer is a part of the [Embodier slicer|https://github.com/gzmask/embodier.stl.slicer]. The gcode viewer renders the extrusions into lines. By looking into these lines, we know when the printer is "jumping" between extrusions. Embodier is a project that trying to solve the "single extrusion problem" of many 3D printer faces.
Most slicers have unreliable "on and off" extruding during the print. This generated a lot of problems. Embodier trys to make a single extrusion whenever it is possible.

## Usage
open resources/public/index.html in any modern browser that has WebGL enabled.

## Debugging with Repl how to
Using austin
lein repl
(cemerick.austin.repls/exec :exec-cmds ["open" "-ga" "/Applications/Google Chrome.app"])
