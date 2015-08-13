// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.canvasdraw');
goog.require('cljs.core');
embodier.canvasdraw.THREE = THREE;
embodier.canvasdraw.notify = (function notify(text){return document.getElementById("notification").innerHTML = text;
});
/**
* given a collection of points ({:x ?, :y ?}, ...), returns a threejs ParticleSystem
*/
embodier.canvasdraw.three_partics = (function three_partics(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.ParticleBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),0.2,new cljs.core.Keyword(null,"color","color",1108746965),color], null))));var p_list = (function (){var iter__4158__auto__ = ((function (geo,mat){
return (function iter__4795(s__4796){return (new cljs.core.LazySeq(null,((function (geo,mat){
return (function (){var s__4796__$1 = s__4796;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4796__$1);if(temp__4092__auto__)
{var s__4796__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4796__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__4796__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__4798 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__4797 = 0;while(true){
if((i__4797 < size__4157__auto__))
{var p = cljs.core._nth.call(null,c__4156__auto__,i__4797);cljs.core.chunk_append.call(null,b__4798,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__4799 = (i__4797 + 1);
i__4797 = G__4799;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4798),iter__4795.call(null,cljs.core.chunk_rest.call(null,s__4796__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4798),null);
}
} else
{var p = cljs.core.first.call(null,s__4796__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__4795.call(null,cljs.core.rest.call(null,s__4796__$2)));
}
} else
{return null;
}
break;
}
});})(geo,mat))
,null,null));
});})(geo,mat))
;return iter__4158__auto__.call(null,points);
})();var setup = geo.vertices = cljs.core.apply.call(null,cljs.core.array,p_list);var partics = (new embodier.canvasdraw.THREE.ParticleSystem(geo,mat));return partics;
});
/**
* given two of points ({:x ? :y ? :z ?} ...), returns a threejs line
*/
embodier.canvasdraw.three_line = (function three_line(points,color){var geo = (new embodier.canvasdraw.THREE.Geometry());var mat = (new embodier.canvasdraw.THREE.LineBasicMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),color], null))));var line = (new embodier.canvasdraw.THREE.Line(geo,mat));var p_list = (function (){var iter__4158__auto__ = ((function (geo,mat,line){
return (function iter__4804(s__4805){return (new cljs.core.LazySeq(null,((function (geo,mat,line){
return (function (){var s__4805__$1 = s__4805;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__4805__$1);if(temp__4092__auto__)
{var s__4805__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__4805__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__4805__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__4807 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__4806 = 0;while(true){
if((i__4806 < size__4157__auto__))
{var p = cljs.core._nth.call(null,c__4156__auto__,i__4806);cljs.core.chunk_append.call(null,b__4807,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))));
{
var G__4808 = (i__4806 + 1);
i__4806 = G__4808;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4807),iter__4804.call(null,cljs.core.chunk_rest.call(null,s__4805__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4807),null);
}
} else
{var p = cljs.core.first.call(null,s__4805__$2);return cljs.core.cons.call(null,(new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p))),iter__4804.call(null,cljs.core.rest.call(null,s__4805__$2)));
}
} else
{return null;
}
break;
}
});})(geo,mat,line))
,null,null));
});})(geo,mat,line))
;return iter__4158__auto__.call(null,points);
})();geo.vertices = cljs.core.apply.call(null,cljs.core.array,p_list);
return line;
});
/**
* given cmds with :next, add lines to scene in pairs accordingly
*/
embodier.canvasdraw.draw_lines = (function draw_lines(cmds,scene,color){var seq__4813 = cljs.core.seq.call(null,cmds);var chunk__4814 = null;var count__4815 = 0;var i__4816 = 0;while(true){
if((i__4816 < count__4815))
{var cmd = cljs.core._nth.call(null,chunk__4814,i__4816);if(!((new cljs.core.Keyword(null,"next","next",1017282149).cljs$core$IFn$_invoke$arity$1(cmd) == null)))
{var p_4817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,cljs.core.nth.call(null,cmds,new cljs.core.Keyword(null,"next","next",1017282149).cljs$core$IFn$_invoke$arity$1(cmd))], null);scene.add(embodier.canvasdraw.three_line.call(null,p_4817,color));
} else
{}
{
var G__4818 = seq__4813;
var G__4819 = chunk__4814;
var G__4820 = count__4815;
var G__4821 = (i__4816 + 1);
seq__4813 = G__4818;
chunk__4814 = G__4819;
count__4815 = G__4820;
i__4816 = G__4821;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4813);if(temp__4092__auto__)
{var seq__4813__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4813__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__4813__$1);{
var G__4822 = cljs.core.chunk_rest.call(null,seq__4813__$1);
var G__4823 = c__4189__auto__;
var G__4824 = cljs.core.count.call(null,c__4189__auto__);
var G__4825 = 0;
seq__4813 = G__4822;
chunk__4814 = G__4823;
count__4815 = G__4824;
i__4816 = G__4825;
continue;
}
} else
{var cmd = cljs.core.first.call(null,seq__4813__$1);if(!((new cljs.core.Keyword(null,"next","next",1017282149).cljs$core$IFn$_invoke$arity$1(cmd) == null)))
{var p_4826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,cljs.core.nth.call(null,cmds,new cljs.core.Keyword(null,"next","next",1017282149).cljs$core$IFn$_invoke$arity$1(cmd))], null);scene.add(embodier.canvasdraw.three_line.call(null,p_4826,color));
} else
{}
{
var G__4827 = cljs.core.next.call(null,seq__4813__$1);
var G__4828 = null;
var G__4829 = 0;
var G__4830 = 0;
seq__4813 = G__4827;
chunk__4814 = G__4828;
count__4815 = G__4829;
i__4816 = G__4830;
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
{embodier.canvasdraw.draw_lines.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),cljs.core.deref.call(null,current_layer)),scene,0);
var i__$1 = (cljs.core.deref.call(null,current_layer) - 1);while(true){
if((i__$1 < 0))
{return embodier.canvasdraw.notify.call(null,"Render is done.");
} else
{{
var G__4831 = (function (){scene.add(embodier.canvasdraw.three_partics.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,layers),i__$1),5592405));
return (i__$1 - 1);
})();
i__$1 = G__4831;
continue;
}
}
break;
}
} else
{{
var G__4832 = (function (){scene.remove((children[i]));
return (i - 1);
})();
i = G__4832;
continue;
}
}
break;
}
});
embodier.canvasdraw.NaN_QMARK_ = (function NaN_QMARK_(node){var and__3429__auto__ = cljs.core._EQ_.call(null,toString.call(node),[cljs.core.str("[object Number]")].join(''));if(and__3429__auto__)
{return eval([cljs.core.str(node),cljs.core.str(" != +"),cljs.core.str(node)].join(''));
} else
{return and__3429__auto__;
}
});
/**
* given an array of {:x :y :z} points, find the center point
*/
embodier.canvasdraw.get_center = (function get_center(cmds){return cljs.core.reduce.call(null,(function (p,p_){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),((parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p)) + parseInt(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p_))) / 2),new cljs.core.Keyword(null,"y","y",1013904363),((parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p)) + parseInt(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p_))) / 2),new cljs.core.Keyword(null,"z","z",1013904364),((parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p)) + parseInt(new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(p_))) / 2)], null);
}),cmds);
});
embodier.canvasdraw.width = 640;
embodier.canvasdraw.height = 480;
embodier.canvasdraw.scene = (new embodier.canvasdraw.THREE.Scene());
embodier.canvasdraw.camera = (new embodier.canvasdraw.THREE.PerspectiveCamera(75,(embodier.canvasdraw.width / embodier.canvasdraw.height),0.1,1000));
embodier.canvasdraw.camera.position.y = -25;
embodier.canvasdraw.camera.position.z = 25;
embodier.canvasdraw.renderer = (new embodier.canvasdraw.THREE.WebGLRenderer());
embodier.canvasdraw.renderer.setClearColorHex(13421772,1);
embodier.canvasdraw.show_layer = (function show_layer(layers,dom_id,current_layer,req_id){var dom = document.getElementById(dom_id);var center_point = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0,new cljs.core.Keyword(null,"z","z",1013904364),0], null);var render = ((function (dom,center_point){
return (function (){return embodier.canvasdraw.renderer.render(embodier.canvasdraw.scene,embodier.canvasdraw.camera);
});})(dom,center_point))
;var control = embodier.canvasdraw.trackball_control.call(null,embodier.canvasdraw.camera,render,dom);var animate = ((function (dom,center_point,render,control){
return (function an(){cljs.core.reset_BANG_.call(null,req_id,requestAnimationFrame(an));
control.update();
return render.call(null);
});})(dom,center_point,render,control))
;embodier.canvasdraw.renderer.setSize(embodier.canvasdraw.width,embodier.canvasdraw.height);
dom.innerHTML = "";
dom.appendChild(embodier.canvasdraw.renderer.domElement);
embodier.canvasdraw.update_scene.call(null,embodier.canvasdraw.scene,layers,current_layer);
control.target = (new embodier.canvasdraw.THREE.Vector3(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(center_point),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(center_point),new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(center_point)));
cancelAnimationFrame(cljs.core.deref.call(null,req_id));
return animate.call(null);
});

//# sourceMappingURL=canvasdraw.js.map