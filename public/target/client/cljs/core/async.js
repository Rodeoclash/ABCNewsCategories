// Compiled by ClojureScript 0.0-2816 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t27388 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27388 = (function (f,fn_handler,meta27389){
this.f = f;
this.fn_handler = fn_handler;
this.meta27389 = meta27389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27388.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27390){
var self__ = this;
var _27390__$1 = this;
return self__.meta27389;
});

cljs.core.async.t27388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27390,meta27389__$1){
var self__ = this;
var _27390__$1 = this;
return (new cljs.core.async.t27388(self__.f,self__.fn_handler,meta27389__$1));
});

cljs.core.async.t27388.cljs$lang$type = true;

cljs.core.async.t27388.cljs$lang$ctorStr = "cljs.core.async/t27388";

cljs.core.async.t27388.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27388");
});

cljs.core.async.__GT_t27388 = (function __GT_t27388(f__$1,fn_handler__$1,meta27389){
return (new cljs.core.async.t27388(f__$1,fn_handler__$1,meta27389));
});

}

return (new cljs.core.async.t27388(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__27392 = buff;
if(G__27392){
var bit__13454__auto__ = null;
if(cljs.core.truth_((function (){var or__12773__auto__ = bit__13454__auto__;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return G__27392.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27392.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27392);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27392);
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
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27393 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27393);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27393,ret){
return (function (){
return fn1.call(null,val_27393);
});})(val_27393,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13660__auto___27394 = n;
var x_27395 = (0);
while(true){
if((x_27395 < n__13660__auto___27394)){
(a[x_27395] = (0));

var G__27396 = (x_27395 + (1));
x_27395 = G__27396;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27397 = (i + (1));
i = G__27397;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27401 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27401 = (function (flag,alt_flag,meta27402){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27402 = meta27402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27401.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27403){
var self__ = this;
var _27403__$1 = this;
return self__.meta27402;
});})(flag))
;

cljs.core.async.t27401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27403,meta27402__$1){
var self__ = this;
var _27403__$1 = this;
return (new cljs.core.async.t27401(self__.flag,self__.alt_flag,meta27402__$1));
});})(flag))
;

cljs.core.async.t27401.cljs$lang$type = true;

cljs.core.async.t27401.cljs$lang$ctorStr = "cljs.core.async/t27401";

cljs.core.async.t27401.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27401");
});})(flag))
;

cljs.core.async.__GT_t27401 = ((function (flag){
return (function __GT_t27401(flag__$1,alt_flag__$1,meta27402){
return (new cljs.core.async.t27401(flag__$1,alt_flag__$1,meta27402));
});})(flag))
;

}

return (new cljs.core.async.t27401(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t27407 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27407 = (function (cb,flag,alt_handler,meta27408){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27408 = meta27408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27407.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27409){
var self__ = this;
var _27409__$1 = this;
return self__.meta27408;
});

cljs.core.async.t27407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27409,meta27408__$1){
var self__ = this;
var _27409__$1 = this;
return (new cljs.core.async.t27407(self__.cb,self__.flag,self__.alt_handler,meta27408__$1));
});

cljs.core.async.t27407.cljs$lang$type = true;

cljs.core.async.t27407.cljs$lang$ctorStr = "cljs.core.async/t27407";

cljs.core.async.t27407.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27407");
});

cljs.core.async.__GT_t27407 = (function __GT_t27407(cb__$1,flag__$1,alt_handler__$1,meta27408){
return (new cljs.core.async.t27407(cb__$1,flag__$1,alt_handler__$1,meta27408));
});

}

