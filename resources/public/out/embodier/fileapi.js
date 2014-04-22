// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
embodier.fileapi.last_extrusion = (function last_extrusion(layers_cmds){var iter__4160__auto__ = (function iter__6270(s__6271){return (new cljs.core.LazySeq(null,(function (){var s__6271__$1 = s__6271;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6271__$1);if(temp__4092__auto__)
{var s__6271__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6271__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6271__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6273 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6272 = 0;while(true){
if((i__6272 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__6272);cljs.core.chunk_append.call(null,b__6273,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6274 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__6275 = (counter + 1);
var G__6276 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__6274;
counter = G__6275;
last_extrusion__$1 = G__6276;
continue;
}
}
break;
}
})());
{
var G__6277 = (i__6272 + 1);
i__6272 = G__6277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6273),iter__6270.call(null,cljs.core.chunk_rest.call(null,s__6271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6273),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6271__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6278 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__6279 = (counter + 1);
var G__6280 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__6278;
counter = G__6279;
last_extrusion__$1 = G__6280;
continue;
}
}
break;
}
})(),iter__6270.call(null,cljs.core.rest.call(null,s__6271__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,layers_cmds);
});
embodier.fileapi.extrusionize = (function extrusionize(layers_cmds){var iter__4160__auto__ = (function iter__6285(s__6286){return (new cljs.core.LazySeq(null,(function (){var s__6286__$1 = s__6286;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6286__$1);if(temp__4092__auto__)
{var s__6286__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6286__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6286__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6288 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6287 = 0;while(true){
if((i__6287 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__6287);cljs.core.chunk_append.call(null,b__6288,cljs.core.filter.call(null,((function (i__6287,cmds,c__4158__auto__,size__4159__auto__,b__6288,s__6286__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__6287,cmds,c__4158__auto__,size__4159__auto__,b__6288,s__6286__$2,temp__4092__auto__))
,cmds));
{
var G__6289 = (i__6287 + 1);
i__6287 = G__6289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6288),iter__6285.call(null,cljs.core.chunk_rest.call(null,s__6286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6288),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6286__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__6286__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__6286__$2,temp__4092__auto__))
,cmds),iter__6285.call(null,cljs.core.rest.call(null,s__6286__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,layers_cmds);
});
embodier.fileapi.collapseZ = (function collapseZ(layers_cmds){var resultcmds = null;var counter = 0;var last_z = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,layers_cmds)))
{return cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (resultcmds,counter,last_z){
return (function (p1__6290_SHARP_){if((cljs.core.first.call(null,p1__6290_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__6299 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__6295(s__6296){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__6296__$1 = s__6296;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6296__$1);if(temp__4092__auto__)
{var s__6296__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6296__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6296__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6298 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6297 = 0;while(true){
if((i__6297 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__6297);cljs.core.chunk_append.call(null,b__6298,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null));
{
var G__6302 = (i__6297 + 1);
i__6297 = G__6302;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6298),iter__6295.call(null,cljs.core.chunk_rest.call(null,s__6296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6298),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6296__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null),iter__6295.call(null,cljs.core.rest.call(null,s__6296__$2)));
}
} else
{return null;
}
break;
}
});})(resultcmds,counter,last_z))
,null,null));
});})(resultcmds,counter,last_z))
;return iter__4160__auto__.call(null,cljs.core.nth.call(null,layers_cmds,counter));
})(),resultcmds);
var G__6300 = (counter + 1);
var G__6301 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__6299;
counter = G__6300;
last_z = G__6301;
continue;
}
}
break;
}
});
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__6388(s__6389){return (new cljs.core.LazySeq(null,(function (){var s__6389__$1 = s__6389;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6389__$1);if(temp__4092__auto__)
{var s__6389__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6389__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6389__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6391 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6390 = 0;while(true){
if((i__6390 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__6390);cljs.core.chunk_append.call(null,b__6391,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__6390,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__){
return (function iter__6432(s__6433){return (new cljs.core.LazySeq(null,((function (i__6390,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__){
return (function (){var s__6433__$1 = s__6433;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6433__$1);if(temp__4092__auto____$1)
{var s__6433__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6433__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6433__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6435 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6434 = 0;while(true){
if((i__6434 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__6434);cljs.core.chunk_append.call(null,b__6435,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6434,i__6390,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6435,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__){
return (function (p1__6303_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6303_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6434,i__6390,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6435,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6434,i__6390,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6435,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__){
return (function iter__6444(s__6445){return (new cljs.core.LazySeq(null,((function (i__6434,i__6390,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6435,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__){
return (function (){var s__6445__$1 = s__6445;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6445__$1);if(temp__4092__auto____$2)
{var s__6445__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6445__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__6445__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__6447 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__6446 = 0;while(true){
if((i__6446 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__6446);cljs.core.chunk_append.call(null,b__6447,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6472 = (i__6446 + 1);
i__6446 = G__6472;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6447),iter__6444.call(null,cljs.core.chunk_rest.call(null,s__6445__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6447),null);
}
} else
{var token = cljs.core.first.call(null,s__6445__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6444.call(null,cljs.core.rest.call(null,s__6445__$2)));
}
} else
{return null;
}
break;
}
});})(i__6434,i__6390,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6435,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__))
,null,null));
});})(i__6434,i__6390,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6435,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__6473 = (i__6434 + 1);
i__6434 = G__6473;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6435),iter__6432.call(null,cljs.core.chunk_rest.call(null,s__6433__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6435),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6433__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6390,cmd,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__){
return (function (p1__6303_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6303_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6390,cmd,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6390,cmd,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__){
return (function iter__6448(s__6449){return (new cljs.core.LazySeq(null,((function (i__6390,cmd,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__){
return (function (){var s__6449__$1 = s__6449;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6449__$1);if(temp__4092__auto____$2)
{var s__6449__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6449__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6449__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6451 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6450 = 0;while(true){
if((i__6450 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__6450);cljs.core.chunk_append.call(null,b__6451,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6474 = (i__6450 + 1);
i__6450 = G__6474;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6451),iter__6448.call(null,cljs.core.chunk_rest.call(null,s__6449__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6451),null);
}
} else
{var token = cljs.core.first.call(null,s__6449__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6448.call(null,cljs.core.rest.call(null,s__6449__$2)));
}
} else
{return null;
}
break;
}
});})(i__6390,cmd,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__))
,null,null));
});})(i__6390,cmd,s__6433__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__6432.call(null,cljs.core.rest.call(null,s__6433__$2)));
}
} else
{return null;
}
break;
}
});})(i__6390,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__))
,null,null));
});})(i__6390,part,c__4158__auto__,size__4159__auto__,b__6391,s__6389__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__6475 = (i__6390 + 1);
i__6390 = G__6475;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6391),iter__6388.call(null,cljs.core.chunk_rest.call(null,s__6389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6391),null);
}
} else
{var part = cljs.core.first.call(null,s__6389__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__6389__$2,temp__4092__auto__){
return (function iter__6452(s__6453){return (new cljs.core.LazySeq(null,((function (part,s__6389__$2,temp__4092__auto__){
return (function (){var s__6453__$1 = s__6453;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6453__$1);if(temp__4092__auto____$1)
{var s__6453__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6453__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6453__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6455 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6454 = 0;while(true){
if((i__6454 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__6454);cljs.core.chunk_append.call(null,b__6455,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6454,cmd,c__4158__auto__,size__4159__auto__,b__6455,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__){
return (function (p1__6303_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6303_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6454,cmd,c__4158__auto__,size__4159__auto__,b__6455,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6454,cmd,c__4158__auto__,size__4159__auto__,b__6455,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__){
return (function iter__6464(s__6465){return (new cljs.core.LazySeq(null,((function (i__6454,cmd,c__4158__auto__,size__4159__auto__,b__6455,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__){
return (function (){var s__6465__$1 = s__6465;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6465__$1);if(temp__4092__auto____$2)
{var s__6465__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6465__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6465__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6467 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6466 = 0;while(true){
if((i__6466 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__6466);cljs.core.chunk_append.call(null,b__6467,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6476 = (i__6466 + 1);
i__6466 = G__6476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6467),iter__6464.call(null,cljs.core.chunk_rest.call(null,s__6465__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6467),null);
}
} else
{var token = cljs.core.first.call(null,s__6465__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6464.call(null,cljs.core.rest.call(null,s__6465__$2)));
}
} else
{return null;
}
break;
}
});})(i__6454,cmd,c__4158__auto__,size__4159__auto__,b__6455,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__))
,null,null));
});})(i__6454,cmd,c__4158__auto__,size__4159__auto__,b__6455,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__6477 = (i__6454 + 1);
i__6454 = G__6477;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6455),iter__6452.call(null,cljs.core.chunk_rest.call(null,s__6453__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6455),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6453__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__){
return (function (p1__6303_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6303_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__){
return (function iter__6468(s__6469){return (new cljs.core.LazySeq(null,((function (cmd,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__){
return (function (){var s__6469__$1 = s__6469;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6469__$1);if(temp__4092__auto____$2)
{var s__6469__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6469__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6469__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6471 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6470 = 0;while(true){
if((i__6470 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__6470);cljs.core.chunk_append.call(null,b__6471,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6478 = (i__6470 + 1);
i__6470 = G__6478;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6471),iter__6468.call(null,cljs.core.chunk_rest.call(null,s__6469__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6471),null);
}
} else
{var token = cljs.core.first.call(null,s__6469__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6468.call(null,cljs.core.rest.call(null,s__6469__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__6453__$2,temp__4092__auto____$1,part,s__6389__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__6452.call(null,cljs.core.rest.call(null,s__6453__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__6389__$2,temp__4092__auto__))
,null,null));
});})(part,s__6389__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__6388.call(null,cljs.core.rest.call(null,s__6389__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,layers_cmds);
})());
});
embodier.fileapi.layered = (function layered(str_ary){return cljs.core.partition_by.call(null,(function (s){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,"^G1.*Z.*"),s)))
{return false;
} else
{return true;
}
}),str_ary);
});
embodier.fileapi.filterG1 = (function filterG1(str_ary){return cljs.core.filter.call(null,(function (s){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,"^G1.*"),s)))
{return true;
} else
{return false;
}
}),str_ary);
});
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.extrusionize.call(null,embodier.fileapi.last_extrusion.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str))))))));
});
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map