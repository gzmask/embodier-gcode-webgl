// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.canvasdraw');
goog.require('cljs.core');
embodier.canvasdraw.THREE = THREE;
/**
* given a collection of points ({:x ?, :y ?}, ...), returns a threejs ParticleSystem
*/
embodier.canvasdraw.three_partics = (function three_partics(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.ParticleBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),0.2,new cljs.core.Keyword(null,"color","color",1108746965),color], null))));var points_ = cljs.core.filter.call(null,((function (geo,mat){
return (function (p){if(((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p) == null)) || ((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p) == null)))
{return false;
} else
{return true;
}
});})(geo,mat))
,points);var p_list = (function (){var iter__4160__auto__ = ((function (geo,mat,points_){
return (function iter__13429(s__13430){return (new cljs.core.LazySeq(null,((function (geo,mat,points_){
return (function (){var s__13430__$1 = s__13430;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13430__$1);if(temp__4092__auto__)
{var s__13430__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13430__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13430__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13432 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13431 = 0;while(true){
if((i__13431 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__13431);cljs.core.chunk_append.call(null,b__13432,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__13433 = (i__13431 + 1);
i__13431 = G__13433;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13432),iter__13429.call(null,cljs.core.chunk_rest.call(null,s__13430__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13432),null);
}
} else
{var p = cljs.core.first.call(null,s__13430__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__13429.call(null,cljs.core.rest.call(null,s__13430__$2)));
}
} else
{return null;
}
break;
}
});})(geo,mat,points_))
,null,null));
});})(geo,mat,points_))
;return iter__4160__auto__.call(null,points_);
})();var setup = geo.vertices = cljs.core.apply.call(null,cljs.core.array,p_list);var partics = (new embodier.canvasdraw.THREE.ParticleSystem(geo,mat));return partics;
});
/**
* given two of points ({:x ? :y ? :z ?} ...), returns a threejs line
*/
embodier.canvasdraw.three_line = (function three_line(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.LineBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),color], null))));var line = (new embodier.canvasdraw.THREE.Line(geo,mat));var p_list = (function (){var iter__4160__auto__ = ((function (geo,mat,line){
return (function iter__13438(s__13439){return (new cljs.core.LazySeq(null,((function (geo,mat,line){
return (function (){var s__13439__$1 = s__13439;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13439__$1);if(temp__4092__auto__)
{var s__13439__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13439__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13439__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13441 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13440 = 0;while(true){
if((i__13440 < size__4159__auto__))
{var p = cljs.core._nth.call(null,c__4158__auto__,i__13440);cljs.core.chunk_append.call(null,b__13441,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__13442 = (i__13440 + 1);
i__13440 = G__13442;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13441),iter__13438.call(null,cljs.core.chunk_rest.call(null,s__13439__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13441),null);
}
} else
{var p = cljs.core.first.call(null,s__13439__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__13438.call(null,cljs.core.rest.call(null,s__13439__$2)));
}
} else
{return null;
}
break;
}
});})(geo,mat,line))
,null,null));
});})(geo,mat,line))
;return iter__4160__auto__.call(null,points);
})();geo.vertices = cljs.core.apply.call(null,cljs.core.array,p_list);
return line;
});
/**
* given cmds with :next, add lines to scene in pairs accordingly
*/
embodier.canvasdraw.draw_lines = (function draw_lines(cmds,scene,color){var seq__13447 = cljs.core.seq.call(null,cmds);var chunk__13448 = null;var count__13449 = 0;var i__13450 = 0;while(true){
if((i__13450 < count__13449))
{var cmd = cljs.core._nth.call(null,chunk__13448,i__13450);if(!((new cljs.core.Keyword(null,"next","next",1017282149).cljs$core$IFn$_invoke$arity$1(cmd) == null)))
{var p_13451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,cljs.core.nth.call(null,cmds,new cljs.core.Keyword(null,"next","next",1017282149).cljs$core$IFn$_invoke$arity$1(cmd))], null);scene.add(embodier.canvasdraw.three_line.call(null,p_13451,color));
} else
{}
{
var G__13452 = seq__13447;
var G__13453 = chunk__13448;
var G__13454 = count__13449;
var G__13455 = (i__13450 + 1);
seq__13447 = G__13452;
chunk__13448 = G__13453;
count__13449 = G__13454;
i__13450 = G__13455;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13447);if(temp__4092__auto__)
{var seq__13447__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13447__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__13447__$1);{
var G__13456 = cljs.core.chunk_rest.call(null,seq__13447__$1);
var G__13457 = c__4191__auto__;
var G__13458 = cljs.core.count.call(null,c__4191__auto__);
var G__13459 = 0;
seq__13447 = G__13456;
chunk__13448 = G__13457;
count__13449 = G__13458;
i__13450 = G__13459;
continue;
}
} else
{var cmd = cljs.core.first.call(null,seq__13447__$1);if(!((new cljs.core.Keyword(null,"next","next",1017282149).cljs$core$IFn$_invoke$arity$1(cmd) == null)))
{var p_13460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,cljs.core.nth.call(null,cmds,new cljs.core.Keyword(null,"next","next",1017282149).cljs$core$IFn$_invoke$arity$1(cmd))], null);scene.add(embodier.canvasdraw.three_line.call(null,p_13460,color));
} else
{}
{
var G__13461 = cljs.core.next.call(null,seq__13447__$1);
var G__13462 = null;
var G__13463 = 0;
var G__13464 = 0;
seq__13447 = G__13461;
chunk__13448 = G__13462;
count__13449 = G__13463;
i__13450 = G__13464;
continue;
}
}
} else
{return null;
}
}
break;
}
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
var G__13465 = (num + 1);
num = G__13465;
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
/**
* add layers from file-api into the scene
*/
embodier.canvasdraw.update_scene = (function update_scene(scene,layers,current_layer){var children = scene.children;var i = (cljs.core.count.call(null,children) - 1);while(true){
if((i < 0))
{embodier.canvasdraw.draw_lines.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),cljs.core.deref.call(null,current_layer)),scene,65280);
var i__$1 = (cljs.core.deref.call(null,current_layer) - 1);while(true){
if((i__$1 < 0))
{return null;
} else
{{
var G__13466 = (function (){scene.add(embodier.canvasdraw.three_partics.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),i__$1),136));
return (i__$1 - 1);
})();
i__$1 = G__13466;
continue;
}
}
break;
}
} else
{{
var G__13467 = (function (){scene.remove((children[i]));
return (i - 1);
})();
i = G__13467;
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
embodier.canvasdraw.get_center = (function get_center(layers,current_layer){return cljs.core.nth.call(null,(function (){var iter__4160__auto__ = (function iter__13472(s__13473){return (new cljs.core.LazySeq(null,(function (){var s__13473__$1 = s__13473;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13473__$1);if(temp__4092__auto__)
{var s__13473__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13473__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13473__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13475 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13474 = 0;while(true){
if((i__13474 < size__4159__auto__))
{var layer = cljs.core._nth.call(null,c__4158__auto__,i__13474);cljs.core.chunk_append.call(null,b__13475,cljs.core.reduce.call(null,((function (i__13474,layer,c__4158__auto__,size__4159__auto__,b__13475,s__13473__$2,temp__4092__auto__){
return (function (p,p_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"y","y",1013904363),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"z","z",1013904364),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_)))) / 2)], null);
});})(i__13474,layer,c__4158__auto__,size__4159__auto__,b__13475,s__13473__$2,temp__4092__auto__))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"z","z",1013904364),0], null),layer));
{
var G__13476 = (i__13474 + 1);
i__13474 = G__13476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13475),iter__13472.call(null,cljs.core.chunk_rest.call(null,s__13473__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13475),null);
}
} else
{var layer = cljs.core.first.call(null,s__13473__$2);return cljs.core.cons.call(null,cljs.core.reduce.call(null,((function (layer,s__13473__$2,temp__4092__auto__){
return (function (p,p_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"y","y",1013904363),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_)))) / 2),new cljs.core.Keyword(null,"z","z",1013904364),(((cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))) + (cljs.core.truth_(embodier.canvasdraw.NaN_QMARK_.call(null,parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_))))?0:parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_)))) / 2)], null);
});})(layer,s__13473__$2,temp__4092__auto__))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"z","z",1013904364),0], null),layer),iter__13472.call(null,cljs.core.rest.call(null,s__13473__$2)));
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