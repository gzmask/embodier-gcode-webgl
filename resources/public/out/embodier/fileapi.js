// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* stores extrusions into each command
*/
embodier.fileapi.last_extrusion = (function last_extrusion(layers_cmds){var iter__4158__auto__ = (function iter__6561(s__6562){return (new cljs.core.LazySeq(null,(function (){var s__6562__$1 = s__6562;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6562__$1);if(temp__4092__auto__)
{var s__6562__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6562__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6562__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6564 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6563 = 0;while(true){
if((i__6563 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__6563);cljs.core.chunk_append.call(null,b__6564,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6565 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__6566 = (counter + 1);
var G__6567 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__6565;
counter = G__6566;
last_extrusion__$1 = G__6567;
continue;
}
}
break;
}
})());
{
var G__6568 = (i__6563 + 1);
i__6563 = G__6568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6564),iter__6561.call(null,cljs.core.chunk_rest.call(null,s__6562__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6564),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6562__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6569 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__6570 = (counter + 1);
var G__6571 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__6569;
counter = G__6570;
last_extrusion__$1 = G__6571;
continue;
}
}
break;
}
})(),iter__6561.call(null,cljs.core.rest.call(null,s__6562__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,layers_cmds);
});
/**
* filter each layer cmds according to extrusion directions
*/
embodier.fileapi.extrusionize = (function extrusionize(layers_cmds){var iter__4158__auto__ = (function iter__6576(s__6577){return (new cljs.core.LazySeq(null,(function (){var s__6577__$1 = s__6577;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6577__$1);if(temp__4092__auto__)
{var s__6577__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6577__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6577__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6579 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6578 = 0;while(true){
if((i__6578 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__6578);cljs.core.chunk_append.call(null,b__6579,cljs.core.filter.call(null,((function (i__6578,cmds,c__4156__auto__,size__4157__auto__,b__6579,s__6577__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__6578,cmds,c__4156__auto__,size__4157__auto__,b__6579,s__6577__$2,temp__4092__auto__))
,cmds));
{
var G__6580 = (i__6578 + 1);
i__6578 = G__6580;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6579),iter__6576.call(null,cljs.core.chunk_rest.call(null,s__6577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6579),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6577__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__6577__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__6577__$2,temp__4092__auto__))
,cmds),iter__6576.call(null,cljs.core.rest.call(null,s__6577__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,layers_cmds);
});
/**
* collapse :z to all points
*/
embodier.fileapi.collapseZ = (function collapseZ(layers_cmds){var resultcmds = null;var counter = 0;var last_z = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,layers_cmds)))
{return cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (resultcmds,counter,last_z){
return (function (p1__6581_SHARP_){if((cljs.core.first.call(null,p1__6581_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__6590 = cljs.core.cons.call(null,(function (){var iter__4158__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__6586(s__6587){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__6587__$1 = s__6587;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6587__$1);if(temp__4092__auto__)
{var s__6587__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6587__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6587__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6589 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6588 = 0;while(true){
if((i__6588 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__6588);cljs.core.chunk_append.call(null,b__6589,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null));
{
var G__6593 = (i__6588 + 1);
i__6588 = G__6593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6589),iter__6586.call(null,cljs.core.chunk_rest.call(null,s__6587__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6589),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6587__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null),iter__6586.call(null,cljs.core.rest.call(null,s__6587__$2)));
}
} else
{return null;
}
break;
}
});})(resultcmds,counter,last_z))
,null,null));
});})(resultcmds,counter,last_z))
;return iter__4158__auto__.call(null,cljs.core.nth.call(null,layers_cmds,counter));
})(),resultcmds);
var G__6591 = (counter + 1);
var G__6592 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__6590;
counter = G__6591;
last_z = G__6592;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = (function iter__6679(s__6680){return (new cljs.core.LazySeq(null,(function (){var s__6680__$1 = s__6680;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6680__$1);if(temp__4092__auto__)
{var s__6680__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6680__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6680__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6682 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6681 = 0;while(true){
if((i__6681 < size__4157__auto__))
{var part = cljs.core._nth.call(null,c__4156__auto__,i__6681);cljs.core.chunk_append.call(null,b__6682,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (i__6681,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__){
return (function iter__6723(s__6724){return (new cljs.core.LazySeq(null,((function (i__6681,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__){
return (function (){var s__6724__$1 = s__6724;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6724__$1);if(temp__4092__auto____$1)
{var s__6724__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6724__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__6724__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__6726 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__6725 = 0;while(true){
if((i__6725 < size__4157__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4156__auto____$1,i__6725);cljs.core.chunk_append.call(null,b__6726,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6725,i__6681,cmd,c__4156__auto____$1,size__4157__auto____$1,b__6726,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__){
return (function (p1__6594_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6594_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6725,i__6681,cmd,c__4156__auto____$1,size__4157__auto____$1,b__6726,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__6725,i__6681,cmd,c__4156__auto____$1,size__4157__auto____$1,b__6726,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__){
return (function iter__6735(s__6736){return (new cljs.core.LazySeq(null,((function (i__6725,i__6681,cmd,c__4156__auto____$1,size__4157__auto____$1,b__6726,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__){
return (function (){var s__6736__$1 = s__6736;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6736__$1);if(temp__4092__auto____$2)
{var s__6736__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6736__$2))
{var c__4156__auto____$2 = cljs.core.chunk_first.call(null,s__6736__$2);var size__4157__auto____$2 = cljs.core.count.call(null,c__4156__auto____$2);var b__6738 = cljs.core.chunk_buffer.call(null,size__4157__auto____$2);if((function (){var i__6737 = 0;while(true){
if((i__6737 < size__4157__auto____$2))
{var token = cljs.core._nth.call(null,c__4156__auto____$2,i__6737);cljs.core.chunk_append.call(null,b__6738,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6763 = (i__6737 + 1);
i__6737 = G__6763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6738),iter__6735.call(null,cljs.core.chunk_rest.call(null,s__6736__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6738),null);
}
} else
{var token = cljs.core.first.call(null,s__6736__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6735.call(null,cljs.core.rest.call(null,s__6736__$2)));
}
} else
{return null;
}
break;
}
});})(i__6725,i__6681,cmd,c__4156__auto____$1,size__4157__auto____$1,b__6726,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__))
,null,null));
});})(i__6725,i__6681,cmd,c__4156__auto____$1,size__4157__auto____$1,b__6726,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__6764 = (i__6725 + 1);
i__6725 = G__6764;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6726),iter__6723.call(null,cljs.core.chunk_rest.call(null,s__6724__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6726),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6724__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6681,cmd,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__){
return (function (p1__6594_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6594_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6681,cmd,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__6681,cmd,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__){
return (function iter__6739(s__6740){return (new cljs.core.LazySeq(null,((function (i__6681,cmd,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__){
return (function (){var s__6740__$1 = s__6740;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6740__$1);if(temp__4092__auto____$2)
{var s__6740__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6740__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__6740__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__6742 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__6741 = 0;while(true){
if((i__6741 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__6741);cljs.core.chunk_append.call(null,b__6742,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6765 = (i__6741 + 1);
i__6741 = G__6765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6742),iter__6739.call(null,cljs.core.chunk_rest.call(null,s__6740__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6742),null);
}
} else
{var token = cljs.core.first.call(null,s__6740__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6739.call(null,cljs.core.rest.call(null,s__6740__$2)));
}
} else
{return null;
}
break;
}
});})(i__6681,cmd,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__))
,null,null));
});})(i__6681,cmd,s__6724__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__6723.call(null,cljs.core.rest.call(null,s__6724__$2)));
}
} else
{return null;
}
break;
}
});})(i__6681,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__))
,null,null));
});})(i__6681,part,c__4156__auto__,size__4157__auto__,b__6682,s__6680__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()));
{
var G__6766 = (i__6681 + 1);
i__6681 = G__6766;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6682),iter__6679.call(null,cljs.core.chunk_rest.call(null,s__6680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6682),null);
}
} else
{var part = cljs.core.first.call(null,s__6680__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (part,s__6680__$2,temp__4092__auto__){
return (function iter__6743(s__6744){return (new cljs.core.LazySeq(null,((function (part,s__6680__$2,temp__4092__auto__){
return (function (){var s__6744__$1 = s__6744;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6744__$1);if(temp__4092__auto____$1)
{var s__6744__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6744__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6744__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6746 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6745 = 0;while(true){
if((i__6745 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__6745);cljs.core.chunk_append.call(null,b__6746,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6745,cmd,c__4156__auto__,size__4157__auto__,b__6746,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__){
return (function (p1__6594_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6594_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6745,cmd,c__4156__auto__,size__4157__auto__,b__6746,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__6745,cmd,c__4156__auto__,size__4157__auto__,b__6746,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__){
return (function iter__6755(s__6756){return (new cljs.core.LazySeq(null,((function (i__6745,cmd,c__4156__auto__,size__4157__auto__,b__6746,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__){
return (function (){var s__6756__$1 = s__6756;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6756__$1);if(temp__4092__auto____$2)
{var s__6756__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6756__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__6756__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__6758 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__6757 = 0;while(true){
if((i__6757 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__6757);cljs.core.chunk_append.call(null,b__6758,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6767 = (i__6757 + 1);
i__6757 = G__6767;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6758),iter__6755.call(null,cljs.core.chunk_rest.call(null,s__6756__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6758),null);
}
} else
{var token = cljs.core.first.call(null,s__6756__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6755.call(null,cljs.core.rest.call(null,s__6756__$2)));
}
} else
{return null;
}
break;
}
});})(i__6745,cmd,c__4156__auto__,size__4157__auto__,b__6746,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__))
,null,null));
});})(i__6745,cmd,c__4156__auto__,size__4157__auto__,b__6746,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__6768 = (i__6745 + 1);
i__6745 = G__6768;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6746),iter__6743.call(null,cljs.core.chunk_rest.call(null,s__6744__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6746),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6744__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__){
return (function (p1__6594_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6594_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (cmd,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__){
return (function iter__6759(s__6760){return (new cljs.core.LazySeq(null,((function (cmd,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__){
return (function (){var s__6760__$1 = s__6760;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6760__$1);if(temp__4092__auto____$2)
{var s__6760__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6760__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6760__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6762 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6761 = 0;while(true){
if((i__6761 < size__4157__auto__))
{var token = cljs.core._nth.call(null,c__4156__auto__,i__6761);cljs.core.chunk_append.call(null,b__6762,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6769 = (i__6761 + 1);
i__6761 = G__6769;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6762),iter__6759.call(null,cljs.core.chunk_rest.call(null,s__6760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6762),null);
}
} else
{var token = cljs.core.first.call(null,s__6760__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6759.call(null,cljs.core.rest.call(null,s__6760__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__6744__$2,temp__4092__auto____$1,part,s__6680__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__6743.call(null,cljs.core.rest.call(null,s__6744__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__6680__$2,temp__4092__auto__))
,null,null));
});})(part,s__6680__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()),iter__6679.call(null,cljs.core.rest.call(null,s__6680__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,layers_cmds);
})());
});
/**
* partition the G1 commands array by Z axis movements
*/
embodier.fileapi.layered = (function layered(str_ary){return cljs.core.partition_by.call(null,(function (s){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,"^G1.*Z.*"),s)))
{return false;
} else
{return true;
}
}),str_ary);
});
/**
* filter out commands that is not started with G1
*/
embodier.fileapi.filterG1 = (function filterG1(str_ary){return cljs.core.filter.call(null,(function (s){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,"^G1.*"),s)))
{return true;
} else
{return false;
}
}),str_ary);
});
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.last_extrusion.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str)))))));
return console.log(cljs.core.print_str.call(null,clojure.string.join.call(null,"\n",cljs.core.nth.call(null,cljs.core.deref.call(null,layers),1))));
});
/**
* called by web component of file onload. f (file) being read into layers atom
*/
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map