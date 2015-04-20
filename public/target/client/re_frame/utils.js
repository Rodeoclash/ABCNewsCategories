// Compiled by ClojureScript 0.0-2816 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
re_frame.utils.warn = (function() { 
var warn__delegate = function (args){
return console.warn(cljs.core.apply.call(null,cljs.core.str,args));
};
var warn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24804__i = 0, G__24804__a = new Array(arguments.length -  0);
while (G__24804__i < G__24804__a.length) {G__24804__a[G__24804__i] = arguments[G__24804__i + 0]; ++G__24804__i;}
  args = new cljs.core.IndexedSeq(G__24804__a,0);
} 
return warn__delegate.call(this,args);};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__24805){
var args = cljs.core.seq(arglist__24805);
return warn__delegate(args);
});
warn.cljs$core$IFn$_invoke$arity$variadic = warn__delegate;
return warn;
})()
;
/**
* @param {...*} var_args
*/
re_frame.utils.dbg = (function() { 
var dbg__delegate = function (args){
return console.debug(cljs.core.apply.call(null,cljs.core.str,args));
};
var dbg = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24806__i = 0, G__24806__a = new Array(arguments.length -  0);
while (G__24806__i < G__24806__a.length) {G__24806__a[G__24806__i] = arguments[G__24806__i + 0]; ++G__24806__i;}
  args = new cljs.core.IndexedSeq(G__24806__a,0);
} 
return dbg__delegate.call(this,args);};
dbg.cljs$lang$maxFixedArity = 0;
dbg.cljs$lang$applyTo = (function (arglist__24807){
var args = cljs.core.seq(arglist__24807);
return dbg__delegate(args);
});
dbg.cljs$core$IFn$_invoke$arity$variadic = dbg__delegate;
return dbg;
})()
;
/**
* @param {...*} var_args
*/
re_frame.utils.log = (function() { 
var log__delegate = function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
};
var log = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24808__i = 0, G__24808__a = new Array(arguments.length -  0);
while (G__24808__i < G__24808__a.length) {G__24808__a[G__24808__i] = arguments[G__24808__i + 0]; ++G__24808__i;}
  args = new cljs.core.IndexedSeq(G__24808__a,0);
} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__24809){
var args = cljs.core.seq(arglist__24809);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* @param {...*} var_args
*/
re_frame.utils.group = (function() { 
var group__delegate = function (args){
return console.group(cljs.core.apply.call(null,cljs.core.str,args));
};
var group = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24810__i = 0, G__24810__a = new Array(arguments.length -  0);
while (G__24810__i < G__24810__a.length) {G__24810__a[G__24810__i] = arguments[G__24810__i + 0]; ++G__24810__i;}
  args = new cljs.core.IndexedSeq(G__24810__a,0);
} 
return group__delegate.call(this,args);};
group.cljs$lang$maxFixedArity = 0;
group.cljs$lang$applyTo = (function (arglist__24811){
var args = cljs.core.seq(arglist__24811);
return group__delegate(args);
});
group.cljs$core$IFn$_invoke$arity$variadic = group__delegate;
return group;
})()
;
re_frame.utils.groupEnd = (function groupEnd(){
return console.groupEnd();
});
re_frame.utils.first_in_vector = (function first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.warn.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1429446761322