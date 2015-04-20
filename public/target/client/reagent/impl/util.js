// Compiled by ClojureScript 0.0-2816 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
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
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__18562 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__18562,(0),null);
var parts = cljs.core.nthnext.call(null,vec__18562,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
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
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__18564__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__12773__auto___18565 = self__.p;
if(cljs.core.truth_(or__12773__auto___18565)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__18564 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__18566__i = 0, G__18566__a = new Array(arguments.length -  1);
while (G__18566__i < G__18566__a.length) {G__18566__a[G__18566__i] = arguments[G__18566__i + 1]; ++G__18566__i;}
  a = new cljs.core.IndexedSeq(G__18566__a,0);
} 
return G__18564__delegate.call(this,self__,a);};
G__18564.cljs$lang$maxFixedArity = 1;
G__18564.cljs$lang$applyTo = (function (arglist__18567){
var self__ = cljs.core.first(arglist__18567);
var a = cljs.core.rest(arglist__18567);
return G__18564__delegate(self__,a);
});
G__18564.cljs$core$IFn$_invoke$arity$variadic = G__18564__delegate;
return G__18564;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args18563){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18563)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__18568__delegate = function (a){
var _ = this;
var or__12773__auto___18569 = self__.p;
if(cljs.core.truth_(or__12773__auto___18569)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__18568 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__18570__i = 0, G__18570__a = new Array(arguments.length -  0);
while (G__18570__i < G__18570__a.length) {G__18570__a[G__18570__i] = arguments[G__18570__i + 0]; ++G__18570__i;}
  a = new cljs.core.IndexedSeq(G__18570__a,0);
} 
return G__18568__delegate.call(this,a);};
G__18568.cljs$lang$maxFixedArity = 0;
G__18568.cljs$lang$applyTo = (function (arglist__18571){
var a = cljs.core.seq(arglist__18571);
return G__18568__delegate(a);
});
G__18568.cljs$core$IFn$_invoke$arity$variadic = G__18568__delegate;
return G__18568;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
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
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
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
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e18573){if((e18573 instanceof Object)){
var e = e18573;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e18573;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_18578 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_18578){
return (function (){
var _STAR_always_update_STAR_18579 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18579;
}});})(_STAR_always_update_STAR_18578))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18578;
}}catch (e18577){if((e18577 instanceof Object)){
var e = e18577;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e18577;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__18584_18588 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__18585_18589 = null;
var count__18586_18590 = (0);
var i__18587_18591 = (0);
while(true){
if((i__18587_18591 < count__18586_18590)){
var v_18592 = cljs.core._nth.call(null,chunk__18585_18589,i__18587_18591);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_18592);

var G__18593 = seq__18584_18588;
var G__18594 = chunk__18585_18589;
var G__18595 = count__18586_18590;
var G__18596 = (i__18587_18591 + (1));
seq__18584_18588 = G__18593;
chunk__18585_18589 = G__18594;
count__18586_18590 = G__18595;
i__18587_18591 = G__18596;
continue;
} else {
var temp__4126__auto___18597 = cljs.core.seq.call(null,seq__18584_18588);
if(temp__4126__auto___18597){
var seq__18584_18598__$1 = temp__4126__auto___18597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18584_18598__$1)){
var c__13560__auto___18599 = cljs.core.chunk_first.call(null,seq__18584_18598__$1);
var G__18600 = cljs.core.chunk_rest.call(null,seq__18584_18598__$1);
var G__18601 = c__13560__auto___18599;
var G__18602 = cljs.core.count.call(null,c__13560__auto___18599);
var G__18603 = (0);
seq__18584_18588 = G__18600;
chunk__18585_18589 = G__18601;
count__18586_18590 = G__18602;
i__18587_18591 = G__18603;
continue;
} else {
var v_18604 = cljs.core.first.call(null,seq__18584_18598__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_18604);

var G__18605 = cljs.core.next.call(null,seq__18584_18598__$1);
var G__18606 = null;
var G__18607 = (0);
var G__18608 = (0);
seq__18584_18588 = G__18605;
chunk__18585_18589 = G__18606;
count__18586_18590 = G__18607;
i__18587_18591 = G__18608;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map?rel=1429446753046