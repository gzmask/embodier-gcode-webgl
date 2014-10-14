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
d.cljs$lang$applyTo = (function (arglist__5767){
var log = cljs.core.first(arglist__5767);
var logs = cljs.core.rest(arglist__5767);
return d__delegate(log,logs);
});
d.cljs$core$IFn$_invoke$arity$variadic = d__delegate;
return d;
})()
;
/**
* reverse each layers cmds
*/
embodier.fileapi.reverse_layerscmd = (function reverse_layerscmd(layers_cmds){var iter__4160__auto__ = (function iter__5772(s__5773){return (new cljs.core.LazySeq(null,(function (){var s__5773__$1 = s__5773;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5773__$1);if(temp__4092__auto__)
{var s__5773__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5773__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5773__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5775 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5774 = 0;while(true){
if((i__5774 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5774);cljs.core.chunk_append.call(null,b__5775,cljs.core.reverse.call(null,cmds));
{
var G__5776 = (i__5774 + 1);
i__5774 = G__5776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5775),iter__5772.call(null,cljs.core.chunk_rest.call(null,s__5773__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5775),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5773__$2);return cljs.core.cons.call(null,cljs.core.reverse.call(null,cmds),iter__5772.call(null,cljs.core.rest.call(null,s__5773__$2)));
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
embodier.fileapi.collapseY = (function collapseY(layers_cmds){var iter__4160__auto__ = (function iter__5781(s__5782){return (new cljs.core.LazySeq(null,(function (){var s__5782__$1 = s__5782;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5782__$1);if(temp__4092__auto__)
{var s__5782__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5782__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5782__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5784 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5783 = 0;while(true){
if((i__5783 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5783);cljs.core.chunk_append.call(null,b__5784,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5785 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5786 = (counter + 1);
var G__5787 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5785;
counter = G__5786;
last_y = G__5787;
continue;
}
}
break;
}
})());
{
var G__5788 = (i__5783 + 1);
i__5783 = G__5788;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5784),iter__5781.call(null,cljs.core.chunk_rest.call(null,s__5782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5784),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5782__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5789 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5790 = (counter + 1);
var G__5791 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5789;
counter = G__5790;
last_y = G__5791;
continue;
}
}
break;
}
})(),iter__5781.call(null,cljs.core.rest.call(null,s__5782__$2)));
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
embodier.fileapi.collapseX = (function collapseX(layers_cmds){var iter__4160__auto__ = (function iter__5796(s__5797){return (new cljs.core.LazySeq(null,(function (){var s__5797__$1 = s__5797;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5797__$1);if(temp__4092__auto__)
{var s__5797__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5797__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5797__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5799 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5798 = 0;while(true){
if((i__5798 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5798);cljs.core.chunk_append.call(null,b__5799,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5800 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5801 = (counter + 1);
var G__5802 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5800;
counter = G__5801;
last_x = G__5802;
continue;
}
}
break;
}
})());
{
var G__5803 = (i__5798 + 1);
i__5798 = G__5803;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5799),iter__5796.call(null,cljs.core.chunk_rest.call(null,s__5797__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5799),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5797__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5804 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5805 = (counter + 1);
var G__5806 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5804;
counter = G__5805;
last_x = G__5806;
continue;
}
}
break;
}
})(),iter__5796.call(null,cljs.core.rest.call(null,s__5797__$2)));
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
embodier.fileapi.collapseE = (function collapseE(layers_cmds){var iter__4160__auto__ = (function iter__5811(s__5812){return (new cljs.core.LazySeq(null,(function (){var s__5812__$1 = s__5812;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5812__$1);if(temp__4092__auto__)
{var s__5812__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5812__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5812__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5814 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5813 = 0;while(true){
if((i__5813 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5813);cljs.core.chunk_append.call(null,b__5814,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5815 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5816 = (counter + 1);
var G__5817 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5815;
counter = G__5816;
last_extrusion = G__5817;
continue;
}
}
break;
}
})());
{
var G__5818 = (i__5813 + 1);
i__5813 = G__5818;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5814),iter__5811.call(null,cljs.core.chunk_rest.call(null,s__5812__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5814),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5812__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5819 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__5820 = (counter + 1);
var G__5821 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__5819;
counter = G__5820;
last_extrusion = G__5821;
continue;
}
}
break;
}
})(),iter__5811.call(null,cljs.core.rest.call(null,s__5812__$2)));
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
embodier.fileapi.collapseXYE = (function collapseXYE(layers_cmds){var iter__4160__auto__ = (function iter__5848(s__5849){return (new cljs.core.LazySeq(null,(function (){var s__5849__$1 = s__5849;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5849__$1);if(temp__4092__auto__)
{var s__5849__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5849__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5849__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5851 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5850 = 0;while(true){
if((i__5850 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5850);cljs.core.chunk_append.call(null,b__5851,(function (){var last_x = cljs.core.atom.call(null,0);var last_y = cljs.core.atom.call(null,0);var last_e = cljs.core.atom.call(null,0);var iter__4160__auto__ = ((function (i__5850,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function iter__5860(s__5861){return (new cljs.core.LazySeq(null,((function (i__5850,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (){var s__5861__$1 = s__5861;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5861__$1);if(temp__4092__auto____$1)
{var s__5861__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5861__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__5861__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__5863 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__5862 = 0;while(true){
if((i__5862 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__5862);cljs.core.chunk_append.call(null,b__5863,((function (i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5827_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5827_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5827_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__5827_SHARP_;
}
});})(i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5826_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5826_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5826_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__5826_SHARP_;
}
});})(i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5825_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5825_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5825_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__5825_SHARP_;
}
});})(i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5824_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5824_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5824_SHARP_));
} else
{}
return p1__5824_SHARP_;
});})(i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5823_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5823_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5823_SHARP_));
} else
{}
return p1__5823_SHARP_;
});})(i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5822_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_));
} else
{}
return p1__5822_SHARP_;
});})(i__5862,i__5850,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5863,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,cmd)))))));
{
var G__5868 = (i__5862 + 1);
i__5862 = G__5868;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5863),iter__5860.call(null,cljs.core.chunk_rest.call(null,s__5861__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5863),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5861__$2);return cljs.core.cons.call(null,((function (i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5827_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5827_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5827_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__5827_SHARP_;
}
});})(i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5826_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5826_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5826_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__5826_SHARP_;
}
});})(i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5825_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5825_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5825_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__5825_SHARP_;
}
});})(i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5824_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5824_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5824_SHARP_));
} else
{}
return p1__5824_SHARP_;
});})(i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5823_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5823_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5823_SHARP_));
} else
{}
return p1__5823_SHARP_;
});})(i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__){
return (function (p1__5822_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_));
} else
{}
return p1__5822_SHARP_;
});})(i__5850,cmd,s__5861__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
.call(null,cmd)))))),iter__5860.call(null,cljs.core.rest.call(null,s__5861__$2)));
}
} else
{return null;
}
break;
}
});})(i__5850,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
,null,null));
});})(i__5850,last_x,last_y,last_e,cmds,c__4158__auto__,size__4159__auto__,b__5851,s__5849__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cmds);
})());
{
var G__5869 = (i__5850 + 1);
i__5850 = G__5869;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5851),iter__5848.call(null,cljs.core.chunk_rest.call(null,s__5849__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5851),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5849__$2);return cljs.core.cons.call(null,(function (){var last_x = cljs.core.atom.call(null,0);var last_y = cljs.core.atom.call(null,0);var last_e = cljs.core.atom.call(null,0);var iter__4160__auto__ = ((function (last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function iter__5864(s__5865){return (new cljs.core.LazySeq(null,((function (last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (){var s__5865__$1 = s__5865;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5865__$1);if(temp__4092__auto____$1)
{var s__5865__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5865__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5865__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5867 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5866 = 0;while(true){
if((i__5866 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__5866);cljs.core.chunk_append.call(null,b__5867,((function (i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5827_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5827_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5827_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__5827_SHARP_;
}
});})(i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5826_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5826_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5826_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__5826_SHARP_;
}
});})(i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5825_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5825_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5825_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__5825_SHARP_;
}
});})(i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5824_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5824_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5824_SHARP_));
} else
{}
return p1__5824_SHARP_;
});})(i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5823_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5823_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5823_SHARP_));
} else
{}
return p1__5823_SHARP_;
});})(i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5822_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_));
} else
{}
return p1__5822_SHARP_;
});})(i__5866,cmd,c__4158__auto__,size__4159__auto__,b__5867,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,cmd)))))));
{
var G__5870 = (i__5866 + 1);
i__5866 = G__5870;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5867),iter__5864.call(null,cljs.core.chunk_rest.call(null,s__5865__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5867),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5865__$2);return cljs.core.cons.call(null,((function (cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5827_SHARP_){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5827_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5827_SHARP_,new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.deref.call(null,last_e));
} else
{return p1__5827_SHARP_;
}
});})(cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5826_SHARP_){if((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5826_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5826_SHARP_,new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.deref.call(null,last_y));
} else
{return p1__5826_SHARP_;
}
});})(cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5825_SHARP_){if((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5825_SHARP_) == null))
{return cljs.core.assoc.call(null,p1__5825_SHARP_,new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.deref.call(null,last_x));
} else
{return p1__5825_SHARP_;
}
});})(cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5824_SHARP_){if(!((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5824_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_e,new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(p1__5824_SHARP_));
} else
{}
return p1__5824_SHARP_;
});})(cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5823_SHARP_){if(!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5823_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_y,new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1__5823_SHARP_));
} else
{}
return p1__5823_SHARP_;
});})(cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,((function (cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__){
return (function (p1__5822_SHARP_){if(!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_) == null)))
{cljs.core.reset_BANG_.call(null,last_x,new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1__5822_SHARP_));
} else
{}
return p1__5822_SHARP_;
});})(cmd,s__5865__$2,temp__4092__auto____$1,last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
.call(null,cmd)))))),iter__5864.call(null,cljs.core.rest.call(null,s__5865__$2)));
}
} else
{return null;
}
break;
}
});})(last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
,null,null));
});})(last_x,last_y,last_e,cmds,s__5849__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cmds);
})(),iter__5848.call(null,cljs.core.rest.call(null,s__5849__$2)));
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
embodier.fileapi.add_next = (function add_next(layers_cmds){var iter__4160__auto__ = (function iter__5891(s__5892){return (new cljs.core.LazySeq(null,(function (){var s__5892__$1 = s__5892;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5892__$1);if(temp__4092__auto__)
{var s__5892__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5892__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5892__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5894 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5893 = 0;while(true){
if((i__5893 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__5893);cljs.core.chunk_append.call(null,b__5894,(function (){var iter__4160__auto__ = ((function (i__5893,cmds,c__4158__auto__,size__4159__auto__,b__5894,s__5892__$2,temp__4092__auto__){
return (function iter__5903(s__5904){return (new cljs.core.LazySeq(null,((function (i__5893,cmds,c__4158__auto__,size__4159__auto__,b__5894,s__5892__$2,temp__4092__auto__){
return (function (){var s__5904__$1 = s__5904;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5904__$1);if(temp__4092__auto____$1)
{var s__5904__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5904__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__5904__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__5906 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__5905 = 0;while(true){
if((i__5905 < size__4159__auto____$1))
{var i = cljs.core._nth.call(null,c__4158__auto____$1,i__5905);cljs.core.chunk_append.call(null,b__5906,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__5911 = (i__5905 + 1);
i__5905 = G__5911;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5906),iter__5903.call(null,cljs.core.chunk_rest.call(null,s__5904__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5906),null);
}
} else
{var i = cljs.core.first.call(null,s__5904__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__5903.call(null,cljs.core.rest.call(null,s__5904__$2)));
}
} else
{return null;
}
break;
}
});})(i__5893,cmds,c__4158__auto__,size__4159__auto__,b__5894,s__5892__$2,temp__4092__auto__))
,null,null));
});})(i__5893,cmds,c__4158__auto__,size__4159__auto__,b__5894,s__5892__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})());
{
var G__5912 = (i__5893 + 1);
i__5893 = G__5912;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5894),iter__5891.call(null,cljs.core.chunk_rest.call(null,s__5892__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5894),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5892__$2);return cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (cmds,s__5892__$2,temp__4092__auto__){
return (function iter__5907(s__5908){return (new cljs.core.LazySeq(null,((function (cmds,s__5892__$2,temp__4092__auto__){
return (function (){var s__5908__$1 = s__5908;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5908__$1);if(temp__4092__auto____$1)
{var s__5908__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5908__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5908__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5910 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5909 = 0;while(true){
if((i__5909 < size__4159__auto__))
{var i = cljs.core._nth.call(null,c__4158__auto__,i__5909);cljs.core.chunk_append.call(null,b__5910,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))));
{
var G__5913 = (i__5909 + 1);
i__5909 = G__5913;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5910),iter__5907.call(null,cljs.core.chunk_rest.call(null,s__5908__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5910),null);
}
} else
{var i = cljs.core.first.call(null,s__5908__$2);return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,0,i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((cljs.core._EQ_.call(null,(cljs.core.count.call(null,cmds) - 1),i))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):(((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,i)) > new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,(i - 1)))))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),(i + 1)):((new cljs.core.Keyword(null,"else","else",1017020587))?cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,i),new cljs.core.Keyword(null,"next","next",1017282149),null):null)))),iter__5907.call(null,cljs.core.rest.call(null,s__5908__$2)));
}
} else
{return null;
}
break;
}
});})(cmds,s__5892__$2,temp__4092__auto__))
,null,null));
});})(cmds,s__5892__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cmds)));
})(),iter__5891.call(null,cljs.core.rest.call(null,s__5892__$2)));
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
return (function (p1__5914_SHARP_){if((cljs.core.first.call(null,p1__5914_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__5923 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__5919(s__5920){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__5920__$1 = s__5920;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5920__$1);if(temp__4092__auto__)
{var s__5920__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5920__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5920__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5922 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5921 = 0;while(true){
if((i__5921 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__5921);cljs.core.chunk_append.call(null,b__5922,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null));
{
var G__5926 = (i__5921 + 1);
i__5921 = G__5926;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5922),iter__5919.call(null,cljs.core.chunk_rest.call(null,s__5920__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5922),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5920__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null),iter__5919.call(null,cljs.core.rest.call(null,s__5920__$2)));
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
var G__5924 = (counter + 1);
var G__5925 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__5923;
counter = G__5924;
last_z = G__5925;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__6012(s__6013){return (new cljs.core.LazySeq(null,(function (){var s__6013__$1 = s__6013;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__6013__$1);if(temp__4092__auto__)
{var s__6013__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6013__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6013__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6015 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6014 = 0;while(true){
if((i__6014 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__6014);cljs.core.chunk_append.call(null,b__6015,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__6014,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__){
return (function iter__6056(s__6057){return (new cljs.core.LazySeq(null,((function (i__6014,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__){
return (function (){var s__6057__$1 = s__6057;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6057__$1);if(temp__4092__auto____$1)
{var s__6057__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6057__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6057__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6059 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6058 = 0;while(true){
if((i__6058 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__6058);cljs.core.chunk_append.call(null,b__6059,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6058,i__6014,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6059,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__){
return (function (p1__5927_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5927_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6058,i__6014,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6059,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6058,i__6014,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6059,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__){
return (function iter__6068(s__6069){return (new cljs.core.LazySeq(null,((function (i__6058,i__6014,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6059,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__){
return (function (){var s__6069__$1 = s__6069;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6069__$1);if(temp__4092__auto____$2)
{var s__6069__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6069__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__6069__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__6071 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__6070 = 0;while(true){
if((i__6070 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__6070);cljs.core.chunk_append.call(null,b__6071,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6096 = (i__6070 + 1);
i__6070 = G__6096;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6071),iter__6068.call(null,cljs.core.chunk_rest.call(null,s__6069__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6071),null);
}
} else
{var token = cljs.core.first.call(null,s__6069__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6068.call(null,cljs.core.rest.call(null,s__6069__$2)));
}
} else
{return null;
}
break;
}
});})(i__6058,i__6014,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6059,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__))
,null,null));
});})(i__6058,i__6014,cmd,c__4158__auto____$1,size__4159__auto____$1,b__6059,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__6097 = (i__6058 + 1);
i__6058 = G__6097;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6059),iter__6056.call(null,cljs.core.chunk_rest.call(null,s__6057__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6059),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6057__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6014,cmd,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__){
return (function (p1__5927_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5927_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6014,cmd,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6014,cmd,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__){
return (function iter__6072(s__6073){return (new cljs.core.LazySeq(null,((function (i__6014,cmd,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__){
return (function (){var s__6073__$1 = s__6073;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6073__$1);if(temp__4092__auto____$2)
{var s__6073__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6073__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6073__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6075 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6074 = 0;while(true){
if((i__6074 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__6074);cljs.core.chunk_append.call(null,b__6075,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6098 = (i__6074 + 1);
i__6074 = G__6098;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6075),iter__6072.call(null,cljs.core.chunk_rest.call(null,s__6073__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6075),null);
}
} else
{var token = cljs.core.first.call(null,s__6073__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6072.call(null,cljs.core.rest.call(null,s__6073__$2)));
}
} else
{return null;
}
break;
}
});})(i__6014,cmd,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__))
,null,null));
});})(i__6014,cmd,s__6057__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__6056.call(null,cljs.core.rest.call(null,s__6057__$2)));
}
} else
{return null;
}
break;
}
});})(i__6014,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__))
,null,null));
});})(i__6014,part,c__4158__auto__,size__4159__auto__,b__6015,s__6013__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__6099 = (i__6014 + 1);
i__6014 = G__6099;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6015),iter__6012.call(null,cljs.core.chunk_rest.call(null,s__6013__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6015),null);
}
} else
{var part = cljs.core.first.call(null,s__6013__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__6013__$2,temp__4092__auto__){
return (function iter__6076(s__6077){return (new cljs.core.LazySeq(null,((function (part,s__6013__$2,temp__4092__auto__){
return (function (){var s__6077__$1 = s__6077;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__6077__$1);if(temp__4092__auto____$1)
{var s__6077__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6077__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6077__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6079 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6078 = 0;while(true){
if((i__6078 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__6078);cljs.core.chunk_append.call(null,b__6079,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__6078,cmd,c__4158__auto__,size__4159__auto__,b__6079,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__){
return (function (p1__5927_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5927_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__6078,cmd,c__4158__auto__,size__4159__auto__,b__6079,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__6078,cmd,c__4158__auto__,size__4159__auto__,b__6079,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__){
return (function iter__6088(s__6089){return (new cljs.core.LazySeq(null,((function (i__6078,cmd,c__4158__auto__,size__4159__auto__,b__6079,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__){
return (function (){var s__6089__$1 = s__6089;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6089__$1);if(temp__4092__auto____$2)
{var s__6089__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6089__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__6089__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__6091 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__6090 = 0;while(true){
if((i__6090 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__6090);cljs.core.chunk_append.call(null,b__6091,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6100 = (i__6090 + 1);
i__6090 = G__6100;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6091),iter__6088.call(null,cljs.core.chunk_rest.call(null,s__6089__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6091),null);
}
} else
{var token = cljs.core.first.call(null,s__6089__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6088.call(null,cljs.core.rest.call(null,s__6089__$2)));
}
} else
{return null;
}
break;
}
});})(i__6078,cmd,c__4158__auto__,size__4159__auto__,b__6079,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__))
,null,null));
});})(i__6078,cmd,c__4158__auto__,size__4159__auto__,b__6079,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__6101 = (i__6078 + 1);
i__6078 = G__6101;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6079),iter__6076.call(null,cljs.core.chunk_rest.call(null,s__6077__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6079),null);
}
} else
{var cmd = cljs.core.first.call(null,s__6077__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__){
return (function (p1__5927_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5927_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__){
return (function iter__6092(s__6093){return (new cljs.core.LazySeq(null,((function (cmd,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__){
return (function (){var s__6093__$1 = s__6093;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__6093__$1);if(temp__4092__auto____$2)
{var s__6093__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__6093__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__6093__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__6095 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__6094 = 0;while(true){
if((i__6094 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__6094);cljs.core.chunk_append.call(null,b__6095,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__6102 = (i__6094 + 1);
i__6094 = G__6102;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6095),iter__6092.call(null,cljs.core.chunk_rest.call(null,s__6093__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6095),null);
}
} else
{var token = cljs.core.first.call(null,s__6093__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__6092.call(null,cljs.core.rest.call(null,s__6093__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__6077__$2,temp__4092__auto____$1,part,s__6013__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__6076.call(null,cljs.core.rest.call(null,s__6077__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__6013__$2,temp__4092__auto__))
,null,null));
});})(part,s__6013__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__6012.call(null,cljs.core.rest.call(null,s__6013__$2)));
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