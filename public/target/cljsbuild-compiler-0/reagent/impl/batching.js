// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
if(typeof reagent.impl.batching.mount_count !== 'undefined'){
} else {
reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function next_mount_count(){
return reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1));
});
reagent.impl.batching.fake_raf = (function fake_raf(f){
var G__17276 = f;
var G__17277 = (16);
return setTimeout(G__17276,G__17277);
});
reagent.impl.batching.next_tick = ((cljs.core.not(reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;
var or__3806__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__3806__auto____$1)){
return or__3806__auto____$1;
} else {
var or__3806__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__3806__auto____$2)){
return or__3806__auto____$2;
} else {
var or__3806__auto____$3 = (w["msRequestAnimationFrame"]);
if(cljs.core.truth_(or__3806__auto____$3)){
return or__3806__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})());
reagent.impl.batching.compare_mount_order = (function compare_mount_order(c1,c2){
return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
});
reagent.impl.batching.run_queue = (function run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__4693__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4693__auto__)){
var c_17278 = (a[i]);
if(cljs.core.truth_((c_17278["cljsIsDirty"]))){
(c_17278["forceUpdate"])();
} else {
}

var G__17279 = (i + (1));
i = G__17279;
continue;
} else {
return null;
}
break;
}
});
reagent.impl.batching.run_funs = (function run_funs(a){
var n__4693__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4693__auto__)){
(a[i]).call(null);

var G__17280 = (i + (1));
i = G__17280;
continue;
} else {
return null;
}
break;
}
});

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (queue,scheduled_QMARK_,after_render){
this.queue = queue;
this.scheduled_QMARK_ = scheduled_QMARK_;
this.after_render = after_render;
})
reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
self__.queue.push(c);

return this$.schedule();
});

reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var _ = this;
return self__.after_render.push(f);
});

reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(self__.scheduled_QMARK_)){
return null;
} else {
self__.scheduled_QMARK_ = true;

var G__17281 = ((function (this$){
return (function (){
return this$.run_queue();
});})(this$))
;
return (reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.batching.next_tick.cljs$core$IFn$_invoke$arity$1(G__17281) : reagent.impl.batching.next_tick.call(null,G__17281));
}
});

reagent.impl.batching.RenderQueue.prototype.run_queue = (function (){
var self__ = this;
var _ = this;
var q = self__.queue;
var aq = self__.after_render;
self__.queue = [];

self__.after_render = [];

self__.scheduled_QMARK_ = false;

reagent.impl.batching.run_queue(q);

return reagent.impl.batching.run_funs(aq);
});

reagent.impl.batching.RenderQueue.cljs$lang$type = true;

reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";

reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"reagent.impl.batching/RenderQueue");
});

reagent.impl.batching.__GT_RenderQueue = (function __GT_RenderQueue(queue,scheduled_QMARK_,after_render){
return (new reagent.impl.batching.RenderQueue(queue,scheduled_QMARK_,after_render));
});

reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue([],false,[]));
reagent.impl.batching.flush = (function flush(){
return reagent.impl.batching.render_queue.run_queue();
});
reagent.impl.batching.queue_render = (function queue_render(c){
(c["cljsIsDirty"] = true);

return reagent.impl.batching.render_queue.queue_render(c);
});
reagent.impl.batching.mark_rendered = (function mark_rendered(c){
return (c["cljsIsDirty"] = false);
});
reagent.impl.batching.do_after_flush = (function do_after_flush(f){
return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.do_later = (function do_later(f){
reagent.impl.batching.do_after_flush(f);

return reagent.impl.batching.render_queue.schedule();
});
reagent.impl.batching.is_reagent_component = (function is_reagent_component(c){
var G__17283 = c;
var G__17283__$1 = (((G__17283 == null))?null:(G__17283["props"]));
var G__17283__$2 = (((G__17283__$1 == null))?null:(G__17283__$1["argv"]));
return G__17283__$2;
});
reagent.impl.batching.run_reactively = (function run_reactively(c,run){

reagent.impl.batching.mark_rendered(c);

var rat = (c["cljsRatom"]);
if((rat == null)){
var res = reagent.ratom.capture_derefed(run,c);
var derefed = reagent.ratom.captured(c);
if(!((derefed == null))){
(c["cljsRatom"] = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic(run,cljs.core.array_seq([cljs.core.constant$keyword$65,((function (res,derefed,rat){
return (function (){
return reagent.impl.batching.queue_render(c);
});})(res,derefed,rat))
,cljs.core.constant$keyword$63,derefed], 0)));
} else {
}

return res;
} else {
return reagent.ratom.run(rat);
}
});
reagent.impl.batching.dispose = (function dispose(c){
var G__17285_17286 = (c["cljsRatom"]);
var G__17285_17287__$1 = (((G__17285_17286 == null))?null:reagent.ratom.dispose_BANG_(G__17285_17286));

return reagent.impl.batching.mark_rendered(c);
});
