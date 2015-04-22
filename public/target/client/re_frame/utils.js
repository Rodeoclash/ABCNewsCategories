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
var G__27309__i = 0, G__27309__a = new Array(arguments.length -  0);
while (G__27309__i < G__27309__a.length) {G__27309__a[G__27309__i] = arguments[G__27309__i + 0]; ++G__27309__i;}
  args = new cljs.core.IndexedSeq(G__27309__a,0);
} 
return warn__delegate.call(this,args);};
warn.cljs$lang$maxFixedArity = 0;
warn.cljs$lang$applyTo = (function (arglist__27310){
var args = cljs.core.seq(arglist__27310);
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
var G__27311__i = 0, G__27311__a = new Array(arguments.length -  0);
while (G__27311__i < G__27311__a.length) {G__27311__a[G__27311__i] = arguments[G__27311__i + 0]; ++G__27311__i;}
  args = new cljs.core.IndexedSeq(G__27311__a,0);
} 
return dbg__delegate.call(this,args);};
dbg.cljs$lang$maxFixedArity = 0;
dbg.cljs$lang$applyTo = (function (arglist__27312){
var args = cljs.core.seq(arglist__27312);
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
var G__27313__i = 0, G__27313__a = new Array(arguments.length -  0);
while (G__27313__i < G__27313__a.length) {G__27313__a[G__27313__i] = arguments[G__27313__i + 0]; ++G__27313__i;}
  args = new cljs.core.IndexedSeq(G__27313__a,0);
} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__27314){
var args = cljs.core.seq(arglist__27314);
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
var G__27315__i = 0, G__27315__a = new Array(arguments.length -  0);
while (G__27315__i < G__27315__a.length) {G__27315__a[G__27315__i] = arguments[G__27315__i + 0]; ++G__27315__i;}
  args = new cljs.core.IndexedSeq(G__27315__a,0);
} 
return group__delegate.call(this,args);};
group.cljs$lang$maxFixedArity = 0;
group.cljs$lang$applyTo = (function (arglist__27316){
var args = cljs.core.seq(arglist__27316);
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

//# sourceMappingURL=utils.js.map?rel=1429705618872