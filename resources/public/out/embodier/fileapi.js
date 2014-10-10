// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* reverse each layers cmds
*/
embodier.fileapi.reverse_layerscmd = (function reverse_layerscmd(layers_cmds){var iter__4160__auto__ = (function iter__16537(s__16538){return (new cljs.core.LazySeq(null,(function (){var s__16538__$1 = s__16538;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16538__$1);if(temp__4092__auto__)
{var s__16538__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16538__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16538__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16540 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16539 = 0;while(true){
if((i__16539 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__16539);cljs.core.chunk_append.call(null,b__16540,cljs.core.reverse.call(null,cmds));
{
var G__16541 = (i__16539 + 1);
i__16539 = G__16541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16540),iter__16537.call(null,cljs.core.chunk_rest.call(null,s__16538__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16540),null);
}
} else
{var cmds = cljs.core.first.call(null,s__16538__$2);return cljs.core.cons.call(null,cljs.core.reverse.call(null,cmds),iter__16537.call(null,cljs.core.rest.call(null,s__16538__$2)));
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
embodier.fileapi.collapseY = (function collapseY(layers_cmds){var iter__4160__auto__ = (function iter__16546(s__16547){return (new cljs.core.LazySeq(null,(function (){var s__16547__$1 = s__16547;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16547__$1);if(temp__4092__auto__)
{var s__16547__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16547__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16547__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16549 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16548 = 0;while(true){
if((i__16548 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__16548);cljs.core.chunk_append.call(null,b__16549,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__16550 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__16551 = (counter + 1);
var G__16552 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__16550;
counter = G__16551;
last_y = G__16552;
continue;
}
}
break;
}
})());
{
var G__16553 = (i__16548 + 1);
i__16548 = G__16553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16549),iter__16546.call(null,cljs.core.chunk_rest.call(null,s__16547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16549),null);
}
} else
{var cmds = cljs.core.first.call(null,s__16547__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_y = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__16554 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"y","y",1013904363),last_y),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__16555 = (counter + 1);
var G__16556 = (((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_y:new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__16554;
counter = G__16555;
last_y = G__16556;
continue;
}
}
break;
}
})(),iter__16546.call(null,cljs.core.rest.call(null,s__16547__$2)));
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
embodier.fileapi.collapseX = (function collapseX(layers_cmds){var iter__4160__auto__ = (function iter__16561(s__16562){return (new cljs.core.LazySeq(null,(function (){var s__16562__$1 = s__16562;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16562__$1);if(temp__4092__auto__)
{var s__16562__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16562__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16562__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16564 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16563 = 0;while(true){
if((i__16563 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__16563);cljs.core.chunk_append.call(null,b__16564,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__16565 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__16566 = (counter + 1);
var G__16567 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__16565;
counter = G__16566;
last_x = G__16567;
continue;
}
}
break;
}
})());
{
var G__16568 = (i__16563 + 1);
i__16563 = G__16568;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16564),iter__16561.call(null,cljs.core.chunk_rest.call(null,s__16562__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16564),null);
}
} else
{var cmds = cljs.core.first.call(null,s__16562__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_x = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__16569 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"x","x",1013904362),last_x),resultcmds):cljs.core.cons.call(null,cljs.core.nth.call(null,cmds,counter),resultcmds));
var G__16570 = (counter + 1);
var G__16571 = (((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_x:new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__16569;
counter = G__16570;
last_x = G__16571;
continue;
}
}
break;
}
})(),iter__16561.call(null,cljs.core.rest.call(null,s__16562__$2)));
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
embodier.fileapi.collapseE = (function collapseE(layers_cmds){var iter__4160__auto__ = (function iter__16576(s__16577){return (new cljs.core.LazySeq(null,(function (){var s__16577__$1 = s__16577;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16577__$1);if(temp__4092__auto__)
{var s__16577__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16577__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16577__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16579 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16578 = 0;while(true){
if((i__16578 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__16578);cljs.core.chunk_append.call(null,b__16579,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__16580 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion,new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds));
var G__16581 = (counter + 1);
var G__16582 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__16580;
counter = G__16581;
last_extrusion = G__16582;
continue;
}
}
break;
}
})());
{
var G__16583 = (i__16578 + 1);
i__16578 = G__16583;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16579),iter__16576.call(null,cljs.core.chunk_rest.call(null,s__16577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16579),null);
}
} else
{var cmds = cljs.core.first.call(null,s__16577__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__16584 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e","e",1013904343),last_extrusion,new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds):cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion),resultcmds));
var G__16585 = (counter + 1);
var G__16586 = (((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)) == null))?last_extrusion:new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter)));
resultcmds = G__16584;
counter = G__16585;
last_extrusion = G__16586;
continue;
}
}
break;
}
})(),iter__16576.call(null,cljs.core.rest.call(null,s__16577__$2)));
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
embodier.fileapi.remove_jumps = (function remove_jumps(layers_cmds){var iter__4160__auto__ = (function iter__16591(s__16592){return (new cljs.core.LazySeq(null,(function (){var s__16592__$1 = s__16592;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16592__$1);if(temp__4092__auto__)
{var s__16592__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16592__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16592__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16594 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16593 = 0;while(true){
if((i__16593 < size__4159__auto__))
{var cmds = cljs.core._nth.call(null,c__4158__auto__,i__16593);cljs.core.chunk_append.call(null,b__16594,cljs.core.filter.call(null,((function (i__16593,cmds,c__4158__auto__,size__4159__auto__,b__16594,s__16592__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__16593,cmds,c__4158__auto__,size__4159__auto__,b__16594,s__16592__$2,temp__4092__auto__))
,cmds));
{
var G__16595 = (i__16593 + 1);
i__16593 = G__16595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16594),iter__16591.call(null,cljs.core.chunk_rest.call(null,s__16592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16594),null);
}
} else
{var cmds = cljs.core.first.call(null,s__16592__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__16592__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__16592__$2,temp__4092__auto__))
,cmds),iter__16591.call(null,cljs.core.rest.call(null,s__16592__$2)));
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
return (function (p1__16596_SHARP_){if((cljs.core.first.call(null,p1__16596_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__16605 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__16601(s__16602){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__16602__$1 = s__16602;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16602__$1);if(temp__4092__auto__)
{var s__16602__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16602__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16602__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16604 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16603 = 0;while(true){
if((i__16603 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__16603);cljs.core.chunk_append.call(null,b__16604,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null));
{
var G__16608 = (i__16603 + 1);
i__16603 = G__16608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16604),iter__16601.call(null,cljs.core.chunk_rest.call(null,s__16602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16604),null);
}
} else
{var cmd = cljs.core.first.call(null,s__16602__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):null),iter__16601.call(null,cljs.core.rest.call(null,s__16602__$2)));
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
var G__16606 = (counter + 1);
var G__16607 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__16605;
counter = G__16606;
last_z = G__16607;
continue;
}
}
break;
}
});
/**
* translate each command to a map like {:x 1, :y 2, ...}
*/
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__16694(s__16695){return (new cljs.core.LazySeq(null,(function (){var s__16695__$1 = s__16695;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16695__$1);if(temp__4092__auto__)
{var s__16695__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16695__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16695__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16697 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16696 = 0;while(true){
if((i__16696 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__16696);cljs.core.chunk_append.call(null,b__16697,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__16696,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__){
return (function iter__16738(s__16739){return (new cljs.core.LazySeq(null,((function (i__16696,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__){
return (function (){var s__16739__$1 = s__16739;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16739__$1);if(temp__4092__auto____$1)
{var s__16739__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16739__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__16739__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__16741 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__16740 = 0;while(true){
if((i__16740 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__16740);cljs.core.chunk_append.call(null,b__16741,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__16740,i__16696,cmd,c__4158__auto____$1,size__4159__auto____$1,b__16741,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__){
return (function (p1__16609_SHARP_){if(cljs.core.not_EQ_.call(null,p1__16609_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__16740,i__16696,cmd,c__4158__auto____$1,size__4159__auto____$1,b__16741,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__16740,i__16696,cmd,c__4158__auto____$1,size__4159__auto____$1,b__16741,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__){
return (function iter__16750(s__16751){return (new cljs.core.LazySeq(null,((function (i__16740,i__16696,cmd,c__4158__auto____$1,size__4159__auto____$1,b__16741,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__){
return (function (){var s__16751__$1 = s__16751;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__16751__$1);if(temp__4092__auto____$2)
{var s__16751__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__16751__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__16751__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__16753 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__16752 = 0;while(true){
if((i__16752 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__16752);cljs.core.chunk_append.call(null,b__16753,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__16778 = (i__16752 + 1);
i__16752 = G__16778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16753),iter__16750.call(null,cljs.core.chunk_rest.call(null,s__16751__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16753),null);
}
} else
{var token = cljs.core.first.call(null,s__16751__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__16750.call(null,cljs.core.rest.call(null,s__16751__$2)));
}
} else
{return null;
}
break;
}
});})(i__16740,i__16696,cmd,c__4158__auto____$1,size__4159__auto____$1,b__16741,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__))
,null,null));
});})(i__16740,i__16696,cmd,c__4158__auto____$1,size__4159__auto____$1,b__16741,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__16779 = (i__16740 + 1);
i__16740 = G__16779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16741),iter__16738.call(null,cljs.core.chunk_rest.call(null,s__16739__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16741),null);
}
} else
{var cmd = cljs.core.first.call(null,s__16739__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__16696,cmd,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__){
return (function (p1__16609_SHARP_){if(cljs.core.not_EQ_.call(null,p1__16609_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__16696,cmd,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__16696,cmd,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__){
return (function iter__16754(s__16755){return (new cljs.core.LazySeq(null,((function (i__16696,cmd,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__){
return (function (){var s__16755__$1 = s__16755;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__16755__$1);if(temp__4092__auto____$2)
{var s__16755__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__16755__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__16755__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__16757 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__16756 = 0;while(true){
if((i__16756 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__16756);cljs.core.chunk_append.call(null,b__16757,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__16780 = (i__16756 + 1);
i__16756 = G__16780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16757),iter__16754.call(null,cljs.core.chunk_rest.call(null,s__16755__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16757),null);
}
} else
{var token = cljs.core.first.call(null,s__16755__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__16754.call(null,cljs.core.rest.call(null,s__16755__$2)));
}
} else
{return null;
}
break;
}
});})(i__16696,cmd,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__))
,null,null));
});})(i__16696,cmd,s__16739__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__16738.call(null,cljs.core.rest.call(null,s__16739__$2)));
}
} else
{return null;
}
break;
}
});})(i__16696,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__))
,null,null));
});})(i__16696,part,c__4158__auto__,size__4159__auto__,b__16697,s__16695__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__16781 = (i__16696 + 1);
i__16696 = G__16781;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16697),iter__16694.call(null,cljs.core.chunk_rest.call(null,s__16695__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16697),null);
}
} else
{var part = cljs.core.first.call(null,s__16695__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__16695__$2,temp__4092__auto__){
return (function iter__16758(s__16759){return (new cljs.core.LazySeq(null,((function (part,s__16695__$2,temp__4092__auto__){
return (function (){var s__16759__$1 = s__16759;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__16759__$1);if(temp__4092__auto____$1)
{var s__16759__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__16759__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16759__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16761 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16760 = 0;while(true){
if((i__16760 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__16760);cljs.core.chunk_append.call(null,b__16761,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__16760,cmd,c__4158__auto__,size__4159__auto__,b__16761,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__){
return (function (p1__16609_SHARP_){if(cljs.core.not_EQ_.call(null,p1__16609_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__16760,cmd,c__4158__auto__,size__4159__auto__,b__16761,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__16760,cmd,c__4158__auto__,size__4159__auto__,b__16761,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__){
return (function iter__16770(s__16771){return (new cljs.core.LazySeq(null,((function (i__16760,cmd,c__4158__auto__,size__4159__auto__,b__16761,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__){
return (function (){var s__16771__$1 = s__16771;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__16771__$1);if(temp__4092__auto____$2)
{var s__16771__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__16771__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__16771__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__16773 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__16772 = 0;while(true){
if((i__16772 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__16772);cljs.core.chunk_append.call(null,b__16773,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__16782 = (i__16772 + 1);
i__16772 = G__16782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16773),iter__16770.call(null,cljs.core.chunk_rest.call(null,s__16771__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16773),null);
}
} else
{var token = cljs.core.first.call(null,s__16771__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__16770.call(null,cljs.core.rest.call(null,s__16771__$2)));
}
} else
{return null;
}
break;
}
});})(i__16760,cmd,c__4158__auto__,size__4159__auto__,b__16761,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__))
,null,null));
});})(i__16760,cmd,c__4158__auto__,size__4159__auto__,b__16761,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__16783 = (i__16760 + 1);
i__16760 = G__16783;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16761),iter__16758.call(null,cljs.core.chunk_rest.call(null,s__16759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16761),null);
}
} else
{var cmd = cljs.core.first.call(null,s__16759__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__){
return (function (p1__16609_SHARP_){if(cljs.core.not_EQ_.call(null,p1__16609_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__){
return (function iter__16774(s__16775){return (new cljs.core.LazySeq(null,((function (cmd,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__){
return (function (){var s__16775__$1 = s__16775;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__16775__$1);if(temp__4092__auto____$2)
{var s__16775__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__16775__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__16775__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__16777 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__16776 = 0;while(true){
if((i__16776 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__16776);cljs.core.chunk_append.call(null,b__16777,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__16784 = (i__16776 + 1);
i__16776 = G__16784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16777),iter__16774.call(null,cljs.core.chunk_rest.call(null,s__16775__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16777),null);
}
} else
{var token = cljs.core.first.call(null,s__16775__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__16774.call(null,cljs.core.rest.call(null,s__16775__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__16759__$2,temp__4092__auto____$1,part,s__16695__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__16758.call(null,cljs.core.rest.call(null,s__16759__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__16695__$2,temp__4092__auto__))
,null,null));
});})(part,s__16695__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__16694.call(null,cljs.core.rest.call(null,s__16695__$2)));
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.remove_jumps.call(null,embodier.fileapi.reverse_layerscmd.call(null,embodier.fileapi.collapseE.call(null,embodier.fileapi.collapseY.call(null,embodier.fileapi.collapseX.call(null,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str)))))))))));
});
/**
* called by web component of file onload. f (file) being read into layers atom
*/
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map