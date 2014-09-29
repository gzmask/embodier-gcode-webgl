// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.core');
goog.require('cljs.core');
goog.require('embodier.webcomponents');
goog.require('goog.History');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('embodier.canvasdraw');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.history.EventType');
goog.require('embodier.canvasdraw');
goog.require('embodier.webcomponents');
goog.require('goog.events');
goog.require('secretary.core');
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.app], null),document.body);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
var action__4840__auto___7100 = (function (params__4841__auto__){if(cljs.core.map_QMARK_.call(null,params__4841__auto__))
{var map__7098 = params__4841__auto__;var map__7098__$1 = ((cljs.core.seq_QMARK_.call(null,map__7098))?cljs.core.apply.call(null,cljs.core.hash_map,map__7098):map__7098);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"svg-file","svg-file",4213353143),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4841__auto__))
{var vec__7099 = params__4841__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"svg-file","svg-file",4213353143),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/svg",action__4840__auto___7100);
/**
* @param {...*} var_args
*/
embodier.core.upload = (function() { 
var upload__delegate = function (args__4839__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/svg",args__4839__auto__);
};
var upload = function (var_args){
var args__4839__auto__ = null;if (arguments.length > 0) {
  args__4839__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return upload__delegate.call(this,args__4839__auto__);};
upload.cljs$lang$maxFixedArity = 0;
upload.cljs$lang$applyTo = (function (arglist__7101){
var args__4839__auto__ = cljs.core.seq(arglist__7101);
return upload__delegate(args__4839__auto__);
});
upload.cljs$core$IFn$_invoke$arity$variadic = upload__delegate;
return upload;
})()
;
var action__4840__auto___7104 = (function (params__4841__auto__){if(cljs.core.map_QMARK_.call(null,params__4841__auto__))
{var map__7102 = params__4841__auto__;var map__7102__$1 = ((cljs.core.seq_QMARK_.call(null,map__7102))?cljs.core.apply.call(null,cljs.core.hash_map,map__7102):map__7102);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4841__auto__))
{var vec__7103 = params__4841__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gcode",action__4840__auto___7104);
/**
* @param {...*} var_args
*/
embodier.core.upload = (function() { 
var upload__delegate = function (args__4839__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/gcode",args__4839__auto__);
};
var upload = function (var_args){
var args__4839__auto__ = null;if (arguments.length > 0) {
  args__4839__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return upload__delegate.call(this,args__4839__auto__);};
upload.cljs$lang$maxFixedArity = 0;
upload.cljs$lang$applyTo = (function (arglist__7105){
var args__4839__auto__ = cljs.core.seq(arglist__7105);
return upload__delegate(args__4839__auto__);
});
upload.cljs$core$IFn$_invoke$arity$variadic = upload__delegate;
return upload;
})()
;
var action__4840__auto___7108 = (function (params__4841__auto__){if(cljs.core.map_QMARK_.call(null,params__4841__auto__))
{var map__7106 = params__4841__auto__;var map__7106__$1 = ((cljs.core.seq_QMARK_.call(null,map__7106))?cljs.core.apply.call(null,cljs.core.hash_map,map__7106):map__7106);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4841__auto__))
{var vec__7107 = params__4841__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/layers",action__4840__auto___7108);
/**
* @param {...*} var_args
*/
embodier.core.layers = (function() { 
var layers__delegate = function (args__4839__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/layers",args__4839__auto__);
};
var layers = function (var_args){
var args__4839__auto__ = null;if (arguments.length > 0) {
  args__4839__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return layers__delegate.call(this,args__4839__auto__);};
layers.cljs$lang$maxFixedArity = 0;
layers.cljs$lang$applyTo = (function (arglist__7109){
var args__4839__auto__ = cljs.core.seq(arglist__7109);
return layers__delegate(args__4839__auto__);
});
layers.cljs$core$IFn$_invoke$arity$variadic = layers__delegate;
return layers;
})()
;
var action__4840__auto___7112 = (function (params__4841__auto__){if(cljs.core.map_QMARK_.call(null,params__4841__auto__))
{var map__7110 = params__4841__auto__;var map__7110__$1 = ((cljs.core.seq_QMARK_.call(null,map__7110))?cljs.core.apply.call(null,cljs.core.hash_map,map__7110):map__7110);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4841__auto__))
{var vec__7111 = params__4841__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4840__auto___7112);
embodier.core.history = (new goog.History());
goog.events.listen(embodier.core.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
embodier.core.history.setEnabled(true);
embodier.canvasdraw.show_layer.call(null,embodier.webcomponents.layers,"layer-view-before",embodier.webcomponents.current_layer_num);

//# sourceMappingURL=core.js.map