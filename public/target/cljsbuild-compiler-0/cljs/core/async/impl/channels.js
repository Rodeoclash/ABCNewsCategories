// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){
if(typeof cljs.core.async.impl.channels.t27740 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t27740 = (function (val,box,meta27741){
this.val = val;
this.box = box;
this.meta27741 = meta27741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t27740.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t27740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27742){
var self__ = this;
var _27742__$1 = this;
return self__.meta27741;
});

cljs.core.async.impl.channels.t27740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27742,meta27741__$1){
var self__ = this;
var _27742__$1 = this;
return (new cljs.core.async.impl.channels.t27740(self__.val,self__.box,meta27741__$1));
});

cljs.core.async.impl.channels.t27740.cljs$lang$type = true;

cljs.core.async.impl.channels.t27740.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t27740";

cljs.core.async.impl.channels.t27740.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async.impl.channels/t27740");
});

cljs.core.async.impl.channels.__GT_t27740 = (function __GT_t27740(val__$1,box__$1,meta27741){
return (new cljs.core.async.impl.channels.t27740(val__$1,box__$1,meta27741));
});

}

return (new cljs.core.async.impl.channels.t27740(val,box,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj27744 = {};
return obj27744;
})();

cljs.core.async.impl.channels.abort = (function abort(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__27748 = x__4450__auto__;
return goog.typeOf(G__27748);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__3794__auto__ = self__.buf;
if(cljs.core.truth_(and__3794__auto__)){
return (self__.puts.length === (0));
} else {
return and__3794__auto__;
}
})())){
var G__27749_27761 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__27749_27761) : self__.add_BANG_.call(null,G__27749_27761));
} else {
}

while(true){
var taker_27762 = self__.takes.pop();
if((taker_27762 == null)){
} else {
if(taker_27762.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_27763 = taker_27762.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_27764 = (cljs.core.truth_((function (){var and__3794__auto__ = self__.buf;
if(cljs.core.truth_(and__3794__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__3794__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_27763,val_27764,taker_27762,this$__$1){
return (function (){
var G__27750 = val_27764;
return (take_cb_27763.cljs$core$IFn$_invoke$arity$1 ? take_cb_27763.cljs$core$IFn$_invoke$arity$1(G__27750) : take_cb_27763.call(null,G__27750));
});})(take_cb_27763,val_27764,taker_27762,this$__$1))
);
} else {
}

continue;
}
break;
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))){
} else {
var putter_27765 = self__.puts.pop();
if((putter_27765 == null)){
} else {
var put_handler_27766 = putter_27765.handler;
var val_27767 = putter_27765.val;
if(put_handler_27766.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_27768 = put_handler_27766.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb_27768,put_handler_27766,val_27767,putter_27765,_,retval,this$__$1){
return (function (){
var G__27751 = true;
return (put_cb_27768.cljs$core$IFn$_invoke$arity$1 ? put_cb_27768.cljs$core$IFn$_invoke$arity$1(G__27751) : put_cb_27768.call(null,G__27751));
});})(put_cb_27768,put_handler_27766,val_27767,putter_27765,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_((function (){var G__27752 = self__.buf;
var G__27753 = val_27767;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__27752,G__27753) : self__.add_BANG_.call(null,G__27752,G__27753));
})())){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
var G__27754 = true;
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__27754) : put_cb.call(null,G__27754));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
var G__27755_27769 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__27755_27769) : self__.add_BANG_.call(null,G__27755_27769));
} else {
}

if(cljs.core.truth_((function (){var and__3794__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3794__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3794__auto__;
}
})())){
var has_val = (function (){var and__3794__auto__ = self__.buf;
if(cljs.core.truth_(and__3794__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__3794__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}


self__.takes.unbounded_unshift(handler);

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__3794__auto__ = self__.buf;
if(cljs.core.truth_(and__3794__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__3794__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__27756 = self__.buf;
var G__27757 = val;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__27756,G__27757) : self__.add_BANG_.call(null,G__27756,G__27757));
})());
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker_27770 = self__.takes.pop();
if(taker_27770.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_27771 = taker_27770.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_27772__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb_27771,val_27772__$1,taker_27770,done_QMARK_,closed__$1,this$__$1){
return (function (){
var G__27758 = val_27772__$1;
return (take_cb_27771.cljs$core$IFn$_invoke$arity$1 ? take_cb_27771.cljs$core$IFn$_invoke$arity$1(G__27758) : take_cb_27771.call(null,G__27758));
});})(take_cb_27771,val_27772__$1,taker_27770,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
var G__27759 = val;
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__27759) : take_cb.call(null,G__27759));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}


self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_27773 = self__.puts.pop();
if((putter_27773 == null)){
} else {
var put_handler_27774 = putter_27773.handler;
var val_27775 = putter_27773.val;
if(put_handler_27774.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_27776 = put_handler_27774.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_27776,put_handler_27774,val_27775,putter_27773,this$__$1){
return (function (){
var G__27760 = true;
return (put_cb_27776.cljs$core$IFn$_invoke$arity$1 ? put_cb_27776.cljs$core$IFn$_invoke$arity$1(G__27760) : put_cb_27776.call(null,G__27760));
});})(put_cb_27776,put_handler_27774,val_27775,putter_27773,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){
var else$ = (function (){var or__3806__auto__ = exh;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){
return chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});
var chan__2 = (function (buf,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__27788 = cljs.core.async.impl.protocols.add_BANG_;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__27788) : xform.call(null,G__27788));
})():cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__27794 = null;
var G__27794__1 = (function (buf__$1){
try{var G__27790 = buf__$1;
return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__27790) : add_BANG_.call(null,G__27790));
}catch (e27789){var t = e27789;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__27794__2 = (function (buf__$1,val){
try{var G__27792 = buf__$1;
var G__27793 = val;
return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__27792,G__27793) : add_BANG_.call(null,G__27792,G__27793));
}catch (e27791){var t = e27791;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__27794 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__27794__1.call(this,buf__$1);
case 2:
return G__27794__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27794.cljs$core$IFn$_invoke$arity$1 = G__27794__1;
G__27794.cljs$core$IFn$_invoke$arity$2 = G__27794__2;
return G__27794;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
