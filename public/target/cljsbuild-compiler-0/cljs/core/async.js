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
if(typeof cljs.core.async.t24209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24209 = (function (f,fn_handler,meta24210){
this.f = f;
this.fn_handler = fn_handler;
this.meta24210 = meta24210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24211){
var self__ = this;
var _24211__$1 = this;
return self__.meta24210;
});

cljs.core.async.t24209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24211,meta24210__$1){
var self__ = this;
var _24211__$1 = this;
return (new cljs.core.async.t24209(self__.f,self__.fn_handler,meta24210__$1));
});

cljs.core.async.t24209.cljs$lang$type = true;

cljs.core.async.t24209.cljs$lang$ctorStr = "cljs.core.async/t24209";

cljs.core.async.t24209.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24209");
});

cljs.core.async.__GT_t24209 = (function __GT_t24209(f__$1,fn_handler__$1,meta24210){
return (new cljs.core.async.t24209(f__$1,fn_handler__$1,meta24210));
});

}

return (new cljs.core.async.t24209(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24213 = buff;
if(G__24213){
var bit__4487__auto__ = null;
if(cljs.core.truth_((function (){var or__3806__auto__ = bit__4487__auto__;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return G__24213.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24213.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24213);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24213);
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
var val_24230 = (function (){var G__24227 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24227) : cljs.core.deref.call(null,G__24227));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24228_24231 = val_24230;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24228_24231) : fn1.call(null,G__24228_24231));
} else {
cljs.core.async.impl.dispatch.run(((function (val_24230,ret){
return (function (){
var G__24229 = val_24230;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24229) : fn1.call(null,G__24229));
});})(val_24230,ret))
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
var G__24240 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24240) : cljs.core.deref.call(null,G__24240));
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
var ret = (function (){var G__24241 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24241) : cljs.core.deref.call(null,G__24241));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__24242_24244 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24242_24244) : fn1.call(null,G__24242_24244));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__24243 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__24243) : fn1.call(null,G__24243));
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
var n__4693__auto___24245 = n;
var x_24246 = (0);
while(true){
if((x_24246 < n__4693__auto___24245)){
(a[x_24246] = (0));

var G__24247 = (x_24246 + (1));
x_24246 = G__24247;
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

var G__24248 = (i + (1));
i = G__24248;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__24256 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24256) : cljs.core.atom.call(null,G__24256));
})();
if(typeof cljs.core.async.t24257 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24257 = (function (flag,alt_flag,meta24258){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24258 = meta24258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24257.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24260 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24260) : cljs.core.deref.call(null,G__24260));
});})(flag))
;

cljs.core.async.t24257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__24261_24263 = self__.flag;
var G__24262_24264 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24261_24263,G__24262_24264) : cljs.core.reset_BANG_.call(null,G__24261_24263,G__24262_24264));

return true;
});})(flag))
;

cljs.core.async.t24257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24259){
var self__ = this;
var _24259__$1 = this;
return self__.meta24258;
});})(flag))
;

cljs.core.async.t24257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24259,meta24258__$1){
var self__ = this;
var _24259__$1 = this;
return (new cljs.core.async.t24257(self__.flag,self__.alt_flag,meta24258__$1));
});})(flag))
;

cljs.core.async.t24257.cljs$lang$type = true;

cljs.core.async.t24257.cljs$lang$ctorStr = "cljs.core.async/t24257";

cljs.core.async.t24257.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24257");
});})(flag))
;

cljs.core.async.__GT_t24257 = ((function (flag){
return (function __GT_t24257(flag__$1,alt_flag__$1,meta24258){
return (new cljs.core.async.t24257(flag__$1,alt_flag__$1,meta24258));
});})(flag))
;

}

return (new cljs.core.async.t24257(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24268 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24268 = (function (cb,flag,alt_handler,meta24269){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24269 = meta24269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24268.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t24268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t24268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24270){
var self__ = this;
var _24270__$1 = this;
return self__.meta24269;
});

cljs.core.async.t24268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24270,meta24269__$1){
var self__ = this;
var _24270__$1 = this;
return (new cljs.core.async.t24268(self__.cb,self__.flag,self__.alt_handler,meta24269__$1));
});

cljs.core.async.t24268.cljs$lang$type = true;

cljs.core.async.t24268.cljs$lang$ctorStr = "cljs.core.async/t24268";

cljs.core.async.t24268.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t24268");
});

cljs.core.async.__GT_t24268 = (function __GT_t24268(cb__$1,flag__$1,alt_handler__$1,meta24269){
return (new cljs.core.async.t24268(cb__$1,flag__$1,alt_handler__$1,meta24269));
});

}

