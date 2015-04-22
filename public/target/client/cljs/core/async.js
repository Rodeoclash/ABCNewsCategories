// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t24201 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24201 = (function (f,fn_handler,meta24202){
this.f = f;
this.fn_handler = fn_handler;
this.meta24202 = meta24202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24201.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24203){
var self__ = this;
var _24203__$1 = this;
return self__.meta24202;
});

cljs.core.async.t24201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24203,meta24202__$1){
var self__ = this;
var _24203__$1 = this;
return (new cljs.core.async.t24201(self__.f,self__.fn_handler,meta24202__$1));
});

cljs.core.async.t24201.cljs$lang$type = true;

cljs.core.async.t24201.cljs$lang$ctorStr = "cljs.core.async/t24201";

cljs.core.async.t24201.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24201");
});

cljs.core.async.__GT_t24201 = (function __GT_t24201(f__$1,fn_handler__$1,meta24202){
return (new cljs.core.async.t24201(f__$1,fn_handler__$1,meta24202));
});

}

return (new cljs.core.async.t24201(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__24205 = buff;
if(G__24205){
var bit__4487__auto__ = null;
if(cljs.core.truth_((function (){var or__3806__auto__ = bit__4487__auto__;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return G__24205.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24205.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24205);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24205);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_24222 = (function (){var G__24219 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24219) : cljs.core.deref.call(null,G__24219));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24220_24223 = val_24222;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24220_24223) : fn1.call(null,G__24220_24223));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24222,ret){
return (function (){
var G__24221 = val_24222;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24221) : fn1.call(null,G__24221));
});})(val_24222,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__24232 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24232) : cljs.core.deref.call(null,G__24232));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__24233 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24233) : cljs.core.deref.call(null,G__24233));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24234_24236 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24234_24236) : fn1.call(null,G__24234_24236));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__24235 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24235) : fn1.call(null,G__24235));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4693__auto___24237 = n;
var x_24238 = (0);
while(true){
if((x_24238 < n__4693__auto___24237)){
(a[x_24238] = (0));

var G__24239 = (x_24238 + (1));
x_24238 = G__24239;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__24240 = (i + (1));
i = G__24240;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__24248 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24248) : cljs.core.atom.call(null,G__24248));
})();
if(typeof cljs.core.async.t24249 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24249 = (function (flag,alt_flag,meta24250){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24250 = meta24250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24249.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24252 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24252) : cljs.core.deref.call(null,G__24252));
});})(flag))
;

cljs.core.async.t24249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24253_24255 = self__.flag;
var G__24254_24256 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24253_24255,G__24254_24256) : cljs.core.reset_BANG_.call(null,G__24253_24255,G__24254_24256));

return true;
});})(flag))
;

cljs.core.async.t24249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24251){
var self__ = this;
var _24251__$1 = this;
return self__.meta24250;
});})(flag))
;

cljs.core.async.t24249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24251,meta24250__$1){
var self__ = this;
var _24251__$1 = this;
return (new cljs.core.async.t24249(self__.flag,self__.alt_flag,meta24250__$1));
});})(flag))
;

cljs.core.async.t24249.cljs$lang$type = true;

cljs.core.async.t24249.cljs$lang$ctorStr = "cljs.core.async/t24249";

cljs.core.async.t24249.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24249");
});})(flag))
;

cljs.core.async.__GT_t24249 = ((function (flag){
return (function __GT_t24249(flag__$1,alt_flag__$1,meta24250){
return (new cljs.core.async.t24249(flag__$1,alt_flag__$1,meta24250));
});})(flag))
;

}

return (new cljs.core.async.t24249(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24260 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24260 = (function (cb,flag,alt_handler,meta24261){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24261 = meta24261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t24260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t24260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24262){
var self__ = this;
var _24262__$1 = this;
return self__.meta24261;
});

cljs.core.async.t24260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24262,meta24261__$1){
var self__ = this;
var _24262__$1 = this;
return (new cljs.core.async.t24260(self__.cb,self__.flag,self__.alt_handler,meta24261__$1));
});

cljs.core.async.t24260.cljs$lang$type = true;

cljs.core.async.t24260.cljs$lang$ctorStr = "cljs.core.async/t24260";

cljs.core.async.t24260.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24260");
});

cljs.core.async.__GT_t24260 = (function __GT_t24260(cb__$1,flag__$1,alt_handler__$1,meta24261){
return (new cljs.core.async.t24260(cb__$1,flag__$1,alt_handler__$1,meta24261));
});

}

