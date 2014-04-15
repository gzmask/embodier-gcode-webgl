// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
embodier.fileapi.collapseZ = (function collapseZ(cmds){var resultcmds = null;var counter = 0;var last_z = 0;while(true){
if(cljs.core._EQ_.call(null,counter,cljs.core.count.call(null,cmds)))
{return cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (resultcmds,counter,last_z){
return (function (p1__5496_SHARP_){if((cljs.core.first.call(null,p1__5496_SHARP_) == null))
{return false;
} else
{return true;
}
});})(resultcmds,counter,last_z))
,resultcmds));
} else
{{
var G__5505 = cljs.core.cons.call(null,(function (){var iter__4160__auto__ = ((function (resultcmds,counter,last_z){
return (function iter__5501(s__5502){return (new cljs.core.LazySeq(null,((function (resultcmds,counter,last_z){
return (function (){var s__5502__$1 = s__5502;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5502__$1);if(temp__4092__auto__)
{var s__5502__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5502__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5502__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5504 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5503 = 0;while(true){
if((i__5503 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__5503);cljs.core.chunk_append.call(null,b__5504,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null));
{
var G__5508 = (i__5503 + 1);
i__5503 = G__5508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5504),iter__5501.call(null,cljs.core.chunk_rest.call(null,s__5502__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5504),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5502__$2);return cljs.core.cons.call(null,(((new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cmd) == null))?(((!((new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cmd) == null))) || (!((new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cmd) == null))))?cljs.core.assoc.call(null,cmd,new cljs.core.Keyword(null,"z","z",1013904364),last_z):cmd):null),iter__5501.call(null,cljs.core.rest.call(null,s__5502__$2)));
}
} else
{return null;
}
break;
}
});})(resultcmds,counter,last_z))
,null,null));
});})(resultcmds,counter,last_z))
;return iter__4160__auto__.call(null,cljs.core.nth.call(null,cmds,counter));
})(),resultcmds);
var G__5506 = (counter + 1);
var G__5507 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,cmds,counter))),null))?last_z:new cljs.core.Keyword(null,"z","z",1013904364).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,cmds,counter))));
resultcmds = G__5505;
counter = G__5506;
last_z = G__5507;
continue;
}
}
break;
}
});
embodier.fileapi.cmd_map = (function cmd_map(cmds){return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = (function iter__5594(s__5595){return (new cljs.core.LazySeq(null,(function (){var s__5595__$1 = s__5595;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5595__$1);if(temp__4092__auto__)
{var s__5595__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5595__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5595__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5597 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5596 = 0;while(true){
if((i__5596 < size__4159__auto__))
{var part = cljs.core._nth.call(null,c__4158__auto__,i__5596);cljs.core.chunk_append.call(null,b__5597,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (i__5596,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__){
return (function iter__5638(s__5639){return (new cljs.core.LazySeq(null,((function (i__5596,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__){
return (function (){var s__5639__$1 = s__5639;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5639__$1);if(temp__4092__auto____$1)
{var s__5639__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5639__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__5639__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__5641 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__5640 = 0;while(true){
if((i__5640 < size__4159__auto____$1))
{var cmd = cljs.core._nth.call(null,c__4158__auto____$1,i__5640);cljs.core.chunk_append.call(null,b__5641,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5640,i__5596,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5641,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__){
return (function (p1__5509_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5509_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5640,i__5596,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5641,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__5640,i__5596,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5641,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__){
return (function iter__5650(s__5651){return (new cljs.core.LazySeq(null,((function (i__5640,i__5596,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5641,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__){
return (function (){var s__5651__$1 = s__5651;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5651__$1);if(temp__4092__auto____$2)
{var s__5651__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5651__$2))
{var c__4158__auto____$2 = cljs.core.chunk_first.call(null,s__5651__$2);var size__4159__auto____$2 = cljs.core.count.call(null,c__4158__auto____$2);var b__5653 = cljs.core.chunk_buffer.call(null,size__4159__auto____$2);if((function (){var i__5652 = 0;while(true){
if((i__5652 < size__4159__auto____$2))
{var token = cljs.core._nth.call(null,c__4158__auto____$2,i__5652);cljs.core.chunk_append.call(null,b__5653,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5678 = (i__5652 + 1);
i__5652 = G__5678;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5653),iter__5650.call(null,cljs.core.chunk_rest.call(null,s__5651__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5653),null);
}
} else
{var token = cljs.core.first.call(null,s__5651__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5650.call(null,cljs.core.rest.call(null,s__5651__$2)));
}
} else
{return null;
}
break;
}
});})(i__5640,i__5596,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5641,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__))
,null,null));
});})(i__5640,i__5596,cmd,c__4158__auto____$1,size__4159__auto____$1,b__5641,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5679 = (i__5640 + 1);
i__5640 = G__5679;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5641),iter__5638.call(null,cljs.core.chunk_rest.call(null,s__5639__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5641),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5639__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5596,cmd,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__){
return (function (p1__5509_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5509_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5596,cmd,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__5596,cmd,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__){
return (function iter__5654(s__5655){return (new cljs.core.LazySeq(null,((function (i__5596,cmd,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__){
return (function (){var s__5655__$1 = s__5655;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5655__$1);if(temp__4092__auto____$2)
{var s__5655__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5655__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__5655__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__5657 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__5656 = 0;while(true){
if((i__5656 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__5656);cljs.core.chunk_append.call(null,b__5657,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5680 = (i__5656 + 1);
i__5656 = G__5680;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5657),iter__5654.call(null,cljs.core.chunk_rest.call(null,s__5655__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5657),null);
}
} else
{var token = cljs.core.first.call(null,s__5655__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5654.call(null,cljs.core.rest.call(null,s__5655__$2)));
}
} else
{return null;
}
break;
}
});})(i__5596,cmd,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__))
,null,null));
});})(i__5596,cmd,s__5639__$2,temp__4092__auto____$1,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5638.call(null,cljs.core.rest.call(null,s__5639__$2)));
}
} else
{return null;
}
break;
}
});})(i__5596,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__))
,null,null));
});})(i__5596,part,c__4158__auto__,size__4159__auto__,b__5597,s__5595__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()));
{
var G__5681 = (i__5596 + 1);
i__5596 = G__5681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5597),iter__5594.call(null,cljs.core.chunk_rest.call(null,s__5595__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5597),null);
}
} else
{var part = cljs.core.first.call(null,s__5595__$2);return cljs.core.cons.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),(function (){var iter__4160__auto__ = ((function (part,s__5595__$2,temp__4092__auto__){
return (function iter__5658(s__5659){return (new cljs.core.LazySeq(null,((function (part,s__5595__$2,temp__4092__auto__){
return (function (){var s__5659__$1 = s__5659;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__5659__$1);if(temp__4092__auto____$1)
{var s__5659__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__5659__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5659__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5661 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5660 = 0;while(true){
if((i__5660 < size__4159__auto__))
{var cmd = cljs.core._nth.call(null,c__4158__auto__,i__5660);cljs.core.chunk_append.call(null,b__5661,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (i__5660,cmd,c__4158__auto__,size__4159__auto__,b__5661,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__){
return (function (p1__5509_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5509_SHARP_,null))
{return true;
} else
{return false;
}
});})(i__5660,cmd,c__4158__auto__,size__4159__auto__,b__5661,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (i__5660,cmd,c__4158__auto__,size__4159__auto__,b__5661,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__){
return (function iter__5670(s__5671){return (new cljs.core.LazySeq(null,((function (i__5660,cmd,c__4158__auto__,size__4159__auto__,b__5661,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__){
return (function (){var s__5671__$1 = s__5671;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5671__$1);if(temp__4092__auto____$2)
{var s__5671__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5671__$2))
{var c__4158__auto____$1 = cljs.core.chunk_first.call(null,s__5671__$2);var size__4159__auto____$1 = cljs.core.count.call(null,c__4158__auto____$1);var b__5673 = cljs.core.chunk_buffer.call(null,size__4159__auto____$1);if((function (){var i__5672 = 0;while(true){
if((i__5672 < size__4159__auto____$1))
{var token = cljs.core._nth.call(null,c__4158__auto____$1,i__5672);cljs.core.chunk_append.call(null,b__5673,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5682 = (i__5672 + 1);
i__5672 = G__5682;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5673),iter__5670.call(null,cljs.core.chunk_rest.call(null,s__5671__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5673),null);
}
} else
{var token = cljs.core.first.call(null,s__5671__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5670.call(null,cljs.core.rest.call(null,s__5671__$2)));
}
} else
{return null;
}
break;
}
});})(i__5660,cmd,c__4158__auto__,size__4159__auto__,b__5661,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__))
,null,null));
});})(i__5660,cmd,c__4158__auto__,size__4159__auto__,b__5661,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())));
{
var G__5683 = (i__5660 + 1);
i__5660 = G__5683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5661),iter__5658.call(null,cljs.core.chunk_rest.call(null,s__5659__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5661),null);
}
} else
{var cmd = cljs.core.first.call(null,s__5659__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,((function (cmd,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__){
return (function (p1__5509_SHARP_){if(cljs.core.not_EQ_.call(null,p1__5509_SHARP_,null))
{return true;
} else
{return false;
}
});})(cmd,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__))
,(function (){var iter__4160__auto__ = ((function (cmd,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__){
return (function iter__5674(s__5675){return (new cljs.core.LazySeq(null,((function (cmd,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__){
return (function (){var s__5675__$1 = s__5675;while(true){
var temp__4092__auto____$2 = cljs.core.seq.call(null,s__5675__$1);if(temp__4092__auto____$2)
{var s__5675__$2 = temp__4092__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__5675__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5675__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5677 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5676 = 0;while(true){
if((i__5676 < size__4159__auto__))
{var token = cljs.core._nth.call(null,c__4158__auto__,i__5676);cljs.core.chunk_append.call(null,b__5677,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))));
{
var G__5684 = (i__5676 + 1);
i__5676 = G__5684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5677),iter__5674.call(null,cljs.core.chunk_rest.call(null,s__5675__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5677),null);
}
} else
{var token = cljs.core.first.call(null,s__5675__$2);return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.re_find.call(null,/^X-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",1013904362),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Y-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^Z-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z","z",1013904364),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^F-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",1013904344),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):(cljs.core.truth_(cljs.core.re_find.call(null,/^E-*\d+.*$/,token))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1013904343),cljs.core.re_find.call(null,/-*\d+\.*\d*/,token)], null):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null)))))),iter__5674.call(null,cljs.core.rest.call(null,s__5675__$2)));
}
} else
{return null;
}
break;
}
});})(cmd,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__))
,null,null));
});})(cmd,s__5659__$2,temp__4092__auto____$1,part,s__5595__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,clojure.string.split.call(null,cmd,/\s/));
})())),iter__5658.call(null,cljs.core.rest.call(null,s__5659__$2)));
}
} else
{return null;
}
break;
}
});})(part,s__5595__$2,temp__4092__auto__))
,null,null));
});})(part,s__5595__$2,temp__4092__auto__))
;return iter__4160__auto__.call(null,part);
})()),iter__5594.call(null,cljs.core.rest.call(null,s__5595__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cmds);
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
embodier.fileapi.readFile = (function readFile(layers,file){var raw_str = file.target.result;return cljs.core.reset_BANG_.call(null,layers,embodier.fileapi.collapseZ.call(null,embodier.fileapi.cmd_map.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str))))));
});
embodier.fileapi.setOnLoad = (function setOnLoad(f,layers){var reader = (new FileReader());reader.onload = cljs.core.partial.call(null,embodier.fileapi.readFile,layers);
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map