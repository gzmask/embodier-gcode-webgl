// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
embodier.fileapi.last_extrusion = (function last_extrusion(layers_cmds){var iter__4160__auto__ = (function iter__13660(s__13661){return (new cljs.core.LazySeq(null,(function (){var s__13661__$1 = s__13661;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13661__$1);if(temp__4092__auto__)
{var s__13661__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13661__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13661__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13663 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13662 = 0;while(true){
if((i__13662 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__13662);cljs.core.chunk_append.call(null,b__13663,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__13664 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__13665 = (counter + 1);
var G__13666 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__13664;
counter = G__13665;
last_extrusion__$1 = G__13666;
continue;
}
}
break;
}
})());
{
var G__13667 = (i__13662 + 1);
i__13662 = G__13667;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13663),iter__13660.call(null,cljs.core.chunk_rest.call(null,s__13661__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13663),null);
}
} else
{var cmds = cljs.core.first.call(null,s__13661__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__13668 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__13669 = (counter + 1);
var G__13670 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__13668;
counter = G__13669;
last_extrusion__$1 = G__13670;
continue;
}
}
break;
}
})(),iter__13660.call(null,cljs.core.rest.call(null,s__13661__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,layers_cmds);
});
embodier.fileapi.extrusionize = (function extrusionize(layers_cmds){var iter__4160__auto__ = (function iter__13675(s__13676){return (new cljs.core.LazySeq(null,(function (){var s__13676__$1 = s__13676;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13676__$1);if(temp__4092__auto__)
{var s__13676__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13676__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13676__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13678 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13677 = 0;while(true){
if((i__13677 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__13677);cljs.core.chunk_append.call(null,b__13678,cljs.core.filter.call(null,((function (i__13677,cmds,c__4158__auto__,size__4159__auto__,b__13678,s__13676__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__13677,cmds,c__4158__auto__,size__4159__auto__,b__13678,s__13676__$2,temp__4092__auto__))
,cmds));
{
var G__13679 = (i__13677 + 1);
i__13677 = G__13679;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13678),iter__13675.call(null,cljs.core.chunk_rest.call(null,s__13676__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13678),null);
}
} else
{var cmds = cljs.core.first.call(null,s__13676__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__13676__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__13676__$2,temp__4092__auto__))
,cmds),iter__13675.call(null,cljs.core.rest.call(null,s__13676__$2)));
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
return (function (p1__13680_SHARP_){if((cljs.core.first.call(null,p1__13680_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__13689 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__13685(s__13686){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__13686__$1 = s__13686;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13686__$1);if(temp__4092__auto__)
{var s__13686__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13686__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13686__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13688 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13687 = 0;while(true){
if((i__13687 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__13687);cljs.core.chunk_append.call(null,b__13688,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null));
{
var G__13692 = (i__13687 + 1);
i__13687 = G__13692;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13688),iter__13685.call(null,cljs.core.chunk_rest.call(null,s__13686__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13688),null);
}
} else
{var cmd = cljs.core.first.call(null,s__13686__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null),iter__13685.call(null,cljs.core.rest.call(null,s__13686__$2)));
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
var G__13690 = (counter + 1);
var G__13691 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__13689;
counter = G__13690;
last_z = G__13691;
continue;
}
}
break;
}
});
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__13778(s__13779){return (new cljs.core.LazySeq(null,(function (){var s__13779__$1 = s__13779;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13779__$1);if(temp__4092__auto__)
{var s__13779__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13779__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13779__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13781 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13780 = 0;while(true){
if((i__13780 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__13780);cljs.core.chunk_append.call(null,b__13781,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__13780,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__){
return (function iter__13822(s__13823){return (new cljs.core.LazySeq(null,((function (i__13780,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__){
return (function (){var s__13823__$1 = s__13823;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__13823__$1);if(temp__4092__auto____$1)
{var s__13823__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13823__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__13823__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__13825 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__13824 = 0;while(true){
if((i__13824 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__13824);cljs.core.chunk_append.call(null,b__13825,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__13824,i__13780,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13825,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__){
return (function (p1__13693_SHARP_){if(cljs.core.not_EQ_.call(null,p1__13693_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__13824,i__13780,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13825,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__13824,i__13780,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13825,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__){
return (function iter__13834(s__13835){return (new cljs.core.LazySeq(null,((function (i__13824,i__13780,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13825,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__){
return (function (){var s__13835__$1 = s__13835;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__13835__$1);if(temp__4092__auto____$2)
{var s__13835__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__13835__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__13835__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__13837 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__13836 = 0;while(true){
if((i__13836 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__13836);cljs.core.chunk_append.call(null,b__13837,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__13862 = (i__13836 + 1);
i__13836 = G__13862;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13837),iter__13834.call(null,cljs.core.chunk_rest.call(null,s__13835__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13837),null);
}
} else
{var token = cljs.core.first.call(null,s__13835__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__13834.call(null,cljs.core.rest.call(null,s__13835__$2)));
}
} else
{return null;
}
break;
}
});})(i__13824,i__13780,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13825,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__))
,null,null));
});})(i__13824,i__13780,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13825,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__13863 = (i__13824 + 1);
i__13824 = G__13863;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13825),iter__13822.call(null,cljs.core.chunk_rest.call(null,s__13823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13825),null);
}
} else
{var cmd = cljs.core.first.call(null,s__13823__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__13780,cmd,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__){
return (function (p1__13693_SHARP_){if(cljs.core.not_EQ_.call(null,p1__13693_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__13780,cmd,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__13780,cmd,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__){
return (function iter__13838(s__13839){return (new cljs.core.LazySeq(null,((function (i__13780,cmd,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__){
return (function (){var s__13839__$1 = s__13839;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__13839__$1);if(temp__4092__auto____$2)
{var s__13839__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__13839__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__13839__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__13841 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__13840 = 0;while(true){
if((i__13840 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__13840);cljs.core.chunk_append.call(null,b__13841,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__13864 = (i__13840 + 1);
i__13840 = G__13864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13841),iter__13838.call(null,cljs.core.chunk_rest.call(null,s__13839__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13841),null);
}
} else
{var token = cljs.core.first.call(null,s__13839__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__13838.call(null,cljs.core.rest.call(null,s__13839__$2)));
}
} else
{return null;
}
break;
}
});})(i__13780,cmd,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__))
,null,null));
});})(i__13780,cmd,s__13823__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__13822.call(null,cljs.core.rest.call(null,s__13823__$2)));
}
} else
{return null;
}
break;
}
});})(i__13780,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__))
,null,null));
});})(i__13780,part,c__4158__auto__,size__4159__auto__,b__13781,s__13779__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__13865 = (i__13780 + 1);
i__13780 = G__13865;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13781),iter__13778.call(null,cljs.core.chunk_rest.call(null,s__13779__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13781),null);
}
} else
{var part = cljs.core.first.call(null,s__13779__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__13779__$2,temp__4092__auto__){
return (function iter__13842(s__13843){return (new cljs.core.LazySeq(null,((function (part,s__13779__$2,temp__4092__auto__){
return (function (){var s__13843__$1 = s__13843;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__13843__$1);if(temp__4092__auto____$1)
{var s__13843__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13843__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13843__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13845 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13844 = 0;while(true){
if((i__13844 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__13844);cljs.core.chunk_append.call(null,b__13845,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__13844,cmd,c__4158__auto__,size__4159__auto__,b__13845,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__){
return (function (p1__13693_SHARP_){if(cljs.core.not_EQ_.call(null,p1__13693_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__13844,cmd,c__4158__auto__,size__4159__auto__,b__13845,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__13844,cmd,c__4158__auto__,size__4159__auto__,b__13845,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__){
return (function iter__13854(s__13855){return (new cljs.core.LazySeq(null,((function (i__13844,cmd,c__4158__auto__,size__4159__auto__,b__13845,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__){
return (function (){var s__13855__$1 = s__13855;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__13855__$1);if(temp__4092__auto____$2)
{var s__13855__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__13855__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__13855__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__13857 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__13856 = 0;while(true){
if((i__13856 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__13856);cljs.core.chunk_append.call(null,b__13857,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__13866 = (i__13856 + 1);
i__13856 = G__13866;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13857),iter__13854.call(null,cljs.core.chunk_rest.call(null,s__13855__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13857),null);
}
} else
{var token = cljs.core.first.call(null,s__13855__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__13854.call(null,cljs.core.rest.call(null,s__13855__$2)));
}
} else
{return null;
}
break;
}
});})(i__13844,cmd,c__4158__auto__,size__4159__auto__,b__13845,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__))
,null,null));
});})(i__13844,cmd,c__4158__auto__,size__4159__auto__,b__13845,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__13867 = (i__13844 + 1);
i__13844 = G__13867;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13845),iter__13842.call(null,cljs.core.chunk_rest.call(null,s__13843__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13845),null);
}
} else
{var cmd = cljs.core.first.call(null,s__13843__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__){
return (function (p1__13693_SHARP_){if(cljs.core.not_EQ_.call(null,p1__13693_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__){
return (function iter__13858(s__13859){return (new cljs.core.LazySeq(null,((function (cmd,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__){
return (function (){var s__13859__$1 = s__13859;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__13859__$1);if(temp__4092__auto____$2)
{var s__13859__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__13859__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13859__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13861 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13860 = 0;while(true){
if((i__13860 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__13860);cljs.core.chunk_append.call(null,b__13861,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__13868 = (i__13860 + 1);
i__13860 = G__13868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13861),iter__13858.call(null,cljs.core.chunk_rest.call(null,s__13859__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13861),null);
}
} else
{var token = cljs.core.first.call(null,s__13859__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__13858.call(null,cljs.core.rest.call(null,s__13859__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__13843__$2,temp__4092__auto____$1,part,s__13779__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__13842.call(null,cljs.core.rest.call(null,s__13843__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__13779__$2,temp__4092__auto__))
,null,null));
});})(part,s__13779__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__13778.call(null,cljs.core.rest.call(null,s__13779__$2)));
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