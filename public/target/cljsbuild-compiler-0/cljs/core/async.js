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
if(typeof cljs.core.async.t24205 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24205 = (function (f,fn_handler,meta24206){
this.f = f;
this.fn_handler = fn_handler;
this.meta24206 = meta24206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24205.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24205.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24205.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24207){
var self__ = this;
var _24207__$1 = this;
return self__.meta24206;
});

cljs.core.async.t24205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24207,meta24206__$1){
var self__ = this;
var _24207__$1 = this;
return (new cljs.core.async.t24205(self__.f,self__.fn_handler,meta24206__$1));
});

cljs.core.async.t24205.cljs$lang$type = true;

cljs.core.async.t24205.cljs$lang$ctorStr = "cljs.core.async/t24205";

cljs.core.async.t24205.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24205");
});

cljs.core.async.__GT_t24205 = (function __GT_t24205(f__$1,fn_handler__$1,meta24206){
return (new cljs.core.async.t24205(f__$1,fn_handler__$1,meta24206));
});

}

return (new cljs.core.async.t24205(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24209 = buff;
if(G__24209){
var bit__4487__auto__ = null;
if(cljs.core.truth_((function (){var or__3806__auto__ = bit__4487__auto__;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return G__24209.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24209.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24209);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24209);
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
var val_24226 = (function (){var G__24223 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24223) : cljs.core.deref.call(null,G__24223));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24224_24227 = val_24226;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24224_24227) : fn1.call(null,G__24224_24227));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24226,ret){
return (function (){
var G__24225 = val_24226;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24225) : fn1.call(null,G__24225));
});})(val_24226,ret))
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
var G__24236 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24236) : cljs.core.deref.call(null,G__24236));
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
var ret = (function (){var G__24237 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24237) : cljs.core.deref.call(null,G__24237));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24238_24240 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24238_24240) : fn1.call(null,G__24238_24240));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__24239 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24239) : fn1.call(null,G__24239));
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
var n__4693__auto___24241 = n;
var x_24242 = (0);
while(true){
if((x_24242 < n__4693__auto___24241)){
(a[x_24242] = (0));

var G__24243 = (x_24242 + (1));
x_24242 = G__24243;
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

var G__24244 = (i + (1));
i = G__24244;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__24252 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24252) : cljs.core.atom.call(null,G__24252));
})();
if(typeof cljs.core.async.t24253 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24253 = (function (flag,alt_flag,meta24254){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24254 = meta24254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24253.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24256 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24256) : cljs.core.deref.call(null,G__24256));
});})(flag))
;

cljs.core.async.t24253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24257_24259 = self__.flag;
var G__24258_24260 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24257_24259,G__24258_24260) : cljs.core.reset_BANG_.call(null,G__24257_24259,G__24258_24260));

return true;
});})(flag))
;

cljs.core.async.t24253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24255){
var self__ = this;
var _24255__$1 = this;
return self__.meta24254;
});})(flag))
;

cljs.core.async.t24253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24255,meta24254__$1){
var self__ = this;
var _24255__$1 = this;
return (new cljs.core.async.t24253(self__.flag,self__.alt_flag,meta24254__$1));
});})(flag))
;

cljs.core.async.t24253.cljs$lang$type = true;

cljs.core.async.t24253.cljs$lang$ctorStr = "cljs.core.async/t24253";

cljs.core.async.t24253.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24253");
});})(flag))
;

cljs.core.async.__GT_t24253 = ((function (flag){
return (function __GT_t24253(flag__$1,alt_flag__$1,meta24254){
return (new cljs.core.async.t24253(flag__$1,alt_flag__$1,meta24254));
});})(flag))
;

}

return (new cljs.core.async.t24253(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24264 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24264 = (function (cb,flag,alt_handler,meta24265){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24265 = meta24265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t24264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24266){
var self__ = this;
var _24266__$1 = this;
return self__.meta24265;
});

cljs.core.async.t24264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24266,meta24265__$1){
var self__ = this;
var _24266__$1 = this;
return (new cljs.core.async.t24264(self__.cb,self__.flag,self__.alt_handler,meta24265__$1));
});

cljs.core.async.t24264.cljs$lang$type = true;

cljs.core.async.t24264.cljs$lang$ctorStr = "cljs.core.async/t24264";

cljs.core.async.t24264.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24264");
});

cljs.core.async.__GT_t24264 = (function __GT_t24264(cb__$1,flag__$1,alt_handler__$1,meta24265){
return (new cljs.core.async.t24264(cb__$1,flag__$1,alt_handler__$1,meta24265));
});

}