return (new cljs.core.async.t24268(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__24278 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24278) : port.call(null,G__24278));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__24279 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__24279) : port.call(null,G__24279));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24271_SHARP_){
var G__24280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24271_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24280) : fret.call(null,G__24280));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24272_SHARP_){
var G__24281 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24272_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__24281) : fret.call(null,G__24281));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24282 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24282) : cljs.core.deref.call(null,G__24282));
})(),(function (){var or__3806__auto__ = wport;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24283 = (i + (1));
i = G__24283;
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
var alts_BANG___delegate = function (ports,p__24284){
var map__24286 = p__24284;
var map__24286__$1 = ((cljs.core.seq_QMARK_(map__24286))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24286):map__24286);
var opts = map__24286__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24284 = null;
if (arguments.length > 1) {
var G__24287__i = 0, G__24287__a = new Array(arguments.length -  1);
while (G__24287__i < G__24287__a.length) {G__24287__a[G__24287__i] = arguments[G__24287__i + 1]; ++G__24287__i;}
  p__24284 = new cljs.core.IndexedSeq(G__24287__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__24284);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24288){
var ports = cljs.core.first(arglist__24288);
var p__24284 = cljs.core.rest(arglist__24288);
return alts_BANG___delegate(ports,p__24284);
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
var c__12815__auto___24386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24386){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24386){
return (function (state_24362){
var state_val_24363 = (state_24362[(1)]);
if((state_val_24363 === (7))){
var inst_24358 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24364_24387 = state_24362__$1;
(statearr_24364_24387[(2)] = inst_24358);

(statearr_24364_24387[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (1))){
var state_24362__$1 = state_24362;
var statearr_24365_24388 = state_24362__$1;
(statearr_24365_24388[(2)] = null);

(statearr_24365_24388[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (4))){
var inst_24341 = (state_24362[(7)]);
var inst_24341__$1 = (state_24362[(2)]);
var inst_24342 = (inst_24341__$1 == null);
var state_24362__$1 = (function (){var statearr_24366 = state_24362;
(statearr_24366[(7)] = inst_24341__$1);

return statearr_24366;
})();
if(cljs.core.truth_(inst_24342)){
var statearr_24367_24389 = state_24362__$1;
(statearr_24367_24389[(1)] = (5));

} else {
var statearr_24368_24390 = state_24362__$1;
(statearr_24368_24390[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (13))){
var state_24362__$1 = state_24362;
var statearr_24369_24391 = state_24362__$1;
(statearr_24369_24391[(2)] = null);

(statearr_24369_24391[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (6))){
var inst_24341 = (state_24362[(7)]);
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24362__$1,(11),to,inst_24341);
} else {
if((state_val_24363 === (3))){
var inst_24360 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24362__$1,inst_24360);
} else {
if((state_val_24363 === (12))){
var state_24362__$1 = state_24362;
var statearr_24370_24392 = state_24362__$1;
(statearr_24370_24392[(2)] = null);

(statearr_24370_24392[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (2))){
var state_24362__$1 = state_24362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24362__$1,(4),from);
} else {
if((state_val_24363 === (11))){
var inst_24351 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
if(cljs.core.truth_(inst_24351)){
var statearr_24371_24393 = state_24362__$1;
(statearr_24371_24393[(1)] = (12));

} else {
var statearr_24372_24394 = state_24362__$1;
(statearr_24372_24394[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (9))){
var state_24362__$1 = state_24362;
var statearr_24373_24395 = state_24362__$1;
(statearr_24373_24395[(2)] = null);

(statearr_24373_24395[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (5))){
var state_24362__$1 = state_24362;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24374_24396 = state_24362__$1;
(statearr_24374_24396[(1)] = (8));

} else {
var statearr_24375_24397 = state_24362__$1;
(statearr_24375_24397[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (14))){
var inst_24356 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24376_24398 = state_24362__$1;
(statearr_24376_24398[(2)] = inst_24356);

(statearr_24376_24398[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (10))){
var inst_24348 = (state_24362[(2)]);
var state_24362__$1 = state_24362;
var statearr_24377_24399 = state_24362__$1;
(statearr_24377_24399[(2)] = inst_24348);

(statearr_24377_24399[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24363 === (8))){
var inst_24345 = cljs.core.async.close_BANG_(to);
var state_24362__$1 = state_24362;
var statearr_24378_24400 = state_24362__$1;
(statearr_24378_24400[(2)] = inst_24345);

(statearr_24378_24400[(1)] = (10));


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
});})(c__12815__auto___24386))
;
return ((function (switch__12735__auto__,c__12815__auto___24386){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24382 = [null,null,null,null,null,null,null,null];
(statearr_24382[(0)] = state_machine__12736__auto__);

(statearr_24382[(1)] = (1));

return statearr_24382;
});
var state_machine__12736__auto____1 = (function (state_24362){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24362);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24383){if((e24383 instanceof Object)){
var ex__12739__auto__ = e24383;
var statearr_24384_24401 = state_24362;
(statearr_24384_24401[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24362);

return cljs.core.constant$keyword$83;
} else {
throw e24383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24402 = state_24362;
state_24362 = G__24402;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24362){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24386))
})();
var state__12817__auto__ = (function (){var statearr_24385 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24386);

return statearr_24385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24386))
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
return (function (p__24588){
var vec__24589 = p__24588;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24589,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24589,(1),null);
var job = vec__24589;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12815__auto___24773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24773,res,vec__24589,v,p,job,jobs,results){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24773,res,vec__24589,v,p,job,jobs,results){
return (function (state_24594){
var state_val_24595 = (state_24594[(1)]);
if((state_val_24595 === (2))){
var inst_24591 = (state_24594[(2)]);
var inst_24592 = cljs.core.async.close_BANG_(res);
var state_24594__$1 = (function (){var statearr_24596 = state_24594;
(statearr_24596[(7)] = inst_24591);

return statearr_24596;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24594__$1,inst_24592);
} else {
if((state_val_24595 === (1))){
var state_24594__$1 = state_24594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24594__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12815__auto___24773,res,vec__24589,v,p,job,jobs,results))
;
return ((function (switch__12735__auto__,c__12815__auto___24773,res,vec__24589,v,p,job,jobs,results){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24600 = [null,null,null,null,null,null,null,null];
(statearr_24600[(0)] = state_machine__12736__auto__);

(statearr_24600[(1)] = (1));

return statearr_24600;
});
var state_machine__12736__auto____1 = (function (state_24594){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24594);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24601){if((e24601 instanceof Object)){
var ex__12739__auto__ = e24601;
var statearr_24602_24774 = state_24594;
(statearr_24602_24774[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24594);

return cljs.core.constant$keyword$83;
} else {
throw e24601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24775 = state_24594;
state_24594 = G__24775;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24594){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24773,res,vec__24589,v,p,job,jobs,results))
})();
var state__12817__auto__ = (function (){var statearr_24603 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24773);

return statearr_24603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24773,res,vec__24589,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24604){
var vec__24605 = p__24604;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24605,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24605,(1),null);
var job = vec__24605;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__24606_24776 = v;
var G__24607_24777 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__24606_24776,G__24607_24777) : xf.call(null,G__24606_24776,G__24607_24777));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4693__auto___24778 = n;
var __24779 = (0);
while(true){
if((__24779 < n__4693__auto___24778)){
var G__24608_24780 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24608_24780) {
case "async":
var c__12815__auto___24782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24779,c__12815__auto___24782,G__24608_24780,n__4693__auto___24778,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (__24779,c__12815__auto___24782,G__24608_24780,n__4693__auto___24778,jobs,results,process,async){
return (function (state_24621){
var state_val_24622 = (state_24621[(1)]);
if((state_val_24622 === (7))){
var inst_24617 = (state_24621[(2)]);
var state_24621__$1 = state_24621;
var statearr_24623_24783 = state_24621__$1;
(statearr_24623_24783[(2)] = inst_24617);

(statearr_24623_24783[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24622 === (6))){
var state_24621__$1 = state_24621;
var statearr_24624_24784 = state_24621__$1;
(statearr_24624_24784[(2)] = null);

(statearr_24624_24784[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24622 === (5))){
var state_24621__$1 = state_24621;
var statearr_24625_24785 = state_24621__$1;
(statearr_24625_24785[(2)] = null);

(statearr_24625_24785[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24622 === (4))){
var inst_24611 = (state_24621[(2)]);
var inst_24612 = async(inst_24611);
var state_24621__$1 = state_24621;
if(cljs.core.truth_(inst_24612)){
var statearr_24626_24786 = state_24621__$1;
(statearr_24626_24786[(1)] = (5));

} else {
var statearr_24627_24787 = state_24621__$1;
(statearr_24627_24787[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24622 === (3))){
var inst_24619 = (state_24621[(2)]);
var state_24621__$1 = state_24621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24621__$1,inst_24619);
} else {
if((state_val_24622 === (2))){
var state_24621__$1 = state_24621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24621__$1,(4),jobs);
} else {
if((state_val_24622 === (1))){
var state_24621__$1 = state_24621;
var statearr_24628_24788 = state_24621__$1;
(statearr_24628_24788[(2)] = null);

(statearr_24628_24788[(1)] = (2));


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
});})(__24779,c__12815__auto___24782,G__24608_24780,n__4693__auto___24778,jobs,results,process,async))
;
return ((function (__24779,switch__12735__auto__,c__12815__auto___24782,G__24608_24780,n__4693__auto___24778,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24632 = [null,null,null,null,null,null,null];
(statearr_24632[(0)] = state_machine__12736__auto__);

(statearr_24632[(1)] = (1));

return statearr_24632;
});
var state_machine__12736__auto____1 = (function (state_24621){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24621);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24633){if((e24633 instanceof Object)){
var ex__12739__auto__ = e24633;
var statearr_24634_24789 = state_24621;
(statearr_24634_24789[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24621);

return cljs.core.constant$keyword$83;
} else {
throw e24633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24790 = state_24621;
state_24621 = G__24790;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24621){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(__24779,switch__12735__auto__,c__12815__auto___24782,G__24608_24780,n__4693__auto___24778,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24635 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24782);

return statearr_24635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(__24779,c__12815__auto___24782,G__24608_24780,n__4693__auto___24778,jobs,results,process,async))
);


break;
case "compute":
var c__12815__auto___24791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__24779,c__12815__auto___24791,G__24608_24780,n__4693__auto___24778,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (__24779,c__12815__auto___24791,G__24608_24780,n__4693__auto___24778,jobs,results,process,async){
return (function (state_24648){
var state_val_24649 = (state_24648[(1)]);
if((state_val_24649 === (7))){
var inst_24644 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
var statearr_24650_24792 = state_24648__$1;
(statearr_24650_24792[(2)] = inst_24644);

(statearr_24650_24792[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24649 === (6))){
var state_24648__$1 = state_24648;
var statearr_24651_24793 = state_24648__$1;
(statearr_24651_24793[(2)] = null);

(statearr_24651_24793[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24649 === (5))){
var state_24648__$1 = state_24648;
var statearr_24652_24794 = state_24648__$1;
(statearr_24652_24794[(2)] = null);

(statearr_24652_24794[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24649 === (4))){
var inst_24638 = (state_24648[(2)]);
var inst_24639 = process(inst_24638);
var state_24648__$1 = state_24648;
if(cljs.core.truth_(inst_24639)){
var statearr_24653_24795 = state_24648__$1;
(statearr_24653_24795[(1)] = (5));

} else {
var statearr_24654_24796 = state_24648__$1;
(statearr_24654_24796[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24649 === (3))){
var inst_24646 = (state_24648[(2)]);
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24648__$1,inst_24646);
} else {
if((state_val_24649 === (2))){
var state_24648__$1 = state_24648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24648__$1,(4),jobs);
} else {
if((state_val_24649 === (1))){
var state_24648__$1 = state_24648;
var statearr_24655_24797 = state_24648__$1;
(statearr_24655_24797[(2)] = null);

(statearr_24655_24797[(1)] = (2));


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
});})(__24779,c__12815__auto___24791,G__24608_24780,n__4693__auto___24778,jobs,results,process,async))
;
return ((function (__24779,switch__12735__auto__,c__12815__auto___24791,G__24608_24780,n__4693__auto___24778,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24659 = [null,null,null,null,null,null,null];
(statearr_24659[(0)] = state_machine__12736__auto__);

(statearr_24659[(1)] = (1));

return statearr_24659;
});
var state_machine__12736__auto____1 = (function (state_24648){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24648);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24660){if((e24660 instanceof Object)){
var ex__12739__auto__ = e24660;
var statearr_24661_24798 = state_24648;
(statearr_24661_24798[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24648);

return cljs.core.constant$keyword$83;
} else {
throw e24660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24799 = state_24648;
state_24648 = G__24799;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24648){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(__24779,switch__12735__auto__,c__12815__auto___24791,G__24608_24780,n__4693__auto___24778,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24662 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24791);

return statearr_24662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(__24779,c__12815__auto___24791,G__24608_24780,n__4693__auto___24778,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24800 = (__24779 + (1));
__24779 = G__24800;
continue;
} else {
}
break;
}

var c__12815__auto___24801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24801,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24801,jobs,results,process,async){
return (function (state_24684){
var state_val_24685 = (state_24684[(1)]);
if((state_val_24685 === (9))){
var inst_24677 = (state_24684[(2)]);
var state_24684__$1 = (function (){var statearr_24686 = state_24684;
(statearr_24686[(7)] = inst_24677);

return statearr_24686;
})();
var statearr_24687_24802 = state_24684__$1;
(statearr_24687_24802[(2)] = null);

(statearr_24687_24802[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24685 === (8))){
var inst_24670 = (state_24684[(8)]);
var inst_24675 = (state_24684[(2)]);
var state_24684__$1 = (function (){var statearr_24688 = state_24684;
(statearr_24688[(9)] = inst_24675);

return statearr_24688;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24684__$1,(9),results,inst_24670);
} else {
if((state_val_24685 === (7))){
var inst_24680 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
var statearr_24689_24803 = state_24684__$1;
(statearr_24689_24803[(2)] = inst_24680);

(statearr_24689_24803[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24685 === (6))){
var inst_24670 = (state_24684[(8)]);
var inst_24665 = (state_24684[(10)]);
var inst_24670__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_24671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24672 = [inst_24665,inst_24670__$1];
var inst_24673 = (new cljs.core.PersistentVector(null,2,(5),inst_24671,inst_24672,null));
var state_24684__$1 = (function (){var statearr_24690 = state_24684;
(statearr_24690[(8)] = inst_24670__$1);

return statearr_24690;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24684__$1,(8),jobs,inst_24673);
} else {
if((state_val_24685 === (5))){
var inst_24668 = cljs.core.async.close_BANG_(jobs);
var state_24684__$1 = state_24684;
var statearr_24691_24804 = state_24684__$1;
(statearr_24691_24804[(2)] = inst_24668);

(statearr_24691_24804[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24685 === (4))){
var inst_24665 = (state_24684[(10)]);
var inst_24665__$1 = (state_24684[(2)]);
var inst_24666 = (inst_24665__$1 == null);
var state_24684__$1 = (function (){var statearr_24692 = state_24684;
(statearr_24692[(10)] = inst_24665__$1);

return statearr_24692;
})();
if(cljs.core.truth_(inst_24666)){
var statearr_24693_24805 = state_24684__$1;
(statearr_24693_24805[(1)] = (5));

} else {
var statearr_24694_24806 = state_24684__$1;
(statearr_24694_24806[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24685 === (3))){
var inst_24682 = (state_24684[(2)]);
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24684__$1,inst_24682);
} else {
if((state_val_24685 === (2))){
var state_24684__$1 = state_24684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24684__$1,(4),from);
} else {
if((state_val_24685 === (1))){
var state_24684__$1 = state_24684;
var statearr_24695_24807 = state_24684__$1;
(statearr_24695_24807[(2)] = null);

(statearr_24695_24807[(1)] = (2));


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
});})(c__12815__auto___24801,jobs,results,process,async))
;
return ((function (switch__12735__auto__,c__12815__auto___24801,jobs,results,process,async){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24699[(0)] = state_machine__12736__auto__);

(statearr_24699[(1)] = (1));

return statearr_24699;
});
var state_machine__12736__auto____1 = (function (state_24684){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24684);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24700){if((e24700 instanceof Object)){
var ex__12739__auto__ = e24700;
var statearr_24701_24808 = state_24684;
(statearr_24701_24808[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24684);

return cljs.core.constant$keyword$83;
} else {
throw e24700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24809 = state_24684;
state_24684 = G__24809;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24684){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24801,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24702 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24801);

return statearr_24702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24801,jobs,results,process,async))
);


var c__12815__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto__,jobs,results,process,async){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto__,jobs,results,process,async){
return (function (state_24740){
var state_val_24741 = (state_24740[(1)]);
if((state_val_24741 === (7))){
var inst_24736 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24742_24810 = state_24740__$1;
(statearr_24742_24810[(2)] = inst_24736);

(statearr_24742_24810[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (20))){
var state_24740__$1 = state_24740;
var statearr_24743_24811 = state_24740__$1;
(statearr_24743_24811[(2)] = null);

(statearr_24743_24811[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (1))){
var state_24740__$1 = state_24740;
var statearr_24744_24812 = state_24740__$1;
(statearr_24744_24812[(2)] = null);

(statearr_24744_24812[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (4))){
var inst_24705 = (state_24740[(7)]);
var inst_24705__$1 = (state_24740[(2)]);
var inst_24706 = (inst_24705__$1 == null);
var state_24740__$1 = (function (){var statearr_24745 = state_24740;
(statearr_24745[(7)] = inst_24705__$1);

return statearr_24745;
})();
if(cljs.core.truth_(inst_24706)){
var statearr_24746_24813 = state_24740__$1;
(statearr_24746_24813[(1)] = (5));

} else {
var statearr_24747_24814 = state_24740__$1;
(statearr_24747_24814[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (15))){
var inst_24718 = (state_24740[(8)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24740__$1,(18),to,inst_24718);
} else {
if((state_val_24741 === (21))){
var inst_24731 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24748_24815 = state_24740__$1;
(statearr_24748_24815[(2)] = inst_24731);

(statearr_24748_24815[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (13))){
var inst_24733 = (state_24740[(2)]);
var state_24740__$1 = (function (){var statearr_24749 = state_24740;
(statearr_24749[(9)] = inst_24733);

return statearr_24749;
})();
var statearr_24750_24816 = state_24740__$1;
(statearr_24750_24816[(2)] = null);

(statearr_24750_24816[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (6))){
var inst_24705 = (state_24740[(7)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24740__$1,(11),inst_24705);
} else {
if((state_val_24741 === (17))){
var inst_24726 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
if(cljs.core.truth_(inst_24726)){
var statearr_24751_24817 = state_24740__$1;
(statearr_24751_24817[(1)] = (19));

} else {
var statearr_24752_24818 = state_24740__$1;
(statearr_24752_24818[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (3))){
var inst_24738 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24740__$1,inst_24738);
} else {
if((state_val_24741 === (12))){
var inst_24715 = (state_24740[(10)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24740__$1,(14),inst_24715);
} else {
if((state_val_24741 === (2))){
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24740__$1,(4),results);
} else {
if((state_val_24741 === (19))){
var state_24740__$1 = state_24740;
var statearr_24753_24819 = state_24740__$1;
(statearr_24753_24819[(2)] = null);

(statearr_24753_24819[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (11))){
var inst_24715 = (state_24740[(2)]);
var state_24740__$1 = (function (){var statearr_24754 = state_24740;
(statearr_24754[(10)] = inst_24715);

return statearr_24754;
})();
var statearr_24755_24820 = state_24740__$1;
(statearr_24755_24820[(2)] = null);

(statearr_24755_24820[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (9))){
var state_24740__$1 = state_24740;
var statearr_24756_24821 = state_24740__$1;
(statearr_24756_24821[(2)] = null);

(statearr_24756_24821[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (5))){
var state_24740__$1 = state_24740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24757_24822 = state_24740__$1;
(statearr_24757_24822[(1)] = (8));

} else {
var statearr_24758_24823 = state_24740__$1;
(statearr_24758_24823[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (14))){
var inst_24720 = (state_24740[(11)]);
var inst_24718 = (state_24740[(8)]);
var inst_24718__$1 = (state_24740[(2)]);
var inst_24719 = (inst_24718__$1 == null);
var inst_24720__$1 = cljs.core.not(inst_24719);
var state_24740__$1 = (function (){var statearr_24759 = state_24740;
(statearr_24759[(11)] = inst_24720__$1);

(statearr_24759[(8)] = inst_24718__$1);

return statearr_24759;
})();
if(inst_24720__$1){
var statearr_24760_24824 = state_24740__$1;
(statearr_24760_24824[(1)] = (15));

} else {
var statearr_24761_24825 = state_24740__$1;
(statearr_24761_24825[(1)] = (16));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (16))){
var inst_24720 = (state_24740[(11)]);
var state_24740__$1 = state_24740;
var statearr_24762_24826 = state_24740__$1;
(statearr_24762_24826[(2)] = inst_24720);

(statearr_24762_24826[(1)] = (17));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (10))){
var inst_24712 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24763_24827 = state_24740__$1;
(statearr_24763_24827[(2)] = inst_24712);

(statearr_24763_24827[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (18))){
var inst_24723 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24764_24828 = state_24740__$1;
(statearr_24764_24828[(2)] = inst_24723);

(statearr_24764_24828[(1)] = (17));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24741 === (8))){
var inst_24709 = cljs.core.async.close_BANG_(to);
var state_24740__$1 = state_24740;
var statearr_24765_24829 = state_24740__$1;
(statearr_24765_24829[(2)] = inst_24709);

(statearr_24765_24829[(1)] = (10));


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
var statearr_24769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24769[(0)] = state_machine__12736__auto__);

(statearr_24769[(1)] = (1));

return statearr_24769;
});
var state_machine__12736__auto____1 = (function (state_24740){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24740);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24770){if((e24770 instanceof Object)){
var ex__12739__auto__ = e24770;
var statearr_24771_24830 = state_24740;
(statearr_24771_24830[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24740);

return cljs.core.constant$keyword$83;
} else {
throw e24770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24831 = state_24740;
state_24740 = G__24831;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__,jobs,results,process,async))
})();
var state__12817__auto__ = (function (){var statearr_24772 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_24772;
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
var c__12815__auto___24954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24954,tc,fc){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24954,tc,fc){
return (function (state_24928){
var state_val_24929 = (state_24928[(1)]);
if((state_val_24929 === (7))){
var inst_24924 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24930_24955 = state_24928__$1;
(statearr_24930_24955[(2)] = inst_24924);

(statearr_24930_24955[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (1))){
var state_24928__$1 = state_24928;
var statearr_24931_24956 = state_24928__$1;
(statearr_24931_24956[(2)] = null);

(statearr_24931_24956[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (4))){
var inst_24905 = (state_24928[(7)]);
var inst_24905__$1 = (state_24928[(2)]);
var inst_24906 = (inst_24905__$1 == null);
var state_24928__$1 = (function (){var statearr_24932 = state_24928;
(statearr_24932[(7)] = inst_24905__$1);

return statearr_24932;
})();
if(cljs.core.truth_(inst_24906)){
var statearr_24933_24957 = state_24928__$1;
(statearr_24933_24957[(1)] = (5));

} else {
var statearr_24934_24958 = state_24928__$1;
(statearr_24934_24958[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (13))){
var state_24928__$1 = state_24928;
var statearr_24935_24959 = state_24928__$1;
(statearr_24935_24959[(2)] = null);

(statearr_24935_24959[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (6))){
var inst_24905 = (state_24928[(7)]);
var inst_24911 = (function (){var G__24936 = inst_24905;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24936) : p.call(null,G__24936));
})();
var state_24928__$1 = state_24928;
if(cljs.core.truth_(inst_24911)){
var statearr_24937_24960 = state_24928__$1;
(statearr_24937_24960[(1)] = (9));

} else {
var statearr_24938_24961 = state_24928__$1;
(statearr_24938_24961[(1)] = (10));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (3))){
var inst_24926 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24928__$1,inst_24926);
} else {
if((state_val_24929 === (12))){
var state_24928__$1 = state_24928;
var statearr_24939_24962 = state_24928__$1;
(statearr_24939_24962[(2)] = null);

(statearr_24939_24962[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (2))){
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24928__$1,(4),ch);
} else {
if((state_val_24929 === (11))){
var inst_24905 = (state_24928[(7)]);
var inst_24915 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24928__$1,(8),inst_24915,inst_24905);
} else {
if((state_val_24929 === (9))){
var state_24928__$1 = state_24928;
var statearr_24940_24963 = state_24928__$1;
(statearr_24940_24963[(2)] = tc);

(statearr_24940_24963[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (5))){
var inst_24908 = cljs.core.async.close_BANG_(tc);
var inst_24909 = cljs.core.async.close_BANG_(fc);
var state_24928__$1 = (function (){var statearr_24941 = state_24928;
(statearr_24941[(8)] = inst_24908);

return statearr_24941;
})();
var statearr_24942_24964 = state_24928__$1;
(statearr_24942_24964[(2)] = inst_24909);

(statearr_24942_24964[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (14))){
var inst_24922 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
var statearr_24943_24965 = state_24928__$1;
(statearr_24943_24965[(2)] = inst_24922);

(statearr_24943_24965[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (10))){
var state_24928__$1 = state_24928;
var statearr_24944_24966 = state_24928__$1;
(statearr_24944_24966[(2)] = fc);

(statearr_24944_24966[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24929 === (8))){
var inst_24917 = (state_24928[(2)]);
var state_24928__$1 = state_24928;
if(cljs.core.truth_(inst_24917)){
var statearr_24945_24967 = state_24928__$1;
(statearr_24945_24967[(1)] = (12));

} else {
var statearr_24946_24968 = state_24928__$1;
(statearr_24946_24968[(1)] = (13));

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
});})(c__12815__auto___24954,tc,fc))
;
return ((function (switch__12735__auto__,c__12815__auto___24954,tc,fc){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24950 = [null,null,null,null,null,null,null,null,null];
(statearr_24950[(0)] = state_machine__12736__auto__);

(statearr_24950[(1)] = (1));

return statearr_24950;
});
var state_machine__12736__auto____1 = (function (state_24928){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24928);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24951){if((e24951 instanceof Object)){
var ex__12739__auto__ = e24951;
var statearr_24952_24969 = state_24928;
(statearr_24952_24969[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24928);

return cljs.core.constant$keyword$83;
} else {
throw e24951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24970 = state_24928;
state_24928 = G__24970;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24928){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24954,tc,fc))
})();
var state__12817__auto__ = (function (){var statearr_24953 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24954);

return statearr_24953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24954,tc,fc))
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
return (function (state_25019){
var state_val_25020 = (state_25019[(1)]);
if((state_val_25020 === (7))){
var inst_25015 = (state_25019[(2)]);
var state_25019__$1 = state_25019;
var statearr_25021_25039 = state_25019__$1;
(statearr_25021_25039[(2)] = inst_25015);

(statearr_25021_25039[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25020 === (6))){
var inst_25008 = (state_25019[(7)]);
var inst_25005 = (state_25019[(8)]);
var inst_25012 = (function (){var G__25022 = inst_25005;
var G__25023 = inst_25008;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25022,G__25023) : f.call(null,G__25022,G__25023));
})();
var inst_25005__$1 = inst_25012;
var state_25019__$1 = (function (){var statearr_25024 = state_25019;
(statearr_25024[(8)] = inst_25005__$1);

return statearr_25024;
})();
var statearr_25025_25040 = state_25019__$1;
(statearr_25025_25040[(2)] = null);

(statearr_25025_25040[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25020 === (5))){
var inst_25005 = (state_25019[(8)]);
var state_25019__$1 = state_25019;
var statearr_25026_25041 = state_25019__$1;
(statearr_25026_25041[(2)] = inst_25005);

(statearr_25026_25041[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25020 === (4))){
var inst_25008 = (state_25019[(7)]);
var inst_25008__$1 = (state_25019[(2)]);
var inst_25009 = (inst_25008__$1 == null);
var state_25019__$1 = (function (){var statearr_25027 = state_25019;
(statearr_25027[(7)] = inst_25008__$1);

return statearr_25027;
})();
if(cljs.core.truth_(inst_25009)){
var statearr_25028_25042 = state_25019__$1;
(statearr_25028_25042[(1)] = (5));

} else {
var statearr_25029_25043 = state_25019__$1;
(statearr_25029_25043[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25020 === (3))){
var inst_25017 = (state_25019[(2)]);
var state_25019__$1 = state_25019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25019__$1,inst_25017);
} else {
if((state_val_25020 === (2))){
var state_25019__$1 = state_25019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25019__$1,(4),ch);
} else {
if((state_val_25020 === (1))){
var inst_25005 = init;
var state_25019__$1 = (function (){var statearr_25030 = state_25019;
(statearr_25030[(8)] = inst_25005);

return statearr_25030;
})();
var statearr_25031_25044 = state_25019__$1;
(statearr_25031_25044[(2)] = null);

(statearr_25031_25044[(1)] = (2));


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
var statearr_25035 = [null,null,null,null,null,null,null,null,null];
(statearr_25035[(0)] = state_machine__12736__auto__);

(statearr_25035[(1)] = (1));

return statearr_25035;
});
var state_machine__12736__auto____1 = (function (state_25019){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25019);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25036){if((e25036 instanceof Object)){
var ex__12739__auto__ = e25036;
var statearr_25037_25045 = state_25019;
(statearr_25037_25045[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25019);

return cljs.core.constant$keyword$83;
} else {
throw e25036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25046 = state_25019;
state_25019 = G__25046;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25019){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_25038 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_25038;
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
return (function (state_25123){
var state_val_25124 = (state_25123[(1)]);
if((state_val_25124 === (7))){
var inst_25105 = (state_25123[(2)]);
var state_25123__$1 = state_25123;
var statearr_25125_25148 = state_25123__$1;
(statearr_25125_25148[(2)] = inst_25105);

(statearr_25125_25148[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (1))){
var inst_25099 = cljs.core.seq(coll);
var inst_25100 = inst_25099;
var state_25123__$1 = (function (){var statearr_25126 = state_25123;
(statearr_25126[(7)] = inst_25100);

return statearr_25126;
})();
var statearr_25127_25149 = state_25123__$1;
(statearr_25127_25149[(2)] = null);

(statearr_25127_25149[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (4))){
var inst_25100 = (state_25123[(7)]);
var inst_25103 = cljs.core.first(inst_25100);
var state_25123__$1 = state_25123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25123__$1,(7),ch,inst_25103);
} else {
if((state_val_25124 === (13))){
var inst_25117 = (state_25123[(2)]);
var state_25123__$1 = state_25123;
var statearr_25128_25150 = state_25123__$1;
(statearr_25128_25150[(2)] = inst_25117);

(statearr_25128_25150[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (6))){
var inst_25108 = (state_25123[(2)]);
var state_25123__$1 = state_25123;
if(cljs.core.truth_(inst_25108)){
var statearr_25129_25151 = state_25123__$1;
(statearr_25129_25151[(1)] = (8));

} else {
var statearr_25130_25152 = state_25123__$1;
(statearr_25130_25152[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (3))){
var inst_25121 = (state_25123[(2)]);
var state_25123__$1 = state_25123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25123__$1,inst_25121);
} else {
if((state_val_25124 === (12))){
var state_25123__$1 = state_25123;
var statearr_25131_25153 = state_25123__$1;
(statearr_25131_25153[(2)] = null);

(statearr_25131_25153[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (2))){
var inst_25100 = (state_25123[(7)]);
var state_25123__$1 = state_25123;
if(cljs.core.truth_(inst_25100)){
var statearr_25132_25154 = state_25123__$1;
(statearr_25132_25154[(1)] = (4));

} else {
var statearr_25133_25155 = state_25123__$1;
(statearr_25133_25155[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (11))){
var inst_25114 = cljs.core.async.close_BANG_(ch);
var state_25123__$1 = state_25123;
var statearr_25134_25156 = state_25123__$1;
(statearr_25134_25156[(2)] = inst_25114);

(statearr_25134_25156[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (9))){
var state_25123__$1 = state_25123;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25135_25157 = state_25123__$1;
(statearr_25135_25157[(1)] = (11));

} else {
var statearr_25136_25158 = state_25123__$1;
(statearr_25136_25158[(1)] = (12));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (5))){
var inst_25100 = (state_25123[(7)]);
var state_25123__$1 = state_25123;
var statearr_25137_25159 = state_25123__$1;
(statearr_25137_25159[(2)] = inst_25100);

(statearr_25137_25159[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (10))){
var inst_25119 = (state_25123[(2)]);
var state_25123__$1 = state_25123;
var statearr_25138_25160 = state_25123__$1;
(statearr_25138_25160[(2)] = inst_25119);

(statearr_25138_25160[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25124 === (8))){
var inst_25100 = (state_25123[(7)]);
var inst_25110 = cljs.core.next(inst_25100);
var inst_25100__$1 = inst_25110;
var state_25123__$1 = (function (){var statearr_25139 = state_25123;
(statearr_25139[(7)] = inst_25100__$1);

return statearr_25139;
})();
var statearr_25140_25161 = state_25123__$1;
(statearr_25140_25161[(2)] = null);

(statearr_25140_25161[(1)] = (2));


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
var statearr_25144 = [null,null,null,null,null,null,null,null];
(statearr_25144[(0)] = state_machine__12736__auto__);

(statearr_25144[(1)] = (1));

return statearr_25144;
});
var state_machine__12736__auto____1 = (function (state_25123){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25123);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25145){if((e25145 instanceof Object)){
var ex__12739__auto__ = e25145;
var statearr_25146_25162 = state_25123;
(statearr_25146_25162[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25123);

return cljs.core.constant$keyword$83;
} else {
throw e25145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25163 = state_25123;
state_25123 = G__25163;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25123){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_25147 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_25147;
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

cljs.core.async.Mux = (function (){var obj25165 = {};
return obj25165;
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
return (function (){var or__3806__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__25169 = x__4450__auto__;
return goog.typeOf(G__25169);
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


cljs.core.async.Mult = (function (){var obj25171 = {};
return obj25171;
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
return (function (){var or__3806__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__25175 = x__4450__auto__;
return goog.typeOf(G__25175);
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
return (function (){var or__3806__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__25179 = x__4450__auto__;
return goog.typeOf(G__25179);
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
return (function (){var or__3806__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__25183 = x__4450__auto__;
return goog.typeOf(G__25183);
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
var cs = (function (){var G__25413 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25413) : cljs.core.atom.call(null,G__25413));
})();
var m = (function (){
if(typeof cljs.core.async.t25414 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25414 = (function (cs,ch,mult,meta25415){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25415 = meta25415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25414.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25414.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25414.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25414.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25417_25642 = self__.cs;
var G__25418_25643 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25417_25642,G__25418_25643) : cljs.core.reset_BANG_.call(null,G__25417_25642,G__25418_25643));

return null;
});})(cs))
;

cljs.core.async.t25414.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25416){
var self__ = this;
var _25416__$1 = this;
return self__.meta25415;
});})(cs))
;

cljs.core.async.t25414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25416,meta25415__$1){
var self__ = this;
var _25416__$1 = this;
return (new cljs.core.async.t25414(self__.cs,self__.ch,self__.mult,meta25415__$1));
});})(cs))
;

cljs.core.async.t25414.cljs$lang$type = true;

cljs.core.async.t25414.cljs$lang$ctorStr = "cljs.core.async/t25414";

cljs.core.async.t25414.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t25414");
});})(cs))
;

cljs.core.async.__GT_t25414 = ((function (cs){
return (function __GT_t25414(cs__$1,ch__$1,mult__$1,meta25415){
return (new cljs.core.async.t25414(cs__$1,ch__$1,mult__$1,meta25415));
});})(cs))
;

}

return (new cljs.core.async.t25414(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__25419 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25419) : cljs.core.atom.call(null,G__25419));
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
var c__12815__auto___25644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___25644,cs,m,dchan,dctr,done){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___25644,cs,m,dchan,dctr,done){
return (function (state_25550){
var state_val_25551 = (state_25550[(1)]);
if((state_val_25551 === (7))){
var inst_25546 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25552_25645 = state_25550__$1;
(statearr_25552_25645[(2)] = inst_25546);

(statearr_25552_25645[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (20))){
var inst_25451 = (state_25550[(7)]);
var inst_25461 = cljs.core.first(inst_25451);
var inst_25462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25461,(0),null);
var inst_25463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25461,(1),null);
var state_25550__$1 = (function (){var statearr_25553 = state_25550;
(statearr_25553[(8)] = inst_25462);

return statearr_25553;
})();
if(cljs.core.truth_(inst_25463)){
var statearr_25554_25646 = state_25550__$1;
(statearr_25554_25646[(1)] = (22));

} else {
var statearr_25555_25647 = state_25550__$1;
(statearr_25555_25647[(1)] = (23));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (27))){
var inst_25422 = (state_25550[(9)]);
var inst_25493 = (state_25550[(10)]);
var inst_25491 = (state_25550[(11)]);
var inst_25498 = (state_25550[(12)]);
var inst_25498__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25491,inst_25493);
var inst_25499 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25498__$1,inst_25422,done);
var state_25550__$1 = (function (){var statearr_25556 = state_25550;
(statearr_25556[(12)] = inst_25498__$1);

return statearr_25556;
})();
if(cljs.core.truth_(inst_25499)){
var statearr_25557_25648 = state_25550__$1;
(statearr_25557_25648[(1)] = (30));

} else {
var statearr_25558_25649 = state_25550__$1;
(statearr_25558_25649[(1)] = (31));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (1))){
var state_25550__$1 = state_25550;
var statearr_25559_25650 = state_25550__$1;
(statearr_25559_25650[(2)] = null);

(statearr_25559_25650[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (24))){
var inst_25451 = (state_25550[(7)]);
var inst_25468 = (state_25550[(2)]);
var inst_25469 = cljs.core.next(inst_25451);
var inst_25431 = inst_25469;
var inst_25432 = null;
var inst_25433 = (0);
var inst_25434 = (0);
var state_25550__$1 = (function (){var statearr_25560 = state_25550;
(statearr_25560[(13)] = inst_25433);

(statearr_25560[(14)] = inst_25432);

(statearr_25560[(15)] = inst_25431);

(statearr_25560[(16)] = inst_25434);

(statearr_25560[(17)] = inst_25468);

return statearr_25560;
})();
var statearr_25561_25651 = state_25550__$1;
(statearr_25561_25651[(2)] = null);

(statearr_25561_25651[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (39))){
var state_25550__$1 = state_25550;
var statearr_25565_25652 = state_25550__$1;
(statearr_25565_25652[(2)] = null);

(statearr_25565_25652[(1)] = (41));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (4))){
var inst_25422 = (state_25550[(9)]);
var inst_25422__$1 = (state_25550[(2)]);
var inst_25423 = (inst_25422__$1 == null);
var state_25550__$1 = (function (){var statearr_25566 = state_25550;
(statearr_25566[(9)] = inst_25422__$1);

return statearr_25566;
})();
if(cljs.core.truth_(inst_25423)){
var statearr_25567_25653 = state_25550__$1;
(statearr_25567_25653[(1)] = (5));

} else {
var statearr_25568_25654 = state_25550__$1;
(statearr_25568_25654[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (15))){
var inst_25433 = (state_25550[(13)]);
var inst_25432 = (state_25550[(14)]);
var inst_25431 = (state_25550[(15)]);
var inst_25434 = (state_25550[(16)]);
var inst_25447 = (state_25550[(2)]);
var inst_25448 = (inst_25434 + (1));
var tmp25562 = inst_25433;
var tmp25563 = inst_25432;
var tmp25564 = inst_25431;
var inst_25431__$1 = tmp25564;
var inst_25432__$1 = tmp25563;
var inst_25433__$1 = tmp25562;
var inst_25434__$1 = inst_25448;
var state_25550__$1 = (function (){var statearr_25569 = state_25550;
(statearr_25569[(13)] = inst_25433__$1);

(statearr_25569[(14)] = inst_25432__$1);

(statearr_25569[(15)] = inst_25431__$1);

(statearr_25569[(18)] = inst_25447);

(statearr_25569[(16)] = inst_25434__$1);

return statearr_25569;
})();
var statearr_25570_25655 = state_25550__$1;
(statearr_25570_25655[(2)] = null);

(statearr_25570_25655[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (21))){
var inst_25472 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25574_25656 = state_25550__$1;
(statearr_25574_25656[(2)] = inst_25472);

(statearr_25574_25656[(1)] = (18));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (31))){
var inst_25498 = (state_25550[(12)]);
var inst_25502 = done(null);
var inst_25503 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25498);
var state_25550__$1 = (function (){var statearr_25575 = state_25550;
(statearr_25575[(19)] = inst_25502);

return statearr_25575;
})();
var statearr_25576_25657 = state_25550__$1;
(statearr_25576_25657[(2)] = inst_25503);

(statearr_25576_25657[(1)] = (32));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (32))){
var inst_25493 = (state_25550[(10)]);
var inst_25491 = (state_25550[(11)]);
var inst_25490 = (state_25550[(20)]);
var inst_25492 = (state_25550[(21)]);
var inst_25505 = (state_25550[(2)]);
var inst_25506 = (inst_25493 + (1));
var tmp25571 = inst_25491;
var tmp25572 = inst_25490;
var tmp25573 = inst_25492;
var inst_25490__$1 = tmp25572;
var inst_25491__$1 = tmp25571;
var inst_25492__$1 = tmp25573;
var inst_25493__$1 = inst_25506;
var state_25550__$1 = (function (){var statearr_25577 = state_25550;
(statearr_25577[(10)] = inst_25493__$1);

(statearr_25577[(11)] = inst_25491__$1);

(statearr_25577[(20)] = inst_25490__$1);

(statearr_25577[(22)] = inst_25505);

(statearr_25577[(21)] = inst_25492__$1);

return statearr_25577;
})();
var statearr_25578_25658 = state_25550__$1;
(statearr_25578_25658[(2)] = null);

(statearr_25578_25658[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (40))){
var inst_25518 = (state_25550[(23)]);
var inst_25522 = done(null);
var inst_25523 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25518);
var state_25550__$1 = (function (){var statearr_25579 = state_25550;
(statearr_25579[(24)] = inst_25522);

return statearr_25579;
})();
var statearr_25580_25659 = state_25550__$1;
(statearr_25580_25659[(2)] = inst_25523);

(statearr_25580_25659[(1)] = (41));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (33))){
var inst_25509 = (state_25550[(25)]);
var inst_25511 = cljs.core.chunked_seq_QMARK_(inst_25509);
var state_25550__$1 = state_25550;
if(inst_25511){
var statearr_25581_25660 = state_25550__$1;
(statearr_25581_25660[(1)] = (36));

} else {
var statearr_25582_25661 = state_25550__$1;
(statearr_25582_25661[(1)] = (37));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (13))){
var inst_25441 = (state_25550[(26)]);
var inst_25444 = cljs.core.async.close_BANG_(inst_25441);
var state_25550__$1 = state_25550;
var statearr_25583_25662 = state_25550__$1;
(statearr_25583_25662[(2)] = inst_25444);

(statearr_25583_25662[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (22))){
var inst_25462 = (state_25550[(8)]);
var inst_25465 = cljs.core.async.close_BANG_(inst_25462);
var state_25550__$1 = state_25550;
var statearr_25584_25663 = state_25550__$1;
(statearr_25584_25663[(2)] = inst_25465);

(statearr_25584_25663[(1)] = (24));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (36))){
var inst_25509 = (state_25550[(25)]);
var inst_25513 = cljs.core.chunk_first(inst_25509);
var inst_25514 = cljs.core.chunk_rest(inst_25509);
var inst_25515 = cljs.core.count(inst_25513);
var inst_25490 = inst_25514;
var inst_25491 = inst_25513;
var inst_25492 = inst_25515;
var inst_25493 = (0);
var state_25550__$1 = (function (){var statearr_25585 = state_25550;
(statearr_25585[(10)] = inst_25493);

(statearr_25585[(11)] = inst_25491);

(statearr_25585[(20)] = inst_25490);

(statearr_25585[(21)] = inst_25492);

return statearr_25585;
})();
var statearr_25586_25664 = state_25550__$1;
(statearr_25586_25664[(2)] = null);

(statearr_25586_25664[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (41))){
var inst_25509 = (state_25550[(25)]);
var inst_25525 = (state_25550[(2)]);
var inst_25526 = cljs.core.next(inst_25509);
var inst_25490 = inst_25526;
var inst_25491 = null;
var inst_25492 = (0);
var inst_25493 = (0);
var state_25550__$1 = (function (){var statearr_25587 = state_25550;
(statearr_25587[(10)] = inst_25493);

(statearr_25587[(11)] = inst_25491);

(statearr_25587[(27)] = inst_25525);

(statearr_25587[(20)] = inst_25490);

(statearr_25587[(21)] = inst_25492);

return statearr_25587;
})();
var statearr_25588_25665 = state_25550__$1;
(statearr_25588_25665[(2)] = null);

(statearr_25588_25665[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (43))){
var state_25550__$1 = state_25550;
var statearr_25589_25666 = state_25550__$1;
(statearr_25589_25666[(2)] = null);

(statearr_25589_25666[(1)] = (44));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (29))){
var inst_25534 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25590_25667 = state_25550__$1;
(statearr_25590_25667[(2)] = inst_25534);

(statearr_25590_25667[(1)] = (26));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (44))){
var inst_25543 = (state_25550[(2)]);
var state_25550__$1 = (function (){var statearr_25591 = state_25550;
(statearr_25591[(28)] = inst_25543);

return statearr_25591;
})();
var statearr_25592_25668 = state_25550__$1;
(statearr_25592_25668[(2)] = null);

(statearr_25592_25668[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (6))){
var inst_25482 = (state_25550[(29)]);
var inst_25481 = (function (){var G__25593 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25593) : cljs.core.deref.call(null,G__25593));
})();
var inst_25482__$1 = cljs.core.keys(inst_25481);
var inst_25483 = cljs.core.count(inst_25482__$1);
var inst_25484 = (function (){var G__25594 = dctr;
var G__25595 = inst_25483;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25594,G__25595) : cljs.core.reset_BANG_.call(null,G__25594,G__25595));
})();
var inst_25489 = cljs.core.seq(inst_25482__$1);
var inst_25490 = inst_25489;
var inst_25491 = null;
var inst_25492 = (0);
var inst_25493 = (0);
var state_25550__$1 = (function (){var statearr_25596 = state_25550;
(statearr_25596[(10)] = inst_25493);

(statearr_25596[(11)] = inst_25491);

(statearr_25596[(29)] = inst_25482__$1);

(statearr_25596[(20)] = inst_25490);

(statearr_25596[(21)] = inst_25492);

(statearr_25596[(30)] = inst_25484);

return statearr_25596;
})();
var statearr_25597_25669 = state_25550__$1;
(statearr_25597_25669[(2)] = null);

(statearr_25597_25669[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (28))){
var inst_25509 = (state_25550[(25)]);
var inst_25490 = (state_25550[(20)]);
var inst_25509__$1 = cljs.core.seq(inst_25490);
var state_25550__$1 = (function (){var statearr_25598 = state_25550;
(statearr_25598[(25)] = inst_25509__$1);

return statearr_25598;
})();
if(inst_25509__$1){
var statearr_25599_25670 = state_25550__$1;
(statearr_25599_25670[(1)] = (33));

} else {
var statearr_25600_25671 = state_25550__$1;
(statearr_25600_25671[(1)] = (34));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (25))){
var inst_25493 = (state_25550[(10)]);
var inst_25492 = (state_25550[(21)]);
var inst_25495 = (inst_25493 < inst_25492);
var inst_25496 = inst_25495;
var state_25550__$1 = state_25550;
if(cljs.core.truth_(inst_25496)){
var statearr_25601_25672 = state_25550__$1;
(statearr_25601_25672[(1)] = (27));

} else {
var statearr_25602_25673 = state_25550__$1;
(statearr_25602_25673[(1)] = (28));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (34))){
var state_25550__$1 = state_25550;
var statearr_25603_25674 = state_25550__$1;
(statearr_25603_25674[(2)] = null);

(statearr_25603_25674[(1)] = (35));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (17))){
var state_25550__$1 = state_25550;
var statearr_25604_25675 = state_25550__$1;
(statearr_25604_25675[(2)] = null);

(statearr_25604_25675[(1)] = (18));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (3))){
var inst_25548 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25550__$1,inst_25548);
} else {
if((state_val_25551 === (12))){
var inst_25477 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25605_25676 = state_25550__$1;
(statearr_25605_25676[(2)] = inst_25477);

(statearr_25605_25676[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (2))){
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25550__$1,(4),ch);
} else {
if((state_val_25551 === (23))){
var state_25550__$1 = state_25550;
var statearr_25606_25677 = state_25550__$1;
(statearr_25606_25677[(2)] = null);

(statearr_25606_25677[(1)] = (24));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (35))){
var inst_25532 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25607_25678 = state_25550__$1;
(statearr_25607_25678[(2)] = inst_25532);

(statearr_25607_25678[(1)] = (29));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (19))){
var inst_25451 = (state_25550[(7)]);
var inst_25455 = cljs.core.chunk_first(inst_25451);
var inst_25456 = cljs.core.chunk_rest(inst_25451);
var inst_25457 = cljs.core.count(inst_25455);
var inst_25431 = inst_25456;
var inst_25432 = inst_25455;
var inst_25433 = inst_25457;
var inst_25434 = (0);
var state_25550__$1 = (function (){var statearr_25608 = state_25550;
(statearr_25608[(13)] = inst_25433);

(statearr_25608[(14)] = inst_25432);

(statearr_25608[(15)] = inst_25431);

(statearr_25608[(16)] = inst_25434);

return statearr_25608;
})();
var statearr_25609_25679 = state_25550__$1;
(statearr_25609_25679[(2)] = null);

(statearr_25609_25679[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (11))){
var inst_25431 = (state_25550[(15)]);
var inst_25451 = (state_25550[(7)]);
var inst_25451__$1 = cljs.core.seq(inst_25431);
var state_25550__$1 = (function (){var statearr_25610 = state_25550;
(statearr_25610[(7)] = inst_25451__$1);

return statearr_25610;
})();
if(inst_25451__$1){
var statearr_25611_25680 = state_25550__$1;
(statearr_25611_25680[(1)] = (16));

} else {
var statearr_25612_25681 = state_25550__$1;
(statearr_25612_25681[(1)] = (17));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (9))){
var inst_25479 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25613_25682 = state_25550__$1;
(statearr_25613_25682[(2)] = inst_25479);

(statearr_25613_25682[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (5))){
var inst_25429 = (function (){var G__25614 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25614) : cljs.core.deref.call(null,G__25614));
})();
var inst_25430 = cljs.core.seq(inst_25429);
var inst_25431 = inst_25430;
var inst_25432 = null;
var inst_25433 = (0);
var inst_25434 = (0);
var state_25550__$1 = (function (){var statearr_25615 = state_25550;
(statearr_25615[(13)] = inst_25433);

(statearr_25615[(14)] = inst_25432);

(statearr_25615[(15)] = inst_25431);

(statearr_25615[(16)] = inst_25434);

return statearr_25615;
})();
var statearr_25616_25683 = state_25550__$1;
(statearr_25616_25683[(2)] = null);

(statearr_25616_25683[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (14))){
var state_25550__$1 = state_25550;
var statearr_25617_25684 = state_25550__$1;
(statearr_25617_25684[(2)] = null);

(statearr_25617_25684[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (45))){
var inst_25540 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25618_25685 = state_25550__$1;
(statearr_25618_25685[(2)] = inst_25540);

(statearr_25618_25685[(1)] = (44));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (26))){
var inst_25482 = (state_25550[(29)]);
var inst_25536 = (state_25550[(2)]);
var inst_25537 = cljs.core.seq(inst_25482);
var state_25550__$1 = (function (){var statearr_25619 = state_25550;
(statearr_25619[(31)] = inst_25536);

return statearr_25619;
})();
if(inst_25537){
var statearr_25620_25686 = state_25550__$1;
(statearr_25620_25686[(1)] = (42));

} else {
var statearr_25621_25687 = state_25550__$1;
(statearr_25621_25687[(1)] = (43));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (16))){
var inst_25451 = (state_25550[(7)]);
var inst_25453 = cljs.core.chunked_seq_QMARK_(inst_25451);
var state_25550__$1 = state_25550;
if(inst_25453){
var statearr_25622_25688 = state_25550__$1;
(statearr_25622_25688[(1)] = (19));

} else {
var statearr_25623_25689 = state_25550__$1;
(statearr_25623_25689[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (38))){
var inst_25529 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25624_25690 = state_25550__$1;
(statearr_25624_25690[(2)] = inst_25529);

(statearr_25624_25690[(1)] = (35));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (30))){
var state_25550__$1 = state_25550;
var statearr_25625_25691 = state_25550__$1;
(statearr_25625_25691[(2)] = null);

(statearr_25625_25691[(1)] = (32));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (10))){
var inst_25432 = (state_25550[(14)]);
var inst_25434 = (state_25550[(16)]);
var inst_25440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25432,inst_25434);
var inst_25441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25440,(0),null);
var inst_25442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25440,(1),null);
var state_25550__$1 = (function (){var statearr_25626 = state_25550;
(statearr_25626[(26)] = inst_25441);

return statearr_25626;
})();
if(cljs.core.truth_(inst_25442)){
var statearr_25627_25692 = state_25550__$1;
(statearr_25627_25692[(1)] = (13));

} else {
var statearr_25628_25693 = state_25550__$1;
(statearr_25628_25693[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (18))){
var inst_25475 = (state_25550[(2)]);
var state_25550__$1 = state_25550;
var statearr_25629_25694 = state_25550__$1;
(statearr_25629_25694[(2)] = inst_25475);

(statearr_25629_25694[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (42))){
var state_25550__$1 = state_25550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25550__$1,(45),dchan);
} else {
if((state_val_25551 === (37))){
var inst_25422 = (state_25550[(9)]);
var inst_25509 = (state_25550[(25)]);
var inst_25518 = (state_25550[(23)]);
var inst_25518__$1 = cljs.core.first(inst_25509);
var inst_25519 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25518__$1,inst_25422,done);
var state_25550__$1 = (function (){var statearr_25630 = state_25550;
(statearr_25630[(23)] = inst_25518__$1);

return statearr_25630;
})();
if(cljs.core.truth_(inst_25519)){
var statearr_25631_25695 = state_25550__$1;
(statearr_25631_25695[(1)] = (39));

} else {
var statearr_25632_25696 = state_25550__$1;
(statearr_25632_25696[(1)] = (40));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25551 === (8))){
var inst_25433 = (state_25550[(13)]);
var inst_25434 = (state_25550[(16)]);
var inst_25436 = (inst_25434 < inst_25433);
var inst_25437 = inst_25436;
var state_25550__$1 = state_25550;
if(cljs.core.truth_(inst_25437)){
var statearr_25633_25697 = state_25550__$1;
(statearr_25633_25697[(1)] = (10));

} else {
var statearr_25634_25698 = state_25550__$1;
(statearr_25634_25698[(1)] = (11));

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
});})(c__12815__auto___25644,cs,m,dchan,dctr,done))
;
return ((function (switch__12735__auto__,c__12815__auto___25644,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_25638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25638[(0)] = state_machine__12736__auto__);

(statearr_25638[(1)] = (1));

return statearr_25638;
});
var state_machine__12736__auto____1 = (function (state_25550){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25550);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e25639){if((e25639 instanceof Object)){
var ex__12739__auto__ = e25639;
var statearr_25640_25699 = state_25550;
(statearr_25640_25699[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25550);

return cljs.core.constant$keyword$83;
} else {
throw e25639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__25700 = state_25550;
state_25550 = G__25700;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25550){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___25644,cs,m,dchan,dctr,done))
})();
var state__12817__auto__ = (function (){var statearr_25641 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_25641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___25644);

return statearr_25641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___25644,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj25705 = {};
return obj25705;
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
return (function (){var or__3806__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__25709 = x__4450__auto__;
return goog.typeOf(G__25709);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__25713 = x__4450__auto__;
return goog.typeOf(G__25713);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__25717 = x__4450__auto__;
return goog.typeOf(G__25717);
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
return (function (){var or__3806__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__25721 = x__4450__auto__;
return goog.typeOf(G__25721);
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
return (function (){var or__3806__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__25725 = x__4450__auto__;
return goog.typeOf(G__25725);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25726){
var map__25732 = p__25726;
var map__25732__$1 = ((cljs.core.seq_QMARK_(map__25732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25732):map__25732);
var opts = map__25732__$1;
var statearr_25733_25737 = state;
(statearr_25733_25737[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__25732,map__25732__$1,opts){
return (function (val){
var statearr_25734_25738 = state;
(statearr_25734_25738[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__25732,map__25732__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25735_25739 = state;
(statearr_25735_25739[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25736 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25736) : cljs.core.deref.call(null,G__25736));
})());


return cljs.core.constant$keyword$83;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25726 = null;
if (arguments.length > 3) {
var G__25740__i = 0, G__25740__a = new Array(arguments.length -  3);
while (G__25740__i < G__25740__a.length) {G__25740__a[G__25740__i] = arguments[G__25740__i + 3]; ++G__25740__i;}
  p__25726 = new cljs.core.IndexedSeq(G__25740__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25726);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25741){
var state = cljs.core.first(arglist__25741);
arglist__25741 = cljs.core.next(arglist__25741);
var cont_block = cljs.core.first(arglist__25741);
arglist__25741 = cljs.core.next(arglist__25741);
var ports = cljs.core.first(arglist__25741);
var p__25726 = cljs.core.rest(arglist__25741);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25726);
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
var cs = (function (){var G__25874 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25874) : cljs.core.atom.call(null,G__25874));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$93);
var solo_mode = (function (){var G__25875 = cljs.core.constant$keyword$92;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25875) : cljs.core.atom.call(null,G__25875));
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
if(cljs.core.truth_((function (){var G__25876 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__25876) : attr.call(null,G__25876));
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
var chs = (function (){var G__25877 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25877) : cljs.core.deref.call(null,G__25877));
})();
var mode = (function (){var G__25878 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25878) : cljs.core.deref.call(null,G__25878));
})();
var solos = pick(cljs.core.constant$keyword$93,chs);
var pauses = pick(cljs.core.constant$keyword$91,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$94,solos,cljs.core.constant$keyword$95,pick(cljs.core.constant$keyword$92,chs),cljs.core.constant$keyword$96,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$91)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t25879 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25879 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25880){
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
this.meta25880 = meta25880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25879.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25879.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25879.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25879.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__25882_26006 = self__.cs;
var G__25883_26007 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25882_26006,G__25883_26007) : cljs.core.reset_BANG_.call(null,G__25882_26006,G__25883_26007));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25879.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25879.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__25884_26008 = self__.solo_mode;
var G__25885_26009 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25884_26008,G__25885_26009) : cljs.core.reset_BANG_.call(null,G__25884_26008,G__25885_26009));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25879.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25879.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25881){
var self__ = this;
var _25881__$1 = this;
return self__.meta25880;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25881,meta25880__$1){
var self__ = this;
var _25881__$1 = this;
return (new cljs.core.async.t25879(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25880__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25879.cljs$lang$type = true;

cljs.core.async.t25879.cljs$lang$ctorStr = "cljs.core.async/t25879";

cljs.core.async.t25879.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t25879");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25879 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25879(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25880){
return (new cljs.core.async.t25879(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25880));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25879(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12815__auto___26010 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25957){
var state_val_25958 = (state_25957[(1)]);
if((state_val_25958 === (7))){
var inst_25899 = (state_25957[(7)]);
var inst_25904 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25899);
var state_25957__$1 = state_25957;
var statearr_25959_26011 = state_25957__$1;
(statearr_25959_26011[(2)] = inst_25904);

(statearr_25959_26011[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (20))){
var inst_25914 = (state_25957[(8)]);
var state_25957__$1 = state_25957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25957__$1,(23),out,inst_25914);
} else {
if((state_val_25958 === (1))){
var inst_25889 = (state_25957[(9)]);
var inst_25889__$1 = calc_state();
var inst_25890 = cljs.core.seq_QMARK_(inst_25889__$1);
var state_25957__$1 = (function (){var statearr_25960 = state_25957;
(statearr_25960[(9)] = inst_25889__$1);

return statearr_25960;
})();
if(inst_25890){
var statearr_25961_26012 = state_25957__$1;
(statearr_25961_26012[(1)] = (2));

} else {
var statearr_25962_26013 = state_25957__$1;
(statearr_25962_26013[(1)] = (3));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (24))){
var inst_25907 = (state_25957[(10)]);
var inst_25899 = inst_25907;
var state_25957__$1 = (function (){var statearr_25963 = state_25957;
(statearr_25963[(7)] = inst_25899);

return statearr_25963;
})();
var statearr_25964_26014 = state_25957__$1;
(statearr_25964_26014[(2)] = null);

(statearr_25964_26014[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (4))){
var inst_25889 = (state_25957[(9)]);
var inst_25895 = (state_25957[(2)]);
var inst_25896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25895,cljs.core.constant$keyword$96);
var inst_25897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25895,cljs.core.constant$keyword$95);
var inst_25898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25895,cljs.core.constant$keyword$94);
var inst_25899 = inst_25889;
var state_25957__$1 = (function (){var statearr_25965 = state_25957;
(statearr_25965[(11)] = inst_25898);

(statearr_25965[(7)] = inst_25899);

(statearr_25965[(12)] = inst_25897);

(statearr_25965[(13)] = inst_25896);

return statearr_25965;
})();
var statearr_25966_26015 = state_25957__$1;
(statearr_25966_26015[(2)] = null);

(statearr_25966_26015[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (15))){
var state_25957__$1 = state_25957;
var statearr_25967_26016 = state_25957__$1;
(statearr_25967_26016[(2)] = null);

(statearr_25967_26016[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (21))){
var inst_25907 = (state_25957[(10)]);
var inst_25899 = inst_25907;
var state_25957__$1 = (function (){var statearr_25968 = state_25957;
(statearr_25968[(7)] = inst_25899);

return statearr_25968;
})();
var statearr_25969_26017 = state_25957__$1;
(statearr_25969_26017[(2)] = null);

(statearr_25969_26017[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (13))){
var inst_25953 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_25970_26018 = state_25957__$1;
(statearr_25970_26018[(2)] = inst_25953);

(statearr_25970_26018[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (22))){
var inst_25951 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_25971_26019 = state_25957__$1;
(statearr_25971_26019[(2)] = inst_25951);

(statearr_25971_26019[(1)] = (13));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (6))){
var inst_25955 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25957__$1,inst_25955);
} else {
if((state_val_25958 === (25))){
var state_25957__$1 = state_25957;
var statearr_25972_26020 = state_25957__$1;
(statearr_25972_26020[(2)] = null);

(statearr_25972_26020[(1)] = (26));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (17))){
var inst_25930 = (state_25957[(14)]);
var state_25957__$1 = state_25957;
var statearr_25973_26021 = state_25957__$1;
(statearr_25973_26021[(2)] = inst_25930);

(statearr_25973_26021[(1)] = (19));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (3))){
var inst_25889 = (state_25957[(9)]);
var state_25957__$1 = state_25957;
var statearr_25974_26022 = state_25957__$1;
(statearr_25974_26022[(2)] = inst_25889);

(statearr_25974_26022[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (12))){
var inst_25910 = (state_25957[(15)]);
var inst_25930 = (state_25957[(14)]);
var inst_25915 = (state_25957[(16)]);
var inst_25930__$1 = (function (){var G__25975 = inst_25915;
return (inst_25910.cljs$core$IFn$_invoke$arity$1 ? inst_25910.cljs$core$IFn$_invoke$arity$1(G__25975) : inst_25910.call(null,G__25975));
})();
var state_25957__$1 = (function (){var statearr_25976 = state_25957;
(statearr_25976[(14)] = inst_25930__$1);

return statearr_25976;
})();
if(cljs.core.truth_(inst_25930__$1)){
var statearr_25977_26023 = state_25957__$1;
(statearr_25977_26023[(1)] = (17));

} else {
var statearr_25978_26024 = state_25957__$1;
(statearr_25978_26024[(1)] = (18));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (2))){
var inst_25889 = (state_25957[(9)]);
var inst_25892 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25889);
var state_25957__$1 = state_25957;
var statearr_25979_26025 = state_25957__$1;
(statearr_25979_26025[(2)] = inst_25892);

(statearr_25979_26025[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (23))){
var inst_25942 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
if(cljs.core.truth_(inst_25942)){
var statearr_25980_26026 = state_25957__$1;
(statearr_25980_26026[(1)] = (24));

} else {
var statearr_25981_26027 = state_25957__$1;
(statearr_25981_26027[(1)] = (25));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (19))){
var inst_25939 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
if(cljs.core.truth_(inst_25939)){
var statearr_25982_26028 = state_25957__$1;
(statearr_25982_26028[(1)] = (20));

} else {
var statearr_25983_26029 = state_25957__$1;
(statearr_25983_26029[(1)] = (21));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (11))){
var inst_25914 = (state_25957[(8)]);
var inst_25920 = (inst_25914 == null);
var state_25957__$1 = state_25957;
if(cljs.core.truth_(inst_25920)){
var statearr_25984_26030 = state_25957__$1;
(statearr_25984_26030[(1)] = (14));

} else {
var statearr_25985_26031 = state_25957__$1;
(statearr_25985_26031[(1)] = (15));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (9))){
var inst_25907 = (state_25957[(10)]);
var inst_25907__$1 = (state_25957[(2)]);
var inst_25908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25907__$1,cljs.core.constant$keyword$96);
var inst_25909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25907__$1,cljs.core.constant$keyword$95);
var inst_25910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25907__$1,cljs.core.constant$keyword$94);
var state_25957__$1 = (function (){var statearr_25986 = state_25957;
(statearr_25986[(15)] = inst_25910);

(statearr_25986[(17)] = inst_25909);

(statearr_25986[(10)] = inst_25907__$1);

return statearr_25986;
})();
return cljs.core.async.ioc_alts_BANG_(state_25957__$1,(10),inst_25908);
} else {
if((state_val_25958 === (5))){
var inst_25899 = (state_25957[(7)]);
var inst_25902 = cljs.core.seq_QMARK_(inst_25899);
var state_25957__$1 = state_25957;
if(inst_25902){
var statearr_25987_26032 = state_25957__$1;
(statearr_25987_26032[(1)] = (7));

} else {
var statearr_25988_26033 = state_25957__$1;
(statearr_25988_26033[(1)] = (8));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (14))){
var inst_25915 = (state_25957[(16)]);
var inst_25922 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25915);
var state_25957__$1 = state_25957;
var statearr_25989_26034 = state_25957__$1;
(statearr_25989_26034[(2)] = inst_25922);

(statearr_25989_26034[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (26))){
var inst_25947 = (state_25957[(2)]);
var state_25957__$1 = state_25957;
var statearr_25990_26035 = state_25957__$1;
(statearr_25990_26035[(2)] = inst_25947);

(statearr_25990_26035[(1)] = (22));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (16))){
var inst_25925 = (state_25957[(2)]);
var inst_25926 = calc_state();
var inst_25899 = inst_25926;
var state_25957__$1 = (function (){var statearr_25991 = state_25957;
(statearr_25991[(7)] = inst_25899);

(statearr_25991[(18)] = inst_25925);

return statearr_25991;
})();
var statearr_25992_26036 = state_25957__$1;
(statearr_25992_26036[(2)] = null);

(statearr_25992_26036[(1)] = (5));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (10))){
var inst_25914 = (state_25957[(8)]);
var inst_25915 = (state_25957[(16)]);
var inst_25913 = (state_25957[(2)]);
var inst_25914__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25913,(0),null);
var inst_25915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25913,(1),null);
var inst_25916 = (inst_25914__$1 == null);
var inst_25917 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25915__$1,change);
var inst_25918 = (inst_25916) || (inst_25917);
var state_25957__$1 = (function (){var statearr_25993 = state_25957;
(statearr_25993[(8)] = inst_25914__$1);

(statearr_25993[(16)] = inst_25915__$1);

return statearr_25993;
})();
if(cljs.core.truth_(inst_25918)){
var statearr_25994_26037 = state_25957__$1;
(statearr_25994_26037[(1)] = (11));

} else {
var statearr_25995_26038 = state_25957__$1;
(statearr_25995_26038[(1)] = (12));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (18))){
var inst_25910 = (state_25957[(15)]);
var inst_25909 = (state_25957[(17)]);
var inst_25915 = (state_25957[(16)]);
var inst_25934 = cljs.core.empty_QMARK_(inst_25910);
var inst_25935 = (function (){var G__25996 = inst_25915;
return (inst_25909.cljs$core$IFn$_invoke$arity$1 ? inst_25909.cljs$core$IFn$_invoke$arity$1(G__25996) : inst_25909.call(null,G__25996));
})();
var inst_25936 = cljs.core.not(inst_25935);
var inst_25937 = (inst_25934) && (inst_25936);
var state_25957__$1 = state_25957;
var statearr_25997_26039 = state_25957__$1;
(statearr_25997_26039[(2)] = inst_25937);

(statearr_25997_26039[(1)] = (19));


return cljs.core.constant$keyword$83;
} else {
if((state_val_25958 === (8))){
var inst_25899 = (state_25957[(7)]);
var state_25957__$1 = state_25957;
var statearr_25998_26040 = state_25957__$1;
(statearr_25998_26040[(2)] = inst_25899);

(statearr_25998_26040[(1)] = (9));


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
});})(c__12815__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12735__auto__,c__12815__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26002[(0)] = state_machine__12736__auto__);

(statearr_26002[(1)] = (1));

return statearr_26002;
});
var state_machine__12736__auto____1 = (function (state_25957){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_25957);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26003){if((e26003 instanceof Object)){
var ex__12739__auto__ = e26003;
var statearr_26004_26041 = state_25957;
(statearr_26004_26041[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25957);

return cljs.core.constant$keyword$83;
} else {
throw e26003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26042 = state_25957;
state_25957 = G__26042;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_25957){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_25957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12817__auto__ = (function (){var statearr_26005 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26010);

return statearr_26005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26010,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26044 = {};
return obj26044;
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
return (function (){var or__3806__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__26048 = x__4450__auto__;
return goog.typeOf(G__26048);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__26052 = x__4450__auto__;
return goog.typeOf(G__26052);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26058 = x__4450__auto__;
return goog.typeOf(G__26058);
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
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__26060 = x__4450__auto__;
return goog.typeOf(G__26060);
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
var mults = (function (){var G__26199 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26199) : cljs.core.atom.call(null,G__26199));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26201 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26201) : cljs.core.deref.call(null,G__26201));
})(),topic);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3806__auto__,mults){
return (function (p1__26061_SHARP_){
if(cljs.core.truth_((function (){var G__26202 = topic;
return (p1__26061_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26061_SHARP_.cljs$core$IFn$_invoke$arity$1(G__26202) : p1__26061_SHARP_.call(null,G__26202));
})())){
return p1__26061_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26061_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__26203 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__26203) : buf_fn.call(null,G__26203));
})())));
}
});})(or__3806__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26204 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26204 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26205){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26205 = meta26205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26204.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26204.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__26207 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__26207) : self__.ensure_mult.call(null,G__26207));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26204.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__26208 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26208) : cljs.core.deref.call(null,G__26208));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26204.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__26209 = self__.mults;
var G__26210 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26209,G__26210) : cljs.core.reset_BANG_.call(null,G__26209,G__26210));
});})(mults,ensure_mult))
;

cljs.core.async.t26204.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26204.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26206){
var self__ = this;
var _26206__$1 = this;
return self__.meta26205;
});})(mults,ensure_mult))
;

cljs.core.async.t26204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26206,meta26205__$1){
var self__ = this;
var _26206__$1 = this;
return (new cljs.core.async.t26204(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26205__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26204.cljs$lang$type = true;

cljs.core.async.t26204.cljs$lang$ctorStr = "cljs.core.async/t26204";

cljs.core.async.t26204.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26204");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26204 = ((function (mults,ensure_mult){
return (function __GT_t26204(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26205){
return (new cljs.core.async.t26204(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26205));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26204(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12815__auto___26333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26333,mults,ensure_mult,p){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26333,mults,ensure_mult,p){
return (function (state_26282){
var state_val_26283 = (state_26282[(1)]);
if((state_val_26283 === (7))){
var inst_26278 = (state_26282[(2)]);
var state_26282__$1 = state_26282;
var statearr_26284_26334 = state_26282__$1;
(statearr_26284_26334[(2)] = inst_26278);

(statearr_26284_26334[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (20))){
var state_26282__$1 = state_26282;
var statearr_26285_26335 = state_26282__$1;
(statearr_26285_26335[(2)] = null);

(statearr_26285_26335[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (1))){
var state_26282__$1 = state_26282;
var statearr_26286_26336 = state_26282__$1;
(statearr_26286_26336[(2)] = null);

(statearr_26286_26336[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (24))){
var inst_26261 = (state_26282[(7)]);
var inst_26270 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26261);
var state_26282__$1 = state_26282;
var statearr_26287_26337 = state_26282__$1;
(statearr_26287_26337[(2)] = inst_26270);

(statearr_26287_26337[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (4))){
var inst_26213 = (state_26282[(8)]);
var inst_26213__$1 = (state_26282[(2)]);
var inst_26214 = (inst_26213__$1 == null);
var state_26282__$1 = (function (){var statearr_26288 = state_26282;
(statearr_26288[(8)] = inst_26213__$1);

return statearr_26288;
})();
if(cljs.core.truth_(inst_26214)){
var statearr_26289_26338 = state_26282__$1;
(statearr_26289_26338[(1)] = (5));

} else {
var statearr_26290_26339 = state_26282__$1;
(statearr_26290_26339[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (15))){
var inst_26255 = (state_26282[(2)]);
var state_26282__$1 = state_26282;
var statearr_26291_26340 = state_26282__$1;
(statearr_26291_26340[(2)] = inst_26255);

(statearr_26291_26340[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (21))){
var inst_26275 = (state_26282[(2)]);
var state_26282__$1 = (function (){var statearr_26292 = state_26282;
(statearr_26292[(9)] = inst_26275);

return statearr_26292;
})();
var statearr_26293_26341 = state_26282__$1;
(statearr_26293_26341[(2)] = null);

(statearr_26293_26341[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (13))){
var inst_26237 = (state_26282[(10)]);
var inst_26239 = cljs.core.chunked_seq_QMARK_(inst_26237);
var state_26282__$1 = state_26282;
if(inst_26239){
var statearr_26294_26342 = state_26282__$1;
(statearr_26294_26342[(1)] = (16));

} else {
var statearr_26295_26343 = state_26282__$1;
(statearr_26295_26343[(1)] = (17));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (22))){
var inst_26267 = (state_26282[(2)]);
var state_26282__$1 = state_26282;
if(cljs.core.truth_(inst_26267)){
var statearr_26296_26344 = state_26282__$1;
(statearr_26296_26344[(1)] = (23));

} else {
var statearr_26297_26345 = state_26282__$1;
(statearr_26297_26345[(1)] = (24));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (6))){
var inst_26261 = (state_26282[(7)]);
var inst_26263 = (state_26282[(11)]);
var inst_26213 = (state_26282[(8)]);
var inst_26261__$1 = (function (){var G__26298 = inst_26213;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__26298) : topic_fn.call(null,G__26298));
})();
var inst_26262 = (function (){var G__26299 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26299) : cljs.core.deref.call(null,G__26299));
})();
var inst_26263__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26262,inst_26261__$1);
var state_26282__$1 = (function (){var statearr_26300 = state_26282;
(statearr_26300[(7)] = inst_26261__$1);

(statearr_26300[(11)] = inst_26263__$1);

return statearr_26300;
})();
if(cljs.core.truth_(inst_26263__$1)){
var statearr_26301_26346 = state_26282__$1;
(statearr_26301_26346[(1)] = (19));

} else {
var statearr_26302_26347 = state_26282__$1;
(statearr_26302_26347[(1)] = (20));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (25))){
var inst_26272 = (state_26282[(2)]);
var state_26282__$1 = state_26282;
var statearr_26303_26348 = state_26282__$1;
(statearr_26303_26348[(2)] = inst_26272);

(statearr_26303_26348[(1)] = (21));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (17))){
var inst_26237 = (state_26282[(10)]);
var inst_26246 = cljs.core.first(inst_26237);
var inst_26247 = cljs.core.async.muxch_STAR_(inst_26246);
var inst_26248 = cljs.core.async.close_BANG_(inst_26247);
var inst_26249 = cljs.core.next(inst_26237);
var inst_26223 = inst_26249;
var inst_26224 = null;
var inst_26225 = (0);
var inst_26226 = (0);
var state_26282__$1 = (function (){var statearr_26304 = state_26282;
(statearr_26304[(12)] = inst_26248);

(statearr_26304[(13)] = inst_26223);

(statearr_26304[(14)] = inst_26225);

(statearr_26304[(15)] = inst_26224);

(statearr_26304[(16)] = inst_26226);

return statearr_26304;
})();
var statearr_26305_26349 = state_26282__$1;
(statearr_26305_26349[(2)] = null);

(statearr_26305_26349[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (3))){
var inst_26280 = (state_26282[(2)]);
var state_26282__$1 = state_26282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26282__$1,inst_26280);
} else {
if((state_val_26283 === (12))){
var inst_26257 = (state_26282[(2)]);
var state_26282__$1 = state_26282;
var statearr_26306_26350 = state_26282__$1;
(statearr_26306_26350[(2)] = inst_26257);

(statearr_26306_26350[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (2))){
var state_26282__$1 = state_26282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26282__$1,(4),ch);
} else {
if((state_val_26283 === (23))){
var state_26282__$1 = state_26282;
var statearr_26307_26351 = state_26282__$1;
(statearr_26307_26351[(2)] = null);

(statearr_26307_26351[(1)] = (25));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (19))){
var inst_26263 = (state_26282[(11)]);
var inst_26213 = (state_26282[(8)]);
var inst_26265 = cljs.core.async.muxch_STAR_(inst_26263);
var state_26282__$1 = state_26282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26282__$1,(22),inst_26265,inst_26213);
} else {
if((state_val_26283 === (11))){
var inst_26223 = (state_26282[(13)]);
var inst_26237 = (state_26282[(10)]);
var inst_26237__$1 = cljs.core.seq(inst_26223);
var state_26282__$1 = (function (){var statearr_26308 = state_26282;
(statearr_26308[(10)] = inst_26237__$1);

return statearr_26308;
})();
if(inst_26237__$1){
var statearr_26309_26352 = state_26282__$1;
(statearr_26309_26352[(1)] = (13));

} else {
var statearr_26310_26353 = state_26282__$1;
(statearr_26310_26353[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (9))){
var inst_26259 = (state_26282[(2)]);
var state_26282__$1 = state_26282;
var statearr_26311_26354 = state_26282__$1;
(statearr_26311_26354[(2)] = inst_26259);

(statearr_26311_26354[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (5))){
var inst_26220 = (function (){var G__26312 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26312) : cljs.core.deref.call(null,G__26312));
})();
var inst_26221 = cljs.core.vals(inst_26220);
var inst_26222 = cljs.core.seq(inst_26221);
var inst_26223 = inst_26222;
var inst_26224 = null;
var inst_26225 = (0);
var inst_26226 = (0);
var state_26282__$1 = (function (){var statearr_26313 = state_26282;
(statearr_26313[(13)] = inst_26223);

(statearr_26313[(14)] = inst_26225);

(statearr_26313[(15)] = inst_26224);

(statearr_26313[(16)] = inst_26226);

return statearr_26313;
})();
var statearr_26314_26355 = state_26282__$1;
(statearr_26314_26355[(2)] = null);

(statearr_26314_26355[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (14))){
var state_26282__$1 = state_26282;
var statearr_26318_26356 = state_26282__$1;
(statearr_26318_26356[(2)] = null);

(statearr_26318_26356[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (16))){
var inst_26237 = (state_26282[(10)]);
var inst_26241 = cljs.core.chunk_first(inst_26237);
var inst_26242 = cljs.core.chunk_rest(inst_26237);
var inst_26243 = cljs.core.count(inst_26241);
var inst_26223 = inst_26242;
var inst_26224 = inst_26241;
var inst_26225 = inst_26243;
var inst_26226 = (0);
var state_26282__$1 = (function (){var statearr_26319 = state_26282;
(statearr_26319[(13)] = inst_26223);

(statearr_26319[(14)] = inst_26225);

(statearr_26319[(15)] = inst_26224);

(statearr_26319[(16)] = inst_26226);

return statearr_26319;
})();
var statearr_26320_26357 = state_26282__$1;
(statearr_26320_26357[(2)] = null);

(statearr_26320_26357[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (10))){
var inst_26223 = (state_26282[(13)]);
var inst_26225 = (state_26282[(14)]);
var inst_26224 = (state_26282[(15)]);
var inst_26226 = (state_26282[(16)]);
var inst_26231 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26224,inst_26226);
var inst_26232 = cljs.core.async.muxch_STAR_(inst_26231);
var inst_26233 = cljs.core.async.close_BANG_(inst_26232);
var inst_26234 = (inst_26226 + (1));
var tmp26315 = inst_26223;
var tmp26316 = inst_26225;
var tmp26317 = inst_26224;
var inst_26223__$1 = tmp26315;
var inst_26224__$1 = tmp26317;
var inst_26225__$1 = tmp26316;
var inst_26226__$1 = inst_26234;
var state_26282__$1 = (function (){var statearr_26321 = state_26282;
(statearr_26321[(13)] = inst_26223__$1);

(statearr_26321[(14)] = inst_26225__$1);

(statearr_26321[(15)] = inst_26224__$1);

(statearr_26321[(16)] = inst_26226__$1);

(statearr_26321[(17)] = inst_26233);

return statearr_26321;
})();
var statearr_26322_26358 = state_26282__$1;
(statearr_26322_26358[(2)] = null);

(statearr_26322_26358[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (18))){
var inst_26252 = (state_26282[(2)]);
var state_26282__$1 = state_26282;
var statearr_26323_26359 = state_26282__$1;
(statearr_26323_26359[(2)] = inst_26252);

(statearr_26323_26359[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26283 === (8))){
var inst_26225 = (state_26282[(14)]);
var inst_26226 = (state_26282[(16)]);
var inst_26228 = (inst_26226 < inst_26225);
var inst_26229 = inst_26228;
var state_26282__$1 = state_26282;
if(cljs.core.truth_(inst_26229)){
var statearr_26324_26360 = state_26282__$1;
(statearr_26324_26360[(1)] = (10));

} else {
var statearr_26325_26361 = state_26282__$1;
(statearr_26325_26361[(1)] = (11));

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
});})(c__12815__auto___26333,mults,ensure_mult,p))
;
return ((function (switch__12735__auto__,c__12815__auto___26333,mults,ensure_mult,p){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26329[(0)] = state_machine__12736__auto__);

(statearr_26329[(1)] = (1));

return statearr_26329;
});
var state_machine__12736__auto____1 = (function (state_26282){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26282);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26330){if((e26330 instanceof Object)){
var ex__12739__auto__ = e26330;
var statearr_26331_26362 = state_26282;
(statearr_26331_26362[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26282);

return cljs.core.constant$keyword$83;
} else {
throw e26330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26363 = state_26282;
state_26282 = G__26363;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26282){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26333,mults,ensure_mult,p))
})();
var state__12817__auto__ = (function (){var statearr_26332 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26333);

return statearr_26332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26333,mults,ensure_mult,p))
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
var dctr = (function (){var G__26444 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26444) : cljs.core.atom.call(null,G__26444));
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
var c__12815__auto___26517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26517,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26517,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26483){
var state_val_26484 = (state_26483[(1)]);
if((state_val_26484 === (7))){
var state_26483__$1 = state_26483;
var statearr_26485_26518 = state_26483__$1;
(statearr_26485_26518[(2)] = null);

(statearr_26485_26518[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (1))){
var state_26483__$1 = state_26483;
var statearr_26486_26519 = state_26483__$1;
(statearr_26486_26519[(2)] = null);

(statearr_26486_26519[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (4))){
var inst_26447 = (state_26483[(7)]);
var inst_26449 = (inst_26447 < cnt);
var state_26483__$1 = state_26483;
if(cljs.core.truth_(inst_26449)){
var statearr_26487_26520 = state_26483__$1;
(statearr_26487_26520[(1)] = (6));

} else {
var statearr_26488_26521 = state_26483__$1;
(statearr_26488_26521[(1)] = (7));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (15))){
var inst_26479 = (state_26483[(2)]);
var state_26483__$1 = state_26483;
var statearr_26489_26522 = state_26483__$1;
(statearr_26489_26522[(2)] = inst_26479);

(statearr_26489_26522[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (13))){
var inst_26472 = cljs.core.async.close_BANG_(out);
var state_26483__$1 = state_26483;
var statearr_26490_26523 = state_26483__$1;
(statearr_26490_26523[(2)] = inst_26472);

(statearr_26490_26523[(1)] = (15));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (6))){
var state_26483__$1 = state_26483;
var statearr_26491_26524 = state_26483__$1;
(statearr_26491_26524[(2)] = null);

(statearr_26491_26524[(1)] = (11));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (3))){
var inst_26481 = (state_26483[(2)]);
var state_26483__$1 = state_26483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26483__$1,inst_26481);
} else {
if((state_val_26484 === (12))){
var inst_26469 = (state_26483[(8)]);
var inst_26469__$1 = (state_26483[(2)]);
var inst_26470 = cljs.core.some(cljs.core.nil_QMARK_,inst_26469__$1);
var state_26483__$1 = (function (){var statearr_26492 = state_26483;
(statearr_26492[(8)] = inst_26469__$1);

return statearr_26492;
})();
if(cljs.core.truth_(inst_26470)){
var statearr_26493_26525 = state_26483__$1;
(statearr_26493_26525[(1)] = (13));

} else {
var statearr_26494_26526 = state_26483__$1;
(statearr_26494_26526[(1)] = (14));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (2))){
var inst_26446 = (function (){var G__26495 = dctr;
var G__26496 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26495,G__26496) : cljs.core.reset_BANG_.call(null,G__26495,G__26496));
})();
var inst_26447 = (0);
var state_26483__$1 = (function (){var statearr_26497 = state_26483;
(statearr_26497[(7)] = inst_26447);

(statearr_26497[(9)] = inst_26446);

return statearr_26497;
})();
var statearr_26498_26527 = state_26483__$1;
(statearr_26498_26527[(2)] = null);

(statearr_26498_26527[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (11))){
var inst_26447 = (state_26483[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26483,(10),Object,null,(9));
var inst_26456 = (function (){var G__26499 = inst_26447;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__26499) : chs__$1.call(null,G__26499));
})();
var inst_26457 = (function (){var G__26500 = inst_26447;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__26500) : done.call(null,G__26500));
})();
var inst_26458 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26456,inst_26457);
var state_26483__$1 = state_26483;
var statearr_26501_26528 = state_26483__$1;
(statearr_26501_26528[(2)] = inst_26458);


cljs.core.async.impl.ioc_helpers.process_exception(state_26483__$1);

return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (9))){
var inst_26447 = (state_26483[(7)]);
var inst_26460 = (state_26483[(2)]);
var inst_26461 = (inst_26447 + (1));
var inst_26447__$1 = inst_26461;
var state_26483__$1 = (function (){var statearr_26502 = state_26483;
(statearr_26502[(10)] = inst_26460);

(statearr_26502[(7)] = inst_26447__$1);

return statearr_26502;
})();
var statearr_26503_26529 = state_26483__$1;
(statearr_26503_26529[(2)] = null);

(statearr_26503_26529[(1)] = (4));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (5))){
var inst_26467 = (state_26483[(2)]);
var state_26483__$1 = (function (){var statearr_26504 = state_26483;
(statearr_26504[(11)] = inst_26467);

return statearr_26504;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26483__$1,(12),dchan);
} else {
if((state_val_26484 === (14))){
var inst_26469 = (state_26483[(8)]);
var inst_26474 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26469);
var state_26483__$1 = state_26483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26483__$1,(16),out,inst_26474);
} else {
if((state_val_26484 === (16))){
var inst_26476 = (state_26483[(2)]);
var state_26483__$1 = (function (){var statearr_26505 = state_26483;
(statearr_26505[(12)] = inst_26476);

return statearr_26505;
})();
var statearr_26506_26530 = state_26483__$1;
(statearr_26506_26530[(2)] = null);

(statearr_26506_26530[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (10))){
var inst_26451 = (state_26483[(2)]);
var inst_26452 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_26483__$1 = (function (){var statearr_26507 = state_26483;
(statearr_26507[(13)] = inst_26451);

return statearr_26507;
})();
var statearr_26508_26531 = state_26483__$1;
(statearr_26508_26531[(2)] = inst_26452);


cljs.core.async.impl.ioc_helpers.process_exception(state_26483__$1);

return cljs.core.constant$keyword$83;
} else {
if((state_val_26484 === (8))){
var inst_26465 = (state_26483[(2)]);
var state_26483__$1 = state_26483;
var statearr_26509_26532 = state_26483__$1;
(statearr_26509_26532[(2)] = inst_26465);

(statearr_26509_26532[(1)] = (5));


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
});})(c__12815__auto___26517,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12735__auto__,c__12815__auto___26517,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26513[(0)] = state_machine__12736__auto__);

(statearr_26513[(1)] = (1));

return statearr_26513;
});
var state_machine__12736__auto____1 = (function (state_26483){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26483);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26514){if((e26514 instanceof Object)){
var ex__12739__auto__ = e26514;
var statearr_26515_26533 = state_26483;
(statearr_26515_26533[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26483);

return cljs.core.constant$keyword$83;
} else {
throw e26514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26534 = state_26483;
state_26483 = G__26534;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26483){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26517,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12817__auto__ = (function (){var statearr_26516 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26517);

return statearr_26516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26517,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__12815__auto___26644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26644,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26644,out){
return (function (state_26620){
var state_val_26621 = (state_26620[(1)]);
if((state_val_26621 === (7))){
var inst_26600 = (state_26620[(7)]);
var inst_26599 = (state_26620[(8)]);
var inst_26599__$1 = (state_26620[(2)]);
var inst_26600__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26599__$1,(0),null);
var inst_26601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26599__$1,(1),null);
var inst_26602 = (inst_26600__$1 == null);
var state_26620__$1 = (function (){var statearr_26622 = state_26620;
(statearr_26622[(7)] = inst_26600__$1);

(statearr_26622[(9)] = inst_26601);

(statearr_26622[(8)] = inst_26599__$1);

return statearr_26622;
})();
if(cljs.core.truth_(inst_26602)){
var statearr_26623_26645 = state_26620__$1;
(statearr_26623_26645[(1)] = (8));

} else {
var statearr_26624_26646 = state_26620__$1;
(statearr_26624_26646[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26621 === (1))){
var inst_26591 = cljs.core.vec(chs);
var inst_26592 = inst_26591;
var state_26620__$1 = (function (){var statearr_26625 = state_26620;
(statearr_26625[(10)] = inst_26592);

return statearr_26625;
})();
var statearr_26626_26647 = state_26620__$1;
(statearr_26626_26647[(2)] = null);

(statearr_26626_26647[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26621 === (4))){
var inst_26592 = (state_26620[(10)]);
var state_26620__$1 = state_26620;
return cljs.core.async.ioc_alts_BANG_(state_26620__$1,(7),inst_26592);
} else {
if((state_val_26621 === (6))){
var inst_26616 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26627_26648 = state_26620__$1;
(statearr_26627_26648[(2)] = inst_26616);

(statearr_26627_26648[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26621 === (3))){
var inst_26618 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26620__$1,inst_26618);
} else {
if((state_val_26621 === (2))){
var inst_26592 = (state_26620[(10)]);
var inst_26594 = cljs.core.count(inst_26592);
var inst_26595 = (inst_26594 > (0));
var state_26620__$1 = state_26620;
if(cljs.core.truth_(inst_26595)){
var statearr_26629_26649 = state_26620__$1;
(statearr_26629_26649[(1)] = (4));

} else {
var statearr_26630_26650 = state_26620__$1;
(statearr_26630_26650[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26621 === (11))){
var inst_26592 = (state_26620[(10)]);
var inst_26609 = (state_26620[(2)]);
var tmp26628 = inst_26592;
var inst_26592__$1 = tmp26628;
var state_26620__$1 = (function (){var statearr_26631 = state_26620;
(statearr_26631[(10)] = inst_26592__$1);

(statearr_26631[(11)] = inst_26609);

return statearr_26631;
})();
var statearr_26632_26651 = state_26620__$1;
(statearr_26632_26651[(2)] = null);

(statearr_26632_26651[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26621 === (9))){
var inst_26600 = (state_26620[(7)]);
var state_26620__$1 = state_26620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26620__$1,(11),out,inst_26600);
} else {
if((state_val_26621 === (5))){
var inst_26614 = cljs.core.async.close_BANG_(out);
var state_26620__$1 = state_26620;
var statearr_26633_26652 = state_26620__$1;
(statearr_26633_26652[(2)] = inst_26614);

(statearr_26633_26652[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26621 === (10))){
var inst_26612 = (state_26620[(2)]);
var state_26620__$1 = state_26620;
var statearr_26634_26653 = state_26620__$1;
(statearr_26634_26653[(2)] = inst_26612);

(statearr_26634_26653[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26621 === (8))){
var inst_26592 = (state_26620[(10)]);
var inst_26600 = (state_26620[(7)]);
var inst_26601 = (state_26620[(9)]);
var inst_26599 = (state_26620[(8)]);
var inst_26604 = (function (){var c = inst_26601;
var v = inst_26600;
var vec__26597 = inst_26599;
var cs = inst_26592;
return ((function (c,v,vec__26597,cs,inst_26592,inst_26600,inst_26601,inst_26599,state_val_26621,c__12815__auto___26644,out){
return (function (p1__26535_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26535_SHARP_);
});
;})(c,v,vec__26597,cs,inst_26592,inst_26600,inst_26601,inst_26599,state_val_26621,c__12815__auto___26644,out))
})();
var inst_26605 = cljs.core.filterv(inst_26604,inst_26592);
var inst_26592__$1 = inst_26605;
var state_26620__$1 = (function (){var statearr_26635 = state_26620;
(statearr_26635[(10)] = inst_26592__$1);

return statearr_26635;
})();
var statearr_26636_26654 = state_26620__$1;
(statearr_26636_26654[(2)] = null);

(statearr_26636_26654[(1)] = (2));


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
});})(c__12815__auto___26644,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26644,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26640[(0)] = state_machine__12736__auto__);

(statearr_26640[(1)] = (1));

return statearr_26640;
});
var state_machine__12736__auto____1 = (function (state_26620){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26620);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26641){if((e26641 instanceof Object)){
var ex__12739__auto__ = e26641;
var statearr_26642_26655 = state_26620;
(statearr_26642_26655[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26620);

return cljs.core.constant$keyword$83;
} else {
throw e26641;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26656 = state_26620;
state_26620 = G__26656;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26620){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26644,out))
})();
var state__12817__auto__ = (function (){var statearr_26643 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26644);

return statearr_26643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26644,out))
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
var c__12815__auto___26752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26752,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26752,out){
return (function (state_26729){
var state_val_26730 = (state_26729[(1)]);
if((state_val_26730 === (7))){
var inst_26711 = (state_26729[(7)]);
var inst_26711__$1 = (state_26729[(2)]);
var inst_26712 = (inst_26711__$1 == null);
var inst_26713 = cljs.core.not(inst_26712);
var state_26729__$1 = (function (){var statearr_26731 = state_26729;
(statearr_26731[(7)] = inst_26711__$1);

return statearr_26731;
})();
if(inst_26713){
var statearr_26732_26753 = state_26729__$1;
(statearr_26732_26753[(1)] = (8));

} else {
var statearr_26733_26754 = state_26729__$1;
(statearr_26733_26754[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26730 === (1))){
var inst_26706 = (0);
var state_26729__$1 = (function (){var statearr_26734 = state_26729;
(statearr_26734[(8)] = inst_26706);

return statearr_26734;
})();
var statearr_26735_26755 = state_26729__$1;
(statearr_26735_26755[(2)] = null);

(statearr_26735_26755[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26730 === (4))){
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26729__$1,(7),ch);
} else {
if((state_val_26730 === (6))){
var inst_26724 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26736_26756 = state_26729__$1;
(statearr_26736_26756[(2)] = inst_26724);

(statearr_26736_26756[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26730 === (3))){
var inst_26726 = (state_26729[(2)]);
var inst_26727 = cljs.core.async.close_BANG_(out);
var state_26729__$1 = (function (){var statearr_26737 = state_26729;
(statearr_26737[(9)] = inst_26726);

return statearr_26737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26729__$1,inst_26727);
} else {
if((state_val_26730 === (2))){
var inst_26706 = (state_26729[(8)]);
var inst_26708 = (inst_26706 < n);
var state_26729__$1 = state_26729;
if(cljs.core.truth_(inst_26708)){
var statearr_26738_26757 = state_26729__$1;
(statearr_26738_26757[(1)] = (4));

} else {
var statearr_26739_26758 = state_26729__$1;
(statearr_26739_26758[(1)] = (5));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26730 === (11))){
var inst_26706 = (state_26729[(8)]);
var inst_26716 = (state_26729[(2)]);
var inst_26717 = (inst_26706 + (1));
var inst_26706__$1 = inst_26717;
var state_26729__$1 = (function (){var statearr_26740 = state_26729;
(statearr_26740[(10)] = inst_26716);

(statearr_26740[(8)] = inst_26706__$1);

return statearr_26740;
})();
var statearr_26741_26759 = state_26729__$1;
(statearr_26741_26759[(2)] = null);

(statearr_26741_26759[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26730 === (9))){
var state_26729__$1 = state_26729;
var statearr_26742_26760 = state_26729__$1;
(statearr_26742_26760[(2)] = null);

(statearr_26742_26760[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26730 === (5))){
var state_26729__$1 = state_26729;
var statearr_26743_26761 = state_26729__$1;
(statearr_26743_26761[(2)] = null);

(statearr_26743_26761[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26730 === (10))){
var inst_26721 = (state_26729[(2)]);
var state_26729__$1 = state_26729;
var statearr_26744_26762 = state_26729__$1;
(statearr_26744_26762[(2)] = inst_26721);

(statearr_26744_26762[(1)] = (6));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26730 === (8))){
var inst_26711 = (state_26729[(7)]);
var state_26729__$1 = state_26729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26729__$1,(11),out,inst_26711);
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
});})(c__12815__auto___26752,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26752,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26748[(0)] = state_machine__12736__auto__);

(statearr_26748[(1)] = (1));

return statearr_26748;
});
var state_machine__12736__auto____1 = (function (state_26729){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26729);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26749){if((e26749 instanceof Object)){
var ex__12739__auto__ = e26749;
var statearr_26750_26763 = state_26729;
(statearr_26750_26763[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26729);

return cljs.core.constant$keyword$83;
} else {
throw e26749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26764 = state_26729;
state_26729 = G__26764;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26729){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26752,out))
})();
var state__12817__auto__ = (function (){var statearr_26751 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26752);

return statearr_26751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26752,out))
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
if(typeof cljs.core.async.t26777 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26777 = (function (ch,f,map_LT_,meta26778){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26778 = meta26778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26777.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t26777.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t26780 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26780 = (function (fn1,_,meta26778,map_LT_,f,ch,meta26781){
this.fn1 = fn1;
this._ = _;
this.meta26778 = meta26778;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26781 = meta26781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26780.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t26780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26765_SHARP_){
var G__26783 = (((p1__26765_SHARP_ == null))?null:(function (){var G__26784 = p1__26765_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26784) : self__.f.call(null,G__26784));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__26783) : f1.call(null,G__26783));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26782){
var self__ = this;
var _26782__$1 = this;
return self__.meta26781;
});})(___$1))
;

cljs.core.async.t26780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26782,meta26781__$1){
var self__ = this;
var _26782__$1 = this;
return (new cljs.core.async.t26780(self__.fn1,self__._,self__.meta26778,self__.map_LT_,self__.f,self__.ch,meta26781__$1));
});})(___$1))
;

cljs.core.async.t26780.cljs$lang$type = true;

cljs.core.async.t26780.cljs$lang$ctorStr = "cljs.core.async/t26780";

cljs.core.async.t26780.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26780");
});})(___$1))
;

cljs.core.async.__GT_t26780 = ((function (___$1){
return (function __GT_t26780(fn1__$1,___$2,meta26778__$1,map_LT___$1,f__$1,ch__$1,meta26781){
return (new cljs.core.async.t26780(fn1__$1,___$2,meta26778__$1,map_LT___$1,f__$1,ch__$1,meta26781));
});})(___$1))
;

}

return (new cljs.core.async.t26780(fn1,___$1,self__.meta26778,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3794__auto__ = ret;
if(cljs.core.truth_(and__3794__auto__)){
return !(((function (){var G__26785 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26785) : cljs.core.deref.call(null,G__26785));
})() == null));
} else {
return and__3794__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__26786 = (function (){var G__26787 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26787) : cljs.core.deref.call(null,G__26787));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26786) : self__.f.call(null,G__26786));
})());
} else {
return ret;
}
});

cljs.core.async.t26777.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26777.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26779){
var self__ = this;
var _26779__$1 = this;
return self__.meta26778;
});

cljs.core.async.t26777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26779,meta26778__$1){
var self__ = this;
var _26779__$1 = this;
return (new cljs.core.async.t26777(self__.ch,self__.f,self__.map_LT_,meta26778__$1));
});

cljs.core.async.t26777.cljs$lang$type = true;

cljs.core.async.t26777.cljs$lang$ctorStr = "cljs.core.async/t26777";

cljs.core.async.t26777.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26777");
});

cljs.core.async.__GT_t26777 = (function __GT_t26777(ch__$1,f__$1,map_LT___$1,meta26778){
return (new cljs.core.async.t26777(ch__$1,f__$1,map_LT___$1,meta26778));
});

}

return (new cljs.core.async.t26777(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26792 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26792 = (function (ch,f,map_GT_,meta26793){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26793 = meta26793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__26795 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__26795) : self__.f.call(null,G__26795));
})(),fn1);
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

cljs.core.async.t26792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26794){
var self__ = this;
var _26794__$1 = this;
return self__.meta26793;
});

cljs.core.async.t26792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26794,meta26793__$1){
var self__ = this;
var _26794__$1 = this;
return (new cljs.core.async.t26792(self__.ch,self__.f,self__.map_GT_,meta26793__$1));
});

cljs.core.async.t26792.cljs$lang$type = true;

cljs.core.async.t26792.cljs$lang$ctorStr = "cljs.core.async/t26792";

cljs.core.async.t26792.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26792");
});

cljs.core.async.__GT_t26792 = (function __GT_t26792(ch__$1,f__$1,map_GT___$1,meta26793){
return (new cljs.core.async.t26792(ch__$1,f__$1,map_GT___$1,meta26793));
});

}

return (new cljs.core.async.t26792(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26800 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26800 = (function (ch,p,filter_GT_,meta26801){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26801 = meta26801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__26803 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__26803) : self__.p.call(null,G__26803));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t26800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t26800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26802){
var self__ = this;
var _26802__$1 = this;
return self__.meta26801;
});

cljs.core.async.t26800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26802,meta26801__$1){
var self__ = this;
var _26802__$1 = this;
return (new cljs.core.async.t26800(self__.ch,self__.p,self__.filter_GT_,meta26801__$1));
});

cljs.core.async.t26800.cljs$lang$type = true;

cljs.core.async.t26800.cljs$lang$ctorStr = "cljs.core.async/t26800";

cljs.core.async.t26800.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async/t26800");
});

cljs.core.async.__GT_t26800 = (function __GT_t26800(ch__$1,p__$1,filter_GT___$1,meta26801){
return (new cljs.core.async.t26800(ch__$1,p__$1,filter_GT___$1,meta26801));
});

}

return (new cljs.core.async.t26800(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12815__auto___26891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___26891,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___26891,out){
return (function (state_26869){
var state_val_26870 = (state_26869[(1)]);
if((state_val_26870 === (7))){
var inst_26865 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26871_26892 = state_26869__$1;
(statearr_26871_26892[(2)] = inst_26865);

(statearr_26871_26892[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26870 === (1))){
var state_26869__$1 = state_26869;
var statearr_26872_26893 = state_26869__$1;
(statearr_26872_26893[(2)] = null);

(statearr_26872_26893[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26870 === (4))){
var inst_26851 = (state_26869[(7)]);
var inst_26851__$1 = (state_26869[(2)]);
var inst_26852 = (inst_26851__$1 == null);
var state_26869__$1 = (function (){var statearr_26873 = state_26869;
(statearr_26873[(7)] = inst_26851__$1);

return statearr_26873;
})();
if(cljs.core.truth_(inst_26852)){
var statearr_26874_26894 = state_26869__$1;
(statearr_26874_26894[(1)] = (5));

} else {
var statearr_26875_26895 = state_26869__$1;
(statearr_26875_26895[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26870 === (6))){
var inst_26851 = (state_26869[(7)]);
var inst_26856 = (function (){var G__26876 = inst_26851;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__26876) : p.call(null,G__26876));
})();
var state_26869__$1 = state_26869;
if(cljs.core.truth_(inst_26856)){
var statearr_26877_26896 = state_26869__$1;
(statearr_26877_26896[(1)] = (8));

} else {
var statearr_26878_26897 = state_26869__$1;
(statearr_26878_26897[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_26870 === (3))){
var inst_26867 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26869__$1,inst_26867);
} else {
if((state_val_26870 === (2))){
var state_26869__$1 = state_26869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26869__$1,(4),ch);
} else {
if((state_val_26870 === (11))){
var inst_26859 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26879_26898 = state_26869__$1;
(statearr_26879_26898[(2)] = inst_26859);

(statearr_26879_26898[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26870 === (9))){
var state_26869__$1 = state_26869;
var statearr_26880_26899 = state_26869__$1;
(statearr_26880_26899[(2)] = null);

(statearr_26880_26899[(1)] = (10));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26870 === (5))){
var inst_26854 = cljs.core.async.close_BANG_(out);
var state_26869__$1 = state_26869;
var statearr_26881_26900 = state_26869__$1;
(statearr_26881_26900[(2)] = inst_26854);

(statearr_26881_26900[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26870 === (10))){
var inst_26862 = (state_26869[(2)]);
var state_26869__$1 = (function (){var statearr_26882 = state_26869;
(statearr_26882[(8)] = inst_26862);

return statearr_26882;
})();
var statearr_26883_26901 = state_26869__$1;
(statearr_26883_26901[(2)] = null);

(statearr_26883_26901[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_26870 === (8))){
var inst_26851 = (state_26869[(7)]);
var state_26869__$1 = state_26869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26869__$1,(11),out,inst_26851);
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
});})(c__12815__auto___26891,out))
;
return ((function (switch__12735__auto__,c__12815__auto___26891,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_26887 = [null,null,null,null,null,null,null,null,null];
(statearr_26887[(0)] = state_machine__12736__auto__);

(statearr_26887[(1)] = (1));

return statearr_26887;
});
var state_machine__12736__auto____1 = (function (state_26869){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_26869);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e26888){if((e26888 instanceof Object)){
var ex__12739__auto__ = e26888;
var statearr_26889_26902 = state_26869;
(statearr_26889_26902[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26869);

return cljs.core.constant$keyword$83;
} else {
throw e26888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__26903 = state_26869;
state_26869 = G__26903;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_26869){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_26869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___26891,out))
})();
var state__12817__auto__ = (function (){var statearr_26890 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_26890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___26891);

return statearr_26890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___26891,out))
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
return (function (state_27073){
var state_val_27074 = (state_27073[(1)]);
if((state_val_27074 === (7))){
var inst_27069 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27075_27117 = state_27073__$1;
(statearr_27075_27117[(2)] = inst_27069);

(statearr_27075_27117[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (20))){
var inst_27039 = (state_27073[(7)]);
var inst_27050 = (state_27073[(2)]);
var inst_27051 = cljs.core.next(inst_27039);
var inst_27025 = inst_27051;
var inst_27026 = null;
var inst_27027 = (0);
var inst_27028 = (0);
var state_27073__$1 = (function (){var statearr_27076 = state_27073;
(statearr_27076[(8)] = inst_27026);

(statearr_27076[(9)] = inst_27050);

(statearr_27076[(10)] = inst_27028);

(statearr_27076[(11)] = inst_27025);

(statearr_27076[(12)] = inst_27027);

return statearr_27076;
})();
var statearr_27077_27118 = state_27073__$1;
(statearr_27077_27118[(2)] = null);

(statearr_27077_27118[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (1))){
var state_27073__$1 = state_27073;
var statearr_27078_27119 = state_27073__$1;
(statearr_27078_27119[(2)] = null);

(statearr_27078_27119[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (4))){
var inst_27014 = (state_27073[(13)]);
var inst_27014__$1 = (state_27073[(2)]);
var inst_27015 = (inst_27014__$1 == null);
var state_27073__$1 = (function (){var statearr_27079 = state_27073;
(statearr_27079[(13)] = inst_27014__$1);

return statearr_27079;
})();
if(cljs.core.truth_(inst_27015)){
var statearr_27080_27120 = state_27073__$1;
(statearr_27080_27120[(1)] = (5));

} else {
var statearr_27081_27121 = state_27073__$1;
(statearr_27081_27121[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (15))){
var state_27073__$1 = state_27073;
var statearr_27085_27122 = state_27073__$1;
(statearr_27085_27122[(2)] = null);

(statearr_27085_27122[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (21))){
var state_27073__$1 = state_27073;
var statearr_27086_27123 = state_27073__$1;
(statearr_27086_27123[(2)] = null);

(statearr_27086_27123[(1)] = (23));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (13))){
var inst_27026 = (state_27073[(8)]);
var inst_27028 = (state_27073[(10)]);
var inst_27025 = (state_27073[(11)]);
var inst_27027 = (state_27073[(12)]);
var inst_27035 = (state_27073[(2)]);
var inst_27036 = (inst_27028 + (1));
var tmp27082 = inst_27026;
var tmp27083 = inst_27025;
var tmp27084 = inst_27027;
var inst_27025__$1 = tmp27083;
var inst_27026__$1 = tmp27082;
var inst_27027__$1 = tmp27084;
var inst_27028__$1 = inst_27036;
var state_27073__$1 = (function (){var statearr_27087 = state_27073;
(statearr_27087[(8)] = inst_27026__$1);

(statearr_27087[(14)] = inst_27035);

(statearr_27087[(10)] = inst_27028__$1);

(statearr_27087[(11)] = inst_27025__$1);

(statearr_27087[(12)] = inst_27027__$1);

return statearr_27087;
})();
var statearr_27088_27124 = state_27073__$1;
(statearr_27088_27124[(2)] = null);

(statearr_27088_27124[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (22))){
var state_27073__$1 = state_27073;
var statearr_27089_27125 = state_27073__$1;
(statearr_27089_27125[(2)] = null);

(statearr_27089_27125[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (6))){
var inst_27014 = (state_27073[(13)]);
var inst_27023 = (function (){var G__27090 = inst_27014;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27090) : f.call(null,G__27090));
})();
var inst_27024 = cljs.core.seq(inst_27023);
var inst_27025 = inst_27024;
var inst_27026 = null;
var inst_27027 = (0);
var inst_27028 = (0);
var state_27073__$1 = (function (){var statearr_27091 = state_27073;
(statearr_27091[(8)] = inst_27026);

(statearr_27091[(10)] = inst_27028);

(statearr_27091[(11)] = inst_27025);

(statearr_27091[(12)] = inst_27027);

return statearr_27091;
})();
var statearr_27092_27126 = state_27073__$1;
(statearr_27092_27126[(2)] = null);

(statearr_27092_27126[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (17))){
var inst_27039 = (state_27073[(7)]);
var inst_27043 = cljs.core.chunk_first(inst_27039);
var inst_27044 = cljs.core.chunk_rest(inst_27039);
var inst_27045 = cljs.core.count(inst_27043);
var inst_27025 = inst_27044;
var inst_27026 = inst_27043;
var inst_27027 = inst_27045;
var inst_27028 = (0);
var state_27073__$1 = (function (){var statearr_27093 = state_27073;
(statearr_27093[(8)] = inst_27026);

(statearr_27093[(10)] = inst_27028);

(statearr_27093[(11)] = inst_27025);

(statearr_27093[(12)] = inst_27027);

return statearr_27093;
})();
var statearr_27094_27127 = state_27073__$1;
(statearr_27094_27127[(2)] = null);

(statearr_27094_27127[(1)] = (8));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (3))){
var inst_27071 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27073__$1,inst_27071);
} else {
if((state_val_27074 === (12))){
var inst_27059 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27095_27128 = state_27073__$1;
(statearr_27095_27128[(2)] = inst_27059);

(statearr_27095_27128[(1)] = (9));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (2))){
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27073__$1,(4),in$);
} else {
if((state_val_27074 === (23))){
var inst_27067 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27096_27129 = state_27073__$1;
(statearr_27096_27129[(2)] = inst_27067);

(statearr_27096_27129[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (19))){
var inst_27054 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27097_27130 = state_27073__$1;
(statearr_27097_27130[(2)] = inst_27054);

(statearr_27097_27130[(1)] = (16));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (11))){
var inst_27025 = (state_27073[(11)]);
var inst_27039 = (state_27073[(7)]);
var inst_27039__$1 = cljs.core.seq(inst_27025);
var state_27073__$1 = (function (){var statearr_27098 = state_27073;
(statearr_27098[(7)] = inst_27039__$1);

return statearr_27098;
})();
if(inst_27039__$1){
var statearr_27099_27131 = state_27073__$1;
(statearr_27099_27131[(1)] = (14));

} else {
var statearr_27100_27132 = state_27073__$1;
(statearr_27100_27132[(1)] = (15));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (9))){
var inst_27061 = (state_27073[(2)]);
var inst_27062 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27073__$1 = (function (){var statearr_27101 = state_27073;
(statearr_27101[(15)] = inst_27061);

return statearr_27101;
})();
if(cljs.core.truth_(inst_27062)){
var statearr_27102_27133 = state_27073__$1;
(statearr_27102_27133[(1)] = (21));

} else {
var statearr_27103_27134 = state_27073__$1;
(statearr_27103_27134[(1)] = (22));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (5))){
var inst_27017 = cljs.core.async.close_BANG_(out);
var state_27073__$1 = state_27073;
var statearr_27104_27135 = state_27073__$1;
(statearr_27104_27135[(2)] = inst_27017);

(statearr_27104_27135[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (14))){
var inst_27039 = (state_27073[(7)]);
var inst_27041 = cljs.core.chunked_seq_QMARK_(inst_27039);
var state_27073__$1 = state_27073;
if(inst_27041){
var statearr_27105_27136 = state_27073__$1;
(statearr_27105_27136[(1)] = (17));

} else {
var statearr_27106_27137 = state_27073__$1;
(statearr_27106_27137[(1)] = (18));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (16))){
var inst_27057 = (state_27073[(2)]);
var state_27073__$1 = state_27073;
var statearr_27107_27138 = state_27073__$1;
(statearr_27107_27138[(2)] = inst_27057);

(statearr_27107_27138[(1)] = (12));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27074 === (10))){
var inst_27026 = (state_27073[(8)]);
var inst_27028 = (state_27073[(10)]);
var inst_27033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27026,inst_27028);
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27073__$1,(13),out,inst_27033);
} else {
if((state_val_27074 === (18))){
var inst_27039 = (state_27073[(7)]);
var inst_27048 = cljs.core.first(inst_27039);
var state_27073__$1 = state_27073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27073__$1,(20),out,inst_27048);
} else {
if((state_val_27074 === (8))){
var inst_27028 = (state_27073[(10)]);
var inst_27027 = (state_27073[(12)]);
var inst_27030 = (inst_27028 < inst_27027);
var inst_27031 = inst_27030;
var state_27073__$1 = state_27073;
if(cljs.core.truth_(inst_27031)){
var statearr_27108_27139 = state_27073__$1;
(statearr_27108_27139[(1)] = (10));

} else {
var statearr_27109_27140 = state_27073__$1;
(statearr_27109_27140[(1)] = (11));

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
var statearr_27113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27113[(0)] = state_machine__12736__auto__);

(statearr_27113[(1)] = (1));

return statearr_27113;
});
var state_machine__12736__auto____1 = (function (state_27073){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27073);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27114){if((e27114 instanceof Object)){
var ex__12739__auto__ = e27114;
var statearr_27115_27141 = state_27073;
(statearr_27115_27141[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27073);

return cljs.core.constant$keyword$83;
} else {
throw e27114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27142 = state_27073;
state_27073 = G__27142;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27073){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto__))
})();
var state__12817__auto__ = (function (){var statearr_27116 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto__);

return statearr_27116;
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
var c__12815__auto___27247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27247,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27247,out){
return (function (state_27222){
var state_val_27223 = (state_27222[(1)]);
if((state_val_27223 === (7))){
var inst_27217 = (state_27222[(2)]);
var state_27222__$1 = state_27222;
var statearr_27224_27248 = state_27222__$1;
(statearr_27224_27248[(2)] = inst_27217);

(statearr_27224_27248[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27223 === (1))){
var inst_27199 = null;
var state_27222__$1 = (function (){var statearr_27225 = state_27222;
(statearr_27225[(7)] = inst_27199);

return statearr_27225;
})();
var statearr_27226_27249 = state_27222__$1;
(statearr_27226_27249[(2)] = null);

(statearr_27226_27249[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27223 === (4))){
var inst_27202 = (state_27222[(8)]);
var inst_27202__$1 = (state_27222[(2)]);
var inst_27203 = (inst_27202__$1 == null);
var inst_27204 = cljs.core.not(inst_27203);
var state_27222__$1 = (function (){var statearr_27227 = state_27222;
(statearr_27227[(8)] = inst_27202__$1);

return statearr_27227;
})();
if(inst_27204){
var statearr_27228_27250 = state_27222__$1;
(statearr_27228_27250[(1)] = (5));

} else {
var statearr_27229_27251 = state_27222__$1;
(statearr_27229_27251[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27223 === (6))){
var state_27222__$1 = state_27222;
var statearr_27230_27252 = state_27222__$1;
(statearr_27230_27252[(2)] = null);

(statearr_27230_27252[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27223 === (3))){
var inst_27219 = (state_27222[(2)]);
var inst_27220 = cljs.core.async.close_BANG_(out);
var state_27222__$1 = (function (){var statearr_27231 = state_27222;
(statearr_27231[(9)] = inst_27219);

return statearr_27231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27222__$1,inst_27220);
} else {
if((state_val_27223 === (2))){
var state_27222__$1 = state_27222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27222__$1,(4),ch);
} else {
if((state_val_27223 === (11))){
var inst_27202 = (state_27222[(8)]);
var inst_27211 = (state_27222[(2)]);
var inst_27199 = inst_27202;
var state_27222__$1 = (function (){var statearr_27232 = state_27222;
(statearr_27232[(7)] = inst_27199);

(statearr_27232[(10)] = inst_27211);

return statearr_27232;
})();
var statearr_27233_27253 = state_27222__$1;
(statearr_27233_27253[(2)] = null);

(statearr_27233_27253[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27223 === (9))){
var inst_27202 = (state_27222[(8)]);
var state_27222__$1 = state_27222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27222__$1,(11),out,inst_27202);
} else {
if((state_val_27223 === (5))){
var inst_27199 = (state_27222[(7)]);
var inst_27202 = (state_27222[(8)]);
var inst_27206 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27202,inst_27199);
var state_27222__$1 = state_27222;
if(inst_27206){
var statearr_27235_27254 = state_27222__$1;
(statearr_27235_27254[(1)] = (8));

} else {
var statearr_27236_27255 = state_27222__$1;
(statearr_27236_27255[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27223 === (10))){
var inst_27214 = (state_27222[(2)]);
var state_27222__$1 = state_27222;
var statearr_27237_27256 = state_27222__$1;
(statearr_27237_27256[(2)] = inst_27214);

(statearr_27237_27256[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27223 === (8))){
var inst_27199 = (state_27222[(7)]);
var tmp27234 = inst_27199;
var inst_27199__$1 = tmp27234;
var state_27222__$1 = (function (){var statearr_27238 = state_27222;
(statearr_27238[(7)] = inst_27199__$1);

return statearr_27238;
})();
var statearr_27239_27257 = state_27222__$1;
(statearr_27239_27257[(2)] = null);

(statearr_27239_27257[(1)] = (2));


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
});})(c__12815__auto___27247,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27247,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27243[(0)] = state_machine__12736__auto__);

(statearr_27243[(1)] = (1));

return statearr_27243;
});
var state_machine__12736__auto____1 = (function (state_27222){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27222);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27244){if((e27244 instanceof Object)){
var ex__12739__auto__ = e27244;
var statearr_27245_27258 = state_27222;
(statearr_27245_27258[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27222);

return cljs.core.constant$keyword$83;
} else {
throw e27244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27259 = state_27222;
state_27222 = G__27259;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27222){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27247,out))
})();
var state__12817__auto__ = (function (){var statearr_27246 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27247);

return statearr_27246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27247,out))
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
var c__12815__auto___27397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27397,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27397,out){
return (function (state_27367){
var state_val_27368 = (state_27367[(1)]);
if((state_val_27368 === (7))){
var inst_27363 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
var statearr_27369_27398 = state_27367__$1;
(statearr_27369_27398[(2)] = inst_27363);

(statearr_27369_27398[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (1))){
var inst_27330 = (new Array(n));
var inst_27331 = inst_27330;
var inst_27332 = (0);
var state_27367__$1 = (function (){var statearr_27370 = state_27367;
(statearr_27370[(7)] = inst_27331);

(statearr_27370[(8)] = inst_27332);

return statearr_27370;
})();
var statearr_27371_27399 = state_27367__$1;
(statearr_27371_27399[(2)] = null);

(statearr_27371_27399[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (4))){
var inst_27335 = (state_27367[(9)]);
var inst_27335__$1 = (state_27367[(2)]);
var inst_27336 = (inst_27335__$1 == null);
var inst_27337 = cljs.core.not(inst_27336);
var state_27367__$1 = (function (){var statearr_27372 = state_27367;
(statearr_27372[(9)] = inst_27335__$1);

return statearr_27372;
})();
if(inst_27337){
var statearr_27373_27400 = state_27367__$1;
(statearr_27373_27400[(1)] = (5));

} else {
var statearr_27374_27401 = state_27367__$1;
(statearr_27374_27401[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (15))){
var inst_27357 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
var statearr_27375_27402 = state_27367__$1;
(statearr_27375_27402[(2)] = inst_27357);

(statearr_27375_27402[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (13))){
var state_27367__$1 = state_27367;
var statearr_27376_27403 = state_27367__$1;
(statearr_27376_27403[(2)] = null);

(statearr_27376_27403[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (6))){
var inst_27332 = (state_27367[(8)]);
var inst_27353 = (inst_27332 > (0));
var state_27367__$1 = state_27367;
if(cljs.core.truth_(inst_27353)){
var statearr_27377_27404 = state_27367__$1;
(statearr_27377_27404[(1)] = (12));

} else {
var statearr_27378_27405 = state_27367__$1;
(statearr_27378_27405[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (3))){
var inst_27365 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27367__$1,inst_27365);
} else {
if((state_val_27368 === (12))){
var inst_27331 = (state_27367[(7)]);
var inst_27355 = cljs.core.vec(inst_27331);
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27367__$1,(15),out,inst_27355);
} else {
if((state_val_27368 === (2))){
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27367__$1,(4),ch);
} else {
if((state_val_27368 === (11))){
var inst_27347 = (state_27367[(2)]);
var inst_27348 = (new Array(n));
var inst_27331 = inst_27348;
var inst_27332 = (0);
var state_27367__$1 = (function (){var statearr_27379 = state_27367;
(statearr_27379[(7)] = inst_27331);

(statearr_27379[(8)] = inst_27332);

(statearr_27379[(10)] = inst_27347);

return statearr_27379;
})();
var statearr_27380_27406 = state_27367__$1;
(statearr_27380_27406[(2)] = null);

(statearr_27380_27406[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (9))){
var inst_27331 = (state_27367[(7)]);
var inst_27345 = cljs.core.vec(inst_27331);
var state_27367__$1 = state_27367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27367__$1,(11),out,inst_27345);
} else {
if((state_val_27368 === (5))){
var inst_27335 = (state_27367[(9)]);
var inst_27331 = (state_27367[(7)]);
var inst_27332 = (state_27367[(8)]);
var inst_27340 = (state_27367[(11)]);
var inst_27339 = (inst_27331[inst_27332] = inst_27335);
var inst_27340__$1 = (inst_27332 + (1));
var inst_27341 = (inst_27340__$1 < n);
var state_27367__$1 = (function (){var statearr_27381 = state_27367;
(statearr_27381[(11)] = inst_27340__$1);

(statearr_27381[(12)] = inst_27339);

return statearr_27381;
})();
if(cljs.core.truth_(inst_27341)){
var statearr_27382_27407 = state_27367__$1;
(statearr_27382_27407[(1)] = (8));

} else {
var statearr_27383_27408 = state_27367__$1;
(statearr_27383_27408[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (14))){
var inst_27360 = (state_27367[(2)]);
var inst_27361 = cljs.core.async.close_BANG_(out);
var state_27367__$1 = (function (){var statearr_27385 = state_27367;
(statearr_27385[(13)] = inst_27360);

return statearr_27385;
})();
var statearr_27386_27409 = state_27367__$1;
(statearr_27386_27409[(2)] = inst_27361);

(statearr_27386_27409[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (10))){
var inst_27351 = (state_27367[(2)]);
var state_27367__$1 = state_27367;
var statearr_27387_27410 = state_27367__$1;
(statearr_27387_27410[(2)] = inst_27351);

(statearr_27387_27410[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27368 === (8))){
var inst_27331 = (state_27367[(7)]);
var inst_27340 = (state_27367[(11)]);
var tmp27384 = inst_27331;
var inst_27331__$1 = tmp27384;
var inst_27332 = inst_27340;
var state_27367__$1 = (function (){var statearr_27388 = state_27367;
(statearr_27388[(7)] = inst_27331__$1);

(statearr_27388[(8)] = inst_27332);

return statearr_27388;
})();
var statearr_27389_27411 = state_27367__$1;
(statearr_27389_27411[(2)] = null);

(statearr_27389_27411[(1)] = (2));


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
});})(c__12815__auto___27397,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27397,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27393[(0)] = state_machine__12736__auto__);

(statearr_27393[(1)] = (1));

return statearr_27393;
});
var state_machine__12736__auto____1 = (function (state_27367){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27367);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27394){if((e27394 instanceof Object)){
var ex__12739__auto__ = e27394;
var statearr_27395_27412 = state_27367;
(statearr_27395_27412[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27367);

return cljs.core.constant$keyword$83;
} else {
throw e27394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27413 = state_27367;
state_27367 = G__27413;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27367){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27397,out))
})();
var state__12817__auto__ = (function (){var statearr_27396 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27397);

return statearr_27396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27397,out))
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
var c__12815__auto___27561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___27561,out){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___27561,out){
return (function (state_27530){
var state_val_27531 = (state_27530[(1)]);
if((state_val_27531 === (7))){
var inst_27526 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27532_27562 = state_27530__$1;
(statearr_27532_27562[(2)] = inst_27526);

(statearr_27532_27562[(1)] = (3));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (1))){
var inst_27489 = [];
var inst_27490 = inst_27489;
var inst_27491 = cljs.core.constant$keyword$97;
var state_27530__$1 = (function (){var statearr_27533 = state_27530;
(statearr_27533[(7)] = inst_27491);

(statearr_27533[(8)] = inst_27490);

return statearr_27533;
})();
var statearr_27534_27563 = state_27530__$1;
(statearr_27534_27563[(2)] = null);

(statearr_27534_27563[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (4))){
var inst_27494 = (state_27530[(9)]);
var inst_27494__$1 = (state_27530[(2)]);
var inst_27495 = (inst_27494__$1 == null);
var inst_27496 = cljs.core.not(inst_27495);
var state_27530__$1 = (function (){var statearr_27535 = state_27530;
(statearr_27535[(9)] = inst_27494__$1);

return statearr_27535;
})();
if(inst_27496){
var statearr_27536_27564 = state_27530__$1;
(statearr_27536_27564[(1)] = (5));

} else {
var statearr_27537_27565 = state_27530__$1;
(statearr_27537_27565[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (15))){
var inst_27520 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27538_27566 = state_27530__$1;
(statearr_27538_27566[(2)] = inst_27520);

(statearr_27538_27566[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (13))){
var state_27530__$1 = state_27530;
var statearr_27539_27567 = state_27530__$1;
(statearr_27539_27567[(2)] = null);

(statearr_27539_27567[(1)] = (14));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (6))){
var inst_27490 = (state_27530[(8)]);
var inst_27515 = inst_27490.length;
var inst_27516 = (inst_27515 > (0));
var state_27530__$1 = state_27530;
if(cljs.core.truth_(inst_27516)){
var statearr_27540_27568 = state_27530__$1;
(statearr_27540_27568[(1)] = (12));

} else {
var statearr_27541_27569 = state_27530__$1;
(statearr_27541_27569[(1)] = (13));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (3))){
var inst_27528 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27530__$1,inst_27528);
} else {
if((state_val_27531 === (12))){
var inst_27490 = (state_27530[(8)]);
var inst_27518 = cljs.core.vec(inst_27490);
var state_27530__$1 = state_27530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27530__$1,(15),out,inst_27518);
} else {
if((state_val_27531 === (2))){
var state_27530__$1 = state_27530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27530__$1,(4),ch);
} else {
if((state_val_27531 === (11))){
var inst_27498 = (state_27530[(10)]);
var inst_27494 = (state_27530[(9)]);
var inst_27508 = (state_27530[(2)]);
var inst_27509 = [];
var inst_27510 = inst_27509.push(inst_27494);
var inst_27490 = inst_27509;
var inst_27491 = inst_27498;
var state_27530__$1 = (function (){var statearr_27542 = state_27530;
(statearr_27542[(7)] = inst_27491);

(statearr_27542[(11)] = inst_27508);

(statearr_27542[(12)] = inst_27510);

(statearr_27542[(8)] = inst_27490);

return statearr_27542;
})();
var statearr_27543_27570 = state_27530__$1;
(statearr_27543_27570[(2)] = null);

(statearr_27543_27570[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (9))){
var inst_27490 = (state_27530[(8)]);
var inst_27506 = cljs.core.vec(inst_27490);
var state_27530__$1 = state_27530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27530__$1,(11),out,inst_27506);
} else {
if((state_val_27531 === (5))){
var inst_27498 = (state_27530[(10)]);
var inst_27491 = (state_27530[(7)]);
var inst_27494 = (state_27530[(9)]);
var inst_27498__$1 = (function (){var G__27544 = inst_27494;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27544) : f.call(null,G__27544));
})();
var inst_27499 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27498__$1,inst_27491);
var inst_27500 = cljs.core.keyword_identical_QMARK_(inst_27491,cljs.core.constant$keyword$97);
var inst_27501 = (inst_27499) || (inst_27500);
var state_27530__$1 = (function (){var statearr_27545 = state_27530;
(statearr_27545[(10)] = inst_27498__$1);

return statearr_27545;
})();
if(cljs.core.truth_(inst_27501)){
var statearr_27546_27571 = state_27530__$1;
(statearr_27546_27571[(1)] = (8));

} else {
var statearr_27547_27572 = state_27530__$1;
(statearr_27547_27572[(1)] = (9));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (14))){
var inst_27523 = (state_27530[(2)]);
var inst_27524 = cljs.core.async.close_BANG_(out);
var state_27530__$1 = (function (){var statearr_27549 = state_27530;
(statearr_27549[(13)] = inst_27523);

return statearr_27549;
})();
var statearr_27550_27573 = state_27530__$1;
(statearr_27550_27573[(2)] = inst_27524);

(statearr_27550_27573[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (10))){
var inst_27513 = (state_27530[(2)]);
var state_27530__$1 = state_27530;
var statearr_27551_27574 = state_27530__$1;
(statearr_27551_27574[(2)] = inst_27513);

(statearr_27551_27574[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_27531 === (8))){
var inst_27498 = (state_27530[(10)]);
var inst_27494 = (state_27530[(9)]);
var inst_27490 = (state_27530[(8)]);
var inst_27503 = inst_27490.push(inst_27494);
var tmp27548 = inst_27490;
var inst_27490__$1 = tmp27548;
var inst_27491 = inst_27498;
var state_27530__$1 = (function (){var statearr_27552 = state_27530;
(statearr_27552[(14)] = inst_27503);

(statearr_27552[(7)] = inst_27491);

(statearr_27552[(8)] = inst_27490__$1);

return statearr_27552;
})();
var statearr_27553_27575 = state_27530__$1;
(statearr_27553_27575[(2)] = null);

(statearr_27553_27575[(1)] = (2));


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
});})(c__12815__auto___27561,out))
;
return ((function (switch__12735__auto__,c__12815__auto___27561,out){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_27557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27557[(0)] = state_machine__12736__auto__);

(statearr_27557[(1)] = (1));

return statearr_27557;
});
var state_machine__12736__auto____1 = (function (state_27530){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_27530);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e27558){if((e27558 instanceof Object)){
var ex__12739__auto__ = e27558;
var statearr_27559_27576 = state_27530;
(statearr_27559_27576[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27530);

return cljs.core.constant$keyword$83;
} else {
throw e27558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__27577 = state_27530;
state_27530 = G__27577;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_27530){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_27530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___27561,out))
})();
var state__12817__auto__ = (function (){var statearr_27560 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_27560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___27561);

return statearr_27560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___27561,out))
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
