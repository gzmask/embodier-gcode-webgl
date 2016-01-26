// Compiled by ClojureScript 0.0-2173
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_5973 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_5973;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
}),null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",1544652043,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))))].join('')));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__5977__delegate = function (x,p__5974){var map__5976 = p__5974;var map__5976__$1 = ((cljs.core.seq_QMARK_.call(null,map__5976))?cljs.core.apply.call(null,cljs.core.hash_map,map__5976):map__5976);var validator = cljs.core.get.call(null,map__5976__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__5976__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__5977 = function (x,var_args){
var p__5974 = null;if (arguments.length > 1) {
  p__5974 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__5977__delegate.call(this,x,p__5974);};
G__5977.cljs$lang$maxFixedArity = 1;
G__5977.cljs$lang$applyTo = (function (arglist__5978){
var x = cljs.core.first(arglist__5978);
var p__5974 = cljs.core.rest(arglist__5978);
return G__5977__delegate(x,p__5974);
});
G__5977.cljs$core$IFn$_invoke$arity$variadic = G__5977__delegate;
return G__5977;
})()
;
atom = function(x,var_args){
var p__5974 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj5980 = {};return obj5980;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj5982 = {};return obj5982;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (reagent.ratom.run[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (reagent.ratom.run["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj5984 = {};return obj5984;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3431__auto__ = k;if(and__3431__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3431__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4070__auto__ = (((k == null))?null:k);return (function (){var or__3443__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3443__auto__ = self__.auto_run;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__4847__auto___5997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(177),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__4847__auto___5997))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3443__auto__ = self__.auto_run;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3431__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3431__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3431__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3443__auto__ = self__.auto_run;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__5985_5998 = cljs.core.seq.call(null,derefed);var chunk__5986_5999 = null;var count__5987_6000 = 0;var i__5988_6001 = 0;while(true){
if((i__5988_6001 < count__5987_6000))
{var w_6002 = cljs.core._nth.call(null,chunk__5986_5999,i__5988_6001);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6002))
{} else
{cljs.core.add_watch.call(null,w_6002,this$__$1,reagent.ratom._handle_change);
}
{
var G__6003 = seq__5985_5998;
var G__6004 = chunk__5986_5999;
var G__6005 = count__5987_6000;
var G__6006 = (i__5988_6001 + 1);
seq__5985_5998 = G__6003;
chunk__5986_5999 = G__6004;
count__5987_6000 = G__6005;
i__5988_6001 = G__6006;
continue;
}
} else
{var temp__4092__auto___6007 = cljs.core.seq.call(null,seq__5985_5998);if(temp__4092__auto___6007)
{var seq__5985_6008__$1 = temp__4092__auto___6007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5985_6008__$1))
{var c__4191__auto___6009 = cljs.core.chunk_first.call(null,seq__5985_6008__$1);{
var G__6010 = cljs.core.chunk_rest.call(null,seq__5985_6008__$1);
var G__6011 = c__4191__auto___6009;
var G__6012 = cljs.core.count.call(null,c__4191__auto___6009);
var G__6013 = 0;
seq__5985_5998 = G__6010;
chunk__5986_5999 = G__6011;
count__5987_6000 = G__6012;
i__5988_6001 = G__6013;
continue;
}
} else
{var w_6014 = cljs.core.first.call(null,seq__5985_6008__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6014))
{} else
{cljs.core.add_watch.call(null,w_6014,this$__$1,reagent.ratom._handle_change);
}
{
var G__6015 = cljs.core.next.call(null,seq__5985_6008__$1);
var G__6016 = null;
var G__6017 = 0;
var G__6018 = 0;
seq__5985_5998 = G__6015;
chunk__5986_5999 = G__6016;
count__5987_6000 = G__6017;
i__5988_6001 = G__6018;
continue;
}
}
} else
{}
}
break;
}
var seq__5989_6019 = cljs.core.seq.call(null,self__.watching);var chunk__5990_6020 = null;var count__5991_6021 = 0;var i__5992_6022 = 0;while(true){
if((i__5992_6022 < count__5991_6021))
{var w_6023 = cljs.core._nth.call(null,chunk__5990_6020,i__5992_6022);if(cljs.core.contains_QMARK_.call(null,derefed,w_6023))
{} else
{cljs.core.remove_watch.call(null,w_6023,this$__$1);
}
{
var G__6024 = seq__5989_6019;
var G__6025 = chunk__5990_6020;
var G__6026 = count__5991_6021;
var G__6027 = (i__5992_6022 + 1);
seq__5989_6019 = G__6024;
chunk__5990_6020 = G__6025;
count__5991_6021 = G__6026;
i__5992_6022 = G__6027;
continue;
}
} else
{var temp__4092__auto___6028 = cljs.core.seq.call(null,seq__5989_6019);if(temp__4092__auto___6028)
{var seq__5989_6029__$1 = temp__4092__auto___6028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5989_6029__$1))
{var c__4191__auto___6030 = cljs.core.chunk_first.call(null,seq__5989_6029__$1);{
var G__6031 = cljs.core.chunk_rest.call(null,seq__5989_6029__$1);
var G__6032 = c__4191__auto___6030;
var G__6033 = cljs.core.count.call(null,c__4191__auto___6030);
var G__6034 = 0;
seq__5989_6019 = G__6031;
chunk__5990_6020 = G__6032;
count__5991_6021 = G__6033;
i__5992_6022 = G__6034;
continue;
}
} else
{var w_6035 = cljs.core.first.call(null,seq__5989_6029__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_6035))
{} else
{cljs.core.remove_watch.call(null,w_6035,this$__$1);
}
{
var G__6036 = cljs.core.next.call(null,seq__5989_6029__$1);
var G__6037 = null;
var G__6038 = 0;
var G__6039 = 0;
seq__5989_6019 = G__6036;
chunk__5990_6020 = G__6037;
count__5991_6021 = G__6038;
i__5992_6022 = G__6039;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__5993_6040 = cljs.core.seq.call(null,self__.watching);var chunk__5994_6041 = null;var count__5995_6042 = 0;var i__5996_6043 = 0;while(true){
if((i__5996_6043 < count__5995_6042))
{var w_6044 = cljs.core._nth.call(null,chunk__5994_6041,i__5996_6043);cljs.core.remove_watch.call(null,w_6044,this$__$1);
{
var G__6045 = seq__5993_6040;
var G__6046 = chunk__5994_6041;
var G__6047 = count__5995_6042;
var G__6048 = (i__5996_6043 + 1);
seq__5993_6040 = G__6045;
chunk__5994_6041 = G__6046;
count__5995_6042 = G__6047;
i__5996_6043 = G__6048;
continue;
}
} else
{var temp__4092__auto___6049 = cljs.core.seq.call(null,seq__5993_6040);if(temp__4092__auto___6049)
{var seq__5993_6050__$1 = temp__4092__auto___6049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5993_6050__$1))
{var c__4191__auto___6051 = cljs.core.chunk_first.call(null,seq__5993_6050__$1);{
var G__6052 = cljs.core.chunk_rest.call(null,seq__5993_6050__$1);
var G__6053 = c__4191__auto___6051;
var G__6054 = cljs.core.count.call(null,c__4191__auto___6051);
var G__6055 = 0;
seq__5993_6040 = G__6052;
chunk__5994_6041 = G__6053;
count__5995_6042 = G__6054;
i__5996_6043 = G__6055;
continue;
}
} else
{var w_6056 = cljs.core.first.call(null,seq__5993_6050__$1);cljs.core.remove_watch.call(null,w_6056,this$__$1);
{
var G__6057 = cljs.core.next.call(null,seq__5993_6050__$1);
var G__6058 = null;
var G__6059 = 0;
var G__6060 = 0;
seq__5993_6040 = G__6057;
chunk__5994_6041 = G__6058;
count__5995_6042 = G__6059;
i__5996_6043 = G__6060;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__6061){var map__6063 = p__6061;var map__6063__$1 = ((cljs.core.seq_QMARK_.call(null,map__6063))?cljs.core.apply.call(null,cljs.core.hash_map,map__6063):map__6063);var derefed = cljs.core.get.call(null,map__6063__$1,new cljs.core.Keyword(null,"derefed","derefed",2569894915));var on_dispose = cljs.core.get.call(null,map__6063__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__6063__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__6063__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__6061 = null;if (arguments.length > 1) {
  p__6061 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__6061);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__6064){
var f = cljs.core.first(arglist__6064);
var p__6061 = cljs.core.rest(arglist__6064);
return make_reaction__delegate(f,p__6061);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map