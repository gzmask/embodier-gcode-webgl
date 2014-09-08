// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
embodier.fileapi.last_extrusion = (function last_extrusion(layers_cmds){var iter__4158__auto__ = (function iter__5260(s__5261){return (new cljs.core.LazySeq(null,(function (){var s__5261__$1 = s__5261;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5261__$1);if(temp__4092__auto__)
{var s__5261__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5261__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5261__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5263 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5262 = 0;while(true){
if((i__5262 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5262);cljs.core.chunk_append.call(null,b__5263,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5264 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__5265 = (counter + 1);
var G__5266 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__5264;
counter = G__5265;
last_extrusion__$1 = G__5266;
continue;
}
}
break;
}
})());
{
var G__5267 = (i__5262 + 1);
i__5262 = G__5267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5263),iter__5260.call(null,cljs.core.chunk_rest.call(null,s__5261__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5263),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5261__$2);return cljs.core.cons.call(null,(function (){var resultcmds = null;var counter = 0;var last_extrusion__$1 = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return resultcmds;
} else
{{
var G__5268 = cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.nth.call(null,cmds,counter),new cljs.core.Keyword(null,"e-","e-",1013907418),last_extrusion__$1),resultcmds);
var G__5269 = (counter + 1);
var G__5270 = new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cmds,counter));
resultcmds = G__5268;
counter = G__5269;
last_extrusion__$1 = G__5270;
continue;
}
}
break;
}
})(),iter__5260.call(null,cljs.core.rest.call(null,s__5261__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,layers_cmds);
});
embodier.fileapi.extrusionize = (function extrusionize(layers_cmds){var iter__4158__auto__ = (function iter__5275(s__5276){return (new cljs.core.LazySeq(null,(function (){var s__5276__$1 = s__5276;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5276__$1);if(temp__4092__auto__)
{var s__5276__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5276__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5276__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5278 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5277 = 0;while(true){
if((i__5277 < size__4157__auto__))
{var cmds = cljs.core._nth.call(null,c__4156__auto__,i__5277);cljs.core.chunk_append.call(null,b__5278,cljs.core.filter.call(null,((function (i__5277,cmds,c__4156__auto__,size__4157__auto__,b__5278,s__5276__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(i__5277,cmds,c__4156__auto__,size__4157__auto__,b__5278,s__5276__$2,temp__4092__auto__))
,cmds));
{
var G__5279 = (i__5277 + 1);
i__5277 = G__5279;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5278),iter__5275.call(null,cljs.core.chunk_rest.call(null,s__5276__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5278),null);
}
} else
{var cmds = cljs.core.first.call(null,s__5276__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (cmds,s__5276__$2,temp__4092__auto__){
return (function (cmd){if((new cljs.core.Keyword(null,"e","e",1013904343).cljs$core$IFn$_invoke$arity$1(cmd) > new cljs.core.Keyword(null,"e-","e-",1013907418).cljs$core$IFn$_invoke$arity$1(cmd)))
{return true;
} else
{return false;
}
});})(cmds,s__5276__$2,temp__4092__auto__))
,cmds),iter__5275.call(null,cljs.core.rest.call(null,s__5276__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,layers_cmds);
});
embodier.fileapi.collapseZ = (function collapseZ(layers_cmds){var resultcmds = null;var counter = 0;var last_z = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,layers_cmds)))
{return cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (resultcmds,counter,last_z){
return (function (p1__5280_SHARP_){if((cljs.core.first.call(null,p1__5280_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__5289 = cljs.core.cons.call(null,(function (){var iter__4158__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__5285(s__5286){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__5286__$1 = s__5286;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5286__$1);if(temp__4092__auto__)
{var s__5286__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5286__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5286__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5288 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5287 = 0;while(true){
if((i__5287 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__5287);cljs.core.chunk_append.call(null,b__5288,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null));
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
{var cmd = cljs.core.first.call(null,s__5286__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null),iter__5285.call(null,cljs.core.rest.call(null,s__5286__$2)));
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
var G__5290 = (counter + 1);
var G__5291 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,layers_cmds,counter))));
resultcmds = G__5289;
counter = G__5290;
last_z = G__5291;
continue;
}
}
break;
}
});
embodier.fileapi.cmd_map = (function cmd_map(layers_cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = (function iter__5378(s__5379){return (new cljs.core.LazySeq(null,(function (){var s__5379__$1 = s__5379;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5379__$1);if(temp__4092__auto__)
{var s__5379__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5379__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5379__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5381 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5380 = 0;while(true){
if((i__5380 < size__4157__auto__))
{var part = cljs.core._nth.call(null,c__4156__auto__,i__5380);cljs.core.chunk_append.call(null,b__5381,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (i__5380,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__){
return (function iter__5422(s__5423){return (new cljs.core.LazySeq(null,((function (i__5380,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__){
return (function (){var s__5423__$1 = s__5423;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5423__$1);if(temp__4092__auto____$1)
{var s__5423__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5423__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5423__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5425 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5424 = 0;while(true){
if((i__5424 < size__4157__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4156__auto____$1,i__5424);cljs.core.chunk_append.call(null,b__5425,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5424,i__5380,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5425,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__){
return (function (p1__5293_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5293_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5424,i__5380,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5425,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5424,i__5380,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5425,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__){
return (function iter__5434(s__5435){return (new cljs.core.LazySeq(null,((function (i__5424,i__5380,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5425,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__){
return (function (){var s__5435__$1 = s__5435;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5435__$1);if(temp__4092__auto____$2)
{var s__5435__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5435__$2))
{var c__4156__auto____$2 = cljs.core.chunk_first.call(null,s__5435__$2);var size__4157__auto____$2 = cljs.core.count.call(null,c__4156__auto____$2);var b__5437 = cljs.core.chunk_buffer.call(null,size__4157__auto____$2);if((function (){var i__5436 = 0;while(true){
if((i__5436 < size__4157__auto____$2))
{var token = cljs.core._nth.call(null,c__4156__auto____$2,i__5436);cljs.core.chunk_append.call(null,b__5437,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5462 = (i__5436 + 1);
i__5436 = G__5462;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5437),iter__5434.call(null,cljs.core.chunk_rest.call(null,s__5435__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5437),null);
}
} else
{var token = cljs.core.first.call(null,s__5435__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5434.call(null,cljs.core.rest.call(null,s__5435__$2)));
}
} else
{return null;
}
break;
}
});})(i__5424,i__5380,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5425,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__))
,null,null));
});})(i__5424,i__5380,cmd,c__4156__auto____$1,size__4157__auto____$1,b__5425,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5463 = (i__5424 + 1);
i__5424 = G__5463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5425),iter__5422.call(null,cljs.core.chunk_rest.call(null,s__5423__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5425),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5423__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5380,cmd,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__){
return (function (p1__5293_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5293_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5380,cmd,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5380,cmd,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__){
return (function iter__5438(s__5439){return (new cljs.core.LazySeq(null,((function (i__5380,cmd,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__){
return (function (){var s__5439__$1 = s__5439;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5439__$1);if(temp__4092__auto____$2)
{var s__5439__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5439__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5439__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5441 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5440 = 0;while(true){
if((i__5440 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__5440);cljs.core.chunk_append.call(null,b__5441,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5464 = (i__5440 + 1);
i__5440 = G__5464;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5441),iter__5438.call(null,cljs.core.chunk_rest.call(null,s__5439__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5441),null);
}
} else
{var token = cljs.core.first.call(null,s__5439__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5438.call(null,cljs.core.rest.call(null,s__5439__$2)));
}
} else
{return null;
}
break;
}
});})(i__5380,cmd,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__))
,null,null));
});})(i__5380,cmd,s__5423__$2,temp__4092__auto____$1,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5422.call(null,cljs.core.rest.call(null,s__5423__$2)));
}
} else
{return null;
}
break;
}
});})(i__5380,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__))
,null,null));
});})(i__5380,part,c__4156__auto__,size__4157__auto__,b__5381,s__5379__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()));
{
var G__5465 = (i__5380 + 1);
i__5380 = G__5465;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5381),iter__5378.call(null,cljs.core.chunk_rest.call(null,s__5379__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5381),null);
}
} else
{var part = cljs.core.first.call(null,s__5379__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4158__auto__ = ((function (part,s__5379__$2,temp__4092__auto__){
return (function iter__5442(s__5443){return (new cljs.core.LazySeq(null,((function (part,s__5379__$2,temp__4092__auto__){
return (function (){var s__5443__$1 = s__5443;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5443__$1);if(temp__4092__auto____$1)
{var s__5443__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5443__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5443__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5445 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5444 = 0;while(true){
if((i__5444 < size__4157__auto__))
{var cmd = cljs.core._nth.call(null,c__4156__auto__,i__5444);cljs.core.chunk_append.call(null,b__5445,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5444,cmd,c__4156__auto__,size__4157__auto__,b__5445,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__){
return (function (p1__5293_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5293_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5444,cmd,c__4156__auto__,size__4157__auto__,b__5445,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (i__5444,cmd,c__4156__auto__,size__4157__auto__,b__5445,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__){
return (function iter__5454(s__5455){return (new cljs.core.LazySeq(null,((function (i__5444,cmd,c__4156__auto__,size__4157__auto__,b__5445,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__){
return (function (){var s__5455__$1 = s__5455;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5455__$1);if(temp__4092__auto____$2)
{var s__5455__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5455__$2))
{var c__4156__auto____$1 = cljs.core.chunk_first.call(null,s__5455__$2);var size__4157__auto____$1 = cljs.core.count.call(null,c__4156__auto____$1);var b__5457 = cljs.core.chunk_buffer.call(null,size__4157__auto____$1);if((function (){var i__5456 = 0;while(true){
if((i__5456 < size__4157__auto____$1))
{var token = cljs.core._nth.call(null,c__4156__auto____$1,i__5456);cljs.core.chunk_append.call(null,b__5457,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5466 = (i__5456 + 1);
i__5456 = G__5466;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5457),iter__5454.call(null,cljs.core.chunk_rest.call(null,s__5455__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5457),null);
}
} else
{var token = cljs.core.first.call(null,s__5455__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5454.call(null,cljs.core.rest.call(null,s__5455__$2)));
}
} else
{return null;
}
break;
}
});})(i__5444,cmd,c__4156__auto__,size__4157__auto__,b__5445,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__))
,null,null));
});})(i__5444,cmd,c__4156__auto__,size__4157__auto__,b__5445,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5467 = (i__5444 + 1);
i__5444 = G__5467;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5445),iter__5442.call(null,cljs.core.chunk_rest.call(null,s__5443__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5445),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5443__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__){
return (function (p1__5293_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5293_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__))
,(function (){var iter__4158__auto__ = ((function (cmd,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__){
return (function iter__5458(s__5459){return (new cljs.core.LazySeq(null,((function (cmd,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__){
return (function (){var s__5459__$1 = s__5459;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5459__$1);if(temp__4092__auto____$2)
{var s__5459__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5459__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__5459__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__5461 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__5460 = 0;while(true){
if((i__5460 < size__4157__auto__))
{var token = cljs.core._nth.call(null,c__4156__auto__,i__5460);cljs.core.chunk_append.call(null,b__5461,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5468 = (i__5460 + 1);
i__5460 = G__5468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5461),iter__5458.call(null,cljs.core.chunk_rest.call(null,s__5459__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5461),null);
}
} else
{var token = cljs.core.first.call(null,s__5459__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5458.call(null,cljs.core.rest.call(null,s__5459__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__5443__$2,temp__4092__auto____$1,part,s__5379__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5442.call(null,cljs.core.rest.call(null,s__5443__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__5379__$2,temp__4092__auto__))
,null,null));
});})(part,s__5379__$2,temp__4092__auto__))
;return iter__4158__auto__.call(null,part);
})()),iter__5378.call(null,cljs.core.rest.call(null,s__5379__$2)));
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