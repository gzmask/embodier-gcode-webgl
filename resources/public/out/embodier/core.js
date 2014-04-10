// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.core');
goog.require('cljs.core');
goog.require('embodier.webcomponents');
goog.require('goog.History');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.history.EventType');
goog.require('embodier.webcomponents');
goog.require('goog.events');
goog.require('secretary.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
var action__4367__auto___5811 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__5809 = params__4368__auto__;var map__5809__$1 = ((cljs.core.seq_QMARK_.call(null,map__5809))?cljs.core.apply.call(null,cljs.core.hash_map,map__5809):map__5809);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__5810 = params__4368__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/upload",action__4367__auto___5811);
var action__4367__auto___5814 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__5812 = params__4368__auto__;var map__5812__$1 = ((cljs.core.seq_QMARK_.call(null,map__5812))?cljs.core.apply.call(null,cljs.core.hash_map,map__5812):map__5812);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__5813 = params__4368__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/layers",action__4367__auto___5814);
var action__4367__auto___5817 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__5815 = params__4368__auto__;var map__5815__$1 = ((cljs.core.seq_QMARK_.call(null,map__5815))?cljs.core.apply.call(null,cljs.core.hash_map,map__5815):map__5815);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,embodier.webcomponents.default$);
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__5816 = params__4368__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,embodier.webcomponents.default$);
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4367__auto___5817);
embodier.core.history = (new goog.History());
goog.events.listen(embodier.core.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
embodier.core.history.setEnabled(true);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.app], null),document.body);

//# sourceMappingURL=core.js.map