// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props((c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children((c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = (function (){var G__17551 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17551) : cljs.core.atom.call(null,G__17551));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17552 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17552) : cljs.core.deref.call(null,G__17552));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__17553 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17553) : f.call(null,G__17553));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count(s) < (2))){
return clojure.string.upper_case(s);
} else {
return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__17556 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17556,(0),null);
var parts = cljs.core.nthnext(vec__17556,(1));
if(cljs.core.truth_((function (){var G__17557 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__17557) : reagent.impl.util.dont_camel_case.call(null,G__17557));
})())){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__17559__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3806__auto___17560 = self__.p;
if(cljs.core.truth_(or__3806__auto___17560)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__17559 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__17561__i = 0, G__17561__a = new Array(arguments.length -  1);
while (G__17561__i < G__17561__a.length) {G__17561__a[G__17561__i] = arguments[G__17561__i + 1]; ++G__17561__i;}
  a = new cljs.core.IndexedSeq(G__17561__a,0);
} 
return G__17559__delegate.call(this,self__,a);};
G__17559.cljs$lang$maxFixedArity = 1;
G__17559.cljs$lang$applyTo = (function (arglist__17562){
var self__ = cljs.core.first(arglist__17562);
var a = cljs.core.rest(arglist__17562);
return G__17559__delegate(self__,a);
});
G__17559.cljs$core$IFn$_invoke$arity$variadic = G__17559__delegate;
return G__17559;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args17558){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17558)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__17563__delegate = function (a){
var _ = this;
var or__3806__auto___17564 = self__.p;
if(cljs.core.truth_(or__3806__auto___17564)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__17563 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__17565__i = 0, G__17565__a = new Array(arguments.length -  0);
while (G__17565__i < G__17565__a.length) {G__17565__a[G__17565__i] = arguments[G__17565__i + 0]; ++G__17565__i;}
  a = new cljs.core.IndexedSeq(G__17565__a,0);
} 
return G__17563__delegate.call(this,a);};
G__17563.cljs$lang$maxFixedArity = 0;
G__17563.cljs$lang$applyTo = (function (arglist__17566){
var a = cljs.core.seq(arglist__17566);
return G__17563__delegate(a);
});
G__17563.cljs$core$IFn$_invoke$arity$variadic = G__17563__delegate;
return G__17563;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$60.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$60,class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = cljs.core.constant$keyword$61.cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2,cljs.core.constant$keyword$61,style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {

return reagent.impl.util.merge_style(p1,reagent.impl.util.merge_class(p1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0))));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = (function (){var G__17567 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17567) : cljs.core.atom.call(null,G__17567));
})();
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e17569){if((e17569 instanceof Object)){
var e = e17569;

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e17569;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_17574 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_17574){
return (function (){
var _STAR_always_update_STAR_17575 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17575;
}});})(_STAR_always_update_STAR_17574))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17574;
}}catch (e17573){if((e17573 instanceof Object)){
var e = e17573;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e17573;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component(comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__17581_17586 = cljs.core.seq(cljs.core.vals((function (){var G__17585 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17585) : cljs.core.deref.call(null,G__17585));
})()));
var chunk__17582_17587 = null;
var count__17583_17588 = (0);
var i__17584_17589 = (0);
while(true){
if((i__17584_17589 < count__17583_17588)){
var v_17590 = chunk__17582_17587.cljs$core$IIndexed$_nth$arity$2(null,i__17584_17589);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_17590);

var G__17591 = seq__17581_17586;
var G__17592 = chunk__17582_17587;
var G__17593 = count__17583_17588;
var G__17594 = (i__17584_17589 + (1));
seq__17581_17586 = G__17591;
chunk__17582_17587 = G__17592;
count__17583_17588 = G__17593;
i__17584_17589 = G__17594;
continue;
} else {
var temp__4126__auto___17595 = cljs.core.seq(seq__17581_17586);
if(temp__4126__auto___17595){
var seq__17581_17596__$1 = temp__4126__auto___17595;
if(cljs.core.chunked_seq_QMARK_(seq__17581_17596__$1)){
var c__4593__auto___17597 = cljs.core.chunk_first(seq__17581_17596__$1);
var G__17598 = cljs.core.chunk_rest(seq__17581_17596__$1);
var G__17599 = c__4593__auto___17597;
var G__17600 = cljs.core.count(c__4593__auto___17597);
var G__17601 = (0);
seq__17581_17586 = G__17598;
chunk__17582_17587 = G__17599;
count__17583_17588 = G__17600;
i__17584_17589 = G__17601;
continue;
} else {
var v_17602 = cljs.core.first(seq__17581_17596__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_17602);

var G__17603 = cljs.core.next(seq__17581_17596__$1);
var G__17604 = null;
var G__17605 = (0);
var G__17606 = (0);
seq__17581_17586 = G__17603;
chunk__17582_17587 = G__17604;
count__17583_17588 = G__17605;
i__17584_17589 = G__17606;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
