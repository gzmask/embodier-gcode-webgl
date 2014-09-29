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
var action__4832__auto___5460 = (function (params__4833__auto__){if(cljs.core.map_QMARK_.call(null,params__4833__auto__))
{var map__5458 = params__4833__auto__;var map__5458__$1 = ((cljs.core.seq_QMARK_.call(null,map__5458))?cljs.core.apply.call(null,cljs.core.hash_map,map__5458):map__5458);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"svg-file","svg-file",4213353143),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4833__auto__))
{var vec__5459 = params__4833__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"svg-file","svg-file",4213353143),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/svg",action__4832__auto___5460);
/**
* @param {...*} var_args
*/
embodier.core.upload = (function() { 
var upload__delegate = function (args__4831__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/svg",args__4831__auto__);
};
var upload = function (var_args){
var args__4831__auto__ = null;if (arguments.length > 0) {
  args__4831__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return upload__delegate.call(this,args__4831__auto__);};
upload.cljs$lang$maxFixedArity = 0;
upload.cljs$lang$applyTo = (function (arglist__5461){
var args__4831__auto__ = cljs.core.seq(arglist__5461);
return upload__delegate(args__4831__auto__);
});
upload.cljs$core$IFn$_invoke$arity$variadic = upload__delegate;
return upload;
})()
;
var action__4832__auto___5464 = (function (params__4833__auto__){if(cljs.core.map_QMARK_.call(null,params__4833__auto__))
{var map__5462 = params__4833__auto__;var map__5462__$1 = ((cljs.core.seq_QMARK_.call(null,map__5462))?cljs.core.apply.call(null,cljs.core.hash_map,map__5462):map__5462);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4833__auto__))
{var vec__5463 = params__4833__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gcode",action__4832__auto___5464);
/**
* @param {...*} var_args
*/
embodier.core.upload = (function() { 
var upload__delegate = function (args__4831__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/gcode",args__4831__auto__);
};
var upload = function (var_args){
var args__4831__auto__ = null;if (arguments.length > 0) {
  args__4831__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return upload__delegate.call(this,args__4831__auto__);};
upload.cljs$lang$maxFixedArity = 0;
upload.cljs$lang$applyTo = (function (arglist__5465){
var args__4831__auto__ = cljs.core.seq(arglist__5465);
return upload__delegate(args__4831__auto__);
});
upload.cljs$core$IFn$_invoke$arity$variadic = upload__delegate;
return upload;
})()
;
var action__4832__auto___5468 = (function (params__4833__auto__){if(cljs.core.map_QMARK_.call(null,params__4833__auto__))
{var map__5466 = params__4833__auto__;var map__5466__$1 = ((cljs.core.seq_QMARK_.call(null,map__5466))?cljs.core.apply.call(null,cljs.core.hash_map,map__5466):map__5466);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4833__auto__))
{var vec__5467 = params__4833__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/layers",action__4832__auto___5468);
/**
* @param {...*} var_args
*/
embodier.core.layers = (function() { 
var layers__delegate = function (args__4831__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/layers",args__4831__auto__);
};
var layers = function (var_args){
var args__4831__auto__ = null;if (arguments.length > 0) {
  args__4831__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return layers__delegate.call(this,args__4831__auto__);};
layers.cljs$lang$maxFixedArity = 0;
layers.cljs$lang$applyTo = (function (arglist__5469){
var args__4831__auto__ = cljs.core.seq(arglist__5469);
return layers__delegate(args__4831__auto__);
});
layers.cljs$core$IFn$_invoke$arity$variadic = layers__delegate;
return layers;
})()
;
var action__4832__auto___5472 = (function (params__4833__auto__){if(cljs.core.map_QMARK_.call(null,params__4833__auto__))
{var map__5470 = params__4833__auto__;var map__5470__$1 = ((cljs.core.seq_QMARK_.call(null,map__5470))?cljs.core.apply.call(null,cljs.core.hash_map,map__5470):map__5470);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4833__auto__))
{var vec__5471 = params__4833__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4832__auto___5472);
embodier.core.history = (new goog.History());
goog.events.listen(embodier.core.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
embodier.core.history.setEnabled(true);

//# sourceMappingURL=core.js.map