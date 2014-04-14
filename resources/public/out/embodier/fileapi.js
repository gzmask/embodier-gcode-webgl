// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
embodier.fileapi.collapseZ = (function collapseZ(cmds){var resultcmds = null;var counter = 0;var last_z = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (resultcmds,counter,last_z){
return (function (p1__31112_SHARP_){if((cljs.core.first.call(null,p1__31112_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__31121 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__31117(s__31118){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__31118__$1 = s__31118;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31118__$1);if(temp__4092__auto__)
{var s__31118__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31118__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__31118__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__31120 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__31119 = 0;while(true){
if((i__31119 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__31119);cljs.core.chunk_append.call(null,b__31120,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null));
{
var G__31124 = (i__31119 + 1);
i__31119 = G__31124;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31120),iter__31117.call(null,cljs.core.chunk_rest.call(null,s__31118__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31120),null);
}
} else
{var cmd = cljs.core.first.call(null,s__31118__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null),iter__31117.call(null,cljs.core.rest.call(null,s__31118__$2)));
}
} else
{return null;
}
break;
}
});})(resultcmds,counter,last_z))
,null,null));
});})(resultcmds,counter,last_z))
;return iter__4160__auto__.call(null,cljs.core.nth.call(null,cmds,counter));
})(),resultcmds);
var G__31122 = (counter + 1);
var G__31123 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,cmds,counter))));
resultcmds = G__31121;
counter = G__31122;
last_z = G__31123;
continue;
}
}
break;
}
});
embodier.fileapi.cmd_map = (function cmd_map(cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__31210(s__31211){return (new cljs.core.LazySeq(null,(function (){var s__31211__$1 = s__31211;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31211__$1);if(temp__4092__auto__)
{var s__31211__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31211__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__31211__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__31213 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__31212 = 0;while(true){
if((i__31212 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__31212);cljs.core.chunk_append.call(null,b__31213,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__31212,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__){
return (function iter__31254(s__31255){return (new cljs.core.LazySeq(null,((function (i__31212,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__){
return (function (){var s__31255__$1 = s__31255;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__31255__$1);if(temp__4092__auto____$1)
{var s__31255__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31255__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__31255__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__31257 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__31256 = 0;while(true){
if((i__31256 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__31256);cljs.core.chunk_append.call(null,b__31257,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__31256,i__31212,cmd,c__4158__auto____$1,size__4159__auto____$1,b__31257,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__){
return (function (p1__31125_SHARP_){if(cljs.core.not_EQ_.call(null,p1__31125_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__31256,i__31212,cmd,c__4158__auto____$1,size__4159__auto____$1,b__31257,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__31256,i__31212,cmd,c__4158__auto____$1,size__4159__auto____$1,b__31257,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__){
return (function iter__31266(s__31267){return (new cljs.core.LazySeq(null,((function (i__31256,i__31212,cmd,c__4158__auto____$1,size__4159__auto____$1,b__31257,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__){
return (function (){var s__31267__$1 = s__31267;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__31267__$1);if(temp__4092__auto____$2)
{var s__31267__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__31267__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__31267__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__31269 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__31268 = 0;while(true){
if((i__31268 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__31268);cljs.core.chunk_append.call(null,b__31269,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__31294 = (i__31268 + 1);
i__31268 = G__31294;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31269),iter__31266.call(null,cljs.core.chunk_rest.call(null,s__31267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31269),null);
}
} else
{var token = cljs.core.first.call(null,s__31267__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__31266.call(null,cljs.core.rest.call(null,s__31267__$2)));
}
} else
{return null;
}
break;
}
});})(i__31256,i__31212,cmd,c__4158__auto____$1,size__4159__auto____$1,b__31257,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__))
,null,null));
});})(i__31256,i__31212,cmd,c__4158__auto____$1,size__4159__auto____$1,b__31257,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__31295 = (i__31256 + 1);
i__31256 = G__31295;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31257),iter__31254.call(null,cljs.core.chunk_rest.call(null,s__31255__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31257),null);
}
} else
{var cmd = cljs.core.first.call(null,s__31255__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__31212,cmd,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__){
return (function (p1__31125_SHARP_){if(cljs.core.not_EQ_.call(null,p1__31125_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__31212,cmd,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__31212,cmd,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__){
return (function iter__31270(s__31271){return (new cljs.core.LazySeq(null,((function (i__31212,cmd,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__){
return (function (){var s__31271__$1 = s__31271;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__31271__$1);if(temp__4092__auto____$2)
{var s__31271__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__31271__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__31271__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__31273 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__31272 = 0;while(true){
if((i__31272 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__31272);cljs.core.chunk_append.call(null,b__31273,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__31296 = (i__31272 + 1);
i__31272 = G__31296;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31273),iter__31270.call(null,cljs.core.chunk_rest.call(null,s__31271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31273),null);
}
} else
{var token = cljs.core.first.call(null,s__31271__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__31270.call(null,cljs.core.rest.call(null,s__31271__$2)));
}
} else
{return null;
}
break;
}
});})(i__31212,cmd,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__))
,null,null));
});})(i__31212,cmd,s__31255__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__31254.call(null,cljs.core.rest.call(null,s__31255__$2)));
}
} else
{return null;
}
break;
}
});})(i__31212,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__))
,null,null));
});})(i__31212,part,c__4158__auto__,size__4159__auto__,b__31213,s__31211__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__31297 = (i__31212 + 1);
i__31212 = G__31297;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31213),iter__31210.call(null,cljs.core.chunk_rest.call(null,s__31211__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31213),null);
}
} else
{var part = cljs.core.first.call(null,s__31211__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__31211__$2,temp__4092__auto__){
return (function iter__31274(s__31275){return (new cljs.core.LazySeq(null,((function (part,s__31211__$2,temp__4092__auto__){
return (function (){var s__31275__$1 = s__31275;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__31275__$1);if(temp__4092__auto____$1)
{var s__31275__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31275__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__31275__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__31277 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__31276 = 0;while(true){
if((i__31276 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__31276);cljs.core.chunk_append.call(null,b__31277,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__31276,cmd,c__4158__auto__,size__4159__auto__,b__31277,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__){
return (function (p1__31125_SHARP_){if(cljs.core.not_EQ_.call(null,p1__31125_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__31276,cmd,c__4158__auto__,size__4159__auto__,b__31277,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__31276,cmd,c__4158__auto__,size__4159__auto__,b__31277,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__){
return (function iter__31286(s__31287){return (new cljs.core.LazySeq(null,((function (i__31276,cmd,c__4158__auto__,size__4159__auto__,b__31277,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__){
return (function (){var s__31287__$1 = s__31287;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__31287__$1);if(temp__4092__auto____$2)
{var s__31287__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__31287__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__31287__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__31289 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__31288 = 0;while(true){
if((i__31288 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__31288);cljs.core.chunk_append.call(null,b__31289,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__31298 = (i__31288 + 1);
i__31288 = G__31298;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31289),iter__31286.call(null,cljs.core.chunk_rest.call(null,s__31287__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31289),null);
}
} else
{var token = cljs.core.first.call(null,s__31287__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__31286.call(null,cljs.core.rest.call(null,s__31287__$2)));
}
} else
{return null;
}
break;
}
});})(i__31276,cmd,c__4158__auto__,size__4159__auto__,b__31277,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__))
,null,null));
});})(i__31276,cmd,c__4158__auto__,size__4159__auto__,b__31277,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__31299 = (i__31276 + 1);
i__31276 = G__31299;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31277),iter__31274.call(null,cljs.core.chunk_rest.call(null,s__31275__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31277),null);
}
} else
{var cmd = cljs.core.first.call(null,s__31275__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__){
return (function (p1__31125_SHARP_){if(cljs.core.not_EQ_.call(null,p1__31125_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__){
return (function iter__31290(s__31291){return (new cljs.core.LazySeq(null,((function (cmd,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__){
return (function (){var s__31291__$1 = s__31291;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__31291__$1);if(temp__4092__auto____$2)
{var s__31291__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__31291__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__31291__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__31293 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__31292 = 0;while(true){
if((i__31292 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__31292);cljs.core.chunk_append.call(null,b__31293,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__31300 = (i__31292 + 1);
i__31292 = G__31300;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31293),iter__31290.call(null,cljs.core.chunk_rest.call(null,s__31291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31293),null);
}
} else
{var token = cljs.core.first.call(null,s__31291__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__31290.call(null,cljs.core.rest.call(null,s__31291__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__31275__$2,temp__4092__auto____$1,part,s__31211__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__31274.call(null,cljs.core.rest.call(null,s__31275__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__31211__$2,temp__4092__auto__))
,null,null));
});})(part,s__31211__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__31210.call(null,cljs.core.rest.call(null,s__31211__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cmds);
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str))))));
});
embodier.fileapi.setOnLoad = (function setOnLoad(f,l){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,l);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map