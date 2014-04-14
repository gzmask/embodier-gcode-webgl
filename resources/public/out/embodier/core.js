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
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
var action__4804__auto___31303 = (function (params__4805__auto__){if(cljs.core.map_QMARK_.call(null,params__4805__auto__))
{var map__31301 = params__4805__auto__;var map__31301__$1 = ((cljs.core.seq_QMARK_.call(null,map__31301))?cljs.core.apply.call(null,cljs.core.hash_map,map__31301):map__31301);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4805__auto__))
{var vec__31302 = params__4805__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/upload",action__4804__auto___31303);
/**
* @param {...*} var_args
*/
embodier.core.upload = (function() { 
var upload__delegate = function (args__4803__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/upload",args__4803__auto__);
};
var upload = function (var_args){
var args__4803__auto__ = null;if (arguments.length > 0) {
  args__4803__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return upload__delegate.call(this,args__4803__auto__);};
upload.cljs$lang$maxFixedArity = 0;
upload.cljs$lang$applyTo = (function (arglist__31304){
var args__4803__auto__ = cljs.core.seq(arglist__31304);
return upload__delegate(args__4803__auto__);
});
upload.cljs$core$IFn$_invoke$arity$variadic = upload__delegate;
return upload;
})()
;
var action__4804__auto___31307 = (function (params__4805__auto__){if(cljs.core.map_QMARK_.call(null,params__4805__auto__))
{var map__31305 = params__4805__auto__;var map__31305__$1 = ((cljs.core.seq_QMARK_.call(null,map__31305))?cljs.core.apply.call(null,cljs.core.hash_map,map__31305):map__31305);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4805__auto__))
{var vec__31306 = params__4805__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/layers",action__4804__auto___31307);
/**
* @param {...*} var_args
*/
embodier.core.layers = (function() { 
var layers__delegate = function (args__4803__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/layers",args__4803__auto__);
};
var layers = function (var_args){
var args__4803__auto__ = null;if (arguments.length > 0) {
  args__4803__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return layers__delegate.call(this,args__4803__auto__);};
layers.cljs$lang$maxFixedArity = 0;
layers.cljs$lang$applyTo = (function (arglist__31308){
var args__4803__auto__ = cljs.core.seq(arglist__31308);
return layers__delegate(args__4803__auto__);
});
layers.cljs$core$IFn$_invoke$arity$variadic = layers__delegate;
return layers;
})()
;
var action__4804__auto___31311 = (function (params__4805__auto__){if(cljs.core.map_QMARK_.call(null,params__4805__auto__))
{var map__31309 = params__4805__auto__;var map__31309__$1 = ((cljs.core.seq_QMARK_.call(null,map__31309))?cljs.core.apply.call(null,cljs.core.hash_map,map__31309):map__31309);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4805__auto__))
{var vec__31310 = params__4805__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4804__auto___31311);
embodier.core.history = (new goog.History());
goog.events.listen(embodier.core.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
embodier.core.history.setEnabled(true);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.app], null),document.body);

//# sourceMappingURL=core.js.map