return (new cljs.core.async.t27407(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27410_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27410_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27411_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27411_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12773__auto__ = wport;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27412 = (i + (1));
i = G__27412;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12773__auto__ = ret;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12761__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12761__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12761__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var alts_BANG___delegate = function (ports,p__27413){
var map__27415 = p__27413;
var map__27415__$1 = ((cljs.core.seq_QMARK_.call(null,map__27415))?cljs.core.apply.call(null,cljs.core.hash_map,map__27415):map__27415);
var opts = map__27415__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27413 = null;
if (arguments.length > 1) {
var G__27416__i = 0, G__27416__a = new Array(arguments.length -  1);
while (G__27416__i < G__27416__a.length) {G__27416__a[G__27416__i] = arguments[G__27416__i + 1]; ++G__27416__i;}
  p__27413 = new cljs.core.IndexedSeq(G__27416__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__27413);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27417){
var ports = cljs.core.first(arglist__27417);
var p__27413 = cljs.core.rest(arglist__27417);
return alts_BANG___delegate(ports,p__27413);
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
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__16178__auto___27512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___27512){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___27512){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (7))){
var inst_27484 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27490_27513 = state_27488__$1;
(statearr_27490_27513[(2)] = inst_27484);

(statearr_27490_27513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (1))){
var state_27488__$1 = state_27488;
var statearr_27491_27514 = state_27488__$1;
(statearr_27491_27514[(2)] = null);

(statearr_27491_27514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (4))){
var inst_27467 = (state_27488[(7)]);
var inst_27467__$1 = (state_27488[(2)]);
var inst_27468 = (inst_27467__$1 == null);
var state_27488__$1 = (function (){var statearr_27492 = state_27488;
(statearr_27492[(7)] = inst_27467__$1);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27468)){
var statearr_27493_27515 = state_27488__$1;
(statearr_27493_27515[(1)] = (5));

} else {
var statearr_27494_27516 = state_27488__$1;
(statearr_27494_27516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (13))){
var state_27488__$1 = state_27488;
var statearr_27495_27517 = state_27488__$1;
(statearr_27495_27517[(2)] = null);

(statearr_27495_27517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (6))){
var inst_27467 = (state_27488[(7)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27488__$1,(11),to,inst_27467);
} else {
if((state_val_27489 === (3))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
if((state_val_27489 === (12))){
var state_27488__$1 = state_27488;
var statearr_27496_27518 = state_27488__$1;
(statearr_27496_27518[(2)] = null);

(statearr_27496_27518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (2))){
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(4),from);
} else {
if((state_val_27489 === (11))){
var inst_27477 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27477)){
var statearr_27497_27519 = state_27488__$1;
(statearr_27497_27519[(1)] = (12));

} else {
var statearr_27498_27520 = state_27488__$1;
(statearr_27498_27520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (9))){
var state_27488__$1 = state_27488;
var statearr_27499_27521 = state_27488__$1;
(statearr_27499_27521[(2)] = null);

(statearr_27499_27521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (5))){
var state_27488__$1 = state_27488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27500_27522 = state_27488__$1;
(statearr_27500_27522[(1)] = (8));

} else {
var statearr_27501_27523 = state_27488__$1;
(statearr_27501_27523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (14))){
var inst_27482 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27502_27524 = state_27488__$1;
(statearr_27502_27524[(2)] = inst_27482);

(statearr_27502_27524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (10))){
var inst_27474 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27503_27525 = state_27488__$1;
(statearr_27503_27525[(2)] = inst_27474);

(statearr_27503_27525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (8))){
var inst_27471 = cljs.core.async.close_BANG_.call(null,to);
var state_27488__$1 = state_27488;
var statearr_27504_27526 = state_27488__$1;
(statearr_27504_27526[(2)] = inst_27471);

(statearr_27504_27526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___27512))
;
return ((function (switch__16122__auto__,c__16178__auto___27512){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_27508 = [null,null,null,null,null,null,null,null];
(statearr_27508[(0)] = state_machine__16123__auto__);

(statearr_27508[(1)] = (1));

return statearr_27508;
});
var state_machine__16123__auto____1 = (function (state_27488){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e27509){if((e27509 instanceof Object)){
var ex__16126__auto__ = e27509;
var statearr_27510_27527 = state_27488;
(statearr_27510_27527[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27528 = state_27488;
state_27488 = G__27528;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___27512))
})();
var state__16180__auto__ = (function (){var statearr_27511 = f__16179__auto__.call(null);
(statearr_27511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___27512);

return statearr_27511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___27512))
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
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27712){
var vec__27713 = p__27712;
var v = cljs.core.nth.call(null,vec__27713,(0),null);
var p = cljs.core.nth.call(null,vec__27713,(1),null);
var job = vec__27713;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16178__auto___27895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___27895,res,vec__27713,v,p,job,jobs,results){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___27895,res,vec__27713,v,p,job,jobs,results){
return (function (state_27718){
var state_val_27719 = (state_27718[(1)]);
if((state_val_27719 === (2))){
var inst_27715 = (state_27718[(2)]);
var inst_27716 = cljs.core.async.close_BANG_.call(null,res);
var state_27718__$1 = (function (){var statearr_27720 = state_27718;
(statearr_27720[(7)] = inst_27715);

return statearr_27720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27718__$1,inst_27716);
} else {
if((state_val_27719 === (1))){
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27718__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16178__auto___27895,res,vec__27713,v,p,job,jobs,results))
;
return ((function (switch__16122__auto__,c__16178__auto___27895,res,vec__27713,v,p,job,jobs,results){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_27724 = [null,null,null,null,null,null,null,null];
(statearr_27724[(0)] = state_machine__16123__auto__);

(statearr_27724[(1)] = (1));

return statearr_27724;
});
var state_machine__16123__auto____1 = (function (state_27718){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_27718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e27725){if((e27725 instanceof Object)){
var ex__16126__auto__ = e27725;
var statearr_27726_27896 = state_27718;
(statearr_27726_27896[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27897 = state_27718;
state_27718 = G__27897;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_27718){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_27718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___27895,res,vec__27713,v,p,job,jobs,results))
})();
var state__16180__auto__ = (function (){var statearr_27727 = f__16179__auto__.call(null);
(statearr_27727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___27895);

return statearr_27727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___27895,res,vec__27713,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27728){
var vec__27729 = p__27728;
var v = cljs.core.nth.call(null,vec__27729,(0),null);
var p = cljs.core.nth.call(null,vec__27729,(1),null);
var job = vec__27729;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__13660__auto___27898 = n;
var __27899 = (0);
while(true){
if((__27899 < n__13660__auto___27898)){
var G__27730_27900 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27730_27900) {
case "async":
var c__16178__auto___27902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27899,c__16178__auto___27902,G__27730_27900,n__13660__auto___27898,jobs,results,process,async){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (__27899,c__16178__auto___27902,G__27730_27900,n__13660__auto___27898,jobs,results,process,async){
return (function (state_27743){
var state_val_27744 = (state_27743[(1)]);
if((state_val_27744 === (7))){
var inst_27739 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
var statearr_27745_27903 = state_27743__$1;
(statearr_27745_27903[(2)] = inst_27739);

(statearr_27745_27903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (6))){
var state_27743__$1 = state_27743;
var statearr_27746_27904 = state_27743__$1;
(statearr_27746_27904[(2)] = null);

(statearr_27746_27904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (5))){
var state_27743__$1 = state_27743;
var statearr_27747_27905 = state_27743__$1;
(statearr_27747_27905[(2)] = null);

(statearr_27747_27905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (4))){
var inst_27733 = (state_27743[(2)]);
var inst_27734 = async.call(null,inst_27733);
var state_27743__$1 = state_27743;
if(cljs.core.truth_(inst_27734)){
var statearr_27748_27906 = state_27743__$1;
(statearr_27748_27906[(1)] = (5));

} else {
var statearr_27749_27907 = state_27743__$1;
(statearr_27749_27907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27744 === (3))){
var inst_27741 = (state_27743[(2)]);
var state_27743__$1 = state_27743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27743__$1,inst_27741);
} else {
if((state_val_27744 === (2))){
var state_27743__$1 = state_27743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27743__$1,(4),jobs);
} else {
if((state_val_27744 === (1))){
var state_27743__$1 = state_27743;
var statearr_27750_27908 = state_27743__$1;
(statearr_27750_27908[(2)] = null);

(statearr_27750_27908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27899,c__16178__auto___27902,G__27730_27900,n__13660__auto___27898,jobs,results,process,async))
;
return ((function (__27899,switch__16122__auto__,c__16178__auto___27902,G__27730_27900,n__13660__auto___27898,jobs,results,process,async){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_27754 = [null,null,null,null,null,null,null];
(statearr_27754[(0)] = state_machine__16123__auto__);

(statearr_27754[(1)] = (1));

return statearr_27754;
});
var state_machine__16123__auto____1 = (function (state_27743){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_27743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e27755){if((e27755 instanceof Object)){
var ex__16126__auto__ = e27755;
var statearr_27756_27909 = state_27743;
(statearr_27756_27909[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27910 = state_27743;
state_27743 = G__27910;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_27743){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_27743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(__27899,switch__16122__auto__,c__16178__auto___27902,G__27730_27900,n__13660__auto___27898,jobs,results,process,async))
})();
var state__16180__auto__ = (function (){var statearr_27757 = f__16179__auto__.call(null);
(statearr_27757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___27902);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(__27899,c__16178__auto___27902,G__27730_27900,n__13660__auto___27898,jobs,results,process,async))
);


break;
case "compute":
var c__16178__auto___27911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27899,c__16178__auto___27911,G__27730_27900,n__13660__auto___27898,jobs,results,process,async){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (__27899,c__16178__auto___27911,G__27730_27900,n__13660__auto___27898,jobs,results,process,async){
return (function (state_27770){
var state_val_27771 = (state_27770[(1)]);
if((state_val_27771 === (7))){
var inst_27766 = (state_27770[(2)]);
var state_27770__$1 = state_27770;
var statearr_27772_27912 = state_27770__$1;
(statearr_27772_27912[(2)] = inst_27766);

(statearr_27772_27912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (6))){
var state_27770__$1 = state_27770;
var statearr_27773_27913 = state_27770__$1;
(statearr_27773_27913[(2)] = null);

(statearr_27773_27913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (5))){
var state_27770__$1 = state_27770;
var statearr_27774_27914 = state_27770__$1;
(statearr_27774_27914[(2)] = null);

(statearr_27774_27914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (4))){
var inst_27760 = (state_27770[(2)]);
var inst_27761 = process.call(null,inst_27760);
var state_27770__$1 = state_27770;
if(cljs.core.truth_(inst_27761)){
var statearr_27775_27915 = state_27770__$1;
(statearr_27775_27915[(1)] = (5));

} else {
var statearr_27776_27916 = state_27770__$1;
(statearr_27776_27916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (3))){
var inst_27768 = (state_27770[(2)]);
var state_27770__$1 = state_27770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27770__$1,inst_27768);
} else {
if((state_val_27771 === (2))){
var state_27770__$1 = state_27770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27770__$1,(4),jobs);
} else {
if((state_val_27771 === (1))){
var state_27770__$1 = state_27770;
var statearr_27777_27917 = state_27770__$1;
(statearr_27777_27917[(2)] = null);

(statearr_27777_27917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27899,c__16178__auto___27911,G__27730_27900,n__13660__auto___27898,jobs,results,process,async))
;
return ((function (__27899,switch__16122__auto__,c__16178__auto___27911,G__27730_27900,n__13660__auto___27898,jobs,results,process,async){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_27781 = [null,null,null,null,null,null,null];
(statearr_27781[(0)] = state_machine__16123__auto__);

(statearr_27781[(1)] = (1));

return statearr_27781;
});
var state_machine__16123__auto____1 = (function (state_27770){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_27770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e27782){if((e27782 instanceof Object)){
var ex__16126__auto__ = e27782;
var statearr_27783_27918 = state_27770;
(statearr_27783_27918[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27919 = state_27770;
state_27770 = G__27919;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_27770){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_27770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(__27899,switch__16122__auto__,c__16178__auto___27911,G__27730_27900,n__13660__auto___27898,jobs,results,process,async))
})();
var state__16180__auto__ = (function (){var statearr_27784 = f__16179__auto__.call(null);
(statearr_27784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___27911);

return statearr_27784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(__27899,c__16178__auto___27911,G__27730_27900,n__13660__auto___27898,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27920 = (__27899 + (1));
__27899 = G__27920;
continue;
} else {
}
break;
}

var c__16178__auto___27921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___27921,jobs,results,process,async){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___27921,jobs,results,process,async){
return (function (state_27806){
var state_val_27807 = (state_27806[(1)]);
if((state_val_27807 === (9))){
var inst_27799 = (state_27806[(2)]);
var state_27806__$1 = (function (){var statearr_27808 = state_27806;
(statearr_27808[(7)] = inst_27799);

return statearr_27808;
})();
var statearr_27809_27922 = state_27806__$1;
(statearr_27809_27922[(2)] = null);

(statearr_27809_27922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (8))){
var inst_27792 = (state_27806[(8)]);
var inst_27797 = (state_27806[(2)]);
var state_27806__$1 = (function (){var statearr_27810 = state_27806;
(statearr_27810[(9)] = inst_27797);

return statearr_27810;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27806__$1,(9),results,inst_27792);
} else {
if((state_val_27807 === (7))){
var inst_27802 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
var statearr_27811_27923 = state_27806__$1;
(statearr_27811_27923[(2)] = inst_27802);

(statearr_27811_27923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (6))){
var inst_27787 = (state_27806[(10)]);
var inst_27792 = (state_27806[(8)]);
var inst_27792__$1 = cljs.core.async.chan.call(null,(1));
var inst_27793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27794 = [inst_27787,inst_27792__$1];
var inst_27795 = (new cljs.core.PersistentVector(null,2,(5),inst_27793,inst_27794,null));
var state_27806__$1 = (function (){var statearr_27812 = state_27806;
(statearr_27812[(8)] = inst_27792__$1);

return statearr_27812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27806__$1,(8),jobs,inst_27795);
} else {
if((state_val_27807 === (5))){
var inst_27790 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27806__$1 = state_27806;
var statearr_27813_27924 = state_27806__$1;
(statearr_27813_27924[(2)] = inst_27790);

(statearr_27813_27924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (4))){
var inst_27787 = (state_27806[(10)]);
var inst_27787__$1 = (state_27806[(2)]);
var inst_27788 = (inst_27787__$1 == null);
var state_27806__$1 = (function (){var statearr_27814 = state_27806;
(statearr_27814[(10)] = inst_27787__$1);

return statearr_27814;
})();
if(cljs.core.truth_(inst_27788)){
var statearr_27815_27925 = state_27806__$1;
(statearr_27815_27925[(1)] = (5));

} else {
var statearr_27816_27926 = state_27806__$1;
(statearr_27816_27926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27807 === (3))){
var inst_27804 = (state_27806[(2)]);
var state_27806__$1 = state_27806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27806__$1,inst_27804);
} else {
if((state_val_27807 === (2))){
var state_27806__$1 = state_27806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27806__$1,(4),from);
} else {
if((state_val_27807 === (1))){
var state_27806__$1 = state_27806;
var statearr_27817_27927 = state_27806__$1;
(statearr_27817_27927[(2)] = null);

(statearr_27817_27927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___27921,jobs,results,process,async))
;
return ((function (switch__16122__auto__,c__16178__auto___27921,jobs,results,process,async){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_27821 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27821[(0)] = state_machine__16123__auto__);

(statearr_27821[(1)] = (1));

return statearr_27821;
});
var state_machine__16123__auto____1 = (function (state_27806){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_27806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e27822){if((e27822 instanceof Object)){
var ex__16126__auto__ = e27822;
var statearr_27823_27928 = state_27806;
(statearr_27823_27928[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27929 = state_27806;
state_27806 = G__27929;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_27806){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_27806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___27921,jobs,results,process,async))
})();
var state__16180__auto__ = (function (){var statearr_27824 = f__16179__auto__.call(null);
(statearr_27824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___27921);

return statearr_27824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___27921,jobs,results,process,async))
);


var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__,jobs,results,process,async){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__,jobs,results,process,async){
return (function (state_27862){
var state_val_27863 = (state_27862[(1)]);
if((state_val_27863 === (7))){
var inst_27858 = (state_27862[(2)]);
var state_27862__$1 = state_27862;
var statearr_27864_27930 = state_27862__$1;
(statearr_27864_27930[(2)] = inst_27858);

(statearr_27864_27930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (20))){
var state_27862__$1 = state_27862;
var statearr_27865_27931 = state_27862__$1;
(statearr_27865_27931[(2)] = null);

(statearr_27865_27931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (1))){
var state_27862__$1 = state_27862;
var statearr_27866_27932 = state_27862__$1;
(statearr_27866_27932[(2)] = null);

(statearr_27866_27932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (4))){
var inst_27827 = (state_27862[(7)]);
var inst_27827__$1 = (state_27862[(2)]);
var inst_27828 = (inst_27827__$1 == null);
var state_27862__$1 = (function (){var statearr_27867 = state_27862;
(statearr_27867[(7)] = inst_27827__$1);

return statearr_27867;
})();
if(cljs.core.truth_(inst_27828)){
var statearr_27868_27933 = state_27862__$1;
(statearr_27868_27933[(1)] = (5));

} else {
var statearr_27869_27934 = state_27862__$1;
(statearr_27869_27934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (15))){
var inst_27840 = (state_27862[(8)]);
var state_27862__$1 = state_27862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27862__$1,(18),to,inst_27840);
} else {
if((state_val_27863 === (21))){
var inst_27853 = (state_27862[(2)]);
var state_27862__$1 = state_27862;
var statearr_27870_27935 = state_27862__$1;
(statearr_27870_27935[(2)] = inst_27853);

(statearr_27870_27935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (13))){
var inst_27855 = (state_27862[(2)]);
var state_27862__$1 = (function (){var statearr_27871 = state_27862;
(statearr_27871[(9)] = inst_27855);

return statearr_27871;
})();
var statearr_27872_27936 = state_27862__$1;
(statearr_27872_27936[(2)] = null);

(statearr_27872_27936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (6))){
var inst_27827 = (state_27862[(7)]);
var state_27862__$1 = state_27862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27862__$1,(11),inst_27827);
} else {
if((state_val_27863 === (17))){
var inst_27848 = (state_27862[(2)]);
var state_27862__$1 = state_27862;
if(cljs.core.truth_(inst_27848)){
var statearr_27873_27937 = state_27862__$1;
(statearr_27873_27937[(1)] = (19));

} else {
var statearr_27874_27938 = state_27862__$1;
(statearr_27874_27938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (3))){
var inst_27860 = (state_27862[(2)]);
var state_27862__$1 = state_27862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27862__$1,inst_27860);
} else {
if((state_val_27863 === (12))){
var inst_27837 = (state_27862[(10)]);
var state_27862__$1 = state_27862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27862__$1,(14),inst_27837);
} else {
if((state_val_27863 === (2))){
var state_27862__$1 = state_27862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27862__$1,(4),results);
} else {
if((state_val_27863 === (19))){
var state_27862__$1 = state_27862;
var statearr_27875_27939 = state_27862__$1;
(statearr_27875_27939[(2)] = null);

(statearr_27875_27939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (11))){
var inst_27837 = (state_27862[(2)]);
var state_27862__$1 = (function (){var statearr_27876 = state_27862;
(statearr_27876[(10)] = inst_27837);

return statearr_27876;
})();
var statearr_27877_27940 = state_27862__$1;
(statearr_27877_27940[(2)] = null);

(statearr_27877_27940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (9))){
var state_27862__$1 = state_27862;
var statearr_27878_27941 = state_27862__$1;
(statearr_27878_27941[(2)] = null);

(statearr_27878_27941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (5))){
var state_27862__$1 = state_27862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27879_27942 = state_27862__$1;
(statearr_27879_27942[(1)] = (8));

} else {
var statearr_27880_27943 = state_27862__$1;
(statearr_27880_27943[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (14))){
var inst_27842 = (state_27862[(11)]);
var inst_27840 = (state_27862[(8)]);
var inst_27840__$1 = (state_27862[(2)]);
var inst_27841 = (inst_27840__$1 == null);
var inst_27842__$1 = cljs.core.not.call(null,inst_27841);
var state_27862__$1 = (function (){var statearr_27881 = state_27862;
(statearr_27881[(11)] = inst_27842__$1);

(statearr_27881[(8)] = inst_27840__$1);

return statearr_27881;
})();
if(inst_27842__$1){
var statearr_27882_27944 = state_27862__$1;
(statearr_27882_27944[(1)] = (15));

} else {
var statearr_27883_27945 = state_27862__$1;
(statearr_27883_27945[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (16))){
var inst_27842 = (state_27862[(11)]);
var state_27862__$1 = state_27862;
var statearr_27884_27946 = state_27862__$1;
(statearr_27884_27946[(2)] = inst_27842);

(statearr_27884_27946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (10))){
var inst_27834 = (state_27862[(2)]);
var state_27862__$1 = state_27862;
var statearr_27885_27947 = state_27862__$1;
(statearr_27885_27947[(2)] = inst_27834);

(statearr_27885_27947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (18))){
var inst_27845 = (state_27862[(2)]);
var state_27862__$1 = state_27862;
var statearr_27886_27948 = state_27862__$1;
(statearr_27886_27948[(2)] = inst_27845);

(statearr_27886_27948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27863 === (8))){
var inst_27831 = cljs.core.async.close_BANG_.call(null,to);
var state_27862__$1 = state_27862;
var statearr_27887_27949 = state_27862__$1;
(statearr_27887_27949[(2)] = inst_27831);

(statearr_27887_27949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto__,jobs,results,process,async))
;
return ((function (switch__16122__auto__,c__16178__auto__,jobs,results,process,async){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_27891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27891[(0)] = state_machine__16123__auto__);

(statearr_27891[(1)] = (1));

return statearr_27891;
});
var state_machine__16123__auto____1 = (function (state_27862){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_27862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e27892){if((e27892 instanceof Object)){
var ex__16126__auto__ = e27892;
var statearr_27893_27950 = state_27862;
(statearr_27893_27950[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27951 = state_27862;
state_27862 = G__27951;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_27862){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_27862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__,jobs,results,process,async))
})();
var state__16180__auto__ = (function (){var statearr_27894 = f__16179__auto__.call(null);
(statearr_27894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_27894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__,jobs,results,process,async))
);

return c__16178__auto__;
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
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16178__auto___28052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___28052,tc,fc){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___28052,tc,fc){
return (function (state_28027){
var state_val_28028 = (state_28027[(1)]);
if((state_val_28028 === (7))){
var inst_28023 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28029_28053 = state_28027__$1;
(statearr_28029_28053[(2)] = inst_28023);

(statearr_28029_28053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (1))){
var state_28027__$1 = state_28027;
var statearr_28030_28054 = state_28027__$1;
(statearr_28030_28054[(2)] = null);

(statearr_28030_28054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (4))){
var inst_28004 = (state_28027[(7)]);
var inst_28004__$1 = (state_28027[(2)]);
var inst_28005 = (inst_28004__$1 == null);
var state_28027__$1 = (function (){var statearr_28031 = state_28027;
(statearr_28031[(7)] = inst_28004__$1);

return statearr_28031;
})();
if(cljs.core.truth_(inst_28005)){
var statearr_28032_28055 = state_28027__$1;
(statearr_28032_28055[(1)] = (5));

} else {
var statearr_28033_28056 = state_28027__$1;
(statearr_28033_28056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (13))){
var state_28027__$1 = state_28027;
var statearr_28034_28057 = state_28027__$1;
(statearr_28034_28057[(2)] = null);

(statearr_28034_28057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (6))){
var inst_28004 = (state_28027[(7)]);
var inst_28010 = p.call(null,inst_28004);
var state_28027__$1 = state_28027;
if(cljs.core.truth_(inst_28010)){
var statearr_28035_28058 = state_28027__$1;
(statearr_28035_28058[(1)] = (9));

} else {
var statearr_28036_28059 = state_28027__$1;
(statearr_28036_28059[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (3))){
var inst_28025 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28027__$1,inst_28025);
} else {
if((state_val_28028 === (12))){
var state_28027__$1 = state_28027;
var statearr_28037_28060 = state_28027__$1;
(statearr_28037_28060[(2)] = null);

(statearr_28037_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (2))){
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28027__$1,(4),ch);
} else {
if((state_val_28028 === (11))){
var inst_28004 = (state_28027[(7)]);
var inst_28014 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28027__$1,(8),inst_28014,inst_28004);
} else {
if((state_val_28028 === (9))){
var state_28027__$1 = state_28027;
var statearr_28038_28061 = state_28027__$1;
(statearr_28038_28061[(2)] = tc);

(statearr_28038_28061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (5))){
var inst_28007 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28008 = cljs.core.async.close_BANG_.call(null,fc);
var state_28027__$1 = (function (){var statearr_28039 = state_28027;
(statearr_28039[(8)] = inst_28007);

return statearr_28039;
})();
var statearr_28040_28062 = state_28027__$1;
(statearr_28040_28062[(2)] = inst_28008);

(statearr_28040_28062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (14))){
var inst_28021 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
var statearr_28041_28063 = state_28027__$1;
(statearr_28041_28063[(2)] = inst_28021);

(statearr_28041_28063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (10))){
var state_28027__$1 = state_28027;
var statearr_28042_28064 = state_28027__$1;
(statearr_28042_28064[(2)] = fc);

(statearr_28042_28064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28028 === (8))){
var inst_28016 = (state_28027[(2)]);
var state_28027__$1 = state_28027;
if(cljs.core.truth_(inst_28016)){
var statearr_28043_28065 = state_28027__$1;
(statearr_28043_28065[(1)] = (12));

} else {
var statearr_28044_28066 = state_28027__$1;
(statearr_28044_28066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___28052,tc,fc))
;
return ((function (switch__16122__auto__,c__16178__auto___28052,tc,fc){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_28048 = [null,null,null,null,null,null,null,null,null];
(statearr_28048[(0)] = state_machine__16123__auto__);

(statearr_28048[(1)] = (1));

return statearr_28048;
});
var state_machine__16123__auto____1 = (function (state_28027){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_28027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e28049){if((e28049 instanceof Object)){
var ex__16126__auto__ = e28049;
var statearr_28050_28067 = state_28027;
(statearr_28050_28067[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28068 = state_28027;
state_28027 = G__28068;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_28027){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_28027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___28052,tc,fc))
})();
var state__16180__auto__ = (function (){var statearr_28051 = f__16179__auto__.call(null);
(statearr_28051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___28052);

return statearr_28051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___28052,tc,fc))
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
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__){
return (function (state_28115){
var state_val_28116 = (state_28115[(1)]);
if((state_val_28116 === (7))){
var inst_28111 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
var statearr_28117_28133 = state_28115__$1;
(statearr_28117_28133[(2)] = inst_28111);

(statearr_28117_28133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (6))){
var inst_28104 = (state_28115[(7)]);
var inst_28101 = (state_28115[(8)]);
var inst_28108 = f.call(null,inst_28101,inst_28104);
var inst_28101__$1 = inst_28108;
var state_28115__$1 = (function (){var statearr_28118 = state_28115;
(statearr_28118[(8)] = inst_28101__$1);

return statearr_28118;
})();
var statearr_28119_28134 = state_28115__$1;
(statearr_28119_28134[(2)] = null);

(statearr_28119_28134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (5))){
var inst_28101 = (state_28115[(8)]);
var state_28115__$1 = state_28115;
var statearr_28120_28135 = state_28115__$1;
(statearr_28120_28135[(2)] = inst_28101);

(statearr_28120_28135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (4))){
var inst_28104 = (state_28115[(7)]);
var inst_28104__$1 = (state_28115[(2)]);
var inst_28105 = (inst_28104__$1 == null);
var state_28115__$1 = (function (){var statearr_28121 = state_28115;
(statearr_28121[(7)] = inst_28104__$1);

return statearr_28121;
})();
if(cljs.core.truth_(inst_28105)){
var statearr_28122_28136 = state_28115__$1;
(statearr_28122_28136[(1)] = (5));

} else {
var statearr_28123_28137 = state_28115__$1;
(statearr_28123_28137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28116 === (3))){
var inst_28113 = (state_28115[(2)]);
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28115__$1,inst_28113);
} else {
if((state_val_28116 === (2))){
var state_28115__$1 = state_28115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28115__$1,(4),ch);
} else {
if((state_val_28116 === (1))){
var inst_28101 = init;
var state_28115__$1 = (function (){var statearr_28124 = state_28115;
(statearr_28124[(8)] = inst_28101);

return statearr_28124;
})();
var statearr_28125_28138 = state_28115__$1;
(statearr_28125_28138[(2)] = null);

(statearr_28125_28138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__16178__auto__))
;
return ((function (switch__16122__auto__,c__16178__auto__){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_28129 = [null,null,null,null,null,null,null,null,null];
(statearr_28129[(0)] = state_machine__16123__auto__);

(statearr_28129[(1)] = (1));

return statearr_28129;
});
var state_machine__16123__auto____1 = (function (state_28115){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_28115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e28130){if((e28130 instanceof Object)){
var ex__16126__auto__ = e28130;
var statearr_28131_28139 = state_28115;
(statearr_28131_28139[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28140 = state_28115;
state_28115 = G__28140;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_28115){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_28115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__))
})();
var state__16180__auto__ = (function (){var statearr_28132 = f__16179__auto__.call(null);
(statearr_28132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_28132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__))
);

return c__16178__auto__;
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
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__){
return (function (state_28214){
var state_val_28215 = (state_28214[(1)]);
if((state_val_28215 === (7))){
var inst_28196 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
var statearr_28216_28239 = state_28214__$1;
(statearr_28216_28239[(2)] = inst_28196);

(statearr_28216_28239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (1))){
var inst_28190 = cljs.core.seq.call(null,coll);
var inst_28191 = inst_28190;
var state_28214__$1 = (function (){var statearr_28217 = state_28214;
(statearr_28217[(7)] = inst_28191);

return statearr_28217;
})();
var statearr_28218_28240 = state_28214__$1;
(statearr_28218_28240[(2)] = null);

(statearr_28218_28240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (4))){
var inst_28191 = (state_28214[(7)]);
var inst_28194 = cljs.core.first.call(null,inst_28191);
var state_28214__$1 = state_28214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28214__$1,(7),ch,inst_28194);
} else {
if((state_val_28215 === (13))){
var inst_28208 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
var statearr_28219_28241 = state_28214__$1;
(statearr_28219_28241[(2)] = inst_28208);

(statearr_28219_28241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (6))){
var inst_28199 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
if(cljs.core.truth_(inst_28199)){
var statearr_28220_28242 = state_28214__$1;
(statearr_28220_28242[(1)] = (8));

} else {
var statearr_28221_28243 = state_28214__$1;
(statearr_28221_28243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (3))){
var inst_28212 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28214__$1,inst_28212);
} else {
if((state_val_28215 === (12))){
var state_28214__$1 = state_28214;
var statearr_28222_28244 = state_28214__$1;
(statearr_28222_28244[(2)] = null);

(statearr_28222_28244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (2))){
var inst_28191 = (state_28214[(7)]);
var state_28214__$1 = state_28214;
if(cljs.core.truth_(inst_28191)){
var statearr_28223_28245 = state_28214__$1;
(statearr_28223_28245[(1)] = (4));

} else {
var statearr_28224_28246 = state_28214__$1;
(statearr_28224_28246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (11))){
var inst_28205 = cljs.core.async.close_BANG_.call(null,ch);
var state_28214__$1 = state_28214;
var statearr_28225_28247 = state_28214__$1;
(statearr_28225_28247[(2)] = inst_28205);

(statearr_28225_28247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (9))){
var state_28214__$1 = state_28214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28226_28248 = state_28214__$1;
(statearr_28226_28248[(1)] = (11));

} else {
var statearr_28227_28249 = state_28214__$1;
(statearr_28227_28249[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (5))){
var inst_28191 = (state_28214[(7)]);
var state_28214__$1 = state_28214;
var statearr_28228_28250 = state_28214__$1;
(statearr_28228_28250[(2)] = inst_28191);

(statearr_28228_28250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (10))){
var inst_28210 = (state_28214[(2)]);
var state_28214__$1 = state_28214;
var statearr_28229_28251 = state_28214__$1;
(statearr_28229_28251[(2)] = inst_28210);

(statearr_28229_28251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28215 === (8))){
var inst_28191 = (state_28214[(7)]);
var inst_28201 = cljs.core.next.call(null,inst_28191);
var inst_28191__$1 = inst_28201;
var state_28214__$1 = (function (){var statearr_28230 = state_28214;
(statearr_28230[(7)] = inst_28191__$1);

return statearr_28230;
})();
var statearr_28231_28252 = state_28214__$1;
(statearr_28231_28252[(2)] = null);

(statearr_28231_28252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto__))
;
return ((function (switch__16122__auto__,c__16178__auto__){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_28235 = [null,null,null,null,null,null,null,null];
(statearr_28235[(0)] = state_machine__16123__auto__);

(statearr_28235[(1)] = (1));

return statearr_28235;
});
var state_machine__16123__auto____1 = (function (state_28214){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_28214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e28236){if((e28236 instanceof Object)){
var ex__16126__auto__ = e28236;
var statearr_28237_28253 = state_28214;
(statearr_28237_28253[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28254 = state_28214;
state_28214 = G__28254;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_28214){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_28214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__))
})();
var state__16180__auto__ = (function (){var statearr_28238 = f__16179__auto__.call(null);
(statearr_28238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__))
);

return c__16178__auto__;
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
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28256 = {};
return obj28256;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12761__auto__ = _;
if(and__12761__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12761__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13417__auto__ = (((_ == null))?null:_);
return (function (){var or__12773__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28258 = {};
return obj28258;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28480 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28480 = (function (cs,ch,mult,meta28481){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28481 = meta28481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28480.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28480.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28480.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28480.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28482){
var self__ = this;
var _28482__$1 = this;
return self__.meta28481;
});})(cs))
;

cljs.core.async.t28480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28482,meta28481__$1){
var self__ = this;
var _28482__$1 = this;
return (new cljs.core.async.t28480(self__.cs,self__.ch,self__.mult,meta28481__$1));
});})(cs))
;

cljs.core.async.t28480.cljs$lang$type = true;

cljs.core.async.t28480.cljs$lang$ctorStr = "cljs.core.async/t28480";

cljs.core.async.t28480.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t28480");
});})(cs))
;

cljs.core.async.__GT_t28480 = ((function (cs){
return (function __GT_t28480(cs__$1,ch__$1,mult__$1,meta28481){
return (new cljs.core.async.t28480(cs__$1,ch__$1,mult__$1,meta28481));
});})(cs))
;

}

return (new cljs.core.async.t28480(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16178__auto___28701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___28701,cs,m,dchan,dctr,done){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___28701,cs,m,dchan,dctr,done){
return (function (state_28613){
var state_val_28614 = (state_28613[(1)]);
if((state_val_28614 === (7))){
var inst_28609 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28615_28702 = state_28613__$1;
(statearr_28615_28702[(2)] = inst_28609);

(statearr_28615_28702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (20))){
var inst_28514 = (state_28613[(7)]);
var inst_28524 = cljs.core.first.call(null,inst_28514);
var inst_28525 = cljs.core.nth.call(null,inst_28524,(0),null);
var inst_28526 = cljs.core.nth.call(null,inst_28524,(1),null);
var state_28613__$1 = (function (){var statearr_28616 = state_28613;
(statearr_28616[(8)] = inst_28525);

return statearr_28616;
})();
if(cljs.core.truth_(inst_28526)){
var statearr_28617_28703 = state_28613__$1;
(statearr_28617_28703[(1)] = (22));

} else {
var statearr_28618_28704 = state_28613__$1;
(statearr_28618_28704[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (27))){
var inst_28554 = (state_28613[(9)]);
var inst_28485 = (state_28613[(10)]);
var inst_28561 = (state_28613[(11)]);
var inst_28556 = (state_28613[(12)]);
var inst_28561__$1 = cljs.core._nth.call(null,inst_28554,inst_28556);
var inst_28562 = cljs.core.async.put_BANG_.call(null,inst_28561__$1,inst_28485,done);
var state_28613__$1 = (function (){var statearr_28619 = state_28613;
(statearr_28619[(11)] = inst_28561__$1);

return statearr_28619;
})();
if(cljs.core.truth_(inst_28562)){
var statearr_28620_28705 = state_28613__$1;
(statearr_28620_28705[(1)] = (30));

} else {
var statearr_28621_28706 = state_28613__$1;
(statearr_28621_28706[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (1))){
var state_28613__$1 = state_28613;
var statearr_28622_28707 = state_28613__$1;
(statearr_28622_28707[(2)] = null);

(statearr_28622_28707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (24))){
var inst_28514 = (state_28613[(7)]);
var inst_28531 = (state_28613[(2)]);
var inst_28532 = cljs.core.next.call(null,inst_28514);
var inst_28494 = inst_28532;
var inst_28495 = null;
var inst_28496 = (0);
var inst_28497 = (0);
var state_28613__$1 = (function (){var statearr_28623 = state_28613;
(statearr_28623[(13)] = inst_28494);

(statearr_28623[(14)] = inst_28531);

(statearr_28623[(15)] = inst_28495);

(statearr_28623[(16)] = inst_28496);

(statearr_28623[(17)] = inst_28497);

return statearr_28623;
})();
var statearr_28624_28708 = state_28613__$1;
(statearr_28624_28708[(2)] = null);

(statearr_28624_28708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (39))){
var state_28613__$1 = state_28613;
var statearr_28628_28709 = state_28613__$1;
(statearr_28628_28709[(2)] = null);

(statearr_28628_28709[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (4))){
var inst_28485 = (state_28613[(10)]);
var inst_28485__$1 = (state_28613[(2)]);
var inst_28486 = (inst_28485__$1 == null);
var state_28613__$1 = (function (){var statearr_28629 = state_28613;
(statearr_28629[(10)] = inst_28485__$1);

return statearr_28629;
})();
if(cljs.core.truth_(inst_28486)){
var statearr_28630_28710 = state_28613__$1;
(statearr_28630_28710[(1)] = (5));

} else {
var statearr_28631_28711 = state_28613__$1;
(statearr_28631_28711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (15))){
var inst_28494 = (state_28613[(13)]);
var inst_28495 = (state_28613[(15)]);
var inst_28496 = (state_28613[(16)]);
var inst_28497 = (state_28613[(17)]);
var inst_28510 = (state_28613[(2)]);
var inst_28511 = (inst_28497 + (1));
var tmp28625 = inst_28494;
var tmp28626 = inst_28495;
var tmp28627 = inst_28496;
var inst_28494__$1 = tmp28625;
var inst_28495__$1 = tmp28626;
var inst_28496__$1 = tmp28627;
var inst_28497__$1 = inst_28511;
var state_28613__$1 = (function (){var statearr_28632 = state_28613;
(statearr_28632[(13)] = inst_28494__$1);

(statearr_28632[(18)] = inst_28510);

(statearr_28632[(15)] = inst_28495__$1);

(statearr_28632[(16)] = inst_28496__$1);

(statearr_28632[(17)] = inst_28497__$1);

return statearr_28632;
})();
var statearr_28633_28712 = state_28613__$1;
(statearr_28633_28712[(2)] = null);

(statearr_28633_28712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (21))){
var inst_28535 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28637_28713 = state_28613__$1;
(statearr_28637_28713[(2)] = inst_28535);

(statearr_28637_28713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (31))){
var inst_28561 = (state_28613[(11)]);
var inst_28565 = done.call(null,null);
var inst_28566 = cljs.core.async.untap_STAR_.call(null,m,inst_28561);
var state_28613__$1 = (function (){var statearr_28638 = state_28613;
(statearr_28638[(19)] = inst_28565);

return statearr_28638;
})();
var statearr_28639_28714 = state_28613__$1;
(statearr_28639_28714[(2)] = inst_28566);

(statearr_28639_28714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (32))){
var inst_28554 = (state_28613[(9)]);
var inst_28555 = (state_28613[(20)]);
var inst_28553 = (state_28613[(21)]);
var inst_28556 = (state_28613[(12)]);
var inst_28568 = (state_28613[(2)]);
var inst_28569 = (inst_28556 + (1));
var tmp28634 = inst_28554;
var tmp28635 = inst_28555;
var tmp28636 = inst_28553;
var inst_28553__$1 = tmp28636;
var inst_28554__$1 = tmp28634;
var inst_28555__$1 = tmp28635;
var inst_28556__$1 = inst_28569;
var state_28613__$1 = (function (){var statearr_28640 = state_28613;
(statearr_28640[(9)] = inst_28554__$1);

(statearr_28640[(22)] = inst_28568);

(statearr_28640[(20)] = inst_28555__$1);

(statearr_28640[(21)] = inst_28553__$1);

(statearr_28640[(12)] = inst_28556__$1);

return statearr_28640;
})();
var statearr_28641_28715 = state_28613__$1;
(statearr_28641_28715[(2)] = null);

(statearr_28641_28715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (40))){
var inst_28581 = (state_28613[(23)]);
var inst_28585 = done.call(null,null);
var inst_28586 = cljs.core.async.untap_STAR_.call(null,m,inst_28581);
var state_28613__$1 = (function (){var statearr_28642 = state_28613;
(statearr_28642[(24)] = inst_28585);

return statearr_28642;
})();
var statearr_28643_28716 = state_28613__$1;
(statearr_28643_28716[(2)] = inst_28586);

(statearr_28643_28716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (33))){
var inst_28572 = (state_28613[(25)]);
var inst_28574 = cljs.core.chunked_seq_QMARK_.call(null,inst_28572);
var state_28613__$1 = state_28613;
if(inst_28574){
var statearr_28644_28717 = state_28613__$1;
(statearr_28644_28717[(1)] = (36));

} else {
var statearr_28645_28718 = state_28613__$1;
(statearr_28645_28718[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (13))){
var inst_28504 = (state_28613[(26)]);
var inst_28507 = cljs.core.async.close_BANG_.call(null,inst_28504);
var state_28613__$1 = state_28613;
var statearr_28646_28719 = state_28613__$1;
(statearr_28646_28719[(2)] = inst_28507);

(statearr_28646_28719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (22))){
var inst_28525 = (state_28613[(8)]);
var inst_28528 = cljs.core.async.close_BANG_.call(null,inst_28525);
var state_28613__$1 = state_28613;
var statearr_28647_28720 = state_28613__$1;
(statearr_28647_28720[(2)] = inst_28528);

(statearr_28647_28720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (36))){
var inst_28572 = (state_28613[(25)]);
var inst_28576 = cljs.core.chunk_first.call(null,inst_28572);
var inst_28577 = cljs.core.chunk_rest.call(null,inst_28572);
var inst_28578 = cljs.core.count.call(null,inst_28576);
var inst_28553 = inst_28577;
var inst_28554 = inst_28576;
var inst_28555 = inst_28578;
var inst_28556 = (0);
var state_28613__$1 = (function (){var statearr_28648 = state_28613;
(statearr_28648[(9)] = inst_28554);

(statearr_28648[(20)] = inst_28555);

(statearr_28648[(21)] = inst_28553);

(statearr_28648[(12)] = inst_28556);

return statearr_28648;
})();
var statearr_28649_28721 = state_28613__$1;
(statearr_28649_28721[(2)] = null);

(statearr_28649_28721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (41))){
var inst_28572 = (state_28613[(25)]);
var inst_28588 = (state_28613[(2)]);
var inst_28589 = cljs.core.next.call(null,inst_28572);
var inst_28553 = inst_28589;
var inst_28554 = null;
var inst_28555 = (0);
var inst_28556 = (0);
var state_28613__$1 = (function (){var statearr_28650 = state_28613;
(statearr_28650[(27)] = inst_28588);

(statearr_28650[(9)] = inst_28554);

(statearr_28650[(20)] = inst_28555);

(statearr_28650[(21)] = inst_28553);

(statearr_28650[(12)] = inst_28556);

return statearr_28650;
})();
var statearr_28651_28722 = state_28613__$1;
(statearr_28651_28722[(2)] = null);

(statearr_28651_28722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (43))){
var state_28613__$1 = state_28613;
var statearr_28652_28723 = state_28613__$1;
(statearr_28652_28723[(2)] = null);

(statearr_28652_28723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (29))){
var inst_28597 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28653_28724 = state_28613__$1;
(statearr_28653_28724[(2)] = inst_28597);

(statearr_28653_28724[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (44))){
var inst_28606 = (state_28613[(2)]);
var state_28613__$1 = (function (){var statearr_28654 = state_28613;
(statearr_28654[(28)] = inst_28606);

return statearr_28654;
})();
var statearr_28655_28725 = state_28613__$1;
(statearr_28655_28725[(2)] = null);

(statearr_28655_28725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (6))){
var inst_28545 = (state_28613[(29)]);
var inst_28544 = cljs.core.deref.call(null,cs);
var inst_28545__$1 = cljs.core.keys.call(null,inst_28544);
var inst_28546 = cljs.core.count.call(null,inst_28545__$1);
var inst_28547 = cljs.core.reset_BANG_.call(null,dctr,inst_28546);
var inst_28552 = cljs.core.seq.call(null,inst_28545__$1);
var inst_28553 = inst_28552;
var inst_28554 = null;
var inst_28555 = (0);
var inst_28556 = (0);
var state_28613__$1 = (function (){var statearr_28656 = state_28613;
(statearr_28656[(30)] = inst_28547);

(statearr_28656[(9)] = inst_28554);

(statearr_28656[(29)] = inst_28545__$1);

(statearr_28656[(20)] = inst_28555);

(statearr_28656[(21)] = inst_28553);

(statearr_28656[(12)] = inst_28556);

return statearr_28656;
})();
var statearr_28657_28726 = state_28613__$1;
(statearr_28657_28726[(2)] = null);

(statearr_28657_28726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (28))){
var inst_28553 = (state_28613[(21)]);
var inst_28572 = (state_28613[(25)]);
var inst_28572__$1 = cljs.core.seq.call(null,inst_28553);
var state_28613__$1 = (function (){var statearr_28658 = state_28613;
(statearr_28658[(25)] = inst_28572__$1);

return statearr_28658;
})();
if(inst_28572__$1){
var statearr_28659_28727 = state_28613__$1;
(statearr_28659_28727[(1)] = (33));

} else {
var statearr_28660_28728 = state_28613__$1;
(statearr_28660_28728[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (25))){
var inst_28555 = (state_28613[(20)]);
var inst_28556 = (state_28613[(12)]);
var inst_28558 = (inst_28556 < inst_28555);
var inst_28559 = inst_28558;
var state_28613__$1 = state_28613;
if(cljs.core.truth_(inst_28559)){
var statearr_28661_28729 = state_28613__$1;
(statearr_28661_28729[(1)] = (27));

} else {
var statearr_28662_28730 = state_28613__$1;
(statearr_28662_28730[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (34))){
var state_28613__$1 = state_28613;
var statearr_28663_28731 = state_28613__$1;
(statearr_28663_28731[(2)] = null);

(statearr_28663_28731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (17))){
var state_28613__$1 = state_28613;
var statearr_28664_28732 = state_28613__$1;
(statearr_28664_28732[(2)] = null);

(statearr_28664_28732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (3))){
var inst_28611 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28613__$1,inst_28611);
} else {
if((state_val_28614 === (12))){
var inst_28540 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28665_28733 = state_28613__$1;
(statearr_28665_28733[(2)] = inst_28540);

(statearr_28665_28733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (2))){
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28613__$1,(4),ch);
} else {
if((state_val_28614 === (23))){
var state_28613__$1 = state_28613;
var statearr_28666_28734 = state_28613__$1;
(statearr_28666_28734[(2)] = null);

(statearr_28666_28734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (35))){
var inst_28595 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28667_28735 = state_28613__$1;
(statearr_28667_28735[(2)] = inst_28595);

(statearr_28667_28735[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (19))){
var inst_28514 = (state_28613[(7)]);
var inst_28518 = cljs.core.chunk_first.call(null,inst_28514);
var inst_28519 = cljs.core.chunk_rest.call(null,inst_28514);
var inst_28520 = cljs.core.count.call(null,inst_28518);
var inst_28494 = inst_28519;
var inst_28495 = inst_28518;
var inst_28496 = inst_28520;
var inst_28497 = (0);
var state_28613__$1 = (function (){var statearr_28668 = state_28613;
(statearr_28668[(13)] = inst_28494);

(statearr_28668[(15)] = inst_28495);

(statearr_28668[(16)] = inst_28496);

(statearr_28668[(17)] = inst_28497);

return statearr_28668;
})();
var statearr_28669_28736 = state_28613__$1;
(statearr_28669_28736[(2)] = null);

(statearr_28669_28736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (11))){
var inst_28494 = (state_28613[(13)]);
var inst_28514 = (state_28613[(7)]);
var inst_28514__$1 = cljs.core.seq.call(null,inst_28494);
var state_28613__$1 = (function (){var statearr_28670 = state_28613;
(statearr_28670[(7)] = inst_28514__$1);

return statearr_28670;
})();
if(inst_28514__$1){
var statearr_28671_28737 = state_28613__$1;
(statearr_28671_28737[(1)] = (16));

} else {
var statearr_28672_28738 = state_28613__$1;
(statearr_28672_28738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (9))){
var inst_28542 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28673_28739 = state_28613__$1;
(statearr_28673_28739[(2)] = inst_28542);

(statearr_28673_28739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (5))){
var inst_28492 = cljs.core.deref.call(null,cs);
var inst_28493 = cljs.core.seq.call(null,inst_28492);
var inst_28494 = inst_28493;
var inst_28495 = null;
var inst_28496 = (0);
var inst_28497 = (0);
var state_28613__$1 = (function (){var statearr_28674 = state_28613;
(statearr_28674[(13)] = inst_28494);

(statearr_28674[(15)] = inst_28495);

(statearr_28674[(16)] = inst_28496);

(statearr_28674[(17)] = inst_28497);

return statearr_28674;
})();
var statearr_28675_28740 = state_28613__$1;
(statearr_28675_28740[(2)] = null);

(statearr_28675_28740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (14))){
var state_28613__$1 = state_28613;
var statearr_28676_28741 = state_28613__$1;
(statearr_28676_28741[(2)] = null);

(statearr_28676_28741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (45))){
var inst_28603 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28677_28742 = state_28613__$1;
(statearr_28677_28742[(2)] = inst_28603);

(statearr_28677_28742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (26))){
var inst_28545 = (state_28613[(29)]);
var inst_28599 = (state_28613[(2)]);
var inst_28600 = cljs.core.seq.call(null,inst_28545);
var state_28613__$1 = (function (){var statearr_28678 = state_28613;
(statearr_28678[(31)] = inst_28599);

return statearr_28678;
})();
if(inst_28600){
var statearr_28679_28743 = state_28613__$1;
(statearr_28679_28743[(1)] = (42));

} else {
var statearr_28680_28744 = state_28613__$1;
(statearr_28680_28744[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (16))){
var inst_28514 = (state_28613[(7)]);
var inst_28516 = cljs.core.chunked_seq_QMARK_.call(null,inst_28514);
var state_28613__$1 = state_28613;
if(inst_28516){
var statearr_28681_28745 = state_28613__$1;
(statearr_28681_28745[(1)] = (19));

} else {
var statearr_28682_28746 = state_28613__$1;
(statearr_28682_28746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (38))){
var inst_28592 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28683_28747 = state_28613__$1;
(statearr_28683_28747[(2)] = inst_28592);

(statearr_28683_28747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (30))){
var state_28613__$1 = state_28613;
var statearr_28684_28748 = state_28613__$1;
(statearr_28684_28748[(2)] = null);

(statearr_28684_28748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (10))){
var inst_28495 = (state_28613[(15)]);
var inst_28497 = (state_28613[(17)]);
var inst_28503 = cljs.core._nth.call(null,inst_28495,inst_28497);
var inst_28504 = cljs.core.nth.call(null,inst_28503,(0),null);
var inst_28505 = cljs.core.nth.call(null,inst_28503,(1),null);
var state_28613__$1 = (function (){var statearr_28685 = state_28613;
(statearr_28685[(26)] = inst_28504);

return statearr_28685;
})();
if(cljs.core.truth_(inst_28505)){
var statearr_28686_28749 = state_28613__$1;
(statearr_28686_28749[(1)] = (13));

} else {
var statearr_28687_28750 = state_28613__$1;
(statearr_28687_28750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (18))){
var inst_28538 = (state_28613[(2)]);
var state_28613__$1 = state_28613;
var statearr_28688_28751 = state_28613__$1;
(statearr_28688_28751[(2)] = inst_28538);

(statearr_28688_28751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (42))){
var state_28613__$1 = state_28613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28613__$1,(45),dchan);
} else {
if((state_val_28614 === (37))){
var inst_28485 = (state_28613[(10)]);
var inst_28581 = (state_28613[(23)]);
var inst_28572 = (state_28613[(25)]);
var inst_28581__$1 = cljs.core.first.call(null,inst_28572);
var inst_28582 = cljs.core.async.put_BANG_.call(null,inst_28581__$1,inst_28485,done);
var state_28613__$1 = (function (){var statearr_28689 = state_28613;
(statearr_28689[(23)] = inst_28581__$1);

return statearr_28689;
})();
if(cljs.core.truth_(inst_28582)){
var statearr_28690_28752 = state_28613__$1;
(statearr_28690_28752[(1)] = (39));

} else {
var statearr_28691_28753 = state_28613__$1;
(statearr_28691_28753[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28614 === (8))){
var inst_28496 = (state_28613[(16)]);
var inst_28497 = (state_28613[(17)]);
var inst_28499 = (inst_28497 < inst_28496);
var inst_28500 = inst_28499;
var state_28613__$1 = state_28613;
if(cljs.core.truth_(inst_28500)){
var statearr_28692_28754 = state_28613__$1;
(statearr_28692_28754[(1)] = (10));

} else {
var statearr_28693_28755 = state_28613__$1;
(statearr_28693_28755[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___28701,cs,m,dchan,dctr,done))
;
return ((function (switch__16122__auto__,c__16178__auto___28701,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_28697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28697[(0)] = state_machine__16123__auto__);

(statearr_28697[(1)] = (1));

return statearr_28697;
});
var state_machine__16123__auto____1 = (function (state_28613){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_28613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e28698){if((e28698 instanceof Object)){
var ex__16126__auto__ = e28698;
var statearr_28699_28756 = state_28613;
(statearr_28699_28756[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28757 = state_28613;
state_28613 = G__28757;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_28613){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_28613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___28701,cs,m,dchan,dctr,done))
})();
var state__16180__auto__ = (function (){var statearr_28700 = f__16179__auto__.call(null);
(statearr_28700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___28701);

return statearr_28700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___28701,cs,m,dchan,dctr,done))
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
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28759 = {};
return obj28759;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28760){
var map__28765 = p__28760;
var map__28765__$1 = ((cljs.core.seq_QMARK_.call(null,map__28765))?cljs.core.apply.call(null,cljs.core.hash_map,map__28765):map__28765);
var opts = map__28765__$1;
var statearr_28766_28769 = state;
(statearr_28766_28769[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28765,map__28765__$1,opts){
return (function (val){
var statearr_28767_28770 = state;
(statearr_28767_28770[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28765,map__28765__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28768_28771 = state;
(statearr_28768_28771[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28760 = null;
if (arguments.length > 3) {
var G__28772__i = 0, G__28772__a = new Array(arguments.length -  3);
while (G__28772__i < G__28772__a.length) {G__28772__a[G__28772__i] = arguments[G__28772__i + 3]; ++G__28772__i;}
  p__28760 = new cljs.core.IndexedSeq(G__28772__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28760);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28773){
var state = cljs.core.first(arglist__28773);
arglist__28773 = cljs.core.next(arglist__28773);
var cont_block = cljs.core.first(arglist__28773);
arglist__28773 = cljs.core.next(arglist__28773);
var ports = cljs.core.first(arglist__28773);
var p__28760 = cljs.core.rest(arglist__28773);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28760);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t28893 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28893 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28894){
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
this.meta28894 = meta28894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28893.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28893.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28893.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28893.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28893.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28893.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28893.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28895){
var self__ = this;
var _28895__$1 = this;
return self__.meta28894;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28895,meta28894__$1){
var self__ = this;
var _28895__$1 = this;
return (new cljs.core.async.t28893(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28894__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28893.cljs$lang$type = true;

cljs.core.async.t28893.cljs$lang$ctorStr = "cljs.core.async/t28893";

cljs.core.async.t28893.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t28893");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28893 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28893(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28894){
return (new cljs.core.async.t28893(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28894));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28893(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16178__auto___29012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___29012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___29012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28965){
var state_val_28966 = (state_28965[(1)]);
if((state_val_28966 === (7))){
var inst_28909 = (state_28965[(7)]);
var inst_28914 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28909);
var state_28965__$1 = state_28965;
var statearr_28967_29013 = state_28965__$1;
(statearr_28967_29013[(2)] = inst_28914);

(statearr_28967_29013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (20))){
var inst_28924 = (state_28965[(8)]);
var state_28965__$1 = state_28965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28965__$1,(23),out,inst_28924);
} else {
if((state_val_28966 === (1))){
var inst_28899 = (state_28965[(9)]);
var inst_28899__$1 = calc_state.call(null);
var inst_28900 = cljs.core.seq_QMARK_.call(null,inst_28899__$1);
var state_28965__$1 = (function (){var statearr_28968 = state_28965;
(statearr_28968[(9)] = inst_28899__$1);

return statearr_28968;
})();
if(inst_28900){
var statearr_28969_29014 = state_28965__$1;
(statearr_28969_29014[(1)] = (2));

} else {
var statearr_28970_29015 = state_28965__$1;
(statearr_28970_29015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (24))){
var inst_28917 = (state_28965[(10)]);
var inst_28909 = inst_28917;
var state_28965__$1 = (function (){var statearr_28971 = state_28965;
(statearr_28971[(7)] = inst_28909);

return statearr_28971;
})();
var statearr_28972_29016 = state_28965__$1;
(statearr_28972_29016[(2)] = null);

(statearr_28972_29016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (4))){
var inst_28899 = (state_28965[(9)]);
var inst_28905 = (state_28965[(2)]);
var inst_28906 = cljs.core.get.call(null,inst_28905,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28907 = cljs.core.get.call(null,inst_28905,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28908 = cljs.core.get.call(null,inst_28905,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28909 = inst_28899;
var state_28965__$1 = (function (){var statearr_28973 = state_28965;
(statearr_28973[(11)] = inst_28908);

(statearr_28973[(12)] = inst_28907);

(statearr_28973[(7)] = inst_28909);

(statearr_28973[(13)] = inst_28906);

return statearr_28973;
})();
var statearr_28974_29017 = state_28965__$1;
(statearr_28974_29017[(2)] = null);

(statearr_28974_29017[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (15))){
var state_28965__$1 = state_28965;
var statearr_28975_29018 = state_28965__$1;
(statearr_28975_29018[(2)] = null);

(statearr_28975_29018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (21))){
var inst_28917 = (state_28965[(10)]);
var inst_28909 = inst_28917;
var state_28965__$1 = (function (){var statearr_28976 = state_28965;
(statearr_28976[(7)] = inst_28909);

return statearr_28976;
})();
var statearr_28977_29019 = state_28965__$1;
(statearr_28977_29019[(2)] = null);

(statearr_28977_29019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (13))){
var inst_28961 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
var statearr_28978_29020 = state_28965__$1;
(statearr_28978_29020[(2)] = inst_28961);

(statearr_28978_29020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (22))){
var inst_28959 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
var statearr_28979_29021 = state_28965__$1;
(statearr_28979_29021[(2)] = inst_28959);

(statearr_28979_29021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (6))){
var inst_28963 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28965__$1,inst_28963);
} else {
if((state_val_28966 === (25))){
var state_28965__$1 = state_28965;
var statearr_28980_29022 = state_28965__$1;
(statearr_28980_29022[(2)] = null);

(statearr_28980_29022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (17))){
var inst_28939 = (state_28965[(14)]);
var state_28965__$1 = state_28965;
var statearr_28981_29023 = state_28965__$1;
(statearr_28981_29023[(2)] = inst_28939);

(statearr_28981_29023[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (3))){
var inst_28899 = (state_28965[(9)]);
var state_28965__$1 = state_28965;
var statearr_28982_29024 = state_28965__$1;
(statearr_28982_29024[(2)] = inst_28899);

(statearr_28982_29024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (12))){
var inst_28920 = (state_28965[(15)]);
var inst_28925 = (state_28965[(16)]);
var inst_28939 = (state_28965[(14)]);
var inst_28939__$1 = inst_28920.call(null,inst_28925);
var state_28965__$1 = (function (){var statearr_28983 = state_28965;
(statearr_28983[(14)] = inst_28939__$1);

return statearr_28983;
})();
if(cljs.core.truth_(inst_28939__$1)){
var statearr_28984_29025 = state_28965__$1;
(statearr_28984_29025[(1)] = (17));

} else {
var statearr_28985_29026 = state_28965__$1;
(statearr_28985_29026[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (2))){
var inst_28899 = (state_28965[(9)]);
var inst_28902 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28899);
var state_28965__$1 = state_28965;
var statearr_28986_29027 = state_28965__$1;
(statearr_28986_29027[(2)] = inst_28902);

(statearr_28986_29027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (23))){
var inst_28950 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
if(cljs.core.truth_(inst_28950)){
var statearr_28987_29028 = state_28965__$1;
(statearr_28987_29028[(1)] = (24));

} else {
var statearr_28988_29029 = state_28965__$1;
(statearr_28988_29029[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (19))){
var inst_28947 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
if(cljs.core.truth_(inst_28947)){
var statearr_28989_29030 = state_28965__$1;
(statearr_28989_29030[(1)] = (20));

} else {
var statearr_28990_29031 = state_28965__$1;
(statearr_28990_29031[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (11))){
var inst_28924 = (state_28965[(8)]);
var inst_28930 = (inst_28924 == null);
var state_28965__$1 = state_28965;
if(cljs.core.truth_(inst_28930)){
var statearr_28991_29032 = state_28965__$1;
(statearr_28991_29032[(1)] = (14));

} else {
var statearr_28992_29033 = state_28965__$1;
(statearr_28992_29033[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (9))){
var inst_28917 = (state_28965[(10)]);
var inst_28917__$1 = (state_28965[(2)]);
var inst_28918 = cljs.core.get.call(null,inst_28917__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28919 = cljs.core.get.call(null,inst_28917__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28920 = cljs.core.get.call(null,inst_28917__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28965__$1 = (function (){var statearr_28993 = state_28965;
(statearr_28993[(15)] = inst_28920);

(statearr_28993[(17)] = inst_28919);

(statearr_28993[(10)] = inst_28917__$1);

return statearr_28993;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28965__$1,(10),inst_28918);
} else {
if((state_val_28966 === (5))){
var inst_28909 = (state_28965[(7)]);
var inst_28912 = cljs.core.seq_QMARK_.call(null,inst_28909);
var state_28965__$1 = state_28965;
if(inst_28912){
var statearr_28994_29034 = state_28965__$1;
(statearr_28994_29034[(1)] = (7));

} else {
var statearr_28995_29035 = state_28965__$1;
(statearr_28995_29035[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (14))){
var inst_28925 = (state_28965[(16)]);
var inst_28932 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28925);
var state_28965__$1 = state_28965;
var statearr_28996_29036 = state_28965__$1;
(statearr_28996_29036[(2)] = inst_28932);

(statearr_28996_29036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (26))){
var inst_28955 = (state_28965[(2)]);
var state_28965__$1 = state_28965;
var statearr_28997_29037 = state_28965__$1;
(statearr_28997_29037[(2)] = inst_28955);

(statearr_28997_29037[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (16))){
var inst_28935 = (state_28965[(2)]);
var inst_28936 = calc_state.call(null);
var inst_28909 = inst_28936;
var state_28965__$1 = (function (){var statearr_28998 = state_28965;
(statearr_28998[(18)] = inst_28935);

(statearr_28998[(7)] = inst_28909);

return statearr_28998;
})();
var statearr_28999_29038 = state_28965__$1;
(statearr_28999_29038[(2)] = null);

(statearr_28999_29038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (10))){
var inst_28924 = (state_28965[(8)]);
var inst_28925 = (state_28965[(16)]);
var inst_28923 = (state_28965[(2)]);
var inst_28924__$1 = cljs.core.nth.call(null,inst_28923,(0),null);
var inst_28925__$1 = cljs.core.nth.call(null,inst_28923,(1),null);
var inst_28926 = (inst_28924__$1 == null);
var inst_28927 = cljs.core._EQ_.call(null,inst_28925__$1,change);
var inst_28928 = (inst_28926) || (inst_28927);
var state_28965__$1 = (function (){var statearr_29000 = state_28965;
(statearr_29000[(8)] = inst_28924__$1);

(statearr_29000[(16)] = inst_28925__$1);

return statearr_29000;
})();
if(cljs.core.truth_(inst_28928)){
var statearr_29001_29039 = state_28965__$1;
(statearr_29001_29039[(1)] = (11));

} else {
var statearr_29002_29040 = state_28965__$1;
(statearr_29002_29040[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (18))){
var inst_28920 = (state_28965[(15)]);
var inst_28925 = (state_28965[(16)]);
var inst_28919 = (state_28965[(17)]);
var inst_28942 = cljs.core.empty_QMARK_.call(null,inst_28920);
var inst_28943 = inst_28919.call(null,inst_28925);
var inst_28944 = cljs.core.not.call(null,inst_28943);
var inst_28945 = (inst_28942) && (inst_28944);
var state_28965__$1 = state_28965;
var statearr_29003_29041 = state_28965__$1;
(statearr_29003_29041[(2)] = inst_28945);

(statearr_29003_29041[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28966 === (8))){
var inst_28909 = (state_28965[(7)]);
var state_28965__$1 = state_28965;
var statearr_29004_29042 = state_28965__$1;
(statearr_29004_29042[(2)] = inst_28909);

(statearr_29004_29042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___29012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16122__auto__,c__16178__auto___29012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_29008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29008[(0)] = state_machine__16123__auto__);

(statearr_29008[(1)] = (1));

return statearr_29008;
});
var state_machine__16123__auto____1 = (function (state_28965){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_28965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e29009){if((e29009 instanceof Object)){
var ex__16126__auto__ = e29009;
var statearr_29010_29043 = state_28965;
(statearr_29010_29043[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29044 = state_28965;
state_28965 = G__29044;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_28965){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_28965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___29012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16180__auto__ = (function (){var statearr_29011 = f__16179__auto__.call(null);
(statearr_29011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___29012);

return statearr_29011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___29012,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29046 = {};
return obj29046;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12761__auto__ = p;
if(and__12761__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12761__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13417__auto__ = (((p == null))?null:p);
return (function (){var or__12773__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12761__auto__ = p;
if(and__12761__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12761__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13417__auto__ = (((p == null))?null:p);
return (function (){var or__12773__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12761__auto__ = p;
if(and__12761__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12761__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13417__auto__ = (((p == null))?null:p);
return (function (){var or__12773__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12761__auto__ = p;
if(and__12761__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13417__auto__ = (((p == null))?null:p);
return (function (){var or__12773__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12773__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12773__auto__,mults){
return (function (p1__29047_SHARP_){
if(cljs.core.truth_(p1__29047_SHARP_.call(null,topic))){
return p1__29047_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29047_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12773__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29170 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29170 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29171){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29171 = meta29171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29170.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29170.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29170.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29170.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29172){
var self__ = this;
var _29172__$1 = this;
return self__.meta29171;
});})(mults,ensure_mult))
;

cljs.core.async.t29170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29172,meta29171__$1){
var self__ = this;
var _29172__$1 = this;
return (new cljs.core.async.t29170(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29171__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29170.cljs$lang$type = true;

cljs.core.async.t29170.cljs$lang$ctorStr = "cljs.core.async/t29170";

cljs.core.async.t29170.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29170");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29170 = ((function (mults,ensure_mult){
return (function __GT_t29170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29171){
return (new cljs.core.async.t29170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29171));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29170(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16178__auto___29292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___29292,mults,ensure_mult,p){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___29292,mults,ensure_mult,p){
return (function (state_29244){
var state_val_29245 = (state_29244[(1)]);
if((state_val_29245 === (7))){
var inst_29240 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29246_29293 = state_29244__$1;
(statearr_29246_29293[(2)] = inst_29240);

(statearr_29246_29293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (20))){
var state_29244__$1 = state_29244;
var statearr_29247_29294 = state_29244__$1;
(statearr_29247_29294[(2)] = null);

(statearr_29247_29294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (1))){
var state_29244__$1 = state_29244;
var statearr_29248_29295 = state_29244__$1;
(statearr_29248_29295[(2)] = null);

(statearr_29248_29295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (24))){
var inst_29223 = (state_29244[(7)]);
var inst_29232 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29223);
var state_29244__$1 = state_29244;
var statearr_29249_29296 = state_29244__$1;
(statearr_29249_29296[(2)] = inst_29232);

(statearr_29249_29296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (4))){
var inst_29175 = (state_29244[(8)]);
var inst_29175__$1 = (state_29244[(2)]);
var inst_29176 = (inst_29175__$1 == null);
var state_29244__$1 = (function (){var statearr_29250 = state_29244;
(statearr_29250[(8)] = inst_29175__$1);

return statearr_29250;
})();
if(cljs.core.truth_(inst_29176)){
var statearr_29251_29297 = state_29244__$1;
(statearr_29251_29297[(1)] = (5));

} else {
var statearr_29252_29298 = state_29244__$1;
(statearr_29252_29298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (15))){
var inst_29217 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29253_29299 = state_29244__$1;
(statearr_29253_29299[(2)] = inst_29217);

(statearr_29253_29299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (21))){
var inst_29237 = (state_29244[(2)]);
var state_29244__$1 = (function (){var statearr_29254 = state_29244;
(statearr_29254[(9)] = inst_29237);

return statearr_29254;
})();
var statearr_29255_29300 = state_29244__$1;
(statearr_29255_29300[(2)] = null);

(statearr_29255_29300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (13))){
var inst_29199 = (state_29244[(10)]);
var inst_29201 = cljs.core.chunked_seq_QMARK_.call(null,inst_29199);
var state_29244__$1 = state_29244;
if(inst_29201){
var statearr_29256_29301 = state_29244__$1;
(statearr_29256_29301[(1)] = (16));

} else {
var statearr_29257_29302 = state_29244__$1;
(statearr_29257_29302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (22))){
var inst_29229 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29229)){
var statearr_29258_29303 = state_29244__$1;
(statearr_29258_29303[(1)] = (23));

} else {
var statearr_29259_29304 = state_29244__$1;
(statearr_29259_29304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (6))){
var inst_29223 = (state_29244[(7)]);
var inst_29225 = (state_29244[(11)]);
var inst_29175 = (state_29244[(8)]);
var inst_29223__$1 = topic_fn.call(null,inst_29175);
var inst_29224 = cljs.core.deref.call(null,mults);
var inst_29225__$1 = cljs.core.get.call(null,inst_29224,inst_29223__$1);
var state_29244__$1 = (function (){var statearr_29260 = state_29244;
(statearr_29260[(7)] = inst_29223__$1);

(statearr_29260[(11)] = inst_29225__$1);

return statearr_29260;
})();
if(cljs.core.truth_(inst_29225__$1)){
var statearr_29261_29305 = state_29244__$1;
(statearr_29261_29305[(1)] = (19));

} else {
var statearr_29262_29306 = state_29244__$1;
(statearr_29262_29306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (25))){
var inst_29234 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29263_29307 = state_29244__$1;
(statearr_29263_29307[(2)] = inst_29234);

(statearr_29263_29307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (17))){
var inst_29199 = (state_29244[(10)]);
var inst_29208 = cljs.core.first.call(null,inst_29199);
var inst_29209 = cljs.core.async.muxch_STAR_.call(null,inst_29208);
var inst_29210 = cljs.core.async.close_BANG_.call(null,inst_29209);
var inst_29211 = cljs.core.next.call(null,inst_29199);
var inst_29185 = inst_29211;
var inst_29186 = null;
var inst_29187 = (0);
var inst_29188 = (0);
var state_29244__$1 = (function (){var statearr_29264 = state_29244;
(statearr_29264[(12)] = inst_29188);

(statearr_29264[(13)] = inst_29187);

(statearr_29264[(14)] = inst_29186);

(statearr_29264[(15)] = inst_29185);

(statearr_29264[(16)] = inst_29210);

return statearr_29264;
})();
var statearr_29265_29308 = state_29244__$1;
(statearr_29265_29308[(2)] = null);

(statearr_29265_29308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (3))){
var inst_29242 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29244__$1,inst_29242);
} else {
if((state_val_29245 === (12))){
var inst_29219 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29266_29309 = state_29244__$1;
(statearr_29266_29309[(2)] = inst_29219);

(statearr_29266_29309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (2))){
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29244__$1,(4),ch);
} else {
if((state_val_29245 === (23))){
var state_29244__$1 = state_29244;
var statearr_29267_29310 = state_29244__$1;
(statearr_29267_29310[(2)] = null);

(statearr_29267_29310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (19))){
var inst_29225 = (state_29244[(11)]);
var inst_29175 = (state_29244[(8)]);
var inst_29227 = cljs.core.async.muxch_STAR_.call(null,inst_29225);
var state_29244__$1 = state_29244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29244__$1,(22),inst_29227,inst_29175);
} else {
if((state_val_29245 === (11))){
var inst_29199 = (state_29244[(10)]);
var inst_29185 = (state_29244[(15)]);
var inst_29199__$1 = cljs.core.seq.call(null,inst_29185);
var state_29244__$1 = (function (){var statearr_29268 = state_29244;
(statearr_29268[(10)] = inst_29199__$1);

return statearr_29268;
})();
if(inst_29199__$1){
var statearr_29269_29311 = state_29244__$1;
(statearr_29269_29311[(1)] = (13));

} else {
var statearr_29270_29312 = state_29244__$1;
(statearr_29270_29312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (9))){
var inst_29221 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29271_29313 = state_29244__$1;
(statearr_29271_29313[(2)] = inst_29221);

(statearr_29271_29313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (5))){
var inst_29182 = cljs.core.deref.call(null,mults);
var inst_29183 = cljs.core.vals.call(null,inst_29182);
var inst_29184 = cljs.core.seq.call(null,inst_29183);
var inst_29185 = inst_29184;
var inst_29186 = null;
var inst_29187 = (0);
var inst_29188 = (0);
var state_29244__$1 = (function (){var statearr_29272 = state_29244;
(statearr_29272[(12)] = inst_29188);

(statearr_29272[(13)] = inst_29187);

(statearr_29272[(14)] = inst_29186);

(statearr_29272[(15)] = inst_29185);

return statearr_29272;
})();
var statearr_29273_29314 = state_29244__$1;
(statearr_29273_29314[(2)] = null);

(statearr_29273_29314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (14))){
var state_29244__$1 = state_29244;
var statearr_29277_29315 = state_29244__$1;
(statearr_29277_29315[(2)] = null);

(statearr_29277_29315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (16))){
var inst_29199 = (state_29244[(10)]);
var inst_29203 = cljs.core.chunk_first.call(null,inst_29199);
var inst_29204 = cljs.core.chunk_rest.call(null,inst_29199);
var inst_29205 = cljs.core.count.call(null,inst_29203);
var inst_29185 = inst_29204;
var inst_29186 = inst_29203;
var inst_29187 = inst_29205;
var inst_29188 = (0);
var state_29244__$1 = (function (){var statearr_29278 = state_29244;
(statearr_29278[(12)] = inst_29188);

(statearr_29278[(13)] = inst_29187);

(statearr_29278[(14)] = inst_29186);

(statearr_29278[(15)] = inst_29185);

return statearr_29278;
})();
var statearr_29279_29316 = state_29244__$1;
(statearr_29279_29316[(2)] = null);

(statearr_29279_29316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (10))){
var inst_29188 = (state_29244[(12)]);
var inst_29187 = (state_29244[(13)]);
var inst_29186 = (state_29244[(14)]);
var inst_29185 = (state_29244[(15)]);
var inst_29193 = cljs.core._nth.call(null,inst_29186,inst_29188);
var inst_29194 = cljs.core.async.muxch_STAR_.call(null,inst_29193);
var inst_29195 = cljs.core.async.close_BANG_.call(null,inst_29194);
var inst_29196 = (inst_29188 + (1));
var tmp29274 = inst_29187;
var tmp29275 = inst_29186;
var tmp29276 = inst_29185;
var inst_29185__$1 = tmp29276;
var inst_29186__$1 = tmp29275;
var inst_29187__$1 = tmp29274;
var inst_29188__$1 = inst_29196;
var state_29244__$1 = (function (){var statearr_29280 = state_29244;
(statearr_29280[(12)] = inst_29188__$1);

(statearr_29280[(13)] = inst_29187__$1);

(statearr_29280[(17)] = inst_29195);

(statearr_29280[(14)] = inst_29186__$1);

(statearr_29280[(15)] = inst_29185__$1);

return statearr_29280;
})();
var statearr_29281_29317 = state_29244__$1;
(statearr_29281_29317[(2)] = null);

(statearr_29281_29317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (18))){
var inst_29214 = (state_29244[(2)]);
var state_29244__$1 = state_29244;
var statearr_29282_29318 = state_29244__$1;
(statearr_29282_29318[(2)] = inst_29214);

(statearr_29282_29318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29245 === (8))){
var inst_29188 = (state_29244[(12)]);
var inst_29187 = (state_29244[(13)]);
var inst_29190 = (inst_29188 < inst_29187);
var inst_29191 = inst_29190;
var state_29244__$1 = state_29244;
if(cljs.core.truth_(inst_29191)){
var statearr_29283_29319 = state_29244__$1;
(statearr_29283_29319[(1)] = (10));

} else {
var statearr_29284_29320 = state_29244__$1;
(statearr_29284_29320[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___29292,mults,ensure_mult,p))
;
return ((function (switch__16122__auto__,c__16178__auto___29292,mults,ensure_mult,p){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_29288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29288[(0)] = state_machine__16123__auto__);

(statearr_29288[(1)] = (1));

return statearr_29288;
});
var state_machine__16123__auto____1 = (function (state_29244){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_29244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e29289){if((e29289 instanceof Object)){
var ex__16126__auto__ = e29289;
var statearr_29290_29321 = state_29244;
(statearr_29290_29321[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29322 = state_29244;
state_29244 = G__29322;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_29244){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_29244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___29292,mults,ensure_mult,p))
})();
var state__16180__auto__ = (function (){var statearr_29291 = f__16179__auto__.call(null);
(statearr_29291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___29292);

return statearr_29291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___29292,mults,ensure_mult,p))
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
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16178__auto___29459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___29459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___29459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29429){
var state_val_29430 = (state_29429[(1)]);
if((state_val_29430 === (7))){
var state_29429__$1 = state_29429;
var statearr_29431_29460 = state_29429__$1;
(statearr_29431_29460[(2)] = null);

(statearr_29431_29460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (1))){
var state_29429__$1 = state_29429;
var statearr_29432_29461 = state_29429__$1;
(statearr_29432_29461[(2)] = null);

(statearr_29432_29461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (4))){
var inst_29393 = (state_29429[(7)]);
var inst_29395 = (inst_29393 < cnt);
var state_29429__$1 = state_29429;
if(cljs.core.truth_(inst_29395)){
var statearr_29433_29462 = state_29429__$1;
(statearr_29433_29462[(1)] = (6));

} else {
var statearr_29434_29463 = state_29429__$1;
(statearr_29434_29463[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (15))){
var inst_29425 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29435_29464 = state_29429__$1;
(statearr_29435_29464[(2)] = inst_29425);

(statearr_29435_29464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (13))){
var inst_29418 = cljs.core.async.close_BANG_.call(null,out);
var state_29429__$1 = state_29429;
var statearr_29436_29465 = state_29429__$1;
(statearr_29436_29465[(2)] = inst_29418);

(statearr_29436_29465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (6))){
var state_29429__$1 = state_29429;
var statearr_29437_29466 = state_29429__$1;
(statearr_29437_29466[(2)] = null);

(statearr_29437_29466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (3))){
var inst_29427 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29429__$1,inst_29427);
} else {
if((state_val_29430 === (12))){
var inst_29415 = (state_29429[(8)]);
var inst_29415__$1 = (state_29429[(2)]);
var inst_29416 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29415__$1);
var state_29429__$1 = (function (){var statearr_29438 = state_29429;
(statearr_29438[(8)] = inst_29415__$1);

return statearr_29438;
})();
if(cljs.core.truth_(inst_29416)){
var statearr_29439_29467 = state_29429__$1;
(statearr_29439_29467[(1)] = (13));

} else {
var statearr_29440_29468 = state_29429__$1;
(statearr_29440_29468[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (2))){
var inst_29392 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29393 = (0);
var state_29429__$1 = (function (){var statearr_29441 = state_29429;
(statearr_29441[(7)] = inst_29393);

(statearr_29441[(9)] = inst_29392);

return statearr_29441;
})();
var statearr_29442_29469 = state_29429__$1;
(statearr_29442_29469[(2)] = null);

(statearr_29442_29469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (11))){
var inst_29393 = (state_29429[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29429,(10),Object,null,(9));
var inst_29402 = chs__$1.call(null,inst_29393);
var inst_29403 = done.call(null,inst_29393);
var inst_29404 = cljs.core.async.take_BANG_.call(null,inst_29402,inst_29403);
var state_29429__$1 = state_29429;
var statearr_29443_29470 = state_29429__$1;
(statearr_29443_29470[(2)] = inst_29404);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29429__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (9))){
var inst_29393 = (state_29429[(7)]);
var inst_29406 = (state_29429[(2)]);
var inst_29407 = (inst_29393 + (1));
var inst_29393__$1 = inst_29407;
var state_29429__$1 = (function (){var statearr_29444 = state_29429;
(statearr_29444[(7)] = inst_29393__$1);

(statearr_29444[(10)] = inst_29406);

return statearr_29444;
})();
var statearr_29445_29471 = state_29429__$1;
(statearr_29445_29471[(2)] = null);

(statearr_29445_29471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (5))){
var inst_29413 = (state_29429[(2)]);
var state_29429__$1 = (function (){var statearr_29446 = state_29429;
(statearr_29446[(11)] = inst_29413);

return statearr_29446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29429__$1,(12),dchan);
} else {
if((state_val_29430 === (14))){
var inst_29415 = (state_29429[(8)]);
var inst_29420 = cljs.core.apply.call(null,f,inst_29415);
var state_29429__$1 = state_29429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29429__$1,(16),out,inst_29420);
} else {
if((state_val_29430 === (16))){
var inst_29422 = (state_29429[(2)]);
var state_29429__$1 = (function (){var statearr_29447 = state_29429;
(statearr_29447[(12)] = inst_29422);

return statearr_29447;
})();
var statearr_29448_29472 = state_29429__$1;
(statearr_29448_29472[(2)] = null);

(statearr_29448_29472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (10))){
var inst_29397 = (state_29429[(2)]);
var inst_29398 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29429__$1 = (function (){var statearr_29449 = state_29429;
(statearr_29449[(13)] = inst_29397);

return statearr_29449;
})();
var statearr_29450_29473 = state_29429__$1;
(statearr_29450_29473[(2)] = inst_29398);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29429__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29430 === (8))){
var inst_29411 = (state_29429[(2)]);
var state_29429__$1 = state_29429;
var statearr_29451_29474 = state_29429__$1;
(statearr_29451_29474[(2)] = inst_29411);

(statearr_29451_29474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___29459,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16122__auto__,c__16178__auto___29459,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_29455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29455[(0)] = state_machine__16123__auto__);

(statearr_29455[(1)] = (1));

return statearr_29455;
});
var state_machine__16123__auto____1 = (function (state_29429){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_29429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e29456){if((e29456 instanceof Object)){
var ex__16126__auto__ = e29456;
var statearr_29457_29475 = state_29429;
(statearr_29457_29475[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29476 = state_29429;
state_29429 = G__29476;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_29429){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_29429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___29459,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16180__auto__ = (function (){var statearr_29458 = f__16179__auto__.call(null);
(statearr_29458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___29459);

return statearr_29458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___29459,chs__$1,out,cnt,rets,dchan,dctr,done))
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
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16178__auto___29584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___29584,out){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___29584,out){
return (function (state_29560){
var state_val_29561 = (state_29560[(1)]);
if((state_val_29561 === (7))){
var inst_29539 = (state_29560[(7)]);
var inst_29540 = (state_29560[(8)]);
var inst_29539__$1 = (state_29560[(2)]);
var inst_29540__$1 = cljs.core.nth.call(null,inst_29539__$1,(0),null);
var inst_29541 = cljs.core.nth.call(null,inst_29539__$1,(1),null);
var inst_29542 = (inst_29540__$1 == null);
var state_29560__$1 = (function (){var statearr_29562 = state_29560;
(statearr_29562[(7)] = inst_29539__$1);

(statearr_29562[(8)] = inst_29540__$1);

(statearr_29562[(9)] = inst_29541);

return statearr_29562;
})();
if(cljs.core.truth_(inst_29542)){
var statearr_29563_29585 = state_29560__$1;
(statearr_29563_29585[(1)] = (8));

} else {
var statearr_29564_29586 = state_29560__$1;
(statearr_29564_29586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (1))){
var inst_29531 = cljs.core.vec.call(null,chs);
var inst_29532 = inst_29531;
var state_29560__$1 = (function (){var statearr_29565 = state_29560;
(statearr_29565[(10)] = inst_29532);

return statearr_29565;
})();
var statearr_29566_29587 = state_29560__$1;
(statearr_29566_29587[(2)] = null);

(statearr_29566_29587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (4))){
var inst_29532 = (state_29560[(10)]);
var state_29560__$1 = state_29560;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29560__$1,(7),inst_29532);
} else {
if((state_val_29561 === (6))){
var inst_29556 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
var statearr_29567_29588 = state_29560__$1;
(statearr_29567_29588[(2)] = inst_29556);

(statearr_29567_29588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (3))){
var inst_29558 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29560__$1,inst_29558);
} else {
if((state_val_29561 === (2))){
var inst_29532 = (state_29560[(10)]);
var inst_29534 = cljs.core.count.call(null,inst_29532);
var inst_29535 = (inst_29534 > (0));
var state_29560__$1 = state_29560;
if(cljs.core.truth_(inst_29535)){
var statearr_29569_29589 = state_29560__$1;
(statearr_29569_29589[(1)] = (4));

} else {
var statearr_29570_29590 = state_29560__$1;
(statearr_29570_29590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (11))){
var inst_29532 = (state_29560[(10)]);
var inst_29549 = (state_29560[(2)]);
var tmp29568 = inst_29532;
var inst_29532__$1 = tmp29568;
var state_29560__$1 = (function (){var statearr_29571 = state_29560;
(statearr_29571[(11)] = inst_29549);

(statearr_29571[(10)] = inst_29532__$1);

return statearr_29571;
})();
var statearr_29572_29591 = state_29560__$1;
(statearr_29572_29591[(2)] = null);

(statearr_29572_29591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (9))){
var inst_29540 = (state_29560[(8)]);
var state_29560__$1 = state_29560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29560__$1,(11),out,inst_29540);
} else {
if((state_val_29561 === (5))){
var inst_29554 = cljs.core.async.close_BANG_.call(null,out);
var state_29560__$1 = state_29560;
var statearr_29573_29592 = state_29560__$1;
(statearr_29573_29592[(2)] = inst_29554);

(statearr_29573_29592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (10))){
var inst_29552 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
var statearr_29574_29593 = state_29560__$1;
(statearr_29574_29593[(2)] = inst_29552);

(statearr_29574_29593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (8))){
var inst_29539 = (state_29560[(7)]);
var inst_29532 = (state_29560[(10)]);
var inst_29540 = (state_29560[(8)]);
var inst_29541 = (state_29560[(9)]);
var inst_29544 = (function (){var c = inst_29541;
var v = inst_29540;
var vec__29537 = inst_29539;
var cs = inst_29532;
return ((function (c,v,vec__29537,cs,inst_29539,inst_29532,inst_29540,inst_29541,state_val_29561,c__16178__auto___29584,out){
return (function (p1__29477_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29477_SHARP_);
});
;})(c,v,vec__29537,cs,inst_29539,inst_29532,inst_29540,inst_29541,state_val_29561,c__16178__auto___29584,out))
})();
var inst_29545 = cljs.core.filterv.call(null,inst_29544,inst_29532);
var inst_29532__$1 = inst_29545;
var state_29560__$1 = (function (){var statearr_29575 = state_29560;
(statearr_29575[(10)] = inst_29532__$1);

return statearr_29575;
})();
var statearr_29576_29594 = state_29560__$1;
(statearr_29576_29594[(2)] = null);

(statearr_29576_29594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___29584,out))
;
return ((function (switch__16122__auto__,c__16178__auto___29584,out){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_29580 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29580[(0)] = state_machine__16123__auto__);

(statearr_29580[(1)] = (1));

return statearr_29580;
});
var state_machine__16123__auto____1 = (function (state_29560){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_29560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e29581){if((e29581 instanceof Object)){
var ex__16126__auto__ = e29581;
var statearr_29582_29595 = state_29560;
(statearr_29582_29595[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29596 = state_29560;
state_29560 = G__29596;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_29560){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_29560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___29584,out))
})();
var state__16180__auto__ = (function (){var statearr_29583 = f__16179__auto__.call(null);
(statearr_29583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___29584);

return statearr_29583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___29584,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
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
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16178__auto___29689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___29689,out){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___29689,out){
return (function (state_29666){
var state_val_29667 = (state_29666[(1)]);
if((state_val_29667 === (7))){
var inst_29648 = (state_29666[(7)]);
var inst_29648__$1 = (state_29666[(2)]);
var inst_29649 = (inst_29648__$1 == null);
var inst_29650 = cljs.core.not.call(null,inst_29649);
var state_29666__$1 = (function (){var statearr_29668 = state_29666;
(statearr_29668[(7)] = inst_29648__$1);

return statearr_29668;
})();
if(inst_29650){
var statearr_29669_29690 = state_29666__$1;
(statearr_29669_29690[(1)] = (8));

} else {
var statearr_29670_29691 = state_29666__$1;
(statearr_29670_29691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (1))){
var inst_29643 = (0);
var state_29666__$1 = (function (){var statearr_29671 = state_29666;
(statearr_29671[(8)] = inst_29643);

return statearr_29671;
})();
var statearr_29672_29692 = state_29666__$1;
(statearr_29672_29692[(2)] = null);

(statearr_29672_29692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (4))){
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29666__$1,(7),ch);
} else {
if((state_val_29667 === (6))){
var inst_29661 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29673_29693 = state_29666__$1;
(statearr_29673_29693[(2)] = inst_29661);

(statearr_29673_29693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (3))){
var inst_29663 = (state_29666[(2)]);
var inst_29664 = cljs.core.async.close_BANG_.call(null,out);
var state_29666__$1 = (function (){var statearr_29674 = state_29666;
(statearr_29674[(9)] = inst_29663);

return statearr_29674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29666__$1,inst_29664);
} else {
if((state_val_29667 === (2))){
var inst_29643 = (state_29666[(8)]);
var inst_29645 = (inst_29643 < n);
var state_29666__$1 = state_29666;
if(cljs.core.truth_(inst_29645)){
var statearr_29675_29694 = state_29666__$1;
(statearr_29675_29694[(1)] = (4));

} else {
var statearr_29676_29695 = state_29666__$1;
(statearr_29676_29695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (11))){
var inst_29643 = (state_29666[(8)]);
var inst_29653 = (state_29666[(2)]);
var inst_29654 = (inst_29643 + (1));
var inst_29643__$1 = inst_29654;
var state_29666__$1 = (function (){var statearr_29677 = state_29666;
(statearr_29677[(10)] = inst_29653);

(statearr_29677[(8)] = inst_29643__$1);

return statearr_29677;
})();
var statearr_29678_29696 = state_29666__$1;
(statearr_29678_29696[(2)] = null);

(statearr_29678_29696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (9))){
var state_29666__$1 = state_29666;
var statearr_29679_29697 = state_29666__$1;
(statearr_29679_29697[(2)] = null);

(statearr_29679_29697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (5))){
var state_29666__$1 = state_29666;
var statearr_29680_29698 = state_29666__$1;
(statearr_29680_29698[(2)] = null);

(statearr_29680_29698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (10))){
var inst_29658 = (state_29666[(2)]);
var state_29666__$1 = state_29666;
var statearr_29681_29699 = state_29666__$1;
(statearr_29681_29699[(2)] = inst_29658);

(statearr_29681_29699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29667 === (8))){
var inst_29648 = (state_29666[(7)]);
var state_29666__$1 = state_29666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29666__$1,(11),out,inst_29648);
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
});})(c__16178__auto___29689,out))
;
return ((function (switch__16122__auto__,c__16178__auto___29689,out){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_29685 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29685[(0)] = state_machine__16123__auto__);

(statearr_29685[(1)] = (1));

return statearr_29685;
});
var state_machine__16123__auto____1 = (function (state_29666){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_29666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e29686){if((e29686 instanceof Object)){
var ex__16126__auto__ = e29686;
var statearr_29687_29700 = state_29666;
(statearr_29687_29700[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29701 = state_29666;
state_29666 = G__29701;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_29666){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_29666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___29689,out))
})();
var state__16180__auto__ = (function (){var statearr_29688 = f__16179__auto__.call(null);
(statearr_29688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___29689);

return statearr_29688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___29689,out))
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
if(typeof cljs.core.async.t29709 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29709 = (function (ch,f,map_LT_,meta29710){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29710 = meta29710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29709.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29709.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29709.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29709.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29712 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29712 = (function (fn1,_,meta29710,map_LT_,f,ch,meta29713){
this.fn1 = fn1;
this._ = _;
this.meta29710 = meta29710;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29713 = meta29713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29712.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29702_SHARP_){
return f1.call(null,(((p1__29702_SHARP_ == null))?null:self__.f.call(null,p1__29702_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29714){
var self__ = this;
var _29714__$1 = this;
return self__.meta29713;
});})(___$1))
;

cljs.core.async.t29712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29714,meta29713__$1){
var self__ = this;
var _29714__$1 = this;
return (new cljs.core.async.t29712(self__.fn1,self__._,self__.meta29710,self__.map_LT_,self__.f,self__.ch,meta29713__$1));
});})(___$1))
;

cljs.core.async.t29712.cljs$lang$type = true;

cljs.core.async.t29712.cljs$lang$ctorStr = "cljs.core.async/t29712";

cljs.core.async.t29712.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29712");
});})(___$1))
;

cljs.core.async.__GT_t29712 = ((function (___$1){
return (function __GT_t29712(fn1__$1,___$2,meta29710__$1,map_LT___$1,f__$1,ch__$1,meta29713){
return (new cljs.core.async.t29712(fn1__$1,___$2,meta29710__$1,map_LT___$1,f__$1,ch__$1,meta29713));
});})(___$1))
;

}

return (new cljs.core.async.t29712(fn1,___$1,self__.meta29710,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__12761__auto__ = ret;
if(cljs.core.truth_(and__12761__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12761__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29709.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29709.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29709.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29711){
var self__ = this;
var _29711__$1 = this;
return self__.meta29710;
});

cljs.core.async.t29709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29711,meta29710__$1){
var self__ = this;
var _29711__$1 = this;
return (new cljs.core.async.t29709(self__.ch,self__.f,self__.map_LT_,meta29710__$1));
});

cljs.core.async.t29709.cljs$lang$type = true;

cljs.core.async.t29709.cljs$lang$ctorStr = "cljs.core.async/t29709";

cljs.core.async.t29709.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29709");
});

cljs.core.async.__GT_t29709 = (function __GT_t29709(ch__$1,f__$1,map_LT___$1,meta29710){
return (new cljs.core.async.t29709(ch__$1,f__$1,map_LT___$1,meta29710));
});

}

return (new cljs.core.async.t29709(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29718 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29718 = (function (ch,f,map_GT_,meta29719){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29719 = meta29719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29720){
var self__ = this;
var _29720__$1 = this;
return self__.meta29719;
});

cljs.core.async.t29718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29720,meta29719__$1){
var self__ = this;
var _29720__$1 = this;
return (new cljs.core.async.t29718(self__.ch,self__.f,self__.map_GT_,meta29719__$1));
});

cljs.core.async.t29718.cljs$lang$type = true;

cljs.core.async.t29718.cljs$lang$ctorStr = "cljs.core.async/t29718";

cljs.core.async.t29718.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29718");
});

cljs.core.async.__GT_t29718 = (function __GT_t29718(ch__$1,f__$1,map_GT___$1,meta29719){
return (new cljs.core.async.t29718(ch__$1,f__$1,map_GT___$1,meta29719));
});

}

return (new cljs.core.async.t29718(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29724 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29724 = (function (ch,p,filter_GT_,meta29725){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29725 = meta29725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29724.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29724.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29724.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29724.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29726){
var self__ = this;
var _29726__$1 = this;
return self__.meta29725;
});

cljs.core.async.t29724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29726,meta29725__$1){
var self__ = this;
var _29726__$1 = this;
return (new cljs.core.async.t29724(self__.ch,self__.p,self__.filter_GT_,meta29725__$1));
});

cljs.core.async.t29724.cljs$lang$type = true;

cljs.core.async.t29724.cljs$lang$ctorStr = "cljs.core.async/t29724";

cljs.core.async.t29724.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29724");
});

cljs.core.async.__GT_t29724 = (function __GT_t29724(ch__$1,p__$1,filter_GT___$1,meta29725){
return (new cljs.core.async.t29724(ch__$1,p__$1,filter_GT___$1,meta29725));
});

}

return (new cljs.core.async.t29724(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16178__auto___29809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___29809,out){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___29809,out){
return (function (state_29788){
var state_val_29789 = (state_29788[(1)]);
if((state_val_29789 === (7))){
var inst_29784 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29790_29810 = state_29788__$1;
(statearr_29790_29810[(2)] = inst_29784);

(statearr_29790_29810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (1))){
var state_29788__$1 = state_29788;
var statearr_29791_29811 = state_29788__$1;
(statearr_29791_29811[(2)] = null);

(statearr_29791_29811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (4))){
var inst_29770 = (state_29788[(7)]);
var inst_29770__$1 = (state_29788[(2)]);
var inst_29771 = (inst_29770__$1 == null);
var state_29788__$1 = (function (){var statearr_29792 = state_29788;
(statearr_29792[(7)] = inst_29770__$1);

return statearr_29792;
})();
if(cljs.core.truth_(inst_29771)){
var statearr_29793_29812 = state_29788__$1;
(statearr_29793_29812[(1)] = (5));

} else {
var statearr_29794_29813 = state_29788__$1;
(statearr_29794_29813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (6))){
var inst_29770 = (state_29788[(7)]);
var inst_29775 = p.call(null,inst_29770);
var state_29788__$1 = state_29788;
if(cljs.core.truth_(inst_29775)){
var statearr_29795_29814 = state_29788__$1;
(statearr_29795_29814[(1)] = (8));

} else {
var statearr_29796_29815 = state_29788__$1;
(statearr_29796_29815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (3))){
var inst_29786 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29788__$1,inst_29786);
} else {
if((state_val_29789 === (2))){
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29788__$1,(4),ch);
} else {
if((state_val_29789 === (11))){
var inst_29778 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29797_29816 = state_29788__$1;
(statearr_29797_29816[(2)] = inst_29778);

(statearr_29797_29816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (9))){
var state_29788__$1 = state_29788;
var statearr_29798_29817 = state_29788__$1;
(statearr_29798_29817[(2)] = null);

(statearr_29798_29817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (5))){
var inst_29773 = cljs.core.async.close_BANG_.call(null,out);
var state_29788__$1 = state_29788;
var statearr_29799_29818 = state_29788__$1;
(statearr_29799_29818[(2)] = inst_29773);

(statearr_29799_29818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (10))){
var inst_29781 = (state_29788[(2)]);
var state_29788__$1 = (function (){var statearr_29800 = state_29788;
(statearr_29800[(8)] = inst_29781);

return statearr_29800;
})();
var statearr_29801_29819 = state_29788__$1;
(statearr_29801_29819[(2)] = null);

(statearr_29801_29819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (8))){
var inst_29770 = (state_29788[(7)]);
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29788__$1,(11),out,inst_29770);
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
});})(c__16178__auto___29809,out))
;
return ((function (switch__16122__auto__,c__16178__auto___29809,out){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_29805 = [null,null,null,null,null,null,null,null,null];
(statearr_29805[(0)] = state_machine__16123__auto__);

(statearr_29805[(1)] = (1));

return statearr_29805;
});
var state_machine__16123__auto____1 = (function (state_29788){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_29788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e29806){if((e29806 instanceof Object)){
var ex__16126__auto__ = e29806;
var statearr_29807_29820 = state_29788;
(statearr_29807_29820[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29821 = state_29788;
state_29788 = G__29821;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_29788){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_29788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___29809,out))
})();
var state__16180__auto__ = (function (){var statearr_29808 = f__16179__auto__.call(null);
(statearr_29808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___29809);

return statearr_29808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___29809,out))
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
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__){
return (function (state_29987){
var state_val_29988 = (state_29987[(1)]);
if((state_val_29988 === (7))){
var inst_29983 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_29989_30030 = state_29987__$1;
(statearr_29989_30030[(2)] = inst_29983);

(statearr_29989_30030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (20))){
var inst_29953 = (state_29987[(7)]);
var inst_29964 = (state_29987[(2)]);
var inst_29965 = cljs.core.next.call(null,inst_29953);
var inst_29939 = inst_29965;
var inst_29940 = null;
var inst_29941 = (0);
var inst_29942 = (0);
var state_29987__$1 = (function (){var statearr_29990 = state_29987;
(statearr_29990[(8)] = inst_29939);

(statearr_29990[(9)] = inst_29941);

(statearr_29990[(10)] = inst_29940);

(statearr_29990[(11)] = inst_29942);

(statearr_29990[(12)] = inst_29964);

return statearr_29990;
})();
var statearr_29991_30031 = state_29987__$1;
(statearr_29991_30031[(2)] = null);

(statearr_29991_30031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (1))){
var state_29987__$1 = state_29987;
var statearr_29992_30032 = state_29987__$1;
(statearr_29992_30032[(2)] = null);

(statearr_29992_30032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (4))){
var inst_29928 = (state_29987[(13)]);
var inst_29928__$1 = (state_29987[(2)]);
var inst_29929 = (inst_29928__$1 == null);
var state_29987__$1 = (function (){var statearr_29993 = state_29987;
(statearr_29993[(13)] = inst_29928__$1);

return statearr_29993;
})();
if(cljs.core.truth_(inst_29929)){
var statearr_29994_30033 = state_29987__$1;
(statearr_29994_30033[(1)] = (5));

} else {
var statearr_29995_30034 = state_29987__$1;
(statearr_29995_30034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (15))){
var state_29987__$1 = state_29987;
var statearr_29999_30035 = state_29987__$1;
(statearr_29999_30035[(2)] = null);

(statearr_29999_30035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (21))){
var state_29987__$1 = state_29987;
var statearr_30000_30036 = state_29987__$1;
(statearr_30000_30036[(2)] = null);

(statearr_30000_30036[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (13))){
var inst_29939 = (state_29987[(8)]);
var inst_29941 = (state_29987[(9)]);
var inst_29940 = (state_29987[(10)]);
var inst_29942 = (state_29987[(11)]);
var inst_29949 = (state_29987[(2)]);
var inst_29950 = (inst_29942 + (1));
var tmp29996 = inst_29939;
var tmp29997 = inst_29941;
var tmp29998 = inst_29940;
var inst_29939__$1 = tmp29996;
var inst_29940__$1 = tmp29998;
var inst_29941__$1 = tmp29997;
var inst_29942__$1 = inst_29950;
var state_29987__$1 = (function (){var statearr_30001 = state_29987;
(statearr_30001[(8)] = inst_29939__$1);

(statearr_30001[(9)] = inst_29941__$1);

(statearr_30001[(10)] = inst_29940__$1);

(statearr_30001[(11)] = inst_29942__$1);

(statearr_30001[(14)] = inst_29949);

return statearr_30001;
})();
var statearr_30002_30037 = state_29987__$1;
(statearr_30002_30037[(2)] = null);

(statearr_30002_30037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (22))){
var state_29987__$1 = state_29987;
var statearr_30003_30038 = state_29987__$1;
(statearr_30003_30038[(2)] = null);

(statearr_30003_30038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (6))){
var inst_29928 = (state_29987[(13)]);
var inst_29937 = f.call(null,inst_29928);
var inst_29938 = cljs.core.seq.call(null,inst_29937);
var inst_29939 = inst_29938;
var inst_29940 = null;
var inst_29941 = (0);
var inst_29942 = (0);
var state_29987__$1 = (function (){var statearr_30004 = state_29987;
(statearr_30004[(8)] = inst_29939);

(statearr_30004[(9)] = inst_29941);

(statearr_30004[(10)] = inst_29940);

(statearr_30004[(11)] = inst_29942);

return statearr_30004;
})();
var statearr_30005_30039 = state_29987__$1;
(statearr_30005_30039[(2)] = null);

(statearr_30005_30039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (17))){
var inst_29953 = (state_29987[(7)]);
var inst_29957 = cljs.core.chunk_first.call(null,inst_29953);
var inst_29958 = cljs.core.chunk_rest.call(null,inst_29953);
var inst_29959 = cljs.core.count.call(null,inst_29957);
var inst_29939 = inst_29958;
var inst_29940 = inst_29957;
var inst_29941 = inst_29959;
var inst_29942 = (0);
var state_29987__$1 = (function (){var statearr_30006 = state_29987;
(statearr_30006[(8)] = inst_29939);

(statearr_30006[(9)] = inst_29941);

(statearr_30006[(10)] = inst_29940);

(statearr_30006[(11)] = inst_29942);

return statearr_30006;
})();
var statearr_30007_30040 = state_29987__$1;
(statearr_30007_30040[(2)] = null);

(statearr_30007_30040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (3))){
var inst_29985 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29987__$1,inst_29985);
} else {
if((state_val_29988 === (12))){
var inst_29973 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30008_30041 = state_29987__$1;
(statearr_30008_30041[(2)] = inst_29973);

(statearr_30008_30041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (2))){
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29987__$1,(4),in$);
} else {
if((state_val_29988 === (23))){
var inst_29981 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30009_30042 = state_29987__$1;
(statearr_30009_30042[(2)] = inst_29981);

(statearr_30009_30042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (19))){
var inst_29968 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30010_30043 = state_29987__$1;
(statearr_30010_30043[(2)] = inst_29968);

(statearr_30010_30043[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (11))){
var inst_29939 = (state_29987[(8)]);
var inst_29953 = (state_29987[(7)]);
var inst_29953__$1 = cljs.core.seq.call(null,inst_29939);
var state_29987__$1 = (function (){var statearr_30011 = state_29987;
(statearr_30011[(7)] = inst_29953__$1);

return statearr_30011;
})();
if(inst_29953__$1){
var statearr_30012_30044 = state_29987__$1;
(statearr_30012_30044[(1)] = (14));

} else {
var statearr_30013_30045 = state_29987__$1;
(statearr_30013_30045[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (9))){
var inst_29975 = (state_29987[(2)]);
var inst_29976 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29987__$1 = (function (){var statearr_30014 = state_29987;
(statearr_30014[(15)] = inst_29975);

return statearr_30014;
})();
if(cljs.core.truth_(inst_29976)){
var statearr_30015_30046 = state_29987__$1;
(statearr_30015_30046[(1)] = (21));

} else {
var statearr_30016_30047 = state_29987__$1;
(statearr_30016_30047[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (5))){
var inst_29931 = cljs.core.async.close_BANG_.call(null,out);
var state_29987__$1 = state_29987;
var statearr_30017_30048 = state_29987__$1;
(statearr_30017_30048[(2)] = inst_29931);

(statearr_30017_30048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (14))){
var inst_29953 = (state_29987[(7)]);
var inst_29955 = cljs.core.chunked_seq_QMARK_.call(null,inst_29953);
var state_29987__$1 = state_29987;
if(inst_29955){
var statearr_30018_30049 = state_29987__$1;
(statearr_30018_30049[(1)] = (17));

} else {
var statearr_30019_30050 = state_29987__$1;
(statearr_30019_30050[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (16))){
var inst_29971 = (state_29987[(2)]);
var state_29987__$1 = state_29987;
var statearr_30020_30051 = state_29987__$1;
(statearr_30020_30051[(2)] = inst_29971);

(statearr_30020_30051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29988 === (10))){
var inst_29940 = (state_29987[(10)]);
var inst_29942 = (state_29987[(11)]);
var inst_29947 = cljs.core._nth.call(null,inst_29940,inst_29942);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29987__$1,(13),out,inst_29947);
} else {
if((state_val_29988 === (18))){
var inst_29953 = (state_29987[(7)]);
var inst_29962 = cljs.core.first.call(null,inst_29953);
var state_29987__$1 = state_29987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29987__$1,(20),out,inst_29962);
} else {
if((state_val_29988 === (8))){
var inst_29941 = (state_29987[(9)]);
var inst_29942 = (state_29987[(11)]);
var inst_29944 = (inst_29942 < inst_29941);
var inst_29945 = inst_29944;
var state_29987__$1 = state_29987;
if(cljs.core.truth_(inst_29945)){
var statearr_30021_30052 = state_29987__$1;
(statearr_30021_30052[(1)] = (10));

} else {
var statearr_30022_30053 = state_29987__$1;
(statearr_30022_30053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto__))
;
return ((function (switch__16122__auto__,c__16178__auto__){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_30026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30026[(0)] = state_machine__16123__auto__);

(statearr_30026[(1)] = (1));

return statearr_30026;
});
var state_machine__16123__auto____1 = (function (state_29987){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_29987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e30027){if((e30027 instanceof Object)){
var ex__16126__auto__ = e30027;
var statearr_30028_30054 = state_29987;
(statearr_30028_30054[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30055 = state_29987;
state_29987 = G__30055;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_29987){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_29987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__))
})();
var state__16180__auto__ = (function (){var statearr_30029 = f__16179__auto__.call(null);
(statearr_30029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_30029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__))
);

return c__16178__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16178__auto___30152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___30152,out){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___30152,out){
return (function (state_30127){
var state_val_30128 = (state_30127[(1)]);
if((state_val_30128 === (7))){
var inst_30122 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
var statearr_30129_30153 = state_30127__$1;
(statearr_30129_30153[(2)] = inst_30122);

(statearr_30129_30153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (1))){
var inst_30104 = null;
var state_30127__$1 = (function (){var statearr_30130 = state_30127;
(statearr_30130[(7)] = inst_30104);

return statearr_30130;
})();
var statearr_30131_30154 = state_30127__$1;
(statearr_30131_30154[(2)] = null);

(statearr_30131_30154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (4))){
var inst_30107 = (state_30127[(8)]);
var inst_30107__$1 = (state_30127[(2)]);
var inst_30108 = (inst_30107__$1 == null);
var inst_30109 = cljs.core.not.call(null,inst_30108);
var state_30127__$1 = (function (){var statearr_30132 = state_30127;
(statearr_30132[(8)] = inst_30107__$1);

return statearr_30132;
})();
if(inst_30109){
var statearr_30133_30155 = state_30127__$1;
(statearr_30133_30155[(1)] = (5));

} else {
var statearr_30134_30156 = state_30127__$1;
(statearr_30134_30156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (6))){
var state_30127__$1 = state_30127;
var statearr_30135_30157 = state_30127__$1;
(statearr_30135_30157[(2)] = null);

(statearr_30135_30157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (3))){
var inst_30124 = (state_30127[(2)]);
var inst_30125 = cljs.core.async.close_BANG_.call(null,out);
var state_30127__$1 = (function (){var statearr_30136 = state_30127;
(statearr_30136[(9)] = inst_30124);

return statearr_30136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30127__$1,inst_30125);
} else {
if((state_val_30128 === (2))){
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30127__$1,(4),ch);
} else {
if((state_val_30128 === (11))){
var inst_30107 = (state_30127[(8)]);
var inst_30116 = (state_30127[(2)]);
var inst_30104 = inst_30107;
var state_30127__$1 = (function (){var statearr_30137 = state_30127;
(statearr_30137[(7)] = inst_30104);

(statearr_30137[(10)] = inst_30116);

return statearr_30137;
})();
var statearr_30138_30158 = state_30127__$1;
(statearr_30138_30158[(2)] = null);

(statearr_30138_30158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (9))){
var inst_30107 = (state_30127[(8)]);
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30127__$1,(11),out,inst_30107);
} else {
if((state_val_30128 === (5))){
var inst_30104 = (state_30127[(7)]);
var inst_30107 = (state_30127[(8)]);
var inst_30111 = cljs.core._EQ_.call(null,inst_30107,inst_30104);
var state_30127__$1 = state_30127;
if(inst_30111){
var statearr_30140_30159 = state_30127__$1;
(statearr_30140_30159[(1)] = (8));

} else {
var statearr_30141_30160 = state_30127__$1;
(statearr_30141_30160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (10))){
var inst_30119 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
var statearr_30142_30161 = state_30127__$1;
(statearr_30142_30161[(2)] = inst_30119);

(statearr_30142_30161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (8))){
var inst_30104 = (state_30127[(7)]);
var tmp30139 = inst_30104;
var inst_30104__$1 = tmp30139;
var state_30127__$1 = (function (){var statearr_30143 = state_30127;
(statearr_30143[(7)] = inst_30104__$1);

return statearr_30143;
})();
var statearr_30144_30162 = state_30127__$1;
(statearr_30144_30162[(2)] = null);

(statearr_30144_30162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___30152,out))
;
return ((function (switch__16122__auto__,c__16178__auto___30152,out){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_30148 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30148[(0)] = state_machine__16123__auto__);

(statearr_30148[(1)] = (1));

return statearr_30148;
});
var state_machine__16123__auto____1 = (function (state_30127){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_30127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e30149){if((e30149 instanceof Object)){
var ex__16126__auto__ = e30149;
var statearr_30150_30163 = state_30127;
(statearr_30150_30163[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30164 = state_30127;
state_30127 = G__30164;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_30127){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_30127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___30152,out))
})();
var state__16180__auto__ = (function (){var statearr_30151 = f__16179__auto__.call(null);
(statearr_30151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___30152);

return statearr_30151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___30152,out))
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
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16178__auto___30299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___30299,out){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___30299,out){
return (function (state_30269){
var state_val_30270 = (state_30269[(1)]);
if((state_val_30270 === (7))){
var inst_30265 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30271_30300 = state_30269__$1;
(statearr_30271_30300[(2)] = inst_30265);

(statearr_30271_30300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (1))){
var inst_30232 = (new Array(n));
var inst_30233 = inst_30232;
var inst_30234 = (0);
var state_30269__$1 = (function (){var statearr_30272 = state_30269;
(statearr_30272[(7)] = inst_30234);

(statearr_30272[(8)] = inst_30233);

return statearr_30272;
})();
var statearr_30273_30301 = state_30269__$1;
(statearr_30273_30301[(2)] = null);

(statearr_30273_30301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (4))){
var inst_30237 = (state_30269[(9)]);
var inst_30237__$1 = (state_30269[(2)]);
var inst_30238 = (inst_30237__$1 == null);
var inst_30239 = cljs.core.not.call(null,inst_30238);
var state_30269__$1 = (function (){var statearr_30274 = state_30269;
(statearr_30274[(9)] = inst_30237__$1);

return statearr_30274;
})();
if(inst_30239){
var statearr_30275_30302 = state_30269__$1;
(statearr_30275_30302[(1)] = (5));

} else {
var statearr_30276_30303 = state_30269__$1;
(statearr_30276_30303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (15))){
var inst_30259 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30277_30304 = state_30269__$1;
(statearr_30277_30304[(2)] = inst_30259);

(statearr_30277_30304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (13))){
var state_30269__$1 = state_30269;
var statearr_30278_30305 = state_30269__$1;
(statearr_30278_30305[(2)] = null);

(statearr_30278_30305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (6))){
var inst_30234 = (state_30269[(7)]);
var inst_30255 = (inst_30234 > (0));
var state_30269__$1 = state_30269;
if(cljs.core.truth_(inst_30255)){
var statearr_30279_30306 = state_30269__$1;
(statearr_30279_30306[(1)] = (12));

} else {
var statearr_30280_30307 = state_30269__$1;
(statearr_30280_30307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (3))){
var inst_30267 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30269__$1,inst_30267);
} else {
if((state_val_30270 === (12))){
var inst_30233 = (state_30269[(8)]);
var inst_30257 = cljs.core.vec.call(null,inst_30233);
var state_30269__$1 = state_30269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30269__$1,(15),out,inst_30257);
} else {
if((state_val_30270 === (2))){
var state_30269__$1 = state_30269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30269__$1,(4),ch);
} else {
if((state_val_30270 === (11))){
var inst_30249 = (state_30269[(2)]);
var inst_30250 = (new Array(n));
var inst_30233 = inst_30250;
var inst_30234 = (0);
var state_30269__$1 = (function (){var statearr_30281 = state_30269;
(statearr_30281[(10)] = inst_30249);

(statearr_30281[(7)] = inst_30234);

(statearr_30281[(8)] = inst_30233);

return statearr_30281;
})();
var statearr_30282_30308 = state_30269__$1;
(statearr_30282_30308[(2)] = null);

(statearr_30282_30308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (9))){
var inst_30233 = (state_30269[(8)]);
var inst_30247 = cljs.core.vec.call(null,inst_30233);
var state_30269__$1 = state_30269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30269__$1,(11),out,inst_30247);
} else {
if((state_val_30270 === (5))){
var inst_30242 = (state_30269[(11)]);
var inst_30234 = (state_30269[(7)]);
var inst_30237 = (state_30269[(9)]);
var inst_30233 = (state_30269[(8)]);
var inst_30241 = (inst_30233[inst_30234] = inst_30237);
var inst_30242__$1 = (inst_30234 + (1));
var inst_30243 = (inst_30242__$1 < n);
var state_30269__$1 = (function (){var statearr_30283 = state_30269;
(statearr_30283[(11)] = inst_30242__$1);

(statearr_30283[(12)] = inst_30241);

return statearr_30283;
})();
if(cljs.core.truth_(inst_30243)){
var statearr_30284_30309 = state_30269__$1;
(statearr_30284_30309[(1)] = (8));

} else {
var statearr_30285_30310 = state_30269__$1;
(statearr_30285_30310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (14))){
var inst_30262 = (state_30269[(2)]);
var inst_30263 = cljs.core.async.close_BANG_.call(null,out);
var state_30269__$1 = (function (){var statearr_30287 = state_30269;
(statearr_30287[(13)] = inst_30262);

return statearr_30287;
})();
var statearr_30288_30311 = state_30269__$1;
(statearr_30288_30311[(2)] = inst_30263);

(statearr_30288_30311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (10))){
var inst_30253 = (state_30269[(2)]);
var state_30269__$1 = state_30269;
var statearr_30289_30312 = state_30269__$1;
(statearr_30289_30312[(2)] = inst_30253);

(statearr_30289_30312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30270 === (8))){
var inst_30242 = (state_30269[(11)]);
var inst_30233 = (state_30269[(8)]);
var tmp30286 = inst_30233;
var inst_30233__$1 = tmp30286;
var inst_30234 = inst_30242;
var state_30269__$1 = (function (){var statearr_30290 = state_30269;
(statearr_30290[(7)] = inst_30234);

(statearr_30290[(8)] = inst_30233__$1);

return statearr_30290;
})();
var statearr_30291_30313 = state_30269__$1;
(statearr_30291_30313[(2)] = null);

(statearr_30291_30313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___30299,out))
;
return ((function (switch__16122__auto__,c__16178__auto___30299,out){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_30295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30295[(0)] = state_machine__16123__auto__);

(statearr_30295[(1)] = (1));

return statearr_30295;
});
var state_machine__16123__auto____1 = (function (state_30269){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_30269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e30296){if((e30296 instanceof Object)){
var ex__16126__auto__ = e30296;
var statearr_30297_30314 = state_30269;
(statearr_30297_30314[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30315 = state_30269;
state_30269 = G__30315;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_30269){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_30269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___30299,out))
})();
var state__16180__auto__ = (function (){var statearr_30298 = f__16179__auto__.call(null);
(statearr_30298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___30299);

return statearr_30298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___30299,out))
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
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16178__auto___30458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___30458,out){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___30458,out){
return (function (state_30428){
var state_val_30429 = (state_30428[(1)]);
if((state_val_30429 === (7))){
var inst_30424 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30430_30459 = state_30428__$1;
(statearr_30430_30459[(2)] = inst_30424);

(statearr_30430_30459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (1))){
var inst_30387 = [];
var inst_30388 = inst_30387;
var inst_30389 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30428__$1 = (function (){var statearr_30431 = state_30428;
(statearr_30431[(7)] = inst_30389);

(statearr_30431[(8)] = inst_30388);

return statearr_30431;
})();
var statearr_30432_30460 = state_30428__$1;
(statearr_30432_30460[(2)] = null);

(statearr_30432_30460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (4))){
var inst_30392 = (state_30428[(9)]);
var inst_30392__$1 = (state_30428[(2)]);
var inst_30393 = (inst_30392__$1 == null);
var inst_30394 = cljs.core.not.call(null,inst_30393);
var state_30428__$1 = (function (){var statearr_30433 = state_30428;
(statearr_30433[(9)] = inst_30392__$1);

return statearr_30433;
})();
if(inst_30394){
var statearr_30434_30461 = state_30428__$1;
(statearr_30434_30461[(1)] = (5));

} else {
var statearr_30435_30462 = state_30428__$1;
(statearr_30435_30462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (15))){
var inst_30418 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30436_30463 = state_30428__$1;
(statearr_30436_30463[(2)] = inst_30418);

(statearr_30436_30463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (13))){
var state_30428__$1 = state_30428;
var statearr_30437_30464 = state_30428__$1;
(statearr_30437_30464[(2)] = null);

(statearr_30437_30464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (6))){
var inst_30388 = (state_30428[(8)]);
var inst_30413 = inst_30388.length;
var inst_30414 = (inst_30413 > (0));
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30414)){
var statearr_30438_30465 = state_30428__$1;
(statearr_30438_30465[(1)] = (12));

} else {
var statearr_30439_30466 = state_30428__$1;
(statearr_30439_30466[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (3))){
var inst_30426 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30428__$1,inst_30426);
} else {
if((state_val_30429 === (12))){
var inst_30388 = (state_30428[(8)]);
var inst_30416 = cljs.core.vec.call(null,inst_30388);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30428__$1,(15),out,inst_30416);
} else {
if((state_val_30429 === (2))){
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30428__$1,(4),ch);
} else {
if((state_val_30429 === (11))){
var inst_30392 = (state_30428[(9)]);
var inst_30396 = (state_30428[(10)]);
var inst_30406 = (state_30428[(2)]);
var inst_30407 = [];
var inst_30408 = inst_30407.push(inst_30392);
var inst_30388 = inst_30407;
var inst_30389 = inst_30396;
var state_30428__$1 = (function (){var statearr_30440 = state_30428;
(statearr_30440[(11)] = inst_30406);

(statearr_30440[(7)] = inst_30389);

(statearr_30440[(12)] = inst_30408);

(statearr_30440[(8)] = inst_30388);

return statearr_30440;
})();
var statearr_30441_30467 = state_30428__$1;
(statearr_30441_30467[(2)] = null);

(statearr_30441_30467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (9))){
var inst_30388 = (state_30428[(8)]);
var inst_30404 = cljs.core.vec.call(null,inst_30388);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30428__$1,(11),out,inst_30404);
} else {
if((state_val_30429 === (5))){
var inst_30392 = (state_30428[(9)]);
var inst_30389 = (state_30428[(7)]);
var inst_30396 = (state_30428[(10)]);
var inst_30396__$1 = f.call(null,inst_30392);
var inst_30397 = cljs.core._EQ_.call(null,inst_30396__$1,inst_30389);
var inst_30398 = cljs.core.keyword_identical_QMARK_.call(null,inst_30389,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30399 = (inst_30397) || (inst_30398);
var state_30428__$1 = (function (){var statearr_30442 = state_30428;
(statearr_30442[(10)] = inst_30396__$1);

return statearr_30442;
})();
if(cljs.core.truth_(inst_30399)){
var statearr_30443_30468 = state_30428__$1;
(statearr_30443_30468[(1)] = (8));

} else {
var statearr_30444_30469 = state_30428__$1;
(statearr_30444_30469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (14))){
var inst_30421 = (state_30428[(2)]);
var inst_30422 = cljs.core.async.close_BANG_.call(null,out);
var state_30428__$1 = (function (){var statearr_30446 = state_30428;
(statearr_30446[(13)] = inst_30421);

return statearr_30446;
})();
var statearr_30447_30470 = state_30428__$1;
(statearr_30447_30470[(2)] = inst_30422);

(statearr_30447_30470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (10))){
var inst_30411 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30448_30471 = state_30428__$1;
(statearr_30448_30471[(2)] = inst_30411);

(statearr_30448_30471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (8))){
var inst_30392 = (state_30428[(9)]);
var inst_30388 = (state_30428[(8)]);
var inst_30396 = (state_30428[(10)]);
var inst_30401 = inst_30388.push(inst_30392);
var tmp30445 = inst_30388;
var inst_30388__$1 = tmp30445;
var inst_30389 = inst_30396;
var state_30428__$1 = (function (){var statearr_30449 = state_30428;
(statearr_30449[(7)] = inst_30389);

(statearr_30449[(8)] = inst_30388__$1);

(statearr_30449[(14)] = inst_30401);

return statearr_30449;
})();
var statearr_30450_30472 = state_30428__$1;
(statearr_30450_30472[(2)] = null);

(statearr_30450_30472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__16178__auto___30458,out))
;
return ((function (switch__16122__auto__,c__16178__auto___30458,out){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_30454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30454[(0)] = state_machine__16123__auto__);

(statearr_30454[(1)] = (1));

return statearr_30454;
});
var state_machine__16123__auto____1 = (function (state_30428){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_30428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e30455){if((e30455 instanceof Object)){
var ex__16126__auto__ = e30455;
var statearr_30456_30473 = state_30428;
(statearr_30456_30473[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30474 = state_30428;
state_30428 = G__30474;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_30428){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_30428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___30458,out))
})();
var state__16180__auto__ = (function (){var statearr_30457 = f__16179__auto__.call(null);
(statearr_30457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___30458);

return statearr_30457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___30458,out))
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

//# sourceMappingURL=async.js.map?rel=1429705620780