// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.canvasdraw');
goog.require('cljs.core');
embodier.canvasdraw.THREE = THREE;
/**
* given a collection of points ({:x ?, :y ?}, ...), returns a threejs ParticleSystem
*/
embodier.canvasdraw.draw_partics = (function draw_partics(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.ParticleSystemMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),color,new cljs.core.Keyword(null,"size","size",1017434995),0.1], null))));var partics = (new embodier.canvasdraw.THREE.ParticleSystem(geo,mat));var points_ = cljs.core.filter.call(null,((function (geo,mat,partics){
return (function (p){if(((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p) == null)))
{return false;
} else
{return true;
}
});})(geo,mat,partics))
,points);var p_list = (function (){var iter__4160__auto__ = ((function (geo,mat,partics,points_){
return (function iter__5566(s__5567){return (new cljs.core.LazySeq(null,((function (geo,mat,partics,points_){
return (function (){var s__5567__$1 = s__5567;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5567__$1);if(temp__4092__auto__)
{var s__5567__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5567__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5567__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5569 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5568 = 0;while(true){
if((i__5568 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__5568);cljs.core.chunk_append.call(null,b__5569,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__5570 = (i__5568 + 1);
i__5568 = G__5570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5569),iter__5566.call(null,cljs.core.chunk_rest.call(null,s__5567__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5569),null);
}
} else
{var p = cljs.core.first.call(null,s__5567__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__5566.call(null,cljs.core.rest.call(null,s__5567__$2)));
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
/**
* given a collection of points ({:x ? :y ? :z ? :e ?} ...), returns a threejs line
*/
embodier.canvasdraw.draw_line = (function draw_line(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.LineBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),color], null))));var line = (new embodier.canvasdraw.THREE.Line(geo,mat));var points_ = cljs.core.filter.call(null,((function (geo,mat,line){
return (function (p){if(((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p) == null)))
{return false;
} else
{return true;
}
});})(geo,mat,line))
,points);var p_list = (function (){var iter__4160__auto__ = ((function (geo,mat,line,points_){
return (function iter__5575(s__5576){return (new cljs.core.LazySeq(null,((function (geo,mat,line,points_){
return (function (){var s__5576__$1 = s__5576;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5576__$1);if(temp__4092__auto__)
{var s__5576__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5576__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5576__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5578 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5577 = 0;while(true){
if((i__5577 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__5577);cljs.core.chunk_append.call(null,b__5578,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__5579 = (i__5577 + 1);
i__5577 = G__5579;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5578),iter__5575.call(null,cljs.core.chunk_rest.call(null,s__5576__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5578),null);
}
} else
{var p = cljs.core.first.call(null,s__5576__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__5575.call(null,cljs.core.rest.call(null,s__5576__$2)));
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
/**
* given the layers of the model, return the number of first layer
*/
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
var G__5580 = (num + 1);
num = G__5580;
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
var G__5581 = (function (){scene.add(embodier.canvasdraw.draw_partics.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),i__$1),170));
return (i__$1 - 1);
})();
i__$1 = G__5581;
continue;
}
}
break;
}
} else
{{
var G__5582 = (function (){scene.remove((children[i]));
return (i - 1);
})();
i = G__5582;
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
/**
* given an array of {:x :y :z} points, find the center point
*/
embodier.canvasdraw.get_center = (function get_center(layers,current_layer){return cljs.core.nth.call(null,(function (){var iter__4160__auto__ = (function iter__5587(s__5588){return (new cljs.core.LazySeq(null,(function (){var s__5588__$1 = s__5588;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5588__$1);if(temp__4092__auto__)
{var s__5588__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5588__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5588__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5590 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5589 = 0;while(true){
if((i__5589 < size__4159__auto__))
{var layer = cljs.core._nth.call(null,c__4158__auto__,i__5589);cljs.core.chunk_append.call(null,b__5590,cljs.core.reduce.call(null,((function (i__5589,layer,c__4158__auto__,size__4159__auto__,b__5590,s__5588__$2,temp__4092__auto__){
return (function (p,p_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"y","y",1013904363),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"z","z",1013904364),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_)))) / 2)], null);
});})(i__5589,layer,c__4158__auto__,size__4159__auto__,b__5590,s__5588__$2,temp__4092__auto__))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"z","z",1013904364),0], null),layer));
{
var G__5591 = (i__5589 + 1);
i__5589 = G__5591;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5590),iter__5587.call(null,cljs.core.chunk_rest.call(null,s__5588__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5590),null);
}
} else
{var layer = cljs.core.first.call(null,s__5588__$2);return cljs.core.cons.call(null,cljs.core.reduce.call(null,((function (layer,s__5588__$2,temp__4092__auto__){
return (function (p,p_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"y","y",1013904363),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"z","z",1013904364),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_)))) / 2)], null);
});})(layer,s__5588__$2,temp__4092__auto__))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"z","z",1013904364),0], null),layer),iter__5587.call(null,cljs.core.rest.call(null,s__5588__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.deref.call(null,layers));
})(),cljs.core.deref.call(null,current_layer));
});
embodier.canvasdraw.show_layer = (function show_layer(layers,dom_id,current_layer,scene,camera,renderer,req_id){var dom = document.getElementById(dom_id);var width = 640;var height = 480;var render = ((function (dom,width,height){
return (function (){return cljs.core.deref.call(null,renderer).render(cljs.core.deref.call(null,scene),cljs.core.deref.call(null,camera));
});})(dom,width,height))
;var control = embodier.canvasdraw.trackball_control.call(null,cljs.core.deref.call(null,camera),render,dom);var center_point = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"z","z",1013904364),10], null);var animate = ((function (dom,width,height,render,control,center_point){
return (function an(){cljs.core.reset_BANG_.call(null,req_id,requestAnimationFrame(an));
control.update();
return render.call(null);
});})(dom,width,height,render,control,center_point))
;cljs.core.deref.call(null,renderer).setSize(width,height);
dom.innerHTML = "";
dom.appendChild(cljs.core.deref.call(null,renderer).domElement);
embodier.canvasdraw.update_scene.call(null,cljs.core.deref.call(null,scene),layers,current_layer);
cljs.core.deref.call(null,camera).position.y = -25;
cljs.core.deref.call(null,camera).position.z = 25;
cljs.core.deref.call(null,camera).lookAt((new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(center_point),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(center_point),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(center_point))));
cancelAnimationFrame(cljs.core.deref.call(null,req_id));
return animate.call(null);
});

//# sourceMappingURL=canvasdraw.js.map