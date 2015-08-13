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
d.cljs$lang$applyTo = (function (arglist__5370){
var log = cljs.core.first(arglist__5370);
var logs = cljs.core.rest(arglist__5370);
return d__delegate(log,logs);
});
d.cljs$core$IFn$_invoke$arity$variadic = d__delegate;
return d;
})()
;
/**
* reverse each layers cmds
*/
embodier.fileapi.reverse_layerscmd = (function reverse_layerscmd(layers_cmds){var iter__4158__auto__ = (function iter__5375(s__5376){return (new cljs.core.LazySeq(null,(function (){var s__5376__$1 = s__5376;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5376__$1);if(temp__4092__auto__)
{var s__5376__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5376__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5376__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5378 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5377 = 0;while(true){
if((i__5377 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5377);cljs.core.chunk_append.call(null,b__5378,cljs.core.reverse.call(null,cmds));
{
var G__5379 = (i__5377 + 1);
i__5377 = G__5379;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5378),iter__5375.call(null,cljs.core.chunk_rest.call(null,s__5376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5378),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5376__$2);return cljs.core.cons.call(null,cljs.core.reverse.call(null,cmds),iter__5375.call(null,cljs.core.rest.call(null,s__5376__$2)));
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
embodier.fileapi.collapseY = (function collapseY(layers_cmds){var iter__4158__auto__ = (function iter__5384(s__5385){return (new cljs.core.LazySeq(null,(function (){var s__5385__$1 = s__5385;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5385__$1);if(temp__4092__auto__)
{var s__5385__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5385__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5385__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5387 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5386 = 0;while(true){
if((i__5386 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5386);cljs.core.chunk_append.call(null,b__5387,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5388 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5389 = (counter + 1);
var G__5390 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5388;
counter = G__5389;
last_y = G__5390;
continue;
}
}
break;
}
})());
{
var G__5391 = (i__5386 + 1);
i__5386 = G__5391;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5387),iter__5384.call(null,cljs.core.chunk_rest.call(null,s__5385__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5387),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5385__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5392 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5393 = (counter + 1);
var G__5394 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5392;
counter = G__5393;
last_y = G__5394;
continue;
}
}
break;
}
})(),iter__5384.call(null,cljs.core.rest.call(null,s__5385__$2)));
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
embodier.fileapi.collapseX = (function collapseX(layers_cmds){var iter__4158__auto__ = (function iter__5399(s__5400){return (new cljs.core.LazySeq(null,(function (){var s__5400__$1 = s__5400;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5400__$1);if(temp__4092__auto__)
{var s__5400__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5400__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5400__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5402 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5401 = 0;while(true){
if((i__5401 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5401);cljs.core.chunk_append.call(null,b__5402,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5403 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5404 = (counter + 1);
var G__5405 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5403;
counter = G__5404;
last_x = G__5405;
continue;
}
}
break;
}
})());
{
var G__5406 = (i__5401 + 1);
i__5401 = G__5406;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5402),iter__5399.call(null,cljs.core.chunk_rest.call(null,s__5400__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5402),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5400__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5407 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5408 = (counter + 1);
var G__5409 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5407;
counter = G__5408;
last_x = G__5409;
continue;
}
}
break;
}
})(),iter__5399.call(null,cljs.core.rest.call(null,s__5400__$2)));
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
embodier.fileapi.collapseE = (function collapseE(layers_cmds){var iter__4158__auto__ = (function iter__5414(s__5415){return (new cljs.core.LazySeq(null,(function (){var s__5415__$1 = s__5415;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5415__$1);if(temp__4092__auto__)
{var s__5415__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5415__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5415__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5417 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5416 = 0;while(true){
if((i__5416 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5416);cljs.core.chunk_append.call(null,b__5417,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5418 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5419 = (counter + 1);
var G__5420 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5418;
counter = G__5419;
last_extrusion = G__5420;
continue;
}
}
break;
}
})());
{
var G__5421 = (i__5416 + 1);
i__5416 = G__5421;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5417),iter__5414.call(null,cljs.core.chunk_rest.call(null,s__5415__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5417),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5415__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5422 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5423 = (counter + 1);
var G__5424 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5422;
counter = G__5423;
last_extrusion = G__5424;
continue;
}
}
break;
}
})(),iter__5414.call(null,cljs.core.rest.call(null,s__5415__$2)));
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
* stores XY into each command
*/
embodier.fileapi.collapseXYE = (function collapseXYE(layers_cmds){var iter__4158__auto__ = (function iter__5451(s__5452){return (new cljs.core.LazySeq(null,(function (){var s__5452__$1 = s__5452;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5452__$1);if(temp__4092__auto__)
{var s__5452__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5452__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5452__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5454 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5453 = 0;while(true){
if((i__5453 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5453);cljs.core.chunk_append.call(null,b__5454,(function (){var last_x = cljs.core.atom.call(null,0);var last_y = cljs.core.atom.call(null,0);var last_e = cljs.core.atom.call(null,0);var iter__4158__auto__ = ((function (i__5453,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function iter__5463(s__5464){return (new cljs.core.LazySeq(null,((function (i__5453,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (){var s__5464__$1 = s__5464;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5464__$1);if(temp__4092__auto____$1)
{var s__5464__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5464__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5464__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5466 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5465 = 0;while(true){
if((i__5465 < size__4157__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4156__auto____$1,i__5465);cljs.core.chunk_append.call(null,b__5466,((function (i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5430_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5430_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5430_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__5430_SHARP_;
}
});})(i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5429_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5429_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5429_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__5429_SHARP_;
}
});})(i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5428_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5428_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5428_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__5428_SHARP_;
}
});})(i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5427_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5427_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5427_SHARP_));
} else
{}
return p1__5427_SHARP_;
});})(i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5426_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5426_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5426_SHARP_));
} else
{}
return p1__5426_SHARP_;
});})(i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5425_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5425_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5425_SHARP_));
} else
{}
return p1__5425_SHARP_;
});})(i__5465,i__5453,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5466,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,cmd)))))));
{
var G__5471 = (i__5465 + 1);
i__5465 = G__5471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5466),iter__5463.call(null,cljs.core.chunk_rest.call(null,s__5464__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5466),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5464__$2);return cljs.core.cons.call(null,((function (i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5430_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5430_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5430_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__5430_SHARP_;
}
});})(i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5429_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5429_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5429_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__5429_SHARP_;
}
});})(i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5428_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5428_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5428_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__5428_SHARP_;
}
});})(i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5427_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5427_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5427_SHARP_));
} else
{}
return p1__5427_SHARP_;
});})(i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5426_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5426_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5426_SHARP_));
} else
{}
return p1__5426_SHARP_;
});})(i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__){
return (function (p1__5425_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5425_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5425_SHARP_));
} else
{}
return p1__5425_SHARP_;
});})(i__5453,cmd,s__5464__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
.call(null,cmd)))))),iter__5463.call(null,cljs.core.rest.call(null,s__5464__$2)));
}
} else
{return null;
}
break;
}
});})(i__5453,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
,null,null));
});})(i__5453,last_x,last_y,last_e,cmds,c__4156__auto__,size__4157__auto__,b__5454,s__5452__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,cmds);
})());
{
var G__5472 = (i__5453 + 1);
i__5453 = G__5472;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5454),iter__5451.call(null,cljs.core.chunk_rest.call(null,s__5452__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5454),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5452__$2);return cljs.core.cons.call(null,(function (){var last_x = cljs.core.atom.call(null,0);var last_y = cljs.core.atom.call(null,0);var last_e = cljs.core.atom.call(null,0);var iter__4158__auto__ = ((function (last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function iter__5467(s__5468){return (new cljs.core.LazySeq(null,((function (last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (){var s__5468__$1 = s__5468;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5468__$1);if(temp__4092__auto____$1)
{var s__5468__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5468__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5468__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5470 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5469 = 0;while(true){
if((i__5469 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__5469);cljs.core.chunk_append.call(null,b__5470,((function (i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5430_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5430_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5430_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__5430_SHARP_;
}
});})(i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5429_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5429_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5429_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__5429_SHARP_;
}
});})(i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5428_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5428_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5428_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__5428_SHARP_;
}
});})(i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5427_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5427_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5427_SHARP_));
} else
{}
return p1__5427_SHARP_;
});})(i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5426_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5426_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5426_SHARP_));
} else
{}
return p1__5426_SHARP_;
});})(i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5425_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5425_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5425_SHARP_));
} else
{}
return p1__5425_SHARP_;
});})(i__5469,cmd,c__4156__auto__,size__4157__auto__,b__5470,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,cmd)))))));
{
var G__5473 = (i__5469 + 1);
i__5469 = G__5473;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5470),iter__5467.call(null,cljs.core.chunk_rest.call(null,s__5468__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5470),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5468__$2);return cljs.core.cons.call(null,((function (cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5430_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5430_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5430_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__5430_SHARP_;
}
});})(cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5429_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5429_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5429_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__5429_SHARP_;
}
});})(cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5428_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5428_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5428_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__5428_SHARP_;
}
});})(cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5427_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5427_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5427_SHARP_));
} else
{}
return p1__5427_SHARP_;
});})(cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5426_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5426_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5426_SHARP_));
} else
{}
return p1__5426_SHARP_;
});})(cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__){
return (function (p1__5425_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5425_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5425_SHARP_));
} else
{}
return p1__5425_SHARP_;
});})(cmd,s__5468__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
.call(null,cmd)))))),iter__5467.call(null,cljs.core.rest.call(null,s__5468__$2)));
}
} else
{return null;
}
break;
}
});})(last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
,null,null));
});})(last_x,last_y,last_e,cmds,s__5452__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,cmds);
})(),iter__5451.call(null,cljs.core.rest.call(null,s__5452__$2)));
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
* make single linked list according to extrusions
*/
embodier.fileapi.add_next = (function add_next(layers_cmds){var iter__4158__auto__ = (function iter__5494(s__5495){return (new cljs.core.LazySeq(null,(function (){var s__5495__$1 = s__5495;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5495__$1);if(temp__4092__auto__)
{var s__5495__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5495__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5495__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5497 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5496 = 0;while(true){
if((i__5496 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5496);cljs.core.chunk_append.call(null,b__5497,(function (){var iter__4158__auto__ = ((function (i__5496,cmds,c__4156__auto__,size__4157__auto__,b__5497,s__5495__$2,temp__4092__auto__){
return (function iter__5506(s__5507){return (new cljs.core.LazySeq(null,((function (i__5496,cmds,c__4156__auto__,size__4157__auto__,b__5497,s__5495__$2,temp__4092__auto__){
return (function (){var s__5507__$1 = s__5507;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5507__$1);if(temp__4092__auto____$1)
{var s__5507__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5507__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5507__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5509 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5508 = 0;while(true){
if((i__5508 < size__4157__auto____$1))
{var i = cljs.core._nth.call(null,c__4156__auto____$1,i__5508);cljs.core.chunk_append.call(null,b__5509,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__5514 = (i__5508 + 1);
i__5508 = G__5514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5509),iter__5506.call(null,cljs.core.chunk_rest.call(null,s__5507__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5509),null);
}
} else
{var i = cljs.core.first.call(null,s__5507__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__5506.call(null,cljs.core.rest.call(null,s__5507__$2)));
}
} else
{return null;
}
break;
}
});})(i__5496,cmds,c__4156__auto__,size__4157__auto__,b__5497,s__5495__$2,temp__4092__auto__))
,null,null));
});})(i__5496,cmds,c__4156__auto__,size__4157__auto__,b__5497,s__5495__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})());
{
var G__5515 = (i__5496 + 1);
i__5496 = G__5515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5497),iter__5494.call(null,cljs.core.chunk_rest.call(null,s__5495__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5497),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5495__$2);return cljs.core.cons.call(null,(function (){var iter__4158__auto__ = ((function (cmds,s__5495__$2,temp__4092__auto__){
return (function iter__5510(s__5511){return (new cljs.core.LazySeq(null,((function (cmds,s__5495__$2,temp__4092__auto__){
return (function (){var s__5511__$1 = s__5511;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5511__$1);if(temp__4092__auto____$1)
{var s__5511__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5511__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5511__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5513 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5512 = 0;while(true){
if((i__5512 < size__4157__auto__))
{var i = cljs.core._nth.call(null,c__4156__auto__,i__5512);cljs.core.chunk_append.call(null,b__5513,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__5516 = (i__5512 + 1);
i__5512 = G__5516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5513),iter__5510.call(null,cljs.core.chunk_rest.call(null,s__5511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5513),null);
}
} else
{var i = cljs.core.first.call(null,s__5511__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__5510.call(null,cljs.core.rest.call(null,s__5511__$2)));
}
} else
{return null;
}
break;
}
});})(cmds,s__5495__$2,temp__4092__auto__))
,null,null));
});})(cmds,s__5495__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})(),iter__5494.call(null,cljs.core.rest.call(null,s__5495__$2)));
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
return (function (p1__5517_SHARP_){if((cljs.core.first.call(null,p1__5517_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__5526 = cljs.core.cons.call(null,(function (){var iter__4158__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__5522(s__5523){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__5523__$1 = s__5523;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5523__$1);if(temp__4092__auto__)
{var s__5523__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5523__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5523__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5525 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5524 = 0;while(true){
if((i__5524 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__5524);cljs.core.chunk_append.call(null,b__5525,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null));
{
var G__5529 = (i__5524 + 1);
i__5524 = G__5529;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5525),iter__5522.call(null,cljs.core.chunk_rest.call(null,s__5523__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5525),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5523__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null),iter__5522.call(null,cljs.core.rest.call(null,s__5523__$2)));
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
var G__5527 = (counter + 1);
var G__5528 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__5526;
counter = G__5527;
last_z = G__5528;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = (function iter__5615(s__5616){return (new cljs.core.LazySeq(null,(function (){var s__5616__$1 = s__5616;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5616__$1);if(temp__4092__auto__)
{var s__5616__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5616__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5616__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5618 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5617 = 0;while(true){
if((i__5617 < size__4157__auto__))
{var part = cljs.core._nth.call(null,c__4156__auto__,i__5617);cljs.core.chunk_append.call(null,b__5618,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (i__5617,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__){
return (function iter__5659(s__5660){return (new cljs.core.LazySeq(null,((function (i__5617,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__){
return (function (){var s__5660__$1 = s__5660;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5660__$1);if(temp__4092__auto____$1)
{var s__5660__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5660__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5660__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5662 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5661 = 0;while(true){
if((i__5661 < size__4157__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4156__auto____$1,i__5661);cljs.core.chunk_append.call(null,b__5662,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5661,i__5617,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5662,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__){
return (function (p1__5530_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5530_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5661,i__5617,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5662,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5661,i__5617,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5662,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__){
return (function iter__5671(s__5672){return (new cljs.core.LazySeq(null,((function (i__5661,i__5617,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5662,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__){
return (function (){var s__5672__$1 = s__5672;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5672__$1);if(temp__4092__auto____$2)
{var s__5672__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5672__$2))
{var c__4156__auto____$2 = cljs.core.chunk_first.call(null,s__5672__$2);var size__4157__auto____$2 = cljs.core.count.call(null,c__4156__auto____$2);var b__5674 = cljs.core.chunk_buffer.call(null,size__4157__auto____$2);if((function (){var i__5673 = 0;while(true){
if((i__5673 < size__4157__auto____$2))
{var token = cljs.core._nth.call(null,c__4156__auto____$2,i__5673);cljs.core.chunk_append.call(null,b__5674,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5699 = (i__5673 + 1);
i__5673 = G__5699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5674),iter__5671.call(null,cljs.core.chunk_rest.call(null,s__5672__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5674),null);
}
} else
{var token = cljs.core.first.call(null,s__5672__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5671.call(null,cljs.core.rest.call(null,s__5672__$2)));
}
} else
{return null;
}
break;
}
});})(i__5661,i__5617,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5662,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__))
,null,null));
});})(i__5661,i__5617,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5662,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5700 = (i__5661 + 1);
i__5661 = G__5700;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5662),iter__5659.call(null,cljs.core.chunk_rest.call(null,s__5660__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5662),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5660__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5617,cmd,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__){
return (function (p1__5530_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5530_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5617,cmd,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5617,cmd,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__){
return (function iter__5675(s__5676){return (new cljs.core.LazySeq(null,((function (i__5617,cmd,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__){
return (function (){var s__5676__$1 = s__5676;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5676__$1);if(temp__4092__auto____$2)
{var s__5676__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5676__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5676__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5678 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5677 = 0;while(true){
if((i__5677 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__5677);cljs.core.chunk_append.call(null,b__5678,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5701 = (i__5677 + 1);
i__5677 = G__5701;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5678),iter__5675.call(null,cljs.core.chunk_rest.call(null,s__5676__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5678),null);
}
} else
{var token = cljs.core.first.call(null,s__5676__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5675.call(null,cljs.core.rest.call(null,s__5676__$2)));
}
} else
{return null;
}
break;
}
});})(i__5617,cmd,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__))
,null,null));
});})(i__5617,cmd,s__5660__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5659.call(null,cljs.core.rest.call(null,s__5660__$2)));
}
} else
{return null;
}
break;
}
});})(i__5617,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__))
,null,null));
});})(i__5617,part,c__4156__auto__,size__4157__auto__,b__5618,s__5616__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()));
{
var G__5702 = (i__5617 + 1);
i__5617 = G__5702;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5618),iter__5615.call(null,cljs.core.chunk_rest.call(null,s__5616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5618),null);
}
} else
{var part = cljs.core.first.call(null,s__5616__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (part,s__5616__$2,temp__4092__auto__){
return (function iter__5679(s__5680){return (new cljs.core.LazySeq(null,((function (part,s__5616__$2,temp__4092__auto__){
return (function (){var s__5680__$1 = s__5680;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5680__$1);if(temp__4092__auto____$1)
{var s__5680__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5680__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5680__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5682 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5681 = 0;while(true){
if((i__5681 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__5681);cljs.core.chunk_append.call(null,b__5682,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5681,cmd,c__4156__auto__,size__4157__auto__,b__5682,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__){
return (function (p1__5530_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5530_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5681,cmd,c__4156__auto__,size__4157__auto__,b__5682,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5681,cmd,c__4156__auto__,size__4157__auto__,b__5682,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__){
return (function iter__5691(s__5692){return (new cljs.core.LazySeq(null,((function (i__5681,cmd,c__4156__auto__,size__4157__auto__,b__5682,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__){
return (function (){var s__5692__$1 = s__5692;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5692__$1);if(temp__4092__auto____$2)
{var s__5692__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5692__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5692__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5694 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5693 = 0;while(true){
if((i__5693 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__5693);cljs.core.chunk_append.call(null,b__5694,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5703 = (i__5693 + 1);
i__5693 = G__5703;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5694),iter__5691.call(null,cljs.core.chunk_rest.call(null,s__5692__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5694),null);
}
} else
{var token = cljs.core.first.call(null,s__5692__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5691.call(null,cljs.core.rest.call(null,s__5692__$2)));
}
} else
{return null;
}
break;
}
});})(i__5681,cmd,c__4156__auto__,size__4157__auto__,b__5682,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__))
,null,null));
});})(i__5681,cmd,c__4156__auto__,size__4157__auto__,b__5682,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5704 = (i__5681 + 1);
i__5681 = G__5704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5682),iter__5679.call(null,cljs.core.chunk_rest.call(null,s__5680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5682),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5680__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__){
return (function (p1__5530_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5530_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (cmd,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__){
return (function iter__5695(s__5696){return (new cljs.core.LazySeq(null,((function (cmd,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__){
return (function (){var s__5696__$1 = s__5696;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5696__$1);if(temp__4092__auto____$2)
{var s__5696__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5696__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5696__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5698 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5697 = 0;while(true){
if((i__5697 < size__4157__auto__))
{var token = cljs.core._nth.call(null,c__4156__auto__,i__5697);cljs.core.chunk_append.call(null,b__5698,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5705 = (i__5697 + 1);
i__5697 = G__5705;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5698),iter__5695.call(null,cljs.core.chunk_rest.call(null,s__5696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5698),null);
}
} else
{var token = cljs.core.first.call(null,s__5696__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5695.call(null,cljs.core.rest.call(null,s__5696__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__5680__$2,temp__4092__auto____$1,part,s__5616__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5679.call(null,cljs.core.rest.call(null,s__5680__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__5616__$2,temp__4092__auto__))
,null,null));
});})(part,s__5616__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()),iter__5615.call(null,cljs.core.rest.call(null,s__5616__$2)));
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.add_next.call(null,embodier.fileapi.collapseXYE.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str))))))));
});
/**
* called by web component of file onload. f (file) being read into layers atom
*/
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map