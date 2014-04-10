// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('secretary.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
embodier.core.routes = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),false], null));
embodier.core.logo = (function logo(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",3722789425),"35px"], null)], null),"Embodier"], null);
});
embodier.core.about = (function about(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"http://richever.ca/about#About"], null),"About Us"], null);
});
embodier.core.github = (function github(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"https://github.com/gzmask"], null),"Github"], null);
});
embodier.core.header = (function header(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2.col-md-offset-2","div.col-md-2.col-md-offset-2",765826059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.logo], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1.col-md-offset-2","div.col-md-1.col-md-offset-2",3707483658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#ccc"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.about], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",1688702423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),"#ccc"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.github], null)], null)], null);
});
embodier.core.layered = (function layered(str_ary){return cljs.core.partition_by.call(null,(function (s){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,"^G1.*Z.*"),s)))
{return false;
} else
{return true;
}
}),str_ary);
});
embodier.core.filterG1 = (function filterG1(str_ary){return cljs.core.filter.call(null,(function (s){if(cljs.core.truth_(cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,"^G1.*"),s)))
{return true;
} else
{return false;
}
}),str_ary);
});
embodier.core.readFile = (function readFile(file){var raw_str = file.target.result;var seq__5423 = cljs.core.seq.call(null,embodier.core.layered.call(null,embodier.core.filterG1.call(null,clojure.string.split_lines.call(null,raw_str))));var chunk__5424 = null;var count__5425 = 0;var i__5426 = 0;while(true){
if((i__5426 < count__5425))
{var ary = cljs.core._nth.call(null,chunk__5424,i__5426);console.log(cljs.core.print_str.call(null,ary));
{
var G__5427 = seq__5423;
var G__5428 = chunk__5424;
var G__5429 = count__5425;
var G__5430 = (i__5426 + 1);
seq__5423 = G__5427;
chunk__5424 = G__5428;
count__5425 = G__5429;
i__5426 = G__5430;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5423);if(temp__4092__auto__)
{var seq__5423__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5423__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__5423__$1);{
var G__5431 = cljs.core.chunk_rest.call(null,seq__5423__$1);
var G__5432 = c__4191__auto__;
var G__5433 = cljs.core.count.call(null,c__4191__auto__);
var G__5434 = 0;
seq__5423 = G__5431;
chunk__5424 = G__5432;
count__5425 = G__5433;
i__5426 = G__5434;
continue;
}
} else
{var ary = cljs.core.first.call(null,seq__5423__$1);console.log(cljs.core.print_str.call(null,ary));
{
var G__5435 = cljs.core.next.call(null,seq__5423__$1);
var G__5436 = null;
var G__5437 = 0;
var G__5438 = 0;
seq__5423 = G__5435;
chunk__5424 = G__5436;
count__5425 = G__5437;
i__5426 = G__5438;
continue;
}
}
} else
{return null;
}
}
break;
}
});
embodier.core.setOnLoad = (function setOnLoad(f){var reader = (new FileReader());reader.onload = embodier.core.readFile;
return reader.readAsText(f);
});
embodier.core.upload_button = (function upload_button(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#upload-button","input#upload-button",3773194999),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"file",new cljs.core.Keyword(null,"name","name",1017277949),"files[]",new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1108746965),"#555"], null),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5439_SHARP_){return embodier.core.setOnLoad.call(null,(p1__5439_SHARP_.target.files[0]));
})], null)], null);
});
embodier.core.file_dropper = (function file_dropper(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4.col-md-offset-1","div.col-md-4.col-md-offset-1",3472445452),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#file-dropper.bcircle.circle_file","div#file-dropper.bcircle.circle_file",1258536322),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-hdd","span.glyphicon.glyphicon-hdd",4570303237)], null)," Upload file here"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3.col-md-offset-3","div.col-md-3.col-md-offset-3",2119135757),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.upload_button], null)], null)], null)], null);
});
embodier.core.layer_view_before = (function layer_view_before(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#layer-view-before.bcircle.circle_layer","div#layer-view-before.bcircle.circle_layer",1381210725)], null);
});
embodier.core.layer_view_after = (function layer_view_after(){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#layer-view-after.bcircle.circle_layer","div#layer-view-after.bcircle.circle_layer",2186752860)], null);
});
embodier.core.control_cb = (function control_cb(name){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",1688702428),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",4171284561),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",2295458237),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",2295458237),name], null)], null)], null);
});
embodier.core.control_range_BANG_ = (function control_range_BANG_(name,min,max){var layer = reagent.core.atom.call(null,min);return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",4752778719),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",4171284561),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",2295458237),name,": ",cljs.core.deref.call(null,layer)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1017479852),"range",new cljs.core.Keyword(null,"name","name",1017277949),name,new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,layer),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5440_SHARP_){return cljs.core.reset_BANG_.call(null,layer,p1__5440_SHARP_.target.value);
}),new cljs.core.Keyword(null,"min","min",1014012356),min,new cljs.core.Keyword(null,"max","max",1014012118),max,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",3806786827),"4px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",2295458237),max], null)], null)], null);
});
});
embodier.core.layer_viewer = (function layer_viewer(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#layer-view.row","div#layer-view.row",2276277681),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",1688702430),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-11.col-md-offset-1","div.col-md-11.col-md-offset-1",823320592),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.layer_view_before], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-md-offset-6.glyphicon.glyphicon-circle-arrow-down.btn-lg","span.col-md-offset-6.glyphicon.glyphicon-circle-arrow-down.btn-lg",1976836263)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-11.col-md-offset-1","div.col-md-11.col-md-offset-1",823320592),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.layer_view_after], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",1688702426),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.control_cb,"control one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.control_cb,"control two"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.control_cb,"control three"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.control_cb,"control four"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.control_range_BANG_,"layer",0,100], null)], null)], null)], null);
});
embodier.core.timer_component = (function timer_component(){var seconds_elapsed = reagent.core.atom.call(null,0);return (function (){setTimeout((function (){return cljs.core.swap_BANG_.call(null,seconds_elapsed,cljs.core.inc);
}),1000);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"Seconds Elapsed: ",cljs.core.deref.call(null,seconds_elapsed)], null);
});
});
embodier.core.app = (function app(){return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"#/"], null),"home"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"#/upload"], null),"upload"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"#/layers"], null),"layers"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var iter__4160__auto__ = (function iter__5445(s__5446){return (new cljs.core.LazySeq(null,(function (){var s__5446__$1 = s__5446;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5446__$1);if(temp__4092__auto__)
{var s__5446__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5446__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__5446__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__5448 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__5447 = 0;while(true){
if((i__5447 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__5447);cljs.core.chunk_append.call(null,b__5448,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),x], null)));
{
var G__5449 = (i__5447 + 1);
i__5447 = G__5449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5448),iter__5445.call(null,cljs.core.chunk_rest.call(null,s__5446__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5448),null);
}
} else
{var x = cljs.core.first.call(null,s__5446__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),x], null)),iter__5445.call(null,cljs.core.rest.call(null,s__5446__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,4));
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"layer-view","layer-view",920003859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,embodier.core.routes)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.layer_viewer], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"upload-file","upload-file",2032309562).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,embodier.core.routes)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.file_dropper], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.timer_component], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
var action__4367__auto___5452 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__5450 = params__4368__auto__;var map__5450__$1 = ((cljs.core.seq_QMARK_.call(null,map__5450))?cljs.core.apply.call(null,cljs.core.hash_map,map__5450):map__5450);return cljs.core.reset_BANG_.call(null,embodier.core.routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-view","layer-view",920003859),false,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__5451 = params__4368__auto__;return cljs.core.reset_BANG_.call(null,embodier.core.routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-view","layer-view",920003859),false,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),true], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/upload",action__4367__auto___5452);
var action__4367__auto___5455 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__5453 = params__4368__auto__;var map__5453__$1 = ((cljs.core.seq_QMARK_.call(null,map__5453))?cljs.core.apply.call(null,cljs.core.hash_map,map__5453):map__5453);return cljs.core.reset_BANG_.call(null,embodier.core.routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),false], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__5454 = params__4368__auto__;return cljs.core.reset_BANG_.call(null,embodier.core.routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),false], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/layers",action__4367__auto___5455);
var action__4367__auto___5458 = (function (params__4368__auto__){if(cljs.core.map_QMARK_.call(null,params__4368__auto__))
{var map__5456 = params__4368__auto__;var map__5456__$1 = ((cljs.core.seq_QMARK_.call(null,map__5456))?cljs.core.apply.call(null,cljs.core.hash_map,map__5456):map__5456);return cljs.core.reset_BANG_.call(null,embodier.core.routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-view","layer-view",920003859),false,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),false], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4368__auto__))
{var vec__5457 = params__4368__auto__;return cljs.core.reset_BANG_.call(null,embodier.core.routes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layer-view","layer-view",920003859),false,new cljs.core.Keyword(null,"upload-file","upload-file",2032309562),false], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4367__auto___5458);
embodier.core.history = (new goog.History());
goog.events.listen(embodier.core.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
embodier.core.history.setEnabled(true);
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.core.app], null),document.body);

//# sourceMappingURL=core.js.map