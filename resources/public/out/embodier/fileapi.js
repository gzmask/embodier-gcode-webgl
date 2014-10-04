// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* stores extrusions into each command
*/
embodier.fileapi.last_extrusion = (function last_extrusion(layers_cmds){var iter__4160__auto__ = (function iter__5740(s__5741){return (new cljs.core.LazySeq(null,(function (){var s__5741__$1 = s__5741;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5741__$1);if(temp__4092__auto__)
{var s__5741__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5741__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5741__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5743 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5742 = 0;while(true){
if((i__5742 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5742);cljs.core.chunk_append.call(null,b__5743,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5744 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__5745 = (counter + 1);
var G__5746 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__5744;
counter = G__5745;
last_extrusion__$1 = G__5746;
continue;
}
}
break;
}
})());
{
var G__5747 = (i__5742 + 1);
i__5742 = G__5747;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5743),iter__5740.call(null,cljs.core.chunk_rest.call(null,s__5741__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5743),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5741__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5748 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__5749 = (counter + 1);
var G__5750 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__5748;
counter = G__5749;
last_extrusion__$1 = G__5750;
continue;
}
}
break;
}
})(),iter__5740.call(null,cljs.core.rest.call(null,s__5741__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,layers_cmds);
});
/**
* filter each layer cmds according to extrusion directions
*/
embodier.fileapi.extrusionize = (function extrusionize(layers_cmds){var iter__4160__auto__ = (function iter__5755(s__5756){return (new cljs.core.LazySeq(null,(function (){var s__5756__$1 = s__5756;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5756__$1);if(temp__4092__auto__)
{var s__5756__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5756__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5756__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5758 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5757 = 0;while(true){
if((i__5757 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5757);cljs.core.chunk_append.call(null,b__5758,cljs.core.filter.call(null,((function (i__5757,cmds,c__4158__auto__,size__4159__auto__,b__5758,s__5756__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__5757,cmds,c__4158__auto__,size__4159__auto__,b__5758,s__5756__$2,temp__4092__auto__))
,cmds));
{
var G__5759 = (i__5757 + 1);
i__5757 = G__5759;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5758),iter__5755.call(null,cljs.core.chunk_rest.call(null,s__5756__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5758),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5756__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__5756__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__5756__$2,temp__4092__auto__))
,cmds),iter__5755.call(null,cljs.core.rest.call(null,s__5756__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,layers_cmds);
});
/**
* collapse :z to all points
*/
embodier.fileapi.collapseZ = (function collapseZ(layers_cmds){var resultcmds = null;var counter = 0;var last_z = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,layers_cmds)))
{return cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (resultcmds,counter,last_z){
return (function (p1__5760_SHARP_){if((cljs.core.first.call(null,p1__5760_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__5769 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__5765(s__5766){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__5766__$1 = s__5766;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5766__$1);if(temp__4092__auto__)
{var s__5766__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5766__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5766__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5768 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5767 = 0;while(true){
if((i__5767 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__5767);cljs.core.chunk_append.call(null,b__5768,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null));
{
var G__5772 = (i__5767 + 1);
i__5767 = G__5772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5768),iter__5765.call(null,cljs.core.chunk_rest.call(null,s__5766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5768),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5766__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null),iter__5765.call(null,cljs.core.rest.call(null,s__5766__$2)));
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
var G__5770 = (counter + 1);
var G__5771 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__5769;
counter = G__5770;
last_z = G__5771;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__5858(s__5859){return (new cljs.core.LazySeq(null,(function (){var s__5859__$1 = s__5859;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5859__$1);if(temp__4092__auto__)
{var s__5859__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5859__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5859__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5861 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5860 = 0;while(true){
if((i__5860 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__5860);cljs.core.chunk_append.call(null,b__5861,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__5860,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__){
return (function iter__5902(s__5903){return (new cljs.core.LazySeq(null,((function (i__5860,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__){
return (function (){var s__5903__$1 = s__5903;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5903__$1);if(temp__4092__auto____$1)
{var s__5903__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5903__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__5903__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__5905 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__5904 = 0;while(true){
if((i__5904 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__5904);cljs.core.chunk_append.call(null,b__5905,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5904,i__5860,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5905,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__){
return (function (p1__5773_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5773_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5904,i__5860,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5905,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__5904,i__5860,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5905,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__){
return (function iter__5914(s__5915){return (new cljs.core.LazySeq(null,((function (i__5904,i__5860,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5905,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__){
return (function (){var s__5915__$1 = s__5915;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5915__$1);if(temp__4092__auto____$2)
{var s__5915__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5915__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__5915__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__5917 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__5916 = 0;while(true){
if((i__5916 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__5916);cljs.core.chunk_append.call(null,b__5917,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5942 = (i__5916 + 1);
i__5916 = G__5942;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5917),iter__5914.call(null,cljs.core.chunk_rest.call(null,s__5915__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5917),null);
}
} else
{var token = cljs.core.first.call(null,s__5915__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5914.call(null,cljs.core.rest.call(null,s__5915__$2)));
}
} else
{return null;
}
break;
}
});})(i__5904,i__5860,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5905,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__))
,null,null));
});})(i__5904,i__5860,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5905,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5943 = (i__5904 + 1);
i__5904 = G__5943;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5905),iter__5902.call(null,cljs.core.chunk_rest.call(null,s__5903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5905),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5903__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5860,cmd,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__){
return (function (p1__5773_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5773_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5860,cmd,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__5860,cmd,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__){
return (function iter__5918(s__5919){return (new cljs.core.LazySeq(null,((function (i__5860,cmd,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__){
return (function (){var s__5919__$1 = s__5919;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5919__$1);if(temp__4092__auto____$2)
{var s__5919__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5919__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__5919__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__5921 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__5920 = 0;while(true){
if((i__5920 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__5920);cljs.core.chunk_append.call(null,b__5921,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5944 = (i__5920 + 1);
i__5920 = G__5944;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5921),iter__5918.call(null,cljs.core.chunk_rest.call(null,s__5919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5921),null);
}
} else
{var token = cljs.core.first.call(null,s__5919__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5918.call(null,cljs.core.rest.call(null,s__5919__$2)));
}
} else
{return null;
}
break;
}
});})(i__5860,cmd,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__))
,null,null));
});})(i__5860,cmd,s__5903__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5902.call(null,cljs.core.rest.call(null,s__5903__$2)));
}
} else
{return null;
}
break;
}
});})(i__5860,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__))
,null,null));
});})(i__5860,part,c__4158__auto__,size__4159__auto__,b__5861,s__5859__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__5945 = (i__5860 + 1);
i__5860 = G__5945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5861),iter__5858.call(null,cljs.core.chunk_rest.call(null,s__5859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5861),null);
}
} else
{var part = cljs.core.first.call(null,s__5859__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__5859__$2,temp__4092__auto__){
return (function iter__5922(s__5923){return (new cljs.core.LazySeq(null,((function (part,s__5859__$2,temp__4092__auto__){
return (function (){var s__5923__$1 = s__5923;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5923__$1);if(temp__4092__auto____$1)
{var s__5923__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5923__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5923__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5925 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5924 = 0;while(true){
if((i__5924 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__5924);cljs.core.chunk_append.call(null,b__5925,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5924,cmd,c__4158__auto__,size__4159__auto__,b__5925,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__){
return (function (p1__5773_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5773_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5924,cmd,c__4158__auto__,size__4159__auto__,b__5925,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__5924,cmd,c__4158__auto__,size__4159__auto__,b__5925,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__){
return (function iter__5934(s__5935){return (new cljs.core.LazySeq(null,((function (i__5924,cmd,c__4158__auto__,size__4159__auto__,b__5925,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__){
return (function (){var s__5935__$1 = s__5935;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5935__$1);if(temp__4092__auto____$2)
{var s__5935__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5935__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__5935__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__5937 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__5936 = 0;while(true){
if((i__5936 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__5936);cljs.core.chunk_append.call(null,b__5937,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5946 = (i__5936 + 1);
i__5936 = G__5946;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5937),iter__5934.call(null,cljs.core.chunk_rest.call(null,s__5935__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5937),null);
}
} else
{var token = cljs.core.first.call(null,s__5935__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5934.call(null,cljs.core.rest.call(null,s__5935__$2)));
}
} else
{return null;
}
break;
}
});})(i__5924,cmd,c__4158__auto__,size__4159__auto__,b__5925,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__))
,null,null));
});})(i__5924,cmd,c__4158__auto__,size__4159__auto__,b__5925,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5947 = (i__5924 + 1);
i__5924 = G__5947;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5925),iter__5922.call(null,cljs.core.chunk_rest.call(null,s__5923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5925),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5923__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__){
return (function (p1__5773_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5773_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__){
return (function iter__5938(s__5939){return (new cljs.core.LazySeq(null,((function (cmd,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__){
return (function (){var s__5939__$1 = s__5939;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5939__$1);if(temp__4092__auto____$2)
{var s__5939__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5939__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5939__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5941 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5940 = 0;while(true){
if((i__5940 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__5940);cljs.core.chunk_append.call(null,b__5941,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5948 = (i__5940 + 1);
i__5940 = G__5948;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5941),iter__5938.call(null,cljs.core.chunk_rest.call(null,s__5939__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5941),null);
}
} else
{var token = cljs.core.first.call(null,s__5939__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5938.call(null,cljs.core.rest.call(null,s__5939__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__5923__$2,temp__4092__auto____$1,part,s__5859__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5922.call(null,cljs.core.rest.call(null,s__5923__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__5859__$2,temp__4092__auto__))
,null,null));
});})(part,s__5859__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__5858.call(null,cljs.core.rest.call(null,s__5859__$2)));
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