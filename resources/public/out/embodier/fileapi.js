// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.fileapi');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
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
embodier.fileapi.readFile = (function readFile(file){var raw_str = file.target.result;var seq__5833 = cljs.core.seq.call(null,embodier.fileapi.layered.call(null,embodier.fileapi.filterG1.call(null,clojure.string.split_lines.call(null,raw_str))));var chunk__5834 = null;var count__5835 = 0;var i__5836 = 0;while(true){
if((i__5836 < count__5835))
{var ary = cljs.core._nth.call(null,chunk__5834,i__5836);console.log(cljs.core.print_str.call(null,ary));
{
var G__5837 = seq__5833;
var G__5838 = chunk__5834;
var G__5839 = count__5835;
var G__5840 = (i__5836 + 1);
seq__5833 = G__5837;
chunk__5834 = G__5838;
count__5835 = G__5839;
i__5836 = G__5840;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5833);if(temp__4092__auto__)
{var seq__5833__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5833__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__5833__$1);{
var G__5841 = cljs.core.chunk_rest.call(null,seq__5833__$1);
var G__5842 = c__4191__auto__;
var G__5843 = cljs.core.count.call(null,c__4191__auto__);
var G__5844 = 0;
seq__5833 = G__5841;
chunk__5834 = G__5842;
count__5835 = G__5843;
i__5836 = G__5844;
continue;
}
} else
{var ary = cljs.core.first.call(null,seq__5833__$1);console.log(cljs.core.print_str.call(null,ary));
{
var G__5845 = cljs.core.next.call(null,seq__5833__$1);
var G__5846 = null;
var G__5847 = 0;
var G__5848 = 0;
seq__5833 = G__5845;
chunk__5834 = G__5846;
count__5835 = G__5847;
i__5836 = G__5848;
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
embodier.fileapi.setOnLoad = (function setOnLoad(f){var reader = (new FileReader());reader.onload = embodier.fileapi.readFile;
return reader.readAsText(f);
});

//# sourceMappingURL=fileapi.js.map