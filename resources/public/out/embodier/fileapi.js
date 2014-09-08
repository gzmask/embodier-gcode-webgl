// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* stores extrusions into each command
*/
embodier.fileapi.last_extrusion = (function last_extrusion(layers_cmds){var iter__4158__auto__ = (function iter__6953(s__6954){return (new cljs.core.LazySeq(null,(function (){var s__6954__$1 = s__6954;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6954__$1);if(temp__4092__auto__)
{var s__6954__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6954__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6954__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6956 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6955 = 0;while(true){
if((i__6955 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__6955);cljs.core.chunk_append.call(null,b__6956,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6957 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__6958 = (counter + 1);
var G__6959 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__6957;
counter = G__6958;
last_extrusion__$1 = G__6959;
continue;
}
}
break;
}
})());
{
var G__6960 = (i__6955 + 1);
i__6955 = G__6960;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6956),iter__6953.call(null,cljs.core.chunk_rest.call(null,s__6954__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6956),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6954__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6961 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__6962 = (counter + 1);
var G__6963 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__6961;
counter = G__6962;
last_extrusion__$1 = G__6963;
continue;
}
}
break;
}
})(),iter__6953.call(null,cljs.core.rest.call(null,s__6954__$2)));
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
embodier.fileapi.extrusionize = (function extrusionize(layers_cmds){var iter__4158__auto__ = (function iter__6968(s__6969){return (new cljs.core.LazySeq(null,(function (){var s__6969__$1 = s__6969;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6969__$1);if(temp__4092__auto__)
{var s__6969__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6969__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6969__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6971 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6970 = 0;while(true){
if((i__6970 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__6970);cljs.core.chunk_append.call(null,b__6971,cljs.core.filter.call(null,((function (i__6970,cmds,c__4156__auto__,size__4157__auto__,b__6971,s__6969__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__6970,cmds,c__4156__auto__,size__4157__auto__,b__6971,s__6969__$2,temp__4092__auto__))
,cmds));
{
var G__6972 = (i__6970 + 1);
i__6970 = G__6972;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6971),iter__6968.call(null,cljs.core.chunk_rest.call(null,s__6969__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6971),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6969__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__6969__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__6969__$2,temp__4092__auto__))
,cmds),iter__6968.call(null,cljs.core.rest.call(null,s__6969__$2)));
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
return (function (p1__6973_SHARP_){if((cljs.core.first.call(null,p1__6973_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__6982 = cljs.core.cons.call(null,(function (){var iter__4158__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__6978(s__6979){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__6979__$1 = s__6979;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6979__$1);if(temp__4092__auto__)
{var s__6979__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6979__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__6979__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__6981 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__6980 = 0;while(true){
if((i__6980 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__6980);cljs.core.chunk_append.call(null,b__6981,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null));
{
var G__6985 = (i__6980 + 1);
i__6980 = G__6985;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6981),iter__6978.call(null,cljs.core.chunk_rest.call(null,s__6979__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6981),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6979__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null),iter__6978.call(null,cljs.core.rest.call(null,s__6979__$2)));
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
var G__6983 = (counter + 1);
var G__6984 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__6982;
counter = G__6983;
last_z = G__6984;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = (function iter__7071(s__7072){return (new cljs.core.LazySeq(null,(function (){var s__7072__$1 = s__7072;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7072__$1);if(temp__4092__auto__)
{var s__7072__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7072__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__7072__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__7074 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__7073 = 0;while(true){
if((i__7073 < size__4157__auto__))
{var part = cljs.core._nth.call(null,c__4156__auto__,i__7073);cljs.core.chunk_append.call(null,b__7074,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (i__7073,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__){
return (function iter__7115(s__7116){return (new cljs.core.LazySeq(null,((function (i__7073,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__){
return (function (){var s__7116__$1 = s__7116;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7116__$1);if(temp__4092__auto____$1)
{var s__7116__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7116__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__7116__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__7118 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__7117 = 0;while(true){
if((i__7117 < size__4157__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4156__auto____$1,i__7117);cljs.core.chunk_append.call(null,b__7118,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__7117,i__7073,cmd,c__4156__auto____$1,size__4157__auto____$1,b__7118,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__){
return (function (p1__6986_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6986_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__7117,i__7073,cmd,c__4156__auto____$1,size__4157__auto____$1,b__7118,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__7117,i__7073,cmd,c__4156__auto____$1,size__4157__auto____$1,b__7118,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__){
return (function iter__7127(s__7128){return (new cljs.core.LazySeq(null,((function (i__7117,i__7073,cmd,c__4156__auto____$1,size__4157__auto____$1,b__7118,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__){
return (function (){var s__7128__$1 = s__7128;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__7128__$1);if(temp__4092__auto____$2)
{var s__7128__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__7128__$2))
{var c__4156__auto____$2 = cljs.core.chunk_first.call(null,s__7128__$2);var size__4157__auto____$2 = cljs.core.count.call(null,c__4156__auto____$2);var b__7130 = cljs.core.chunk_buffer.call(null,size__4157__auto____$2);if((function (){var i__7129 = 0;while(true){
if((i__7129 < size__4157__auto____$2))
{var token = cljs.core._nth.call(null,c__4156__auto____$2,i__7129);cljs.core.chunk_append.call(null,b__7130,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__7155 = (i__7129 + 1);
i__7129 = G__7155;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7130),iter__7127.call(null,cljs.core.chunk_rest.call(null,s__7128__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7130),null);
}
} else
{var token = cljs.core.first.call(null,s__7128__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__7127.call(null,cljs.core.rest.call(null,s__7128__$2)));
}
} else
{return null;
}
break;
}
});})(i__7117,i__7073,cmd,c__4156__auto____$1,size__4157__auto____$1,b__7118,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__))
,null,null));
});})(i__7117,i__7073,cmd,c__4156__auto____$1,size__4157__auto____$1,b__7118,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__7156 = (i__7117 + 1);
i__7117 = G__7156;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7118),iter__7115.call(null,cljs.core.chunk_rest.call(null,s__7116__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7118),null);
}
} else
{var cmd = cljs.core.first.call(null,s__7116__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__7073,cmd,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__){
return (function (p1__6986_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6986_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__7073,cmd,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__7073,cmd,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__){
return (function iter__7131(s__7132){return (new cljs.core.LazySeq(null,((function (i__7073,cmd,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__){
return (function (){var s__7132__$1 = s__7132;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__7132__$1);if(temp__4092__auto____$2)
{var s__7132__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__7132__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__7132__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__7134 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__7133 = 0;while(true){
if((i__7133 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__7133);cljs.core.chunk_append.call(null,b__7134,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__7157 = (i__7133 + 1);
i__7133 = G__7157;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7134),iter__7131.call(null,cljs.core.chunk_rest.call(null,s__7132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7134),null);
}
} else
{var token = cljs.core.first.call(null,s__7132__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__7131.call(null,cljs.core.rest.call(null,s__7132__$2)));
}
} else
{return null;
}
break;
}
});})(i__7073,cmd,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__))
,null,null));
});})(i__7073,cmd,s__7116__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__7115.call(null,cljs.core.rest.call(null,s__7116__$2)));
}
} else
{return null;
}
break;
}
});})(i__7073,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__))
,null,null));
});})(i__7073,part,c__4156__auto__,size__4157__auto__,b__7074,s__7072__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()));
{
var G__7158 = (i__7073 + 1);
i__7073 = G__7158;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7074),iter__7071.call(null,cljs.core.chunk_rest.call(null,s__7072__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7074),null);
}
} else
{var part = cljs.core.first.call(null,s__7072__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (part,s__7072__$2,temp__4092__auto__){
return (function iter__7135(s__7136){return (new cljs.core.LazySeq(null,((function (part,s__7072__$2,temp__4092__auto__){
return (function (){var s__7136__$1 = s__7136;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7136__$1);if(temp__4092__auto____$1)
{var s__7136__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7136__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__7136__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__7138 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__7137 = 0;while(true){
if((i__7137 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__7137);cljs.core.chunk_append.call(null,b__7138,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__7137,cmd,c__4156__auto__,size__4157__auto__,b__7138,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__){
return (function (p1__6986_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6986_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__7137,cmd,c__4156__auto__,size__4157__auto__,b__7138,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__7137,cmd,c__4156__auto__,size__4157__auto__,b__7138,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__){
return (function iter__7147(s__7148){return (new cljs.core.LazySeq(null,((function (i__7137,cmd,c__4156__auto__,size__4157__auto__,b__7138,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__){
return (function (){var s__7148__$1 = s__7148;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__7148__$1);if(temp__4092__auto____$2)
{var s__7148__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__7148__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__7148__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__7150 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__7149 = 0;while(true){
if((i__7149 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__7149);cljs.core.chunk_append.call(null,b__7150,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__7159 = (i__7149 + 1);
i__7149 = G__7159;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7150),iter__7147.call(null,cljs.core.chunk_rest.call(null,s__7148__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7150),null);
}
} else
{var token = cljs.core.first.call(null,s__7148__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__7147.call(null,cljs.core.rest.call(null,s__7148__$2)));
}
} else
{return null;
}
break;
}
});})(i__7137,cmd,c__4156__auto__,size__4157__auto__,b__7138,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__))
,null,null));
});})(i__7137,cmd,c__4156__auto__,size__4157__auto__,b__7138,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__7160 = (i__7137 + 1);
i__7137 = G__7160;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7138),iter__7135.call(null,cljs.core.chunk_rest.call(null,s__7136__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7138),null);
}
} else
{var cmd = cljs.core.first.call(null,s__7136__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__){
return (function (p1__6986_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6986_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (cmd,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__){
return (function iter__7151(s__7152){return (new cljs.core.LazySeq(null,((function (cmd,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__){
return (function (){var s__7152__$1 = s__7152;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__7152__$1);if(temp__4092__auto____$2)
{var s__7152__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__7152__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__7152__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__7154 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__7153 = 0;while(true){
if((i__7153 < size__4157__auto__))
{var token = cljs.core._nth.call(null,c__4156__auto__,i__7153);cljs.core.chunk_append.call(null,b__7154,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__7161 = (i__7153 + 1);
i__7153 = G__7161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7154),iter__7151.call(null,cljs.core.chunk_rest.call(null,s__7152__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7154),null);
}
} else
{var token = cljs.core.first.call(null,s__7152__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__7151.call(null,cljs.core.rest.call(null,s__7152__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__7136__$2,temp__4092__auto____$1,part,s__7072__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__7135.call(null,cljs.core.rest.call(null,s__7136__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__7072__$2,temp__4092__auto__))
,null,null));
});})(part,s__7072__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()),iter__7071.call(null,cljs.core.rest.call(null,s__7072__$2)));
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.extrusionize.call(null,embodier.fileapi.last_extrusion.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str))))))));
});
/**
* called by web component of file onload. f (file) being read into layers atom
*/
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map