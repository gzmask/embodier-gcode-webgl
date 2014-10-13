// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
embodier.fileapi.abs = (function abs(a){if((a < 0))
{return (0 - a);
} else
{return a;
}
});
/**
* @param {...*} var_args
*/
embodier.fileapi.d = (function() { 
var d__delegate = function (log,logs){return console.log("========debug========:",cljs.core.apply.call(null,cljs.core.print_str,log,logs));
};
var d = function (log,var_args){
var logs = null;if (arguments.length > 1) {
  logs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return d__delegate.call(this,log,logs);};
d.cljs$lang$maxFixedArity = 1;
d.cljs$lang$applyTo = (function (arglist__5971){
var log = cljs.core.first(arglist__5971);
var logs = cljs.core.rest(arglist__5971);
return d__delegate(log,logs);
});
d.cljs$core$IFn$_invoke$arity$variadic = d__delegate;
return d;
})()
;
/**
* reverse each layers cmds
*/
embodier.fileapi.reverse_layerscmd = (function reverse_layerscmd(layers_cmds){var iter__4160__auto__ = (function iter__5976(s__5977){return (new cljs.core.LazySeq(null,(function (){var s__5977__$1 = s__5977;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5977__$1);if(temp__4092__auto__)
{var s__5977__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5977__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5977__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5979 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5978 = 0;while(true){
if((i__5978 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5978);cljs.core.chunk_append.call(null,b__5979,cljs.core.reverse.call(null,cmds));
{
var G__5980 = (i__5978 + 1);
i__5978 = G__5980;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5979),iter__5976.call(null,cljs.core.chunk_rest.call(null,s__5977__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5979),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5977__$2);return cljs.core.cons.call(null,cljs.core.reverse.call(null,cmds),iter__5976.call(null,cljs.core.rest.call(null,s__5977__$2)));
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
* stores Y into each command
*/
embodier.fileapi.collapseY = (function collapseY(layers_cmds){var iter__4160__auto__ = (function iter__5985(s__5986){return (new cljs.core.LazySeq(null,(function (){var s__5986__$1 = s__5986;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5986__$1);if(temp__4092__auto__)
{var s__5986__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5986__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5986__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5988 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5987 = 0;while(true){
if((i__5987 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5987);cljs.core.chunk_append.call(null,b__5988,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5989 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5990 = (counter + 1);
var G__5991 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5989;
counter = G__5990;
last_y = G__5991;
continue;
}
}
break;
}
})());
{
var G__5992 = (i__5987 + 1);
i__5987 = G__5992;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5988),iter__5985.call(null,cljs.core.chunk_rest.call(null,s__5986__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5988),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5986__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5993 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5994 = (counter + 1);
var G__5995 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5993;
counter = G__5994;
last_y = G__5995;
continue;
}
}
break;
}
})(),iter__5985.call(null,cljs.core.rest.call(null,s__5986__$2)));
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
* stores X into each command
*/
embodier.fileapi.collapseX = (function collapseX(layers_cmds){var iter__4160__auto__ = (function iter__6000(s__6001){return (new cljs.core.LazySeq(null,(function (){var s__6001__$1 = s__6001;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6001__$1);if(temp__4092__auto__)
{var s__6001__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6001__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6001__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6003 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6002 = 0;while(true){
if((i__6002 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__6002);cljs.core.chunk_append.call(null,b__6003,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6004 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__6005 = (counter + 1);
var G__6006 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__6004;
counter = G__6005;
last_x = G__6006;
continue;
}
}
break;
}
})());
{
var G__6007 = (i__6002 + 1);
i__6002 = G__6007;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6003),iter__6000.call(null,cljs.core.chunk_rest.call(null,s__6001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6003),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6001__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6008 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__6009 = (counter + 1);
var G__6010 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__6008;
counter = G__6009;
last_x = G__6010;
continue;
}
}
break;
}
})(),iter__6000.call(null,cljs.core.rest.call(null,s__6001__$2)));
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
* stores extrusions into each command
*/
embodier.fileapi.collapseE = (function collapseE(layers_cmds){var iter__4160__auto__ = (function iter__6015(s__6016){return (new cljs.core.LazySeq(null,(function (){var s__6016__$1 = s__6016;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6016__$1);if(temp__4092__auto__)
{var s__6016__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6016__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6016__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6018 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6017 = 0;while(true){
if((i__6017 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__6017);cljs.core.chunk_append.call(null,b__6018,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6019 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__6020 = (counter + 1);
var G__6021 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__6019;
counter = G__6020;
last_extrusion = G__6021;
continue;
}
}
break;
}
})());
{
var G__6022 = (i__6017 + 1);
i__6017 = G__6022;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6018),iter__6015.call(null,cljs.core.chunk_rest.call(null,s__6016__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6018),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6016__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__6023 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__6024 = (counter + 1);
var G__6025 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__6023;
counter = G__6024;
last_extrusion = G__6025;
continue;
}
}
break;
}
})(),iter__6015.call(null,cljs.core.rest.call(null,s__6016__$2)));
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
* make single linked list according to extrusions
*/
embodier.fileapi.add_next = (function add_next(layers_cmds){var iter__4160__auto__ = (function iter__6046(s__6047){return (new cljs.core.LazySeq(null,(function (){var s__6047__$1 = s__6047;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6047__$1);if(temp__4092__auto__)
{var s__6047__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6047__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6047__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6049 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6048 = 0;while(true){
if((i__6048 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__6048);cljs.core.chunk_append.call(null,b__6049,(function (){var iter__4160__auto__ = ((function (i__6048,cmds,c__4158__auto__,size__4159__auto__,b__6049,s__6047__$2,temp__4092__auto__){
return (function iter__6058(s__6059){return (new cljs.core.LazySeq(null,((function (i__6048,cmds,c__4158__auto__,size__4159__auto__,b__6049,s__6047__$2,temp__4092__auto__){
return (function (){var s__6059__$1 = s__6059;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6059__$1);if(temp__4092__auto____$1)
{var s__6059__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6059__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6059__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6061 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6060 = 0;while(true){
if((i__6060 < size__4159__auto____$1))
{var i = cljs.core._nth.call(null,c__4158__auto____$1,i__6060);cljs.core.chunk_append.call(null,b__6061,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__6066 = (i__6060 + 1);
i__6060 = G__6066;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6061),iter__6058.call(null,cljs.core.chunk_rest.call(null,s__6059__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6061),null);
}
} else
{var i = cljs.core.first.call(null,s__6059__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__6058.call(null,cljs.core.rest.call(null,s__6059__$2)));
}
} else
{return null;
}
break;
}
});})(i__6048,cmds,c__4158__auto__,size__4159__auto__,b__6049,s__6047__$2,temp__4092__auto__))
,null,null));
});})(i__6048,cmds,c__4158__auto__,size__4159__auto__,b__6049,s__6047__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})());
{
var G__6067 = (i__6048 + 1);
i__6048 = G__6067;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6049),iter__6046.call(null,cljs.core.chunk_rest.call(null,s__6047__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6049),null);
}
} else
{var cmds = cljs.core.first.call(null,s__6047__$2);return cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (cmds,s__6047__$2,temp__4092__auto__){
return (function iter__6062(s__6063){return (new cljs.core.LazySeq(null,((function (cmds,s__6047__$2,temp__4092__auto__){
return (function (){var s__6063__$1 = s__6063;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6063__$1);if(temp__4092__auto____$1)
{var s__6063__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6063__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6063__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6065 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6064 = 0;while(true){
if((i__6064 < size__4159__auto__))
{var i = cljs.core._nth.call(null,c__4158__auto__,i__6064);cljs.core.chunk_append.call(null,b__6065,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__6068 = (i__6064 + 1);
i__6064 = G__6068;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6065),iter__6062.call(null,cljs.core.chunk_rest.call(null,s__6063__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6065),null);
}
} else
{var i = cljs.core.first.call(null,s__6063__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__6062.call(null,cljs.core.rest.call(null,s__6063__$2)));
}
} else
{return null;
}
break;
}
});})(cmds,s__6047__$2,temp__4092__auto__))
,null,null));
});})(cmds,s__6047__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})(),iter__6046.call(null,cljs.core.rest.call(null,s__6047__$2)));
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
return (function (p1__6069_SHARP_){if((cljs.core.first.call(null,p1__6069_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__6078 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__6074(s__6075){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__6075__$1 = s__6075;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6075__$1);if(temp__4092__auto__)
{var s__6075__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6075__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6075__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6077 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6076 = 0;while(true){
if((i__6076 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__6076);cljs.core.chunk_append.call(null,b__6077,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null));
{
var G__6081 = (i__6076 + 1);
i__6076 = G__6081;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6077),iter__6074.call(null,cljs.core.chunk_rest.call(null,s__6075__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6077),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6075__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null),iter__6074.call(null,cljs.core.rest.call(null,s__6075__$2)));
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
var G__6079 = (counter + 1);
var G__6080 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__6078;
counter = G__6079;
last_z = G__6080;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__6167(s__6168){return (new cljs.core.LazySeq(null,(function (){var s__6168__$1 = s__6168;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6168__$1);if(temp__4092__auto__)
{var s__6168__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6168__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6168__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6170 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6169 = 0;while(true){
if((i__6169 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__6169);cljs.core.chunk_append.call(null,b__6170,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__6169,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__){
return (function iter__6211(s__6212){return (new cljs.core.LazySeq(null,((function (i__6169,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__){
return (function (){var s__6212__$1 = s__6212;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6212__$1);if(temp__4092__auto____$1)
{var s__6212__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6212__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6212__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6214 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6213 = 0;while(true){
if((i__6213 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__6213);cljs.core.chunk_append.call(null,b__6214,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6213,i__6169,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6214,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__){
return (function (p1__6082_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6082_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6213,i__6169,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6214,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6213,i__6169,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6214,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__){
return (function iter__6223(s__6224){return (new cljs.core.LazySeq(null,((function (i__6213,i__6169,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6214,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__){
return (function (){var s__6224__$1 = s__6224;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6224__$1);if(temp__4092__auto____$2)
{var s__6224__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6224__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__6224__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__6226 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__6225 = 0;while(true){
if((i__6225 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__6225);cljs.core.chunk_append.call(null,b__6226,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6251 = (i__6225 + 1);
i__6225 = G__6251;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6226),iter__6223.call(null,cljs.core.chunk_rest.call(null,s__6224__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6226),null);
}
} else
{var token = cljs.core.first.call(null,s__6224__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6223.call(null,cljs.core.rest.call(null,s__6224__$2)));
}
} else
{return null;
}
break;
}
});})(i__6213,i__6169,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6214,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__))
,null,null));
});})(i__6213,i__6169,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6214,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__6252 = (i__6213 + 1);
i__6213 = G__6252;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6214),iter__6211.call(null,cljs.core.chunk_rest.call(null,s__6212__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6214),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6212__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6169,cmd,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__){
return (function (p1__6082_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6082_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6169,cmd,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6169,cmd,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__){
return (function iter__6227(s__6228){return (new cljs.core.LazySeq(null,((function (i__6169,cmd,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__){
return (function (){var s__6228__$1 = s__6228;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6228__$1);if(temp__4092__auto____$2)
{var s__6228__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6228__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6228__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6230 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6229 = 0;while(true){
if((i__6229 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__6229);cljs.core.chunk_append.call(null,b__6230,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6253 = (i__6229 + 1);
i__6229 = G__6253;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6230),iter__6227.call(null,cljs.core.chunk_rest.call(null,s__6228__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6230),null);
}
} else
{var token = cljs.core.first.call(null,s__6228__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6227.call(null,cljs.core.rest.call(null,s__6228__$2)));
}
} else
{return null;
}
break;
}
});})(i__6169,cmd,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__))
,null,null));
});})(i__6169,cmd,s__6212__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__6211.call(null,cljs.core.rest.call(null,s__6212__$2)));
}
} else
{return null;
}
break;
}
});})(i__6169,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__))
,null,null));
});})(i__6169,part,c__4158__auto__,size__4159__auto__,b__6170,s__6168__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__6254 = (i__6169 + 1);
i__6169 = G__6254;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6170),iter__6167.call(null,cljs.core.chunk_rest.call(null,s__6168__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6170),null);
}
} else
{var part = cljs.core.first.call(null,s__6168__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__6168__$2,temp__4092__auto__){
return (function iter__6231(s__6232){return (new cljs.core.LazySeq(null,((function (part,s__6168__$2,temp__4092__auto__){
return (function (){var s__6232__$1 = s__6232;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6232__$1);if(temp__4092__auto____$1)
{var s__6232__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6232__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6232__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6234 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6233 = 0;while(true){
if((i__6233 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__6233);cljs.core.chunk_append.call(null,b__6234,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6233,cmd,c__4158__auto__,size__4159__auto__,b__6234,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__){
return (function (p1__6082_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6082_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6233,cmd,c__4158__auto__,size__4159__auto__,b__6234,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6233,cmd,c__4158__auto__,size__4159__auto__,b__6234,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__){
return (function iter__6243(s__6244){return (new cljs.core.LazySeq(null,((function (i__6233,cmd,c__4158__auto__,size__4159__auto__,b__6234,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__){
return (function (){var s__6244__$1 = s__6244;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6244__$1);if(temp__4092__auto____$2)
{var s__6244__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6244__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6244__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6246 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6245 = 0;while(true){
if((i__6245 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__6245);cljs.core.chunk_append.call(null,b__6246,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6255 = (i__6245 + 1);
i__6245 = G__6255;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6246),iter__6243.call(null,cljs.core.chunk_rest.call(null,s__6244__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6246),null);
}
} else
{var token = cljs.core.first.call(null,s__6244__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6243.call(null,cljs.core.rest.call(null,s__6244__$2)));
}
} else
{return null;
}
break;
}
});})(i__6233,cmd,c__4158__auto__,size__4159__auto__,b__6234,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__))
,null,null));
});})(i__6233,cmd,c__4158__auto__,size__4159__auto__,b__6234,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__6256 = (i__6233 + 1);
i__6233 = G__6256;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6234),iter__6231.call(null,cljs.core.chunk_rest.call(null,s__6232__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6234),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6232__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__){
return (function (p1__6082_SHARP_){if(cljs.core.not_EQ_.call(null,p1__6082_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__){
return (function iter__6247(s__6248){return (new cljs.core.LazySeq(null,((function (cmd,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__){
return (function (){var s__6248__$1 = s__6248;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6248__$1);if(temp__4092__auto____$2)
{var s__6248__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6248__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6248__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6250 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6249 = 0;while(true){
if((i__6249 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__6249);cljs.core.chunk_append.call(null,b__6250,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6257 = (i__6249 + 1);
i__6249 = G__6257;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6250),iter__6247.call(null,cljs.core.chunk_rest.call(null,s__6248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6250),null);
}
} else
{var token = cljs.core.first.call(null,s__6248__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6247.call(null,cljs.core.rest.call(null,s__6248__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__6232__$2,temp__4092__auto____$1,part,s__6168__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__6231.call(null,cljs.core.rest.call(null,s__6232__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__6168__$2,temp__4092__auto__))
,null,null));
});})(part,s__6168__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__6167.call(null,cljs.core.rest.call(null,s__6168__$2)));
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.add_next.call(null,embodier.fileapi.reverse_layerscmd.call(null,embodier.fileapi.collapseE.call(null,embodier.fileapi.collapseY.call(null,embodier.fileapi.collapseX.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str)))))))))));
});
/**
* called by web component of file onload. f (file) being read into layers atom
*/
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map