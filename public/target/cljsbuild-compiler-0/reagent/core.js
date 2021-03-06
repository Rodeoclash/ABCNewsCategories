// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
reagent.core.is_client = reagent.impl.util.is_client;
/**
* Create a native React element, by calling React.createElement directly.
* 
* That means the second argument must be a javascript object (or nil), and
* that any Reagent hiccup forms must be processed with as-element. For example
* like this:
* 
* (r/create-element "div" #js{:className "foo"}
* "Hi " (r/as-element [:strong "world!"])
* 
* which is equivalent to
* 
* [:div.foo "Hi" [:strong "world!"]]
* @param {...*} var_args
*/
reagent.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (type){
return create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});
var create_element__2 = (function (type,props){

var G__17136 = type;
var G__17137 = props;
return React.createElement(G__17136,G__17137);
});
var create_element__3 = (function (type,props,child){

var G__17138 = type;
var G__17139 = props;
var G__17140 = child;
return React.createElement(G__17138,G__17139,G__17140);
});
var create_element__4 = (function() { 
var G__17141__delegate = function (type,props,child,children){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(React.createElement,type,props,child,children);
};
var G__17141 = function (type,props,child,var_args){
var children = null;
if (arguments.length > 3) {
var G__17142__i = 0, G__17142__a = new Array(arguments.length -  3);
while (G__17142__i < G__17142__a.length) {G__17142__a[G__17142__i] = arguments[G__17142__i + 3]; ++G__17142__i;}
  children = new cljs.core.IndexedSeq(G__17142__a,0);
} 
return G__17141__delegate.call(this,type,props,child,children);};
G__17141.cljs$lang$maxFixedArity = 3;
G__17141.cljs$lang$applyTo = (function (arglist__17143){
var type = cljs.core.first(arglist__17143);
arglist__17143 = cljs.core.next(arglist__17143);
var props = cljs.core.first(arglist__17143);
arglist__17143 = cljs.core.next(arglist__17143);
var child = cljs.core.first(arglist__17143);
var children = cljs.core.rest(arglist__17143);
return G__17141__delegate(type,props,child,children);
});
G__17141.cljs$core$IFn$_invoke$arity$variadic = G__17141__delegate;
return G__17141;
})()
;
create_element = function(type,props,child,var_args){
var children = var_args;
switch(arguments.length){
case 1:
return create_element__1.call(this,type);
case 2:
return create_element__2.call(this,type,props);
case 3:
return create_element__3.call(this,type,props,child);
default:
var G__17144 = null;
if (arguments.length > 3) {
var G__17145__i = 0, G__17145__a = new Array(arguments.length -  3);
while (G__17145__i < G__17145__a.length) {G__17145__a[G__17145__i] = arguments[G__17145__i + 3]; ++G__17145__i;}
G__17144 = new cljs.core.IndexedSeq(G__17145__a,0);
}
return create_element__4.cljs$core$IFn$_invoke$arity$variadic(type,props,child, G__17144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$lang$maxFixedArity = 3;
create_element.cljs$lang$applyTo = create_element__4.cljs$lang$applyTo;
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
create_element.cljs$core$IFn$_invoke$arity$3 = create_element__3;
create_element.cljs$core$IFn$_invoke$arity$variadic = create_element__4.cljs$core$IFn$_invoke$arity$variadic;
return create_element;
})()
;
/**
* Turns a vector of Hiccup syntax into a React element. Returns form unchanged if it is not a vector.
*/
reagent.core.as_element = (function as_element(form){
return reagent.impl.template.as_element(form);
});
/**
* Returns an adapter for a native React class, that may be used
* just like a Reagent component function or class in Hiccup forms.
*/
reagent.core.adapt_react_class = (function adapt_react_class(c){
return reagent.impl.template.adapt_react_class(c);
});
/**
* Returns an adapter for a Reagent component, that may be used from
* React, for example in JSX. A single argument, props, is passed to
* the component, converted to a map.
*/
reagent.core.reactify_component = (function reactify_component(c){
return reagent.impl.component.reactify_component(c);
});
/**
* Render a Reagent component into the DOM. The first argument may be
* either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
* 
* Optionally takes a callback that is called when the component is in place.
* 
* Returns the mounted component instance.
*/
reagent.core.render = (function() {
var render = null;
var render__2 = (function (comp,container){
return render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});
var render__3 = (function (comp,container,callback){
var f = (function (){
return reagent.core.as_element(((cljs.core.fn_QMARK_(comp))?(function (){return (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
})():comp));
});
return reagent.impl.util.render_component(f,container,callback);
});
render = function(comp,container,callback){
switch(arguments.length){
case 2:
return render__2.call(this,comp,container);
case 3:
return render__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render.cljs$core$IFn$_invoke$arity$2 = render__2;
render.cljs$core$IFn$_invoke$arity$3 = render__3;
return render;
})()
;
/**
* Remove a component from the given DOM node.
*/
reagent.core.unmount_component_at_node = (function unmount_component_at_node(container){
return reagent.impl.util.unmount_component_at_node(container);
});
/**
* Turns a component into an HTML string.
*/
reagent.core.render_to_string = (function render_to_string(component){
var _STAR_non_reactive_STAR_17150 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToString"])(reagent.core.as_element(component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_17150;
}});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
reagent.core.render_component_to_string = reagent.core.render_to_string;
/**
* Turns a component into an HTML string, without data-react-id attributes, etc.
*/
reagent.core.render_to_static_markup = (function render_to_static_markup(component){
var _STAR_non_reactive_STAR_17152 = reagent.impl.component._STAR_non_reactive_STAR_;
reagent.impl.component._STAR_non_reactive_STAR_ = true;

try{return (React["renderToStaticMarkup"])(reagent.core.as_element(component));
}finally {reagent.impl.component._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_17152;
}});
/**
* Force re-rendering of all mounted Reagent components. This is
* probably only useful in a development environment, when you want to
* update components in response to some dynamic changes to code.
* 
* Note that force-update-all may not update root components. This
* happens if a component 'foo' is mounted with `(render [foo])` (since
* functions are passed by value, and not by reference, in
* ClojureScript). To get around this you'll have to introduce a layer
* of indirection, for example by using `(render [#'foo])` instead.
*/
reagent.core.force_update_all = (function force_update_all(){
return reagent.impl.util.force_update_all();
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
* Create a component, React style. Should be called with a map,
* looking like this:
* {:get-initial-state (fn [this])
* :component-will-receive-props (fn [this new-argv])
* :should-component-update (fn [this old-argv new-argv])
* :component-will-mount (fn [this])
* :component-did-mount (fn [this])
* :component-will-update (fn [this new-argv])
* :component-did-update (fn [this old-argv])
* :component-will-unmount (fn [this])
* :reagent-render (fn [args....])   ;; or :render (fn [this])
* }
* 
* Everything is optional, except either :reagent-render or :render.
*/
reagent.core.create_class = (function create_class(spec){
return reagent.impl.component.create_class(spec);
});
/**
* Returns the current React component (a.k.a this) in a component
* function.
*/
reagent.core.current_component = (function current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
* Returns an atom containing a components state.
*/
reagent.core.state_atom = (function state_atom(this$){

return reagent.impl.component.state_atom(this$);
});
/**
* Returns the state of a component, as set with replace-state or set-state.
* Equivalent to (deref (r/state-atom this))
*/
reagent.core.state = (function state(this$){

var G__17154 = reagent.core.state_atom(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17154) : cljs.core.deref.call(null,G__17154));
});
/**
* Set state of a component.
* Equivalent to (reset! (state-atom this) new-state)
*/
reagent.core.replace_state = (function replace_state(this$,new_state){


var G__17157 = reagent.core.state_atom(this$);
var G__17158 = new_state;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17157,G__17158) : cljs.core.reset_BANG_.call(null,G__17157,G__17158));
});
/**
* Merge component state with new-state.
* Equivalent to (swap! (state-atom this) merge new-state)
*/
reagent.core.set_state = (function set_state(this$,new_state){


return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
* Returns the props passed to a component.
*/
reagent.core.props = (function props(this$){

return reagent.impl.util.get_props(this$);
});
/**
* Returns the children passed to a component.
*/
reagent.core.children = (function children(this$){

return reagent.impl.util.get_children(this$);
});
/**
* Returns the entire Hiccup form passed to the component.
*/
reagent.core.argv = (function argv(this$){

return reagent.impl.util.get_argv(this$);
});
/**
* Returns the root DOM node of a mounted component.
*/
reagent.core.dom_node = (function dom_node(this$){
return (this$["getDOMNode"])();
});
/**
* Utility function that merges two maps, handling :class and :style
* specially, like React's transferPropsTo.
*/
reagent.core.merge_props = (function merge_props(defaults,props){
return reagent.impl.util.merge_props(defaults,props);
});
/**
* Render dirty components immediately to the DOM.
* 
* Note that this may not work in event handlers, since React.js does
* batching of updates there.
*/
reagent.core.flush = (function flush(){
return reagent.impl.batching.flush();
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* Reagent components that derefs one of these are automatically
* re-rendered.
* @param {...*} var_args
*/
reagent.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});
var atom__2 = (function() { 
var G__17159__delegate = function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.ratom.atom,x,rest);
};
var G__17159 = function (x,var_args){
var rest = null;
if (arguments.length > 1) {
var G__17160__i = 0, G__17160__a = new Array(arguments.length -  1);
while (G__17160__i < G__17160__a.length) {G__17160__a[G__17160__i] = arguments[G__17160__i + 1]; ++G__17160__i;}
  rest = new cljs.core.IndexedSeq(G__17160__a,0);
} 
return G__17159__delegate.call(this,x,rest);};
G__17159.cljs$lang$maxFixedArity = 1;
G__17159.cljs$lang$applyTo = (function (arglist__17161){
var x = cljs.core.first(arglist__17161);
var rest = cljs.core.rest(arglist__17161);
return G__17159__delegate(x,rest);
});
G__17159.cljs$core$IFn$_invoke$arity$variadic = G__17159__delegate;
return G__17159;
})()
;
atom = function(x,var_args){
var rest = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__17162 = null;
if (arguments.length > 1) {
var G__17163__i = 0, G__17163__a = new Array(arguments.length -  1);
while (G__17163__i < G__17163__a.length) {G__17163__a[G__17163__i] = arguments[G__17163__i + 1]; ++G__17163__i;}
G__17162 = new cljs.core.IndexedSeq(G__17163__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__17162);
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
* Provide a combination of value and callback, that looks like an atom.
* 
* The first argument can be any value, that will be returned when the
* result is deref'ed.
* 
* The second argument should be a function, that is called with the
* optional extra arguments provided to wrap, and the new value of the
* resulting 'atom'.
* 
* Use for example like this:
* 
* (wrap (:foo @state)
* swap! state assoc :foo)
* 
* Probably useful only for passing to child components.
* @param {...*} var_args
*/
reagent.core.wrap = (function() { 
var wrap__delegate = function (value,reset_fn,args){

return reagent.ratom.make_wrapper(value,reset_fn,args);
};
var wrap = function (value,reset_fn,var_args){
var args = null;
if (arguments.length > 2) {
var G__17164__i = 0, G__17164__a = new Array(arguments.length -  2);
while (G__17164__i < G__17164__a.length) {G__17164__a[G__17164__i] = arguments[G__17164__i + 2]; ++G__17164__i;}
  args = new cljs.core.IndexedSeq(G__17164__a,0);
} 
return wrap__delegate.call(this,value,reset_fn,args);};
wrap.cljs$lang$maxFixedArity = 2;
wrap.cljs$lang$applyTo = (function (arglist__17165){
var value = cljs.core.first(arglist__17165);
arglist__17165 = cljs.core.next(arglist__17165);
var reset_fn = cljs.core.first(arglist__17165);
var args = cljs.core.rest(arglist__17165);
return wrap__delegate(value,reset_fn,args);
});
wrap.cljs$core$IFn$_invoke$arity$variadic = wrap__delegate;
return wrap;
})()
;
/**
* Provide a cursor into a Reagent atom.
* 
* Behaves like a Reagent atom but focuses updates and derefs to
* the specified path within the wrapped Reagent atom. e.g.,
* (let [c (cursor ra [:nested :content])]
* ... @c ;; equivalent to (get-in @ra [:nested :content])
* ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
* ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
* )
* 
* The first parameter can also be a function, that should look something
* like this:
* 
* (defn set-get
* ([k] (get-in @state k))
* ([k v] (swap! state assoc-in k v)))
* 
* The function will be called with one argument – the path passed to
* cursor – when the cursor is deref'ed, and two arguments (path and new
* value) when the cursor is modified.
* 
* Given that set-get function, (and that state is a Reagent atom, or
* another cursor) these cursors are equivalent:
* (cursor state [:foo]) and (cursor set-get [:foo]).
*/
reagent.core.cursor = (function cursor(src,path){
return reagent.ratom.cursor(src,path);
});
/**
* Run f using requestAnimationFrame or equivalent.
*/
reagent.core.next_tick = (function next_tick(f){
var G__17167 = f;
return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__17167) : reagent.impl.batching.next_tick.call(null,G__17167));
});
/**
* Works just like clojure.core/partial, except that it is an IFn, and
* the result can be compared with =
* @param {...*} var_args
*/
reagent.core.partial = (function() { 
var partial__delegate = function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
};
var partial = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__17168__i = 0, G__17168__a = new Array(arguments.length -  1);
while (G__17168__i < G__17168__a.length) {G__17168__a[G__17168__i] = arguments[G__17168__i + 1]; ++G__17168__i;}
  args = new cljs.core.IndexedSeq(G__17168__a,0);
} 
return partial__delegate.call(this,f,args);};
partial.cljs$lang$maxFixedArity = 1;
partial.cljs$lang$applyTo = (function (arglist__17169){
var f = cljs.core.first(arglist__17169);
var args = cljs.core.rest(arglist__17169);
return partial__delegate(f,args);
});
partial.cljs$core$IFn$_invoke$arity$variadic = partial__delegate;
return partial;
})()
;
