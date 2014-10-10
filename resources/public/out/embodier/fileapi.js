// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* reverse each layers cmds
*/
embodier.fileapi.reverse_layerscmd = (function reverse_layerscmd(layers_cmds){var iter__4158__auto__ = (function iter__5276(s__5277){return (new cljs.core.LazySeq(null,(function (){var s__5277__$1 = s__5277;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5277__$1);if(temp__4092__auto__)
{var s__5277__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5277__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5277__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5279 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5278 = 0;while(true){
if((i__5278 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5278);cljs.core.chunk_append.call(null,b__5279,cljs.core.reverse.call(null,cmds));
{
var G__5280 = (i__5278 + 1);
i__5278 = G__5280;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5279),iter__5276.call(null,cljs.core.chunk_rest.call(null,s__5277__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5279),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5277__$2);return cljs.core.cons.call(null,cljs.core.reverse.call(null,cmds),iter__5276.call(null,cljs.core.rest.call(null,s__5277__$2)));
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
* stores Y into each command
*/
embodier.fileapi.collapseY = (function collapseY(layers_cmds){var iter__4158__auto__ = (function iter__5285(s__5286){return (new cljs.core.LazySeq(null,(function (){var s__5286__$1 = s__5286;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5286__$1);if(temp__4092__auto__)
{var s__5286__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5286__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5286__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5288 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5287 = 0;while(true){
if((i__5287 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5287);cljs.core.chunk_append.call(null,b__5288,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5289 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5290 = (counter + 1);
var G__5291 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5289;
counter = G__5290;
last_y = G__5291;
continue;
}
}
break;
}
})());
{
var G__5292 = (i__5287 + 1);
i__5287 = G__5292;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5288),iter__5285.call(null,cljs.core.chunk_rest.call(null,s__5286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5288),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5286__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5293 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5294 = (counter + 1);
var G__5295 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5293;
counter = G__5294;
last_y = G__5295;
continue;
}
}
break;
}
})(),iter__5285.call(null,cljs.core.rest.call(null,s__5286__$2)));
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
* stores X into each command
*/
embodier.fileapi.collapseX = (function collapseX(layers_cmds){var iter__4158__auto__ = (function iter__5300(s__5301){return (new cljs.core.LazySeq(null,(function (){var s__5301__$1 = s__5301;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5301__$1);if(temp__4092__auto__)
{var s__5301__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5301__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5301__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5303 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5302 = 0;while(true){
if((i__5302 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5302);cljs.core.chunk_append.call(null,b__5303,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5304 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5305 = (counter + 1);
var G__5306 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5304;
counter = G__5305;
last_x = G__5306;
continue;
}
}
break;
}
})());
{
var G__5307 = (i__5302 + 1);
i__5302 = G__5307;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5303),iter__5300.call(null,cljs.core.chunk_rest.call(null,s__5301__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5303),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5301__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5308 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5309 = (counter + 1);
var G__5310 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5308;
counter = G__5309;
last_x = G__5310;
continue;
}
}
break;
}
})(),iter__5300.call(null,cljs.core.rest.call(null,s__5301__$2)));
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
* stores extrusions into each command
*/
embodier.fileapi.collapseE = (function collapseE(layers_cmds){var iter__4158__auto__ = (function iter__5315(s__5316){return (new cljs.core.LazySeq(null,(function (){var s__5316__$1 = s__5316;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5316__$1);if(temp__4092__auto__)
{var s__5316__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5316__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5316__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5318 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5317 = 0;while(true){
if((i__5317 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5317);cljs.core.chunk_append.call(null,b__5318,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5319 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion,new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds));
var G__5320 = (counter + 1);
var G__5321 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5319;
counter = G__5320;
last_extrusion = G__5321;
continue;
}
}
break;
}
})());
{
var G__5322 = (i__5317 + 1);
i__5317 = G__5322;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5318),iter__5315.call(null,cljs.core.chunk_rest.call(null,s__5316__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5318),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5316__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5323 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion,new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds));
var G__5324 = (counter + 1);
var G__5325 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5323;
counter = G__5324;
last_extrusion = G__5325;
continue;
}
}
break;
}
})(),iter__5315.call(null,cljs.core.rest.call(null,s__5316__$2)));
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
embodier.fileapi.remove_jumps = (function remove_jumps(layers_cmds){var iter__4158__auto__ = (function iter__5330(s__5331){return (new cljs.core.LazySeq(null,(function (){var s__5331__$1 = s__5331;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5331__$1);if(temp__4092__auto__)
{var s__5331__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5331__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5331__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5333 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5332 = 0;while(true){
if((i__5332 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5332);cljs.core.chunk_append.call(null,b__5333,cljs.core.filter.call(null,((function (i__5332,cmds,c__4156__auto__,size__4157__auto__,b__5333,s__5331__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__5332,cmds,c__4156__auto__,size__4157__auto__,b__5333,s__5331__$2,temp__4092__auto__))
,cmds));
{
var G__5334 = (i__5332 + 1);
i__5332 = G__5334;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5333),iter__5330.call(null,cljs.core.chunk_rest.call(null,s__5331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5333),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5331__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__5331__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__5331__$2,temp__4092__auto__))
,cmds),iter__5330.call(null,cljs.core.rest.call(null,s__5331__$2)));
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
return (function (p1__5335_SHARP_){if((cljs.core.first.call(null,p1__5335_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__5344 = cljs.core.cons.call(null,(function (){var iter__4158__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__5340(s__5341){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__5341__$1 = s__5341;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5341__$1);if(temp__4092__auto__)
{var s__5341__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5341__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5341__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5343 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5342 = 0;while(true){
if((i__5342 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__5342);cljs.core.chunk_append.call(null,b__5343,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null));
{
var G__5347 = (i__5342 + 1);
i__5342 = G__5347;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5343),iter__5340.call(null,cljs.core.chunk_rest.call(null,s__5341__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5343),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5341__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null),iter__5340.call(null,cljs.core.rest.call(null,s__5341__$2)));
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
var G__5345 = (counter + 1);
var G__5346 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__5344;
counter = G__5345;
last_z = G__5346;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = (function iter__5433(s__5434){return (new cljs.core.LazySeq(null,(function (){var s__5434__$1 = s__5434;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5434__$1);if(temp__4092__auto__)
{var s__5434__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5434__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5434__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5436 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5435 = 0;while(true){
if((i__5435 < size__4157__auto__))
{var part = cljs.core._nth.call(null,c__4156__auto__,i__5435);cljs.core.chunk_append.call(null,b__5436,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (i__5435,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__){
return (function iter__5477(s__5478){return (new cljs.core.LazySeq(null,((function (i__5435,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__){
return (function (){var s__5478__$1 = s__5478;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5478__$1);if(temp__4092__auto____$1)
{var s__5478__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5478__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5478__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5480 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5479 = 0;while(true){
if((i__5479 < size__4157__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4156__auto____$1,i__5479);cljs.core.chunk_append.call(null,b__5480,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5479,i__5435,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5480,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__){
return (function (p1__5348_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5348_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5479,i__5435,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5480,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5479,i__5435,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5480,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__){
return (function iter__5489(s__5490){return (new cljs.core.LazySeq(null,((function (i__5479,i__5435,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5480,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__){
return (function (){var s__5490__$1 = s__5490;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5490__$1);if(temp__4092__auto____$2)
{var s__5490__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5490__$2))
{var c__4156__auto____$2 = cljs.core.chunk_first.call(null,s__5490__$2);var size__4157__auto____$2 = cljs.core.count.call(null,c__4156__auto____$2);var b__5492 = cljs.core.chunk_buffer.call(null,size__4157__auto____$2);if((function (){var i__5491 = 0;while(true){
if((i__5491 < size__4157__auto____$2))
{var token = cljs.core._nth.call(null,c__4156__auto____$2,i__5491);cljs.core.chunk_append.call(null,b__5492,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5517 = (i__5491 + 1);
i__5491 = G__5517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5492),iter__5489.call(null,cljs.core.chunk_rest.call(null,s__5490__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5492),null);
}
} else
{var token = cljs.core.first.call(null,s__5490__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5489.call(null,cljs.core.rest.call(null,s__5490__$2)));
}
} else
{return null;
}
break;
}
});})(i__5479,i__5435,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5480,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__))
,null,null));
});})(i__5479,i__5435,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5480,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5518 = (i__5479 + 1);
i__5479 = G__5518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5480),iter__5477.call(null,cljs.core.chunk_rest.call(null,s__5478__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5480),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5478__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5435,cmd,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__){
return (function (p1__5348_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5348_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5435,cmd,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5435,cmd,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__){
return (function iter__5493(s__5494){return (new cljs.core.LazySeq(null,((function (i__5435,cmd,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__){
return (function (){var s__5494__$1 = s__5494;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5494__$1);if(temp__4092__auto____$2)
{var s__5494__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5494__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5494__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5496 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5495 = 0;while(true){
if((i__5495 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__5495);cljs.core.chunk_append.call(null,b__5496,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5519 = (i__5495 + 1);
i__5495 = G__5519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5496),iter__5493.call(null,cljs.core.chunk_rest.call(null,s__5494__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5496),null);
}
} else
{var token = cljs.core.first.call(null,s__5494__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5493.call(null,cljs.core.rest.call(null,s__5494__$2)));
}
} else
{return null;
}
break;
}
});})(i__5435,cmd,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__))
,null,null));
});})(i__5435,cmd,s__5478__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5477.call(null,cljs.core.rest.call(null,s__5478__$2)));
}
} else
{return null;
}
break;
}
});})(i__5435,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__))
,null,null));
});})(i__5435,part,c__4156__auto__,size__4157__auto__,b__5436,s__5434__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()));
{
var G__5520 = (i__5435 + 1);
i__5435 = G__5520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5436),iter__5433.call(null,cljs.core.chunk_rest.call(null,s__5434__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5436),null);
}
} else
{var part = cljs.core.first.call(null,s__5434__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (part,s__5434__$2,temp__4092__auto__){
return (function iter__5497(s__5498){return (new cljs.core.LazySeq(null,((function (part,s__5434__$2,temp__4092__auto__){
return (function (){var s__5498__$1 = s__5498;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5498__$1);if(temp__4092__auto____$1)
{var s__5498__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5498__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5498__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5500 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5499 = 0;while(true){
if((i__5499 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__5499);cljs.core.chunk_append.call(null,b__5500,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5499,cmd,c__4156__auto__,size__4157__auto__,b__5500,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__){
return (function (p1__5348_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5348_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5499,cmd,c__4156__auto__,size__4157__auto__,b__5500,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5499,cmd,c__4156__auto__,size__4157__auto__,b__5500,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__){
return (function iter__5509(s__5510){return (new cljs.core.LazySeq(null,((function (i__5499,cmd,c__4156__auto__,size__4157__auto__,b__5500,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__){
return (function (){var s__5510__$1 = s__5510;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5510__$1);if(temp__4092__auto____$2)
{var s__5510__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5510__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5510__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5512 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5511 = 0;while(true){
if((i__5511 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__5511);cljs.core.chunk_append.call(null,b__5512,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5521 = (i__5511 + 1);
i__5511 = G__5521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5512),iter__5509.call(null,cljs.core.chunk_rest.call(null,s__5510__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5512),null);
}
} else
{var token = cljs.core.first.call(null,s__5510__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5509.call(null,cljs.core.rest.call(null,s__5510__$2)));
}
} else
{return null;
}
break;
}
});})(i__5499,cmd,c__4156__auto__,size__4157__auto__,b__5500,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__))
,null,null));
});})(i__5499,cmd,c__4156__auto__,size__4157__auto__,b__5500,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5522 = (i__5499 + 1);
i__5499 = G__5522;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5500),iter__5497.call(null,cljs.core.chunk_rest.call(null,s__5498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5500),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5498__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__){
return (function (p1__5348_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5348_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (cmd,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__){
return (function iter__5513(s__5514){return (new cljs.core.LazySeq(null,((function (cmd,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__){
return (function (){var s__5514__$1 = s__5514;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5514__$1);if(temp__4092__auto____$2)
{var s__5514__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5514__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5514__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5516 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5515 = 0;while(true){
if((i__5515 < size__4157__auto__))
{var token = cljs.core._nth.call(null,c__4156__auto__,i__5515);cljs.core.chunk_append.call(null,b__5516,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5523 = (i__5515 + 1);
i__5515 = G__5523;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5516),iter__5513.call(null,cljs.core.chunk_rest.call(null,s__5514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5516),null);
}
} else
{var token = cljs.core.first.call(null,s__5514__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5513.call(null,cljs.core.rest.call(null,s__5514__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__5498__$2,temp__4092__auto____$1,part,s__5434__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5497.call(null,cljs.core.rest.call(null,s__5498__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__5434__$2,temp__4092__auto__))
,null,null));
});})(part,s__5434__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()),iter__5433.call(null,cljs.core.rest.call(null,s__5434__$2)));
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.remove_jumps.call(null,embodier.fileapi.reverse_layerscmd.call(null,embodier.fileapi.collapseE.call(null,embodier.fileapi.collapseY.call(null,embodier.fileapi.collapseX.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str)))))))))));
});
/**
* called by web component of file onload. f (file) being read into layers atom
*/
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map