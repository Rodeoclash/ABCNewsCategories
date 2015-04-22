// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function as_element(x){
var G__17167 = x;
return reagent.impl.template.as_element(G__17167);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_17182 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = null;
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__17183 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17183) : f.call(null,G__17183));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__17184 = n;
switch (G__17184) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__17185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17185) : f.call(null,G__17185));

break;
case (3):
var G__17186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__17187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17186,G__17187) : f.call(null,G__17186,G__17187));

break;
case (4):
var G__17188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__17189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__17190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17188,G__17189,G__17190) : f.call(null,G__17188,G__17189,G__17190));

break;
case (5):
var G__17191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__17192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__17193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__17194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17191,G__17192,G__17193,G__17194) : f.call(null,G__17191,G__17192,G__17193,G__17194));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_17182;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__17211 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__17211) {
case "componentWillUnmount":
return ((function (G__17211){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__17212 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17212) : f.call(null,G__17212));
}
});
;})(G__17211))

break;
case "componentWillMount":
return ((function (G__17211){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__17213 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17213) : f.call(null,G__17213));
}
});
;})(G__17211))

break;
case "componentDidUpdate":
return ((function (G__17211){
return (function (oldprops){
var c = this;
var G__17214 = c;
var G__17215 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17214,G__17215) : f.call(null,G__17214,G__17215));
});
;})(G__17211))

break;
case "componentWillUpdate":
return ((function (G__17211){
return (function (nextprops){
var c = this;
var G__17216 = c;
var G__17217 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17216,G__17217) : f.call(null,G__17216,G__17217));
});
;})(G__17211))

break;
case "shouldComponentUpdate":
return ((function (G__17211){
return (function (nextprops,nextstate){
var or__3806__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__17218 = c;
var G__17219 = old_argv;
var G__17220 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17218,G__17219,G__17220) : f.call(null,G__17218,G__17219,G__17220));
}
}
});
;})(G__17211))

break;
case "componentWillReceiveProps":
return ((function (G__17211){
return (function (props){
var c = this;
var G__17221 = c;
var G__17222 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17221,G__17222) : f.call(null,G__17221,G__17222));
});
;})(G__17211))

break;
case "getInitialState":
return ((function (G__17211){
return (function (){
var c = this;
var G__17223 = reagent.impl.component.state_atom(c);
var G__17224 = (function (){var G__17225 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17225) : f.call(null,G__17225));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17223,G__17224) : cljs.core.reset_BANG_.call(null,G__17223,G__17224));
});
;})(G__17211))

break;
case "getDefaultProps":
return null;

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__17227__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__17227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17228__i = 0, G__17228__a = new Array(arguments.length -  0);
while (G__17228__i < G__17228__a.length) {G__17228__a[G__17228__i] = arguments[G__17228__i + 0]; ++G__17228__i;}
  args = new cljs.core.IndexedSeq(G__17228__a,0);
} 
return G__17227__delegate.call(this,args);};
G__17227.cljs$lang$maxFixedArity = 0;
G__17227.cljs$lang$applyTo = (function (arglist__17229){
var args = cljs.core.seq(arglist__17229);
return G__17227__delegate(args);
});
G__17227.cljs$core$IFn$_invoke$arity$variadic = G__17227__delegate;
return G__17227;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$67,null,cljs.core.constant$keyword$68,null,cljs.core.constant$keyword$66,null,cljs.core.constant$keyword$69,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__17231 = f;
(G__17231["__reactDontBind"] = true);

return G__17231;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__17233 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__17233) : reagent.impl.component.dont_wrap.call(null,G__17233));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3794__auto__ = wrap;
if(cljs.core.truth_(and__3794__auto__)){
return f;
} else {
return and__3794__auto__;
}
})())){
} else {
}

var or__3806__auto__ = wrap;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$70,null,cljs.core.constant$keyword$71,null,cljs.core.constant$keyword$72,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__17235 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__17235) : reagent.impl.component.dash_to_camel.call(null,G__17235));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$67,render_f,cljs.core.array_seq([cljs.core.constant$keyword$66,cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return fm;

});
reagent.impl.component.fun_name = (function fun_name(f){
var or__3806__auto__ = (function (){var and__3794__auto__ = cljs.core.fn_QMARK_(f);
if(and__3794__auto__){
var or__3806__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return (f["name"]);
}
} else {
return and__3794__auto__;
}
})();
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (function (){var and__3794__auto__ = (function (){var G__17243 = f;
if(G__17243){
var bit__4480__auto__ = (G__17243.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4480__auto__) || (G__17243.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__3794__auto__){
return cljs.core.name(f);
} else {
return and__3794__auto__;
}
})();
if(cljs.core.truth_(or__3806__auto____$1)){
return or__3806__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.constant$keyword$73.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function wrap_funs(fmap){
var fun_map = (function (){var temp__4128__auto__ = cljs.core.constant$keyword$74.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4128__auto__ == null)){
return fmap;
} else {
var cf = temp__4128__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$68,cf),cljs.core.constant$keyword$74);
}
})();
var render_fun = (function (){var or__3806__auto__ = cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = null;
var name = [cljs.core.str((function (){var or__3806__auto__ = cljs.core.constant$keyword$75.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$75,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__17245 = o;
(G__17245[cljs.core.name(k)] = v);

return G__17245;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body){

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__17246__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__17246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17247__i = 0, G__17247__a = new Array(arguments.length -  0);
while (G__17247__i < G__17247__a.length) {G__17247__a[G__17247__i] = arguments[G__17247__i + 0]; ++G__17247__i;}
  args = new cljs.core.IndexedSeq(G__17247__a,0);
} 
return G__17246__delegate.call(this,args);};
G__17246.cljs$lang$maxFixedArity = 0;
G__17246.cljs$lang$applyTo = (function (arglist__17248){
var args = cljs.core.seq(arglist__17248);
return G__17246__delegate(args);
});
G__17246.cljs$core$IFn$_invoke$arity$variadic = G__17246__delegate;
return G__17246;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function comp_name(){
return "";

});
reagent.impl.component.shallow_obj_to_map = (function shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4562__auto__ = (function iter__17257(s__17258){
return (new cljs.core.LazySeq(null,(function (){
var s__17258__$1 = s__17258;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17258__$1);
if(temp__4126__auto__){
var s__17258__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17258__$2)){
var c__4560__auto__ = cljs.core.chunk_first(s__17258__$2);
var size__4561__auto__ = cljs.core.count(c__4560__auto__);
var b__17260 = cljs.core.chunk_buffer(size__4561__auto__);
if((function (){var i__17259 = (0);
while(true){
if((i__17259 < size__4561__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4560__auto__,i__17259);
cljs.core.chunk_append(b__17260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__17263 = (i__17259 + (1));
i__17259 = G__17263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17260),iter__17257(cljs.core.chunk_rest(s__17258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17260),null);
}
} else {
var k = cljs.core.first(s__17258__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),iter__17257(cljs.core.rest(s__17258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4562__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reactify_component(comp){
return (React["createClass"])({"render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$76,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
}), "displayName": "react-wrapper"});
});
