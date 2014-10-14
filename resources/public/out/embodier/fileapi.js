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
d.cljs$lang$applyTo = (function (arglist__7373){
var log = cljs.core.first(arglist__7373);
var logs = cljs.core.rest(arglist__7373);
return d__delegate(log,logs);
});
d.cljs$core$IFn$_invoke$arity$variadic = d__delegate;
return d;
})()
;
/**
* reverse each layers cmds
*/
embodier.fileapi.reverse_layerscmd = (function reverse_layerscmd(layers_cmds){var iter__4160__auto__ = (function iter__7378(s__7379){return (new cljs.core.LazySeq(null,(function (){var s__7379__$1 = s__7379;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7379__$1);if(temp__4092__auto__)
{var s__7379__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7379__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7379__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7381 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7380 = 0;while(true){
if((i__7380 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__7380);cljs.core.chunk_append.call(null,b__7381,cljs.core.reverse.call(null,cmds));
{
var G__7382 = (i__7380 + 1);
i__7380 = G__7382;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7381),iter__7378.call(null,cljs.core.chunk_rest.call(null,s__7379__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7381),null);
}
} else
{var cmds = cljs.core.first.call(null,s__7379__$2);return cljs.core.cons.call(null,cljs.core.reverse.call(null,cmds),iter__7378.call(null,cljs.core.rest.call(null,s__7379__$2)));
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
embodier.fileapi.collapseY = (function collapseY(layers_cmds){var iter__4160__auto__ = (function iter__7387(s__7388){return (new cljs.core.LazySeq(null,(function (){var s__7388__$1 = s__7388;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7388__$1);if(temp__4092__auto__)
{var s__7388__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7388__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7388__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7390 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7389 = 0;while(true){
if((i__7389 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__7389);cljs.core.chunk_append.call(null,b__7390,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__7391 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__7392 = (counter + 1);
var G__7393 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__7391;
counter = G__7392;
last_y = G__7393;
continue;
}
}
break;
}
})());
{
var G__7394 = (i__7389 + 1);
i__7389 = G__7394;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7390),iter__7387.call(null,cljs.core.chunk_rest.call(null,s__7388__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7390),null);
}
} else
{var cmds = cljs.core.first.call(null,s__7388__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__7395 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__7396 = (counter + 1);
var G__7397 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__7395;
counter = G__7396;
last_y = G__7397;
continue;
}
}
break;
}
})(),iter__7387.call(null,cljs.core.rest.call(null,s__7388__$2)));
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
embodier.fileapi.collapseX = (function collapseX(layers_cmds){var iter__4160__auto__ = (function iter__7402(s__7403){return (new cljs.core.LazySeq(null,(function (){var s__7403__$1 = s__7403;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7403__$1);if(temp__4092__auto__)
{var s__7403__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7403__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7403__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7405 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7404 = 0;while(true){
if((i__7404 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__7404);cljs.core.chunk_append.call(null,b__7405,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__7406 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__7407 = (counter + 1);
var G__7408 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__7406;
counter = G__7407;
last_x = G__7408;
continue;
}
}
break;
}
})());
{
var G__7409 = (i__7404 + 1);
i__7404 = G__7409;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7405),iter__7402.call(null,cljs.core.chunk_rest.call(null,s__7403__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7405),null);
}
} else
{var cmds = cljs.core.first.call(null,s__7403__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__7410 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__7411 = (counter + 1);
var G__7412 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__7410;
counter = G__7411;
last_x = G__7412;
continue;
}
}
break;
}
})(),iter__7402.call(null,cljs.core.rest.call(null,s__7403__$2)));
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
embodier.fileapi.collapseE = (function collapseE(layers_cmds){var iter__4160__auto__ = (function iter__7417(s__7418){return (new cljs.core.LazySeq(null,(function (){var s__7418__$1 = s__7418;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7418__$1);if(temp__4092__auto__)
{var s__7418__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7418__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7418__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7420 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7419 = 0;while(true){
if((i__7419 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__7419);cljs.core.chunk_append.call(null,b__7420,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__7421 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__7422 = (counter + 1);
var G__7423 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__7421;
counter = G__7422;
last_extrusion = G__7423;
continue;
}
}
break;
}
})());
{
var G__7424 = (i__7419 + 1);
i__7419 = G__7424;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7420),iter__7417.call(null,cljs.core.chunk_rest.call(null,s__7418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7420),null);
}
} else
{var cmds = cljs.core.first.call(null,s__7418__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__7425 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__7426 = (counter + 1);
var G__7427 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__7425;
counter = G__7426;
last_extrusion = G__7427;
continue;
}
}
break;
}
})(),iter__7417.call(null,cljs.core.rest.call(null,s__7418__$2)));
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
* stores XY into each command
*/
embodier.fileapi.collapseXYE = (function collapseXYE(layers_cmds){var iter__4160__auto__ = (function iter__7454(s__7455){return (new cljs.core.LazySeq(null,(function (){var s__7455__$1 = s__7455;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7455__$1);if(temp__4092__auto__)
{var s__7455__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7455__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7455__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7457 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7456 = 0;while(true){
if((i__7456 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__7456);cljs.core.chunk_append.call(null,b__7457,(function (){var last_x = cljs.core.atom.call(null,0);var last_y = cljs.core.atom.call(null,0);var last_e = cljs.core.atom.call(null,0);var iter__4160__auto__ = ((function (i__7456,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function iter__7466(s__7467){return (new cljs.core.LazySeq(null,((function (i__7456,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (){var s__7467__$1 = s__7467;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7467__$1);if(temp__4092__auto____$1)
{var s__7467__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7467__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__7467__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__7469 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__7468 = 0;while(true){
if((i__7468 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__7468);cljs.core.chunk_append.call(null,b__7469,((function (i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7433_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7433_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7433_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__7433_SHARP_;
}
});})(i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7432_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7432_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7432_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__7432_SHARP_;
}
});})(i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7431_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7431_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7431_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__7431_SHARP_;
}
});})(i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7430_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7430_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7430_SHARP_));
} else
{}
return p1__7430_SHARP_;
});})(i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7429_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7429_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7429_SHARP_));
} else
{}
return p1__7429_SHARP_;
});})(i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7428_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7428_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7428_SHARP_));
} else
{}
return p1__7428_SHARP_;
});})(i__7468,i__7456,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7469,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,cmd)))))));
{
var G__7474 = (i__7468 + 1);
i__7468 = G__7474;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7469),iter__7466.call(null,cljs.core.chunk_rest.call(null,s__7467__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7469),null);
}
} else
{var cmd = cljs.core.first.call(null,s__7467__$2);return cljs.core.cons.call(null,((function (i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7433_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7433_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7433_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__7433_SHARP_;
}
});})(i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7432_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7432_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7432_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__7432_SHARP_;
}
});})(i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7431_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7431_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7431_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__7431_SHARP_;
}
});})(i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7430_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7430_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7430_SHARP_));
} else
{}
return p1__7430_SHARP_;
});})(i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7429_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7429_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7429_SHARP_));
} else
{}
return p1__7429_SHARP_;
});})(i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__){
return (function (p1__7428_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7428_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7428_SHARP_));
} else
{}
return p1__7428_SHARP_;
});})(i__7456,cmd,s__7467__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
.call(null,cmd)))))),iter__7466.call(null,cljs.core.rest.call(null,s__7467__$2)));
}
} else
{return null;
}
break;
}
});})(i__7456,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
,null,null));
});})(i__7456,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__7457,s__7455__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cmds);
})());
{
var G__7475 = (i__7456 + 1);
i__7456 = G__7475;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7457),iter__7454.call(null,cljs.core.chunk_rest.call(null,s__7455__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7457),null);
}
} else
{var cmds = cljs.core.first.call(null,s__7455__$2);return cljs.core.cons.call(null,(function (){var last_x = cljs.core.atom.call(null,0);var last_y = cljs.core.atom.call(null,0);var last_e = cljs.core.atom.call(null,0);var iter__4160__auto__ = ((function (last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function iter__7470(s__7471){return (new cljs.core.LazySeq(null,((function (last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (){var s__7471__$1 = s__7471;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7471__$1);if(temp__4092__auto____$1)
{var s__7471__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7471__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7471__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7473 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7472 = 0;while(true){
if((i__7472 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__7472);cljs.core.chunk_append.call(null,b__7473,((function (i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7433_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7433_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7433_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__7433_SHARP_;
}
});})(i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7432_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7432_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7432_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__7432_SHARP_;
}
});})(i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7431_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7431_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7431_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__7431_SHARP_;
}
});})(i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7430_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7430_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7430_SHARP_));
} else
{}
return p1__7430_SHARP_;
});})(i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7429_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7429_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7429_SHARP_));
} else
{}
return p1__7429_SHARP_;
});})(i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7428_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7428_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7428_SHARP_));
} else
{}
return p1__7428_SHARP_;
});})(i__7472,cmd,c__4158__auto__,size__4159__auto__,b__7473,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,cmd)))))));
{
var G__7476 = (i__7472 + 1);
i__7472 = G__7476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7473),iter__7470.call(null,cljs.core.chunk_rest.call(null,s__7471__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7473),null);
}
} else
{var cmd = cljs.core.first.call(null,s__7471__$2);return cljs.core.cons.call(null,((function (cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7433_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7433_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7433_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__7433_SHARP_;
}
});})(cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7432_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7432_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7432_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__7432_SHARP_;
}
});})(cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7431_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7431_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__7431_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__7431_SHARP_;
}
});})(cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7430_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7430_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__7430_SHARP_));
} else
{}
return p1__7430_SHARP_;
});})(cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7429_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7429_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__7429_SHARP_));
} else
{}
return p1__7429_SHARP_;
});})(cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,((function (cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__){
return (function (p1__7428_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7428_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__7428_SHARP_));
} else
{}
return p1__7428_SHARP_;
});})(cmd,s__7471__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
.call(null,cmd)))))),iter__7470.call(null,cljs.core.rest.call(null,s__7471__$2)));
}
} else
{return null;
}
break;
}
});})(last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
,null,null));
});})(last_x,last_y,last_e,cmds,s__7455__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cmds);
})(),iter__7454.call(null,cljs.core.rest.call(null,s__7455__$2)));
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
embodier.fileapi.add_next = (function add_next(layers_cmds){var iter__4160__auto__ = (function iter__7497(s__7498){return (new cljs.core.LazySeq(null,(function (){var s__7498__$1 = s__7498;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7498__$1);if(temp__4092__auto__)
{var s__7498__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7498__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7498__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7500 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7499 = 0;while(true){
if((i__7499 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__7499);cljs.core.chunk_append.call(null,b__7500,(function (){var iter__4160__auto__ = ((function (i__7499,cmds,c__4158__auto__,size__4159__auto__,b__7500,s__7498__$2,temp__4092__auto__){
return (function iter__7509(s__7510){return (new cljs.core.LazySeq(null,((function (i__7499,cmds,c__4158__auto__,size__4159__auto__,b__7500,s__7498__$2,temp__4092__auto__){
return (function (){var s__7510__$1 = s__7510;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7510__$1);if(temp__4092__auto____$1)
{var s__7510__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7510__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__7510__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__7512 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__7511 = 0;while(true){
if((i__7511 < size__4159__auto____$1))
{var i = cljs.core._nth.call(null,c__4158__auto____$1,i__7511);cljs.core.chunk_append.call(null,b__7512,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__7517 = (i__7511 + 1);
i__7511 = G__7517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7512),iter__7509.call(null,cljs.core.chunk_rest.call(null,s__7510__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7512),null);
}
} else
{var i = cljs.core.first.call(null,s__7510__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__7509.call(null,cljs.core.rest.call(null,s__7510__$2)));
}
} else
{return null;
}
break;
}
});})(i__7499,cmds,c__4158__auto__,size__4159__auto__,b__7500,s__7498__$2,temp__4092__auto__))
,null,null));
});})(i__7499,cmds,c__4158__auto__,size__4159__auto__,b__7500,s__7498__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})());
{
var G__7518 = (i__7499 + 1);
i__7499 = G__7518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7500),iter__7497.call(null,cljs.core.chunk_rest.call(null,s__7498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7500),null);
}
} else
{var cmds = cljs.core.first.call(null,s__7498__$2);return cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (cmds,s__7498__$2,temp__4092__auto__){
return (function iter__7513(s__7514){return (new cljs.core.LazySeq(null,((function (cmds,s__7498__$2,temp__4092__auto__){
return (function (){var s__7514__$1 = s__7514;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7514__$1);if(temp__4092__auto____$1)
{var s__7514__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7514__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7514__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7516 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7515 = 0;while(true){
if((i__7515 < size__4159__auto__))
{var i = cljs.core._nth.call(null,c__4158__auto__,i__7515);cljs.core.chunk_append.call(null,b__7516,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__7519 = (i__7515 + 1);
i__7515 = G__7519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7516),iter__7513.call(null,cljs.core.chunk_rest.call(null,s__7514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7516),null);
}
} else
{var i = cljs.core.first.call(null,s__7514__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__7513.call(null,cljs.core.rest.call(null,s__7514__$2)));
}
} else
{return null;
}
break;
}
});})(cmds,s__7498__$2,temp__4092__auto__))
,null,null));
});})(cmds,s__7498__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})(),iter__7497.call(null,cljs.core.rest.call(null,s__7498__$2)));
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
return (function (p1__7520_SHARP_){if((cljs.core.first.call(null,p1__7520_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__7529 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__7525(s__7526){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__7526__$1 = s__7526;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7526__$1);if(temp__4092__auto__)
{var s__7526__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7526__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7526__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7528 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7527 = 0;while(true){
if((i__7527 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__7527);cljs.core.chunk_append.call(null,b__7528,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null));
{
var G__7532 = (i__7527 + 1);
i__7527 = G__7532;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7528),iter__7525.call(null,cljs.core.chunk_rest.call(null,s__7526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7528),null);
}
} else
{var cmd = cljs.core.first.call(null,s__7526__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null),iter__7525.call(null,cljs.core.rest.call(null,s__7526__$2)));
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
var G__7530 = (counter + 1);
var G__7531 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__7529;
counter = G__7530;
last_z = G__7531;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__7618(s__7619){return (new cljs.core.LazySeq(null,(function (){var s__7619__$1 = s__7619;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7619__$1);if(temp__4092__auto__)
{var s__7619__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7619__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7619__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7621 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7620 = 0;while(true){
if((i__7620 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__7620);cljs.core.chunk_append.call(null,b__7621,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__7620,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__){
return (function iter__7662(s__7663){return (new cljs.core.LazySeq(null,((function (i__7620,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__){
return (function (){var s__7663__$1 = s__7663;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7663__$1);if(temp__4092__auto____$1)
{var s__7663__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7663__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__7663__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__7665 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__7664 = 0;while(true){
if((i__7664 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__7664);cljs.core.chunk_append.call(null,b__7665,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__7664,i__7620,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7665,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__){
return (function (p1__7533_SHARP_){if(cljs.core.not_EQ_.call(null,p1__7533_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__7664,i__7620,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7665,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__7664,i__7620,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7665,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__){
return (function iter__7674(s__7675){return (new cljs.core.LazySeq(null,((function (i__7664,i__7620,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7665,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__){
return (function (){var s__7675__$1 = s__7675;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__7675__$1);if(temp__4092__auto____$2)
{var s__7675__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__7675__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__7675__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__7677 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__7676 = 0;while(true){
if((i__7676 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__7676);cljs.core.chunk_append.call(null,b__7677,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__7702 = (i__7676 + 1);
i__7676 = G__7702;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7677),iter__7674.call(null,cljs.core.chunk_rest.call(null,s__7675__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7677),null);
}
} else
{var token = cljs.core.first.call(null,s__7675__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__7674.call(null,cljs.core.rest.call(null,s__7675__$2)));
}
} else
{return null;
}
break;
}
});})(i__7664,i__7620,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7665,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__))
,null,null));
});})(i__7664,i__7620,cmd,c__4158__auto____$1,size__4159__auto____$1,b__7665,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__7703 = (i__7664 + 1);
i__7664 = G__7703;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7665),iter__7662.call(null,cljs.core.chunk_rest.call(null,s__7663__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7665),null);
}
} else
{var cmd = cljs.core.first.call(null,s__7663__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__7620,cmd,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__){
return (function (p1__7533_SHARP_){if(cljs.core.not_EQ_.call(null,p1__7533_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__7620,cmd,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__7620,cmd,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__){
return (function iter__7678(s__7679){return (new cljs.core.LazySeq(null,((function (i__7620,cmd,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__){
return (function (){var s__7679__$1 = s__7679;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__7679__$1);if(temp__4092__auto____$2)
{var s__7679__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__7679__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__7679__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__7681 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__7680 = 0;while(true){
if((i__7680 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__7680);cljs.core.chunk_append.call(null,b__7681,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__7704 = (i__7680 + 1);
i__7680 = G__7704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7681),iter__7678.call(null,cljs.core.chunk_rest.call(null,s__7679__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7681),null);
}
} else
{var token = cljs.core.first.call(null,s__7679__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__7678.call(null,cljs.core.rest.call(null,s__7679__$2)));
}
} else
{return null;
}
break;
}
});})(i__7620,cmd,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__))
,null,null));
});})(i__7620,cmd,s__7663__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__7662.call(null,cljs.core.rest.call(null,s__7663__$2)));
}
} else
{return null;
}
break;
}
});})(i__7620,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__))
,null,null));
});})(i__7620,part,c__4158__auto__,size__4159__auto__,b__7621,s__7619__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__7705 = (i__7620 + 1);
i__7620 = G__7705;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7621),iter__7618.call(null,cljs.core.chunk_rest.call(null,s__7619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7621),null);
}
} else
{var part = cljs.core.first.call(null,s__7619__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__7619__$2,temp__4092__auto__){
return (function iter__7682(s__7683){return (new cljs.core.LazySeq(null,((function (part,s__7619__$2,temp__4092__auto__){
return (function (){var s__7683__$1 = s__7683;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__7683__$1);if(temp__4092__auto____$1)
{var s__7683__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7683__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7683__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7685 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7684 = 0;while(true){
if((i__7684 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__7684);cljs.core.chunk_append.call(null,b__7685,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__7684,cmd,c__4158__auto__,size__4159__auto__,b__7685,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__){
return (function (p1__7533_SHARP_){if(cljs.core.not_EQ_.call(null,p1__7533_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__7684,cmd,c__4158__auto__,size__4159__auto__,b__7685,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__7684,cmd,c__4158__auto__,size__4159__auto__,b__7685,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__){
return (function iter__7694(s__7695){return (new cljs.core.LazySeq(null,((function (i__7684,cmd,c__4158__auto__,size__4159__auto__,b__7685,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__){
return (function (){var s__7695__$1 = s__7695;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__7695__$1);if(temp__4092__auto____$2)
{var s__7695__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__7695__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__7695__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__7697 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__7696 = 0;while(true){
if((i__7696 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__7696);cljs.core.chunk_append.call(null,b__7697,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__7706 = (i__7696 + 1);
i__7696 = G__7706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7697),iter__7694.call(null,cljs.core.chunk_rest.call(null,s__7695__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7697),null);
}
} else
{var token = cljs.core.first.call(null,s__7695__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__7694.call(null,cljs.core.rest.call(null,s__7695__$2)));
}
} else
{return null;
}
break;
}
});})(i__7684,cmd,c__4158__auto__,size__4159__auto__,b__7685,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__))
,null,null));
});})(i__7684,cmd,c__4158__auto__,size__4159__auto__,b__7685,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__7707 = (i__7684 + 1);
i__7684 = G__7707;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7685),iter__7682.call(null,cljs.core.chunk_rest.call(null,s__7683__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7685),null);
}
} else
{var cmd = cljs.core.first.call(null,s__7683__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__){
return (function (p1__7533_SHARP_){if(cljs.core.not_EQ_.call(null,p1__7533_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__){
return (function iter__7698(s__7699){return (new cljs.core.LazySeq(null,((function (cmd,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__){
return (function (){var s__7699__$1 = s__7699;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__7699__$1);if(temp__4092__auto____$2)
{var s__7699__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__7699__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__7699__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__7701 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__7700 = 0;while(true){
if((i__7700 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__7700);cljs.core.chunk_append.call(null,b__7701,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__7708 = (i__7700 + 1);
i__7700 = G__7708;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7701),iter__7698.call(null,cljs.core.chunk_rest.call(null,s__7699__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7701),null);
}
} else
{var token = cljs.core.first.call(null,s__7699__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__7698.call(null,cljs.core.rest.call(null,s__7699__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__7683__$2,temp__4092__auto____$1,part,s__7619__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__7682.call(null,cljs.core.rest.call(null,s__7683__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__7619__$2,temp__4092__auto__))
,null,null));
});})(part,s__7619__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__7618.call(null,cljs.core.rest.call(null,s__7619__$2)));
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.add_next.call(null,embodier.fileapi.collapseXYE.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str))))))));
});
/**
* called by web component of file onload. f (file) being read into layers atom
*/
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map