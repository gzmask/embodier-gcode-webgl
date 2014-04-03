// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('secretary.core');
var action__4952__auto___5109 = (function (params__4953__auto__){if(cljs.core.map_QMARK_.call(null,params__4953__auto__))
{var map__5107 = params__4953__auto__;var map__5107__$1 = ((cljs.core.seq_QMARK_.call(null,map__5107))?cljs.core.apply.call(null,cljs.core.hash_map,map__5107):map__5107);var params = map__5107__$1;return console.log([cljs.core.str("User: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(params))].join(''));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4953__auto__))
{var map__5108 = params__4953__auto__;var map__5108__$1 = ((cljs.core.seq_QMARK_.call(null,map__5108))?cljs.core.apply.call(null,cljs.core.hash_map,map__5108):map__5108);var params = map__5108__$1;return console.log([cljs.core.str("User: "),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(params))].join(''));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/users/:id",action__4952__auto___5109);
secretary.core.dispatch_BANG_.call(null,"/users/gf3");

//# sourceMappingURL=routes.js.map