return (new cljs.core.async.t24264(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24274 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24274) : port.call(null,G__24274));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24275 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24275) : port.call(null,G__24275));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24267_SHARP_){
var G__24276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24267_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24276) : fret.call(null,G__24276));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24268_SHARP_){
var G__24277 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24268_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24277) : fret.call(null,G__24277));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24278 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24278) : cljs.core.deref.call(null,G__24278));
})(),(function (){var or__3806__auto__ = wport;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24279 = (i + (1));
i = G__24279;
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
var alts_BANG___delegate = function (ports,p__24280){
var map__24282 = p__24280;
var map__24282__$1 = ((cljs.core.seq_QMARK_(map__24282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24282):map__24282);
var opts = map__24282__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24280 = null;
if (arguments.length > 1) {
var G__24283__i = 0, G__24283__a = new Array(arguments.length -  1);
while (G__24283__i < G__24283__a.length) {G__24283__a[G__24283__i] = arguments[G__24283__i + 1]; ++G__24283__i;}
  p__24280 = new cljs.core.IndexedSeq(G__24283__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__24280);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24284){
var ports = cljs.core.first(arglist__24284);
var p__24280 = cljs.core.rest(arglist__24284);
return alts_BANG___delegate(ports,p__24280);
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
var c__12815__auto___24382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24382){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24382){
return (function (state_24358){
var state_val_24359 = (state_24358[(1)]);
if((state_val_24359 === (7))){
var inst_24354 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
var statearr_24360_24383 = state_24358__$1;
(statearr_24360_24383[(2)] = inst_24354);

(statearr_24360_24383[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (1))){
var state_24358__$1 = state_24358;
var statearr_24361_24384 = state_24358__$1;
(statearr_24361_24384[(2)] = null);

(statearr_24361_24384[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (4))){
var inst_24337 = (state_24358[(7)]);
var inst_24337__$1 = (state_24358[(2)]);
var inst_24338 = (inst_24337__$1 == null);
var state_24358__$1 = (function (){var statearr_24362 = state_24358;
(statearr_24362[(7)] = inst_24337__$1);

return statearr_24362;
})();
if(cljs.core.truth_(inst_24338)){
var statearr_24363_24385 = state_24358__$1;
(statearr_24363_24385[(1)] = (5));

} else {
var statearr_24364_24386 = state_24358__$1;
(statearr_24364_24386[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (13))){
var state_24358__$1 = state_24358;
var statearr_24365_24387 = state_24358__$1;
(statearr_24365_24387[(2)] = null);

(statearr_24365_24387[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (6))){
var inst_24337 = (state_24358[(7)]);
var state_24358__$1 = state_24358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24358__$1,(11),to,inst_24337);
} else {
if((state_val_24359 === (3))){
var inst_24356 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24358__$1,inst_24356);
} else {
if((state_val_24359 === (12))){
var state_24358__$1 = state_24358;
var statearr_24366_24388 = state_24358__$1;
(statearr_24366_24388[(2)] = null);

(statearr_24366_24388[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (2))){
var state_24358__$1 = state_24358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24358__$1,(4),from);
} else {
if((state_val_24359 === (11))){
var inst_24347 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
if(cljs.core.truth_(inst_24347)){
var statearr_24367_24389 = state_24358__$1;
(statearr_24367_24389[(1)] = (12));

} else {
var statearr_24368_24390 = state_24358__$1;
(statearr_24368_24390[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (9))){
var state_24358__$1 = state_24358;
var statearr_24369_24391 = state_24358__$1;
(statearr_24369_24391[(2)] = null);

(statearr_24369_24391[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (5))){
var state_24358__$1 = state_24358;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24370_24392 = state_24358__$1;
(statearr_24370_24392[(1)] = (8));

} else {
var statearr_24371_24393 = state_24358__$1;
(statearr_24371_24393[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (14))){
var inst_24352 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
var statearr_24372_24394 = state_24358__$1;
(statearr_24372_24394[(2)] = inst_24352);

(statearr_24372_24394[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (10))){
var inst_24344 = (state_24358[(2)]);
var state_24358__$1 = state_24358;
var statearr_24373_24395 = state_24358__$1;
(statearr_24373_24395[(2)] = inst_24344);

(statearr_24373_24395[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24359 === (8))){
var inst_24341 = cljs.core.async.close_BANG_(to);
var state_24358__$1 = state_24358;
var statearr_24374_24396 = state_24358__$1;
(statearr_24374_24396[(2)] = inst_24341);

(statearr_24374_24396[(1)] = (10));


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
});})(c__12815__auto___24382))
;
return ((function (switch__12735__auto__,c__12815__auto___24382){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24378 = [null,null,null,null,null,null,null,null];
(statearr_24378[(0)] = state_machine__12736__auto__);

(statearr_24378[(1)] = (1));

return statearr_24378;
});
var state_machine__12736__auto____1 = (function (state_24358){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24358);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24379){if((e24379 instanceof Object)){
var ex__12739__auto__ = e24379;
var statearr_24380_24397 = state_24358;
(statearr_24380_24397[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24358);

return cljs.core.constant$keyword$83;
} else {
throw e24379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24398 = state_24358;
state_24358 = G__24398;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24358){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24382))
})();
var state__12817__auto__ = (function (){var statearr_24381 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24382);

return statearr_24381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24382))
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
return (function (p__24584){
var vec__24585 = p__24584;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24585,(1),null);
var job = vec__24585;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12815__auto___24769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24769,res,vec__24585,v,p,job,jobs,results){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24769,res,vec__24585,v,p,job,jobs,results){
return (function (state_24590){
var state_val_24591 = (state_24590[(1)]);
if((state_val_24591 === (2))){
var inst_24587 = (state_24590[(2)]);
var inst_24588 = cljs.core.async.close_BANG_(res);
var state_24590__$1 = (function (){var statearr_24592 = state_24590;
(statearr_24592[(7)] = inst_24587);

return statearr_24592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24590__$1,inst_24588);
} else {
if((state_val_24591 === (1))){
var state_24590__$1 = state_24590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24590__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12815__auto___24769,res,vec__24585,v,p,job,jobs,results))
;
return ((function (switch__12735__auto__,c__12815__auto___24769,res,vec__24585,v,p,job,jobs,results){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24596 = [null,null,null,null,null,null,null,null];
(statearr_24596[(0)] = state_machine__12736__auto__);

(statearr_24596[(1)] = (1));

return statearr_24596;
});
var state_machine__12736__auto____1 = (function (state_24590){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24590);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24597){if((e24597 instanceof Object)){
var ex__12739__auto__ = e24597;
var statearr_24598_24770 = state_24590;
(statearr_24598_24770[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24590);

return cljs.core.constant$keyword$83;
} else {
throw e24597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24771 = state_24590;
state_24590 = G__24771;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24590){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24769,res,vec__24585,v,p,job,jobs,results))
})();
var state__12817__auto__ = (function (){var statearr_24599 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24769);

return statearr_24599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24769,res,vec__24585,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24600){
var vec__24601 = p__24600;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24601,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24601,(1),null);
var job = vec__24601;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__24602_24772 = v;
var G__24603_24773 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24602_24772,G__24603_24773) : xf.call(null,G__24602_24772,G__24603_24773));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4693__auto___24774 = n;
var __24775 = (0);
while(true){
if((__24775 < n__4693__auto___24774)){
var G__24604_24776 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24604_24776) {
case "async":
var c__12815__auto___24778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24775,c__12815__auto___24778,G__24604_24776,n__4693__auto___24774,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (__24775,c__12815__auto___24778,G__24604_24776,n__4693__auto___24774,jobs,results,process,async){
return (function (state_24617){
var state_val_24618 = (state_24617[(1)]);
if((state_val_24618 === (7))){
var inst_24613 = (state_24617[(2)]);
var state_24617__$1 = state_24617;
var statearr_24619_24779 = state_24617__$1;
(statearr_24619_24779[(2)] = inst_24613);

(statearr_24619_24779[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24618 === (6))){
var state_24617__$1 = state_24617;
var statearr_24620_24780 = state_24617__$1;
(statearr_24620_24780[(2)] = null);

(statearr_24620_24780[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24618 === (5))){
var state_24617__$1 = state_24617;
var statearr_24621_24781 = state_24617__$1;
(statearr_24621_24781[(2)] = null);

(statearr_24621_24781[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24618 === (4))){
var inst_24607 = (state_24617[(2)]);
var inst_24608 = async(inst_24607);
var state_24617__$1 = state_24617;
if(cljs.core.truth_(inst_24608)){
var statearr_24622_24782 = state_24617__$1;
(statearr_24622_24782[(1)] = (5));

} else {
var statearr_24623_24783 = state_24617__$1;
(statearr_24623_24783[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24618 === (3))){
var inst_24615 = (state_24617[(2)]);
var state_24617__$1 = state_24617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24617__$1,inst_24615);
} else {
if((state_val_24618 === (2))){
var state_24617__$1 = state_24617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24617__$1,(4),jobs);
} else {
if((state_val_24618 === (1))){
var state_24617__$1 = state_24617;
var statearr_24624_24784 = state_24617__$1;
(statearr_24624_24784[(2)] = null);

(statearr_24624_24784[(1)] = (2));


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
});})(__24775,c__12815__auto___24778,G__24604_24776,n__4693__auto___24774,jobs,results,process,async))
;
return ((function (__24775,switch__12735__auto__,c__12815__auto___24778,G__24604_24776,n__4693__auto___24774,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24628 = [null,null,null,null,null,null,null];
(statearr_24628[(0)] = state_machine__12736__auto__);

(statearr_24628[(1)] = (1));

return statearr_24628;
});
var state_machine__12736__auto____1 = (function (state_24617){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24617);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24629){if((e24629 instanceof Object)){
var ex__12739__auto__ = e24629;
var statearr_24630_24785 = state_24617;
(statearr_24630_24785[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24617);

return cljs.core.constant$keyword$83;
} else {
throw e24629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24786 = state_24617;
state_24617 = G__24786;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24617){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(__24775,switch__12735__auto__,c__12815__auto___24778,G__24604_24776,n__4693__auto___24774,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24631 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24778);

return statearr_24631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(__24775,c__12815__auto___24778,G__24604_24776,n__4693__auto___24774,jobs,results,process,async))
);


break;
case "compute":
var c__12815__auto___24787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24775,c__12815__auto___24787,G__24604_24776,n__4693__auto___24774,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (__24775,c__12815__auto___24787,G__24604_24776,n__4693__auto___24774,jobs,results,process,async){
return (function (state_24644){
var state_val_24645 = (state_24644[(1)]);
if((state_val_24645 === (7))){
var inst_24640 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
var statearr_24646_24788 = state_24644__$1;
(statearr_24646_24788[(2)] = inst_24640);

(statearr_24646_24788[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24645 === (6))){
var state_24644__$1 = state_24644;
var statearr_24647_24789 = state_24644__$1;
(statearr_24647_24789[(2)] = null);

(statearr_24647_24789[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24645 === (5))){
var state_24644__$1 = state_24644;
var statearr_24648_24790 = state_24644__$1;
(statearr_24648_24790[(2)] = null);

(statearr_24648_24790[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24645 === (4))){
var inst_24634 = (state_24644[(2)]);
var inst_24635 = process(inst_24634);
var state_24644__$1 = state_24644;
if(cljs.core.truth_(inst_24635)){
var statearr_24649_24791 = state_24644__$1;
(statearr_24649_24791[(1)] = (5));

} else {
var statearr_24650_24792 = state_24644__$1;
(statearr_24650_24792[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24645 === (3))){
var inst_24642 = (state_24644[(2)]);
var state_24644__$1 = state_24644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24644__$1,inst_24642);
} else {
if((state_val_24645 === (2))){
var state_24644__$1 = state_24644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24644__$1,(4),jobs);
} else {
if((state_val_24645 === (1))){
var state_24644__$1 = state_24644;
var statearr_24651_24793 = state_24644__$1;
(statearr_24651_24793[(2)] = null);

(statearr_24651_24793[(1)] = (2));


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
});})(__24775,c__12815__auto___24787,G__24604_24776,n__4693__auto___24774,jobs,results,process,async))
;
return ((function (__24775,switch__12735__auto__,c__12815__auto___24787,G__24604_24776,n__4693__auto___24774,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24655 = [null,null,null,null,null,null,null];
(statearr_24655[(0)] = state_machine__12736__auto__);

(statearr_24655[(1)] = (1));

return statearr_24655;
});
var state_machine__12736__auto____1 = (function (state_24644){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24644);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24656){if((e24656 instanceof Object)){
var ex__12739__auto__ = e24656;
var statearr_24657_24794 = state_24644;
(statearr_24657_24794[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24644);

return cljs.core.constant$keyword$83;
} else {
throw e24656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24795 = state_24644;
state_24644 = G__24795;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24644){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(__24775,switch__12735__auto__,c__12815__auto___24787,G__24604_24776,n__4693__auto___24774,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24658 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24787);

return statearr_24658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(__24775,c__12815__auto___24787,G__24604_24776,n__4693__auto___24774,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24796 = (__24775 + (1));
__24775 = G__24796;
continue;
} else {
}
break;
}

var c__12815__auto___24797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24797,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24797,jobs,results,process,async){
return (function (state_24680){
var state_val_24681 = (state_24680[(1)]);
if((state_val_24681 === (9))){
var inst_24673 = (state_24680[(2)]);
var state_24680__$1 = (function (){var statearr_24682 = state_24680;
(statearr_24682[(7)] = inst_24673);

return statearr_24682;
})();
var statearr_24683_24798 = state_24680__$1;
(statearr_24683_24798[(2)] = null);

(statearr_24683_24798[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24681 === (8))){
var inst_24666 = (state_24680[(8)]);
var inst_24671 = (state_24680[(2)]);
var state_24680__$1 = (function (){var statearr_24684 = state_24680;
(statearr_24684[(9)] = inst_24671);

return statearr_24684;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24680__$1,(9),results,inst_24666);
} else {
if((state_val_24681 === (7))){
var inst_24676 = (state_24680[(2)]);
var state_24680__$1 = state_24680;
var statearr_24685_24799 = state_24680__$1;
(statearr_24685_24799[(2)] = inst_24676);

(statearr_24685_24799[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24681 === (6))){
var inst_24661 = (state_24680[(10)]);
var inst_24666 = (state_24680[(8)]);
var inst_24666__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24667 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24668 = [inst_24661,inst_24666__$1];
var inst_24669 = (new cljs.core.PersistentVector(null,2,(5),inst_24667,inst_24668,null));
var state_24680__$1 = (function (){var statearr_24686 = state_24680;
(statearr_24686[(8)] = inst_24666__$1);

return statearr_24686;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24680__$1,(8),jobs,inst_24669);
} else {
if((state_val_24681 === (5))){
var inst_24664 = cljs.core.async.close_BANG_(jobs);
var state_24680__$1 = state_24680;
var statearr_24687_24800 = state_24680__$1;
(statearr_24687_24800[(2)] = inst_24664);

(statearr_24687_24800[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24681 === (4))){
var inst_24661 = (state_24680[(10)]);
var inst_24661__$1 = (state_24680[(2)]);
var inst_24662 = (inst_24661__$1 == null);
var state_24680__$1 = (function (){var statearr_24688 = state_24680;
(statearr_24688[(10)] = inst_24661__$1);

return statearr_24688;
})();
if(cljs.core.truth_(inst_24662)){
var statearr_24689_24801 = state_24680__$1;
(statearr_24689_24801[(1)] = (5));

} else {
var statearr_24690_24802 = state_24680__$1;
(statearr_24690_24802[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24681 === (3))){
var inst_24678 = (state_24680[(2)]);
var state_24680__$1 = state_24680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24680__$1,inst_24678);
} else {
if((state_val_24681 === (2))){
var state_24680__$1 = state_24680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24680__$1,(4),from);
} else {
if((state_val_24681 === (1))){
var state_24680__$1 = state_24680;
var statearr_24691_24803 = state_24680__$1;
(statearr_24691_24803[(2)] = null);

(statearr_24691_24803[(1)] = (2));


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
});})(c__12815__auto___24797,jobs,results,process,async))
;
return ((function (switch__12735__auto__,c__12815__auto___24797,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24695[(0)] = state_machine__12736__auto__);

(statearr_24695[(1)] = (1));

return statearr_24695;
});
var state_machine__12736__auto____1 = (function (state_24680){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24680);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24696){if((e24696 instanceof Object)){
var ex__12739__auto__ = e24696;
var statearr_24697_24804 = state_24680;
(statearr_24697_24804[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24680);

return cljs.core.constant$keyword$83;
} else {
throw e24696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24805 = state_24680;
state_24680 = G__24805;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24680){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24797,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24698 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24797);

return statearr_24698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24797,jobs,results,process,async))
);


var c__12815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto__,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto__,jobs,results,process,async){
return (function (state_24736){
var state_val_24737 = (state_24736[(1)]);
if((state_val_24737 === (7))){
var inst_24732 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24738_24806 = state_24736__$1;
(statearr_24738_24806[(2)] = inst_24732);

(statearr_24738_24806[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (20))){
var state_24736__$1 = state_24736;
var statearr_24739_24807 = state_24736__$1;
(statearr_24739_24807[(2)] = null);

(statearr_24739_24807[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (1))){
var state_24736__$1 = state_24736;
var statearr_24740_24808 = state_24736__$1;
(statearr_24740_24808[(2)] = null);

(statearr_24740_24808[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (4))){
var inst_24701 = (state_24736[(7)]);
var inst_24701__$1 = (state_24736[(2)]);
var inst_24702 = (inst_24701__$1 == null);
var state_24736__$1 = (function (){var statearr_24741 = state_24736;
(statearr_24741[(7)] = inst_24701__$1);

return statearr_24741;
})();
if(cljs.core.truth_(inst_24702)){
var statearr_24742_24809 = state_24736__$1;
(statearr_24742_24809[(1)] = (5));

} else {
var statearr_24743_24810 = state_24736__$1;
(statearr_24743_24810[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (15))){
var inst_24714 = (state_24736[(8)]);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24736__$1,(18),to,inst_24714);
} else {
if((state_val_24737 === (21))){
var inst_24727 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24744_24811 = state_24736__$1;
(statearr_24744_24811[(2)] = inst_24727);

(statearr_24744_24811[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (13))){
var inst_24729 = (state_24736[(2)]);
var state_24736__$1 = (function (){var statearr_24745 = state_24736;
(statearr_24745[(9)] = inst_24729);

return statearr_24745;
})();
var statearr_24746_24812 = state_24736__$1;
(statearr_24746_24812[(2)] = null);

(statearr_24746_24812[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (6))){
var inst_24701 = (state_24736[(7)]);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24736__$1,(11),inst_24701);
} else {
if((state_val_24737 === (17))){
var inst_24722 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
if(cljs.core.truth_(inst_24722)){
var statearr_24747_24813 = state_24736__$1;
(statearr_24747_24813[(1)] = (19));

} else {
var statearr_24748_24814 = state_24736__$1;
(statearr_24748_24814[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (3))){
var inst_24734 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24736__$1,inst_24734);
} else {
if((state_val_24737 === (12))){
var inst_24711 = (state_24736[(10)]);
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24736__$1,(14),inst_24711);
} else {
if((state_val_24737 === (2))){
var state_24736__$1 = state_24736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24736__$1,(4),results);
} else {
if((state_val_24737 === (19))){
var state_24736__$1 = state_24736;
var statearr_24749_24815 = state_24736__$1;
(statearr_24749_24815[(2)] = null);

(statearr_24749_24815[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (11))){
var inst_24711 = (state_24736[(2)]);
var state_24736__$1 = (function (){var statearr_24750 = state_24736;
(statearr_24750[(10)] = inst_24711);

return statearr_24750;
})();
var statearr_24751_24816 = state_24736__$1;
(statearr_24751_24816[(2)] = null);

(statearr_24751_24816[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (9))){
var state_24736__$1 = state_24736;
var statearr_24752_24817 = state_24736__$1;
(statearr_24752_24817[(2)] = null);

(statearr_24752_24817[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (5))){
var state_24736__$1 = state_24736;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24753_24818 = state_24736__$1;
(statearr_24753_24818[(1)] = (8));

} else {
var statearr_24754_24819 = state_24736__$1;
(statearr_24754_24819[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (14))){
var inst_24716 = (state_24736[(11)]);
var inst_24714 = (state_24736[(8)]);
var inst_24714__$1 = (state_24736[(2)]);
var inst_24715 = (inst_24714__$1 == null);
var inst_24716__$1 = cljs.core.not(inst_24715);
var state_24736__$1 = (function (){var statearr_24755 = state_24736;
(statearr_24755[(11)] = inst_24716__$1);

(statearr_24755[(8)] = inst_24714__$1);

return statearr_24755;
})();
if(inst_24716__$1){
var statearr_24756_24820 = state_24736__$1;
(statearr_24756_24820[(1)] = (15));

} else {
var statearr_24757_24821 = state_24736__$1;
(statearr_24757_24821[(1)] = (16));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (16))){
var inst_24716 = (state_24736[(11)]);
var state_24736__$1 = state_24736;
var statearr_24758_24822 = state_24736__$1;
(statearr_24758_24822[(2)] = inst_24716);

(statearr_24758_24822[(1)] = (17));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (10))){
var inst_24708 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24759_24823 = state_24736__$1;
(statearr_24759_24823[(2)] = inst_24708);

(statearr_24759_24823[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (18))){
var inst_24719 = (state_24736[(2)]);
var state_24736__$1 = state_24736;
var statearr_24760_24824 = state_24736__$1;
(statearr_24760_24824[(2)] = inst_24719);

(statearr_24760_24824[(1)] = (17));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24737 === (8))){
var inst_24705 = cljs.core.async.close_BANG_(to);
var state_24736__$1 = state_24736;
var statearr_24761_24825 = state_24736__$1;
(statearr_24761_24825[(2)] = inst_24705);

(statearr_24761_24825[(1)] = (10));


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
var statearr_24765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24765[(0)] = state_machine__12736__auto__);

(statearr_24765[(1)] = (1));

return statearr_24765;
});
var state_machine__12736__auto____1 = (function (state_24736){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24736);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24766){if((e24766 instanceof Object)){
var ex__12739__auto__ = e24766;
var statearr_24767_24826 = state_24736;
(statearr_24767_24826[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24736);

return cljs.core.constant$keyword$83;
} else {
throw e24766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24827 = state_24736;
state_24736 = G__24827;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24736){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24768 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_24768;
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
var c__12815__auto___24950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24950,tc,fc){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24950,tc,fc){
return (function (state_24924){
var state_val_24925 = (state_24924[(1)]);
if((state_val_24925 === (7))){
var inst_24920 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
var statearr_24926_24951 = state_24924__$1;
(statearr_24926_24951[(2)] = inst_24920);

(statearr_24926_24951[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (1))){
var state_24924__$1 = state_24924;
var statearr_24927_24952 = state_24924__$1;
(statearr_24927_24952[(2)] = null);

(statearr_24927_24952[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (4))){
var inst_24901 = (state_24924[(7)]);
var inst_24901__$1 = (state_24924[(2)]);
var inst_24902 = (inst_24901__$1 == null);
var state_24924__$1 = (function (){var statearr_24928 = state_24924;
(statearr_24928[(7)] = inst_24901__$1);

return statearr_24928;
})();
if(cljs.core.truth_(inst_24902)){
var statearr_24929_24953 = state_24924__$1;
(statearr_24929_24953[(1)] = (5));

} else {
var statearr_24930_24954 = state_24924__$1;
(statearr_24930_24954[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (13))){
var state_24924__$1 = state_24924;
var statearr_24931_24955 = state_24924__$1;
(statearr_24931_24955[(2)] = null);

(statearr_24931_24955[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (6))){
var inst_24901 = (state_24924[(7)]);
var inst_24907 = (function (){var G__24932 = inst_24901;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24932) : p.call(null,G__24932));
})();
var state_24924__$1 = state_24924;
if(cljs.core.truth_(inst_24907)){
var statearr_24933_24956 = state_24924__$1;
(statearr_24933_24956[(1)] = (9));

} else {
var statearr_24934_24957 = state_24924__$1;
(statearr_24934_24957[(1)] = (10));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (3))){
var inst_24922 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24924__$1,inst_24922);
} else {
if((state_val_24925 === (12))){
var state_24924__$1 = state_24924;
var statearr_24935_24958 = state_24924__$1;
(statearr_24935_24958[(2)] = null);

(statearr_24935_24958[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (2))){
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24924__$1,(4),ch);
} else {
if((state_val_24925 === (11))){
var inst_24901 = (state_24924[(7)]);
var inst_24911 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24924__$1,(8),inst_24911,inst_24901);
} else {
if((state_val_24925 === (9))){
var state_24924__$1 = state_24924;
var statearr_24936_24959 = state_24924__$1;
(statearr_24936_24959[(2)] = tc);

(statearr_24936_24959[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (5))){
var inst_24904 = cljs.core.async.close_BANG_(tc);
var inst_24905 = cljs.core.async.close_BANG_(fc);
var state_24924__$1 = (function (){var statearr_24937 = state_24924;
(statearr_24937[(8)] = inst_24904);

return statearr_24937;
})();
var statearr_24938_24960 = state_24924__$1;
(statearr_24938_24960[(2)] = inst_24905);

(statearr_24938_24960[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (14))){
var inst_24918 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
var statearr_24939_24961 = state_24924__$1;
(statearr_24939_24961[(2)] = inst_24918);

(statearr_24939_24961[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (10))){
var state_24924__$1 = state_24924;
var statearr_24940_24962 = state_24924__$1;
(statearr_24940_24962[(2)] = fc);

(statearr_24940_24962[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24925 === (8))){
var inst_24913 = (state_24924[(2)]);
var state_24924__$1 = state_24924;
if(cljs.core.truth_(inst_24913)){
var statearr_24941_24963 = state_24924__$1;
(statearr_24941_24963[(1)] = (12));

} else {
var statearr_24942_24964 = state_24924__$1;
(statearr_24942_24964[(1)] = (13));

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
});})(c__12815__auto___24950,tc,fc))
;
return ((function (switch__12735__auto__,c__12815__auto___24950,tc,fc){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24946 = [null,null,null,null,null,null,null,null,null];
(statearr_24946[(0)] = state_machine__12736__auto__);

(statearr_24946[(1)] = (1));

return statearr_24946;
});
var state_machine__12736__auto____1 = (function (state_24924){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24924);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24947){if((e24947 instanceof Object)){
var ex__12739__auto__ = e24947;
var statearr_24948_24965 = state_24924;
(statearr_24948_24965[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24924);

return cljs.core.constant$keyword$83;
} else {
throw e24947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24966 = state_24924;
state_24924 = G__24966;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24924){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24950,tc,fc))
})();
var state__12817__auto__ = (function (){var statearr_24949 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24950);

return statearr_24949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24950,tc,fc))
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
return (function (state_25015){
var state_val_25016 = (state_25015[(1)]);
if((state_val_25016 === (7))){
var inst_25011 = (state_25015[(2)]);
var state_25015__$1 = state_25015;
var statearr_25017_25035 = state_25015__$1;
(statearr_25017_25035[(2)] = inst_25011);

(statearr_25017_25035[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25016 === (6))){
var inst_25004 = (state_25015[(7)]);
var inst_25001 = (state_25015[(8)]);
var inst_25008 = (function (){var G__25018 = inst_25001;
var G__25019 = inst_25004;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25018,G__25019) : f.call(null,G__25018,G__25019));
})();
var inst_25001__$1 = inst_25008;
var state_25015__$1 = (function (){var statearr_25020 = state_25015;
(statearr_25020[(8)] = inst_25001__$1);

return statearr_25020;
})();
var statearr_25021_25036 = state_25015__$1;
(statearr_25021_25036[(2)] = null);

(statearr_25021_25036[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25016 === (5))){
var inst_25001 = (state_25015[(8)]);
var state_25015__$1 = state_25015;
var statearr_25022_25037 = state_25015__$1;
(statearr_25022_25037[(2)] = inst_25001);

(statearr_25022_25037[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25016 === (4))){
var inst_25004 = (state_25015[(7)]);
var inst_25004__$1 = (state_25015[(2)]);
var inst_25005 = (inst_25004__$1 == null);
var state_25015__$1 = (function (){var statearr_25023 = state_25015;
(statearr_25023[(7)] = inst_25004__$1);

return statearr_25023;
})();
if(cljs.core.truth_(inst_25005)){
var statearr_25024_25038 = state_25015__$1;
(statearr_25024_25038[(1)] = (5));

} else {
var statearr_25025_25039 = state_25015__$1;
(statearr_25025_25039[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25016 === (3))){
var inst_25013 = (state_25015[(2)]);
var state_25015__$1 = state_25015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25015__$1,inst_25013);
} else {
if((state_val_25016 === (2))){
var state_25015__$1 = state_25015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25015__$1,(4),ch);
} else {
if((state_val_25016 === (1))){
var inst_25001 = init;
var state_25015__$1 = (function (){var statearr_25026 = state_25015;
(statearr_25026[(8)] = inst_25001);

return statearr_25026;
})();
var statearr_25027_25040 = state_25015__$1;
(statearr_25027_25040[(2)] = null);

(statearr_25027_25040[(1)] = (2));


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
var statearr_25031 = [null,null,null,null,null,null,null,null,null];
(statearr_25031[(0)] = state_machine__12736__auto__);

(statearr_25031[(1)] = (1));

return statearr_25031;
});
var state_machine__12736__auto____1 = (function (state_25015){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25015);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25032){if((e25032 instanceof Object)){
var ex__12739__auto__ = e25032;
var statearr_25033_25041 = state_25015;
(statearr_25033_25041[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25015);

return cljs.core.constant$keyword$83;
} else {
throw e25032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25042 = state_25015;
state_25015 = G__25042;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25015){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_25034 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_25034;
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
return (function (state_25119){
var state_val_25120 = (state_25119[(1)]);
if((state_val_25120 === (7))){
var inst_25101 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25121_25144 = state_25119__$1;
(statearr_25121_25144[(2)] = inst_25101);

(statearr_25121_25144[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (1))){
var inst_25095 = cljs.core.seq(coll);
var inst_25096 = inst_25095;
var state_25119__$1 = (function (){var statearr_25122 = state_25119;
(statearr_25122[(7)] = inst_25096);

return statearr_25122;
})();
var statearr_25123_25145 = state_25119__$1;
(statearr_25123_25145[(2)] = null);

(statearr_25123_25145[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (4))){
var inst_25096 = (state_25119[(7)]);
var inst_25099 = cljs.core.first(inst_25096);
var state_25119__$1 = state_25119;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25119__$1,(7),ch,inst_25099);
} else {
if((state_val_25120 === (13))){
var inst_25113 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25124_25146 = state_25119__$1;
(statearr_25124_25146[(2)] = inst_25113);

(statearr_25124_25146[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (6))){
var inst_25104 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25104)){
var statearr_25125_25147 = state_25119__$1;
(statearr_25125_25147[(1)] = (8));

} else {
var statearr_25126_25148 = state_25119__$1;
(statearr_25126_25148[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (3))){
var inst_25117 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25119__$1,inst_25117);
} else {
if((state_val_25120 === (12))){
var state_25119__$1 = state_25119;
var statearr_25127_25149 = state_25119__$1;
(statearr_25127_25149[(2)] = null);

(statearr_25127_25149[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (2))){
var inst_25096 = (state_25119[(7)]);
var state_25119__$1 = state_25119;
if(cljs.core.truth_(inst_25096)){
var statearr_25128_25150 = state_25119__$1;
(statearr_25128_25150[(1)] = (4));

} else {
var statearr_25129_25151 = state_25119__$1;
(statearr_25129_25151[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (11))){
var inst_25110 = cljs.core.async.close_BANG_(ch);
var state_25119__$1 = state_25119;
var statearr_25130_25152 = state_25119__$1;
(statearr_25130_25152[(2)] = inst_25110);

(statearr_25130_25152[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (9))){
var state_25119__$1 = state_25119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25131_25153 = state_25119__$1;
(statearr_25131_25153[(1)] = (11));

} else {
var statearr_25132_25154 = state_25119__$1;
(statearr_25132_25154[(1)] = (12));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (5))){
var inst_25096 = (state_25119[(7)]);
var state_25119__$1 = state_25119;
var statearr_25133_25155 = state_25119__$1;
(statearr_25133_25155[(2)] = inst_25096);

(statearr_25133_25155[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (10))){
var inst_25115 = (state_25119[(2)]);
var state_25119__$1 = state_25119;
var statearr_25134_25156 = state_25119__$1;
(statearr_25134_25156[(2)] = inst_25115);

(statearr_25134_25156[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25120 === (8))){
var inst_25096 = (state_25119[(7)]);
var inst_25106 = cljs.core.next(inst_25096);
var inst_25096__$1 = inst_25106;
var state_25119__$1 = (function (){var statearr_25135 = state_25119;
(statearr_25135[(7)] = inst_25096__$1);

return statearr_25135;
})();
var statearr_25136_25157 = state_25119__$1;
(statearr_25136_25157[(2)] = null);

(statearr_25136_25157[(1)] = (2));


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
var statearr_25140 = [null,null,null,null,null,null,null,null];
(statearr_25140[(0)] = state_machine__12736__auto__);

(statearr_25140[(1)] = (1));

return statearr_25140;
});
var state_machine__12736__auto____1 = (function (state_25119){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25119);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25141){if((e25141 instanceof Object)){
var ex__12739__auto__ = e25141;
var statearr_25142_25158 = state_25119;
(statearr_25142_25158[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25119);

return cljs.core.constant$keyword$83;
} else {
throw e25141;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25159 = state_25119;
state_25119 = G__25159;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25119){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_25143 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_25143;
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

cljs.core.async.Mux = (function (){var obj25161 = {};
return obj25161;
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
return (function (){var or__3806__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__25165 = x__4450__auto__;
return goog.typeOf(G__25165);
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


cljs.core.async.Mult = (function (){var obj25167 = {};
return obj25167;
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
return (function (){var or__3806__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__25171 = x__4450__auto__;
return goog.typeOf(G__25171);
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
return (function (){var or__3806__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__25175 = x__4450__auto__;
return goog.typeOf(G__25175);
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
return (function (){var or__3806__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__25179 = x__4450__auto__;
return goog.typeOf(G__25179);
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
var cs = (function (){var G__25409 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25409) : cljs.core.atom.call(null,G__25409));
})();
var m = (function (){
if(typeof cljs.core.async.t25410 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25410 = (function (cs,ch,mult,meta25411){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25411 = meta25411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25410.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25410.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25410.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25410.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25413_25638 = self__.cs;
var G__25414_25639 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25413_25638,G__25414_25639) : cljs.core.reset_BANG_.call(null,G__25413_25638,G__25414_25639));

return null;
});})(cs))
;

cljs.core.async.t25410.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25412){
var self__ = this;
var _25412__$1 = this;
return self__.meta25411;
});})(cs))
;

cljs.core.async.t25410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25412,meta25411__$1){
var self__ = this;
var _25412__$1 = this;
return (new cljs.core.async.t25410(self__.cs,self__.ch,self__.mult,meta25411__$1));
});})(cs))
;

cljs.core.async.t25410.cljs$lang$type = true;

cljs.core.async.t25410.cljs$lang$ctorStr = "cljs.core.async/t25410";

cljs.core.async.t25410.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t25410");
});})(cs))
;

cljs.core.async.__GT_t25410 = ((function (cs){
return (function __GT_t25410(cs__$1,ch__$1,mult__$1,meta25411){
return (new cljs.core.async.t25410(cs__$1,ch__$1,mult__$1,meta25411));
});})(cs))
;

}

return (new cljs.core.async.t25410(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__25415 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25415) : cljs.core.atom.call(null,G__25415));
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
var c__12815__auto___25640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___25640,cs,m,dchan,dctr,done){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___25640,cs,m,dchan,dctr,done){
return (function (state_25546){
var state_val_25547 = (state_25546[(1)]);
if((state_val_25547 === (7))){
var inst_25542 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25548_25641 = state_25546__$1;
(statearr_25548_25641[(2)] = inst_25542);

(statearr_25548_25641[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (20))){
var inst_25447 = (state_25546[(7)]);
var inst_25457 = cljs.core.first(inst_25447);
var inst_25458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25457,(0),null);
var inst_25459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25457,(1),null);
var state_25546__$1 = (function (){var statearr_25549 = state_25546;
(statearr_25549[(8)] = inst_25458);

return statearr_25549;
})();
if(cljs.core.truth_(inst_25459)){
var statearr_25550_25642 = state_25546__$1;
(statearr_25550_25642[(1)] = (22));

} else {
var statearr_25551_25643 = state_25546__$1;
(statearr_25551_25643[(1)] = (23));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (27))){
var inst_25494 = (state_25546[(9)]);
var inst_25418 = (state_25546[(10)]);
var inst_25489 = (state_25546[(11)]);
var inst_25487 = (state_25546[(12)]);
var inst_25494__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25487,inst_25489);
var inst_25495 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25494__$1,inst_25418,done);
var state_25546__$1 = (function (){var statearr_25552 = state_25546;
(statearr_25552[(9)] = inst_25494__$1);

return statearr_25552;
})();
if(cljs.core.truth_(inst_25495)){
var statearr_25553_25644 = state_25546__$1;
(statearr_25553_25644[(1)] = (30));

} else {
var statearr_25554_25645 = state_25546__$1;
(statearr_25554_25645[(1)] = (31));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (1))){
var state_25546__$1 = state_25546;
var statearr_25555_25646 = state_25546__$1;
(statearr_25555_25646[(2)] = null);

(statearr_25555_25646[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (24))){
var inst_25447 = (state_25546[(7)]);
var inst_25464 = (state_25546[(2)]);
var inst_25465 = cljs.core.next(inst_25447);
var inst_25427 = inst_25465;
var inst_25428 = null;
var inst_25429 = (0);
var inst_25430 = (0);
var state_25546__$1 = (function (){var statearr_25556 = state_25546;
(statearr_25556[(13)] = inst_25428);

(statearr_25556[(14)] = inst_25427);

(statearr_25556[(15)] = inst_25430);

(statearr_25556[(16)] = inst_25429);

(statearr_25556[(17)] = inst_25464);

return statearr_25556;
})();
var statearr_25557_25647 = state_25546__$1;
(statearr_25557_25647[(2)] = null);

(statearr_25557_25647[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (39))){
var state_25546__$1 = state_25546;
var statearr_25561_25648 = state_25546__$1;
(statearr_25561_25648[(2)] = null);

(statearr_25561_25648[(1)] = (41));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (4))){
var inst_25418 = (state_25546[(10)]);
var inst_25418__$1 = (state_25546[(2)]);
var inst_25419 = (inst_25418__$1 == null);
var state_25546__$1 = (function (){var statearr_25562 = state_25546;
(statearr_25562[(10)] = inst_25418__$1);

return statearr_25562;
})();
if(cljs.core.truth_(inst_25419)){
var statearr_25563_25649 = state_25546__$1;
(statearr_25563_25649[(1)] = (5));

} else {
var statearr_25564_25650 = state_25546__$1;
(statearr_25564_25650[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (15))){
var inst_25428 = (state_25546[(13)]);
var inst_25427 = (state_25546[(14)]);
var inst_25430 = (state_25546[(15)]);
var inst_25429 = (state_25546[(16)]);
var inst_25443 = (state_25546[(2)]);
var inst_25444 = (inst_25430 + (1));
var tmp25558 = inst_25428;
var tmp25559 = inst_25427;
var tmp25560 = inst_25429;
var inst_25427__$1 = tmp25559;
var inst_25428__$1 = tmp25558;
var inst_25429__$1 = tmp25560;
var inst_25430__$1 = inst_25444;
var state_25546__$1 = (function (){var statearr_25565 = state_25546;
(statearr_25565[(13)] = inst_25428__$1);

(statearr_25565[(14)] = inst_25427__$1);

(statearr_25565[(15)] = inst_25430__$1);

(statearr_25565[(16)] = inst_25429__$1);

(statearr_25565[(18)] = inst_25443);

return statearr_25565;
})();
var statearr_25566_25651 = state_25546__$1;
(statearr_25566_25651[(2)] = null);

(statearr_25566_25651[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (21))){
var inst_25468 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25570_25652 = state_25546__$1;
(statearr_25570_25652[(2)] = inst_25468);

(statearr_25570_25652[(1)] = (18));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (31))){
var inst_25494 = (state_25546[(9)]);
var inst_25498 = done(null);
var inst_25499 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25494);
var state_25546__$1 = (function (){var statearr_25571 = state_25546;
(statearr_25571[(19)] = inst_25498);

return statearr_25571;
})();
var statearr_25572_25653 = state_25546__$1;
(statearr_25572_25653[(2)] = inst_25499);

(statearr_25572_25653[(1)] = (32));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (32))){
var inst_25486 = (state_25546[(20)]);
var inst_25489 = (state_25546[(11)]);
var inst_25488 = (state_25546[(21)]);
var inst_25487 = (state_25546[(12)]);
var inst_25501 = (state_25546[(2)]);
var inst_25502 = (inst_25489 + (1));
var tmp25567 = inst_25486;
var tmp25568 = inst_25488;
var tmp25569 = inst_25487;
var inst_25486__$1 = tmp25567;
var inst_25487__$1 = tmp25569;
var inst_25488__$1 = tmp25568;
var inst_25489__$1 = inst_25502;
var state_25546__$1 = (function (){var statearr_25573 = state_25546;
(statearr_25573[(20)] = inst_25486__$1);

(statearr_25573[(11)] = inst_25489__$1);

(statearr_25573[(21)] = inst_25488__$1);

(statearr_25573[(12)] = inst_25487__$1);

(statearr_25573[(22)] = inst_25501);

return statearr_25573;
})();
var statearr_25574_25654 = state_25546__$1;
(statearr_25574_25654[(2)] = null);

(statearr_25574_25654[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (40))){
var inst_25514 = (state_25546[(23)]);
var inst_25518 = done(null);
var inst_25519 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25514);
var state_25546__$1 = (function (){var statearr_25575 = state_25546;
(statearr_25575[(24)] = inst_25518);

return statearr_25575;
})();
var statearr_25576_25655 = state_25546__$1;
(statearr_25576_25655[(2)] = inst_25519);

(statearr_25576_25655[(1)] = (41));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (33))){
var inst_25505 = (state_25546[(25)]);
var inst_25507 = cljs.core.chunked_seq_QMARK_(inst_25505);
var state_25546__$1 = state_25546;
if(inst_25507){
var statearr_25577_25656 = state_25546__$1;
(statearr_25577_25656[(1)] = (36));

} else {
var statearr_25578_25657 = state_25546__$1;
(statearr_25578_25657[(1)] = (37));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (13))){
var inst_25437 = (state_25546[(26)]);
var inst_25440 = cljs.core.async.close_BANG_(inst_25437);
var state_25546__$1 = state_25546;
var statearr_25579_25658 = state_25546__$1;
(statearr_25579_25658[(2)] = inst_25440);

(statearr_25579_25658[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (22))){
var inst_25458 = (state_25546[(8)]);
var inst_25461 = cljs.core.async.close_BANG_(inst_25458);
var state_25546__$1 = state_25546;
var statearr_25580_25659 = state_25546__$1;
(statearr_25580_25659[(2)] = inst_25461);

(statearr_25580_25659[(1)] = (24));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (36))){
var inst_25505 = (state_25546[(25)]);
var inst_25509 = cljs.core.chunk_first(inst_25505);
var inst_25510 = cljs.core.chunk_rest(inst_25505);
var inst_25511 = cljs.core.count(inst_25509);
var inst_25486 = inst_25510;
var inst_25487 = inst_25509;
var inst_25488 = inst_25511;
var inst_25489 = (0);
var state_25546__$1 = (function (){var statearr_25581 = state_25546;
(statearr_25581[(20)] = inst_25486);

(statearr_25581[(11)] = inst_25489);

(statearr_25581[(21)] = inst_25488);

(statearr_25581[(12)] = inst_25487);

return statearr_25581;
})();
var statearr_25582_25660 = state_25546__$1;
(statearr_25582_25660[(2)] = null);

(statearr_25582_25660[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (41))){
var inst_25505 = (state_25546[(25)]);
var inst_25521 = (state_25546[(2)]);
var inst_25522 = cljs.core.next(inst_25505);
var inst_25486 = inst_25522;
var inst_25487 = null;
var inst_25488 = (0);
var inst_25489 = (0);
var state_25546__$1 = (function (){var statearr_25583 = state_25546;
(statearr_25583[(20)] = inst_25486);

(statearr_25583[(27)] = inst_25521);

(statearr_25583[(11)] = inst_25489);

(statearr_25583[(21)] = inst_25488);

(statearr_25583[(12)] = inst_25487);

return statearr_25583;
})();
var statearr_25584_25661 = state_25546__$1;
(statearr_25584_25661[(2)] = null);

(statearr_25584_25661[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (43))){
var state_25546__$1 = state_25546;
var statearr_25585_25662 = state_25546__$1;
(statearr_25585_25662[(2)] = null);

(statearr_25585_25662[(1)] = (44));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (29))){
var inst_25530 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25586_25663 = state_25546__$1;
(statearr_25586_25663[(2)] = inst_25530);

(statearr_25586_25663[(1)] = (26));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (44))){
var inst_25539 = (state_25546[(2)]);
var state_25546__$1 = (function (){var statearr_25587 = state_25546;
(statearr_25587[(28)] = inst_25539);

return statearr_25587;
})();
var statearr_25588_25664 = state_25546__$1;
(statearr_25588_25664[(2)] = null);

(statearr_25588_25664[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (6))){
var inst_25478 = (state_25546[(29)]);
var inst_25477 = (function (){var G__25589 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25589) : cljs.core.deref.call(null,G__25589));
})();
var inst_25478__$1 = cljs.core.keys(inst_25477);
var inst_25479 = cljs.core.count(inst_25478__$1);
var inst_25480 = (function (){var G__25590 = dctr;
var G__25591 = inst_25479;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25590,G__25591) : cljs.core.reset_BANG_.call(null,G__25590,G__25591));
})();
var inst_25485 = cljs.core.seq(inst_25478__$1);
var inst_25486 = inst_25485;
var inst_25487 = null;
var inst_25488 = (0);
var inst_25489 = (0);
var state_25546__$1 = (function (){var statearr_25592 = state_25546;
(statearr_25592[(29)] = inst_25478__$1);

(statearr_25592[(20)] = inst_25486);

(statearr_25592[(30)] = inst_25480);

(statearr_25592[(11)] = inst_25489);

(statearr_25592[(21)] = inst_25488);

(statearr_25592[(12)] = inst_25487);

return statearr_25592;
})();
var statearr_25593_25665 = state_25546__$1;
(statearr_25593_25665[(2)] = null);

(statearr_25593_25665[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (28))){
var inst_25486 = (state_25546[(20)]);
var inst_25505 = (state_25546[(25)]);
var inst_25505__$1 = cljs.core.seq(inst_25486);
var state_25546__$1 = (function (){var statearr_25594 = state_25546;
(statearr_25594[(25)] = inst_25505__$1);

return statearr_25594;
})();
if(inst_25505__$1){
var statearr_25595_25666 = state_25546__$1;
(statearr_25595_25666[(1)] = (33));

} else {
var statearr_25596_25667 = state_25546__$1;
(statearr_25596_25667[(1)] = (34));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (25))){
var inst_25489 = (state_25546[(11)]);
var inst_25488 = (state_25546[(21)]);
var inst_25491 = (inst_25489 < inst_25488);
var inst_25492 = inst_25491;
var state_25546__$1 = state_25546;
if(cljs.core.truth_(inst_25492)){
var statearr_25597_25668 = state_25546__$1;
(statearr_25597_25668[(1)] = (27));

} else {
var statearr_25598_25669 = state_25546__$1;
(statearr_25598_25669[(1)] = (28));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (34))){
var state_25546__$1 = state_25546;
var statearr_25599_25670 = state_25546__$1;
(statearr_25599_25670[(2)] = null);

(statearr_25599_25670[(1)] = (35));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (17))){
var state_25546__$1 = state_25546;
var statearr_25600_25671 = state_25546__$1;
(statearr_25600_25671[(2)] = null);

(statearr_25600_25671[(1)] = (18));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (3))){
var inst_25544 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25546__$1,inst_25544);
} else {
if((state_val_25547 === (12))){
var inst_25473 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25601_25672 = state_25546__$1;
(statearr_25601_25672[(2)] = inst_25473);

(statearr_25601_25672[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (2))){
var state_25546__$1 = state_25546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25546__$1,(4),ch);
} else {
if((state_val_25547 === (23))){
var state_25546__$1 = state_25546;
var statearr_25602_25673 = state_25546__$1;
(statearr_25602_25673[(2)] = null);

(statearr_25602_25673[(1)] = (24));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (35))){
var inst_25528 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25603_25674 = state_25546__$1;
(statearr_25603_25674[(2)] = inst_25528);

(statearr_25603_25674[(1)] = (29));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (19))){
var inst_25447 = (state_25546[(7)]);
var inst_25451 = cljs.core.chunk_first(inst_25447);
var inst_25452 = cljs.core.chunk_rest(inst_25447);
var inst_25453 = cljs.core.count(inst_25451);
var inst_25427 = inst_25452;
var inst_25428 = inst_25451;
var inst_25429 = inst_25453;
var inst_25430 = (0);
var state_25546__$1 = (function (){var statearr_25604 = state_25546;
(statearr_25604[(13)] = inst_25428);

(statearr_25604[(14)] = inst_25427);

(statearr_25604[(15)] = inst_25430);

(statearr_25604[(16)] = inst_25429);

return statearr_25604;
})();
var statearr_25605_25675 = state_25546__$1;
(statearr_25605_25675[(2)] = null);

(statearr_25605_25675[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (11))){
var inst_25427 = (state_25546[(14)]);
var inst_25447 = (state_25546[(7)]);
var inst_25447__$1 = cljs.core.seq(inst_25427);
var state_25546__$1 = (function (){var statearr_25606 = state_25546;
(statearr_25606[(7)] = inst_25447__$1);

return statearr_25606;
})();
if(inst_25447__$1){
var statearr_25607_25676 = state_25546__$1;
(statearr_25607_25676[(1)] = (16));

} else {
var statearr_25608_25677 = state_25546__$1;
(statearr_25608_25677[(1)] = (17));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (9))){
var inst_25475 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25609_25678 = state_25546__$1;
(statearr_25609_25678[(2)] = inst_25475);

(statearr_25609_25678[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (5))){
var inst_25425 = (function (){var G__25610 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25610) : cljs.core.deref.call(null,G__25610));
})();
var inst_25426 = cljs.core.seq(inst_25425);
var inst_25427 = inst_25426;
var inst_25428 = null;
var inst_25429 = (0);
var inst_25430 = (0);
var state_25546__$1 = (function (){var statearr_25611 = state_25546;
(statearr_25611[(13)] = inst_25428);

(statearr_25611[(14)] = inst_25427);

(statearr_25611[(15)] = inst_25430);

(statearr_25611[(16)] = inst_25429);

return statearr_25611;
})();
var statearr_25612_25679 = state_25546__$1;
(statearr_25612_25679[(2)] = null);

(statearr_25612_25679[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (14))){
var state_25546__$1 = state_25546;
var statearr_25613_25680 = state_25546__$1;
(statearr_25613_25680[(2)] = null);

(statearr_25613_25680[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (45))){
var inst_25536 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25614_25681 = state_25546__$1;
(statearr_25614_25681[(2)] = inst_25536);

(statearr_25614_25681[(1)] = (44));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (26))){
var inst_25478 = (state_25546[(29)]);
var inst_25532 = (state_25546[(2)]);
var inst_25533 = cljs.core.seq(inst_25478);
var state_25546__$1 = (function (){var statearr_25615 = state_25546;
(statearr_25615[(31)] = inst_25532);

return statearr_25615;
})();
if(inst_25533){
var statearr_25616_25682 = state_25546__$1;
(statearr_25616_25682[(1)] = (42));

} else {
var statearr_25617_25683 = state_25546__$1;
(statearr_25617_25683[(1)] = (43));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (16))){
var inst_25447 = (state_25546[(7)]);
var inst_25449 = cljs.core.chunked_seq_QMARK_(inst_25447);
var state_25546__$1 = state_25546;
if(inst_25449){
var statearr_25618_25684 = state_25546__$1;
(statearr_25618_25684[(1)] = (19));

} else {
var statearr_25619_25685 = state_25546__$1;
(statearr_25619_25685[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (38))){
var inst_25525 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25620_25686 = state_25546__$1;
(statearr_25620_25686[(2)] = inst_25525);

(statearr_25620_25686[(1)] = (35));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (30))){
var state_25546__$1 = state_25546;
var statearr_25621_25687 = state_25546__$1;
(statearr_25621_25687[(2)] = null);

(statearr_25621_25687[(1)] = (32));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (10))){
var inst_25428 = (state_25546[(13)]);
var inst_25430 = (state_25546[(15)]);
var inst_25436 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25428,inst_25430);
var inst_25437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25436,(0),null);
var inst_25438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25436,(1),null);
var state_25546__$1 = (function (){var statearr_25622 = state_25546;
(statearr_25622[(26)] = inst_25437);

return statearr_25622;
})();
if(cljs.core.truth_(inst_25438)){
var statearr_25623_25688 = state_25546__$1;
(statearr_25623_25688[(1)] = (13));

} else {
var statearr_25624_25689 = state_25546__$1;
(statearr_25624_25689[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (18))){
var inst_25471 = (state_25546[(2)]);
var state_25546__$1 = state_25546;
var statearr_25625_25690 = state_25546__$1;
(statearr_25625_25690[(2)] = inst_25471);

(statearr_25625_25690[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (42))){
var state_25546__$1 = state_25546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25546__$1,(45),dchan);
} else {
if((state_val_25547 === (37))){
var inst_25418 = (state_25546[(10)]);
var inst_25505 = (state_25546[(25)]);
var inst_25514 = (state_25546[(23)]);
var inst_25514__$1 = cljs.core.first(inst_25505);
var inst_25515 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25514__$1,inst_25418,done);
var state_25546__$1 = (function (){var statearr_25626 = state_25546;
(statearr_25626[(23)] = inst_25514__$1);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25515)){
var statearr_25627_25691 = state_25546__$1;
(statearr_25627_25691[(1)] = (39));

} else {
var statearr_25628_25692 = state_25546__$1;
(statearr_25628_25692[(1)] = (40));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25547 === (8))){
var inst_25430 = (state_25546[(15)]);
var inst_25429 = (state_25546[(16)]);
var inst_25432 = (inst_25430 < inst_25429);
var inst_25433 = inst_25432;
var state_25546__$1 = state_25546;
if(cljs.core.truth_(inst_25433)){
var statearr_25629_25693 = state_25546__$1;
(statearr_25629_25693[(1)] = (10));

} else {
var statearr_25630_25694 = state_25546__$1;
(statearr_25630_25694[(1)] = (11));

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
});})(c__12815__auto___25640,cs,m,dchan,dctr,done))
;
return ((function (switch__12735__auto__,c__12815__auto___25640,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_25634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25634[(0)] = state_machine__12736__auto__);

(statearr_25634[(1)] = (1));

return statearr_25634;
});
var state_machine__12736__auto____1 = (function (state_25546){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25546);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25635){if((e25635 instanceof Object)){
var ex__12739__auto__ = e25635;
var statearr_25636_25695 = state_25546;
(statearr_25636_25695[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25546);

return cljs.core.constant$keyword$83;
} else {
throw e25635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25696 = state_25546;
state_25546 = G__25696;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25546){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___25640,cs,m,dchan,dctr,done))
})();
var state__12817__auto__ = (function (){var statearr_25637 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___25640);

return statearr_25637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___25640,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj25701 = {};
return obj25701;
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
return (function (){var or__3806__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25705 = x__4450__auto__;
return goog.typeOf(G__25705);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25709 = x__4450__auto__;
return goog.typeOf(G__25709);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25713 = x__4450__auto__;
return goog.typeOf(G__25713);
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
return (function (){var or__3806__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25717 = x__4450__auto__;
return goog.typeOf(G__25717);
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
return (function (){var or__3806__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25721 = x__4450__auto__;
return goog.typeOf(G__25721);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25722){
var map__25728 = p__25722;
var map__25728__$1 = ((cljs.core.seq_QMARK_(map__25728))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25728):map__25728);
var opts = map__25728__$1;
var statearr_25729_25733 = state;
(statearr_25729_25733[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25728,map__25728__$1,opts){
return (function (val){
var statearr_25730_25734 = state;
(statearr_25730_25734[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25728,map__25728__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25731_25735 = state;
(statearr_25731_25735[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25732 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25732) : cljs.core.deref.call(null,G__25732));
})());


return cljs.core.constant$keyword$83;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25722 = null;
if (arguments.length > 3) {
var G__25736__i = 0, G__25736__a = new Array(arguments.length -  3);
while (G__25736__i < G__25736__a.length) {G__25736__a[G__25736__i] = arguments[G__25736__i + 3]; ++G__25736__i;}
  p__25722 = new cljs.core.IndexedSeq(G__25736__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25722);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25737){
var state = cljs.core.first(arglist__25737);
arglist__25737 = cljs.core.next(arglist__25737);
var cont_block = cljs.core.first(arglist__25737);
arglist__25737 = cljs.core.next(arglist__25737);
var ports = cljs.core.first(arglist__25737);
var p__25722 = cljs.core.rest(arglist__25737);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25722);
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
var cs = (function (){var G__25870 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25870) : cljs.core.atom.call(null,G__25870));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);
var solo_mode = (function (){var G__25871 = cljs.core.constant$keyword$92;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25871) : cljs.core.atom.call(null,G__25871));
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
if(cljs.core.truth_((function (){var G__25872 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25872) : attr.call(null,G__25872));
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
var chs = (function (){var G__25873 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25873) : cljs.core.deref.call(null,G__25873));
})();
var mode = (function (){var G__25874 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25874) : cljs.core.deref.call(null,G__25874));
})();
var solos = pick(cljs.core.constant$keyword$93,chs);
var pauses = pick(cljs.core.constant$keyword$91,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25875 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25875 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25876){
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
this.meta25876 = meta25876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25875.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25875.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25875.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25875.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25878_26002 = self__.cs;
var G__25879_26003 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25878_26002,G__25879_26003) : cljs.core.reset_BANG_.call(null,G__25878_26002,G__25879_26003));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25875.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25875.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__25880_26004 = self__.solo_mode;
var G__25881_26005 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25880_26004,G__25881_26005) : cljs.core.reset_BANG_.call(null,G__25880_26004,G__25881_26005));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25875.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25877){
var self__ = this;
var _25877__$1 = this;
return self__.meta25876;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25877,meta25876__$1){
var self__ = this;
var _25877__$1 = this;
return (new cljs.core.async.t25875(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25876__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25875.cljs$lang$type = true;

cljs.core.async.t25875.cljs$lang$ctorStr = "cljs.core.async/t25875";

cljs.core.async.t25875.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t25875");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25875 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25875(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25876){
return (new cljs.core.async.t25875(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25876));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25875(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12815__auto___26006 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25953){
var state_val_25954 = (state_25953[(1)]);
if((state_val_25954 === (7))){
var inst_25895 = (state_25953[(7)]);
var inst_25900 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25895);
var state_25953__$1 = state_25953;
var statearr_25955_26007 = state_25953__$1;
(statearr_25955_26007[(2)] = inst_25900);

(statearr_25955_26007[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (20))){
var inst_25910 = (state_25953[(8)]);
var state_25953__$1 = state_25953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25953__$1,(23),out,inst_25910);
} else {
if((state_val_25954 === (1))){
var inst_25885 = (state_25953[(9)]);
var inst_25885__$1 = calc_state();
var inst_25886 = cljs.core.seq_QMARK_(inst_25885__$1);
var state_25953__$1 = (function (){var statearr_25956 = state_25953;
(statearr_25956[(9)] = inst_25885__$1);

return statearr_25956;
})();
if(inst_25886){
var statearr_25957_26008 = state_25953__$1;
(statearr_25957_26008[(1)] = (2));

} else {
var statearr_25958_26009 = state_25953__$1;
(statearr_25958_26009[(1)] = (3));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (24))){
var inst_25903 = (state_25953[(10)]);
var inst_25895 = inst_25903;
var state_25953__$1 = (function (){var statearr_25959 = state_25953;
(statearr_25959[(7)] = inst_25895);

return statearr_25959;
})();
var statearr_25960_26010 = state_25953__$1;
(statearr_25960_26010[(2)] = null);

(statearr_25960_26010[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (4))){
var inst_25885 = (state_25953[(9)]);
var inst_25891 = (state_25953[(2)]);
var inst_25892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25891,cljs.core.constant$keyword$96);
var inst_25893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25891,cljs.core.constant$keyword$95);
var inst_25894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25891,cljs.core.constant$keyword$94);
var inst_25895 = inst_25885;
var state_25953__$1 = (function (){var statearr_25961 = state_25953;
(statearr_25961[(11)] = inst_25892);

(statearr_25961[(12)] = inst_25894);

(statearr_25961[(13)] = inst_25893);

(statearr_25961[(7)] = inst_25895);

return statearr_25961;
})();
var statearr_25962_26011 = state_25953__$1;
(statearr_25962_26011[(2)] = null);

(statearr_25962_26011[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (15))){
var state_25953__$1 = state_25953;
var statearr_25963_26012 = state_25953__$1;
(statearr_25963_26012[(2)] = null);

(statearr_25963_26012[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (21))){
var inst_25903 = (state_25953[(10)]);
var inst_25895 = inst_25903;
var state_25953__$1 = (function (){var statearr_25964 = state_25953;
(statearr_25964[(7)] = inst_25895);

return statearr_25964;
})();
var statearr_25965_26013 = state_25953__$1;
(statearr_25965_26013[(2)] = null);

(statearr_25965_26013[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (13))){
var inst_25949 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
var statearr_25966_26014 = state_25953__$1;
(statearr_25966_26014[(2)] = inst_25949);

(statearr_25966_26014[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (22))){
var inst_25947 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
var statearr_25967_26015 = state_25953__$1;
(statearr_25967_26015[(2)] = inst_25947);

(statearr_25967_26015[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (6))){
var inst_25951 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25953__$1,inst_25951);
} else {
if((state_val_25954 === (25))){
var state_25953__$1 = state_25953;
var statearr_25968_26016 = state_25953__$1;
(statearr_25968_26016[(2)] = null);

(statearr_25968_26016[(1)] = (26));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (17))){
var inst_25926 = (state_25953[(14)]);
var state_25953__$1 = state_25953;
var statearr_25969_26017 = state_25953__$1;
(statearr_25969_26017[(2)] = inst_25926);

(statearr_25969_26017[(1)] = (19));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (3))){
var inst_25885 = (state_25953[(9)]);
var state_25953__$1 = state_25953;
var statearr_25970_26018 = state_25953__$1;
(statearr_25970_26018[(2)] = inst_25885);

(statearr_25970_26018[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (12))){
var inst_25926 = (state_25953[(14)]);
var inst_25906 = (state_25953[(15)]);
var inst_25911 = (state_25953[(16)]);
var inst_25926__$1 = (function (){var G__25971 = inst_25911;
return (inst_25906.cljs$core$IFn$_invoke$arity$1 ? inst_25906.cljs$core$IFn$_invoke$arity$1(G__25971) : inst_25906.call(null,G__25971));
})();
var state_25953__$1 = (function (){var statearr_25972 = state_25953;
(statearr_25972[(14)] = inst_25926__$1);

return statearr_25972;
})();
if(cljs.core.truth_(inst_25926__$1)){
var statearr_25973_26019 = state_25953__$1;
(statearr_25973_26019[(1)] = (17));

} else {
var statearr_25974_26020 = state_25953__$1;
(statearr_25974_26020[(1)] = (18));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (2))){
var inst_25885 = (state_25953[(9)]);
var inst_25888 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25885);
var state_25953__$1 = state_25953;
var statearr_25975_26021 = state_25953__$1;
(statearr_25975_26021[(2)] = inst_25888);

(statearr_25975_26021[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (23))){
var inst_25938 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
if(cljs.core.truth_(inst_25938)){
var statearr_25976_26022 = state_25953__$1;
(statearr_25976_26022[(1)] = (24));

} else {
var statearr_25977_26023 = state_25953__$1;
(statearr_25977_26023[(1)] = (25));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (19))){
var inst_25935 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
if(cljs.core.truth_(inst_25935)){
var statearr_25978_26024 = state_25953__$1;
(statearr_25978_26024[(1)] = (20));

} else {
var statearr_25979_26025 = state_25953__$1;
(statearr_25979_26025[(1)] = (21));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (11))){
var inst_25910 = (state_25953[(8)]);
var inst_25916 = (inst_25910 == null);
var state_25953__$1 = state_25953;
if(cljs.core.truth_(inst_25916)){
var statearr_25980_26026 = state_25953__$1;
(statearr_25980_26026[(1)] = (14));

} else {
var statearr_25981_26027 = state_25953__$1;
(statearr_25981_26027[(1)] = (15));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (9))){
var inst_25903 = (state_25953[(10)]);
var inst_25903__$1 = (state_25953[(2)]);
var inst_25904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25903__$1,cljs.core.constant$keyword$96);
var inst_25905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25903__$1,cljs.core.constant$keyword$95);
var inst_25906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25903__$1,cljs.core.constant$keyword$94);
var state_25953__$1 = (function (){var statearr_25982 = state_25953;
(statearr_25982[(15)] = inst_25906);

(statearr_25982[(17)] = inst_25905);

(statearr_25982[(10)] = inst_25903__$1);

return statearr_25982;
})();
return cljs.core.async.ioc_alts_BANG_(state_25953__$1,(10),inst_25904);
} else {
if((state_val_25954 === (5))){
var inst_25895 = (state_25953[(7)]);
var inst_25898 = cljs.core.seq_QMARK_(inst_25895);
var state_25953__$1 = state_25953;
if(inst_25898){
var statearr_25983_26028 = state_25953__$1;
(statearr_25983_26028[(1)] = (7));

} else {
var statearr_25984_26029 = state_25953__$1;
(statearr_25984_26029[(1)] = (8));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (14))){
var inst_25911 = (state_25953[(16)]);
var inst_25918 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25911);
var state_25953__$1 = state_25953;
var statearr_25985_26030 = state_25953__$1;
(statearr_25985_26030[(2)] = inst_25918);

(statearr_25985_26030[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (26))){
var inst_25943 = (state_25953[(2)]);
var state_25953__$1 = state_25953;
var statearr_25986_26031 = state_25953__$1;
(statearr_25986_26031[(2)] = inst_25943);

(statearr_25986_26031[(1)] = (22));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (16))){
var inst_25921 = (state_25953[(2)]);
var inst_25922 = calc_state();
var inst_25895 = inst_25922;
var state_25953__$1 = (function (){var statearr_25987 = state_25953;
(statearr_25987[(18)] = inst_25921);

(statearr_25987[(7)] = inst_25895);

return statearr_25987;
})();
var statearr_25988_26032 = state_25953__$1;
(statearr_25988_26032[(2)] = null);

(statearr_25988_26032[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (10))){
var inst_25910 = (state_25953[(8)]);
var inst_25911 = (state_25953[(16)]);
var inst_25909 = (state_25953[(2)]);
var inst_25910__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25909,(0),null);
var inst_25911__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25909,(1),null);
var inst_25912 = (inst_25910__$1 == null);
var inst_25913 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25911__$1,change);
var inst_25914 = (inst_25912) || (inst_25913);
var state_25953__$1 = (function (){var statearr_25989 = state_25953;
(statearr_25989[(8)] = inst_25910__$1);

(statearr_25989[(16)] = inst_25911__$1);

return statearr_25989;
})();
if(cljs.core.truth_(inst_25914)){
var statearr_25990_26033 = state_25953__$1;
(statearr_25990_26033[(1)] = (11));

} else {
var statearr_25991_26034 = state_25953__$1;
(statearr_25991_26034[(1)] = (12));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (18))){
var inst_25906 = (state_25953[(15)]);
var inst_25905 = (state_25953[(17)]);
var inst_25911 = (state_25953[(16)]);
var inst_25930 = cljs.core.empty_QMARK_(inst_25906);
var inst_25931 = (function (){var G__25992 = inst_25911;
return (inst_25905.cljs$core$IFn$_invoke$arity$1 ? inst_25905.cljs$core$IFn$_invoke$arity$1(G__25992) : inst_25905.call(null,G__25992));
})();
var inst_25932 = cljs.core.not(inst_25931);
var inst_25933 = (inst_25930) && (inst_25932);
var state_25953__$1 = state_25953;
var statearr_25993_26035 = state_25953__$1;
(statearr_25993_26035[(2)] = inst_25933);

(statearr_25993_26035[(1)] = (19));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25954 === (8))){
var inst_25895 = (state_25953[(7)]);
var state_25953__$1 = state_25953;
var statearr_25994_26036 = state_25953__$1;
(statearr_25994_26036[(2)] = inst_25895);

(statearr_25994_26036[(1)] = (9));


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
});})(c__12815__auto___26006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12735__auto__,c__12815__auto___26006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_25998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25998[(0)] = state_machine__12736__auto__);

(statearr_25998[(1)] = (1));

return statearr_25998;
});
var state_machine__12736__auto____1 = (function (state_25953){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25953);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25999){if((e25999 instanceof Object)){
var ex__12739__auto__ = e25999;
var statearr_26000_26037 = state_25953;
(statearr_26000_26037[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25953);

return cljs.core.constant$keyword$83;
} else {
throw e25999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26038 = state_25953;
state_25953 = G__26038;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25953){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12817__auto__ = (function (){var statearr_26001 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26006);

return statearr_26001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26040 = {};
return obj26040;
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
return (function (){var or__3806__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__26044 = x__4450__auto__;
return goog.typeOf(G__26044);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__26048 = x__4450__auto__;
return goog.typeOf(G__26048);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26054 = x__4450__auto__;
return goog.typeOf(G__26054);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26056 = x__4450__auto__;
return goog.typeOf(G__26056);
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
var mults = (function (){var G__26195 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26195) : cljs.core.atom.call(null,G__26195));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26197 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26197) : cljs.core.deref.call(null,G__26197));
})(),topic);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3806__auto__,mults){
return (function (p1__26057_SHARP_){
if(cljs.core.truth_((function (){var G__26198 = topic;
return (p1__26057_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26057_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26198) : p1__26057_SHARP_.call(null,G__26198));
})())){
return p1__26057_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26057_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26199 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26199) : buf_fn.call(null,G__26199));
})())));
}
});})(or__3806__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26200 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26200 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26201){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26201 = meta26201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26200.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26200.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__26203 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26203) : self__.ensure_mult.call(null,G__26203));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26200.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26204 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26204) : cljs.core.deref.call(null,G__26204));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26205 = self__.mults;
var G__26206 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26205,G__26206) : cljs.core.reset_BANG_.call(null,G__26205,G__26206));
});})(mults,ensure_mult))
;

cljs.core.async.t26200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26200.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26202){
var self__ = this;
var _26202__$1 = this;
return self__.meta26201;
});})(mults,ensure_mult))
;

cljs.core.async.t26200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26202,meta26201__$1){
var self__ = this;
var _26202__$1 = this;
return (new cljs.core.async.t26200(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26201__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26200.cljs$lang$type = true;

cljs.core.async.t26200.cljs$lang$ctorStr = "cljs.core.async/t26200";

cljs.core.async.t26200.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26200");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26200 = ((function (mults,ensure_mult){
return (function __GT_t26200(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26201){
return (new cljs.core.async.t26200(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26201));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26200(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12815__auto___26329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26329,mults,ensure_mult,p){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26329,mults,ensure_mult,p){
return (function (state_26278){
var state_val_26279 = (state_26278[(1)]);
if((state_val_26279 === (7))){
var inst_26274 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
var statearr_26280_26330 = state_26278__$1;
(statearr_26280_26330[(2)] = inst_26274);

(statearr_26280_26330[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (20))){
var state_26278__$1 = state_26278;
var statearr_26281_26331 = state_26278__$1;
(statearr_26281_26331[(2)] = null);

(statearr_26281_26331[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (1))){
var state_26278__$1 = state_26278;
var statearr_26282_26332 = state_26278__$1;
(statearr_26282_26332[(2)] = null);

(statearr_26282_26332[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (24))){
var inst_26257 = (state_26278[(7)]);
var inst_26266 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26257);
var state_26278__$1 = state_26278;
var statearr_26283_26333 = state_26278__$1;
(statearr_26283_26333[(2)] = inst_26266);

(statearr_26283_26333[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (4))){
var inst_26209 = (state_26278[(8)]);
var inst_26209__$1 = (state_26278[(2)]);
var inst_26210 = (inst_26209__$1 == null);
var state_26278__$1 = (function (){var statearr_26284 = state_26278;
(statearr_26284[(8)] = inst_26209__$1);

return statearr_26284;
})();
if(cljs.core.truth_(inst_26210)){
var statearr_26285_26334 = state_26278__$1;
(statearr_26285_26334[(1)] = (5));

} else {
var statearr_26286_26335 = state_26278__$1;
(statearr_26286_26335[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (15))){
var inst_26251 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
var statearr_26287_26336 = state_26278__$1;
(statearr_26287_26336[(2)] = inst_26251);

(statearr_26287_26336[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (21))){
var inst_26271 = (state_26278[(2)]);
var state_26278__$1 = (function (){var statearr_26288 = state_26278;
(statearr_26288[(9)] = inst_26271);

return statearr_26288;
})();
var statearr_26289_26337 = state_26278__$1;
(statearr_26289_26337[(2)] = null);

(statearr_26289_26337[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (13))){
var inst_26233 = (state_26278[(10)]);
var inst_26235 = cljs.core.chunked_seq_QMARK_(inst_26233);
var state_26278__$1 = state_26278;
if(inst_26235){
var statearr_26290_26338 = state_26278__$1;
(statearr_26290_26338[(1)] = (16));

} else {
var statearr_26291_26339 = state_26278__$1;
(statearr_26291_26339[(1)] = (17));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (22))){
var inst_26263 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
if(cljs.core.truth_(inst_26263)){
var statearr_26292_26340 = state_26278__$1;
(statearr_26292_26340[(1)] = (23));

} else {
var statearr_26293_26341 = state_26278__$1;
(statearr_26293_26341[(1)] = (24));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (6))){
var inst_26257 = (state_26278[(7)]);
var inst_26209 = (state_26278[(8)]);
var inst_26259 = (state_26278[(11)]);
var inst_26257__$1 = (function (){var G__26294 = inst_26209;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26294) : topic_fn.call(null,G__26294));
})();
var inst_26258 = (function (){var G__26295 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26295) : cljs.core.deref.call(null,G__26295));
})();
var inst_26259__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26258,inst_26257__$1);
var state_26278__$1 = (function (){var statearr_26296 = state_26278;
(statearr_26296[(7)] = inst_26257__$1);

(statearr_26296[(11)] = inst_26259__$1);

return statearr_26296;
})();
if(cljs.core.truth_(inst_26259__$1)){
var statearr_26297_26342 = state_26278__$1;
(statearr_26297_26342[(1)] = (19));

} else {
var statearr_26298_26343 = state_26278__$1;
(statearr_26298_26343[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (25))){
var inst_26268 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
var statearr_26299_26344 = state_26278__$1;
(statearr_26299_26344[(2)] = inst_26268);

(statearr_26299_26344[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (17))){
var inst_26233 = (state_26278[(10)]);
var inst_26242 = cljs.core.first(inst_26233);
var inst_26243 = cljs.core.async.muxch_STAR_(inst_26242);
var inst_26244 = cljs.core.async.close_BANG_(inst_26243);
var inst_26245 = cljs.core.next(inst_26233);
var inst_26219 = inst_26245;
var inst_26220 = null;
var inst_26221 = (0);
var inst_26222 = (0);
var state_26278__$1 = (function (){var statearr_26300 = state_26278;
(statearr_26300[(12)] = inst_26219);

(statearr_26300[(13)] = inst_26244);

(statearr_26300[(14)] = inst_26222);

(statearr_26300[(15)] = inst_26220);

(statearr_26300[(16)] = inst_26221);

return statearr_26300;
})();
var statearr_26301_26345 = state_26278__$1;
(statearr_26301_26345[(2)] = null);

(statearr_26301_26345[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (3))){
var inst_26276 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26278__$1,inst_26276);
} else {
if((state_val_26279 === (12))){
var inst_26253 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
var statearr_26302_26346 = state_26278__$1;
(statearr_26302_26346[(2)] = inst_26253);

(statearr_26302_26346[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (2))){
var state_26278__$1 = state_26278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26278__$1,(4),ch);
} else {
if((state_val_26279 === (23))){
var state_26278__$1 = state_26278;
var statearr_26303_26347 = state_26278__$1;
(statearr_26303_26347[(2)] = null);

(statearr_26303_26347[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (19))){
var inst_26209 = (state_26278[(8)]);
var inst_26259 = (state_26278[(11)]);
var inst_26261 = cljs.core.async.muxch_STAR_(inst_26259);
var state_26278__$1 = state_26278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26278__$1,(22),inst_26261,inst_26209);
} else {
if((state_val_26279 === (11))){
var inst_26219 = (state_26278[(12)]);
var inst_26233 = (state_26278[(10)]);
var inst_26233__$1 = cljs.core.seq(inst_26219);
var state_26278__$1 = (function (){var statearr_26304 = state_26278;
(statearr_26304[(10)] = inst_26233__$1);

return statearr_26304;
})();
if(inst_26233__$1){
var statearr_26305_26348 = state_26278__$1;
(statearr_26305_26348[(1)] = (13));

} else {
var statearr_26306_26349 = state_26278__$1;
(statearr_26306_26349[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (9))){
var inst_26255 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
var statearr_26307_26350 = state_26278__$1;
(statearr_26307_26350[(2)] = inst_26255);

(statearr_26307_26350[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (5))){
var inst_26216 = (function (){var G__26308 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26308) : cljs.core.deref.call(null,G__26308));
})();
var inst_26217 = cljs.core.vals(inst_26216);
var inst_26218 = cljs.core.seq(inst_26217);
var inst_26219 = inst_26218;
var inst_26220 = null;
var inst_26221 = (0);
var inst_26222 = (0);
var state_26278__$1 = (function (){var statearr_26309 = state_26278;
(statearr_26309[(12)] = inst_26219);

(statearr_26309[(14)] = inst_26222);

(statearr_26309[(15)] = inst_26220);

(statearr_26309[(16)] = inst_26221);

return statearr_26309;
})();
var statearr_26310_26351 = state_26278__$1;
(statearr_26310_26351[(2)] = null);

(statearr_26310_26351[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (14))){
var state_26278__$1 = state_26278;
var statearr_26314_26352 = state_26278__$1;
(statearr_26314_26352[(2)] = null);

(statearr_26314_26352[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (16))){
var inst_26233 = (state_26278[(10)]);
var inst_26237 = cljs.core.chunk_first(inst_26233);
var inst_26238 = cljs.core.chunk_rest(inst_26233);
var inst_26239 = cljs.core.count(inst_26237);
var inst_26219 = inst_26238;
var inst_26220 = inst_26237;
var inst_26221 = inst_26239;
var inst_26222 = (0);
var state_26278__$1 = (function (){var statearr_26315 = state_26278;
(statearr_26315[(12)] = inst_26219);

(statearr_26315[(14)] = inst_26222);

(statearr_26315[(15)] = inst_26220);

(statearr_26315[(16)] = inst_26221);

return statearr_26315;
})();
var statearr_26316_26353 = state_26278__$1;
(statearr_26316_26353[(2)] = null);

(statearr_26316_26353[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (10))){
var inst_26219 = (state_26278[(12)]);
var inst_26222 = (state_26278[(14)]);
var inst_26220 = (state_26278[(15)]);
var inst_26221 = (state_26278[(16)]);
var inst_26227 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26220,inst_26222);
var inst_26228 = cljs.core.async.muxch_STAR_(inst_26227);
var inst_26229 = cljs.core.async.close_BANG_(inst_26228);
var inst_26230 = (inst_26222 + (1));
var tmp26311 = inst_26219;
var tmp26312 = inst_26220;
var tmp26313 = inst_26221;
var inst_26219__$1 = tmp26311;
var inst_26220__$1 = tmp26312;
var inst_26221__$1 = tmp26313;
var inst_26222__$1 = inst_26230;
var state_26278__$1 = (function (){var statearr_26317 = state_26278;
(statearr_26317[(12)] = inst_26219__$1);

(statearr_26317[(17)] = inst_26229);

(statearr_26317[(14)] = inst_26222__$1);

(statearr_26317[(15)] = inst_26220__$1);

(statearr_26317[(16)] = inst_26221__$1);

return statearr_26317;
})();
var statearr_26318_26354 = state_26278__$1;
(statearr_26318_26354[(2)] = null);

(statearr_26318_26354[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (18))){
var inst_26248 = (state_26278[(2)]);
var state_26278__$1 = state_26278;
var statearr_26319_26355 = state_26278__$1;
(statearr_26319_26355[(2)] = inst_26248);

(statearr_26319_26355[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26279 === (8))){
var inst_26222 = (state_26278[(14)]);
var inst_26221 = (state_26278[(16)]);
var inst_26224 = (inst_26222 < inst_26221);
var inst_26225 = inst_26224;
var state_26278__$1 = state_26278;
if(cljs.core.truth_(inst_26225)){
var statearr_26320_26356 = state_26278__$1;
(statearr_26320_26356[(1)] = (10));

} else {
var statearr_26321_26357 = state_26278__$1;
(statearr_26321_26357[(1)] = (11));

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
});})(c__12815__auto___26329,mults,ensure_mult,p))
;
return ((function (switch__12735__auto__,c__12815__auto___26329,mults,ensure_mult,p){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26325[(0)] = state_machine__12736__auto__);

(statearr_26325[(1)] = (1));

return statearr_26325;
});
var state_machine__12736__auto____1 = (function (state_26278){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26278);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26326){if((e26326 instanceof Object)){
var ex__12739__auto__ = e26326;
var statearr_26327_26358 = state_26278;
(statearr_26327_26358[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26278);

return cljs.core.constant$keyword$83;
} else {
throw e26326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26359 = state_26278;
state_26278 = G__26359;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26278){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26329,mults,ensure_mult,p))
})();
var state__12817__auto__ = (function (){var statearr_26328 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26329);

return statearr_26328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26329,mults,ensure_mult,p))
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
var dctr = (function (){var G__26440 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26440) : cljs.core.atom.call(null,G__26440));
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
var c__12815__auto___26513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26479){
var state_val_26480 = (state_26479[(1)]);
if((state_val_26480 === (7))){
var state_26479__$1 = state_26479;
var statearr_26481_26514 = state_26479__$1;
(statearr_26481_26514[(2)] = null);

(statearr_26481_26514[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (1))){
var state_26479__$1 = state_26479;
var statearr_26482_26515 = state_26479__$1;
(statearr_26482_26515[(2)] = null);

(statearr_26482_26515[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (4))){
var inst_26443 = (state_26479[(7)]);
var inst_26445 = (inst_26443 < cnt);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26445)){
var statearr_26483_26516 = state_26479__$1;
(statearr_26483_26516[(1)] = (6));

} else {
var statearr_26484_26517 = state_26479__$1;
(statearr_26484_26517[(1)] = (7));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (15))){
var inst_26475 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26485_26518 = state_26479__$1;
(statearr_26485_26518[(2)] = inst_26475);

(statearr_26485_26518[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (13))){
var inst_26468 = cljs.core.async.close_BANG_(out);
var state_26479__$1 = state_26479;
var statearr_26486_26519 = state_26479__$1;
(statearr_26486_26519[(2)] = inst_26468);

(statearr_26486_26519[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (6))){
var state_26479__$1 = state_26479;
var statearr_26487_26520 = state_26479__$1;
(statearr_26487_26520[(2)] = null);

(statearr_26487_26520[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (3))){
var inst_26477 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26479__$1,inst_26477);
} else {
if((state_val_26480 === (12))){
var inst_26465 = (state_26479[(8)]);
var inst_26465__$1 = (state_26479[(2)]);
var inst_26466 = cljs.core.some(cljs.core.nil_QMARK_,inst_26465__$1);
var state_26479__$1 = (function (){var statearr_26488 = state_26479;
(statearr_26488[(8)] = inst_26465__$1);

return statearr_26488;
})();
if(cljs.core.truth_(inst_26466)){
var statearr_26489_26521 = state_26479__$1;
(statearr_26489_26521[(1)] = (13));

} else {
var statearr_26490_26522 = state_26479__$1;
(statearr_26490_26522[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (2))){
var inst_26442 = (function (){var G__26491 = dctr;
var G__26492 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26491,G__26492) : cljs.core.reset_BANG_.call(null,G__26491,G__26492));
})();
var inst_26443 = (0);
var state_26479__$1 = (function (){var statearr_26493 = state_26479;
(statearr_26493[(9)] = inst_26442);

(statearr_26493[(7)] = inst_26443);

return statearr_26493;
})();
var statearr_26494_26523 = state_26479__$1;
(statearr_26494_26523[(2)] = null);

(statearr_26494_26523[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (11))){
var inst_26443 = (state_26479[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26479,(10),Object,null,(9));
var inst_26452 = (function (){var G__26495 = inst_26443;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26495) : chs__$1.call(null,G__26495));
})();
var inst_26453 = (function (){var G__26496 = inst_26443;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26496) : done.call(null,G__26496));
})();
var inst_26454 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26452,inst_26453);
var state_26479__$1 = state_26479;
var statearr_26497_26524 = state_26479__$1;
(statearr_26497_26524[(2)] = inst_26454);


cljs.core.async.impl.ioc_helpers.process_exception(state_26479__$1);

return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (9))){
var inst_26443 = (state_26479[(7)]);
var inst_26456 = (state_26479[(2)]);
var inst_26457 = (inst_26443 + (1));
var inst_26443__$1 = inst_26457;
var state_26479__$1 = (function (){var statearr_26498 = state_26479;
(statearr_26498[(7)] = inst_26443__$1);

(statearr_26498[(10)] = inst_26456);

return statearr_26498;
})();
var statearr_26499_26525 = state_26479__$1;
(statearr_26499_26525[(2)] = null);

(statearr_26499_26525[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (5))){
var inst_26463 = (state_26479[(2)]);
var state_26479__$1 = (function (){var statearr_26500 = state_26479;
(statearr_26500[(11)] = inst_26463);

return statearr_26500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26479__$1,(12),dchan);
} else {
if((state_val_26480 === (14))){
var inst_26465 = (state_26479[(8)]);
var inst_26470 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26465);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26479__$1,(16),out,inst_26470);
} else {
if((state_val_26480 === (16))){
var inst_26472 = (state_26479[(2)]);
var state_26479__$1 = (function (){var statearr_26501 = state_26479;
(statearr_26501[(12)] = inst_26472);

return statearr_26501;
})();
var statearr_26502_26526 = state_26479__$1;
(statearr_26502_26526[(2)] = null);

(statearr_26502_26526[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (10))){
var inst_26447 = (state_26479[(2)]);
var inst_26448 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26479__$1 = (function (){var statearr_26503 = state_26479;
(statearr_26503[(13)] = inst_26447);

return statearr_26503;
})();
var statearr_26504_26527 = state_26479__$1;
(statearr_26504_26527[(2)] = inst_26448);


cljs.core.async.impl.ioc_helpers.process_exception(state_26479__$1);

return cljs.core.constant$keyword$83;
} else {
if((state_val_26480 === (8))){
var inst_26461 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26505_26528 = state_26479__$1;
(statearr_26505_26528[(2)] = inst_26461);

(statearr_26505_26528[(1)] = (5));


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
});})(c__12815__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12735__auto__,c__12815__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26509[(0)] = state_machine__12736__auto__);

(statearr_26509[(1)] = (1));

return statearr_26509;
});
var state_machine__12736__auto____1 = (function (state_26479){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26479);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26510){if((e26510 instanceof Object)){
var ex__12739__auto__ = e26510;
var statearr_26511_26529 = state_26479;
(statearr_26511_26529[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26479);

return cljs.core.constant$keyword$83;
} else {
throw e26510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26530 = state_26479;
state_26479 = G__26530;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26479){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12817__auto__ = (function (){var statearr_26512 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26513);

return statearr_26512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26513,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__12815__auto___26640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26640,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26640,out){
return (function (state_26616){
var state_val_26617 = (state_26616[(1)]);
if((state_val_26617 === (7))){
var inst_26596 = (state_26616[(7)]);
var inst_26595 = (state_26616[(8)]);
var inst_26595__$1 = (state_26616[(2)]);
var inst_26596__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26595__$1,(0),null);
var inst_26597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26595__$1,(1),null);
var inst_26598 = (inst_26596__$1 == null);
var state_26616__$1 = (function (){var statearr_26618 = state_26616;
(statearr_26618[(7)] = inst_26596__$1);

(statearr_26618[(8)] = inst_26595__$1);

(statearr_26618[(9)] = inst_26597);

return statearr_26618;
})();
if(cljs.core.truth_(inst_26598)){
var statearr_26619_26641 = state_26616__$1;
(statearr_26619_26641[(1)] = (8));

} else {
var statearr_26620_26642 = state_26616__$1;
(statearr_26620_26642[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26617 === (1))){
var inst_26587 = cljs.core.vec(chs);
var inst_26588 = inst_26587;
var state_26616__$1 = (function (){var statearr_26621 = state_26616;
(statearr_26621[(10)] = inst_26588);

return statearr_26621;
})();
var statearr_26622_26643 = state_26616__$1;
(statearr_26622_26643[(2)] = null);

(statearr_26622_26643[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26617 === (4))){
var inst_26588 = (state_26616[(10)]);
var state_26616__$1 = state_26616;
return cljs.core.async.ioc_alts_BANG_(state_26616__$1,(7),inst_26588);
} else {
if((state_val_26617 === (6))){
var inst_26612 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
var statearr_26623_26644 = state_26616__$1;
(statearr_26623_26644[(2)] = inst_26612);

(statearr_26623_26644[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26617 === (3))){
var inst_26614 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26616__$1,inst_26614);
} else {
if((state_val_26617 === (2))){
var inst_26588 = (state_26616[(10)]);
var inst_26590 = cljs.core.count(inst_26588);
var inst_26591 = (inst_26590 > (0));
var state_26616__$1 = state_26616;
if(cljs.core.truth_(inst_26591)){
var statearr_26625_26645 = state_26616__$1;
(statearr_26625_26645[(1)] = (4));

} else {
var statearr_26626_26646 = state_26616__$1;
(statearr_26626_26646[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26617 === (11))){
var inst_26588 = (state_26616[(10)]);
var inst_26605 = (state_26616[(2)]);
var tmp26624 = inst_26588;
var inst_26588__$1 = tmp26624;
var state_26616__$1 = (function (){var statearr_26627 = state_26616;
(statearr_26627[(10)] = inst_26588__$1);

(statearr_26627[(11)] = inst_26605);

return statearr_26627;
})();
var statearr_26628_26647 = state_26616__$1;
(statearr_26628_26647[(2)] = null);

(statearr_26628_26647[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26617 === (9))){
var inst_26596 = (state_26616[(7)]);
var state_26616__$1 = state_26616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26616__$1,(11),out,inst_26596);
} else {
if((state_val_26617 === (5))){
var inst_26610 = cljs.core.async.close_BANG_(out);
var state_26616__$1 = state_26616;
var statearr_26629_26648 = state_26616__$1;
(statearr_26629_26648[(2)] = inst_26610);

(statearr_26629_26648[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26617 === (10))){
var inst_26608 = (state_26616[(2)]);
var state_26616__$1 = state_26616;
var statearr_26630_26649 = state_26616__$1;
(statearr_26630_26649[(2)] = inst_26608);

(statearr_26630_26649[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26617 === (8))){
var inst_26588 = (state_26616[(10)]);
var inst_26596 = (state_26616[(7)]);
var inst_26595 = (state_26616[(8)]);
var inst_26597 = (state_26616[(9)]);
var inst_26600 = (function (){var c = inst_26597;
var v = inst_26596;
var vec__26593 = inst_26595;
var cs = inst_26588;
return ((function (c,v,vec__26593,cs,inst_26588,inst_26596,inst_26595,inst_26597,state_val_26617,c__12815__auto___26640,out){
return (function (p1__26531_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26531_SHARP_);
});
;})(c,v,vec__26593,cs,inst_26588,inst_26596,inst_26595,inst_26597,state_val_26617,c__12815__auto___26640,out))
})();
var inst_26601 = cljs.core.filterv(inst_26600,inst_26588);
var inst_26588__$1 = inst_26601;
var state_26616__$1 = (function (){var statearr_26631 = state_26616;
(statearr_26631[(10)] = inst_26588__$1);

return statearr_26631;
})();
var statearr_26632_26650 = state_26616__$1;
(statearr_26632_26650[(2)] = null);

(statearr_26632_26650[(1)] = (2));


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
});})(c__12815__auto___26640,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26640,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26636[(0)] = state_machine__12736__auto__);

(statearr_26636[(1)] = (1));

return statearr_26636;
});
var state_machine__12736__auto____1 = (function (state_26616){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26616);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26637){if((e26637 instanceof Object)){
var ex__12739__auto__ = e26637;
var statearr_26638_26651 = state_26616;
(statearr_26638_26651[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26616);

return cljs.core.constant$keyword$83;
} else {
throw e26637;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26652 = state_26616;
state_26616 = G__26652;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26616){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26640,out))
})();
var state__12817__auto__ = (function (){var statearr_26639 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26640);

return statearr_26639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26640,out))
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
var c__12815__auto___26748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26748,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26748,out){
return (function (state_26725){
var state_val_26726 = (state_26725[(1)]);
if((state_val_26726 === (7))){
var inst_26707 = (state_26725[(7)]);
var inst_26707__$1 = (state_26725[(2)]);
var inst_26708 = (inst_26707__$1 == null);
var inst_26709 = cljs.core.not(inst_26708);
var state_26725__$1 = (function (){var statearr_26727 = state_26725;
(statearr_26727[(7)] = inst_26707__$1);

return statearr_26727;
})();
if(inst_26709){
var statearr_26728_26749 = state_26725__$1;
(statearr_26728_26749[(1)] = (8));

} else {
var statearr_26729_26750 = state_26725__$1;
(statearr_26729_26750[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26726 === (1))){
var inst_26702 = (0);
var state_26725__$1 = (function (){var statearr_26730 = state_26725;
(statearr_26730[(8)] = inst_26702);

return statearr_26730;
})();
var statearr_26731_26751 = state_26725__$1;
(statearr_26731_26751[(2)] = null);

(statearr_26731_26751[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26726 === (4))){
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26725__$1,(7),ch);
} else {
if((state_val_26726 === (6))){
var inst_26720 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
var statearr_26732_26752 = state_26725__$1;
(statearr_26732_26752[(2)] = inst_26720);

(statearr_26732_26752[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26726 === (3))){
var inst_26722 = (state_26725[(2)]);
var inst_26723 = cljs.core.async.close_BANG_(out);
var state_26725__$1 = (function (){var statearr_26733 = state_26725;
(statearr_26733[(9)] = inst_26722);

return statearr_26733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26725__$1,inst_26723);
} else {
if((state_val_26726 === (2))){
var inst_26702 = (state_26725[(8)]);
var inst_26704 = (inst_26702 < n);
var state_26725__$1 = state_26725;
if(cljs.core.truth_(inst_26704)){
var statearr_26734_26753 = state_26725__$1;
(statearr_26734_26753[(1)] = (4));

} else {
var statearr_26735_26754 = state_26725__$1;
(statearr_26735_26754[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26726 === (11))){
var inst_26702 = (state_26725[(8)]);
var inst_26712 = (state_26725[(2)]);
var inst_26713 = (inst_26702 + (1));
var inst_26702__$1 = inst_26713;
var state_26725__$1 = (function (){var statearr_26736 = state_26725;
(statearr_26736[(10)] = inst_26712);

(statearr_26736[(8)] = inst_26702__$1);

return statearr_26736;
})();
var statearr_26737_26755 = state_26725__$1;
(statearr_26737_26755[(2)] = null);

(statearr_26737_26755[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26726 === (9))){
var state_26725__$1 = state_26725;
var statearr_26738_26756 = state_26725__$1;
(statearr_26738_26756[(2)] = null);

(statearr_26738_26756[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26726 === (5))){
var state_26725__$1 = state_26725;
var statearr_26739_26757 = state_26725__$1;
(statearr_26739_26757[(2)] = null);

(statearr_26739_26757[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26726 === (10))){
var inst_26717 = (state_26725[(2)]);
var state_26725__$1 = state_26725;
var statearr_26740_26758 = state_26725__$1;
(statearr_26740_26758[(2)] = inst_26717);

(statearr_26740_26758[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26726 === (8))){
var inst_26707 = (state_26725[(7)]);
var state_26725__$1 = state_26725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26725__$1,(11),out,inst_26707);
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
});})(c__12815__auto___26748,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26748,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26744[(0)] = state_machine__12736__auto__);

(statearr_26744[(1)] = (1));

return statearr_26744;
});
var state_machine__12736__auto____1 = (function (state_26725){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26725);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26745){if((e26745 instanceof Object)){
var ex__12739__auto__ = e26745;
var statearr_26746_26759 = state_26725;
(statearr_26746_26759[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26725);

return cljs.core.constant$keyword$83;
} else {
throw e26745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26760 = state_26725;
state_26725 = G__26760;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26725){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26748,out))
})();
var state__12817__auto__ = (function (){var statearr_26747 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26748);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26748,out))
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
if(typeof cljs.core.async.t26773 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26773 = (function (ch,f,map_LT_,meta26774){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26774 = meta26774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26773.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t26773.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t26776 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26776 = (function (fn1,_,meta26774,map_LT_,f,ch,meta26777){
this.fn1 = fn1;
this._ = _;
this.meta26774 = meta26774;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26777 = meta26777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26776.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26776.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t26776.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26761_SHARP_){
var G__26779 = (((p1__26761_SHARP_ == null))?null:(function (){var G__26780 = p1__26761_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26780) : self__.f.call(null,G__26780));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26779) : f1.call(null,G__26779));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26778){
var self__ = this;
var _26778__$1 = this;
return self__.meta26777;
});})(___$1))
;

cljs.core.async.t26776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26778,meta26777__$1){
var self__ = this;
var _26778__$1 = this;
return (new cljs.core.async.t26776(self__.fn1,self__._,self__.meta26774,self__.map_LT_,self__.f,self__.ch,meta26777__$1));
});})(___$1))
;

cljs.core.async.t26776.cljs$lang$type = true;

cljs.core.async.t26776.cljs$lang$ctorStr = "cljs.core.async/t26776";

cljs.core.async.t26776.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26776");
});})(___$1))
;

cljs.core.async.__GT_t26776 = ((function (___$1){
return (function __GT_t26776(fn1__$1,___$2,meta26774__$1,map_LT___$1,f__$1,ch__$1,meta26777){
return (new cljs.core.async.t26776(fn1__$1,___$2,meta26774__$1,map_LT___$1,f__$1,ch__$1,meta26777));
});})(___$1))
;

}

return (new cljs.core.async.t26776(fn1,___$1,self__.meta26774,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3794__auto__ = ret;
if(cljs.core.truth_(and__3794__auto__)){
return !(((function (){var G__26781 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26781) : cljs.core.deref.call(null,G__26781));
})() == null));
} else {
return and__3794__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26782 = (function (){var G__26783 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26783) : cljs.core.deref.call(null,G__26783));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26782) : self__.f.call(null,G__26782));
})());
} else {
return ret;
}
});

cljs.core.async.t26773.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26773.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26775){
var self__ = this;
var _26775__$1 = this;
return self__.meta26774;
});

cljs.core.async.t26773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26775,meta26774__$1){
var self__ = this;
var _26775__$1 = this;
return (new cljs.core.async.t26773(self__.ch,self__.f,self__.map_LT_,meta26774__$1));
});

cljs.core.async.t26773.cljs$lang$type = true;

cljs.core.async.t26773.cljs$lang$ctorStr = "cljs.core.async/t26773";

cljs.core.async.t26773.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26773");
});

cljs.core.async.__GT_t26773 = (function __GT_t26773(ch__$1,f__$1,map_LT___$1,meta26774){
return (new cljs.core.async.t26773(ch__$1,f__$1,map_LT___$1,meta26774));
});

}

return (new cljs.core.async.t26773(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26788 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26788 = (function (ch,f,map_GT_,meta26789){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26789 = meta26789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26791 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26791) : self__.f.call(null,G__26791));
})(),fn1);
});

cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26790){
var self__ = this;
var _26790__$1 = this;
return self__.meta26789;
});

cljs.core.async.t26788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26790,meta26789__$1){
var self__ = this;
var _26790__$1 = this;
return (new cljs.core.async.t26788(self__.ch,self__.f,self__.map_GT_,meta26789__$1));
});

cljs.core.async.t26788.cljs$lang$type = true;

cljs.core.async.t26788.cljs$lang$ctorStr = "cljs.core.async/t26788";

cljs.core.async.t26788.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26788");
});

cljs.core.async.__GT_t26788 = (function __GT_t26788(ch__$1,f__$1,map_GT___$1,meta26789){
return (new cljs.core.async.t26788(ch__$1,f__$1,map_GT___$1,meta26789));
});

}

return (new cljs.core.async.t26788(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26796 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26796 = (function (ch,p,filter_GT_,meta26797){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26797 = meta26797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26799 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26799) : self__.p.call(null,G__26799));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26798){
var self__ = this;
var _26798__$1 = this;
return self__.meta26797;
});

cljs.core.async.t26796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26798,meta26797__$1){
var self__ = this;
var _26798__$1 = this;
return (new cljs.core.async.t26796(self__.ch,self__.p,self__.filter_GT_,meta26797__$1));
});

cljs.core.async.t26796.cljs$lang$type = true;

cljs.core.async.t26796.cljs$lang$ctorStr = "cljs.core.async/t26796";

cljs.core.async.t26796.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26796");
});

cljs.core.async.__GT_t26796 = (function __GT_t26796(ch__$1,p__$1,filter_GT___$1,meta26797){
return (new cljs.core.async.t26796(ch__$1,p__$1,filter_GT___$1,meta26797));
});

}

return (new cljs.core.async.t26796(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12815__auto___26887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26887,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26887,out){
return (function (state_26865){
var state_val_26866 = (state_26865[(1)]);
if((state_val_26866 === (7))){
var inst_26861 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26867_26888 = state_26865__$1;
(statearr_26867_26888[(2)] = inst_26861);

(statearr_26867_26888[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26866 === (1))){
var state_26865__$1 = state_26865;
var statearr_26868_26889 = state_26865__$1;
(statearr_26868_26889[(2)] = null);

(statearr_26868_26889[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26866 === (4))){
var inst_26847 = (state_26865[(7)]);
var inst_26847__$1 = (state_26865[(2)]);
var inst_26848 = (inst_26847__$1 == null);
var state_26865__$1 = (function (){var statearr_26869 = state_26865;
(statearr_26869[(7)] = inst_26847__$1);

return statearr_26869;
})();
if(cljs.core.truth_(inst_26848)){
var statearr_26870_26890 = state_26865__$1;
(statearr_26870_26890[(1)] = (5));

} else {
var statearr_26871_26891 = state_26865__$1;
(statearr_26871_26891[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26866 === (6))){
var inst_26847 = (state_26865[(7)]);
var inst_26852 = (function (){var G__26872 = inst_26847;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26872) : p.call(null,G__26872));
})();
var state_26865__$1 = state_26865;
if(cljs.core.truth_(inst_26852)){
var statearr_26873_26892 = state_26865__$1;
(statearr_26873_26892[(1)] = (8));

} else {
var statearr_26874_26893 = state_26865__$1;
(statearr_26874_26893[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26866 === (3))){
var inst_26863 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26865__$1,inst_26863);
} else {
if((state_val_26866 === (2))){
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26865__$1,(4),ch);
} else {
if((state_val_26866 === (11))){
var inst_26855 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26875_26894 = state_26865__$1;
(statearr_26875_26894[(2)] = inst_26855);

(statearr_26875_26894[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26866 === (9))){
var state_26865__$1 = state_26865;
var statearr_26876_26895 = state_26865__$1;
(statearr_26876_26895[(2)] = null);

(statearr_26876_26895[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26866 === (5))){
var inst_26850 = cljs.core.async.close_BANG_(out);
var state_26865__$1 = state_26865;
var statearr_26877_26896 = state_26865__$1;
(statearr_26877_26896[(2)] = inst_26850);

(statearr_26877_26896[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26866 === (10))){
var inst_26858 = (state_26865[(2)]);
var state_26865__$1 = (function (){var statearr_26878 = state_26865;
(statearr_26878[(8)] = inst_26858);

return statearr_26878;
})();
var statearr_26879_26897 = state_26865__$1;
(statearr_26879_26897[(2)] = null);

(statearr_26879_26897[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26866 === (8))){
var inst_26847 = (state_26865[(7)]);
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26865__$1,(11),out,inst_26847);
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
});})(c__12815__auto___26887,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26887,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26883 = [null,null,null,null,null,null,null,null,null];
(statearr_26883[(0)] = state_machine__12736__auto__);

(statearr_26883[(1)] = (1));

return statearr_26883;
});
var state_machine__12736__auto____1 = (function (state_26865){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26865);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26884){if((e26884 instanceof Object)){
var ex__12739__auto__ = e26884;
var statearr_26885_26898 = state_26865;
(statearr_26885_26898[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26865);

return cljs.core.constant$keyword$83;
} else {
throw e26884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26899 = state_26865;
state_26865 = G__26899;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26865){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26887,out))
})();
var state__12817__auto__ = (function (){var statearr_26886 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26887);

return statearr_26886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26887,out))
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
return (function (state_27069){
var state_val_27070 = (state_27069[(1)]);
if((state_val_27070 === (7))){
var inst_27065 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27071_27113 = state_27069__$1;
(statearr_27071_27113[(2)] = inst_27065);

(statearr_27071_27113[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (20))){
var inst_27035 = (state_27069[(7)]);
var inst_27046 = (state_27069[(2)]);
var inst_27047 = cljs.core.next(inst_27035);
var inst_27021 = inst_27047;
var inst_27022 = null;
var inst_27023 = (0);
var inst_27024 = (0);
var state_27069__$1 = (function (){var statearr_27072 = state_27069;
(statearr_27072[(8)] = inst_27023);

(statearr_27072[(9)] = inst_27021);

(statearr_27072[(10)] = inst_27046);

(statearr_27072[(11)] = inst_27024);

(statearr_27072[(12)] = inst_27022);

return statearr_27072;
})();
var statearr_27073_27114 = state_27069__$1;
(statearr_27073_27114[(2)] = null);

(statearr_27073_27114[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (1))){
var state_27069__$1 = state_27069;
var statearr_27074_27115 = state_27069__$1;
(statearr_27074_27115[(2)] = null);

(statearr_27074_27115[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (4))){
var inst_27010 = (state_27069[(13)]);
var inst_27010__$1 = (state_27069[(2)]);
var inst_27011 = (inst_27010__$1 == null);
var state_27069__$1 = (function (){var statearr_27075 = state_27069;
(statearr_27075[(13)] = inst_27010__$1);

return statearr_27075;
})();
if(cljs.core.truth_(inst_27011)){
var statearr_27076_27116 = state_27069__$1;
(statearr_27076_27116[(1)] = (5));

} else {
var statearr_27077_27117 = state_27069__$1;
(statearr_27077_27117[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (15))){
var state_27069__$1 = state_27069;
var statearr_27081_27118 = state_27069__$1;
(statearr_27081_27118[(2)] = null);

(statearr_27081_27118[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (21))){
var state_27069__$1 = state_27069;
var statearr_27082_27119 = state_27069__$1;
(statearr_27082_27119[(2)] = null);

(statearr_27082_27119[(1)] = (23));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (13))){
var inst_27023 = (state_27069[(8)]);
var inst_27021 = (state_27069[(9)]);
var inst_27024 = (state_27069[(11)]);
var inst_27022 = (state_27069[(12)]);
var inst_27031 = (state_27069[(2)]);
var inst_27032 = (inst_27024 + (1));
var tmp27078 = inst_27023;
var tmp27079 = inst_27021;
var tmp27080 = inst_27022;
var inst_27021__$1 = tmp27079;
var inst_27022__$1 = tmp27080;
var inst_27023__$1 = tmp27078;
var inst_27024__$1 = inst_27032;
var state_27069__$1 = (function (){var statearr_27083 = state_27069;
(statearr_27083[(8)] = inst_27023__$1);

(statearr_27083[(9)] = inst_27021__$1);

(statearr_27083[(14)] = inst_27031);

(statearr_27083[(11)] = inst_27024__$1);

(statearr_27083[(12)] = inst_27022__$1);

return statearr_27083;
})();
var statearr_27084_27120 = state_27069__$1;
(statearr_27084_27120[(2)] = null);

(statearr_27084_27120[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (22))){
var state_27069__$1 = state_27069;
var statearr_27085_27121 = state_27069__$1;
(statearr_27085_27121[(2)] = null);

(statearr_27085_27121[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (6))){
var inst_27010 = (state_27069[(13)]);
var inst_27019 = (function (){var G__27086 = inst_27010;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27086) : f.call(null,G__27086));
})();
var inst_27020 = cljs.core.seq(inst_27019);
var inst_27021 = inst_27020;
var inst_27022 = null;
var inst_27023 = (0);
var inst_27024 = (0);
var state_27069__$1 = (function (){var statearr_27087 = state_27069;
(statearr_27087[(8)] = inst_27023);

(statearr_27087[(9)] = inst_27021);

(statearr_27087[(11)] = inst_27024);

(statearr_27087[(12)] = inst_27022);

return statearr_27087;
})();
var statearr_27088_27122 = state_27069__$1;
(statearr_27088_27122[(2)] = null);

(statearr_27088_27122[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (17))){
var inst_27035 = (state_27069[(7)]);
var inst_27039 = cljs.core.chunk_first(inst_27035);
var inst_27040 = cljs.core.chunk_rest(inst_27035);
var inst_27041 = cljs.core.count(inst_27039);
var inst_27021 = inst_27040;
var inst_27022 = inst_27039;
var inst_27023 = inst_27041;
var inst_27024 = (0);
var state_27069__$1 = (function (){var statearr_27089 = state_27069;
(statearr_27089[(8)] = inst_27023);

(statearr_27089[(9)] = inst_27021);

(statearr_27089[(11)] = inst_27024);

(statearr_27089[(12)] = inst_27022);

return statearr_27089;
})();
var statearr_27090_27123 = state_27069__$1;
(statearr_27090_27123[(2)] = null);

(statearr_27090_27123[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (3))){
var inst_27067 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27069__$1,inst_27067);
} else {
if((state_val_27070 === (12))){
var inst_27055 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27091_27124 = state_27069__$1;
(statearr_27091_27124[(2)] = inst_27055);

(statearr_27091_27124[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (2))){
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27069__$1,(4),in$);
} else {
if((state_val_27070 === (23))){
var inst_27063 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27092_27125 = state_27069__$1;
(statearr_27092_27125[(2)] = inst_27063);

(statearr_27092_27125[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (19))){
var inst_27050 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27093_27126 = state_27069__$1;
(statearr_27093_27126[(2)] = inst_27050);

(statearr_27093_27126[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (11))){
var inst_27035 = (state_27069[(7)]);
var inst_27021 = (state_27069[(9)]);
var inst_27035__$1 = cljs.core.seq(inst_27021);
var state_27069__$1 = (function (){var statearr_27094 = state_27069;
(statearr_27094[(7)] = inst_27035__$1);

return statearr_27094;
})();
if(inst_27035__$1){
var statearr_27095_27127 = state_27069__$1;
(statearr_27095_27127[(1)] = (14));

} else {
var statearr_27096_27128 = state_27069__$1;
(statearr_27096_27128[(1)] = (15));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (9))){
var inst_27057 = (state_27069[(2)]);
var inst_27058 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27069__$1 = (function (){var statearr_27097 = state_27069;
(statearr_27097[(15)] = inst_27057);

return statearr_27097;
})();
if(cljs.core.truth_(inst_27058)){
var statearr_27098_27129 = state_27069__$1;
(statearr_27098_27129[(1)] = (21));

} else {
var statearr_27099_27130 = state_27069__$1;
(statearr_27099_27130[(1)] = (22));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (5))){
var inst_27013 = cljs.core.async.close_BANG_(out);
var state_27069__$1 = state_27069;
var statearr_27100_27131 = state_27069__$1;
(statearr_27100_27131[(2)] = inst_27013);

(statearr_27100_27131[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (14))){
var inst_27035 = (state_27069[(7)]);
var inst_27037 = cljs.core.chunked_seq_QMARK_(inst_27035);
var state_27069__$1 = state_27069;
if(inst_27037){
var statearr_27101_27132 = state_27069__$1;
(statearr_27101_27132[(1)] = (17));

} else {
var statearr_27102_27133 = state_27069__$1;
(statearr_27102_27133[(1)] = (18));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (16))){
var inst_27053 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27103_27134 = state_27069__$1;
(statearr_27103_27134[(2)] = inst_27053);

(statearr_27103_27134[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27070 === (10))){
var inst_27024 = (state_27069[(11)]);
var inst_27022 = (state_27069[(12)]);
var inst_27029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27022,inst_27024);
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27069__$1,(13),out,inst_27029);
} else {
if((state_val_27070 === (18))){
var inst_27035 = (state_27069[(7)]);
var inst_27044 = cljs.core.first(inst_27035);
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27069__$1,(20),out,inst_27044);
} else {
if((state_val_27070 === (8))){
var inst_27023 = (state_27069[(8)]);
var inst_27024 = (state_27069[(11)]);
var inst_27026 = (inst_27024 < inst_27023);
var inst_27027 = inst_27026;
var state_27069__$1 = state_27069;
if(cljs.core.truth_(inst_27027)){
var statearr_27104_27135 = state_27069__$1;
(statearr_27104_27135[(1)] = (10));

} else {
var statearr_27105_27136 = state_27069__$1;
(statearr_27105_27136[(1)] = (11));

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
var statearr_27109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27109[(0)] = state_machine__12736__auto__);

(statearr_27109[(1)] = (1));

return statearr_27109;
});
var state_machine__12736__auto____1 = (function (state_27069){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27069);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27110){if((e27110 instanceof Object)){
var ex__12739__auto__ = e27110;
var statearr_27111_27137 = state_27069;
(statearr_27111_27137[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27069);

return cljs.core.constant$keyword$83;
} else {
throw e27110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27138 = state_27069;
state_27069 = G__27138;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27069){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_27112 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_27112;
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
var c__12815__auto___27243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27243,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27243,out){
return (function (state_27218){
var state_val_27219 = (state_27218[(1)]);
if((state_val_27219 === (7))){
var inst_27213 = (state_27218[(2)]);
var state_27218__$1 = state_27218;
var statearr_27220_27244 = state_27218__$1;
(statearr_27220_27244[(2)] = inst_27213);

(statearr_27220_27244[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27219 === (1))){
var inst_27195 = null;
var state_27218__$1 = (function (){var statearr_27221 = state_27218;
(statearr_27221[(7)] = inst_27195);

return statearr_27221;
})();
var statearr_27222_27245 = state_27218__$1;
(statearr_27222_27245[(2)] = null);

(statearr_27222_27245[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27219 === (4))){
var inst_27198 = (state_27218[(8)]);
var inst_27198__$1 = (state_27218[(2)]);
var inst_27199 = (inst_27198__$1 == null);
var inst_27200 = cljs.core.not(inst_27199);
var state_27218__$1 = (function (){var statearr_27223 = state_27218;
(statearr_27223[(8)] = inst_27198__$1);

return statearr_27223;
})();
if(inst_27200){
var statearr_27224_27246 = state_27218__$1;
(statearr_27224_27246[(1)] = (5));

} else {
var statearr_27225_27247 = state_27218__$1;
(statearr_27225_27247[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27219 === (6))){
var state_27218__$1 = state_27218;
var statearr_27226_27248 = state_27218__$1;
(statearr_27226_27248[(2)] = null);

(statearr_27226_27248[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27219 === (3))){
var inst_27215 = (state_27218[(2)]);
var inst_27216 = cljs.core.async.close_BANG_(out);
var state_27218__$1 = (function (){var statearr_27227 = state_27218;
(statearr_27227[(9)] = inst_27215);

return statearr_27227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27218__$1,inst_27216);
} else {
if((state_val_27219 === (2))){
var state_27218__$1 = state_27218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27218__$1,(4),ch);
} else {
if((state_val_27219 === (11))){
var inst_27198 = (state_27218[(8)]);
var inst_27207 = (state_27218[(2)]);
var inst_27195 = inst_27198;
var state_27218__$1 = (function (){var statearr_27228 = state_27218;
(statearr_27228[(7)] = inst_27195);

(statearr_27228[(10)] = inst_27207);

return statearr_27228;
})();
var statearr_27229_27249 = state_27218__$1;
(statearr_27229_27249[(2)] = null);

(statearr_27229_27249[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27219 === (9))){
var inst_27198 = (state_27218[(8)]);
var state_27218__$1 = state_27218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27218__$1,(11),out,inst_27198);
} else {
if((state_val_27219 === (5))){
var inst_27195 = (state_27218[(7)]);
var inst_27198 = (state_27218[(8)]);
var inst_27202 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27198,inst_27195);
var state_27218__$1 = state_27218;
if(inst_27202){
var statearr_27231_27250 = state_27218__$1;
(statearr_27231_27250[(1)] = (8));

} else {
var statearr_27232_27251 = state_27218__$1;
(statearr_27232_27251[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27219 === (10))){
var inst_27210 = (state_27218[(2)]);
var state_27218__$1 = state_27218;
var statearr_27233_27252 = state_27218__$1;
(statearr_27233_27252[(2)] = inst_27210);

(statearr_27233_27252[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27219 === (8))){
var inst_27195 = (state_27218[(7)]);
var tmp27230 = inst_27195;
var inst_27195__$1 = tmp27230;
var state_27218__$1 = (function (){var statearr_27234 = state_27218;
(statearr_27234[(7)] = inst_27195__$1);

return statearr_27234;
})();
var statearr_27235_27253 = state_27218__$1;
(statearr_27235_27253[(2)] = null);

(statearr_27235_27253[(1)] = (2));


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
});})(c__12815__auto___27243,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27243,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27239 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27239[(0)] = state_machine__12736__auto__);

(statearr_27239[(1)] = (1));

return statearr_27239;
});
var state_machine__12736__auto____1 = (function (state_27218){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27218);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27240){if((e27240 instanceof Object)){
var ex__12739__auto__ = e27240;
var statearr_27241_27254 = state_27218;
(statearr_27241_27254[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27218);

return cljs.core.constant$keyword$83;
} else {
throw e27240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27255 = state_27218;
state_27218 = G__27255;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27218){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27243,out))
})();
var state__12817__auto__ = (function (){var statearr_27242 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27243);

return statearr_27242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27243,out))
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
var c__12815__auto___27393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27393,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27393,out){
return (function (state_27363){
var state_val_27364 = (state_27363[(1)]);
if((state_val_27364 === (7))){
var inst_27359 = (state_27363[(2)]);
var state_27363__$1 = state_27363;
var statearr_27365_27394 = state_27363__$1;
(statearr_27365_27394[(2)] = inst_27359);

(statearr_27365_27394[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (1))){
var inst_27326 = (new Array(n));
var inst_27327 = inst_27326;
var inst_27328 = (0);
var state_27363__$1 = (function (){var statearr_27366 = state_27363;
(statearr_27366[(7)] = inst_27327);

(statearr_27366[(8)] = inst_27328);

return statearr_27366;
})();
var statearr_27367_27395 = state_27363__$1;
(statearr_27367_27395[(2)] = null);

(statearr_27367_27395[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (4))){
var inst_27331 = (state_27363[(9)]);
var inst_27331__$1 = (state_27363[(2)]);
var inst_27332 = (inst_27331__$1 == null);
var inst_27333 = cljs.core.not(inst_27332);
var state_27363__$1 = (function (){var statearr_27368 = state_27363;
(statearr_27368[(9)] = inst_27331__$1);

return statearr_27368;
})();
if(inst_27333){
var statearr_27369_27396 = state_27363__$1;
(statearr_27369_27396[(1)] = (5));

} else {
var statearr_27370_27397 = state_27363__$1;
(statearr_27370_27397[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (15))){
var inst_27353 = (state_27363[(2)]);
var state_27363__$1 = state_27363;
var statearr_27371_27398 = state_27363__$1;
(statearr_27371_27398[(2)] = inst_27353);

(statearr_27371_27398[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (13))){
var state_27363__$1 = state_27363;
var statearr_27372_27399 = state_27363__$1;
(statearr_27372_27399[(2)] = null);

(statearr_27372_27399[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (6))){
var inst_27328 = (state_27363[(8)]);
var inst_27349 = (inst_27328 > (0));
var state_27363__$1 = state_27363;
if(cljs.core.truth_(inst_27349)){
var statearr_27373_27400 = state_27363__$1;
(statearr_27373_27400[(1)] = (12));

} else {
var statearr_27374_27401 = state_27363__$1;
(statearr_27374_27401[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (3))){
var inst_27361 = (state_27363[(2)]);
var state_27363__$1 = state_27363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27363__$1,inst_27361);
} else {
if((state_val_27364 === (12))){
var inst_27327 = (state_27363[(7)]);
var inst_27351 = cljs.core.vec(inst_27327);
var state_27363__$1 = state_27363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27363__$1,(15),out,inst_27351);
} else {
if((state_val_27364 === (2))){
var state_27363__$1 = state_27363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27363__$1,(4),ch);
} else {
if((state_val_27364 === (11))){
var inst_27343 = (state_27363[(2)]);
var inst_27344 = (new Array(n));
var inst_27327 = inst_27344;
var inst_27328 = (0);
var state_27363__$1 = (function (){var statearr_27375 = state_27363;
(statearr_27375[(7)] = inst_27327);

(statearr_27375[(8)] = inst_27328);

(statearr_27375[(10)] = inst_27343);

return statearr_27375;
})();
var statearr_27376_27402 = state_27363__$1;
(statearr_27376_27402[(2)] = null);

(statearr_27376_27402[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (9))){
var inst_27327 = (state_27363[(7)]);
var inst_27341 = cljs.core.vec(inst_27327);
var state_27363__$1 = state_27363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27363__$1,(11),out,inst_27341);
} else {
if((state_val_27364 === (5))){
var inst_27336 = (state_27363[(11)]);
var inst_27327 = (state_27363[(7)]);
var inst_27331 = (state_27363[(9)]);
var inst_27328 = (state_27363[(8)]);
var inst_27335 = (inst_27327[inst_27328] = inst_27331);
var inst_27336__$1 = (inst_27328 + (1));
var inst_27337 = (inst_27336__$1 < n);
var state_27363__$1 = (function (){var statearr_27377 = state_27363;
(statearr_27377[(12)] = inst_27335);

(statearr_27377[(11)] = inst_27336__$1);

return statearr_27377;
})();
if(cljs.core.truth_(inst_27337)){
var statearr_27378_27403 = state_27363__$1;
(statearr_27378_27403[(1)] = (8));

} else {
var statearr_27379_27404 = state_27363__$1;
(statearr_27379_27404[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (14))){
var inst_27356 = (state_27363[(2)]);
var inst_27357 = cljs.core.async.close_BANG_(out);
var state_27363__$1 = (function (){var statearr_27381 = state_27363;
(statearr_27381[(13)] = inst_27356);

return statearr_27381;
})();
var statearr_27382_27405 = state_27363__$1;
(statearr_27382_27405[(2)] = inst_27357);

(statearr_27382_27405[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (10))){
var inst_27347 = (state_27363[(2)]);
var state_27363__$1 = state_27363;
var statearr_27383_27406 = state_27363__$1;
(statearr_27383_27406[(2)] = inst_27347);

(statearr_27383_27406[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27364 === (8))){
var inst_27336 = (state_27363[(11)]);
var inst_27327 = (state_27363[(7)]);
var tmp27380 = inst_27327;
var inst_27327__$1 = tmp27380;
var inst_27328 = inst_27336;
var state_27363__$1 = (function (){var statearr_27384 = state_27363;
(statearr_27384[(7)] = inst_27327__$1);

(statearr_27384[(8)] = inst_27328);

return statearr_27384;
})();
var statearr_27385_27407 = state_27363__$1;
(statearr_27385_27407[(2)] = null);

(statearr_27385_27407[(1)] = (2));


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
});})(c__12815__auto___27393,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27393,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27389[(0)] = state_machine__12736__auto__);

(statearr_27389[(1)] = (1));

return statearr_27389;
});
var state_machine__12736__auto____1 = (function (state_27363){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27363);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27390){if((e27390 instanceof Object)){
var ex__12739__auto__ = e27390;
var statearr_27391_27408 = state_27363;
(statearr_27391_27408[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27363);

return cljs.core.constant$keyword$83;
} else {
throw e27390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27409 = state_27363;
state_27363 = G__27409;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27363){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27393,out))
})();
var state__12817__auto__ = (function (){var statearr_27392 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27393);

return statearr_27392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27393,out))
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
var c__12815__auto___27557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27557,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27557,out){
return (function (state_27526){
var state_val_27527 = (state_27526[(1)]);
if((state_val_27527 === (7))){
var inst_27522 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
var statearr_27528_27558 = state_27526__$1;
(statearr_27528_27558[(2)] = inst_27522);

(statearr_27528_27558[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (1))){
var inst_27485 = [];
var inst_27486 = inst_27485;
var inst_27487 = cljs.core.constant$keyword$97;
var state_27526__$1 = (function (){var statearr_27529 = state_27526;
(statearr_27529[(7)] = inst_27487);

(statearr_27529[(8)] = inst_27486);

return statearr_27529;
})();
var statearr_27530_27559 = state_27526__$1;
(statearr_27530_27559[(2)] = null);

(statearr_27530_27559[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (4))){
var inst_27490 = (state_27526[(9)]);
var inst_27490__$1 = (state_27526[(2)]);
var inst_27491 = (inst_27490__$1 == null);
var inst_27492 = cljs.core.not(inst_27491);
var state_27526__$1 = (function (){var statearr_27531 = state_27526;
(statearr_27531[(9)] = inst_27490__$1);

return statearr_27531;
})();
if(inst_27492){
var statearr_27532_27560 = state_27526__$1;
(statearr_27532_27560[(1)] = (5));

} else {
var statearr_27533_27561 = state_27526__$1;
(statearr_27533_27561[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (15))){
var inst_27516 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
var statearr_27534_27562 = state_27526__$1;
(statearr_27534_27562[(2)] = inst_27516);

(statearr_27534_27562[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (13))){
var state_27526__$1 = state_27526;
var statearr_27535_27563 = state_27526__$1;
(statearr_27535_27563[(2)] = null);

(statearr_27535_27563[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (6))){
var inst_27486 = (state_27526[(8)]);
var inst_27511 = inst_27486.length;
var inst_27512 = (inst_27511 > (0));
var state_27526__$1 = state_27526;
if(cljs.core.truth_(inst_27512)){
var statearr_27536_27564 = state_27526__$1;
(statearr_27536_27564[(1)] = (12));

} else {
var statearr_27537_27565 = state_27526__$1;
(statearr_27537_27565[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (3))){
var inst_27524 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27526__$1,inst_27524);
} else {
if((state_val_27527 === (12))){
var inst_27486 = (state_27526[(8)]);
var inst_27514 = cljs.core.vec(inst_27486);
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27526__$1,(15),out,inst_27514);
} else {
if((state_val_27527 === (2))){
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27526__$1,(4),ch);
} else {
if((state_val_27527 === (11))){
var inst_27494 = (state_27526[(10)]);
var inst_27490 = (state_27526[(9)]);
var inst_27504 = (state_27526[(2)]);
var inst_27505 = [];
var inst_27506 = inst_27505.push(inst_27490);
var inst_27486 = inst_27505;
var inst_27487 = inst_27494;
var state_27526__$1 = (function (){var statearr_27538 = state_27526;
(statearr_27538[(11)] = inst_27506);

(statearr_27538[(12)] = inst_27504);

(statearr_27538[(7)] = inst_27487);

(statearr_27538[(8)] = inst_27486);

return statearr_27538;
})();
var statearr_27539_27566 = state_27526__$1;
(statearr_27539_27566[(2)] = null);

(statearr_27539_27566[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (9))){
var inst_27486 = (state_27526[(8)]);
var inst_27502 = cljs.core.vec(inst_27486);
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27526__$1,(11),out,inst_27502);
} else {
if((state_val_27527 === (5))){
var inst_27494 = (state_27526[(10)]);
var inst_27490 = (state_27526[(9)]);
var inst_27487 = (state_27526[(7)]);
var inst_27494__$1 = (function (){var G__27540 = inst_27490;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27540) : f.call(null,G__27540));
})();
var inst_27495 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27494__$1,inst_27487);
var inst_27496 = cljs.core.keyword_identical_QMARK_(inst_27487,cljs.core.constant$keyword$97);
var inst_27497 = (inst_27495) || (inst_27496);
var state_27526__$1 = (function (){var statearr_27541 = state_27526;
(statearr_27541[(10)] = inst_27494__$1);

return statearr_27541;
})();
if(cljs.core.truth_(inst_27497)){
var statearr_27542_27567 = state_27526__$1;
(statearr_27542_27567[(1)] = (8));

} else {
var statearr_27543_27568 = state_27526__$1;
(statearr_27543_27568[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (14))){
var inst_27519 = (state_27526[(2)]);
var inst_27520 = cljs.core.async.close_BANG_(out);
var state_27526__$1 = (function (){var statearr_27545 = state_27526;
(statearr_27545[(13)] = inst_27519);

return statearr_27545;
})();
var statearr_27546_27569 = state_27526__$1;
(statearr_27546_27569[(2)] = inst_27520);

(statearr_27546_27569[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (10))){
var inst_27509 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
var statearr_27547_27570 = state_27526__$1;
(statearr_27547_27570[(2)] = inst_27509);

(statearr_27547_27570[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27527 === (8))){
var inst_27494 = (state_27526[(10)]);
var inst_27490 = (state_27526[(9)]);
var inst_27486 = (state_27526[(8)]);
var inst_27499 = inst_27486.push(inst_27490);
var tmp27544 = inst_27486;
var inst_27486__$1 = tmp27544;
var inst_27487 = inst_27494;
var state_27526__$1 = (function (){var statearr_27548 = state_27526;
(statearr_27548[(14)] = inst_27499);

(statearr_27548[(7)] = inst_27487);

(statearr_27548[(8)] = inst_27486__$1);

return statearr_27548;
})();
var statearr_27549_27571 = state_27526__$1;
(statearr_27549_27571[(2)] = null);

(statearr_27549_27571[(1)] = (2));


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
});})(c__12815__auto___27557,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27557,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27553[(0)] = state_machine__12736__auto__);

(statearr_27553[(1)] = (1));

return statearr_27553;
});
var state_machine__12736__auto____1 = (function (state_27526){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27526);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27554){if((e27554 instanceof Object)){
var ex__12739__auto__ = e27554;
var statearr_27555_27572 = state_27526;
(statearr_27555_27572[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27526);

return cljs.core.constant$keyword$83;
} else {
throw e27554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27573 = state_27526;
state_27526 = G__27573;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27526){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27557,out))
})();
var state__12817__auto__ = (function (){var statearr_27556 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27557);

return statearr_27556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27557,out))
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
