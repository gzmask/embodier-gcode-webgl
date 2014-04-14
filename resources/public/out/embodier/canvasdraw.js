// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.canvasdraw');
goog.require('cljs.core');
embodier.canvasdraw.THREE = THREE;
embodier.canvasdraw.draw_line = (function draw_line(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.LineBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),color], null))));var line = (new embodier.canvasdraw.THREE.Line(geo,mat));var points_ = cljs.core.filter.call(null,((function (geo,mat,line){
return (function (p){if(((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p) == null)))
{return false;
} else
{return true;
}
});})(geo,mat,line))
,points);var p_list = (function (){var iter__4160__auto__ = ((function (geo,mat,line,points_){
return (function iter__5243(s__5244){return (new cljs.core.LazySeq(null,((function (geo,mat,line,points_){
return (function (){var s__5244__$1 = s__5244;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5244__$1);if(temp__4092__auto__)
{var s__5244__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5244__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5244__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5246 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5245 = 0;while(true){
if((i__5245 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__5245);cljs.core.chunk_append.call(null,b__5246,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__5247 = (i__5245 + 1);
i__5245 = G__5247;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5246),iter__5243.call(null,cljs.core.chunk_rest.call(null,s__5244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5246),null);
}
} else
{var p = cljs.core.first.call(null,s__5244__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__5243.call(null,cljs.core.rest.call(null,s__5244__$2)));
}
} else
{return null;
}
break;
}
});})(geo,mat,line,points_))
,null,null));
});})(geo,mat,line,points_))
;return iter__4160__auto__.call(null,points_);
})();geo.vertices = cljs.core.apply.call(null,cljs.core.array,p_list);
return line;
});
embodier.canvasdraw.first_layer_num = (function first_layer_num(layers){var num = 0;while(true){
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (num){
return (function (p){if(((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p) == null)))
{return false;
} else
{return true;
}
});})(num))
,cljs.core.nth.call(null,layers,num))))) || ((num > (cljs.core.count.call(null,layers) - 1))))
{return num;
} else
{{
var G__5248 = (num + 1);
num = G__5248;
continue;
}
}
break;
}
});
embodier.canvasdraw.trackball_control = (function trackball_control(cam,render,dom){var control = (new embodier.canvasdraw.THREE.TrackballControls(cam,dom));control.rotateSpeed = 1.0;
control.zoomSpeed = 1.2;
control.panSpeed = 0.8;
control.noZoom = false;
control.noPan = false;
control.staticMoving = true;
control.dynamicDampingFactor = 0.3;
control.keys = [65,83,68];
control.addEventListener("change",render);
return control;
});
embodier.canvasdraw.show_layer = (function show_layer(layers,dom_id,current_layer){var dom = document.getElementById(dom_id);var scene = (new embodier.canvasdraw.THREE.Scene());var width = 640;var height = 480;var camera = (new embodier.canvasdraw.THREE.PerspectiveCamera(75,(width / height),0.1,1000));var renderer = (new embodier.canvasdraw.THREE.CanvasRenderer());var render = ((function (dom,scene,width,height,camera,renderer){
return (function (){return renderer.render(scene,camera);
});})(dom,scene,width,height,camera,renderer))
;var control = embodier.canvasdraw.trackball_control.call(null,camera,render,dom);var animate = ((function (dom,scene,width,height,camera,renderer,render,control){
return (function an(){requestAnimationFrame(an);
return control.update();
});})(dom,scene,width,height,camera,renderer,render,control))
;renderer.setSize(width,height);
dom.innerHTML = "";
dom.appendChild(renderer.domElement);
scene.add(embodier.canvasdraw.draw_line.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),current_layer),65280));
camera.position.y = -25;
camera.position.z = 25;
camera.lookAt((new embodier.canvasdraw.THREE.Vector3(0,0,10)));
return animate.call(null);
});

//# sourceMappingURL=canvasdraw.js.map