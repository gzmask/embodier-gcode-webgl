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
d.cljs$lang$applyTo = (function (arglist__14135){
var log = cljs.core.first(arglist__14135);
var logs = cljs.core.rest(arglist__14135);
return d__delegate(log,logs);
});
d.cljs$core$IFn$_invoke$arity$variadic = d__delegate;
return d;
})()
;
/**
* reverse each layers cmds
*/
embodier.fileapi.reverse_layerscmd = (function reverse_layerscmd(layers_cmds){var iter__4160__auto__ = (function iter__14140(s__14141){return (new cljs.core.LazySeq(null,(function (){var s__14141__$1 = s__14141;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14141__$1);if(temp__4092__auto__)
{var s__14141__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14141__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14141__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14143 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14142 = 0;while(true){
if((i__14142 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__14142);cljs.core.chunk_append.call(null,b__14143,cljs.core.reverse.call(null,cmds));
{
var G__14144 = (i__14142 + 1);
i__14142 = G__14144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14143),iter__14140.call(null,cljs.core.chunk_rest.call(null,s__14141__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14143),null);
}
} else
{var cmds = cljs.core.first.call(null,s__14141__$2);return cljs.core.cons.call(null,cljs.core.reverse.call(null,cmds),iter__14140.call(null,cljs.core.rest.call(null,s__14141__$2)));
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
embodier.fileapi.collapseY = (function collapseY(layers_cmds){var iter__4160__auto__ = (function iter__14149(s__14150){return (new cljs.core.LazySeq(null,(function (){var s__14150__$1 = s__14150;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14150__$1);if(temp__4092__auto__)
{var s__14150__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14150__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14150__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14152 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14151 = 0;while(true){
if((i__14151 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__14151);cljs.core.chunk_append.call(null,b__14152,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__14153 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__14154 = (counter + 1);
var G__14155 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__14153;
counter = G__14154;
last_y = G__14155;
continue;
}
}
break;
}
})());
{
var G__14156 = (i__14151 + 1);
i__14151 = G__14156;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14152),iter__14149.call(null,cljs.core.chunk_rest.call(null,s__14150__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14152),null);
}
} else
{var cmds = cljs.core.first.call(null,s__14150__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__14157 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__14158 = (counter + 1);
var G__14159 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__14157;
counter = G__14158;
last_y = G__14159;
continue;
}
}
break;
}
})(),iter__14149.call(null,cljs.core.rest.call(null,s__14150__$2)));
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
embodier.fileapi.collapseX = (function collapseX(layers_cmds){var iter__4160__auto__ = (function iter__14164(s__14165){return (new cljs.core.LazySeq(null,(function (){var s__14165__$1 = s__14165;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14165__$1);if(temp__4092__auto__)
{var s__14165__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14165__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14165__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14167 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14166 = 0;while(true){
if((i__14166 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__14166);cljs.core.chunk_append.call(null,b__14167,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__14168 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__14169 = (counter + 1);
var G__14170 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__14168;
counter = G__14169;
last_x = G__14170;
continue;
}
}
break;
}
})());
{
var G__14171 = (i__14166 + 1);
i__14166 = G__14171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14167),iter__14164.call(null,cljs.core.chunk_rest.call(null,s__14165__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14167),null);
}
} else
{var cmds = cljs.core.first.call(null,s__14165__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__14172 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__14173 = (counter + 1);
var G__14174 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__14172;
counter = G__14173;
last_x = G__14174;
continue;
}
}
break;
}
})(),iter__14164.call(null,cljs.core.rest.call(null,s__14165__$2)));
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
embodier.fileapi.collapseE = (function collapseE(layers_cmds){var iter__4160__auto__ = (function iter__14179(s__14180){return (new cljs.core.LazySeq(null,(function (){var s__14180__$1 = s__14180;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14180__$1);if(temp__4092__auto__)
{var s__14180__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14180__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14180__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14182 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14181 = 0;while(true){
if((i__14181 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__14181);cljs.core.chunk_append.call(null,b__14182,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__14183 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion,new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds));
var G__14184 = (counter + 1);
var G__14185 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__14183;
counter = G__14184;
last_extrusion = G__14185;
continue;
}
}
break;
}
})());
{
var G__14186 = (i__14181 + 1);
i__14181 = G__14186;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14182),iter__14179.call(null,cljs.core.chunk_rest.call(null,s__14180__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14182),null);
}
} else
{var cmds = cljs.core.first.call(null,s__14180__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__14187 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion,new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds));
var G__14188 = (counter + 1);
var G__14189 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__14187;
counter = G__14188;
last_extrusion = G__14189;
continue;
}
}
break;
}
})(),iter__14179.call(null,cljs.core.rest.call(null,s__14180__$2)));
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
embodier.fileapi.remove_long_jumps = (function remove_long_jumps(layers_cmds){var iter__4160__auto__ = (function iter__14210(s__14211){return (new cljs.core.LazySeq(null,(function (){var s__14211__$1 = s__14211;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14211__$1);if(temp__4092__auto__)
{var s__14211__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14211__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14211__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14213 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14212 = 0;while(true){
if((i__14212 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__14212);cljs.core.chunk_append.call(null,b__14213,(function (){var iter__4160__auto__ = ((function (i__14212,cmds,c__4158__auto__,size__4159__auto__,b__14213,s__14211__$2,temp__4092__auto__){
return (function iter__14222(s__14223){return (new cljs.core.LazySeq(null,((function (i__14212,cmds,c__4158__auto__,size__4159__auto__,b__14213,s__14211__$2,temp__4092__auto__){
return (function (){var s__14223__$1 = s__14223;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14223__$1);if(temp__4092__auto____$1)
{var s__14223__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14223__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__14223__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__14225 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__14224 = 0;while(true){
if((i__14224 < size__4159__auto____$1))
{var i = cljs.core._nth.call(null,c__4158__auto____$1,i__14224);cljs.core.chunk_append.call(null,b__14225,((embodier.fileapi.jump_not_too_long_QMARK_.call(null,cljs.core.nth.call(null,cmds,i),cljs.core.nth.call(null,cmds,(i - 1)),5))?cljs.core.nth.call(null,cmds,i):(function (){embodier.fileapi.d.call(null,cljs.core.nth.call(null,cmds,i),cljs.core.nth.call(null,cmds,(i - 1)));
return null;
})()));
{
var G__14230 = (i__14224 + 1);
i__14224 = G__14230;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14225),iter__14222.call(null,cljs.core.chunk_rest.call(null,s__14223__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14225),null);
}
} else
{var i = cljs.core.first.call(null,s__14223__$2);return cljs.core.cons.call(null,((embodier.fileapi.jump_not_too_long_QMARK_.call(null,cljs.core.nth.call(null,cmds,i),cljs.core.nth.call(null,cmds,(i - 1)),5))?cljs.core.nth.call(null,cmds,i):(function (){embodier.fileapi.d.call(null,cljs.core.nth.call(null,cmds,i),cljs.core.nth.call(null,cmds,(i - 1)));
return null;
})()),iter__14222.call(null,cljs.core.rest.call(null,s__14223__$2)));
}
} else
{return null;
}
break;
}
});})(i__14212,cmds,c__4158__auto__,size__4159__auto__,b__14213,s__14211__$2,temp__4092__auto__))
,null,null));
});})(i__14212,cmds,c__4158__auto__,size__4159__auto__,b__14213,s__14211__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,1,(cljs.core.count.call(null,cmds) - 1)));
})());
{
var G__14231 = (i__14212 + 1);
i__14212 = G__14231;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14213),iter__14210.call(null,cljs.core.chunk_rest.call(null,s__14211__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14213),null);
}
} else
{var cmds = cljs.core.first.call(null,s__14211__$2);return cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (cmds,s__14211__$2,temp__4092__auto__){
return (function iter__14226(s__14227){return (new cljs.core.LazySeq(null,((function (cmds,s__14211__$2,temp__4092__auto__){
return (function (){var s__14227__$1 = s__14227;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14227__$1);if(temp__4092__auto____$1)
{var s__14227__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14227__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14227__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14229 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14228 = 0;while(true){
if((i__14228 < size__4159__auto__))
{var i = cljs.core._nth.call(null,c__4158__auto__,i__14228);cljs.core.chunk_append.call(null,b__14229,((embodier.fileapi.jump_not_too_long_QMARK_.call(null,cljs.core.nth.call(null,cmds,i),cljs.core.nth.call(null,cmds,(i - 1)),5))?cljs.core.nth.call(null,cmds,i):(function (){embodier.fileapi.d.call(null,cljs.core.nth.call(null,cmds,i),cljs.core.nth.call(null,cmds,(i - 1)));
return null;
})()));
{
var G__14232 = (i__14228 + 1);
i__14228 = G__14232;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14229),iter__14226.call(null,cljs.core.chunk_rest.call(null,s__14227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14229),null);
}
} else
{var i = cljs.core.first.call(null,s__14227__$2);return cljs.core.cons.call(null,((embodier.fileapi.jump_not_too_long_QMARK_.call(null,cljs.core.nth.call(null,cmds,i),cljs.core.nth.call(null,cmds,(i - 1)),5))?cljs.core.nth.call(null,cmds,i):(function (){embodier.fileapi.d.call(null,cljs.core.nth.call(null,cmds,i),cljs.core.nth.call(null,cmds,(i - 1)));
return null;
})()),iter__14226.call(null,cljs.core.rest.call(null,s__14227__$2)));
}
} else
{return null;
}
break;
}
});})(cmds,s__14211__$2,temp__4092__auto__))
,null,null));
});})(cmds,s__14211__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,1,(cljs.core.count.call(null,cmds) - 1)));
})(),iter__14210.call(null,cljs.core.rest.call(null,s__14211__$2)));
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
embodier.fileapi.remove_jumps = (function remove_jumps(layers_cmds){var iter__4160__auto__ = (function iter__14237(s__14238){return (new cljs.core.LazySeq(null,(function (){var s__14238__$1 = s__14238;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14238__$1);if(temp__4092__auto__)
{var s__14238__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14238__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14238__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14240 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14239 = 0;while(true){
if((i__14239 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__14239);cljs.core.chunk_append.call(null,b__14240,cljs.core.filter.call(null,((function (i__14239,cmds,c__4158__auto__,size__4159__auto__,b__14240,s__14238__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__14239,cmds,c__4158__auto__,size__4159__auto__,b__14240,s__14238__$2,temp__4092__auto__))
,cmds));
{
var G__14241 = (i__14239 + 1);
i__14239 = G__14241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14240),iter__14237.call(null,cljs.core.chunk_rest.call(null,s__14238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14240),null);
}
} else
{var cmds = cljs.core.first.call(null,s__14238__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__14238__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__14238__$2,temp__4092__auto__))
,cmds),iter__14237.call(null,cljs.core.rest.call(null,s__14238__$2)));
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
return (function (p1__14242_SHARP_){if((cljs.core.first.call(null,p1__14242_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__14251 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__14247(s__14248){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__14248__$1 = s__14248;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14248__$1);if(temp__4092__auto__)
{var s__14248__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14248__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14248__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14250 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14249 = 0;while(true){
if((i__14249 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__14249);cljs.core.chunk_append.call(null,b__14250,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null));
{
var G__14254 = (i__14249 + 1);
i__14249 = G__14254;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14250),iter__14247.call(null,cljs.core.chunk_rest.call(null,s__14248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14250),null);
}
} else
{var cmd = cljs.core.first.call(null,s__14248__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null),iter__14247.call(null,cljs.core.rest.call(null,s__14248__$2)));
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
var G__14252 = (counter + 1);
var G__14253 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__14251;
counter = G__14252;
last_z = G__14253;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__14340(s__14341){return (new cljs.core.LazySeq(null,(function (){var s__14341__$1 = s__14341;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14341__$1);if(temp__4092__auto__)
{var s__14341__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14341__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14341__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14343 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14342 = 0;while(true){
if((i__14342 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__14342);cljs.core.chunk_append.call(null,b__14343,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__14342,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__){
return (function iter__14384(s__14385){return (new cljs.core.LazySeq(null,((function (i__14342,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__){
return (function (){var s__14385__$1 = s__14385;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14385__$1);if(temp__4092__auto____$1)
{var s__14385__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14385__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__14385__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__14387 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__14386 = 0;while(true){
if((i__14386 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__14386);cljs.core.chunk_append.call(null,b__14387,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__14386,i__14342,cmd,c__4158__auto____$1,size__4159__auto____$1,b__14387,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__){
return (function (p1__14255_SHARP_){if(cljs.core.not_EQ_.call(null,p1__14255_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__14386,i__14342,cmd,c__4158__auto____$1,size__4159__auto____$1,b__14387,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__14386,i__14342,cmd,c__4158__auto____$1,size__4159__auto____$1,b__14387,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__){
return (function iter__14396(s__14397){return (new cljs.core.LazySeq(null,((function (i__14386,i__14342,cmd,c__4158__auto____$1,size__4159__auto____$1,b__14387,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__){
return (function (){var s__14397__$1 = s__14397;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__14397__$1);if(temp__4092__auto____$2)
{var s__14397__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__14397__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__14397__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__14399 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__14398 = 0;while(true){
if((i__14398 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__14398);cljs.core.chunk_append.call(null,b__14399,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__14424 = (i__14398 + 1);
i__14398 = G__14424;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14399),iter__14396.call(null,cljs.core.chunk_rest.call(null,s__14397__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14399),null);
}
} else
{var token = cljs.core.first.call(null,s__14397__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__14396.call(null,cljs.core.rest.call(null,s__14397__$2)));
}
} else
{return null;
}
break;
}
});})(i__14386,i__14342,cmd,c__4158__auto____$1,size__4159__auto____$1,b__14387,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__))
,null,null));
});})(i__14386,i__14342,cmd,c__4158__auto____$1,size__4159__auto____$1,b__14387,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__14425 = (i__14386 + 1);
i__14386 = G__14425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14387),iter__14384.call(null,cljs.core.chunk_rest.call(null,s__14385__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14387),null);
}
} else
{var cmd = cljs.core.first.call(null,s__14385__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__14342,cmd,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__){
return (function (p1__14255_SHARP_){if(cljs.core.not_EQ_.call(null,p1__14255_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__14342,cmd,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__14342,cmd,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__){
return (function iter__14400(s__14401){return (new cljs.core.LazySeq(null,((function (i__14342,cmd,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__){
return (function (){var s__14401__$1 = s__14401;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__14401__$1);if(temp__4092__auto____$2)
{var s__14401__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__14401__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__14401__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__14403 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__14402 = 0;while(true){
if((i__14402 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__14402);cljs.core.chunk_append.call(null,b__14403,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__14426 = (i__14402 + 1);
i__14402 = G__14426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14403),iter__14400.call(null,cljs.core.chunk_rest.call(null,s__14401__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14403),null);
}
} else
{var token = cljs.core.first.call(null,s__14401__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__14400.call(null,cljs.core.rest.call(null,s__14401__$2)));
}
} else
{return null;
}
break;
}
});})(i__14342,cmd,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__))
,null,null));
});})(i__14342,cmd,s__14385__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__14384.call(null,cljs.core.rest.call(null,s__14385__$2)));
}
} else
{return null;
}
break;
}
});})(i__14342,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__))
,null,null));
});})(i__14342,part,c__4158__auto__,size__4159__auto__,b__14343,s__14341__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__14427 = (i__14342 + 1);
i__14342 = G__14427;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14343),iter__14340.call(null,cljs.core.chunk_rest.call(null,s__14341__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14343),null);
}
} else
{var part = cljs.core.first.call(null,s__14341__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__14341__$2,temp__4092__auto__){
return (function iter__14404(s__14405){return (new cljs.core.LazySeq(null,((function (part,s__14341__$2,temp__4092__auto__){
return (function (){var s__14405__$1 = s__14405;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14405__$1);if(temp__4092__auto____$1)
{var s__14405__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14405__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14405__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14407 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14406 = 0;while(true){
if((i__14406 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__14406);cljs.core.chunk_append.call(null,b__14407,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__14406,cmd,c__4158__auto__,size__4159__auto__,b__14407,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__){
return (function (p1__14255_SHARP_){if(cljs.core.not_EQ_.call(null,p1__14255_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__14406,cmd,c__4158__auto__,size__4159__auto__,b__14407,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__14406,cmd,c__4158__auto__,size__4159__auto__,b__14407,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__){
return (function iter__14416(s__14417){return (new cljs.core.LazySeq(null,((function (i__14406,cmd,c__4158__auto__,size__4159__auto__,b__14407,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__){
return (function (){var s__14417__$1 = s__14417;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__14417__$1);if(temp__4092__auto____$2)
{var s__14417__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__14417__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__14417__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__14419 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__14418 = 0;while(true){
if((i__14418 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__14418);cljs.core.chunk_append.call(null,b__14419,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__14428 = (i__14418 + 1);
i__14418 = G__14428;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14419),iter__14416.call(null,cljs.core.chunk_rest.call(null,s__14417__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14419),null);
}
} else
{var token = cljs.core.first.call(null,s__14417__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__14416.call(null,cljs.core.rest.call(null,s__14417__$2)));
}
} else
{return null;
}
break;
}
});})(i__14406,cmd,c__4158__auto__,size__4159__auto__,b__14407,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__))
,null,null));
});})(i__14406,cmd,c__4158__auto__,size__4159__auto__,b__14407,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__14429 = (i__14406 + 1);
i__14406 = G__14429;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14407),iter__14404.call(null,cljs.core.chunk_rest.call(null,s__14405__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14407),null);
}
} else
{var cmd = cljs.core.first.call(null,s__14405__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__){
return (function (p1__14255_SHARP_){if(cljs.core.not_EQ_.call(null,p1__14255_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__){
return (function iter__14420(s__14421){return (new cljs.core.LazySeq(null,((function (cmd,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__){
return (function (){var s__14421__$1 = s__14421;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__14421__$1);if(temp__4092__auto____$2)
{var s__14421__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__14421__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__14421__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__14423 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__14422 = 0;while(true){
if((i__14422 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__14422);cljs.core.chunk_append.call(null,b__14423,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__14430 = (i__14422 + 1);
i__14422 = G__14430;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14423),iter__14420.call(null,cljs.core.chunk_rest.call(null,s__14421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14423),null);
}
} else
{var token = cljs.core.first.call(null,s__14421__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__14420.call(null,cljs.core.rest.call(null,s__14421__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__14405__$2,temp__4092__auto____$1,part,s__14341__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__14404.call(null,cljs.core.rest.call(null,s__14405__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__14341__$2,temp__4092__auto__))
,null,null));
});})(part,s__14341__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__14340.call(null,cljs.core.rest.call(null,s__14341__$2)));
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.remove_long_jumps.call(null,embodier.fileapi.reverse_layerscmd.call(null,embodier.fileapi.collapseE.call(null,embodier.fileapi.collapseY.call(null,embodier.fileapi.collapseX.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str)))))))))));
});
/**
* called by web component of file onload. f (file) being read into layers atom
*/
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map