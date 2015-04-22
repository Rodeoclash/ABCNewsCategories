// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.utils');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
re_frame.utils.warn = (function() { 
var warn__delegate = function (args){
return console.warn(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
};
var warn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23973__i = 0, G__23973__a = new Array(arguments.length -  0);
while (G__23973__i < G__23973__a.length) {G__23973__a[G__23973__i] = arguments[G__23973__i + 0]; ++G__23973__i;}
  args = new cljs.core.IndexedSeq(G__23973__a,0);
} 
return warn__delegate.call(this,args);};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__23974){
var args = cljs.core.seq(arglist__23974);
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
return console.debug(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
};
var dbg = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23975__i = 0, G__23975__a = new Array(arguments.length -  0);
while (G__23975__i < G__23975__a.length) {G__23975__a[G__23975__i] = arguments[G__23975__i + 0]; ++G__23975__i;}
  args = new cljs.core.IndexedSeq(G__23975__a,0);
} 
return dbg__delegate.call(this,args);};
dbg.cljs$lang$maxFixedArity = 0;
dbg.cljs$lang$applyTo = (function (arglist__23976){
var args = cljs.core.seq(arglist__23976);
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
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
};
var log = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23977__i = 0, G__23977__a = new Array(arguments.length -  0);
while (G__23977__i < G__23977__a.length) {G__23977__a[G__23977__i] = arguments[G__23977__i + 0]; ++G__23977__i;}
  args = new cljs.core.IndexedSeq(G__23977__a,0);
} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__23978){
var args = cljs.core.seq(arglist__23978);
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
return console.group(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
};
var group = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23979__i = 0, G__23979__a = new Array(arguments.length -  0);
while (G__23979__i < G__23979__a.length) {G__23979__a[G__23979__i] = arguments[G__23979__i + 0]; ++G__23979__i;}
  args = new cljs.core.IndexedSeq(G__23979__a,0);
} 
return group__delegate.call(this,args);};
group.cljs$lang$maxFixedArity = 0;
group.cljs$lang$applyTo = (function (arglist__23980){
var args = cljs.core.seq(arglist__23980);
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
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: expected a vector event, but got: ",v], 0));
}
});
