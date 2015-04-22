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
var mem = (function (){var G__17547 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17547) : cljs.core.atom.call(null,G__17547));
})();
return ((function (mem){
return (function (arg){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__17548 = mem;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17548) : cljs.core.deref.call(null,G__17548));
})(),arg);
if(!((v == null))){
return v;
} else {
var ret = (function (){var G__17549 = arg;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17549) : f.call(null,G__17549));
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
var vec__17552 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17552,(0),null);
var parts = cljs.core.nthnext(vec__17552,(1));
if(cljs.core.truth_((function (){var G__17553 = start;
return (reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(G__17553) : reagent.impl.util.dont_camel_case.call(null,G__17553));
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
var G__17555__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__3806__auto___17556 = self__.p;
if(cljs.core.truth_(or__3806__auto___17556)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__17555 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__17557__i = 0, G__17557__a = new Array(arguments.length -  1);
while (G__17557__i < G__17557__a.length) {G__17557__a[G__17557__i] = arguments[G__17557__i + 1]; ++G__17557__i;}
  a = new cljs.core.IndexedSeq(G__17557__a,0);
} 
return G__17555__delegate.call(this,self__,a);};
G__17555.cljs$lang$maxFixedArity = 1;
G__17555.cljs$lang$applyTo = (function (arglist__17558){
var self__ = cljs.core.first(arglist__17558);
var a = cljs.core.rest(arglist__17558);
return G__17555__delegate(self__,a);
});
G__17555.cljs$core$IFn$_invoke$arity$variadic = G__17555__delegate;
return G__17555;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args17554){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args17554)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__17559__delegate = function (a){
var _ = this;
var or__3806__auto___17560 = self__.p;
if(cljs.core.truth_(or__3806__auto___17560)){
} else {
self__.p = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.p,a);
};
var G__17559 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__17561__i = 0, G__17561__a = new Array(arguments.length -  0);
while (G__17561__i < G__17561__a.length) {G__17561__a[G__17561__i] = arguments[G__17561__i + 0]; ++G__17561__i;}
  a = new cljs.core.IndexedSeq(G__17561__a,0);
} 
return G__17559__delegate.call(this,a);};
G__17559.cljs$lang$maxFixedArity = 0;
G__17559.cljs$lang$applyTo = (function (arglist__17562){
var a = cljs.core.seq(arglist__17562);
return G__17559__delegate(a);
});
G__17559.cljs$core$IFn$_invoke$arity$variadic = G__17559__delegate;
return G__17559;
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
reagent.impl.util.roots = (function (){var G__17563 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17563) : cljs.core.atom.call(null,G__17563));
})();
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e17565){if((e17565 instanceof Object)){
var e = e17565;

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e17565;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_17570 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])((function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})(),container,((function (_STAR_always_update_STAR_17570){
return (function (){
var _STAR_always_update_STAR_17571 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17571;
}});})(_STAR_always_update_STAR_17570))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17570;
}}catch (e17569){if((e17569 instanceof Object)){
var e = e17569;
reagent.impl.util.clear_container(container);

throw e;
} else {
throw e17569;

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
var seq__17577_17582 = cljs.core.seq(cljs.core.vals((function (){var G__17581 = reagent.impl.util.roots;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17581) : cljs.core.deref.call(null,G__17581));
})()));
var chunk__17578_17583 = null;
var count__17579_17584 = (0);
var i__17580_17585 = (0);
while(true){
if((i__17580_17585 < count__17579_17584)){
var v_17586 = chunk__17578_17583.cljs$core$IIndexed$_nth$arity$2(null,i__17580_17585);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_17586);

var G__17587 = seq__17577_17582;
var G__17588 = chunk__17578_17583;
var G__17589 = count__17579_17584;
var G__17590 = (i__17580_17585 + (1));
seq__17577_17582 = G__17587;
chunk__17578_17583 = G__17588;
count__17579_17584 = G__17589;
i__17580_17585 = G__17590;
continue;
} else {
var temp__4126__auto___17591 = cljs.core.seq(seq__17577_17582);
if(temp__4126__auto___17591){
var seq__17577_17592__$1 = temp__4126__auto___17591;
if(cljs.core.chunked_seq_QMARK_(seq__17577_17592__$1)){
var c__4593__auto___17593 = cljs.core.chunk_first(seq__17577_17592__$1);
var G__17594 = cljs.core.chunk_rest(seq__17577_17592__$1);
var G__17595 = c__4593__auto___17593;
var G__17596 = cljs.core.count(c__4593__auto___17593);
var G__17597 = (0);
seq__17577_17582 = G__17594;
chunk__17578_17583 = G__17595;
count__17579_17584 = G__17596;
i__17580_17585 = G__17597;
continue;
} else {
var v_17598 = cljs.core.first(seq__17577_17592__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.impl.util.re_render_component,v_17598);

var G__17599 = cljs.core.next(seq__17577_17592__$1);
var G__17600 = null;
var G__17601 = (0);
var G__17602 = (0);
seq__17577_17582 = G__17599;
chunk__17578_17583 = G__17600;
count__17579_17584 = G__17601;
i__17580_17585 = G__17602;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
