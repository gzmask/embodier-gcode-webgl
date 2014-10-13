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
d.cljs$lang$applyTo = (function (arglist__13034){
var log = cljs.core.first(arglist__13034);
var logs = cljs.core.rest(arglist__13034);
return d__delegate(log,logs);
});
d.cljs$core$IFn$_invoke$arity$variadic = d__delegate;
return d;
})()
;
/**
* reverse each layers cmds
*/
embodier.fileapi.reverse_layerscmd = (function reverse_layerscmd(layers_cmds){var iter__4160__auto__ = (function iter__13039(s__13040){return (new cljs.core.LazySeq(null,(function (){var s__13040__$1 = s__13040;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13040__$1);if(temp__4092__auto__)
{var s__13040__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13040__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13040__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13042 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13041 = 0;while(true){
if((i__13041 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__13041);cljs.core.chunk_append.call(null,b__13042,cljs.core.reverse.call(null,cmds));
{
var G__13043 = (i__13041 + 1);
i__13041 = G__13043;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13042),iter__13039.call(null,cljs.core.chunk_rest.call(null,s__13040__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13042),null);
}
} else
{var cmds = cljs.core.first.call(null,s__13040__$2);return cljs.core.cons.call(null,cljs.core.reverse.call(null,cmds),iter__13039.call(null,cljs.core.rest.call(null,s__13040__$2)));
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
embodier.fileapi.collapseY = (function collapseY(layers_cmds){var iter__4160__auto__ = (function iter__13048(s__13049){return (new cljs.core.LazySeq(null,(function (){var s__13049__$1 = s__13049;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13049__$1);if(temp__4092__auto__)
{var s__13049__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13049__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13049__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13051 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13050 = 0;while(true){
if((i__13050 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__13050);cljs.core.chunk_append.call(null,b__13051,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__13052 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__13053 = (counter + 1);
var G__13054 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__13052;
counter = G__13053;
last_y = G__13054;
continue;
}
}
break;
}
})());
{
var G__13055 = (i__13050 + 1);
i__13050 = G__13055;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13051),iter__13048.call(null,cljs.core.chunk_rest.call(null,s__13049__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13051),null);
}
} else
{var cmds = cljs.core.first.call(null,s__13049__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__13056 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__13057 = (counter + 1);
var G__13058 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__13056;
counter = G__13057;
last_y = G__13058;
continue;
}
}
break;
}
})(),iter__13048.call(null,cljs.core.rest.call(null,s__13049__$2)));
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
embodier.fileapi.collapseX = (function collapseX(layers_cmds){var iter__4160__auto__ = (function iter__13063(s__13064){return (new cljs.core.LazySeq(null,(function (){var s__13064__$1 = s__13064;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13064__$1);if(temp__4092__auto__)
{var s__13064__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13064__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13064__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13066 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13065 = 0;while(true){
if((i__13065 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__13065);cljs.core.chunk_append.call(null,b__13066,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__13067 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__13068 = (counter + 1);
var G__13069 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__13067;
counter = G__13068;
last_x = G__13069;
continue;
}
}
break;
}
})());
{
var G__13070 = (i__13065 + 1);
i__13065 = G__13070;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13066),iter__13063.call(null,cljs.core.chunk_rest.call(null,s__13064__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13066),null);
}
} else
{var cmds = cljs.core.first.call(null,s__13064__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__13071 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__13072 = (counter + 1);
var G__13073 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__13071;
counter = G__13072;
last_x = G__13073;
continue;
}
}
break;
}
})(),iter__13063.call(null,cljs.core.rest.call(null,s__13064__$2)));
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
embodier.fileapi.collapseE = (function collapseE(layers_cmds){var iter__4160__auto__ = (function iter__13078(s__13079){return (new cljs.core.LazySeq(null,(function (){var s__13079__$1 = s__13079;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13079__$1);if(temp__4092__auto__)
{var s__13079__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13079__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13079__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13081 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13080 = 0;while(true){
if((i__13080 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__13080);cljs.core.chunk_append.call(null,b__13081,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__13082 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__13083 = (counter + 1);
var G__13084 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__13082;
counter = G__13083;
last_extrusion = G__13084;
continue;
}
}
break;
}
})());
{
var G__13085 = (i__13080 + 1);
i__13080 = G__13085;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13081),iter__13078.call(null,cljs.core.chunk_rest.call(null,s__13079__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13081),null);
}
} else
{var cmds = cljs.core.first.call(null,s__13079__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__13086 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__13087 = (counter + 1);
var G__13088 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__13086;
counter = G__13087;
last_extrusion = G__13088;
continue;
}
}
break;
}
})(),iter__13078.call(null,cljs.core.rest.call(null,s__13079__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,layers_cmds);
});
embodier.fileapi.jump_not_too_long_QMARK_ = (function jump_not_too_long_QMARK_(cmd,cmd_,length){var dx = (new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd_));var dy = (new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd_));var dd = ((dx * dx) + (dy * dy));return ((length * length) > dd);
});
/**
* make single linked list according to extrusions
*/
embodier.fileapi.add_next = (function add_next(layers_cmds){var iter__4160__auto__ = (function iter__13109(s__13110){return (new cljs.core.LazySeq(null,(function (){var s__13110__$1 = s__13110;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13110__$1);if(temp__4092__auto__)
{var s__13110__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13110__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13110__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13112 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13111 = 0;while(true){
if((i__13111 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__13111);cljs.core.chunk_append.call(null,b__13112,(function (){var iter__4160__auto__ = ((function (i__13111,cmds,c__4158__auto__,size__4159__auto__,b__13112,s__13110__$2,temp__4092__auto__){
return (function iter__13121(s__13122){return (new cljs.core.LazySeq(null,((function (i__13111,cmds,c__4158__auto__,size__4159__auto__,b__13112,s__13110__$2,temp__4092__auto__){
return (function (){var s__13122__$1 = s__13122;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__13122__$1);if(temp__4092__auto____$1)
{var s__13122__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13122__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__13122__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__13124 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__13123 = 0;while(true){
if((i__13123 < size__4159__auto____$1))
{var i = cljs.core._nth.call(null,c__4158__auto____$1,i__13123);cljs.core.chunk_append.call(null,b__13124,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__13129 = (i__13123 + 1);
i__13123 = G__13129;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13124),iter__13121.call(null,cljs.core.chunk_rest.call(null,s__13122__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13124),null);
}
} else
{var i = cljs.core.first.call(null,s__13122__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__13121.call(null,cljs.core.rest.call(null,s__13122__$2)));
}
} else
{return null;
}
break;
}
});})(i__13111,cmds,c__4158__auto__,size__4159__auto__,b__13112,s__13110__$2,temp__4092__auto__))
,null,null));
});})(i__13111,cmds,c__4158__auto__,size__4159__auto__,b__13112,s__13110__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})());
{
var G__13130 = (i__13111 + 1);
i__13111 = G__13130;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13112),iter__13109.call(null,cljs.core.chunk_rest.call(null,s__13110__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13112),null);
}
} else
{var cmds = cljs.core.first.call(null,s__13110__$2);return cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (cmds,s__13110__$2,temp__4092__auto__){
return (function iter__13125(s__13126){return (new cljs.core.LazySeq(null,((function (cmds,s__13110__$2,temp__4092__auto__){
return (function (){var s__13126__$1 = s__13126;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__13126__$1);if(temp__4092__auto____$1)
{var s__13126__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13126__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13126__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13128 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13127 = 0;while(true){
if((i__13127 < size__4159__auto__))
{var i = cljs.core._nth.call(null,c__4158__auto__,i__13127);cljs.core.chunk_append.call(null,b__13128,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__13131 = (i__13127 + 1);
i__13127 = G__13131;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13128),iter__13125.call(null,cljs.core.chunk_rest.call(null,s__13126__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13128),null);
}
} else
{var i = cljs.core.first.call(null,s__13126__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__13125.call(null,cljs.core.rest.call(null,s__13126__$2)));
}
} else
{return null;
}
break;
}
});})(cmds,s__13110__$2,temp__4092__auto__))
,null,null));
});})(cmds,s__13110__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})(),iter__13109.call(null,cljs.core.rest.call(null,s__13110__$2)));
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
return (function (p1__13132_SHARP_){if((cljs.core.first.call(null,p1__13132_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__13141 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__13137(s__13138){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__13138__$1 = s__13138;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13138__$1);if(temp__4092__auto__)
{var s__13138__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13138__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13138__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13140 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13139 = 0;while(true){
if((i__13139 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__13139);cljs.core.chunk_append.call(null,b__13140,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null));
{
var G__13144 = (i__13139 + 1);
i__13139 = G__13144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13140),iter__13137.call(null,cljs.core.chunk_rest.call(null,s__13138__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13140),null);
}
} else
{var cmd = cljs.core.first.call(null,s__13138__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null),iter__13137.call(null,cljs.core.rest.call(null,s__13138__$2)));
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
var G__13142 = (counter + 1);
var G__13143 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__13141;
counter = G__13142;
last_z = G__13143;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__13230(s__13231){return (new cljs.core.LazySeq(null,(function (){var s__13231__$1 = s__13231;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13231__$1);if(temp__4092__auto__)
{var s__13231__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13231__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13231__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13233 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13232 = 0;while(true){
if((i__13232 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__13232);cljs.core.chunk_append.call(null,b__13233,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__13232,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__){
return (function iter__13274(s__13275){return (new cljs.core.LazySeq(null,((function (i__13232,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__){
return (function (){var s__13275__$1 = s__13275;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__13275__$1);if(temp__4092__auto____$1)
{var s__13275__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13275__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__13275__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__13277 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__13276 = 0;while(true){
if((i__13276 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__13276);cljs.core.chunk_append.call(null,b__13277,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__13276,i__13232,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13277,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__){
return (function (p1__13145_SHARP_){if(cljs.core.not_EQ_.call(null,p1__13145_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__13276,i__13232,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13277,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__13276,i__13232,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13277,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__){
return (function iter__13286(s__13287){return (new cljs.core.LazySeq(null,((function (i__13276,i__13232,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13277,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__){
return (function (){var s__13287__$1 = s__13287;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__13287__$1);if(temp__4092__auto____$2)
{var s__13287__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__13287__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__13287__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__13289 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__13288 = 0;while(true){
if((i__13288 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__13288);cljs.core.chunk_append.call(null,b__13289,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__13314 = (i__13288 + 1);
i__13288 = G__13314;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13289),iter__13286.call(null,cljs.core.chunk_rest.call(null,s__13287__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13289),null);
}
} else
{var token = cljs.core.first.call(null,s__13287__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__13286.call(null,cljs.core.rest.call(null,s__13287__$2)));
}
} else
{return null;
}
break;
}
});})(i__13276,i__13232,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13277,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__))
,null,null));
});})(i__13276,i__13232,cmd,c__4158__auto____$1,size__4159__auto____$1,b__13277,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__13315 = (i__13276 + 1);
i__13276 = G__13315;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13277),iter__13274.call(null,cljs.core.chunk_rest.call(null,s__13275__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13277),null);
}
} else
{var cmd = cljs.core.first.call(null,s__13275__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__13232,cmd,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__){
return (function (p1__13145_SHARP_){if(cljs.core.not_EQ_.call(null,p1__13145_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__13232,cmd,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__13232,cmd,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__){
return (function iter__13290(s__13291){return (new cljs.core.LazySeq(null,((function (i__13232,cmd,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__){
return (function (){var s__13291__$1 = s__13291;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__13291__$1);if(temp__4092__auto____$2)
{var s__13291__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__13291__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__13291__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__13293 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__13292 = 0;while(true){
if((i__13292 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__13292);cljs.core.chunk_append.call(null,b__13293,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__13316 = (i__13292 + 1);
i__13292 = G__13316;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13293),iter__13290.call(null,cljs.core.chunk_rest.call(null,s__13291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13293),null);
}
} else
{var token = cljs.core.first.call(null,s__13291__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__13290.call(null,cljs.core.rest.call(null,s__13291__$2)));
}
} else
{return null;
}
break;
}
});})(i__13232,cmd,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__))
,null,null));
});})(i__13232,cmd,s__13275__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__13274.call(null,cljs.core.rest.call(null,s__13275__$2)));
}
} else
{return null;
}
break;
}
});})(i__13232,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__))
,null,null));
});})(i__13232,part,c__4158__auto__,size__4159__auto__,b__13233,s__13231__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__13317 = (i__13232 + 1);
i__13232 = G__13317;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13233),iter__13230.call(null,cljs.core.chunk_rest.call(null,s__13231__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13233),null);
}
} else
{var part = cljs.core.first.call(null,s__13231__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__13231__$2,temp__4092__auto__){
return (function iter__13294(s__13295){return (new cljs.core.LazySeq(null,((function (part,s__13231__$2,temp__4092__auto__){
return (function (){var s__13295__$1 = s__13295;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__13295__$1);if(temp__4092__auto____$1)
{var s__13295__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13295__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13295__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13297 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13296 = 0;while(true){
if((i__13296 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__13296);cljs.core.chunk_append.call(null,b__13297,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__13296,cmd,c__4158__auto__,size__4159__auto__,b__13297,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__){
return (function (p1__13145_SHARP_){if(cljs.core.not_EQ_.call(null,p1__13145_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__13296,cmd,c__4158__auto__,size__4159__auto__,b__13297,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__13296,cmd,c__4158__auto__,size__4159__auto__,b__13297,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__){
return (function iter__13306(s__13307){return (new cljs.core.LazySeq(null,((function (i__13296,cmd,c__4158__auto__,size__4159__auto__,b__13297,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__){
return (function (){var s__13307__$1 = s__13307;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__13307__$1);if(temp__4092__auto____$2)
{var s__13307__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__13307__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__13307__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__13309 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__13308 = 0;while(true){
if((i__13308 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__13308);cljs.core.chunk_append.call(null,b__13309,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__13318 = (i__13308 + 1);
i__13308 = G__13318;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13309),iter__13306.call(null,cljs.core.chunk_rest.call(null,s__13307__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13309),null);
}
} else
{var token = cljs.core.first.call(null,s__13307__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__13306.call(null,cljs.core.rest.call(null,s__13307__$2)));
}
} else
{return null;
}
break;
}
});})(i__13296,cmd,c__4158__auto__,size__4159__auto__,b__13297,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__))
,null,null));
});})(i__13296,cmd,c__4158__auto__,size__4159__auto__,b__13297,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__13319 = (i__13296 + 1);
i__13296 = G__13319;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13297),iter__13294.call(null,cljs.core.chunk_rest.call(null,s__13295__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13297),null);
}
} else
{var cmd = cljs.core.first.call(null,s__13295__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__){
return (function (p1__13145_SHARP_){if(cljs.core.not_EQ_.call(null,p1__13145_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__){
return (function iter__13310(s__13311){return (new cljs.core.LazySeq(null,((function (cmd,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__){
return (function (){var s__13311__$1 = s__13311;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__13311__$1);if(temp__4092__auto____$2)
{var s__13311__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__13311__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__13311__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__13313 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__13312 = 0;while(true){
if((i__13312 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__13312);cljs.core.chunk_append.call(null,b__13313,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__13320 = (i__13312 + 1);
i__13312 = G__13320;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13313),iter__13310.call(null,cljs.core.chunk_rest.call(null,s__13311__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13313),null);
}
} else
{var token = cljs.core.first.call(null,s__13311__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__13310.call(null,cljs.core.rest.call(null,s__13311__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__13295__$2,temp__4092__auto____$1,part,s__13231__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__13294.call(null,cljs.core.rest.call(null,s__13295__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__13231__$2,temp__4092__auto__))
,null,null));
});})(part,s__13231__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__13230.call(null,cljs.core.rest.call(null,s__13231__$2)));
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