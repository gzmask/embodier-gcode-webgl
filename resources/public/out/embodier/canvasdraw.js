// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.canvasdraw');
goog.require('cljs.core');
embodier.canvasdraw.THREE = THREE;
embodier.canvasdraw.draw_partics = (function draw_partics(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.ParticleSystemMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),color,new cljs.core.Keyword(null,"size","size",1017434995),0.1], null))));var partics = (new embodier.canvasdraw.THREE.ParticleSystem(geo,mat));var points_ = cljs.core.filter.call(null,((function (geo,mat,partics){
return (function (p){if(((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p) == null)))
{return false;
} else
{return true;
}
});})(geo,mat,partics))
,points);var p_list = (function (){var iter__4160__auto__ = ((function (geo,mat,partics,points_){
return (function iter__7133(s__7134){return (new cljs.core.LazySeq(null,((function (geo,mat,partics,points_){
return (function (){var s__7134__$1 = s__7134;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7134__$1);if(temp__4092__auto__)
{var s__7134__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7134__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7134__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7136 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7135 = 0;while(true){
if((i__7135 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__7135);cljs.core.chunk_append.call(null,b__7136,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__7137 = (i__7135 + 1);
i__7135 = G__7137;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7136),iter__7133.call(null,cljs.core.chunk_rest.call(null,s__7134__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7136),null);
}
} else
{var p = cljs.core.first.call(null,s__7134__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__7133.call(null,cljs.core.rest.call(null,s__7134__$2)));
}
} else
{return null;
}
break;
}
});})(geo,mat,partics,points_))
,null,null));
});})(geo,mat,partics,points_))
;return iter__4160__auto__.call(null,points_);
})();geo.vertices = cljs.core.apply.call(null,cljs.core.array,p_list);
return partics;
});
embodier.canvasdraw.draw_line = (function draw_line(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.LineBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),color], null))));var line = (new embodier.canvasdraw.THREE.Line(geo,mat));var points_ = cljs.core.filter.call(null,((function (geo,mat,line){
return (function (p){if(((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p) == null)))
{return false;
} else
{return true;
}
});})(geo,mat,line))
,points);var p_list = (function (){var iter__4160__auto__ = ((function (geo,mat,line,points_){
return (function iter__7142(s__7143){return (new cljs.core.LazySeq(null,((function (geo,mat,line,points_){
return (function (){var s__7143__$1 = s__7143;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7143__$1);if(temp__4092__auto__)
{var s__7143__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7143__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7143__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7145 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7144 = 0;while(true){
if((i__7144 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__7144);cljs.core.chunk_append.call(null,b__7145,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__7146 = (i__7144 + 1);
i__7144 = G__7146;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7145),iter__7142.call(null,cljs.core.chunk_rest.call(null,s__7143__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7145),null);
}
} else
{var p = cljs.core.first.call(null,s__7143__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__7142.call(null,cljs.core.rest.call(null,s__7143__$2)));
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
var G__7147 = (num + 1);
num = G__7147;
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
embodier.canvasdraw.update_scene = (function update_scene(scene,layers,current_layer){var children = scene.children;var i = (cljs.core.count.call(null,children) - 1);while(true){
if((i < 0))
{scene.add(embodier.canvasdraw.draw_line.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),cljs.core.deref.call(null,current_layer)),65280));
var i__$1 = (cljs.core.deref.call(null,current_layer) - 1);while(true){
if((i__$1 < 0))
{return null;
} else
{{
var G__7148 = (function (){scene.add(embodier.canvasdraw.draw_partics.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),i__$1),170));
return (i__$1 - 1);
})();
i__$1 = G__7148;
continue;
}
}
break;
}
} else
{{
var G__7149 = (function (){scene.remove((children[i]));
return (i - 1);
})();
i = G__7149;
continue;
}
}
break;
}
});
embodier.canvasdraw.NaN_QMARK_ = (function NaN_QMARK_(node){var and__3431__auto__ = cljs.core._EQ_.call(null,toString.call(node),[cljs.core.str("[object Number]")].join(''));if(and__3431__auto__)
{return eval([cljs.core.str(node),cljs.core.str(" != +"),cljs.core.str(node)].join(''));
} else
{return and__3431__auto__;
}
});
embodier.canvasdraw.get_center = (function get_center(layers,current_layer){cljs.core.nth.call(null,(function (){var iter__4160__auto__ = (function iter__7154(s__7155){return (new cljs.core.LazySeq(null,(function (){var s__7155__$1 = s__7155;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7155__$1);if(temp__4092__auto__)
{var s__7155__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7155__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7155__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7157 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7156 = 0;while(true){
if((i__7156 < size__4159__auto__))
{var layer = cljs.core._nth.call(null,c__4158__auto__,i__7156);cljs.core.chunk_append.call(null,b__7157,cljs.core.reduce.call(null,((function (i__7156,layer,c__4158__auto__,size__4159__auto__,b__7157,s__7155__$2,temp__4092__auto__){
return (function (p,p_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"y","y",1013904363),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"z","z",1013904364),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_)))) / 2)], null);
});})(i__7156,layer,c__4158__auto__,size__4159__auto__,b__7157,s__7155__$2,temp__4092__auto__))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"z","z",1013904364),0], null),layer));
{
var G__7158 = (i__7156 + 1);
i__7156 = G__7158;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7157),iter__7154.call(null,cljs.core.chunk_rest.call(null,s__7155__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7157),null);
}
} else
{var layer = cljs.core.first.call(null,s__7155__$2);return cljs.core.cons.call(null,cljs.core.reduce.call(null,((function (layer,s__7155__$2,temp__4092__auto__){
return (function (p,p_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"y","y",1013904363),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"z","z",1013904364),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_)))) / 2)], null);
});})(layer,s__7155__$2,temp__4092__auto__))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"z","z",1013904364),0], null),layer),iter__7154.call(null,cljs.core.rest.call(null,s__7155__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.deref.call(null,layers));
})());
return cljs.core.deref.call(null,current_layer);
});
embodier.canvasdraw.show_layer = (function show_layer(layers,dom_id,current_layer){var dom = document.getElementById(dom_id);var scene = (new embodier.canvasdraw.THREE.Scene());var width = 640;var height = 480;var camera = (new embodier.canvasdraw.THREE.PerspectiveCamera(75,(width / height),0.1,1000));var renderer = (new embodier.canvasdraw.THREE.WebGLRenderer());var render = ((function (dom,scene,width,height,camera,renderer){
return (function (){return renderer.render(scene,camera);
});})(dom,scene,width,height,camera,renderer))
;var control = embodier.canvasdraw.trackball_control.call(null,camera,render,dom);var center_point = embodier.canvasdraw.get_center.call(null,layers,current_layer);var animate = ((function (dom,scene,width,height,camera,renderer,render,control,center_point){
return (function an(){requestAnimationFrame(an);
control.update();
return render.call(null);
});})(dom,scene,width,height,camera,renderer,render,control,center_point))
;renderer.setSize(width,height);
dom.innerHTML = "";
dom.appendChild(renderer.domElement);
embodier.canvasdraw.update_scene.call(null,scene,layers,current_layer);
camera.position.y = -25;
camera.position.z = 25;
camera.lookAt((new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(center_point),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(center_point),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(center_point))));
return animate.call(null);
});

//# sourceMappingURL=canvasdraw.js.map