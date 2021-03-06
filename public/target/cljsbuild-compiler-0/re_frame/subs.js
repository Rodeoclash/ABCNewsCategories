// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.utils');
goog.require('re_frame.db');
re_frame.subs.key__GT_fn = (function (){var G__24130 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24130) : cljs.core.atom.call(null,G__24130));
})();
/**
* register a hander function for an id
*/
re_frame.subs.register = (function register(key_v,handler_fn){
if(cljs.core.contains_QMARK_((function (){var G__24132 = re_frame.subs.key__GT_fn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24132) : cljs.core.deref.call(null,G__24132));
})(),key_v)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: overwriting subscription-handler for: ",key_v], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.key__GT_fn,cljs.core.assoc,key_v,handler_fn);
});
/**
* returns a reagent/reaction which observes a part of app-db
*/
re_frame.subs.subscribe = (function subscribe(v){
var key_v = re_frame.utils.first_in_vector(v);
var handler_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__24136 = re_frame.subs.key__GT_fn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24136) : cljs.core.deref.call(null,G__24136));
})(),key_v);
if((handler_fn == null)){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: no subscription handler registered for: \"",key_v,"\".  Returning a nil subscription."], 0));
} else {
var G__24137 = re_frame.db.app_db;
var G__24138 = v;
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__24137,G__24138) : handler_fn.call(null,G__24137,G__24138));
}
});
