// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (function (){var G__17349 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17349) : cljs.core.atom.call(null,G__17349));
})();
}
reagent.ratom.running = (function running(){
var G__17351 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17351) : cljs.core.deref.call(null,G__17351));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_17353 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17353;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj17355 = {};
return obj17355;
})();


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
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17356 = this$__$1;
return goog.getUid(G__17356);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17357 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17357) : f.call(null,G__17357));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17358 = self__.state;
var G__17359 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17358,G__17359) : f.call(null,G__17358,G__17359));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17360 = self__.state;
var G__17361 = x;
var G__17362 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17360,G__17361,G__17362) : f.call(null,G__17360,G__17361,G__17362));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__17363_17367 = key;
var G__17364_17368 = this$__$1;
var G__17365_17369 = oldval;
var G__17366_17370 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17363_17367,G__17364_17368,G__17365_17369,G__17366_17370) : f.call(null,G__17363_17367,G__17364_17368,G__17365_17369,G__17366_17370));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__17374__delegate = function (x,p__17371){
var map__17373 = p__17371;
var map__17373__$1 = ((cljs.core.seq_QMARK_(map__17373))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17373):map__17373);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17373__$1,cljs.core.constant$keyword$8);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17373__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__17374 = function (x,var_args){
var p__17371 = null;
if (arguments.length > 1) {
var G__17375__i = 0, G__17375__a = new Array(arguments.length -  1);
while (G__17375__i < G__17375__a.length) {G__17375__a[G__17375__i] = arguments[G__17375__i + 1]; ++G__17375__i;}
  p__17371 = new cljs.core.IndexedSeq(G__17375__a,0);
} 
return G__17374__delegate.call(this,x,p__17371);};
G__17374.cljs$lang$maxFixedArity = 1;
G__17374.cljs$lang$applyTo = (function (arglist__17376){
var x = cljs.core.first(arglist__17376);
var p__17371 = cljs.core.rest(arglist__17376);
return G__17374__delegate(x,p__17371);
});
G__17374.cljs$core$IFn$_invoke$arity$variadic = G__17374__delegate;
return G__17374;
})()
;
atom = function(x,var_args){
var p__17371 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__17377 = null;
if (arguments.length > 1) {
var G__17378__i = 0, G__17378__a = new Array(arguments.length -  1);
while (G__17378__i < G__17378__a.length) {G__17378__a[G__17378__i] = arguments[G__17378__i + 1]; ++G__17378__i;}
G__17377 = new cljs.core.IndexedSeq(G__17378__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__17377);
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

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__17385 = self__.ratom;
if(G__17385){
var bit__4487__auto__ = (G__17385.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4487__auto__) || (G__17385.cljs$core$IDeref$)){
return true;
} else {
if((!G__17385.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17385);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17385);
}
})())?(function (){var G__17386 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17389 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17389) : cljs.core.deref.call(null,G__17389));
})(),self__.path);
});})(this$))
;
var G__17387 = cljs.core.constant$keyword$62;
var G__17388 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__17386,G__17387,this$){
return (function (p1__17380_SHARP_,p2__17379_SHARP_){
var G__17390 = self__.ratom;
var G__17391 = p2__17379_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17390,G__17391) : cljs.core.reset_BANG_.call(null,G__17390,G__17391));
});})(G__17386,G__17387,this$))
:((function (G__17386,G__17387,this$){
return (function (p1__17382_SHARP_,p2__17381_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__17381_SHARP_);
});})(G__17386,G__17387,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__17386,G__17387,G__17388) : reagent.ratom.make_reaction.call(null,G__17386,G__17387,G__17388));
})():(function (){var G__17392 = ((function (this$){
return (function (){
var G__17395 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__17395) : self__.ratom.call(null,G__17395));
});})(this$))
;
var G__17393 = cljs.core.constant$keyword$62;
var G__17394 = ((function (G__17392,G__17393,this$){
return (function (p1__17384_SHARP_,p2__17383_SHARP_){
var G__17396 = self__.path;
var G__17397 = p2__17383_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__17396,G__17397) : self__.ratom.call(null,G__17396,G__17397));
});})(G__17392,G__17393,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__17392,G__17393,G__17394) : reagent.ratom.make_reaction.call(null,G__17392,G__17393,G__17394));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_17398 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17398;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if((function (){var G__17400 = path;
if(G__17400){
var bit__4487__auto__ = (G__17400.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4487__auto__) || (G__17400.cljs$core$IDeref$)){
return true;
} else {
if((!G__17400.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17400);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17400);
}
})()){


return (new reagent.ratom.RCursor(path,src,null));
} else {

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj17402 = {};
return obj17402;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__17406 = x__4450__auto__;
return goog.typeOf(G__17406);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj17408 = {};
return obj17408;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (reagent.ratom.run[(function (){var G__17412 = x__4450__auto__;
return goog.typeOf(G__17412);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (reagent.ratom.run["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj17414 = {};
return obj17414;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3794__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (reagent.ratom._update_watching[(function (){var G__17418 = x__4450__auto__;
return goog.typeOf(G__17418);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3794__auto__ = k;
if(and__3794__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3794__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4450__auto__ = (((k == null))?null:k);
return (function (){var or__3806__auto__ = (reagent.ratom._handle_change[(function (){var G__17422 = x__4450__auto__;
return goog.typeOf(G__17422);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function _peek_at(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (reagent.ratom._peek_at[(function (){var G__17426 = x__4450__auto__;
return goog.typeOf(G__17426);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
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
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3794__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3794__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3794__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3806__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__17427_17453 = cljs.core.seq(derefed);
var chunk__17428_17454 = null;
var count__17429_17455 = (0);
var i__17430_17456 = (0);
while(true){
if((i__17430_17456 < count__17429_17455)){
var w_17457 = chunk__17428_17454.cljs$core$IIndexed$_nth$arity$2(null,i__17430_17456);
if(cljs.core.contains_QMARK_(self__.watching,w_17457)){
} else {
cljs.core.add_watch(w_17457,this$__$1,reagent.ratom._handle_change);
}

var G__17458 = seq__17427_17453;
var G__17459 = chunk__17428_17454;
var G__17460 = count__17429_17455;
var G__17461 = (i__17430_17456 + (1));
seq__17427_17453 = G__17458;
chunk__17428_17454 = G__17459;
count__17429_17455 = G__17460;
i__17430_17456 = G__17461;
continue;
} else {
var temp__4126__auto___17462 = cljs.core.seq(seq__17427_17453);
if(temp__4126__auto___17462){
var seq__17427_17463__$1 = temp__4126__auto___17462;
if(cljs.core.chunked_seq_QMARK_(seq__17427_17463__$1)){
var c__4593__auto___17464 = cljs.core.chunk_first(seq__17427_17463__$1);
var G__17465 = cljs.core.chunk_rest(seq__17427_17463__$1);
var G__17466 = c__4593__auto___17464;
var G__17467 = cljs.core.count(c__4593__auto___17464);
var G__17468 = (0);
seq__17427_17453 = G__17465;
chunk__17428_17454 = G__17466;
count__17429_17455 = G__17467;
i__17430_17456 = G__17468;
continue;
} else {
var w_17469 = cljs.core.first(seq__17427_17463__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_17469)){
} else {
cljs.core.add_watch(w_17469,this$__$1,reagent.ratom._handle_change);
}

var G__17470 = cljs.core.next(seq__17427_17463__$1);
var G__17471 = null;
var G__17472 = (0);
var G__17473 = (0);
seq__17427_17453 = G__17470;
chunk__17428_17454 = G__17471;
count__17429_17455 = G__17472;
i__17430_17456 = G__17473;
continue;
}
} else {
}
}
break;
}

var seq__17431_17474 = cljs.core.seq(self__.watching);
var chunk__17432_17475 = null;
var count__17433_17476 = (0);
var i__17434_17477 = (0);
while(true){
if((i__17434_17477 < count__17433_17476)){
var w_17478 = chunk__17432_17475.cljs$core$IIndexed$_nth$arity$2(null,i__17434_17477);
if(cljs.core.contains_QMARK_(derefed,w_17478)){
} else {
cljs.core.remove_watch(w_17478,this$__$1);
}

var G__17479 = seq__17431_17474;
var G__17480 = chunk__17432_17475;
var G__17481 = count__17433_17476;
var G__17482 = (i__17434_17477 + (1));
seq__17431_17474 = G__17479;
chunk__17432_17475 = G__17480;
count__17433_17476 = G__17481;
i__17434_17477 = G__17482;
continue;
} else {
var temp__4126__auto___17483 = cljs.core.seq(seq__17431_17474);
if(temp__4126__auto___17483){
var seq__17431_17484__$1 = temp__4126__auto___17483;
if(cljs.core.chunked_seq_QMARK_(seq__17431_17484__$1)){
var c__4593__auto___17485 = cljs.core.chunk_first(seq__17431_17484__$1);
var G__17486 = cljs.core.chunk_rest(seq__17431_17484__$1);
var G__17487 = c__4593__auto___17485;
var G__17488 = cljs.core.count(c__4593__auto___17485);
var G__17489 = (0);
seq__17431_17474 = G__17486;
chunk__17432_17475 = G__17487;
count__17433_17476 = G__17488;
i__17434_17477 = G__17489;
continue;
} else {
var w_17490 = cljs.core.first(seq__17431_17484__$1);
if(cljs.core.contains_QMARK_(derefed,w_17490)){
} else {
cljs.core.remove_watch(w_17490,this$__$1);
}

var G__17491 = cljs.core.next(seq__17431_17484__$1);
var G__17492 = null;
var G__17493 = (0);
var G__17494 = (0);
seq__17431_17474 = G__17491;
chunk__17432_17475 = G__17492;
count__17433_17476 = G__17493;
i__17434_17477 = G__17494;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_17435 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17435;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17436 = this$__$1;
return goog.getUid(G__17436);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__17437_17495 = cljs.core.seq(self__.watching);
var chunk__17438_17496 = null;
var count__17439_17497 = (0);
var i__17440_17498 = (0);
while(true){
if((i__17440_17498 < count__17439_17497)){
var w_17499 = chunk__17438_17496.cljs$core$IIndexed$_nth$arity$2(null,i__17440_17498);
cljs.core.remove_watch(w_17499,this$__$1);

var G__17500 = seq__17437_17495;
var G__17501 = chunk__17438_17496;
var G__17502 = count__17439_17497;
var G__17503 = (i__17440_17498 + (1));
seq__17437_17495 = G__17500;
chunk__17438_17496 = G__17501;
count__17439_17497 = G__17502;
i__17440_17498 = G__17503;
continue;
} else {
var temp__4126__auto___17504 = cljs.core.seq(seq__17437_17495);
if(temp__4126__auto___17504){
var seq__17437_17505__$1 = temp__4126__auto___17504;
if(cljs.core.chunked_seq_QMARK_(seq__17437_17505__$1)){
var c__4593__auto___17506 = cljs.core.chunk_first(seq__17437_17505__$1);
var G__17507 = cljs.core.chunk_rest(seq__17437_17505__$1);
var G__17508 = c__4593__auto___17506;
var G__17509 = cljs.core.count(c__4593__auto___17506);
var G__17510 = (0);
seq__17437_17495 = G__17507;
chunk__17438_17496 = G__17508;
count__17439_17497 = G__17509;
i__17440_17498 = G__17510;
continue;
} else {
var w_17511 = cljs.core.first(seq__17437_17505__$1);
cljs.core.remove_watch(w_17511,this$__$1);

var G__17512 = cljs.core.next(seq__17437_17505__$1);
var G__17513 = null;
var G__17514 = (0);
var G__17515 = (0);
seq__17437_17495 = G__17512;
chunk__17438_17496 = G__17513;
count__17439_17497 = G__17514;
i__17440_17498 = G__17515;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

var G__17441_17516 = oldval;
var G__17442_17517 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__17441_17516,G__17442_17517) : self__.on_set.call(null,G__17441_17516,G__17442_17517));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17443 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17443) : f__$1.call(null,G__17443));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17444 = reagent.ratom._peek_at(a__$1);
var G__17445 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__17444,G__17445) : f__$1.call(null,G__17444,G__17445));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17446 = reagent.ratom._peek_at(a__$1);
var G__17447 = x;
var G__17448 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__17446,G__17447,G__17448) : f__$1.call(null,G__17446,G__17447,G__17448));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
var G__17449_17518 = key;
var G__17450_17519 = this$__$1;
var G__17451_17520 = oldval;
var G__17452_17521 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__17449_17518,G__17450_17519,G__17451_17520,G__17452_17521) : f__$1.call(null,G__17449_17518,G__17450_17519,G__17451_17520,G__17452_17521));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__3806__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_17522 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_17522 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_17522,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__17523){
var map__17525 = p__17523;
var map__17525__$1 = ((cljs.core.seq_QMARK_(map__17525))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17525):map__17525);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17525__$1,cljs.core.constant$keyword$63);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17525__$1,cljs.core.constant$keyword$64);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17525__$1,cljs.core.constant$keyword$62);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17525__$1,cljs.core.constant$keyword$65);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__17523 = null;
if (arguments.length > 1) {
var G__17526__i = 0, G__17526__a = new Array(arguments.length -  1);
while (G__17526__i < G__17526__a.length) {G__17526__a[G__17526__i] = arguments[G__17526__i + 1]; ++G__17526__i;}
  p__17523 = new cljs.core.IndexedSeq(G__17526__a,0);
} 
return make_reaction__delegate.call(this,f,p__17523);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17527){
var f = cljs.core.first(arglist__17527);
var p__17523 = cljs.core.rest(arglist__17527);
return make_reaction__delegate(f,p__17523);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__17528_17539 = key;
var G__17529_17540 = this$__$1;
var G__17530_17541 = oldval;
var G__17531_17542 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17528_17539,G__17529_17540,G__17530_17541,G__17531_17542) : f.call(null,G__17528_17539,G__17529_17540,G__17530_17541,G__17531_17542));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17532 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17532) : f.call(null,G__17532));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17533 = self__.state;
var G__17534 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17533,G__17534) : f.call(null,G__17533,G__17534));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17535 = self__.state;
var G__17536 = x;
var G__17537 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17535,G__17536,G__17537) : f.call(null,G__17535,G__17536,G__17537));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

var G__17538_17543 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__17538_17543) : self__.callback.call(null,G__17538_17543));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