return (new cljs.core.async.t24260(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24270 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24270) : port.call(null,G__24270));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24271 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24271) : port.call(null,G__24271));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24263_SHARP_){
var G__24272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24263_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24272) : fret.call(null,G__24272));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24264_SHARP_){
var G__24273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24264_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24273) : fret.call(null,G__24273));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24274 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24274) : cljs.core.deref.call(null,G__24274));
})(),(function (){var or__3806__auto__ = wport;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24275 = (i + (1));
i = G__24275;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3806__auto__ = ret;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3794__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3794__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3794__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24276){
var map__24278 = p__24276;
var map__24278__$1 = ((cljs.core.seq_QMARK_(map__24278))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24278):map__24278);
var opts = map__24278__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24276 = null;
if (arguments.length > 1) {
var G__24279__i = 0, G__24279__a = new Array(arguments.length -  1);
while (G__24279__i < G__24279__a.length) {G__24279__a[G__24279__i] = arguments[G__24279__i + 1]; ++G__24279__i;}
  p__24276 = new cljs.core.IndexedSeq(G__24279__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__24276);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24280){
var ports = cljs.core.first(arglist__24280);
var p__24276 = cljs.core.rest(arglist__24280);
return alts_BANG___delegate(ports,p__24276);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__12815__auto___24378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24378){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24378){
return (function (state_24354){
var state_val_24355 = (state_24354[(1)]);
if((state_val_24355 === (7))){
var inst_24350 = (state_24354[(2)]);
var state_24354__$1 = state_24354;
var statearr_24356_24379 = state_24354__$1;
(statearr_24356_24379[(2)] = inst_24350);

(statearr_24356_24379[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (1))){
var state_24354__$1 = state_24354;
var statearr_24357_24380 = state_24354__$1;
(statearr_24357_24380[(2)] = null);

(statearr_24357_24380[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (4))){
var inst_24333 = (state_24354[(7)]);
var inst_24333__$1 = (state_24354[(2)]);
var inst_24334 = (inst_24333__$1 == null);
var state_24354__$1 = (function (){var statearr_24358 = state_24354;
(statearr_24358[(7)] = inst_24333__$1);

return statearr_24358;
})();
if(cljs.core.truth_(inst_24334)){
var statearr_24359_24381 = state_24354__$1;
(statearr_24359_24381[(1)] = (5));

} else {
var statearr_24360_24382 = state_24354__$1;
(statearr_24360_24382[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (13))){
var state_24354__$1 = state_24354;
var statearr_24361_24383 = state_24354__$1;
(statearr_24361_24383[(2)] = null);

(statearr_24361_24383[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (6))){
var inst_24333 = (state_24354[(7)]);
var state_24354__$1 = state_24354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24354__$1,(11),to,inst_24333);
} else {
if((state_val_24355 === (3))){
var inst_24352 = (state_24354[(2)]);
var state_24354__$1 = state_24354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24354__$1,inst_24352);
} else {
if((state_val_24355 === (12))){
var state_24354__$1 = state_24354;
var statearr_24362_24384 = state_24354__$1;
(statearr_24362_24384[(2)] = null);

(statearr_24362_24384[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (2))){
var state_24354__$1 = state_24354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24354__$1,(4),from);
} else {
if((state_val_24355 === (11))){
var inst_24343 = (state_24354[(2)]);
var state_24354__$1 = state_24354;
if(cljs.core.truth_(inst_24343)){
var statearr_24363_24385 = state_24354__$1;
(statearr_24363_24385[(1)] = (12));

} else {
var statearr_24364_24386 = state_24354__$1;
(statearr_24364_24386[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (9))){
var state_24354__$1 = state_24354;
var statearr_24365_24387 = state_24354__$1;
(statearr_24365_24387[(2)] = null);

(statearr_24365_24387[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (5))){
var state_24354__$1 = state_24354;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24366_24388 = state_24354__$1;
(statearr_24366_24388[(1)] = (8));

} else {
var statearr_24367_24389 = state_24354__$1;
(statearr_24367_24389[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (14))){
var inst_24348 = (state_24354[(2)]);
var state_24354__$1 = state_24354;
var statearr_24368_24390 = state_24354__$1;
(statearr_24368_24390[(2)] = inst_24348);

(statearr_24368_24390[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (10))){
var inst_24340 = (state_24354[(2)]);
var state_24354__$1 = state_24354;
var statearr_24369_24391 = state_24354__$1;
(statearr_24369_24391[(2)] = inst_24340);

(statearr_24369_24391[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24355 === (8))){
var inst_24337 = cljs.core.async.close_BANG_(to);
var state_24354__$1 = state_24354;
var statearr_24370_24392 = state_24354__$1;
(statearr_24370_24392[(2)] = inst_24337);

(statearr_24370_24392[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___24378))
;
return ((function (switch__12735__auto__,c__12815__auto___24378){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24374 = [null,null,null,null,null,null,null,null];
(statearr_24374[(0)] = state_machine__12736__auto__);

(statearr_24374[(1)] = (1));

return statearr_24374;
});
var state_machine__12736__auto____1 = (function (state_24354){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24354);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24375){if((e24375 instanceof Object)){
var ex__12739__auto__ = e24375;
var statearr_24376_24393 = state_24354;
(statearr_24376_24393[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24354);

return cljs.core.constant$keyword$83;
} else {
throw e24375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24394 = state_24354;
state_24354 = G__24394;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24354){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24378))
})();
var state__12817__auto__ = (function (){var statearr_24377 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24378);

return statearr_24377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24378))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__24580){
var vec__24581 = p__24580;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24581,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24581,(1),null);
var job = vec__24581;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12815__auto___24765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24765,res,vec__24581,v,p,job,jobs,results){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24765,res,vec__24581,v,p,job,jobs,results){
return (function (state_24586){
var state_val_24587 = (state_24586[(1)]);
if((state_val_24587 === (2))){
var inst_24583 = (state_24586[(2)]);
var inst_24584 = cljs.core.async.close_BANG_(res);
var state_24586__$1 = (function (){var statearr_24588 = state_24586;
(statearr_24588[(7)] = inst_24583);

return statearr_24588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24586__$1,inst_24584);
} else {
if((state_val_24587 === (1))){
var state_24586__$1 = state_24586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24586__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12815__auto___24765,res,vec__24581,v,p,job,jobs,results))
;
return ((function (switch__12735__auto__,c__12815__auto___24765,res,vec__24581,v,p,job,jobs,results){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24592 = [null,null,null,null,null,null,null,null];
(statearr_24592[(0)] = state_machine__12736__auto__);

(statearr_24592[(1)] = (1));

return statearr_24592;
});
var state_machine__12736__auto____1 = (function (state_24586){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24586);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24593){if((e24593 instanceof Object)){
var ex__12739__auto__ = e24593;
var statearr_24594_24766 = state_24586;
(statearr_24594_24766[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24586);

return cljs.core.constant$keyword$83;
} else {
throw e24593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24767 = state_24586;
state_24586 = G__24767;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24586){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24765,res,vec__24581,v,p,job,jobs,results))
})();
var state__12817__auto__ = (function (){var statearr_24595 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24765);

return statearr_24595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24765,res,vec__24581,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24596){
var vec__24597 = p__24596;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24597,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24597,(1),null);
var job = vec__24597;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__24598_24768 = v;
var G__24599_24769 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24598_24768,G__24599_24769) : xf.call(null,G__24598_24768,G__24599_24769));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4693__auto___24770 = n;
var __24771 = (0);
while(true){
if((__24771 < n__4693__auto___24770)){
var G__24600_24772 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24600_24772) {
case "async":
var c__12815__auto___24774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24771,c__12815__auto___24774,G__24600_24772,n__4693__auto___24770,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (__24771,c__12815__auto___24774,G__24600_24772,n__4693__auto___24770,jobs,results,process,async){
return (function (state_24613){
var state_val_24614 = (state_24613[(1)]);
if((state_val_24614 === (7))){
var inst_24609 = (state_24613[(2)]);
var state_24613__$1 = state_24613;
var statearr_24615_24775 = state_24613__$1;
(statearr_24615_24775[(2)] = inst_24609);

(statearr_24615_24775[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24614 === (6))){
var state_24613__$1 = state_24613;
var statearr_24616_24776 = state_24613__$1;
(statearr_24616_24776[(2)] = null);

(statearr_24616_24776[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24614 === (5))){
var state_24613__$1 = state_24613;
var statearr_24617_24777 = state_24613__$1;
(statearr_24617_24777[(2)] = null);

(statearr_24617_24777[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24614 === (4))){
var inst_24603 = (state_24613[(2)]);
var inst_24604 = async(inst_24603);
var state_24613__$1 = state_24613;
if(cljs.core.truth_(inst_24604)){
var statearr_24618_24778 = state_24613__$1;
(statearr_24618_24778[(1)] = (5));

} else {
var statearr_24619_24779 = state_24613__$1;
(statearr_24619_24779[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24614 === (3))){
var inst_24611 = (state_24613[(2)]);
var state_24613__$1 = state_24613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24613__$1,inst_24611);
} else {
if((state_val_24614 === (2))){
var state_24613__$1 = state_24613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24613__$1,(4),jobs);
} else {
if((state_val_24614 === (1))){
var state_24613__$1 = state_24613;
var statearr_24620_24780 = state_24613__$1;
(statearr_24620_24780[(2)] = null);

(statearr_24620_24780[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
});})(__24771,c__12815__auto___24774,G__24600_24772,n__4693__auto___24770,jobs,results,process,async))
;
return ((function (__24771,switch__12735__auto__,c__12815__auto___24774,G__24600_24772,n__4693__auto___24770,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24624 = [null,null,null,null,null,null,null];
(statearr_24624[(0)] = state_machine__12736__auto__);

(statearr_24624[(1)] = (1));

return statearr_24624;
});
var state_machine__12736__auto____1 = (function (state_24613){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24613);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24625){if((e24625 instanceof Object)){
var ex__12739__auto__ = e24625;
var statearr_24626_24781 = state_24613;
(statearr_24626_24781[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24613);

return cljs.core.constant$keyword$83;
} else {
throw e24625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24782 = state_24613;
state_24613 = G__24782;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24613){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(__24771,switch__12735__auto__,c__12815__auto___24774,G__24600_24772,n__4693__auto___24770,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24627 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24774);

return statearr_24627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(__24771,c__12815__auto___24774,G__24600_24772,n__4693__auto___24770,jobs,results,process,async))
);


break;
case "compute":
var c__12815__auto___24783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24771,c__12815__auto___24783,G__24600_24772,n__4693__auto___24770,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (__24771,c__12815__auto___24783,G__24600_24772,n__4693__auto___24770,jobs,results,process,async){
return (function (state_24640){
var state_val_24641 = (state_24640[(1)]);
if((state_val_24641 === (7))){
var inst_24636 = (state_24640[(2)]);
var state_24640__$1 = state_24640;
var statearr_24642_24784 = state_24640__$1;
(statearr_24642_24784[(2)] = inst_24636);

(statearr_24642_24784[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24641 === (6))){
var state_24640__$1 = state_24640;
var statearr_24643_24785 = state_24640__$1;
(statearr_24643_24785[(2)] = null);

(statearr_24643_24785[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24641 === (5))){
var state_24640__$1 = state_24640;
var statearr_24644_24786 = state_24640__$1;
(statearr_24644_24786[(2)] = null);

(statearr_24644_24786[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24641 === (4))){
var inst_24630 = (state_24640[(2)]);
var inst_24631 = process(inst_24630);
var state_24640__$1 = state_24640;
if(cljs.core.truth_(inst_24631)){
var statearr_24645_24787 = state_24640__$1;
(statearr_24645_24787[(1)] = (5));

} else {
var statearr_24646_24788 = state_24640__$1;
(statearr_24646_24788[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24641 === (3))){
var inst_24638 = (state_24640[(2)]);
var state_24640__$1 = state_24640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24640__$1,inst_24638);
} else {
if((state_val_24641 === (2))){
var state_24640__$1 = state_24640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24640__$1,(4),jobs);
} else {
if((state_val_24641 === (1))){
var state_24640__$1 = state_24640;
var statearr_24647_24789 = state_24640__$1;
(statearr_24647_24789[(2)] = null);

(statearr_24647_24789[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
});})(__24771,c__12815__auto___24783,G__24600_24772,n__4693__auto___24770,jobs,results,process,async))
;
return ((function (__24771,switch__12735__auto__,c__12815__auto___24783,G__24600_24772,n__4693__auto___24770,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24651 = [null,null,null,null,null,null,null];
(statearr_24651[(0)] = state_machine__12736__auto__);

(statearr_24651[(1)] = (1));

return statearr_24651;
});
var state_machine__12736__auto____1 = (function (state_24640){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24640);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24652){if((e24652 instanceof Object)){
var ex__12739__auto__ = e24652;
var statearr_24653_24790 = state_24640;
(statearr_24653_24790[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24640);

return cljs.core.constant$keyword$83;
} else {
throw e24652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24791 = state_24640;
state_24640 = G__24791;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24640){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(__24771,switch__12735__auto__,c__12815__auto___24783,G__24600_24772,n__4693__auto___24770,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24654 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24783);

return statearr_24654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(__24771,c__12815__auto___24783,G__24600_24772,n__4693__auto___24770,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24792 = (__24771 + (1));
__24771 = G__24792;
continue;
} else {
}
break;
}

var c__12815__auto___24793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24793,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24793,jobs,results,process,async){
return (function (state_24676){
var state_val_24677 = (state_24676[(1)]);
if((state_val_24677 === (9))){
var inst_24669 = (state_24676[(2)]);
var state_24676__$1 = (function (){var statearr_24678 = state_24676;
(statearr_24678[(7)] = inst_24669);

return statearr_24678;
})();
var statearr_24679_24794 = state_24676__$1;
(statearr_24679_24794[(2)] = null);

(statearr_24679_24794[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24677 === (8))){
var inst_24662 = (state_24676[(8)]);
var inst_24667 = (state_24676[(2)]);
var state_24676__$1 = (function (){var statearr_24680 = state_24676;
(statearr_24680[(9)] = inst_24667);

return statearr_24680;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24676__$1,(9),results,inst_24662);
} else {
if((state_val_24677 === (7))){
var inst_24672 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
var statearr_24681_24795 = state_24676__$1;
(statearr_24681_24795[(2)] = inst_24672);

(statearr_24681_24795[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24677 === (6))){
var inst_24657 = (state_24676[(10)]);
var inst_24662 = (state_24676[(8)]);
var inst_24662__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24663 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24664 = [inst_24657,inst_24662__$1];
var inst_24665 = (new cljs.core.PersistentVector(null,2,(5),inst_24663,inst_24664,null));
var state_24676__$1 = (function (){var statearr_24682 = state_24676;
(statearr_24682[(8)] = inst_24662__$1);

return statearr_24682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24676__$1,(8),jobs,inst_24665);
} else {
if((state_val_24677 === (5))){
var inst_24660 = cljs.core.async.close_BANG_(jobs);
var state_24676__$1 = state_24676;
var statearr_24683_24796 = state_24676__$1;
(statearr_24683_24796[(2)] = inst_24660);

(statearr_24683_24796[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24677 === (4))){
var inst_24657 = (state_24676[(10)]);
var inst_24657__$1 = (state_24676[(2)]);
var inst_24658 = (inst_24657__$1 == null);
var state_24676__$1 = (function (){var statearr_24684 = state_24676;
(statearr_24684[(10)] = inst_24657__$1);

return statearr_24684;
})();
if(cljs.core.truth_(inst_24658)){
var statearr_24685_24797 = state_24676__$1;
(statearr_24685_24797[(1)] = (5));

} else {
var statearr_24686_24798 = state_24676__$1;
(statearr_24686_24798[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24677 === (3))){
var inst_24674 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24676__$1,inst_24674);
} else {
if((state_val_24677 === (2))){
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24676__$1,(4),from);
} else {
if((state_val_24677 === (1))){
var state_24676__$1 = state_24676;
var statearr_24687_24799 = state_24676__$1;
(statearr_24687_24799[(2)] = null);

(statearr_24687_24799[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___24793,jobs,results,process,async))
;
return ((function (switch__12735__auto__,c__12815__auto___24793,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24691[(0)] = state_machine__12736__auto__);

(statearr_24691[(1)] = (1));

return statearr_24691;
});
var state_machine__12736__auto____1 = (function (state_24676){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24676);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24692){if((e24692 instanceof Object)){
var ex__12739__auto__ = e24692;
var statearr_24693_24800 = state_24676;
(statearr_24693_24800[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24676);

return cljs.core.constant$keyword$83;
} else {
throw e24692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24801 = state_24676;
state_24676 = G__24801;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24676){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24793,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24694 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24793);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24793,jobs,results,process,async))
);


var c__12815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto__,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto__,jobs,results,process,async){
return (function (state_24732){
var state_val_24733 = (state_24732[(1)]);
if((state_val_24733 === (7))){
var inst_24728 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24734_24802 = state_24732__$1;
(statearr_24734_24802[(2)] = inst_24728);

(statearr_24734_24802[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (20))){
var state_24732__$1 = state_24732;
var statearr_24735_24803 = state_24732__$1;
(statearr_24735_24803[(2)] = null);

(statearr_24735_24803[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (1))){
var state_24732__$1 = state_24732;
var statearr_24736_24804 = state_24732__$1;
(statearr_24736_24804[(2)] = null);

(statearr_24736_24804[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (4))){
var inst_24697 = (state_24732[(7)]);
var inst_24697__$1 = (state_24732[(2)]);
var inst_24698 = (inst_24697__$1 == null);
var state_24732__$1 = (function (){var statearr_24737 = state_24732;
(statearr_24737[(7)] = inst_24697__$1);

return statearr_24737;
})();
if(cljs.core.truth_(inst_24698)){
var statearr_24738_24805 = state_24732__$1;
(statearr_24738_24805[(1)] = (5));

} else {
var statearr_24739_24806 = state_24732__$1;
(statearr_24739_24806[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (15))){
var inst_24710 = (state_24732[(8)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24732__$1,(18),to,inst_24710);
} else {
if((state_val_24733 === (21))){
var inst_24723 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24740_24807 = state_24732__$1;
(statearr_24740_24807[(2)] = inst_24723);

(statearr_24740_24807[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (13))){
var inst_24725 = (state_24732[(2)]);
var state_24732__$1 = (function (){var statearr_24741 = state_24732;
(statearr_24741[(9)] = inst_24725);

return statearr_24741;
})();
var statearr_24742_24808 = state_24732__$1;
(statearr_24742_24808[(2)] = null);

(statearr_24742_24808[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (6))){
var inst_24697 = (state_24732[(7)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24732__$1,(11),inst_24697);
} else {
if((state_val_24733 === (17))){
var inst_24718 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
if(cljs.core.truth_(inst_24718)){
var statearr_24743_24809 = state_24732__$1;
(statearr_24743_24809[(1)] = (19));

} else {
var statearr_24744_24810 = state_24732__$1;
(statearr_24744_24810[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (3))){
var inst_24730 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24732__$1,inst_24730);
} else {
if((state_val_24733 === (12))){
var inst_24707 = (state_24732[(10)]);
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24732__$1,(14),inst_24707);
} else {
if((state_val_24733 === (2))){
var state_24732__$1 = state_24732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24732__$1,(4),results);
} else {
if((state_val_24733 === (19))){
var state_24732__$1 = state_24732;
var statearr_24745_24811 = state_24732__$1;
(statearr_24745_24811[(2)] = null);

(statearr_24745_24811[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (11))){
var inst_24707 = (state_24732[(2)]);
var state_24732__$1 = (function (){var statearr_24746 = state_24732;
(statearr_24746[(10)] = inst_24707);

return statearr_24746;
})();
var statearr_24747_24812 = state_24732__$1;
(statearr_24747_24812[(2)] = null);

(statearr_24747_24812[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (9))){
var state_24732__$1 = state_24732;
var statearr_24748_24813 = state_24732__$1;
(statearr_24748_24813[(2)] = null);

(statearr_24748_24813[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (5))){
var state_24732__$1 = state_24732;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24749_24814 = state_24732__$1;
(statearr_24749_24814[(1)] = (8));

} else {
var statearr_24750_24815 = state_24732__$1;
(statearr_24750_24815[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (14))){
var inst_24712 = (state_24732[(11)]);
var inst_24710 = (state_24732[(8)]);
var inst_24710__$1 = (state_24732[(2)]);
var inst_24711 = (inst_24710__$1 == null);
var inst_24712__$1 = cljs.core.not(inst_24711);
var state_24732__$1 = (function (){var statearr_24751 = state_24732;
(statearr_24751[(11)] = inst_24712__$1);

(statearr_24751[(8)] = inst_24710__$1);

return statearr_24751;
})();
if(inst_24712__$1){
var statearr_24752_24816 = state_24732__$1;
(statearr_24752_24816[(1)] = (15));

} else {
var statearr_24753_24817 = state_24732__$1;
(statearr_24753_24817[(1)] = (16));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (16))){
var inst_24712 = (state_24732[(11)]);
var state_24732__$1 = state_24732;
var statearr_24754_24818 = state_24732__$1;
(statearr_24754_24818[(2)] = inst_24712);

(statearr_24754_24818[(1)] = (17));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (10))){
var inst_24704 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24755_24819 = state_24732__$1;
(statearr_24755_24819[(2)] = inst_24704);

(statearr_24755_24819[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (18))){
var inst_24715 = (state_24732[(2)]);
var state_24732__$1 = state_24732;
var statearr_24756_24820 = state_24732__$1;
(statearr_24756_24820[(2)] = inst_24715);

(statearr_24756_24820[(1)] = (17));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24733 === (8))){
var inst_24701 = cljs.core.async.close_BANG_(to);
var state_24732__$1 = state_24732;
var statearr_24757_24821 = state_24732__$1;
(statearr_24757_24821[(2)] = inst_24701);

(statearr_24757_24821[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto__,jobs,results,process,async))
;
return ((function (switch__12735__auto__,c__12815__auto__,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24761 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24761[(0)] = state_machine__12736__auto__);

(statearr_24761[(1)] = (1));

return statearr_24761;
});
var state_machine__12736__auto____1 = (function (state_24732){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24732);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24762){if((e24762 instanceof Object)){
var ex__12739__auto__ = e24762;
var statearr_24763_24822 = state_24732;
(statearr_24763_24822[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24732);

return cljs.core.constant$keyword$83;
} else {
throw e24762;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24823 = state_24732;
state_24732 = G__24823;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24732){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24764 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_24764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto__,jobs,results,process,async))
);

return c__12815__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$89);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$90);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12815__auto___24946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24946,tc,fc){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24946,tc,fc){
return (function (state_24920){
var state_val_24921 = (state_24920[(1)]);
if((state_val_24921 === (7))){
var inst_24916 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
var statearr_24922_24947 = state_24920__$1;
(statearr_24922_24947[(2)] = inst_24916);

(statearr_24922_24947[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (1))){
var state_24920__$1 = state_24920;
var statearr_24923_24948 = state_24920__$1;
(statearr_24923_24948[(2)] = null);

(statearr_24923_24948[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (4))){
var inst_24897 = (state_24920[(7)]);
var inst_24897__$1 = (state_24920[(2)]);
var inst_24898 = (inst_24897__$1 == null);
var state_24920__$1 = (function (){var statearr_24924 = state_24920;
(statearr_24924[(7)] = inst_24897__$1);

return statearr_24924;
})();
if(cljs.core.truth_(inst_24898)){
var statearr_24925_24949 = state_24920__$1;
(statearr_24925_24949[(1)] = (5));

} else {
var statearr_24926_24950 = state_24920__$1;
(statearr_24926_24950[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (13))){
var state_24920__$1 = state_24920;
var statearr_24927_24951 = state_24920__$1;
(statearr_24927_24951[(2)] = null);

(statearr_24927_24951[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (6))){
var inst_24897 = (state_24920[(7)]);
var inst_24903 = (function (){var G__24928 = inst_24897;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24928) : p.call(null,G__24928));
})();
var state_24920__$1 = state_24920;
if(cljs.core.truth_(inst_24903)){
var statearr_24929_24952 = state_24920__$1;
(statearr_24929_24952[(1)] = (9));

} else {
var statearr_24930_24953 = state_24920__$1;
(statearr_24930_24953[(1)] = (10));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (3))){
var inst_24918 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24920__$1,inst_24918);
} else {
if((state_val_24921 === (12))){
var state_24920__$1 = state_24920;
var statearr_24931_24954 = state_24920__$1;
(statearr_24931_24954[(2)] = null);

(statearr_24931_24954[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (2))){
var state_24920__$1 = state_24920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24920__$1,(4),ch);
} else {
if((state_val_24921 === (11))){
var inst_24897 = (state_24920[(7)]);
var inst_24907 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24920__$1,(8),inst_24907,inst_24897);
} else {
if((state_val_24921 === (9))){
var state_24920__$1 = state_24920;
var statearr_24932_24955 = state_24920__$1;
(statearr_24932_24955[(2)] = tc);

(statearr_24932_24955[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (5))){
var inst_24900 = cljs.core.async.close_BANG_(tc);
var inst_24901 = cljs.core.async.close_BANG_(fc);
var state_24920__$1 = (function (){var statearr_24933 = state_24920;
(statearr_24933[(8)] = inst_24900);

return statearr_24933;
})();
var statearr_24934_24956 = state_24920__$1;
(statearr_24934_24956[(2)] = inst_24901);

(statearr_24934_24956[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (14))){
var inst_24914 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
var statearr_24935_24957 = state_24920__$1;
(statearr_24935_24957[(2)] = inst_24914);

(statearr_24935_24957[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (10))){
var state_24920__$1 = state_24920;
var statearr_24936_24958 = state_24920__$1;
(statearr_24936_24958[(2)] = fc);

(statearr_24936_24958[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24921 === (8))){
var inst_24909 = (state_24920[(2)]);
var state_24920__$1 = state_24920;
if(cljs.core.truth_(inst_24909)){
var statearr_24937_24959 = state_24920__$1;
(statearr_24937_24959[(1)] = (12));

} else {
var statearr_24938_24960 = state_24920__$1;
(statearr_24938_24960[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___24946,tc,fc))
;
return ((function (switch__12735__auto__,c__12815__auto___24946,tc,fc){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24942 = [null,null,null,null,null,null,null,null,null];
(statearr_24942[(0)] = state_machine__12736__auto__);

(statearr_24942[(1)] = (1));

return statearr_24942;
});
var state_machine__12736__auto____1 = (function (state_24920){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24920);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24943){if((e24943 instanceof Object)){
var ex__12739__auto__ = e24943;
var statearr_24944_24961 = state_24920;
(statearr_24944_24961[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24920);

return cljs.core.constant$keyword$83;
} else {
throw e24943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24962 = state_24920;
state_24920 = G__24962;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24920){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24946,tc,fc))
})();
var state__12817__auto__ = (function (){var statearr_24945 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24946);

return statearr_24945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24946,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__12815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto__){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto__){
return (function (state_25011){
var state_val_25012 = (state_25011[(1)]);
if((state_val_25012 === (7))){
var inst_25007 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25013_25031 = state_25011__$1;
(statearr_25013_25031[(2)] = inst_25007);

(statearr_25013_25031[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25012 === (6))){
var inst_24997 = (state_25011[(7)]);
var inst_25000 = (state_25011[(8)]);
var inst_25004 = (function (){var G__25014 = inst_24997;
var G__25015 = inst_25000;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25014,G__25015) : f.call(null,G__25014,G__25015));
})();
var inst_24997__$1 = inst_25004;
var state_25011__$1 = (function (){var statearr_25016 = state_25011;
(statearr_25016[(7)] = inst_24997__$1);

return statearr_25016;
})();
var statearr_25017_25032 = state_25011__$1;
(statearr_25017_25032[(2)] = null);

(statearr_25017_25032[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25012 === (5))){
var inst_24997 = (state_25011[(7)]);
var state_25011__$1 = state_25011;
var statearr_25018_25033 = state_25011__$1;
(statearr_25018_25033[(2)] = inst_24997);

(statearr_25018_25033[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25012 === (4))){
var inst_25000 = (state_25011[(8)]);
var inst_25000__$1 = (state_25011[(2)]);
var inst_25001 = (inst_25000__$1 == null);
var state_25011__$1 = (function (){var statearr_25019 = state_25011;
(statearr_25019[(8)] = inst_25000__$1);

return statearr_25019;
})();
if(cljs.core.truth_(inst_25001)){
var statearr_25020_25034 = state_25011__$1;
(statearr_25020_25034[(1)] = (5));

} else {
var statearr_25021_25035 = state_25011__$1;
(statearr_25021_25035[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25012 === (3))){
var inst_25009 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25011__$1,inst_25009);
} else {
if((state_val_25012 === (2))){
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25011__$1,(4),ch);
} else {
if((state_val_25012 === (1))){
var inst_24997 = init;
var state_25011__$1 = (function (){var statearr_25022 = state_25011;
(statearr_25022[(7)] = inst_24997);

return statearr_25022;
})();
var statearr_25023_25036 = state_25011__$1;
(statearr_25023_25036[(2)] = null);

(statearr_25023_25036[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
});})(c__12815__auto__))
;
return ((function (switch__12735__auto__,c__12815__auto__){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_25027 = [null,null,null,null,null,null,null,null,null];
(statearr_25027[(0)] = state_machine__12736__auto__);

(statearr_25027[(1)] = (1));

return statearr_25027;
});
var state_machine__12736__auto____1 = (function (state_25011){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25011);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25028){if((e25028 instanceof Object)){
var ex__12739__auto__ = e25028;
var statearr_25029_25037 = state_25011;
(statearr_25029_25037[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25011);

return cljs.core.constant$keyword$83;
} else {
throw e25028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25038 = state_25011;
state_25011 = G__25038;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25011){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_25030 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_25030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto__))
);

return c__12815__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__12815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto__){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto__){
return (function (state_25115){
var state_val_25116 = (state_25115[(1)]);
if((state_val_25116 === (7))){
var inst_25097 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
var statearr_25117_25140 = state_25115__$1;
(statearr_25117_25140[(2)] = inst_25097);

(statearr_25117_25140[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (1))){
var inst_25091 = cljs.core.seq(coll);
var inst_25092 = inst_25091;
var state_25115__$1 = (function (){var statearr_25118 = state_25115;
(statearr_25118[(7)] = inst_25092);

return statearr_25118;
})();
var statearr_25119_25141 = state_25115__$1;
(statearr_25119_25141[(2)] = null);

(statearr_25119_25141[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (4))){
var inst_25092 = (state_25115[(7)]);
var inst_25095 = cljs.core.first(inst_25092);
var state_25115__$1 = state_25115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25115__$1,(7),ch,inst_25095);
} else {
if((state_val_25116 === (13))){
var inst_25109 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
var statearr_25120_25142 = state_25115__$1;
(statearr_25120_25142[(2)] = inst_25109);

(statearr_25120_25142[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (6))){
var inst_25100 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
if(cljs.core.truth_(inst_25100)){
var statearr_25121_25143 = state_25115__$1;
(statearr_25121_25143[(1)] = (8));

} else {
var statearr_25122_25144 = state_25115__$1;
(statearr_25122_25144[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (3))){
var inst_25113 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25115__$1,inst_25113);
} else {
if((state_val_25116 === (12))){
var state_25115__$1 = state_25115;
var statearr_25123_25145 = state_25115__$1;
(statearr_25123_25145[(2)] = null);

(statearr_25123_25145[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (2))){
var inst_25092 = (state_25115[(7)]);
var state_25115__$1 = state_25115;
if(cljs.core.truth_(inst_25092)){
var statearr_25124_25146 = state_25115__$1;
(statearr_25124_25146[(1)] = (4));

} else {
var statearr_25125_25147 = state_25115__$1;
(statearr_25125_25147[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (11))){
var inst_25106 = cljs.core.async.close_BANG_(ch);
var state_25115__$1 = state_25115;
var statearr_25126_25148 = state_25115__$1;
(statearr_25126_25148[(2)] = inst_25106);

(statearr_25126_25148[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (9))){
var state_25115__$1 = state_25115;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25127_25149 = state_25115__$1;
(statearr_25127_25149[(1)] = (11));

} else {
var statearr_25128_25150 = state_25115__$1;
(statearr_25128_25150[(1)] = (12));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (5))){
var inst_25092 = (state_25115[(7)]);
var state_25115__$1 = state_25115;
var statearr_25129_25151 = state_25115__$1;
(statearr_25129_25151[(2)] = inst_25092);

(statearr_25129_25151[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (10))){
var inst_25111 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
var statearr_25130_25152 = state_25115__$1;
(statearr_25130_25152[(2)] = inst_25111);

(statearr_25130_25152[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25116 === (8))){
var inst_25092 = (state_25115[(7)]);
var inst_25102 = cljs.core.next(inst_25092);
var inst_25092__$1 = inst_25102;
var state_25115__$1 = (function (){var statearr_25131 = state_25115;
(statearr_25131[(7)] = inst_25092__$1);

return statearr_25131;
})();
var statearr_25132_25153 = state_25115__$1;
(statearr_25132_25153[(2)] = null);

(statearr_25132_25153[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto__))
;
return ((function (switch__12735__auto__,c__12815__auto__){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_25136 = [null,null,null,null,null,null,null,null];
(statearr_25136[(0)] = state_machine__12736__auto__);

(statearr_25136[(1)] = (1));

return statearr_25136;
});
var state_machine__12736__auto____1 = (function (state_25115){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25115);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25137){if((e25137 instanceof Object)){
var ex__12739__auto__ = e25137;
var statearr_25138_25154 = state_25115;
(statearr_25138_25154[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25115);

return cljs.core.constant$keyword$83;
} else {
throw e25137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25155 = state_25115;
state_25115 = G__25155;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25115){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_25139 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_25139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto__))
);

return c__12815__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25157 = {};
return obj25157;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3794__auto__ = _;
if(and__3794__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4450__auto__ = (((_ == null))?null:_);
return (function (){var or__3806__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__25161 = x__4450__auto__;
return goog.typeOf(G__25161);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25163 = {};
return obj25163;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__25167 = x__4450__auto__;
return goog.typeOf(G__25167);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__25171 = x__4450__auto__;
return goog.typeOf(G__25171);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__25175 = x__4450__auto__;
return goog.typeOf(G__25175);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__25405 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25405) : cljs.core.atom.call(null,G__25405));
})();
var m = (function (){
if(typeof cljs.core.async.t25406 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25406 = (function (cs,ch,mult,meta25407){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25407 = meta25407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25406.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25406.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25406.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25406.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25409_25634 = self__.cs;
var G__25410_25635 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25409_25634,G__25410_25635) : cljs.core.reset_BANG_.call(null,G__25409_25634,G__25410_25635));

return null;
});})(cs))
;

cljs.core.async.t25406.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25408){
var self__ = this;
var _25408__$1 = this;
return self__.meta25407;
});})(cs))
;

cljs.core.async.t25406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25408,meta25407__$1){
var self__ = this;
var _25408__$1 = this;
return (new cljs.core.async.t25406(self__.cs,self__.ch,self__.mult,meta25407__$1));
});})(cs))
;

cljs.core.async.t25406.cljs$lang$type = true;

cljs.core.async.t25406.cljs$lang$ctorStr = "cljs.core.async/t25406";

cljs.core.async.t25406.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t25406");
});})(cs))
;

cljs.core.async.__GT_t25406 = ((function (cs){
return (function __GT_t25406(cs__$1,ch__$1,mult__$1,meta25407){
return (new cljs.core.async.t25406(cs__$1,ch__$1,mult__$1,meta25407));
});})(cs))
;

}

return (new cljs.core.async.t25406(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__25411 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25411) : cljs.core.atom.call(null,G__25411));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12815__auto___25636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___25636,cs,m,dchan,dctr,done){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___25636,cs,m,dchan,dctr,done){
return (function (state_25542){
var state_val_25543 = (state_25542[(1)]);
if((state_val_25543 === (7))){
var inst_25538 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25544_25637 = state_25542__$1;
(statearr_25544_25637[(2)] = inst_25538);

(statearr_25544_25637[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (20))){
var inst_25443 = (state_25542[(7)]);
var inst_25453 = cljs.core.first(inst_25443);
var inst_25454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25453,(0),null);
var inst_25455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25453,(1),null);
var state_25542__$1 = (function (){var statearr_25545 = state_25542;
(statearr_25545[(8)] = inst_25454);

return statearr_25545;
})();
if(cljs.core.truth_(inst_25455)){
var statearr_25546_25638 = state_25542__$1;
(statearr_25546_25638[(1)] = (22));

} else {
var statearr_25547_25639 = state_25542__$1;
(statearr_25547_25639[(1)] = (23));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (27))){
var inst_25485 = (state_25542[(9)]);
var inst_25490 = (state_25542[(10)]);
var inst_25483 = (state_25542[(11)]);
var inst_25414 = (state_25542[(12)]);
var inst_25490__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25483,inst_25485);
var inst_25491 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25490__$1,inst_25414,done);
var state_25542__$1 = (function (){var statearr_25548 = state_25542;
(statearr_25548[(10)] = inst_25490__$1);

return statearr_25548;
})();
if(cljs.core.truth_(inst_25491)){
var statearr_25549_25640 = state_25542__$1;
(statearr_25549_25640[(1)] = (30));

} else {
var statearr_25550_25641 = state_25542__$1;
(statearr_25550_25641[(1)] = (31));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (1))){
var state_25542__$1 = state_25542;
var statearr_25551_25642 = state_25542__$1;
(statearr_25551_25642[(2)] = null);

(statearr_25551_25642[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (24))){
var inst_25443 = (state_25542[(7)]);
var inst_25460 = (state_25542[(2)]);
var inst_25461 = cljs.core.next(inst_25443);
var inst_25423 = inst_25461;
var inst_25424 = null;
var inst_25425 = (0);
var inst_25426 = (0);
var state_25542__$1 = (function (){var statearr_25552 = state_25542;
(statearr_25552[(13)] = inst_25423);

(statearr_25552[(14)] = inst_25425);

(statearr_25552[(15)] = inst_25460);

(statearr_25552[(16)] = inst_25424);

(statearr_25552[(17)] = inst_25426);

return statearr_25552;
})();
var statearr_25553_25643 = state_25542__$1;
(statearr_25553_25643[(2)] = null);

(statearr_25553_25643[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (39))){
var state_25542__$1 = state_25542;
var statearr_25557_25644 = state_25542__$1;
(statearr_25557_25644[(2)] = null);

(statearr_25557_25644[(1)] = (41));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (4))){
var inst_25414 = (state_25542[(12)]);
var inst_25414__$1 = (state_25542[(2)]);
var inst_25415 = (inst_25414__$1 == null);
var state_25542__$1 = (function (){var statearr_25558 = state_25542;
(statearr_25558[(12)] = inst_25414__$1);

return statearr_25558;
})();
if(cljs.core.truth_(inst_25415)){
var statearr_25559_25645 = state_25542__$1;
(statearr_25559_25645[(1)] = (5));

} else {
var statearr_25560_25646 = state_25542__$1;
(statearr_25560_25646[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (15))){
var inst_25423 = (state_25542[(13)]);
var inst_25425 = (state_25542[(14)]);
var inst_25424 = (state_25542[(16)]);
var inst_25426 = (state_25542[(17)]);
var inst_25439 = (state_25542[(2)]);
var inst_25440 = (inst_25426 + (1));
var tmp25554 = inst_25423;
var tmp25555 = inst_25425;
var tmp25556 = inst_25424;
var inst_25423__$1 = tmp25554;
var inst_25424__$1 = tmp25556;
var inst_25425__$1 = tmp25555;
var inst_25426__$1 = inst_25440;
var state_25542__$1 = (function (){var statearr_25561 = state_25542;
(statearr_25561[(13)] = inst_25423__$1);

(statearr_25561[(14)] = inst_25425__$1);

(statearr_25561[(16)] = inst_25424__$1);

(statearr_25561[(18)] = inst_25439);

(statearr_25561[(17)] = inst_25426__$1);

return statearr_25561;
})();
var statearr_25562_25647 = state_25542__$1;
(statearr_25562_25647[(2)] = null);

(statearr_25562_25647[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (21))){
var inst_25464 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25566_25648 = state_25542__$1;
(statearr_25566_25648[(2)] = inst_25464);

(statearr_25566_25648[(1)] = (18));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (31))){
var inst_25490 = (state_25542[(10)]);
var inst_25494 = done(null);
var inst_25495 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25490);
var state_25542__$1 = (function (){var statearr_25567 = state_25542;
(statearr_25567[(19)] = inst_25494);

return statearr_25567;
})();
var statearr_25568_25649 = state_25542__$1;
(statearr_25568_25649[(2)] = inst_25495);

(statearr_25568_25649[(1)] = (32));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (32))){
var inst_25482 = (state_25542[(20)]);
var inst_25485 = (state_25542[(9)]);
var inst_25483 = (state_25542[(11)]);
var inst_25484 = (state_25542[(21)]);
var inst_25497 = (state_25542[(2)]);
var inst_25498 = (inst_25485 + (1));
var tmp25563 = inst_25482;
var tmp25564 = inst_25483;
var tmp25565 = inst_25484;
var inst_25482__$1 = tmp25563;
var inst_25483__$1 = tmp25564;
var inst_25484__$1 = tmp25565;
var inst_25485__$1 = inst_25498;
var state_25542__$1 = (function (){var statearr_25569 = state_25542;
(statearr_25569[(20)] = inst_25482__$1);

(statearr_25569[(9)] = inst_25485__$1);

(statearr_25569[(11)] = inst_25483__$1);

(statearr_25569[(21)] = inst_25484__$1);

(statearr_25569[(22)] = inst_25497);

return statearr_25569;
})();
var statearr_25570_25650 = state_25542__$1;
(statearr_25570_25650[(2)] = null);

(statearr_25570_25650[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (40))){
var inst_25510 = (state_25542[(23)]);
var inst_25514 = done(null);
var inst_25515 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25510);
var state_25542__$1 = (function (){var statearr_25571 = state_25542;
(statearr_25571[(24)] = inst_25514);

return statearr_25571;
})();
var statearr_25572_25651 = state_25542__$1;
(statearr_25572_25651[(2)] = inst_25515);

(statearr_25572_25651[(1)] = (41));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (33))){
var inst_25501 = (state_25542[(25)]);
var inst_25503 = cljs.core.chunked_seq_QMARK_(inst_25501);
var state_25542__$1 = state_25542;
if(inst_25503){
var statearr_25573_25652 = state_25542__$1;
(statearr_25573_25652[(1)] = (36));

} else {
var statearr_25574_25653 = state_25542__$1;
(statearr_25574_25653[(1)] = (37));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (13))){
var inst_25433 = (state_25542[(26)]);
var inst_25436 = cljs.core.async.close_BANG_(inst_25433);
var state_25542__$1 = state_25542;
var statearr_25575_25654 = state_25542__$1;
(statearr_25575_25654[(2)] = inst_25436);

(statearr_25575_25654[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (22))){
var inst_25454 = (state_25542[(8)]);
var inst_25457 = cljs.core.async.close_BANG_(inst_25454);
var state_25542__$1 = state_25542;
var statearr_25576_25655 = state_25542__$1;
(statearr_25576_25655[(2)] = inst_25457);

(statearr_25576_25655[(1)] = (24));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (36))){
var inst_25501 = (state_25542[(25)]);
var inst_25505 = cljs.core.chunk_first(inst_25501);
var inst_25506 = cljs.core.chunk_rest(inst_25501);
var inst_25507 = cljs.core.count(inst_25505);
var inst_25482 = inst_25506;
var inst_25483 = inst_25505;
var inst_25484 = inst_25507;
var inst_25485 = (0);
var state_25542__$1 = (function (){var statearr_25577 = state_25542;
(statearr_25577[(20)] = inst_25482);

(statearr_25577[(9)] = inst_25485);

(statearr_25577[(11)] = inst_25483);

(statearr_25577[(21)] = inst_25484);

return statearr_25577;
})();
var statearr_25578_25656 = state_25542__$1;
(statearr_25578_25656[(2)] = null);

(statearr_25578_25656[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (41))){
var inst_25501 = (state_25542[(25)]);
var inst_25517 = (state_25542[(2)]);
var inst_25518 = cljs.core.next(inst_25501);
var inst_25482 = inst_25518;
var inst_25483 = null;
var inst_25484 = (0);
var inst_25485 = (0);
var state_25542__$1 = (function (){var statearr_25579 = state_25542;
(statearr_25579[(20)] = inst_25482);

(statearr_25579[(9)] = inst_25485);

(statearr_25579[(11)] = inst_25483);

(statearr_25579[(21)] = inst_25484);

(statearr_25579[(27)] = inst_25517);

return statearr_25579;
})();
var statearr_25580_25657 = state_25542__$1;
(statearr_25580_25657[(2)] = null);

(statearr_25580_25657[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (43))){
var state_25542__$1 = state_25542;
var statearr_25581_25658 = state_25542__$1;
(statearr_25581_25658[(2)] = null);

(statearr_25581_25658[(1)] = (44));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (29))){
var inst_25526 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25582_25659 = state_25542__$1;
(statearr_25582_25659[(2)] = inst_25526);

(statearr_25582_25659[(1)] = (26));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (44))){
var inst_25535 = (state_25542[(2)]);
var state_25542__$1 = (function (){var statearr_25583 = state_25542;
(statearr_25583[(28)] = inst_25535);

return statearr_25583;
})();
var statearr_25584_25660 = state_25542__$1;
(statearr_25584_25660[(2)] = null);

(statearr_25584_25660[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (6))){
var inst_25474 = (state_25542[(29)]);
var inst_25473 = (function (){var G__25585 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25585) : cljs.core.deref.call(null,G__25585));
})();
var inst_25474__$1 = cljs.core.keys(inst_25473);
var inst_25475 = cljs.core.count(inst_25474__$1);
var inst_25476 = (function (){var G__25586 = dctr;
var G__25587 = inst_25475;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25586,G__25587) : cljs.core.reset_BANG_.call(null,G__25586,G__25587));
})();
var inst_25481 = cljs.core.seq(inst_25474__$1);
var inst_25482 = inst_25481;
var inst_25483 = null;
var inst_25484 = (0);
var inst_25485 = (0);
var state_25542__$1 = (function (){var statearr_25588 = state_25542;
(statearr_25588[(20)] = inst_25482);

(statearr_25588[(9)] = inst_25485);

(statearr_25588[(11)] = inst_25483);

(statearr_25588[(21)] = inst_25484);

(statearr_25588[(29)] = inst_25474__$1);

(statearr_25588[(30)] = inst_25476);

return statearr_25588;
})();
var statearr_25589_25661 = state_25542__$1;
(statearr_25589_25661[(2)] = null);

(statearr_25589_25661[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (28))){
var inst_25482 = (state_25542[(20)]);
var inst_25501 = (state_25542[(25)]);
var inst_25501__$1 = cljs.core.seq(inst_25482);
var state_25542__$1 = (function (){var statearr_25590 = state_25542;
(statearr_25590[(25)] = inst_25501__$1);

return statearr_25590;
})();
if(inst_25501__$1){
var statearr_25591_25662 = state_25542__$1;
(statearr_25591_25662[(1)] = (33));

} else {
var statearr_25592_25663 = state_25542__$1;
(statearr_25592_25663[(1)] = (34));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (25))){
var inst_25485 = (state_25542[(9)]);
var inst_25484 = (state_25542[(21)]);
var inst_25487 = (inst_25485 < inst_25484);
var inst_25488 = inst_25487;
var state_25542__$1 = state_25542;
if(cljs.core.truth_(inst_25488)){
var statearr_25593_25664 = state_25542__$1;
(statearr_25593_25664[(1)] = (27));

} else {
var statearr_25594_25665 = state_25542__$1;
(statearr_25594_25665[(1)] = (28));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (34))){
var state_25542__$1 = state_25542;
var statearr_25595_25666 = state_25542__$1;
(statearr_25595_25666[(2)] = null);

(statearr_25595_25666[(1)] = (35));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (17))){
var state_25542__$1 = state_25542;
var statearr_25596_25667 = state_25542__$1;
(statearr_25596_25667[(2)] = null);

(statearr_25596_25667[(1)] = (18));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (3))){
var inst_25540 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25542__$1,inst_25540);
} else {
if((state_val_25543 === (12))){
var inst_25469 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25597_25668 = state_25542__$1;
(statearr_25597_25668[(2)] = inst_25469);

(statearr_25597_25668[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (2))){
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25542__$1,(4),ch);
} else {
if((state_val_25543 === (23))){
var state_25542__$1 = state_25542;
var statearr_25598_25669 = state_25542__$1;
(statearr_25598_25669[(2)] = null);

(statearr_25598_25669[(1)] = (24));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (35))){
var inst_25524 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25599_25670 = state_25542__$1;
(statearr_25599_25670[(2)] = inst_25524);

(statearr_25599_25670[(1)] = (29));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (19))){
var inst_25443 = (state_25542[(7)]);
var inst_25447 = cljs.core.chunk_first(inst_25443);
var inst_25448 = cljs.core.chunk_rest(inst_25443);
var inst_25449 = cljs.core.count(inst_25447);
var inst_25423 = inst_25448;
var inst_25424 = inst_25447;
var inst_25425 = inst_25449;
var inst_25426 = (0);
var state_25542__$1 = (function (){var statearr_25600 = state_25542;
(statearr_25600[(13)] = inst_25423);

(statearr_25600[(14)] = inst_25425);

(statearr_25600[(16)] = inst_25424);

(statearr_25600[(17)] = inst_25426);

return statearr_25600;
})();
var statearr_25601_25671 = state_25542__$1;
(statearr_25601_25671[(2)] = null);

(statearr_25601_25671[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (11))){
var inst_25423 = (state_25542[(13)]);
var inst_25443 = (state_25542[(7)]);
var inst_25443__$1 = cljs.core.seq(inst_25423);
var state_25542__$1 = (function (){var statearr_25602 = state_25542;
(statearr_25602[(7)] = inst_25443__$1);

return statearr_25602;
})();
if(inst_25443__$1){
var statearr_25603_25672 = state_25542__$1;
(statearr_25603_25672[(1)] = (16));

} else {
var statearr_25604_25673 = state_25542__$1;
(statearr_25604_25673[(1)] = (17));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (9))){
var inst_25471 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25605_25674 = state_25542__$1;
(statearr_25605_25674[(2)] = inst_25471);

(statearr_25605_25674[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (5))){
var inst_25421 = (function (){var G__25606 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25606) : cljs.core.deref.call(null,G__25606));
})();
var inst_25422 = cljs.core.seq(inst_25421);
var inst_25423 = inst_25422;
var inst_25424 = null;
var inst_25425 = (0);
var inst_25426 = (0);
var state_25542__$1 = (function (){var statearr_25607 = state_25542;
(statearr_25607[(13)] = inst_25423);

(statearr_25607[(14)] = inst_25425);

(statearr_25607[(16)] = inst_25424);

(statearr_25607[(17)] = inst_25426);

return statearr_25607;
})();
var statearr_25608_25675 = state_25542__$1;
(statearr_25608_25675[(2)] = null);

(statearr_25608_25675[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (14))){
var state_25542__$1 = state_25542;
var statearr_25609_25676 = state_25542__$1;
(statearr_25609_25676[(2)] = null);

(statearr_25609_25676[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (45))){
var inst_25532 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25610_25677 = state_25542__$1;
(statearr_25610_25677[(2)] = inst_25532);

(statearr_25610_25677[(1)] = (44));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (26))){
var inst_25474 = (state_25542[(29)]);
var inst_25528 = (state_25542[(2)]);
var inst_25529 = cljs.core.seq(inst_25474);
var state_25542__$1 = (function (){var statearr_25611 = state_25542;
(statearr_25611[(31)] = inst_25528);

return statearr_25611;
})();
if(inst_25529){
var statearr_25612_25678 = state_25542__$1;
(statearr_25612_25678[(1)] = (42));

} else {
var statearr_25613_25679 = state_25542__$1;
(statearr_25613_25679[(1)] = (43));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (16))){
var inst_25443 = (state_25542[(7)]);
var inst_25445 = cljs.core.chunked_seq_QMARK_(inst_25443);
var state_25542__$1 = state_25542;
if(inst_25445){
var statearr_25614_25680 = state_25542__$1;
(statearr_25614_25680[(1)] = (19));

} else {
var statearr_25615_25681 = state_25542__$1;
(statearr_25615_25681[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (38))){
var inst_25521 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25616_25682 = state_25542__$1;
(statearr_25616_25682[(2)] = inst_25521);

(statearr_25616_25682[(1)] = (35));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (30))){
var state_25542__$1 = state_25542;
var statearr_25617_25683 = state_25542__$1;
(statearr_25617_25683[(2)] = null);

(statearr_25617_25683[(1)] = (32));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (10))){
var inst_25424 = (state_25542[(16)]);
var inst_25426 = (state_25542[(17)]);
var inst_25432 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25424,inst_25426);
var inst_25433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25432,(0),null);
var inst_25434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25432,(1),null);
var state_25542__$1 = (function (){var statearr_25618 = state_25542;
(statearr_25618[(26)] = inst_25433);

return statearr_25618;
})();
if(cljs.core.truth_(inst_25434)){
var statearr_25619_25684 = state_25542__$1;
(statearr_25619_25684[(1)] = (13));

} else {
var statearr_25620_25685 = state_25542__$1;
(statearr_25620_25685[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (18))){
var inst_25467 = (state_25542[(2)]);
var state_25542__$1 = state_25542;
var statearr_25621_25686 = state_25542__$1;
(statearr_25621_25686[(2)] = inst_25467);

(statearr_25621_25686[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (42))){
var state_25542__$1 = state_25542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25542__$1,(45),dchan);
} else {
if((state_val_25543 === (37))){
var inst_25510 = (state_25542[(23)]);
var inst_25414 = (state_25542[(12)]);
var inst_25501 = (state_25542[(25)]);
var inst_25510__$1 = cljs.core.first(inst_25501);
var inst_25511 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25510__$1,inst_25414,done);
var state_25542__$1 = (function (){var statearr_25622 = state_25542;
(statearr_25622[(23)] = inst_25510__$1);

return statearr_25622;
})();
if(cljs.core.truth_(inst_25511)){
var statearr_25623_25687 = state_25542__$1;
(statearr_25623_25687[(1)] = (39));

} else {
var statearr_25624_25688 = state_25542__$1;
(statearr_25624_25688[(1)] = (40));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25543 === (8))){
var inst_25425 = (state_25542[(14)]);
var inst_25426 = (state_25542[(17)]);
var inst_25428 = (inst_25426 < inst_25425);
var inst_25429 = inst_25428;
var state_25542__$1 = state_25542;
if(cljs.core.truth_(inst_25429)){
var statearr_25625_25689 = state_25542__$1;
(statearr_25625_25689[(1)] = (10));

} else {
var statearr_25626_25690 = state_25542__$1;
(statearr_25626_25690[(1)] = (11));

}

return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___25636,cs,m,dchan,dctr,done))
;
return ((function (switch__12735__auto__,c__12815__auto___25636,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_25630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25630[(0)] = state_machine__12736__auto__);

(statearr_25630[(1)] = (1));

return statearr_25630;
});
var state_machine__12736__auto____1 = (function (state_25542){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25542);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25631){if((e25631 instanceof Object)){
var ex__12739__auto__ = e25631;
var statearr_25632_25691 = state_25542;
(statearr_25632_25691[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25542);

return cljs.core.constant$keyword$83;
} else {
throw e25631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25692 = state_25542;
state_25542 = G__25692;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25542){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___25636,cs,m,dchan,dctr,done))
})();
var state__12817__auto__ = (function (){var statearr_25633 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___25636);

return statearr_25633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___25636,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj25697 = {};
return obj25697;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25701 = x__4450__auto__;
return goog.typeOf(G__25701);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25705 = x__4450__auto__;
return goog.typeOf(G__25705);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25709 = x__4450__auto__;
return goog.typeOf(G__25709);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25713 = x__4450__auto__;
return goog.typeOf(G__25713);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25717 = x__4450__auto__;
return goog.typeOf(G__25717);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25718){
var map__25724 = p__25718;
var map__25724__$1 = ((cljs.core.seq_QMARK_(map__25724))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25724):map__25724);
var opts = map__25724__$1;
var statearr_25725_25729 = state;
(statearr_25725_25729[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25724,map__25724__$1,opts){
return (function (val){
var statearr_25726_25730 = state;
(statearr_25726_25730[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25724,map__25724__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25727_25731 = state;
(statearr_25727_25731[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25728 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25728) : cljs.core.deref.call(null,G__25728));
})());


return cljs.core.constant$keyword$83;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25718 = null;
if (arguments.length > 3) {
var G__25732__i = 0, G__25732__a = new Array(arguments.length -  3);
while (G__25732__i < G__25732__a.length) {G__25732__a[G__25732__i] = arguments[G__25732__i + 3]; ++G__25732__i;}
  p__25718 = new cljs.core.IndexedSeq(G__25732__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25718);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25733){
var state = cljs.core.first(arglist__25733);
arglist__25733 = cljs.core.next(arglist__25733);
var cont_block = cljs.core.first(arglist__25733);
arglist__25733 = cljs.core.next(arglist__25733);
var ports = cljs.core.first(arglist__25733);
var p__25718 = cljs.core.rest(arglist__25733);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25718);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__25866 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25866) : cljs.core.atom.call(null,G__25866));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);
var solo_mode = (function (){var G__25867 = cljs.core.constant$keyword$92;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25867) : cljs.core.atom.call(null,G__25867));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__25868 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25868) : attr.call(null,G__25868));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__25869 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25869) : cljs.core.deref.call(null,G__25869));
})();
var mode = (function (){var G__25870 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25870) : cljs.core.deref.call(null,G__25870));
})();
var solos = pick(cljs.core.constant$keyword$93,chs);
var pauses = pick(cljs.core.constant$keyword$91,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25871 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25871 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25872){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25872 = meta25872;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25871.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25871.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25871.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25871.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25874_25998 = self__.cs;
var G__25875_25999 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25874_25998,G__25875_25999) : cljs.core.reset_BANG_.call(null,G__25874_25998,G__25875_25999));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25871.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25871.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__25876_26000 = self__.solo_mode;
var G__25877_26001 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25876_26000,G__25877_26001) : cljs.core.reset_BANG_.call(null,G__25876_26000,G__25877_26001));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25871.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25873){
var self__ = this;
var _25873__$1 = this;
return self__.meta25872;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25873,meta25872__$1){
var self__ = this;
var _25873__$1 = this;
return (new cljs.core.async.t25871(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25872__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25871.cljs$lang$type = true;

cljs.core.async.t25871.cljs$lang$ctorStr = "cljs.core.async/t25871";

cljs.core.async.t25871.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t25871");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25871 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25871(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25872){
return (new cljs.core.async.t25871(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25872));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25871(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12815__auto___26002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25949){
var state_val_25950 = (state_25949[(1)]);
if((state_val_25950 === (7))){
var inst_25891 = (state_25949[(7)]);
var inst_25896 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25891);
var state_25949__$1 = state_25949;
var statearr_25951_26003 = state_25949__$1;
(statearr_25951_26003[(2)] = inst_25896);

(statearr_25951_26003[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (20))){
var inst_25906 = (state_25949[(8)]);
var state_25949__$1 = state_25949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25949__$1,(23),out,inst_25906);
} else {
if((state_val_25950 === (1))){
var inst_25881 = (state_25949[(9)]);
var inst_25881__$1 = calc_state();
var inst_25882 = cljs.core.seq_QMARK_(inst_25881__$1);
var state_25949__$1 = (function (){var statearr_25952 = state_25949;
(statearr_25952[(9)] = inst_25881__$1);

return statearr_25952;
})();
if(inst_25882){
var statearr_25953_26004 = state_25949__$1;
(statearr_25953_26004[(1)] = (2));

} else {
var statearr_25954_26005 = state_25949__$1;
(statearr_25954_26005[(1)] = (3));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (24))){
var inst_25899 = (state_25949[(10)]);
var inst_25891 = inst_25899;
var state_25949__$1 = (function (){var statearr_25955 = state_25949;
(statearr_25955[(7)] = inst_25891);

return statearr_25955;
})();
var statearr_25956_26006 = state_25949__$1;
(statearr_25956_26006[(2)] = null);

(statearr_25956_26006[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (4))){
var inst_25881 = (state_25949[(9)]);
var inst_25887 = (state_25949[(2)]);
var inst_25888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25887,cljs.core.constant$keyword$96);
var inst_25889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25887,cljs.core.constant$keyword$95);
var inst_25890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25887,cljs.core.constant$keyword$94);
var inst_25891 = inst_25881;
var state_25949__$1 = (function (){var statearr_25957 = state_25949;
(statearr_25957[(11)] = inst_25889);

(statearr_25957[(12)] = inst_25890);

(statearr_25957[(7)] = inst_25891);

(statearr_25957[(13)] = inst_25888);

return statearr_25957;
})();
var statearr_25958_26007 = state_25949__$1;
(statearr_25958_26007[(2)] = null);

(statearr_25958_26007[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (15))){
var state_25949__$1 = state_25949;
var statearr_25959_26008 = state_25949__$1;
(statearr_25959_26008[(2)] = null);

(statearr_25959_26008[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (21))){
var inst_25899 = (state_25949[(10)]);
var inst_25891 = inst_25899;
var state_25949__$1 = (function (){var statearr_25960 = state_25949;
(statearr_25960[(7)] = inst_25891);

return statearr_25960;
})();
var statearr_25961_26009 = state_25949__$1;
(statearr_25961_26009[(2)] = null);

(statearr_25961_26009[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (13))){
var inst_25945 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25962_26010 = state_25949__$1;
(statearr_25962_26010[(2)] = inst_25945);

(statearr_25962_26010[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (22))){
var inst_25943 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25963_26011 = state_25949__$1;
(statearr_25963_26011[(2)] = inst_25943);

(statearr_25963_26011[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (6))){
var inst_25947 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25949__$1,inst_25947);
} else {
if((state_val_25950 === (25))){
var state_25949__$1 = state_25949;
var statearr_25964_26012 = state_25949__$1;
(statearr_25964_26012[(2)] = null);

(statearr_25964_26012[(1)] = (26));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (17))){
var inst_25922 = (state_25949[(14)]);
var state_25949__$1 = state_25949;
var statearr_25965_26013 = state_25949__$1;
(statearr_25965_26013[(2)] = inst_25922);

(statearr_25965_26013[(1)] = (19));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (3))){
var inst_25881 = (state_25949[(9)]);
var state_25949__$1 = state_25949;
var statearr_25966_26014 = state_25949__$1;
(statearr_25966_26014[(2)] = inst_25881);

(statearr_25966_26014[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (12))){
var inst_25902 = (state_25949[(15)]);
var inst_25922 = (state_25949[(14)]);
var inst_25907 = (state_25949[(16)]);
var inst_25922__$1 = (function (){var G__25967 = inst_25907;
return (inst_25902.cljs$core$IFn$_invoke$arity$1 ? inst_25902.cljs$core$IFn$_invoke$arity$1(G__25967) : inst_25902.call(null,G__25967));
})();
var state_25949__$1 = (function (){var statearr_25968 = state_25949;
(statearr_25968[(14)] = inst_25922__$1);

return statearr_25968;
})();
if(cljs.core.truth_(inst_25922__$1)){
var statearr_25969_26015 = state_25949__$1;
(statearr_25969_26015[(1)] = (17));

} else {
var statearr_25970_26016 = state_25949__$1;
(statearr_25970_26016[(1)] = (18));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (2))){
var inst_25881 = (state_25949[(9)]);
var inst_25884 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25881);
var state_25949__$1 = state_25949;
var statearr_25971_26017 = state_25949__$1;
(statearr_25971_26017[(2)] = inst_25884);

(statearr_25971_26017[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (23))){
var inst_25934 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25934)){
var statearr_25972_26018 = state_25949__$1;
(statearr_25972_26018[(1)] = (24));

} else {
var statearr_25973_26019 = state_25949__$1;
(statearr_25973_26019[(1)] = (25));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (19))){
var inst_25931 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25931)){
var statearr_25974_26020 = state_25949__$1;
(statearr_25974_26020[(1)] = (20));

} else {
var statearr_25975_26021 = state_25949__$1;
(statearr_25975_26021[(1)] = (21));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (11))){
var inst_25906 = (state_25949[(8)]);
var inst_25912 = (inst_25906 == null);
var state_25949__$1 = state_25949;
if(cljs.core.truth_(inst_25912)){
var statearr_25976_26022 = state_25949__$1;
(statearr_25976_26022[(1)] = (14));

} else {
var statearr_25977_26023 = state_25949__$1;
(statearr_25977_26023[(1)] = (15));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (9))){
var inst_25899 = (state_25949[(10)]);
var inst_25899__$1 = (state_25949[(2)]);
var inst_25900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25899__$1,cljs.core.constant$keyword$96);
var inst_25901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25899__$1,cljs.core.constant$keyword$95);
var inst_25902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25899__$1,cljs.core.constant$keyword$94);
var state_25949__$1 = (function (){var statearr_25978 = state_25949;
(statearr_25978[(15)] = inst_25902);

(statearr_25978[(10)] = inst_25899__$1);

(statearr_25978[(17)] = inst_25901);

return statearr_25978;
})();
return cljs.core.async.ioc_alts_BANG_(state_25949__$1,(10),inst_25900);
} else {
if((state_val_25950 === (5))){
var inst_25891 = (state_25949[(7)]);
var inst_25894 = cljs.core.seq_QMARK_(inst_25891);
var state_25949__$1 = state_25949;
if(inst_25894){
var statearr_25979_26024 = state_25949__$1;
(statearr_25979_26024[(1)] = (7));

} else {
var statearr_25980_26025 = state_25949__$1;
(statearr_25980_26025[(1)] = (8));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (14))){
var inst_25907 = (state_25949[(16)]);
var inst_25914 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25907);
var state_25949__$1 = state_25949;
var statearr_25981_26026 = state_25949__$1;
(statearr_25981_26026[(2)] = inst_25914);

(statearr_25981_26026[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (26))){
var inst_25939 = (state_25949[(2)]);
var state_25949__$1 = state_25949;
var statearr_25982_26027 = state_25949__$1;
(statearr_25982_26027[(2)] = inst_25939);

(statearr_25982_26027[(1)] = (22));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (16))){
var inst_25917 = (state_25949[(2)]);
var inst_25918 = calc_state();
var inst_25891 = inst_25918;
var state_25949__$1 = (function (){var statearr_25983 = state_25949;
(statearr_25983[(18)] = inst_25917);

(statearr_25983[(7)] = inst_25891);

return statearr_25983;
})();
var statearr_25984_26028 = state_25949__$1;
(statearr_25984_26028[(2)] = null);

(statearr_25984_26028[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (10))){
var inst_25906 = (state_25949[(8)]);
var inst_25907 = (state_25949[(16)]);
var inst_25905 = (state_25949[(2)]);
var inst_25906__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25905,(0),null);
var inst_25907__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25905,(1),null);
var inst_25908 = (inst_25906__$1 == null);
var inst_25909 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25907__$1,change);
var inst_25910 = (inst_25908) || (inst_25909);
var state_25949__$1 = (function (){var statearr_25985 = state_25949;
(statearr_25985[(8)] = inst_25906__$1);

(statearr_25985[(16)] = inst_25907__$1);

return statearr_25985;
})();
if(cljs.core.truth_(inst_25910)){
var statearr_25986_26029 = state_25949__$1;
(statearr_25986_26029[(1)] = (11));

} else {
var statearr_25987_26030 = state_25949__$1;
(statearr_25987_26030[(1)] = (12));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (18))){
var inst_25902 = (state_25949[(15)]);
var inst_25901 = (state_25949[(17)]);
var inst_25907 = (state_25949[(16)]);
var inst_25926 = cljs.core.empty_QMARK_(inst_25902);
var inst_25927 = (function (){var G__25988 = inst_25907;
return (inst_25901.cljs$core$IFn$_invoke$arity$1 ? inst_25901.cljs$core$IFn$_invoke$arity$1(G__25988) : inst_25901.call(null,G__25988));
})();
var inst_25928 = cljs.core.not(inst_25927);
var inst_25929 = (inst_25926) && (inst_25928);
var state_25949__$1 = state_25949;
var statearr_25989_26031 = state_25949__$1;
(statearr_25989_26031[(2)] = inst_25929);

(statearr_25989_26031[(1)] = (19));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25950 === (8))){
var inst_25891 = (state_25949[(7)]);
var state_25949__$1 = state_25949;
var statearr_25990_26032 = state_25949__$1;
(statearr_25990_26032[(2)] = inst_25891);

(statearr_25990_26032[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___26002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12735__auto__,c__12815__auto___26002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_25994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25994[(0)] = state_machine__12736__auto__);

(statearr_25994[(1)] = (1));

return statearr_25994;
});
var state_machine__12736__auto____1 = (function (state_25949){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25949);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25995){if((e25995 instanceof Object)){
var ex__12739__auto__ = e25995;
var statearr_25996_26033 = state_25949;
(statearr_25996_26033[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25949);

return cljs.core.constant$keyword$83;
} else {
throw e25995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26034 = state_25949;
state_25949 = G__26034;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25949){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12817__auto__ = (function (){var statearr_25997 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26002);

return statearr_25997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj26036 = {};
return obj26036;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3794__auto__ = p;
if(and__3794__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3794__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4450__auto__ = (((p == null))?null:p);
return (function (){var or__3806__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__26040 = x__4450__auto__;
return goog.typeOf(G__26040);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3794__auto__ = p;
if(and__3794__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3794__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4450__auto__ = (((p == null))?null:p);
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__26044 = x__4450__auto__;
return goog.typeOf(G__26044);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3794__auto__ = p;
if(and__3794__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4450__auto__ = (((p == null))?null:p);
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26050 = x__4450__auto__;
return goog.typeOf(G__26050);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3794__auto__ = p;
if(and__3794__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4450__auto__ = (((p == null))?null:p);
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26052 = x__4450__auto__;
return goog.typeOf(G__26052);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__26191 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26191) : cljs.core.atom.call(null,G__26191));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26193 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26193) : cljs.core.deref.call(null,G__26193));
})(),topic);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3806__auto__,mults){
return (function (p1__26053_SHARP_){
if(cljs.core.truth_((function (){var G__26194 = topic;
return (p1__26053_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26053_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26194) : p1__26053_SHARP_.call(null,G__26194));
})())){
return p1__26053_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26053_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26195 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26195) : buf_fn.call(null,G__26195));
})())));
}
});})(or__3806__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26196 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26196 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26197){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26197 = meta26197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26196.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26196.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__26199 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26199) : self__.ensure_mult.call(null,G__26199));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26196.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26200 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26200) : cljs.core.deref.call(null,G__26200));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26201 = self__.mults;
var G__26202 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26201,G__26202) : cljs.core.reset_BANG_.call(null,G__26201,G__26202));
});})(mults,ensure_mult))
;

cljs.core.async.t26196.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26196.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26198){
var self__ = this;
var _26198__$1 = this;
return self__.meta26197;
});})(mults,ensure_mult))
;

cljs.core.async.t26196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26198,meta26197__$1){
var self__ = this;
var _26198__$1 = this;
return (new cljs.core.async.t26196(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26197__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26196.cljs$lang$type = true;

cljs.core.async.t26196.cljs$lang$ctorStr = "cljs.core.async/t26196";

cljs.core.async.t26196.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26196");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26196 = ((function (mults,ensure_mult){
return (function __GT_t26196(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26197){
return (new cljs.core.async.t26196(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26197));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26196(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12815__auto___26325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26325,mults,ensure_mult,p){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26325,mults,ensure_mult,p){
return (function (state_26274){
var state_val_26275 = (state_26274[(1)]);
if((state_val_26275 === (7))){
var inst_26270 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26276_26326 = state_26274__$1;
(statearr_26276_26326[(2)] = inst_26270);

(statearr_26276_26326[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (20))){
var state_26274__$1 = state_26274;
var statearr_26277_26327 = state_26274__$1;
(statearr_26277_26327[(2)] = null);

(statearr_26277_26327[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (1))){
var state_26274__$1 = state_26274;
var statearr_26278_26328 = state_26274__$1;
(statearr_26278_26328[(2)] = null);

(statearr_26278_26328[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (24))){
var inst_26253 = (state_26274[(7)]);
var inst_26262 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26253);
var state_26274__$1 = state_26274;
var statearr_26279_26329 = state_26274__$1;
(statearr_26279_26329[(2)] = inst_26262);

(statearr_26279_26329[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (4))){
var inst_26205 = (state_26274[(8)]);
var inst_26205__$1 = (state_26274[(2)]);
var inst_26206 = (inst_26205__$1 == null);
var state_26274__$1 = (function (){var statearr_26280 = state_26274;
(statearr_26280[(8)] = inst_26205__$1);

return statearr_26280;
})();
if(cljs.core.truth_(inst_26206)){
var statearr_26281_26330 = state_26274__$1;
(statearr_26281_26330[(1)] = (5));

} else {
var statearr_26282_26331 = state_26274__$1;
(statearr_26282_26331[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (15))){
var inst_26247 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26283_26332 = state_26274__$1;
(statearr_26283_26332[(2)] = inst_26247);

(statearr_26283_26332[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (21))){
var inst_26267 = (state_26274[(2)]);
var state_26274__$1 = (function (){var statearr_26284 = state_26274;
(statearr_26284[(9)] = inst_26267);

return statearr_26284;
})();
var statearr_26285_26333 = state_26274__$1;
(statearr_26285_26333[(2)] = null);

(statearr_26285_26333[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (13))){
var inst_26229 = (state_26274[(10)]);
var inst_26231 = cljs.core.chunked_seq_QMARK_(inst_26229);
var state_26274__$1 = state_26274;
if(inst_26231){
var statearr_26286_26334 = state_26274__$1;
(statearr_26286_26334[(1)] = (16));

} else {
var statearr_26287_26335 = state_26274__$1;
(statearr_26287_26335[(1)] = (17));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (22))){
var inst_26259 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
if(cljs.core.truth_(inst_26259)){
var statearr_26288_26336 = state_26274__$1;
(statearr_26288_26336[(1)] = (23));

} else {
var statearr_26289_26337 = state_26274__$1;
(statearr_26289_26337[(1)] = (24));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (6))){
var inst_26255 = (state_26274[(11)]);
var inst_26205 = (state_26274[(8)]);
var inst_26253 = (state_26274[(7)]);
var inst_26253__$1 = (function (){var G__26290 = inst_26205;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26290) : topic_fn.call(null,G__26290));
})();
var inst_26254 = (function (){var G__26291 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26291) : cljs.core.deref.call(null,G__26291));
})();
var inst_26255__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26254,inst_26253__$1);
var state_26274__$1 = (function (){var statearr_26292 = state_26274;
(statearr_26292[(11)] = inst_26255__$1);

(statearr_26292[(7)] = inst_26253__$1);

return statearr_26292;
})();
if(cljs.core.truth_(inst_26255__$1)){
var statearr_26293_26338 = state_26274__$1;
(statearr_26293_26338[(1)] = (19));

} else {
var statearr_26294_26339 = state_26274__$1;
(statearr_26294_26339[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (25))){
var inst_26264 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26295_26340 = state_26274__$1;
(statearr_26295_26340[(2)] = inst_26264);

(statearr_26295_26340[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (17))){
var inst_26229 = (state_26274[(10)]);
var inst_26238 = cljs.core.first(inst_26229);
var inst_26239 = cljs.core.async.muxch_STAR_(inst_26238);
var inst_26240 = cljs.core.async.close_BANG_(inst_26239);
var inst_26241 = cljs.core.next(inst_26229);
var inst_26215 = inst_26241;
var inst_26216 = null;
var inst_26217 = (0);
var inst_26218 = (0);
var state_26274__$1 = (function (){var statearr_26296 = state_26274;
(statearr_26296[(12)] = inst_26218);

(statearr_26296[(13)] = inst_26216);

(statearr_26296[(14)] = inst_26240);

(statearr_26296[(15)] = inst_26215);

(statearr_26296[(16)] = inst_26217);

return statearr_26296;
})();
var statearr_26297_26341 = state_26274__$1;
(statearr_26297_26341[(2)] = null);

(statearr_26297_26341[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (3))){
var inst_26272 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26274__$1,inst_26272);
} else {
if((state_val_26275 === (12))){
var inst_26249 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26298_26342 = state_26274__$1;
(statearr_26298_26342[(2)] = inst_26249);

(statearr_26298_26342[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (2))){
var state_26274__$1 = state_26274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26274__$1,(4),ch);
} else {
if((state_val_26275 === (23))){
var state_26274__$1 = state_26274;
var statearr_26299_26343 = state_26274__$1;
(statearr_26299_26343[(2)] = null);

(statearr_26299_26343[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (19))){
var inst_26255 = (state_26274[(11)]);
var inst_26205 = (state_26274[(8)]);
var inst_26257 = cljs.core.async.muxch_STAR_(inst_26255);
var state_26274__$1 = state_26274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26274__$1,(22),inst_26257,inst_26205);
} else {
if((state_val_26275 === (11))){
var inst_26215 = (state_26274[(15)]);
var inst_26229 = (state_26274[(10)]);
var inst_26229__$1 = cljs.core.seq(inst_26215);
var state_26274__$1 = (function (){var statearr_26300 = state_26274;
(statearr_26300[(10)] = inst_26229__$1);

return statearr_26300;
})();
if(inst_26229__$1){
var statearr_26301_26344 = state_26274__$1;
(statearr_26301_26344[(1)] = (13));

} else {
var statearr_26302_26345 = state_26274__$1;
(statearr_26302_26345[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (9))){
var inst_26251 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26303_26346 = state_26274__$1;
(statearr_26303_26346[(2)] = inst_26251);

(statearr_26303_26346[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (5))){
var inst_26212 = (function (){var G__26304 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26304) : cljs.core.deref.call(null,G__26304));
})();
var inst_26213 = cljs.core.vals(inst_26212);
var inst_26214 = cljs.core.seq(inst_26213);
var inst_26215 = inst_26214;
var inst_26216 = null;
var inst_26217 = (0);
var inst_26218 = (0);
var state_26274__$1 = (function (){var statearr_26305 = state_26274;
(statearr_26305[(12)] = inst_26218);

(statearr_26305[(13)] = inst_26216);

(statearr_26305[(15)] = inst_26215);

(statearr_26305[(16)] = inst_26217);

return statearr_26305;
})();
var statearr_26306_26347 = state_26274__$1;
(statearr_26306_26347[(2)] = null);

(statearr_26306_26347[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (14))){
var state_26274__$1 = state_26274;
var statearr_26310_26348 = state_26274__$1;
(statearr_26310_26348[(2)] = null);

(statearr_26310_26348[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (16))){
var inst_26229 = (state_26274[(10)]);
var inst_26233 = cljs.core.chunk_first(inst_26229);
var inst_26234 = cljs.core.chunk_rest(inst_26229);
var inst_26235 = cljs.core.count(inst_26233);
var inst_26215 = inst_26234;
var inst_26216 = inst_26233;
var inst_26217 = inst_26235;
var inst_26218 = (0);
var state_26274__$1 = (function (){var statearr_26311 = state_26274;
(statearr_26311[(12)] = inst_26218);

(statearr_26311[(13)] = inst_26216);

(statearr_26311[(15)] = inst_26215);

(statearr_26311[(16)] = inst_26217);

return statearr_26311;
})();
var statearr_26312_26349 = state_26274__$1;
(statearr_26312_26349[(2)] = null);

(statearr_26312_26349[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (10))){
var inst_26218 = (state_26274[(12)]);
var inst_26216 = (state_26274[(13)]);
var inst_26215 = (state_26274[(15)]);
var inst_26217 = (state_26274[(16)]);
var inst_26223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26216,inst_26218);
var inst_26224 = cljs.core.async.muxch_STAR_(inst_26223);
var inst_26225 = cljs.core.async.close_BANG_(inst_26224);
var inst_26226 = (inst_26218 + (1));
var tmp26307 = inst_26216;
var tmp26308 = inst_26215;
var tmp26309 = inst_26217;
var inst_26215__$1 = tmp26308;
var inst_26216__$1 = tmp26307;
var inst_26217__$1 = tmp26309;
var inst_26218__$1 = inst_26226;
var state_26274__$1 = (function (){var statearr_26313 = state_26274;
(statearr_26313[(12)] = inst_26218__$1);

(statearr_26313[(13)] = inst_26216__$1);

(statearr_26313[(15)] = inst_26215__$1);

(statearr_26313[(17)] = inst_26225);

(statearr_26313[(16)] = inst_26217__$1);

return statearr_26313;
})();
var statearr_26314_26350 = state_26274__$1;
(statearr_26314_26350[(2)] = null);

(statearr_26314_26350[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (18))){
var inst_26244 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26315_26351 = state_26274__$1;
(statearr_26315_26351[(2)] = inst_26244);

(statearr_26315_26351[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26275 === (8))){
var inst_26218 = (state_26274[(12)]);
var inst_26217 = (state_26274[(16)]);
var inst_26220 = (inst_26218 < inst_26217);
var inst_26221 = inst_26220;
var state_26274__$1 = state_26274;
if(cljs.core.truth_(inst_26221)){
var statearr_26316_26352 = state_26274__$1;
(statearr_26316_26352[(1)] = (10));

} else {
var statearr_26317_26353 = state_26274__$1;
(statearr_26317_26353[(1)] = (11));

}

return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___26325,mults,ensure_mult,p))
;
return ((function (switch__12735__auto__,c__12815__auto___26325,mults,ensure_mult,p){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26321[(0)] = state_machine__12736__auto__);

(statearr_26321[(1)] = (1));

return statearr_26321;
});
var state_machine__12736__auto____1 = (function (state_26274){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26274);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26322){if((e26322 instanceof Object)){
var ex__12739__auto__ = e26322;
var statearr_26323_26354 = state_26274;
(statearr_26323_26354[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26274);

return cljs.core.constant$keyword$83;
} else {
throw e26322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26355 = state_26274;
state_26274 = G__26355;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26274){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26325,mults,ensure_mult,p))
})();
var state__12817__auto__ = (function (){var statearr_26324 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26325);

return statearr_26324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26325,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__26436 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26436) : cljs.core.atom.call(null,G__26436));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__12815__auto___26509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26475){
var state_val_26476 = (state_26475[(1)]);
if((state_val_26476 === (7))){
var state_26475__$1 = state_26475;
var statearr_26477_26510 = state_26475__$1;
(statearr_26477_26510[(2)] = null);

(statearr_26477_26510[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (1))){
var state_26475__$1 = state_26475;
var statearr_26478_26511 = state_26475__$1;
(statearr_26478_26511[(2)] = null);

(statearr_26478_26511[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (4))){
var inst_26439 = (state_26475[(7)]);
var inst_26441 = (inst_26439 < cnt);
var state_26475__$1 = state_26475;
if(cljs.core.truth_(inst_26441)){
var statearr_26479_26512 = state_26475__$1;
(statearr_26479_26512[(1)] = (6));

} else {
var statearr_26480_26513 = state_26475__$1;
(statearr_26480_26513[(1)] = (7));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (15))){
var inst_26471 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26481_26514 = state_26475__$1;
(statearr_26481_26514[(2)] = inst_26471);

(statearr_26481_26514[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (13))){
var inst_26464 = cljs.core.async.close_BANG_(out);
var state_26475__$1 = state_26475;
var statearr_26482_26515 = state_26475__$1;
(statearr_26482_26515[(2)] = inst_26464);

(statearr_26482_26515[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (6))){
var state_26475__$1 = state_26475;
var statearr_26483_26516 = state_26475__$1;
(statearr_26483_26516[(2)] = null);

(statearr_26483_26516[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (3))){
var inst_26473 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26475__$1,inst_26473);
} else {
if((state_val_26476 === (12))){
var inst_26461 = (state_26475[(8)]);
var inst_26461__$1 = (state_26475[(2)]);
var inst_26462 = cljs.core.some(cljs.core.nil_QMARK_,inst_26461__$1);
var state_26475__$1 = (function (){var statearr_26484 = state_26475;
(statearr_26484[(8)] = inst_26461__$1);

return statearr_26484;
})();
if(cljs.core.truth_(inst_26462)){
var statearr_26485_26517 = state_26475__$1;
(statearr_26485_26517[(1)] = (13));

} else {
var statearr_26486_26518 = state_26475__$1;
(statearr_26486_26518[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (2))){
var inst_26438 = (function (){var G__26487 = dctr;
var G__26488 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26487,G__26488) : cljs.core.reset_BANG_.call(null,G__26487,G__26488));
})();
var inst_26439 = (0);
var state_26475__$1 = (function (){var statearr_26489 = state_26475;
(statearr_26489[(9)] = inst_26438);

(statearr_26489[(7)] = inst_26439);

return statearr_26489;
})();
var statearr_26490_26519 = state_26475__$1;
(statearr_26490_26519[(2)] = null);

(statearr_26490_26519[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (11))){
var inst_26439 = (state_26475[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26475,(10),Object,null,(9));
var inst_26448 = (function (){var G__26491 = inst_26439;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26491) : chs__$1.call(null,G__26491));
})();
var inst_26449 = (function (){var G__26492 = inst_26439;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26492) : done.call(null,G__26492));
})();
var inst_26450 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26448,inst_26449);
var state_26475__$1 = state_26475;
var statearr_26493_26520 = state_26475__$1;
(statearr_26493_26520[(2)] = inst_26450);


cljs.core.async.impl.ioc_helpers.process_exception(state_26475__$1);

return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (9))){
var inst_26439 = (state_26475[(7)]);
var inst_26452 = (state_26475[(2)]);
var inst_26453 = (inst_26439 + (1));
var inst_26439__$1 = inst_26453;
var state_26475__$1 = (function (){var statearr_26494 = state_26475;
(statearr_26494[(10)] = inst_26452);

(statearr_26494[(7)] = inst_26439__$1);

return statearr_26494;
})();
var statearr_26495_26521 = state_26475__$1;
(statearr_26495_26521[(2)] = null);

(statearr_26495_26521[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (5))){
var inst_26459 = (state_26475[(2)]);
var state_26475__$1 = (function (){var statearr_26496 = state_26475;
(statearr_26496[(11)] = inst_26459);

return statearr_26496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26475__$1,(12),dchan);
} else {
if((state_val_26476 === (14))){
var inst_26461 = (state_26475[(8)]);
var inst_26466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26461);
var state_26475__$1 = state_26475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26475__$1,(16),out,inst_26466);
} else {
if((state_val_26476 === (16))){
var inst_26468 = (state_26475[(2)]);
var state_26475__$1 = (function (){var statearr_26497 = state_26475;
(statearr_26497[(12)] = inst_26468);

return statearr_26497;
})();
var statearr_26498_26522 = state_26475__$1;
(statearr_26498_26522[(2)] = null);

(statearr_26498_26522[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (10))){
var inst_26443 = (state_26475[(2)]);
var inst_26444 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26475__$1 = (function (){var statearr_26499 = state_26475;
(statearr_26499[(13)] = inst_26443);

return statearr_26499;
})();
var statearr_26500_26523 = state_26475__$1;
(statearr_26500_26523[(2)] = inst_26444);


cljs.core.async.impl.ioc_helpers.process_exception(state_26475__$1);

return cljs.core.constant$keyword$83;
} else {
if((state_val_26476 === (8))){
var inst_26457 = (state_26475[(2)]);
var state_26475__$1 = state_26475;
var statearr_26501_26524 = state_26475__$1;
(statearr_26501_26524[(2)] = inst_26457);

(statearr_26501_26524[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___26509,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12735__auto__,c__12815__auto___26509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26505[(0)] = state_machine__12736__auto__);

(statearr_26505[(1)] = (1));

return statearr_26505;
});
var state_machine__12736__auto____1 = (function (state_26475){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26475);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26506){if((e26506 instanceof Object)){
var ex__12739__auto__ = e26506;
var statearr_26507_26525 = state_26475;
(statearr_26507_26525[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26475);

return cljs.core.constant$keyword$83;
} else {
throw e26506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26526 = state_26475;
state_26475 = G__26526;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26475){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26509,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12817__auto__ = (function (){var statearr_26508 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26509);

return statearr_26508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26509,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12815__auto___26636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26636,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26636,out){
return (function (state_26612){
var state_val_26613 = (state_26612[(1)]);
if((state_val_26613 === (7))){
var inst_26592 = (state_26612[(7)]);
var inst_26591 = (state_26612[(8)]);
var inst_26591__$1 = (state_26612[(2)]);
var inst_26592__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26591__$1,(0),null);
var inst_26593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26591__$1,(1),null);
var inst_26594 = (inst_26592__$1 == null);
var state_26612__$1 = (function (){var statearr_26614 = state_26612;
(statearr_26614[(9)] = inst_26593);

(statearr_26614[(7)] = inst_26592__$1);

(statearr_26614[(8)] = inst_26591__$1);

return statearr_26614;
})();
if(cljs.core.truth_(inst_26594)){
var statearr_26615_26637 = state_26612__$1;
(statearr_26615_26637[(1)] = (8));

} else {
var statearr_26616_26638 = state_26612__$1;
(statearr_26616_26638[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26613 === (1))){
var inst_26583 = cljs.core.vec(chs);
var inst_26584 = inst_26583;
var state_26612__$1 = (function (){var statearr_26617 = state_26612;
(statearr_26617[(10)] = inst_26584);

return statearr_26617;
})();
var statearr_26618_26639 = state_26612__$1;
(statearr_26618_26639[(2)] = null);

(statearr_26618_26639[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26613 === (4))){
var inst_26584 = (state_26612[(10)]);
var state_26612__$1 = state_26612;
return cljs.core.async.ioc_alts_BANG_(state_26612__$1,(7),inst_26584);
} else {
if((state_val_26613 === (6))){
var inst_26608 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26619_26640 = state_26612__$1;
(statearr_26619_26640[(2)] = inst_26608);

(statearr_26619_26640[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26613 === (3))){
var inst_26610 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26612__$1,inst_26610);
} else {
if((state_val_26613 === (2))){
var inst_26584 = (state_26612[(10)]);
var inst_26586 = cljs.core.count(inst_26584);
var inst_26587 = (inst_26586 > (0));
var state_26612__$1 = state_26612;
if(cljs.core.truth_(inst_26587)){
var statearr_26621_26641 = state_26612__$1;
(statearr_26621_26641[(1)] = (4));

} else {
var statearr_26622_26642 = state_26612__$1;
(statearr_26622_26642[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26613 === (11))){
var inst_26584 = (state_26612[(10)]);
var inst_26601 = (state_26612[(2)]);
var tmp26620 = inst_26584;
var inst_26584__$1 = tmp26620;
var state_26612__$1 = (function (){var statearr_26623 = state_26612;
(statearr_26623[(10)] = inst_26584__$1);

(statearr_26623[(11)] = inst_26601);

return statearr_26623;
})();
var statearr_26624_26643 = state_26612__$1;
(statearr_26624_26643[(2)] = null);

(statearr_26624_26643[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26613 === (9))){
var inst_26592 = (state_26612[(7)]);
var state_26612__$1 = state_26612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26612__$1,(11),out,inst_26592);
} else {
if((state_val_26613 === (5))){
var inst_26606 = cljs.core.async.close_BANG_(out);
var state_26612__$1 = state_26612;
var statearr_26625_26644 = state_26612__$1;
(statearr_26625_26644[(2)] = inst_26606);

(statearr_26625_26644[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26613 === (10))){
var inst_26604 = (state_26612[(2)]);
var state_26612__$1 = state_26612;
var statearr_26626_26645 = state_26612__$1;
(statearr_26626_26645[(2)] = inst_26604);

(statearr_26626_26645[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26613 === (8))){
var inst_26593 = (state_26612[(9)]);
var inst_26592 = (state_26612[(7)]);
var inst_26584 = (state_26612[(10)]);
var inst_26591 = (state_26612[(8)]);
var inst_26596 = (function (){var c = inst_26593;
var v = inst_26592;
var vec__26589 = inst_26591;
var cs = inst_26584;
return ((function (c,v,vec__26589,cs,inst_26593,inst_26592,inst_26584,inst_26591,state_val_26613,c__12815__auto___26636,out){
return (function (p1__26527_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26527_SHARP_);
});
;})(c,v,vec__26589,cs,inst_26593,inst_26592,inst_26584,inst_26591,state_val_26613,c__12815__auto___26636,out))
})();
var inst_26597 = cljs.core.filterv(inst_26596,inst_26584);
var inst_26584__$1 = inst_26597;
var state_26612__$1 = (function (){var statearr_26627 = state_26612;
(statearr_26627[(10)] = inst_26584__$1);

return statearr_26627;
})();
var statearr_26628_26646 = state_26612__$1;
(statearr_26628_26646[(2)] = null);

(statearr_26628_26646[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___26636,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26636,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26632 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26632[(0)] = state_machine__12736__auto__);

(statearr_26632[(1)] = (1));

return statearr_26632;
});
var state_machine__12736__auto____1 = (function (state_26612){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26612);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26633){if((e26633 instanceof Object)){
var ex__12739__auto__ = e26633;
var statearr_26634_26647 = state_26612;
(statearr_26634_26647[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26612);

return cljs.core.constant$keyword$83;
} else {
throw e26633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26648 = state_26612;
state_26612 = G__26648;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26612){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26636,out))
})();
var state__12817__auto__ = (function (){var statearr_26635 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26636);

return statearr_26635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26636,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12815__auto___26744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26744,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26744,out){
return (function (state_26721){
var state_val_26722 = (state_26721[(1)]);
if((state_val_26722 === (7))){
var inst_26703 = (state_26721[(7)]);
var inst_26703__$1 = (state_26721[(2)]);
var inst_26704 = (inst_26703__$1 == null);
var inst_26705 = cljs.core.not(inst_26704);
var state_26721__$1 = (function (){var statearr_26723 = state_26721;
(statearr_26723[(7)] = inst_26703__$1);

return statearr_26723;
})();
if(inst_26705){
var statearr_26724_26745 = state_26721__$1;
(statearr_26724_26745[(1)] = (8));

} else {
var statearr_26725_26746 = state_26721__$1;
(statearr_26725_26746[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26722 === (1))){
var inst_26698 = (0);
var state_26721__$1 = (function (){var statearr_26726 = state_26721;
(statearr_26726[(8)] = inst_26698);

return statearr_26726;
})();
var statearr_26727_26747 = state_26721__$1;
(statearr_26727_26747[(2)] = null);

(statearr_26727_26747[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26722 === (4))){
var state_26721__$1 = state_26721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26721__$1,(7),ch);
} else {
if((state_val_26722 === (6))){
var inst_26716 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
var statearr_26728_26748 = state_26721__$1;
(statearr_26728_26748[(2)] = inst_26716);

(statearr_26728_26748[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26722 === (3))){
var inst_26718 = (state_26721[(2)]);
var inst_26719 = cljs.core.async.close_BANG_(out);
var state_26721__$1 = (function (){var statearr_26729 = state_26721;
(statearr_26729[(9)] = inst_26718);

return statearr_26729;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26721__$1,inst_26719);
} else {
if((state_val_26722 === (2))){
var inst_26698 = (state_26721[(8)]);
var inst_26700 = (inst_26698 < n);
var state_26721__$1 = state_26721;
if(cljs.core.truth_(inst_26700)){
var statearr_26730_26749 = state_26721__$1;
(statearr_26730_26749[(1)] = (4));

} else {
var statearr_26731_26750 = state_26721__$1;
(statearr_26731_26750[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26722 === (11))){
var inst_26698 = (state_26721[(8)]);
var inst_26708 = (state_26721[(2)]);
var inst_26709 = (inst_26698 + (1));
var inst_26698__$1 = inst_26709;
var state_26721__$1 = (function (){var statearr_26732 = state_26721;
(statearr_26732[(8)] = inst_26698__$1);

(statearr_26732[(10)] = inst_26708);

return statearr_26732;
})();
var statearr_26733_26751 = state_26721__$1;
(statearr_26733_26751[(2)] = null);

(statearr_26733_26751[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26722 === (9))){
var state_26721__$1 = state_26721;
var statearr_26734_26752 = state_26721__$1;
(statearr_26734_26752[(2)] = null);

(statearr_26734_26752[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26722 === (5))){
var state_26721__$1 = state_26721;
var statearr_26735_26753 = state_26721__$1;
(statearr_26735_26753[(2)] = null);

(statearr_26735_26753[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26722 === (10))){
var inst_26713 = (state_26721[(2)]);
var state_26721__$1 = state_26721;
var statearr_26736_26754 = state_26721__$1;
(statearr_26736_26754[(2)] = inst_26713);

(statearr_26736_26754[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26722 === (8))){
var inst_26703 = (state_26721[(7)]);
var state_26721__$1 = state_26721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26721__$1,(11),out,inst_26703);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___26744,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26744,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26740[(0)] = state_machine__12736__auto__);

(statearr_26740[(1)] = (1));

return statearr_26740;
});
var state_machine__12736__auto____1 = (function (state_26721){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26721);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26741){if((e26741 instanceof Object)){
var ex__12739__auto__ = e26741;
var statearr_26742_26755 = state_26721;
(statearr_26742_26755[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26721);

return cljs.core.constant$keyword$83;
} else {
throw e26741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26756 = state_26721;
state_26721 = G__26756;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26721){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26744,out))
})();
var state__12817__auto__ = (function (){var statearr_26743 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26744);

return statearr_26743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26744,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t26769 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26769 = (function (ch,f,map_LT_,meta26770){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26770 = meta26770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t26772 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26772 = (function (fn1,_,meta26770,map_LT_,f,ch,meta26773){
this.fn1 = fn1;
this._ = _;
this.meta26770 = meta26770;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26773 = meta26773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26772.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26772.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t26772.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26757_SHARP_){
var G__26775 = (((p1__26757_SHARP_ == null))?null:(function (){var G__26776 = p1__26757_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26776) : self__.f.call(null,G__26776));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26775) : f1.call(null,G__26775));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26772.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26774){
var self__ = this;
var _26774__$1 = this;
return self__.meta26773;
});})(___$1))
;

cljs.core.async.t26772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26774,meta26773__$1){
var self__ = this;
var _26774__$1 = this;
return (new cljs.core.async.t26772(self__.fn1,self__._,self__.meta26770,self__.map_LT_,self__.f,self__.ch,meta26773__$1));
});})(___$1))
;

cljs.core.async.t26772.cljs$lang$type = true;

cljs.core.async.t26772.cljs$lang$ctorStr = "cljs.core.async/t26772";

cljs.core.async.t26772.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26772");
});})(___$1))
;

cljs.core.async.__GT_t26772 = ((function (___$1){
return (function __GT_t26772(fn1__$1,___$2,meta26770__$1,map_LT___$1,f__$1,ch__$1,meta26773){
return (new cljs.core.async.t26772(fn1__$1,___$2,meta26770__$1,map_LT___$1,f__$1,ch__$1,meta26773));
});})(___$1))
;

}

return (new cljs.core.async.t26772(fn1,___$1,self__.meta26770,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3794__auto__ = ret;
if(cljs.core.truth_(and__3794__auto__)){
return !(((function (){var G__26777 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26777) : cljs.core.deref.call(null,G__26777));
})() == null));
} else {
return and__3794__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26778 = (function (){var G__26779 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26779) : cljs.core.deref.call(null,G__26779));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26778) : self__.f.call(null,G__26778));
})());
} else {
return ret;
}
});

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26769.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26771){
var self__ = this;
var _26771__$1 = this;
return self__.meta26770;
});

cljs.core.async.t26769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26771,meta26770__$1){
var self__ = this;
var _26771__$1 = this;
return (new cljs.core.async.t26769(self__.ch,self__.f,self__.map_LT_,meta26770__$1));
});

cljs.core.async.t26769.cljs$lang$type = true;

cljs.core.async.t26769.cljs$lang$ctorStr = "cljs.core.async/t26769";

cljs.core.async.t26769.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26769");
});

cljs.core.async.__GT_t26769 = (function __GT_t26769(ch__$1,f__$1,map_LT___$1,meta26770){
return (new cljs.core.async.t26769(ch__$1,f__$1,map_LT___$1,meta26770));
});

}

return (new cljs.core.async.t26769(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26784 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26784 = (function (ch,f,map_GT_,meta26785){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26785 = meta26785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26784.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26787 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26787) : self__.f.call(null,G__26787));
})(),fn1);
});

cljs.core.async.t26784.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26784.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26786){
var self__ = this;
var _26786__$1 = this;
return self__.meta26785;
});

cljs.core.async.t26784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26786,meta26785__$1){
var self__ = this;
var _26786__$1 = this;
return (new cljs.core.async.t26784(self__.ch,self__.f,self__.map_GT_,meta26785__$1));
});

cljs.core.async.t26784.cljs$lang$type = true;

cljs.core.async.t26784.cljs$lang$ctorStr = "cljs.core.async/t26784";

cljs.core.async.t26784.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26784");
});

cljs.core.async.__GT_t26784 = (function __GT_t26784(ch__$1,f__$1,map_GT___$1,meta26785){
return (new cljs.core.async.t26784(ch__$1,f__$1,map_GT___$1,meta26785));
});

}

return (new cljs.core.async.t26784(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26792 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26792 = (function (ch,p,filter_GT_,meta26793){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26793 = meta26793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26795 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26795) : self__.p.call(null,G__26795));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26794){
var self__ = this;
var _26794__$1 = this;
return self__.meta26793;
});

cljs.core.async.t26792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26794,meta26793__$1){
var self__ = this;
var _26794__$1 = this;
return (new cljs.core.async.t26792(self__.ch,self__.p,self__.filter_GT_,meta26793__$1));
});

cljs.core.async.t26792.cljs$lang$type = true;

cljs.core.async.t26792.cljs$lang$ctorStr = "cljs.core.async/t26792";

cljs.core.async.t26792.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26792");
});

cljs.core.async.__GT_t26792 = (function __GT_t26792(ch__$1,p__$1,filter_GT___$1,meta26793){
return (new cljs.core.async.t26792(ch__$1,p__$1,filter_GT___$1,meta26793));
});

}

return (new cljs.core.async.t26792(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12815__auto___26883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26883,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26883,out){
return (function (state_26861){
var state_val_26862 = (state_26861[(1)]);
if((state_val_26862 === (7))){
var inst_26857 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
var statearr_26863_26884 = state_26861__$1;
(statearr_26863_26884[(2)] = inst_26857);

(statearr_26863_26884[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26862 === (1))){
var state_26861__$1 = state_26861;
var statearr_26864_26885 = state_26861__$1;
(statearr_26864_26885[(2)] = null);

(statearr_26864_26885[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26862 === (4))){
var inst_26843 = (state_26861[(7)]);
var inst_26843__$1 = (state_26861[(2)]);
var inst_26844 = (inst_26843__$1 == null);
var state_26861__$1 = (function (){var statearr_26865 = state_26861;
(statearr_26865[(7)] = inst_26843__$1);

return statearr_26865;
})();
if(cljs.core.truth_(inst_26844)){
var statearr_26866_26886 = state_26861__$1;
(statearr_26866_26886[(1)] = (5));

} else {
var statearr_26867_26887 = state_26861__$1;
(statearr_26867_26887[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26862 === (6))){
var inst_26843 = (state_26861[(7)]);
var inst_26848 = (function (){var G__26868 = inst_26843;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26868) : p.call(null,G__26868));
})();
var state_26861__$1 = state_26861;
if(cljs.core.truth_(inst_26848)){
var statearr_26869_26888 = state_26861__$1;
(statearr_26869_26888[(1)] = (8));

} else {
var statearr_26870_26889 = state_26861__$1;
(statearr_26870_26889[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26862 === (3))){
var inst_26859 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26861__$1,inst_26859);
} else {
if((state_val_26862 === (2))){
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26861__$1,(4),ch);
} else {
if((state_val_26862 === (11))){
var inst_26851 = (state_26861[(2)]);
var state_26861__$1 = state_26861;
var statearr_26871_26890 = state_26861__$1;
(statearr_26871_26890[(2)] = inst_26851);

(statearr_26871_26890[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26862 === (9))){
var state_26861__$1 = state_26861;
var statearr_26872_26891 = state_26861__$1;
(statearr_26872_26891[(2)] = null);

(statearr_26872_26891[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26862 === (5))){
var inst_26846 = cljs.core.async.close_BANG_(out);
var state_26861__$1 = state_26861;
var statearr_26873_26892 = state_26861__$1;
(statearr_26873_26892[(2)] = inst_26846);

(statearr_26873_26892[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26862 === (10))){
var inst_26854 = (state_26861[(2)]);
var state_26861__$1 = (function (){var statearr_26874 = state_26861;
(statearr_26874[(8)] = inst_26854);

return statearr_26874;
})();
var statearr_26875_26893 = state_26861__$1;
(statearr_26875_26893[(2)] = null);

(statearr_26875_26893[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26862 === (8))){
var inst_26843 = (state_26861[(7)]);
var state_26861__$1 = state_26861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26861__$1,(11),out,inst_26843);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___26883,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26883,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26879 = [null,null,null,null,null,null,null,null,null];
(statearr_26879[(0)] = state_machine__12736__auto__);

(statearr_26879[(1)] = (1));

return statearr_26879;
});
var state_machine__12736__auto____1 = (function (state_26861){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26861);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26880){if((e26880 instanceof Object)){
var ex__12739__auto__ = e26880;
var statearr_26881_26894 = state_26861;
(statearr_26881_26894[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26861);

return cljs.core.constant$keyword$83;
} else {
throw e26880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26895 = state_26861;
state_26861 = G__26895;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26861){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26883,out))
})();
var state__12817__auto__ = (function (){var statearr_26882 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26883);

return statearr_26882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26883,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__12815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto__){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto__){
return (function (state_27065){
var state_val_27066 = (state_27065[(1)]);
if((state_val_27066 === (7))){
var inst_27061 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27067_27109 = state_27065__$1;
(statearr_27067_27109[(2)] = inst_27061);

(statearr_27067_27109[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (20))){
var inst_27031 = (state_27065[(7)]);
var inst_27042 = (state_27065[(2)]);
var inst_27043 = cljs.core.next(inst_27031);
var inst_27017 = inst_27043;
var inst_27018 = null;
var inst_27019 = (0);
var inst_27020 = (0);
var state_27065__$1 = (function (){var statearr_27068 = state_27065;
(statearr_27068[(8)] = inst_27018);

(statearr_27068[(9)] = inst_27042);

(statearr_27068[(10)] = inst_27019);

(statearr_27068[(11)] = inst_27017);

(statearr_27068[(12)] = inst_27020);

return statearr_27068;
})();
var statearr_27069_27110 = state_27065__$1;
(statearr_27069_27110[(2)] = null);

(statearr_27069_27110[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (1))){
var state_27065__$1 = state_27065;
var statearr_27070_27111 = state_27065__$1;
(statearr_27070_27111[(2)] = null);

(statearr_27070_27111[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (4))){
var inst_27006 = (state_27065[(13)]);
var inst_27006__$1 = (state_27065[(2)]);
var inst_27007 = (inst_27006__$1 == null);
var state_27065__$1 = (function (){var statearr_27071 = state_27065;
(statearr_27071[(13)] = inst_27006__$1);

return statearr_27071;
})();
if(cljs.core.truth_(inst_27007)){
var statearr_27072_27112 = state_27065__$1;
(statearr_27072_27112[(1)] = (5));

} else {
var statearr_27073_27113 = state_27065__$1;
(statearr_27073_27113[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (15))){
var state_27065__$1 = state_27065;
var statearr_27077_27114 = state_27065__$1;
(statearr_27077_27114[(2)] = null);

(statearr_27077_27114[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (21))){
var state_27065__$1 = state_27065;
var statearr_27078_27115 = state_27065__$1;
(statearr_27078_27115[(2)] = null);

(statearr_27078_27115[(1)] = (23));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (13))){
var inst_27018 = (state_27065[(8)]);
var inst_27019 = (state_27065[(10)]);
var inst_27017 = (state_27065[(11)]);
var inst_27020 = (state_27065[(12)]);
var inst_27027 = (state_27065[(2)]);
var inst_27028 = (inst_27020 + (1));
var tmp27074 = inst_27018;
var tmp27075 = inst_27019;
var tmp27076 = inst_27017;
var inst_27017__$1 = tmp27076;
var inst_27018__$1 = tmp27074;
var inst_27019__$1 = tmp27075;
var inst_27020__$1 = inst_27028;
var state_27065__$1 = (function (){var statearr_27079 = state_27065;
(statearr_27079[(8)] = inst_27018__$1);

(statearr_27079[(10)] = inst_27019__$1);

(statearr_27079[(14)] = inst_27027);

(statearr_27079[(11)] = inst_27017__$1);

(statearr_27079[(12)] = inst_27020__$1);

return statearr_27079;
})();
var statearr_27080_27116 = state_27065__$1;
(statearr_27080_27116[(2)] = null);

(statearr_27080_27116[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (22))){
var state_27065__$1 = state_27065;
var statearr_27081_27117 = state_27065__$1;
(statearr_27081_27117[(2)] = null);

(statearr_27081_27117[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (6))){
var inst_27006 = (state_27065[(13)]);
var inst_27015 = (function (){var G__27082 = inst_27006;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27082) : f.call(null,G__27082));
})();
var inst_27016 = cljs.core.seq(inst_27015);
var inst_27017 = inst_27016;
var inst_27018 = null;
var inst_27019 = (0);
var inst_27020 = (0);
var state_27065__$1 = (function (){var statearr_27083 = state_27065;
(statearr_27083[(8)] = inst_27018);

(statearr_27083[(10)] = inst_27019);

(statearr_27083[(11)] = inst_27017);

(statearr_27083[(12)] = inst_27020);

return statearr_27083;
})();
var statearr_27084_27118 = state_27065__$1;
(statearr_27084_27118[(2)] = null);

(statearr_27084_27118[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (17))){
var inst_27031 = (state_27065[(7)]);
var inst_27035 = cljs.core.chunk_first(inst_27031);
var inst_27036 = cljs.core.chunk_rest(inst_27031);
var inst_27037 = cljs.core.count(inst_27035);
var inst_27017 = inst_27036;
var inst_27018 = inst_27035;
var inst_27019 = inst_27037;
var inst_27020 = (0);
var state_27065__$1 = (function (){var statearr_27085 = state_27065;
(statearr_27085[(8)] = inst_27018);

(statearr_27085[(10)] = inst_27019);

(statearr_27085[(11)] = inst_27017);

(statearr_27085[(12)] = inst_27020);

return statearr_27085;
})();
var statearr_27086_27119 = state_27065__$1;
(statearr_27086_27119[(2)] = null);

(statearr_27086_27119[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (3))){
var inst_27063 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27065__$1,inst_27063);
} else {
if((state_val_27066 === (12))){
var inst_27051 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27087_27120 = state_27065__$1;
(statearr_27087_27120[(2)] = inst_27051);

(statearr_27087_27120[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (2))){
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27065__$1,(4),in$);
} else {
if((state_val_27066 === (23))){
var inst_27059 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27088_27121 = state_27065__$1;
(statearr_27088_27121[(2)] = inst_27059);

(statearr_27088_27121[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (19))){
var inst_27046 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27089_27122 = state_27065__$1;
(statearr_27089_27122[(2)] = inst_27046);

(statearr_27089_27122[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (11))){
var inst_27031 = (state_27065[(7)]);
var inst_27017 = (state_27065[(11)]);
var inst_27031__$1 = cljs.core.seq(inst_27017);
var state_27065__$1 = (function (){var statearr_27090 = state_27065;
(statearr_27090[(7)] = inst_27031__$1);

return statearr_27090;
})();
if(inst_27031__$1){
var statearr_27091_27123 = state_27065__$1;
(statearr_27091_27123[(1)] = (14));

} else {
var statearr_27092_27124 = state_27065__$1;
(statearr_27092_27124[(1)] = (15));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (9))){
var inst_27053 = (state_27065[(2)]);
var inst_27054 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27065__$1 = (function (){var statearr_27093 = state_27065;
(statearr_27093[(15)] = inst_27053);

return statearr_27093;
})();
if(cljs.core.truth_(inst_27054)){
var statearr_27094_27125 = state_27065__$1;
(statearr_27094_27125[(1)] = (21));

} else {
var statearr_27095_27126 = state_27065__$1;
(statearr_27095_27126[(1)] = (22));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (5))){
var inst_27009 = cljs.core.async.close_BANG_(out);
var state_27065__$1 = state_27065;
var statearr_27096_27127 = state_27065__$1;
(statearr_27096_27127[(2)] = inst_27009);

(statearr_27096_27127[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (14))){
var inst_27031 = (state_27065[(7)]);
var inst_27033 = cljs.core.chunked_seq_QMARK_(inst_27031);
var state_27065__$1 = state_27065;
if(inst_27033){
var statearr_27097_27128 = state_27065__$1;
(statearr_27097_27128[(1)] = (17));

} else {
var statearr_27098_27129 = state_27065__$1;
(statearr_27098_27129[(1)] = (18));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (16))){
var inst_27049 = (state_27065[(2)]);
var state_27065__$1 = state_27065;
var statearr_27099_27130 = state_27065__$1;
(statearr_27099_27130[(2)] = inst_27049);

(statearr_27099_27130[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27066 === (10))){
var inst_27018 = (state_27065[(8)]);
var inst_27020 = (state_27065[(12)]);
var inst_27025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27018,inst_27020);
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27065__$1,(13),out,inst_27025);
} else {
if((state_val_27066 === (18))){
var inst_27031 = (state_27065[(7)]);
var inst_27040 = cljs.core.first(inst_27031);
var state_27065__$1 = state_27065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27065__$1,(20),out,inst_27040);
} else {
if((state_val_27066 === (8))){
var inst_27019 = (state_27065[(10)]);
var inst_27020 = (state_27065[(12)]);
var inst_27022 = (inst_27020 < inst_27019);
var inst_27023 = inst_27022;
var state_27065__$1 = state_27065;
if(cljs.core.truth_(inst_27023)){
var statearr_27100_27131 = state_27065__$1;
(statearr_27100_27131[(1)] = (10));

} else {
var statearr_27101_27132 = state_27065__$1;
(statearr_27101_27132[(1)] = (11));

}

return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto__))
;
return ((function (switch__12735__auto__,c__12815__auto__){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27105[(0)] = state_machine__12736__auto__);

(statearr_27105[(1)] = (1));

return statearr_27105;
});
var state_machine__12736__auto____1 = (function (state_27065){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27065);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27106){if((e27106 instanceof Object)){
var ex__12739__auto__ = e27106;
var statearr_27107_27133 = state_27065;
(statearr_27107_27133[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27065);

return cljs.core.constant$keyword$83;
} else {
throw e27106;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27134 = state_27065;
state_27065 = G__27134;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27065){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_27108 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto__))
);

return c__12815__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12815__auto___27239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27239,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27239,out){
return (function (state_27214){
var state_val_27215 = (state_27214[(1)]);
if((state_val_27215 === (7))){
var inst_27209 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27216_27240 = state_27214__$1;
(statearr_27216_27240[(2)] = inst_27209);

(statearr_27216_27240[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27215 === (1))){
var inst_27191 = null;
var state_27214__$1 = (function (){var statearr_27217 = state_27214;
(statearr_27217[(7)] = inst_27191);

return statearr_27217;
})();
var statearr_27218_27241 = state_27214__$1;
(statearr_27218_27241[(2)] = null);

(statearr_27218_27241[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27215 === (4))){
var inst_27194 = (state_27214[(8)]);
var inst_27194__$1 = (state_27214[(2)]);
var inst_27195 = (inst_27194__$1 == null);
var inst_27196 = cljs.core.not(inst_27195);
var state_27214__$1 = (function (){var statearr_27219 = state_27214;
(statearr_27219[(8)] = inst_27194__$1);

return statearr_27219;
})();
if(inst_27196){
var statearr_27220_27242 = state_27214__$1;
(statearr_27220_27242[(1)] = (5));

} else {
var statearr_27221_27243 = state_27214__$1;
(statearr_27221_27243[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27215 === (6))){
var state_27214__$1 = state_27214;
var statearr_27222_27244 = state_27214__$1;
(statearr_27222_27244[(2)] = null);

(statearr_27222_27244[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27215 === (3))){
var inst_27211 = (state_27214[(2)]);
var inst_27212 = cljs.core.async.close_BANG_(out);
var state_27214__$1 = (function (){var statearr_27223 = state_27214;
(statearr_27223[(9)] = inst_27211);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27214__$1,inst_27212);
} else {
if((state_val_27215 === (2))){
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27214__$1,(4),ch);
} else {
if((state_val_27215 === (11))){
var inst_27194 = (state_27214[(8)]);
var inst_27203 = (state_27214[(2)]);
var inst_27191 = inst_27194;
var state_27214__$1 = (function (){var statearr_27224 = state_27214;
(statearr_27224[(7)] = inst_27191);

(statearr_27224[(10)] = inst_27203);

return statearr_27224;
})();
var statearr_27225_27245 = state_27214__$1;
(statearr_27225_27245[(2)] = null);

(statearr_27225_27245[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27215 === (9))){
var inst_27194 = (state_27214[(8)]);
var state_27214__$1 = state_27214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27214__$1,(11),out,inst_27194);
} else {
if((state_val_27215 === (5))){
var inst_27191 = (state_27214[(7)]);
var inst_27194 = (state_27214[(8)]);
var inst_27198 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27194,inst_27191);
var state_27214__$1 = state_27214;
if(inst_27198){
var statearr_27227_27246 = state_27214__$1;
(statearr_27227_27246[(1)] = (8));

} else {
var statearr_27228_27247 = state_27214__$1;
(statearr_27228_27247[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27215 === (10))){
var inst_27206 = (state_27214[(2)]);
var state_27214__$1 = state_27214;
var statearr_27229_27248 = state_27214__$1;
(statearr_27229_27248[(2)] = inst_27206);

(statearr_27229_27248[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27215 === (8))){
var inst_27191 = (state_27214[(7)]);
var tmp27226 = inst_27191;
var inst_27191__$1 = tmp27226;
var state_27214__$1 = (function (){var statearr_27230 = state_27214;
(statearr_27230[(7)] = inst_27191__$1);

return statearr_27230;
})();
var statearr_27231_27249 = state_27214__$1;
(statearr_27231_27249[(2)] = null);

(statearr_27231_27249[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___27239,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27239,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27235[(0)] = state_machine__12736__auto__);

(statearr_27235[(1)] = (1));

return statearr_27235;
});
var state_machine__12736__auto____1 = (function (state_27214){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27214);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27236){if((e27236 instanceof Object)){
var ex__12739__auto__ = e27236;
var statearr_27237_27250 = state_27214;
(statearr_27237_27250[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27214);

return cljs.core.constant$keyword$83;
} else {
throw e27236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27251 = state_27214;
state_27214 = G__27251;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27214){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27239,out))
})();
var state__12817__auto__ = (function (){var statearr_27238 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27239);

return statearr_27238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27239,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12815__auto___27389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27389,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27389,out){
return (function (state_27359){
var state_val_27360 = (state_27359[(1)]);
if((state_val_27360 === (7))){
var inst_27355 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27361_27390 = state_27359__$1;
(statearr_27361_27390[(2)] = inst_27355);

(statearr_27361_27390[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (1))){
var inst_27322 = (new Array(n));
var inst_27323 = inst_27322;
var inst_27324 = (0);
var state_27359__$1 = (function (){var statearr_27362 = state_27359;
(statearr_27362[(7)] = inst_27324);

(statearr_27362[(8)] = inst_27323);

return statearr_27362;
})();
var statearr_27363_27391 = state_27359__$1;
(statearr_27363_27391[(2)] = null);

(statearr_27363_27391[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (4))){
var inst_27327 = (state_27359[(9)]);
var inst_27327__$1 = (state_27359[(2)]);
var inst_27328 = (inst_27327__$1 == null);
var inst_27329 = cljs.core.not(inst_27328);
var state_27359__$1 = (function (){var statearr_27364 = state_27359;
(statearr_27364[(9)] = inst_27327__$1);

return statearr_27364;
})();
if(inst_27329){
var statearr_27365_27392 = state_27359__$1;
(statearr_27365_27392[(1)] = (5));

} else {
var statearr_27366_27393 = state_27359__$1;
(statearr_27366_27393[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (15))){
var inst_27349 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27367_27394 = state_27359__$1;
(statearr_27367_27394[(2)] = inst_27349);

(statearr_27367_27394[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (13))){
var state_27359__$1 = state_27359;
var statearr_27368_27395 = state_27359__$1;
(statearr_27368_27395[(2)] = null);

(statearr_27368_27395[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (6))){
var inst_27324 = (state_27359[(7)]);
var inst_27345 = (inst_27324 > (0));
var state_27359__$1 = state_27359;
if(cljs.core.truth_(inst_27345)){
var statearr_27369_27396 = state_27359__$1;
(statearr_27369_27396[(1)] = (12));

} else {
var statearr_27370_27397 = state_27359__$1;
(statearr_27370_27397[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (3))){
var inst_27357 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27359__$1,inst_27357);
} else {
if((state_val_27360 === (12))){
var inst_27323 = (state_27359[(8)]);
var inst_27347 = cljs.core.vec(inst_27323);
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27359__$1,(15),out,inst_27347);
} else {
if((state_val_27360 === (2))){
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27359__$1,(4),ch);
} else {
if((state_val_27360 === (11))){
var inst_27339 = (state_27359[(2)]);
var inst_27340 = (new Array(n));
var inst_27323 = inst_27340;
var inst_27324 = (0);
var state_27359__$1 = (function (){var statearr_27371 = state_27359;
(statearr_27371[(7)] = inst_27324);

(statearr_27371[(8)] = inst_27323);

(statearr_27371[(10)] = inst_27339);

return statearr_27371;
})();
var statearr_27372_27398 = state_27359__$1;
(statearr_27372_27398[(2)] = null);

(statearr_27372_27398[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (9))){
var inst_27323 = (state_27359[(8)]);
var inst_27337 = cljs.core.vec(inst_27323);
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27359__$1,(11),out,inst_27337);
} else {
if((state_val_27360 === (5))){
var inst_27327 = (state_27359[(9)]);
var inst_27324 = (state_27359[(7)]);
var inst_27332 = (state_27359[(11)]);
var inst_27323 = (state_27359[(8)]);
var inst_27331 = (inst_27323[inst_27324] = inst_27327);
var inst_27332__$1 = (inst_27324 + (1));
var inst_27333 = (inst_27332__$1 < n);
var state_27359__$1 = (function (){var statearr_27373 = state_27359;
(statearr_27373[(12)] = inst_27331);

(statearr_27373[(11)] = inst_27332__$1);

return statearr_27373;
})();
if(cljs.core.truth_(inst_27333)){
var statearr_27374_27399 = state_27359__$1;
(statearr_27374_27399[(1)] = (8));

} else {
var statearr_27375_27400 = state_27359__$1;
(statearr_27375_27400[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (14))){
var inst_27352 = (state_27359[(2)]);
var inst_27353 = cljs.core.async.close_BANG_(out);
var state_27359__$1 = (function (){var statearr_27377 = state_27359;
(statearr_27377[(13)] = inst_27352);

return statearr_27377;
})();
var statearr_27378_27401 = state_27359__$1;
(statearr_27378_27401[(2)] = inst_27353);

(statearr_27378_27401[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (10))){
var inst_27343 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27379_27402 = state_27359__$1;
(statearr_27379_27402[(2)] = inst_27343);

(statearr_27379_27402[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27360 === (8))){
var inst_27332 = (state_27359[(11)]);
var inst_27323 = (state_27359[(8)]);
var tmp27376 = inst_27323;
var inst_27323__$1 = tmp27376;
var inst_27324 = inst_27332;
var state_27359__$1 = (function (){var statearr_27380 = state_27359;
(statearr_27380[(7)] = inst_27324);

(statearr_27380[(8)] = inst_27323__$1);

return statearr_27380;
})();
var statearr_27381_27403 = state_27359__$1;
(statearr_27381_27403[(2)] = null);

(statearr_27381_27403[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___27389,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27389,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27385[(0)] = state_machine__12736__auto__);

(statearr_27385[(1)] = (1));

return statearr_27385;
});
var state_machine__12736__auto____1 = (function (state_27359){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27359);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27386){if((e27386 instanceof Object)){
var ex__12739__auto__ = e27386;
var statearr_27387_27404 = state_27359;
(statearr_27387_27404[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27359);

return cljs.core.constant$keyword$83;
} else {
throw e27386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27405 = state_27359;
state_27359 = G__27405;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27359){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27389,out))
})();
var state__12817__auto__ = (function (){var statearr_27388 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27389);

return statearr_27388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27389,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12815__auto___27553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27553,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27553,out){
return (function (state_27522){
var state_val_27523 = (state_27522[(1)]);
if((state_val_27523 === (7))){
var inst_27518 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27524_27554 = state_27522__$1;
(statearr_27524_27554[(2)] = inst_27518);

(statearr_27524_27554[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (1))){
var inst_27481 = [];
var inst_27482 = inst_27481;
var inst_27483 = cljs.core.constant$keyword$97;
var state_27522__$1 = (function (){var statearr_27525 = state_27522;
(statearr_27525[(7)] = inst_27482);

(statearr_27525[(8)] = inst_27483);

return statearr_27525;
})();
var statearr_27526_27555 = state_27522__$1;
(statearr_27526_27555[(2)] = null);

(statearr_27526_27555[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (4))){
var inst_27486 = (state_27522[(9)]);
var inst_27486__$1 = (state_27522[(2)]);
var inst_27487 = (inst_27486__$1 == null);
var inst_27488 = cljs.core.not(inst_27487);
var state_27522__$1 = (function (){var statearr_27527 = state_27522;
(statearr_27527[(9)] = inst_27486__$1);

return statearr_27527;
})();
if(inst_27488){
var statearr_27528_27556 = state_27522__$1;
(statearr_27528_27556[(1)] = (5));

} else {
var statearr_27529_27557 = state_27522__$1;
(statearr_27529_27557[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (15))){
var inst_27512 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27530_27558 = state_27522__$1;
(statearr_27530_27558[(2)] = inst_27512);

(statearr_27530_27558[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (13))){
var state_27522__$1 = state_27522;
var statearr_27531_27559 = state_27522__$1;
(statearr_27531_27559[(2)] = null);

(statearr_27531_27559[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (6))){
var inst_27482 = (state_27522[(7)]);
var inst_27507 = inst_27482.length;
var inst_27508 = (inst_27507 > (0));
var state_27522__$1 = state_27522;
if(cljs.core.truth_(inst_27508)){
var statearr_27532_27560 = state_27522__$1;
(statearr_27532_27560[(1)] = (12));

} else {
var statearr_27533_27561 = state_27522__$1;
(statearr_27533_27561[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (3))){
var inst_27520 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27522__$1,inst_27520);
} else {
if((state_val_27523 === (12))){
var inst_27482 = (state_27522[(7)]);
var inst_27510 = cljs.core.vec(inst_27482);
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27522__$1,(15),out,inst_27510);
} else {
if((state_val_27523 === (2))){
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27522__$1,(4),ch);
} else {
if((state_val_27523 === (11))){
var inst_27490 = (state_27522[(10)]);
var inst_27486 = (state_27522[(9)]);
var inst_27500 = (state_27522[(2)]);
var inst_27501 = [];
var inst_27502 = inst_27501.push(inst_27486);
var inst_27482 = inst_27501;
var inst_27483 = inst_27490;
var state_27522__$1 = (function (){var statearr_27534 = state_27522;
(statearr_27534[(7)] = inst_27482);

(statearr_27534[(11)] = inst_27500);

(statearr_27534[(12)] = inst_27502);

(statearr_27534[(8)] = inst_27483);

return statearr_27534;
})();
var statearr_27535_27562 = state_27522__$1;
(statearr_27535_27562[(2)] = null);

(statearr_27535_27562[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (9))){
var inst_27482 = (state_27522[(7)]);
var inst_27498 = cljs.core.vec(inst_27482);
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27522__$1,(11),out,inst_27498);
} else {
if((state_val_27523 === (5))){
var inst_27490 = (state_27522[(10)]);
var inst_27483 = (state_27522[(8)]);
var inst_27486 = (state_27522[(9)]);
var inst_27490__$1 = (function (){var G__27536 = inst_27486;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27536) : f.call(null,G__27536));
})();
var inst_27491 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27490__$1,inst_27483);
var inst_27492 = cljs.core.keyword_identical_QMARK_(inst_27483,cljs.core.constant$keyword$97);
var inst_27493 = (inst_27491) || (inst_27492);
var state_27522__$1 = (function (){var statearr_27537 = state_27522;
(statearr_27537[(10)] = inst_27490__$1);

return statearr_27537;
})();
if(cljs.core.truth_(inst_27493)){
var statearr_27538_27563 = state_27522__$1;
(statearr_27538_27563[(1)] = (8));

} else {
var statearr_27539_27564 = state_27522__$1;
(statearr_27539_27564[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (14))){
var inst_27515 = (state_27522[(2)]);
var inst_27516 = cljs.core.async.close_BANG_(out);
var state_27522__$1 = (function (){var statearr_27541 = state_27522;
(statearr_27541[(13)] = inst_27515);

return statearr_27541;
})();
var statearr_27542_27565 = state_27522__$1;
(statearr_27542_27565[(2)] = inst_27516);

(statearr_27542_27565[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (10))){
var inst_27505 = (state_27522[(2)]);
var state_27522__$1 = state_27522;
var statearr_27543_27566 = state_27522__$1;
(statearr_27543_27566[(2)] = inst_27505);

(statearr_27543_27566[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27523 === (8))){
var inst_27482 = (state_27522[(7)]);
var inst_27490 = (state_27522[(10)]);
var inst_27486 = (state_27522[(9)]);
var inst_27495 = inst_27482.push(inst_27486);
var tmp27540 = inst_27482;
var inst_27482__$1 = tmp27540;
var inst_27483 = inst_27490;
var state_27522__$1 = (function (){var statearr_27544 = state_27522;
(statearr_27544[(7)] = inst_27482__$1);

(statearr_27544[(14)] = inst_27495);

(statearr_27544[(8)] = inst_27483);

return statearr_27544;
})();
var statearr_27545_27567 = state_27522__$1;
(statearr_27545_27567[(2)] = null);

(statearr_27545_27567[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12815__auto___27553,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27553,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27549[(0)] = state_machine__12736__auto__);

(statearr_27549[(1)] = (1));

return statearr_27549;
});
var state_machine__12736__auto____1 = (function (state_27522){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27522);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27550){if((e27550 instanceof Object)){
var ex__12739__auto__ = e27550;
var statearr_27551_27568 = state_27522;
(statearr_27551_27568[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27522);

return cljs.core.constant$keyword$83;
} else {
throw e27550;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27569 = state_27522;
state_27522 = G__27569;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27522){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27553,out))
})();
var state__12817__auto__ = (function (){var statearr_27552 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27553);

return statearr_27552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27553,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
