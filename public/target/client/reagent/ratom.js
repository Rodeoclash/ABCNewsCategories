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
reagent.ratom._running = (function (){var G__17345 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17345) : cljs.core.atom.call(null,G__17345));
})();
}
reagent.ratom.running = (function running(){
var G__17347 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17347) : cljs.core.deref.call(null,G__17347));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_17349 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17349;
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

reagent.ratom.IReactiveAtom = (function (){var obj17351 = {};
return obj17351;
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
var G__17352 = this$__$1;
return goog.getUid(G__17352);
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__17353 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17353) : f.call(null,G__17353));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17354 = self__.state;
var G__17355 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17354,G__17355) : f.call(null,G__17354,G__17355));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17356 = self__.state;
var G__17357 = x;
var G__17358 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17356,G__17357,G__17358) : f.call(null,G__17356,G__17357,G__17358));
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
var G__17359_17363 = key;
var G__17360_17364 = this$__$1;
var G__17361_17365 = oldval;
var G__17362_17366 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17359_17363,G__17360_17364,G__17361_17365,G__17362_17366) : f.call(null,G__17359_17363,G__17360_17364,G__17361_17365,G__17362_17366));

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
var G__17370__delegate = function (x,p__17367){
var map__17369 = p__17367;
var map__17369__$1 = ((cljs.core.seq_QMARK_(map__17369))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17369):map__17369);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17369__$1,cljs.core.constant$keyword$8);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17369__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__17370 = function (x,var_args){
var p__17367 = null;
if (arguments.length > 1) {
var G__17371__i = 0, G__17371__a = new Array(arguments.length -  1);
while (G__17371__i < G__17371__a.length) {G__17371__a[G__17371__i] = arguments[G__17371__i + 1]; ++G__17371__i;}
  p__17367 = new cljs.core.IndexedSeq(G__17371__a,0);
} 
return G__17370__delegate.call(this,x,p__17367);};
G__17370.cljs$lang$maxFixedArity = 1;
G__17370.cljs$lang$applyTo = (function (arglist__17372){
var x = cljs.core.first(arglist__17372);
var p__17367 = cljs.core.rest(arglist__17372);
return G__17370__delegate(x,p__17367);
});
G__17370.cljs$core$IFn$_invoke$arity$variadic = G__17370__delegate;
return G__17370;
})()
;
atom = function(x,var_args){
var p__17367 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__17373 = null;
if (arguments.length > 1) {
var G__17374__i = 0, G__17374__a = new Array(arguments.length -  1);
while (G__17374__i < G__17374__a.length) {G__17374__a[G__17374__i] = arguments[G__17374__i + 1]; ++G__17374__i;}
G__17373 = new cljs.core.IndexedSeq(G__17374__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__17373);
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
return self__.reaction = (((function (){var G__17381 = self__.ratom;
if(G__17381){
var bit__4487__auto__ = (G__17381.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4487__auto__) || (G__17381.cljs$core$IDeref$)){
return true;
} else {
if((!G__17381.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17381);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17381);
}
})())?(function (){var G__17382 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17385 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17385) : cljs.core.deref.call(null,G__17385));
})(),self__.path);
});})(this$))
;
var G__17383 = cljs.core.constant$keyword$62;
var G__17384 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__17382,G__17383,this$){
return (function (p1__17376_SHARP_,p2__17375_SHARP_){
var G__17386 = self__.ratom;
var G__17387 = p2__17375_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17386,G__17387) : cljs.core.reset_BANG_.call(null,G__17386,G__17387));
});})(G__17382,G__17383,this$))
:((function (G__17382,G__17383,this$){
return (function (p1__17378_SHARP_,p2__17377_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__17377_SHARP_);
});})(G__17382,G__17383,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__17382,G__17383,G__17384) : reagent.ratom.make_reaction.call(null,G__17382,G__17383,G__17384));
})():(function (){var G__17388 = ((function (this$){
return (function (){
var G__17391 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__17391) : self__.ratom.call(null,G__17391));
});})(this$))
;
var G__17389 = cljs.core.constant$keyword$62;
var G__17390 = ((function (G__17388,G__17389,this$){
return (function (p1__17380_SHARP_,p2__17379_SHARP_){
var G__17392 = self__.path;
var G__17393 = p2__17379_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__17392,G__17393) : self__.ratom.call(null,G__17392,G__17393));
});})(G__17388,G__17389,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__17388,G__17389,G__17390) : reagent.ratom.make_reaction.call(null,G__17388,G__17389,G__17390));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_17394 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17394;
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
if((function (){var G__17396 = path;
if(G__17396){
var bit__4487__auto__ = (G__17396.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4487__auto__) || (G__17396.cljs$core$IDeref$)){
return true;
} else {
if((!G__17396.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17396);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17396);
}
})()){


return (new reagent.ratom.RCursor(path,src,null));
} else {

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj17398 = {};
return obj17398;
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
return (function (){var or__3806__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__17402 = x__4450__auto__;
return goog.typeOf(G__17402);
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


reagent.ratom.IRunnable = (function (){var obj17404 = {};
return obj17404;
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
return (function (){var or__3806__auto__ = (reagent.ratom.run[(function (){var G__17408 = x__4450__auto__;
return goog.typeOf(G__17408);
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


reagent.ratom.IComputedImpl = (function (){var obj17410 = {};
return obj17410;
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
return (function (){var or__3806__auto__ = (reagent.ratom._update_watching[(function (){var G__17414 = x__4450__auto__;
return goog.typeOf(G__17414);
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
return (function (){var or__3806__auto__ = (reagent.ratom._handle_change[(function (){var G__17418 = x__4450__auto__;
return goog.typeOf(G__17418);
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
return (function (){var or__3806__auto__ = (reagent.ratom._peek_at[(function (){var G__17422 = x__4450__auto__;
return goog.typeOf(G__17422);
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
var seq__17423_17449 = cljs.core.seq(derefed);
var chunk__17424_17450 = null;
var count__17425_17451 = (0);
var i__17426_17452 = (0);
while(true){
if((i__17426_17452 < count__17425_17451)){
var w_17453 = chunk__17424_17450.cljs$core$IIndexed$_nth$arity$2(null,i__17426_17452);
if(cljs.core.contains_QMARK_(self__.watching,w_17453)){
} else {
cljs.core.add_watch(w_17453,this$__$1,reagent.ratom._handle_change);
}

var G__17454 = seq__17423_17449;
var G__17455 = chunk__17424_17450;
var G__17456 = count__17425_17451;
var G__17457 = (i__17426_17452 + (1));
seq__17423_17449 = G__17454;
chunk__17424_17450 = G__17455;
count__17425_17451 = G__17456;
i__17426_17452 = G__17457;
continue;
} else {
var temp__4126__auto___17458 = cljs.core.seq(seq__17423_17449);
if(temp__4126__auto___17458){
var seq__17423_17459__$1 = temp__4126__auto___17458;
if(cljs.core.chunked_seq_QMARK_(seq__17423_17459__$1)){
var c__4593__auto___17460 = cljs.core.chunk_first(seq__17423_17459__$1);
var G__17461 = cljs.core.chunk_rest(seq__17423_17459__$1);
var G__17462 = c__4593__auto___17460;
var G__17463 = cljs.core.count(c__4593__auto___17460);
var G__17464 = (0);
seq__17423_17449 = G__17461;
chunk__17424_17450 = G__17462;
count__17425_17451 = G__17463;
i__17426_17452 = G__17464;
continue;
} else {
var w_17465 = cljs.core.first(seq__17423_17459__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_17465)){
} else {
cljs.core.add_watch(w_17465,this$__$1,reagent.ratom._handle_change);
}

var G__17466 = cljs.core.next(seq__17423_17459__$1);
var G__17467 = null;
var G__17468 = (0);
var G__17469 = (0);
seq__17423_17449 = G__17466;
chunk__17424_17450 = G__17467;
count__17425_17451 = G__17468;
i__17426_17452 = G__17469;
continue;
}
} else {
}
}
break;
}

var seq__17427_17470 = cljs.core.seq(self__.watching);
var chunk__17428_17471 = null;
var count__17429_17472 = (0);
var i__17430_17473 = (0);
while(true){
if((i__17430_17473 < count__17429_17472)){
var w_17474 = chunk__17428_17471.cljs$core$IIndexed$_nth$arity$2(null,i__17430_17473);
if(cljs.core.contains_QMARK_(derefed,w_17474)){
} else {
cljs.core.remove_watch(w_17474,this$__$1);
}

var G__17475 = seq__17427_17470;
var G__17476 = chunk__17428_17471;
var G__17477 = count__17429_17472;
var G__17478 = (i__17430_17473 + (1));
seq__17427_17470 = G__17475;
chunk__17428_17471 = G__17476;
count__17429_17472 = G__17477;
i__17430_17473 = G__17478;
continue;
} else {
var temp__4126__auto___17479 = cljs.core.seq(seq__17427_17470);
if(temp__4126__auto___17479){
var seq__17427_17480__$1 = temp__4126__auto___17479;
if(cljs.core.chunked_seq_QMARK_(seq__17427_17480__$1)){
var c__4593__auto___17481 = cljs.core.chunk_first(seq__17427_17480__$1);
var G__17482 = cljs.core.chunk_rest(seq__17427_17480__$1);
var G__17483 = c__4593__auto___17481;
var G__17484 = cljs.core.count(c__4593__auto___17481);
var G__17485 = (0);
seq__17427_17470 = G__17482;
chunk__17428_17471 = G__17483;
count__17429_17472 = G__17484;
i__17430_17473 = G__17485;
continue;
} else {
var w_17486 = cljs.core.first(seq__17427_17480__$1);
if(cljs.core.contains_QMARK_(derefed,w_17486)){
} else {
cljs.core.remove_watch(w_17486,this$__$1);
}

var G__17487 = cljs.core.next(seq__17427_17480__$1);
var G__17488 = null;
var G__17489 = (0);
var G__17490 = (0);
seq__17427_17470 = G__17487;
chunk__17428_17471 = G__17488;
count__17429_17472 = G__17489;
i__17430_17473 = G__17490;
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
var _STAR_ratom_context_STAR_17431 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17431;
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
var G__17432 = this$__$1;
return goog.getUid(G__17432);
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
var seq__17433_17491 = cljs.core.seq(self__.watching);
var chunk__17434_17492 = null;
var count__17435_17493 = (0);
var i__17436_17494 = (0);
while(true){
if((i__17436_17494 < count__17435_17493)){
var w_17495 = chunk__17434_17492.cljs$core$IIndexed$_nth$arity$2(null,i__17436_17494);
cljs.core.remove_watch(w_17495,this$__$1);

var G__17496 = seq__17433_17491;
var G__17497 = chunk__17434_17492;
var G__17498 = count__17435_17493;
var G__17499 = (i__17436_17494 + (1));
seq__17433_17491 = G__17496;
chunk__17434_17492 = G__17497;
count__17435_17493 = G__17498;
i__17436_17494 = G__17499;
continue;
} else {
var temp__4126__auto___17500 = cljs.core.seq(seq__17433_17491);
if(temp__4126__auto___17500){
var seq__17433_17501__$1 = temp__4126__auto___17500;
if(cljs.core.chunked_seq_QMARK_(seq__17433_17501__$1)){
var c__4593__auto___17502 = cljs.core.chunk_first(seq__17433_17501__$1);
var G__17503 = cljs.core.chunk_rest(seq__17433_17501__$1);
var G__17504 = c__4593__auto___17502;
var G__17505 = cljs.core.count(c__4593__auto___17502);
var G__17506 = (0);
seq__17433_17491 = G__17503;
chunk__17434_17492 = G__17504;
count__17435_17493 = G__17505;
i__17436_17494 = G__17506;
continue;
} else {
var w_17507 = cljs.core.first(seq__17433_17501__$1);
cljs.core.remove_watch(w_17507,this$__$1);

var G__17508 = cljs.core.next(seq__17433_17501__$1);
var G__17509 = null;
var G__17510 = (0);
var G__17511 = (0);
seq__17433_17491 = G__17508;
chunk__17434_17492 = G__17509;
count__17435_17493 = G__17510;
i__17436_17494 = G__17511;
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

var G__17437_17512 = oldval;
var G__17438_17513 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__17437_17512,G__17438_17513) : self__.on_set.call(null,G__17437_17512,G__17438_17513));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17439 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17439) : f__$1.call(null,G__17439));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17440 = reagent.ratom._peek_at(a__$1);
var G__17441 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__17440,G__17441) : f__$1.call(null,G__17440,G__17441));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17442 = reagent.ratom._peek_at(a__$1);
var G__17443 = x;
var G__17444 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__17442,G__17443,G__17444) : f__$1.call(null,G__17442,G__17443,G__17444));
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
var G__17445_17514 = key;
var G__17446_17515 = this$__$1;
var G__17447_17516 = oldval;
var G__17448_17517 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__17445_17514,G__17446_17515,G__17447_17516,G__17448_17517) : f__$1.call(null,G__17445_17514,G__17446_17515,G__17447_17516,G__17448_17517));

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
var oldstate_17518 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_17518 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_17518,self__.state);
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
var make_reaction__delegate = function (f,p__17519){
var map__17521 = p__17519;
var map__17521__$1 = ((cljs.core.seq_QMARK_(map__17521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17521):map__17521);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17521__$1,cljs.core.constant$keyword$63);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17521__$1,cljs.core.constant$keyword$64);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17521__$1,cljs.core.constant$keyword$62);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17521__$1,cljs.core.constant$keyword$65);
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
var p__17519 = null;
if (arguments.length > 1) {
var G__17522__i = 0, G__17522__a = new Array(arguments.length -  1);
while (G__17522__i < G__17522__a.length) {G__17522__a[G__17522__i] = arguments[G__17522__i + 1]; ++G__17522__i;}
  p__17519 = new cljs.core.IndexedSeq(G__17522__a,0);
} 
return make_reaction__delegate.call(this,f,p__17519);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17523){
var f = cljs.core.first(arglist__17523);
var p__17519 = cljs.core.rest(arglist__17523);
return make_reaction__delegate(f,p__17519);
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
var G__17524_17535 = key;
var G__17525_17536 = this$__$1;
var G__17526_17537 = oldval;
var G__17527_17538 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17524_17535,G__17525_17536,G__17526_17537,G__17527_17538) : f.call(null,G__17524_17535,G__17525_17536,G__17526_17537,G__17527_17538));

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
return cljs.core._reset_BANG_(a__$1,(function (){var G__17528 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17528) : f.call(null,G__17528));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17529 = self__.state;
var G__17530 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17529,G__17530) : f.call(null,G__17529,G__17530));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17531 = self__.state;
var G__17532 = x;
var G__17533 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17531,G__17532,G__17533) : f.call(null,G__17531,G__17532,G__17533));
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

var G__17534_17539 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__17534_17539) : self__.callback.call(null,G__17534_17539));

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
