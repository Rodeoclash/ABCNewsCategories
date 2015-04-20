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
if(typeof cljs.core.async.t24883 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24883 = (function (f,fn_handler,meta24884){
this.f = f;
this.fn_handler = fn_handler;
this.meta24884 = meta24884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24883.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24885){
var self__ = this;
var _24885__$1 = this;
return self__.meta24884;
});

cljs.core.async.t24883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24885,meta24884__$1){
var self__ = this;
var _24885__$1 = this;
return (new cljs.core.async.t24883(self__.f,self__.fn_handler,meta24884__$1));
});

cljs.core.async.t24883.cljs$lang$type = true;

cljs.core.async.t24883.cljs$lang$ctorStr = "cljs.core.async/t24883";

cljs.core.async.t24883.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t24883");
});

cljs.core.async.__GT_t24883 = (function __GT_t24883(f__$1,fn_handler__$1,meta24884){
return (new cljs.core.async.t24883(f__$1,fn_handler__$1,meta24884));
});

}

return (new cljs.core.async.t24883(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24887 = buff;
if(G__24887){
var bit__13454__auto__ = null;
if(cljs.core.truth_((function (){var or__12773__auto__ = bit__13454__auto__;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return G__24887.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24887.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24887);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24887);
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
var val_24888 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24888);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24888,ret){
return (function (){
return fn1.call(null,val_24888);
});})(val_24888,ret))
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
var n__13660__auto___24889 = n;
var x_24890 = (0);
while(true){
if((x_24890 < n__13660__auto___24889)){
(a[x_24890] = (0));

var G__24891 = (x_24890 + (1));
x_24890 = G__24891;
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

var G__24892 = (i + (1));
i = G__24892;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24896 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24896 = (function (flag,alt_flag,meta24897){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24897 = meta24897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24896.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24896.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24896.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24898){
var self__ = this;
var _24898__$1 = this;
return self__.meta24897;
});})(flag))
;

cljs.core.async.t24896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24898,meta24897__$1){
var self__ = this;
var _24898__$1 = this;
return (new cljs.core.async.t24896(self__.flag,self__.alt_flag,meta24897__$1));
});})(flag))
;

cljs.core.async.t24896.cljs$lang$type = true;

cljs.core.async.t24896.cljs$lang$ctorStr = "cljs.core.async/t24896";

cljs.core.async.t24896.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t24896");
});})(flag))
;

cljs.core.async.__GT_t24896 = ((function (flag){
return (function __GT_t24896(flag__$1,alt_flag__$1,meta24897){
return (new cljs.core.async.t24896(flag__$1,alt_flag__$1,meta24897));
});})(flag))
;

}

return (new cljs.core.async.t24896(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24902 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24902 = (function (cb,flag,alt_handler,meta24903){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24903 = meta24903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24902.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24904){
var self__ = this;
var _24904__$1 = this;
return self__.meta24903;
});

cljs.core.async.t24902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24904,meta24903__$1){
var self__ = this;
var _24904__$1 = this;
return (new cljs.core.async.t24902(self__.cb,self__.flag,self__.alt_handler,meta24903__$1));
});

cljs.core.async.t24902.cljs$lang$type = true;

cljs.core.async.t24902.cljs$lang$ctorStr = "cljs.core.async/t24902";

cljs.core.async.t24902.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t24902");
});

cljs.core.async.__GT_t24902 = (function __GT_t24902(cb__$1,flag__$1,alt_handler__$1,meta24903){
return (new cljs.core.async.t24902(cb__$1,flag__$1,alt_handler__$1,meta24903));
});

}

return (new cljs.core.async.t24902(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24905_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24905_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24906_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24906_SHARP_,port], null));
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
var G__24907 = (i + (1));
i = G__24907;
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
var alts_BANG___delegate = function (ports,p__24908){
var map__24910 = p__24908;
var map__24910__$1 = ((cljs.core.seq_QMARK_.call(null,map__24910))?cljs.core.apply.call(null,cljs.core.hash_map,map__24910):map__24910);
var opts = map__24910__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24908 = null;
if (arguments.length > 1) {
var G__24911__i = 0, G__24911__a = new Array(arguments.length -  1);
while (G__24911__i < G__24911__a.length) {G__24911__a[G__24911__i] = arguments[G__24911__i + 1]; ++G__24911__i;}
  p__24908 = new cljs.core.IndexedSeq(G__24911__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__24908);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24912){
var ports = cljs.core.first(arglist__24912);
var p__24908 = cljs.core.rest(arglist__24912);
return alts_BANG___delegate(ports,p__24908);
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
var c__15442__auto___25007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___25007){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___25007){
return (function (state_24983){
var state_val_24984 = (state_24983[(1)]);
if((state_val_24984 === (7))){
var inst_24979 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_24985_25008 = state_24983__$1;
(statearr_24985_25008[(2)] = inst_24979);

(statearr_24985_25008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (1))){
var state_24983__$1 = state_24983;
var statearr_24986_25009 = state_24983__$1;
(statearr_24986_25009[(2)] = null);

(statearr_24986_25009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (4))){
var inst_24962 = (state_24983[(7)]);
var inst_24962__$1 = (state_24983[(2)]);
var inst_24963 = (inst_24962__$1 == null);
var state_24983__$1 = (function (){var statearr_24987 = state_24983;
(statearr_24987[(7)] = inst_24962__$1);

return statearr_24987;
})();
if(cljs.core.truth_(inst_24963)){
var statearr_24988_25010 = state_24983__$1;
(statearr_24988_25010[(1)] = (5));

} else {
var statearr_24989_25011 = state_24983__$1;
(statearr_24989_25011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (13))){
var state_24983__$1 = state_24983;
var statearr_24990_25012 = state_24983__$1;
(statearr_24990_25012[(2)] = null);

(statearr_24990_25012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (6))){
var inst_24962 = (state_24983[(7)]);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24983__$1,(11),to,inst_24962);
} else {
if((state_val_24984 === (3))){
var inst_24981 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24983__$1,inst_24981);
} else {
if((state_val_24984 === (12))){
var state_24983__$1 = state_24983;
var statearr_24991_25013 = state_24983__$1;
(statearr_24991_25013[(2)] = null);

(statearr_24991_25013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (2))){
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24983__$1,(4),from);
} else {
if((state_val_24984 === (11))){
var inst_24972 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
if(cljs.core.truth_(inst_24972)){
var statearr_24992_25014 = state_24983__$1;
(statearr_24992_25014[(1)] = (12));

} else {
var statearr_24993_25015 = state_24983__$1;
(statearr_24993_25015[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (9))){
var state_24983__$1 = state_24983;
var statearr_24994_25016 = state_24983__$1;
(statearr_24994_25016[(2)] = null);

(statearr_24994_25016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (5))){
var state_24983__$1 = state_24983;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24995_25017 = state_24983__$1;
(statearr_24995_25017[(1)] = (8));

} else {
var statearr_24996_25018 = state_24983__$1;
(statearr_24996_25018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (14))){
var inst_24977 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_24997_25019 = state_24983__$1;
(statearr_24997_25019[(2)] = inst_24977);

(statearr_24997_25019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (10))){
var inst_24969 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_24998_25020 = state_24983__$1;
(statearr_24998_25020[(2)] = inst_24969);

(statearr_24998_25020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (8))){
var inst_24966 = cljs.core.async.close_BANG_.call(null,to);
var state_24983__$1 = state_24983;
var statearr_24999_25021 = state_24983__$1;
(statearr_24999_25021[(2)] = inst_24966);

(statearr_24999_25021[(1)] = (10));


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
});})(c__15442__auto___25007))
;
return ((function (switch__15386__auto__,c__15442__auto___25007){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25003 = [null,null,null,null,null,null,null,null];
(statearr_25003[(0)] = state_machine__15387__auto__);

(statearr_25003[(1)] = (1));

return statearr_25003;
});
var state_machine__15387__auto____1 = (function (state_24983){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_24983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25004){if((e25004 instanceof Object)){
var ex__15390__auto__ = e25004;
var statearr_25005_25022 = state_24983;
(statearr_25005_25022[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25023 = state_24983;
state_24983 = G__25023;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_24983){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_24983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___25007))
})();
var state__15444__auto__ = (function (){var statearr_25006 = f__15443__auto__.call(null);
(statearr_25006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___25007);

return statearr_25006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___25007))
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
return (function (p__25207){
var vec__25208 = p__25207;
var v = cljs.core.nth.call(null,vec__25208,(0),null);
var p = cljs.core.nth.call(null,vec__25208,(1),null);
var job = vec__25208;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15442__auto___25390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___25390,res,vec__25208,v,p,job,jobs,results){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___25390,res,vec__25208,v,p,job,jobs,results){
return (function (state_25213){
var state_val_25214 = (state_25213[(1)]);
if((state_val_25214 === (2))){
var inst_25210 = (state_25213[(2)]);
var inst_25211 = cljs.core.async.close_BANG_.call(null,res);
var state_25213__$1 = (function (){var statearr_25215 = state_25213;
(statearr_25215[(7)] = inst_25210);

return statearr_25215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25213__$1,inst_25211);
} else {
if((state_val_25214 === (1))){
var state_25213__$1 = state_25213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25213__$1,(2),res,v);
} else {
return null;
}
}
});})(c__15442__auto___25390,res,vec__25208,v,p,job,jobs,results))
;
return ((function (switch__15386__auto__,c__15442__auto___25390,res,vec__25208,v,p,job,jobs,results){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25219 = [null,null,null,null,null,null,null,null];
(statearr_25219[(0)] = state_machine__15387__auto__);

(statearr_25219[(1)] = (1));

return statearr_25219;
});
var state_machine__15387__auto____1 = (function (state_25213){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_25213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25220){if((e25220 instanceof Object)){
var ex__15390__auto__ = e25220;
var statearr_25221_25391 = state_25213;
(statearr_25221_25391[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25392 = state_25213;
state_25213 = G__25392;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_25213){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_25213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___25390,res,vec__25208,v,p,job,jobs,results))
})();
var state__15444__auto__ = (function (){var statearr_25222 = f__15443__auto__.call(null);
(statearr_25222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___25390);

return statearr_25222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___25390,res,vec__25208,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25223){
var vec__25224 = p__25223;
var v = cljs.core.nth.call(null,vec__25224,(0),null);
var p = cljs.core.nth.call(null,vec__25224,(1),null);
var job = vec__25224;
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
var n__13660__auto___25393 = n;
var __25394 = (0);
while(true){
if((__25394 < n__13660__auto___25393)){
var G__25225_25395 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25225_25395) {
case "async":
var c__15442__auto___25397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25394,c__15442__auto___25397,G__25225_25395,n__13660__auto___25393,jobs,results,process,async){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (__25394,c__15442__auto___25397,G__25225_25395,n__13660__auto___25393,jobs,results,process,async){
return (function (state_25238){
var state_val_25239 = (state_25238[(1)]);
if((state_val_25239 === (7))){
var inst_25234 = (state_25238[(2)]);
var state_25238__$1 = state_25238;
var statearr_25240_25398 = state_25238__$1;
(statearr_25240_25398[(2)] = inst_25234);

(statearr_25240_25398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25239 === (6))){
var state_25238__$1 = state_25238;
var statearr_25241_25399 = state_25238__$1;
(statearr_25241_25399[(2)] = null);

(statearr_25241_25399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25239 === (5))){
var state_25238__$1 = state_25238;
var statearr_25242_25400 = state_25238__$1;
(statearr_25242_25400[(2)] = null);

(statearr_25242_25400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25239 === (4))){
var inst_25228 = (state_25238[(2)]);
var inst_25229 = async.call(null,inst_25228);
var state_25238__$1 = state_25238;
if(cljs.core.truth_(inst_25229)){
var statearr_25243_25401 = state_25238__$1;
(statearr_25243_25401[(1)] = (5));

} else {
var statearr_25244_25402 = state_25238__$1;
(statearr_25244_25402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25239 === (3))){
var inst_25236 = (state_25238[(2)]);
var state_25238__$1 = state_25238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25238__$1,inst_25236);
} else {
if((state_val_25239 === (2))){
var state_25238__$1 = state_25238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25238__$1,(4),jobs);
} else {
if((state_val_25239 === (1))){
var state_25238__$1 = state_25238;
var statearr_25245_25403 = state_25238__$1;
(statearr_25245_25403[(2)] = null);

(statearr_25245_25403[(1)] = (2));


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
});})(__25394,c__15442__auto___25397,G__25225_25395,n__13660__auto___25393,jobs,results,process,async))
;
return ((function (__25394,switch__15386__auto__,c__15442__auto___25397,G__25225_25395,n__13660__auto___25393,jobs,results,process,async){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25249 = [null,null,null,null,null,null,null];
(statearr_25249[(0)] = state_machine__15387__auto__);

(statearr_25249[(1)] = (1));

return statearr_25249;
});
var state_machine__15387__auto____1 = (function (state_25238){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_25238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25250){if((e25250 instanceof Object)){
var ex__15390__auto__ = e25250;
var statearr_25251_25404 = state_25238;
(statearr_25251_25404[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25405 = state_25238;
state_25238 = G__25405;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_25238){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_25238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(__25394,switch__15386__auto__,c__15442__auto___25397,G__25225_25395,n__13660__auto___25393,jobs,results,process,async))
})();
var state__15444__auto__ = (function (){var statearr_25252 = f__15443__auto__.call(null);
(statearr_25252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___25397);

return statearr_25252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(__25394,c__15442__auto___25397,G__25225_25395,n__13660__auto___25393,jobs,results,process,async))
);


break;
case "compute":
var c__15442__auto___25406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25394,c__15442__auto___25406,G__25225_25395,n__13660__auto___25393,jobs,results,process,async){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (__25394,c__15442__auto___25406,G__25225_25395,n__13660__auto___25393,jobs,results,process,async){
return (function (state_25265){
var state_val_25266 = (state_25265[(1)]);
if((state_val_25266 === (7))){
var inst_25261 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
var statearr_25267_25407 = state_25265__$1;
(statearr_25267_25407[(2)] = inst_25261);

(statearr_25267_25407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (6))){
var state_25265__$1 = state_25265;
var statearr_25268_25408 = state_25265__$1;
(statearr_25268_25408[(2)] = null);

(statearr_25268_25408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (5))){
var state_25265__$1 = state_25265;
var statearr_25269_25409 = state_25265__$1;
(statearr_25269_25409[(2)] = null);

(statearr_25269_25409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (4))){
var inst_25255 = (state_25265[(2)]);
var inst_25256 = process.call(null,inst_25255);
var state_25265__$1 = state_25265;
if(cljs.core.truth_(inst_25256)){
var statearr_25270_25410 = state_25265__$1;
(statearr_25270_25410[(1)] = (5));

} else {
var statearr_25271_25411 = state_25265__$1;
(statearr_25271_25411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (3))){
var inst_25263 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25265__$1,inst_25263);
} else {
if((state_val_25266 === (2))){
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25265__$1,(4),jobs);
} else {
if((state_val_25266 === (1))){
var state_25265__$1 = state_25265;
var statearr_25272_25412 = state_25265__$1;
(statearr_25272_25412[(2)] = null);

(statearr_25272_25412[(1)] = (2));


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
});})(__25394,c__15442__auto___25406,G__25225_25395,n__13660__auto___25393,jobs,results,process,async))
;
return ((function (__25394,switch__15386__auto__,c__15442__auto___25406,G__25225_25395,n__13660__auto___25393,jobs,results,process,async){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25276 = [null,null,null,null,null,null,null];
(statearr_25276[(0)] = state_machine__15387__auto__);

(statearr_25276[(1)] = (1));

return statearr_25276;
});
var state_machine__15387__auto____1 = (function (state_25265){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_25265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25277){if((e25277 instanceof Object)){
var ex__15390__auto__ = e25277;
var statearr_25278_25413 = state_25265;
(statearr_25278_25413[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25414 = state_25265;
state_25265 = G__25414;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_25265){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_25265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(__25394,switch__15386__auto__,c__15442__auto___25406,G__25225_25395,n__13660__auto___25393,jobs,results,process,async))
})();
var state__15444__auto__ = (function (){var statearr_25279 = f__15443__auto__.call(null);
(statearr_25279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___25406);

return statearr_25279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(__25394,c__15442__auto___25406,G__25225_25395,n__13660__auto___25393,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25415 = (__25394 + (1));
__25394 = G__25415;
continue;
} else {
}
break;
}

var c__15442__auto___25416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___25416,jobs,results,process,async){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___25416,jobs,results,process,async){
return (function (state_25301){
var state_val_25302 = (state_25301[(1)]);
if((state_val_25302 === (9))){
var inst_25294 = (state_25301[(2)]);
var state_25301__$1 = (function (){var statearr_25303 = state_25301;
(statearr_25303[(7)] = inst_25294);

return statearr_25303;
})();
var statearr_25304_25417 = state_25301__$1;
(statearr_25304_25417[(2)] = null);

(statearr_25304_25417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (8))){
var inst_25287 = (state_25301[(8)]);
var inst_25292 = (state_25301[(2)]);
var state_25301__$1 = (function (){var statearr_25305 = state_25301;
(statearr_25305[(9)] = inst_25292);

return statearr_25305;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25301__$1,(9),results,inst_25287);
} else {
if((state_val_25302 === (7))){
var inst_25297 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25306_25418 = state_25301__$1;
(statearr_25306_25418[(2)] = inst_25297);

(statearr_25306_25418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (6))){
var inst_25282 = (state_25301[(10)]);
var inst_25287 = (state_25301[(8)]);
var inst_25287__$1 = cljs.core.async.chan.call(null,(1));
var inst_25288 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25289 = [inst_25282,inst_25287__$1];
var inst_25290 = (new cljs.core.PersistentVector(null,2,(5),inst_25288,inst_25289,null));
var state_25301__$1 = (function (){var statearr_25307 = state_25301;
(statearr_25307[(8)] = inst_25287__$1);

return statearr_25307;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25301__$1,(8),jobs,inst_25290);
} else {
if((state_val_25302 === (5))){
var inst_25285 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25301__$1 = state_25301;
var statearr_25308_25419 = state_25301__$1;
(statearr_25308_25419[(2)] = inst_25285);

(statearr_25308_25419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (4))){
var inst_25282 = (state_25301[(10)]);
var inst_25282__$1 = (state_25301[(2)]);
var inst_25283 = (inst_25282__$1 == null);
var state_25301__$1 = (function (){var statearr_25309 = state_25301;
(statearr_25309[(10)] = inst_25282__$1);

return statearr_25309;
})();
if(cljs.core.truth_(inst_25283)){
var statearr_25310_25420 = state_25301__$1;
(statearr_25310_25420[(1)] = (5));

} else {
var statearr_25311_25421 = state_25301__$1;
(statearr_25311_25421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (3))){
var inst_25299 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25301__$1,inst_25299);
} else {
if((state_val_25302 === (2))){
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25301__$1,(4),from);
} else {
if((state_val_25302 === (1))){
var state_25301__$1 = state_25301;
var statearr_25312_25422 = state_25301__$1;
(statearr_25312_25422[(2)] = null);

(statearr_25312_25422[(1)] = (2));


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
});})(c__15442__auto___25416,jobs,results,process,async))
;
return ((function (switch__15386__auto__,c__15442__auto___25416,jobs,results,process,async){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25316[(0)] = state_machine__15387__auto__);

(statearr_25316[(1)] = (1));

return statearr_25316;
});
var state_machine__15387__auto____1 = (function (state_25301){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_25301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25317){if((e25317 instanceof Object)){
var ex__15390__auto__ = e25317;
var statearr_25318_25423 = state_25301;
(statearr_25318_25423[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25424 = state_25301;
state_25301 = G__25424;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_25301){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_25301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___25416,jobs,results,process,async))
})();
var state__15444__auto__ = (function (){var statearr_25319 = f__15443__auto__.call(null);
(statearr_25319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___25416);

return statearr_25319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___25416,jobs,results,process,async))
);


var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__,jobs,results,process,async){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__,jobs,results,process,async){
return (function (state_25357){
var state_val_25358 = (state_25357[(1)]);
if((state_val_25358 === (7))){
var inst_25353 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25359_25425 = state_25357__$1;
(statearr_25359_25425[(2)] = inst_25353);

(statearr_25359_25425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (20))){
var state_25357__$1 = state_25357;
var statearr_25360_25426 = state_25357__$1;
(statearr_25360_25426[(2)] = null);

(statearr_25360_25426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (1))){
var state_25357__$1 = state_25357;
var statearr_25361_25427 = state_25357__$1;
(statearr_25361_25427[(2)] = null);

(statearr_25361_25427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (4))){
var inst_25322 = (state_25357[(7)]);
var inst_25322__$1 = (state_25357[(2)]);
var inst_25323 = (inst_25322__$1 == null);
var state_25357__$1 = (function (){var statearr_25362 = state_25357;
(statearr_25362[(7)] = inst_25322__$1);

return statearr_25362;
})();
if(cljs.core.truth_(inst_25323)){
var statearr_25363_25428 = state_25357__$1;
(statearr_25363_25428[(1)] = (5));

} else {
var statearr_25364_25429 = state_25357__$1;
(statearr_25364_25429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (15))){
var inst_25335 = (state_25357[(8)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25357__$1,(18),to,inst_25335);
} else {
if((state_val_25358 === (21))){
var inst_25348 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25365_25430 = state_25357__$1;
(statearr_25365_25430[(2)] = inst_25348);

(statearr_25365_25430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (13))){
var inst_25350 = (state_25357[(2)]);
var state_25357__$1 = (function (){var statearr_25366 = state_25357;
(statearr_25366[(9)] = inst_25350);

return statearr_25366;
})();
var statearr_25367_25431 = state_25357__$1;
(statearr_25367_25431[(2)] = null);

(statearr_25367_25431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (6))){
var inst_25322 = (state_25357[(7)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25357__$1,(11),inst_25322);
} else {
if((state_val_25358 === (17))){
var inst_25343 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
if(cljs.core.truth_(inst_25343)){
var statearr_25368_25432 = state_25357__$1;
(statearr_25368_25432[(1)] = (19));

} else {
var statearr_25369_25433 = state_25357__$1;
(statearr_25369_25433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (3))){
var inst_25355 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25357__$1,inst_25355);
} else {
if((state_val_25358 === (12))){
var inst_25332 = (state_25357[(10)]);
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25357__$1,(14),inst_25332);
} else {
if((state_val_25358 === (2))){
var state_25357__$1 = state_25357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25357__$1,(4),results);
} else {
if((state_val_25358 === (19))){
var state_25357__$1 = state_25357;
var statearr_25370_25434 = state_25357__$1;
(statearr_25370_25434[(2)] = null);

(statearr_25370_25434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (11))){
var inst_25332 = (state_25357[(2)]);
var state_25357__$1 = (function (){var statearr_25371 = state_25357;
(statearr_25371[(10)] = inst_25332);

return statearr_25371;
})();
var statearr_25372_25435 = state_25357__$1;
(statearr_25372_25435[(2)] = null);

(statearr_25372_25435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (9))){
var state_25357__$1 = state_25357;
var statearr_25373_25436 = state_25357__$1;
(statearr_25373_25436[(2)] = null);

(statearr_25373_25436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (5))){
var state_25357__$1 = state_25357;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25374_25437 = state_25357__$1;
(statearr_25374_25437[(1)] = (8));

} else {
var statearr_25375_25438 = state_25357__$1;
(statearr_25375_25438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (14))){
var inst_25337 = (state_25357[(11)]);
var inst_25335 = (state_25357[(8)]);
var inst_25335__$1 = (state_25357[(2)]);
var inst_25336 = (inst_25335__$1 == null);
var inst_25337__$1 = cljs.core.not.call(null,inst_25336);
var state_25357__$1 = (function (){var statearr_25376 = state_25357;
(statearr_25376[(11)] = inst_25337__$1);

(statearr_25376[(8)] = inst_25335__$1);

return statearr_25376;
})();
if(inst_25337__$1){
var statearr_25377_25439 = state_25357__$1;
(statearr_25377_25439[(1)] = (15));

} else {
var statearr_25378_25440 = state_25357__$1;
(statearr_25378_25440[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (16))){
var inst_25337 = (state_25357[(11)]);
var state_25357__$1 = state_25357;
var statearr_25379_25441 = state_25357__$1;
(statearr_25379_25441[(2)] = inst_25337);

(statearr_25379_25441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (10))){
var inst_25329 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25380_25442 = state_25357__$1;
(statearr_25380_25442[(2)] = inst_25329);

(statearr_25380_25442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (18))){
var inst_25340 = (state_25357[(2)]);
var state_25357__$1 = state_25357;
var statearr_25381_25443 = state_25357__$1;
(statearr_25381_25443[(2)] = inst_25340);

(statearr_25381_25443[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25358 === (8))){
var inst_25326 = cljs.core.async.close_BANG_.call(null,to);
var state_25357__$1 = state_25357;
var statearr_25382_25444 = state_25357__$1;
(statearr_25382_25444[(2)] = inst_25326);

(statearr_25382_25444[(1)] = (10));


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
});})(c__15442__auto__,jobs,results,process,async))
;
return ((function (switch__15386__auto__,c__15442__auto__,jobs,results,process,async){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25386[(0)] = state_machine__15387__auto__);

(statearr_25386[(1)] = (1));

return statearr_25386;
});
var state_machine__15387__auto____1 = (function (state_25357){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_25357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25387){if((e25387 instanceof Object)){
var ex__15390__auto__ = e25387;
var statearr_25388_25445 = state_25357;
(statearr_25388_25445[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25446 = state_25357;
state_25357 = G__25446;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_25357){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_25357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__,jobs,results,process,async))
})();
var state__15444__auto__ = (function (){var statearr_25389 = f__15443__auto__.call(null);
(statearr_25389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_25389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__,jobs,results,process,async))
);

return c__15442__auto__;
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
var c__15442__auto___25547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___25547,tc,fc){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___25547,tc,fc){
return (function (state_25522){
var state_val_25523 = (state_25522[(1)]);
if((state_val_25523 === (7))){
var inst_25518 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25524_25548 = state_25522__$1;
(statearr_25524_25548[(2)] = inst_25518);

(statearr_25524_25548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (1))){
var state_25522__$1 = state_25522;
var statearr_25525_25549 = state_25522__$1;
(statearr_25525_25549[(2)] = null);

(statearr_25525_25549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (4))){
var inst_25499 = (state_25522[(7)]);
var inst_25499__$1 = (state_25522[(2)]);
var inst_25500 = (inst_25499__$1 == null);
var state_25522__$1 = (function (){var statearr_25526 = state_25522;
(statearr_25526[(7)] = inst_25499__$1);

return statearr_25526;
})();
if(cljs.core.truth_(inst_25500)){
var statearr_25527_25550 = state_25522__$1;
(statearr_25527_25550[(1)] = (5));

} else {
var statearr_25528_25551 = state_25522__$1;
(statearr_25528_25551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (13))){
var state_25522__$1 = state_25522;
var statearr_25529_25552 = state_25522__$1;
(statearr_25529_25552[(2)] = null);

(statearr_25529_25552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (6))){
var inst_25499 = (state_25522[(7)]);
var inst_25505 = p.call(null,inst_25499);
var state_25522__$1 = state_25522;
if(cljs.core.truth_(inst_25505)){
var statearr_25530_25553 = state_25522__$1;
(statearr_25530_25553[(1)] = (9));

} else {
var statearr_25531_25554 = state_25522__$1;
(statearr_25531_25554[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (3))){
var inst_25520 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25522__$1,inst_25520);
} else {
if((state_val_25523 === (12))){
var state_25522__$1 = state_25522;
var statearr_25532_25555 = state_25522__$1;
(statearr_25532_25555[(2)] = null);

(statearr_25532_25555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (2))){
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25522__$1,(4),ch);
} else {
if((state_val_25523 === (11))){
var inst_25499 = (state_25522[(7)]);
var inst_25509 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25522__$1,(8),inst_25509,inst_25499);
} else {
if((state_val_25523 === (9))){
var state_25522__$1 = state_25522;
var statearr_25533_25556 = state_25522__$1;
(statearr_25533_25556[(2)] = tc);

(statearr_25533_25556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (5))){
var inst_25502 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25503 = cljs.core.async.close_BANG_.call(null,fc);
var state_25522__$1 = (function (){var statearr_25534 = state_25522;
(statearr_25534[(8)] = inst_25502);

return statearr_25534;
})();
var statearr_25535_25557 = state_25522__$1;
(statearr_25535_25557[(2)] = inst_25503);

(statearr_25535_25557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (14))){
var inst_25516 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
var statearr_25536_25558 = state_25522__$1;
(statearr_25536_25558[(2)] = inst_25516);

(statearr_25536_25558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (10))){
var state_25522__$1 = state_25522;
var statearr_25537_25559 = state_25522__$1;
(statearr_25537_25559[(2)] = fc);

(statearr_25537_25559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25523 === (8))){
var inst_25511 = (state_25522[(2)]);
var state_25522__$1 = state_25522;
if(cljs.core.truth_(inst_25511)){
var statearr_25538_25560 = state_25522__$1;
(statearr_25538_25560[(1)] = (12));

} else {
var statearr_25539_25561 = state_25522__$1;
(statearr_25539_25561[(1)] = (13));

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
});})(c__15442__auto___25547,tc,fc))
;
return ((function (switch__15386__auto__,c__15442__auto___25547,tc,fc){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25543 = [null,null,null,null,null,null,null,null,null];
(statearr_25543[(0)] = state_machine__15387__auto__);

(statearr_25543[(1)] = (1));

return statearr_25543;
});
var state_machine__15387__auto____1 = (function (state_25522){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_25522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25544){if((e25544 instanceof Object)){
var ex__15390__auto__ = e25544;
var statearr_25545_25562 = state_25522;
(statearr_25545_25562[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25563 = state_25522;
state_25522 = G__25563;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_25522){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_25522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___25547,tc,fc))
})();
var state__15444__auto__ = (function (){var statearr_25546 = f__15443__auto__.call(null);
(statearr_25546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___25547);

return statearr_25546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___25547,tc,fc))
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
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__){
return (function (state_25610){
var state_val_25611 = (state_25610[(1)]);
if((state_val_25611 === (7))){
var inst_25606 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
var statearr_25612_25628 = state_25610__$1;
(statearr_25612_25628[(2)] = inst_25606);

(statearr_25612_25628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (6))){
var inst_25599 = (state_25610[(7)]);
var inst_25596 = (state_25610[(8)]);
var inst_25603 = f.call(null,inst_25596,inst_25599);
var inst_25596__$1 = inst_25603;
var state_25610__$1 = (function (){var statearr_25613 = state_25610;
(statearr_25613[(8)] = inst_25596__$1);

return statearr_25613;
})();
var statearr_25614_25629 = state_25610__$1;
(statearr_25614_25629[(2)] = null);

(statearr_25614_25629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (5))){
var inst_25596 = (state_25610[(8)]);
var state_25610__$1 = state_25610;
var statearr_25615_25630 = state_25610__$1;
(statearr_25615_25630[(2)] = inst_25596);

(statearr_25615_25630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (4))){
var inst_25599 = (state_25610[(7)]);
var inst_25599__$1 = (state_25610[(2)]);
var inst_25600 = (inst_25599__$1 == null);
var state_25610__$1 = (function (){var statearr_25616 = state_25610;
(statearr_25616[(7)] = inst_25599__$1);

return statearr_25616;
})();
if(cljs.core.truth_(inst_25600)){
var statearr_25617_25631 = state_25610__$1;
(statearr_25617_25631[(1)] = (5));

} else {
var statearr_25618_25632 = state_25610__$1;
(statearr_25618_25632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (3))){
var inst_25608 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25610__$1,inst_25608);
} else {
if((state_val_25611 === (2))){
var state_25610__$1 = state_25610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25610__$1,(4),ch);
} else {
if((state_val_25611 === (1))){
var inst_25596 = init;
var state_25610__$1 = (function (){var statearr_25619 = state_25610;
(statearr_25619[(8)] = inst_25596);

return statearr_25619;
})();
var statearr_25620_25633 = state_25610__$1;
(statearr_25620_25633[(2)] = null);

(statearr_25620_25633[(1)] = (2));


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
});})(c__15442__auto__))
;
return ((function (switch__15386__auto__,c__15442__auto__){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25624 = [null,null,null,null,null,null,null,null,null];
(statearr_25624[(0)] = state_machine__15387__auto__);

(statearr_25624[(1)] = (1));

return statearr_25624;
});
var state_machine__15387__auto____1 = (function (state_25610){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_25610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25625){if((e25625 instanceof Object)){
var ex__15390__auto__ = e25625;
var statearr_25626_25634 = state_25610;
(statearr_25626_25634[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25635 = state_25610;
state_25610 = G__25635;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_25610){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_25610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__))
})();
var state__15444__auto__ = (function (){var statearr_25627 = f__15443__auto__.call(null);
(statearr_25627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_25627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__))
);

return c__15442__auto__;
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
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__){
return (function (state_25709){
var state_val_25710 = (state_25709[(1)]);
if((state_val_25710 === (7))){
var inst_25691 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25711_25734 = state_25709__$1;
(statearr_25711_25734[(2)] = inst_25691);

(statearr_25711_25734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (1))){
var inst_25685 = cljs.core.seq.call(null,coll);
var inst_25686 = inst_25685;
var state_25709__$1 = (function (){var statearr_25712 = state_25709;
(statearr_25712[(7)] = inst_25686);

return statearr_25712;
})();
var statearr_25713_25735 = state_25709__$1;
(statearr_25713_25735[(2)] = null);

(statearr_25713_25735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (4))){
var inst_25686 = (state_25709[(7)]);
var inst_25689 = cljs.core.first.call(null,inst_25686);
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25709__$1,(7),ch,inst_25689);
} else {
if((state_val_25710 === (13))){
var inst_25703 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25714_25736 = state_25709__$1;
(statearr_25714_25736[(2)] = inst_25703);

(statearr_25714_25736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (6))){
var inst_25694 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
if(cljs.core.truth_(inst_25694)){
var statearr_25715_25737 = state_25709__$1;
(statearr_25715_25737[(1)] = (8));

} else {
var statearr_25716_25738 = state_25709__$1;
(statearr_25716_25738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (3))){
var inst_25707 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25709__$1,inst_25707);
} else {
if((state_val_25710 === (12))){
var state_25709__$1 = state_25709;
var statearr_25717_25739 = state_25709__$1;
(statearr_25717_25739[(2)] = null);

(statearr_25717_25739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (2))){
var inst_25686 = (state_25709[(7)]);
var state_25709__$1 = state_25709;
if(cljs.core.truth_(inst_25686)){
var statearr_25718_25740 = state_25709__$1;
(statearr_25718_25740[(1)] = (4));

} else {
var statearr_25719_25741 = state_25709__$1;
(statearr_25719_25741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (11))){
var inst_25700 = cljs.core.async.close_BANG_.call(null,ch);
var state_25709__$1 = state_25709;
var statearr_25720_25742 = state_25709__$1;
(statearr_25720_25742[(2)] = inst_25700);

(statearr_25720_25742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (9))){
var state_25709__$1 = state_25709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25721_25743 = state_25709__$1;
(statearr_25721_25743[(1)] = (11));

} else {
var statearr_25722_25744 = state_25709__$1;
(statearr_25722_25744[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (5))){
var inst_25686 = (state_25709[(7)]);
var state_25709__$1 = state_25709;
var statearr_25723_25745 = state_25709__$1;
(statearr_25723_25745[(2)] = inst_25686);

(statearr_25723_25745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (10))){
var inst_25705 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25724_25746 = state_25709__$1;
(statearr_25724_25746[(2)] = inst_25705);

(statearr_25724_25746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (8))){
var inst_25686 = (state_25709[(7)]);
var inst_25696 = cljs.core.next.call(null,inst_25686);
var inst_25686__$1 = inst_25696;
var state_25709__$1 = (function (){var statearr_25725 = state_25709;
(statearr_25725[(7)] = inst_25686__$1);

return statearr_25725;
})();
var statearr_25726_25747 = state_25709__$1;
(statearr_25726_25747[(2)] = null);

(statearr_25726_25747[(1)] = (2));


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
});})(c__15442__auto__))
;
return ((function (switch__15386__auto__,c__15442__auto__){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_25730 = [null,null,null,null,null,null,null,null];
(statearr_25730[(0)] = state_machine__15387__auto__);

(statearr_25730[(1)] = (1));

return statearr_25730;
});
var state_machine__15387__auto____1 = (function (state_25709){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_25709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e25731){if((e25731 instanceof Object)){
var ex__15390__auto__ = e25731;
var statearr_25732_25748 = state_25709;
(statearr_25732_25748[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25749 = state_25709;
state_25709 = G__25749;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_25709){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_25709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__))
})();
var state__15444__auto__ = (function (){var statearr_25733 = f__15443__auto__.call(null);
(statearr_25733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_25733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__))
);

return c__15442__auto__;
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

cljs.core.async.Mux = (function (){var obj25751 = {};
return obj25751;
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


cljs.core.async.Mult = (function (){var obj25753 = {};
return obj25753;
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
if(typeof cljs.core.async.t25975 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25975 = (function (cs,ch,mult,meta25976){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25976 = meta25976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25975.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25975.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25975.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25975.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25975.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25977){
var self__ = this;
var _25977__$1 = this;
return self__.meta25976;
});})(cs))
;

cljs.core.async.t25975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25977,meta25976__$1){
var self__ = this;
var _25977__$1 = this;
return (new cljs.core.async.t25975(self__.cs,self__.ch,self__.mult,meta25976__$1));
});})(cs))
;

cljs.core.async.t25975.cljs$lang$type = true;

cljs.core.async.t25975.cljs$lang$ctorStr = "cljs.core.async/t25975";

cljs.core.async.t25975.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t25975");
});})(cs))
;

cljs.core.async.__GT_t25975 = ((function (cs){
return (function __GT_t25975(cs__$1,ch__$1,mult__$1,meta25976){
return (new cljs.core.async.t25975(cs__$1,ch__$1,mult__$1,meta25976));
});})(cs))
;

}

return (new cljs.core.async.t25975(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15442__auto___26196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___26196,cs,m,dchan,dctr,done){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___26196,cs,m,dchan,dctr,done){
return (function (state_26108){
var state_val_26109 = (state_26108[(1)]);
if((state_val_26109 === (7))){
var inst_26104 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26110_26197 = state_26108__$1;
(statearr_26110_26197[(2)] = inst_26104);

(statearr_26110_26197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (20))){
var inst_26009 = (state_26108[(7)]);
var inst_26019 = cljs.core.first.call(null,inst_26009);
var inst_26020 = cljs.core.nth.call(null,inst_26019,(0),null);
var inst_26021 = cljs.core.nth.call(null,inst_26019,(1),null);
var state_26108__$1 = (function (){var statearr_26111 = state_26108;
(statearr_26111[(8)] = inst_26020);

return statearr_26111;
})();
if(cljs.core.truth_(inst_26021)){
var statearr_26112_26198 = state_26108__$1;
(statearr_26112_26198[(1)] = (22));

} else {
var statearr_26113_26199 = state_26108__$1;
(statearr_26113_26199[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (27))){
var inst_26049 = (state_26108[(9)]);
var inst_26051 = (state_26108[(10)]);
var inst_26056 = (state_26108[(11)]);
var inst_25980 = (state_26108[(12)]);
var inst_26056__$1 = cljs.core._nth.call(null,inst_26049,inst_26051);
var inst_26057 = cljs.core.async.put_BANG_.call(null,inst_26056__$1,inst_25980,done);
var state_26108__$1 = (function (){var statearr_26114 = state_26108;
(statearr_26114[(11)] = inst_26056__$1);

return statearr_26114;
})();
if(cljs.core.truth_(inst_26057)){
var statearr_26115_26200 = state_26108__$1;
(statearr_26115_26200[(1)] = (30));

} else {
var statearr_26116_26201 = state_26108__$1;
(statearr_26116_26201[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (1))){
var state_26108__$1 = state_26108;
var statearr_26117_26202 = state_26108__$1;
(statearr_26117_26202[(2)] = null);

(statearr_26117_26202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (24))){
var inst_26009 = (state_26108[(7)]);
var inst_26026 = (state_26108[(2)]);
var inst_26027 = cljs.core.next.call(null,inst_26009);
var inst_25989 = inst_26027;
var inst_25990 = null;
var inst_25991 = (0);
var inst_25992 = (0);
var state_26108__$1 = (function (){var statearr_26118 = state_26108;
(statearr_26118[(13)] = inst_25992);

(statearr_26118[(14)] = inst_25991);

(statearr_26118[(15)] = inst_25990);

(statearr_26118[(16)] = inst_26026);

(statearr_26118[(17)] = inst_25989);

return statearr_26118;
})();
var statearr_26119_26203 = state_26108__$1;
(statearr_26119_26203[(2)] = null);

(statearr_26119_26203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (39))){
var state_26108__$1 = state_26108;
var statearr_26123_26204 = state_26108__$1;
(statearr_26123_26204[(2)] = null);

(statearr_26123_26204[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (4))){
var inst_25980 = (state_26108[(12)]);
var inst_25980__$1 = (state_26108[(2)]);
var inst_25981 = (inst_25980__$1 == null);
var state_26108__$1 = (function (){var statearr_26124 = state_26108;
(statearr_26124[(12)] = inst_25980__$1);

return statearr_26124;
})();
if(cljs.core.truth_(inst_25981)){
var statearr_26125_26205 = state_26108__$1;
(statearr_26125_26205[(1)] = (5));

} else {
var statearr_26126_26206 = state_26108__$1;
(statearr_26126_26206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (15))){
var inst_25992 = (state_26108[(13)]);
var inst_25991 = (state_26108[(14)]);
var inst_25990 = (state_26108[(15)]);
var inst_25989 = (state_26108[(17)]);
var inst_26005 = (state_26108[(2)]);
var inst_26006 = (inst_25992 + (1));
var tmp26120 = inst_25991;
var tmp26121 = inst_25990;
var tmp26122 = inst_25989;
var inst_25989__$1 = tmp26122;
var inst_25990__$1 = tmp26121;
var inst_25991__$1 = tmp26120;
var inst_25992__$1 = inst_26006;
var state_26108__$1 = (function (){var statearr_26127 = state_26108;
(statearr_26127[(13)] = inst_25992__$1);

(statearr_26127[(14)] = inst_25991__$1);

(statearr_26127[(18)] = inst_26005);

(statearr_26127[(15)] = inst_25990__$1);

(statearr_26127[(17)] = inst_25989__$1);

return statearr_26127;
})();
var statearr_26128_26207 = state_26108__$1;
(statearr_26128_26207[(2)] = null);

(statearr_26128_26207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (21))){
var inst_26030 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26132_26208 = state_26108__$1;
(statearr_26132_26208[(2)] = inst_26030);

(statearr_26132_26208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (31))){
var inst_26056 = (state_26108[(11)]);
var inst_26060 = done.call(null,null);
var inst_26061 = cljs.core.async.untap_STAR_.call(null,m,inst_26056);
var state_26108__$1 = (function (){var statearr_26133 = state_26108;
(statearr_26133[(19)] = inst_26060);

return statearr_26133;
})();
var statearr_26134_26209 = state_26108__$1;
(statearr_26134_26209[(2)] = inst_26061);

(statearr_26134_26209[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (32))){
var inst_26049 = (state_26108[(9)]);
var inst_26051 = (state_26108[(10)]);
var inst_26048 = (state_26108[(20)]);
var inst_26050 = (state_26108[(21)]);
var inst_26063 = (state_26108[(2)]);
var inst_26064 = (inst_26051 + (1));
var tmp26129 = inst_26049;
var tmp26130 = inst_26048;
var tmp26131 = inst_26050;
var inst_26048__$1 = tmp26130;
var inst_26049__$1 = tmp26129;
var inst_26050__$1 = tmp26131;
var inst_26051__$1 = inst_26064;
var state_26108__$1 = (function (){var statearr_26135 = state_26108;
(statearr_26135[(9)] = inst_26049__$1);

(statearr_26135[(10)] = inst_26051__$1);

(statearr_26135[(20)] = inst_26048__$1);

(statearr_26135[(21)] = inst_26050__$1);

(statearr_26135[(22)] = inst_26063);

return statearr_26135;
})();
var statearr_26136_26210 = state_26108__$1;
(statearr_26136_26210[(2)] = null);

(statearr_26136_26210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (40))){
var inst_26076 = (state_26108[(23)]);
var inst_26080 = done.call(null,null);
var inst_26081 = cljs.core.async.untap_STAR_.call(null,m,inst_26076);
var state_26108__$1 = (function (){var statearr_26137 = state_26108;
(statearr_26137[(24)] = inst_26080);

return statearr_26137;
})();
var statearr_26138_26211 = state_26108__$1;
(statearr_26138_26211[(2)] = inst_26081);

(statearr_26138_26211[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (33))){
var inst_26067 = (state_26108[(25)]);
var inst_26069 = cljs.core.chunked_seq_QMARK_.call(null,inst_26067);
var state_26108__$1 = state_26108;
if(inst_26069){
var statearr_26139_26212 = state_26108__$1;
(statearr_26139_26212[(1)] = (36));

} else {
var statearr_26140_26213 = state_26108__$1;
(statearr_26140_26213[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (13))){
var inst_25999 = (state_26108[(26)]);
var inst_26002 = cljs.core.async.close_BANG_.call(null,inst_25999);
var state_26108__$1 = state_26108;
var statearr_26141_26214 = state_26108__$1;
(statearr_26141_26214[(2)] = inst_26002);

(statearr_26141_26214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (22))){
var inst_26020 = (state_26108[(8)]);
var inst_26023 = cljs.core.async.close_BANG_.call(null,inst_26020);
var state_26108__$1 = state_26108;
var statearr_26142_26215 = state_26108__$1;
(statearr_26142_26215[(2)] = inst_26023);

(statearr_26142_26215[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (36))){
var inst_26067 = (state_26108[(25)]);
var inst_26071 = cljs.core.chunk_first.call(null,inst_26067);
var inst_26072 = cljs.core.chunk_rest.call(null,inst_26067);
var inst_26073 = cljs.core.count.call(null,inst_26071);
var inst_26048 = inst_26072;
var inst_26049 = inst_26071;
var inst_26050 = inst_26073;
var inst_26051 = (0);
var state_26108__$1 = (function (){var statearr_26143 = state_26108;
(statearr_26143[(9)] = inst_26049);

(statearr_26143[(10)] = inst_26051);

(statearr_26143[(20)] = inst_26048);

(statearr_26143[(21)] = inst_26050);

return statearr_26143;
})();
var statearr_26144_26216 = state_26108__$1;
(statearr_26144_26216[(2)] = null);

(statearr_26144_26216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (41))){
var inst_26067 = (state_26108[(25)]);
var inst_26083 = (state_26108[(2)]);
var inst_26084 = cljs.core.next.call(null,inst_26067);
var inst_26048 = inst_26084;
var inst_26049 = null;
var inst_26050 = (0);
var inst_26051 = (0);
var state_26108__$1 = (function (){var statearr_26145 = state_26108;
(statearr_26145[(9)] = inst_26049);

(statearr_26145[(10)] = inst_26051);

(statearr_26145[(20)] = inst_26048);

(statearr_26145[(21)] = inst_26050);

(statearr_26145[(27)] = inst_26083);

return statearr_26145;
})();
var statearr_26146_26217 = state_26108__$1;
(statearr_26146_26217[(2)] = null);

(statearr_26146_26217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (43))){
var state_26108__$1 = state_26108;
var statearr_26147_26218 = state_26108__$1;
(statearr_26147_26218[(2)] = null);

(statearr_26147_26218[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (29))){
var inst_26092 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26148_26219 = state_26108__$1;
(statearr_26148_26219[(2)] = inst_26092);

(statearr_26148_26219[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (44))){
var inst_26101 = (state_26108[(2)]);
var state_26108__$1 = (function (){var statearr_26149 = state_26108;
(statearr_26149[(28)] = inst_26101);

return statearr_26149;
})();
var statearr_26150_26220 = state_26108__$1;
(statearr_26150_26220[(2)] = null);

(statearr_26150_26220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (6))){
var inst_26040 = (state_26108[(29)]);
var inst_26039 = cljs.core.deref.call(null,cs);
var inst_26040__$1 = cljs.core.keys.call(null,inst_26039);
var inst_26041 = cljs.core.count.call(null,inst_26040__$1);
var inst_26042 = cljs.core.reset_BANG_.call(null,dctr,inst_26041);
var inst_26047 = cljs.core.seq.call(null,inst_26040__$1);
var inst_26048 = inst_26047;
var inst_26049 = null;
var inst_26050 = (0);
var inst_26051 = (0);
var state_26108__$1 = (function (){var statearr_26151 = state_26108;
(statearr_26151[(9)] = inst_26049);

(statearr_26151[(29)] = inst_26040__$1);

(statearr_26151[(10)] = inst_26051);

(statearr_26151[(20)] = inst_26048);

(statearr_26151[(21)] = inst_26050);

(statearr_26151[(30)] = inst_26042);

return statearr_26151;
})();
var statearr_26152_26221 = state_26108__$1;
(statearr_26152_26221[(2)] = null);

(statearr_26152_26221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (28))){
var inst_26067 = (state_26108[(25)]);
var inst_26048 = (state_26108[(20)]);
var inst_26067__$1 = cljs.core.seq.call(null,inst_26048);
var state_26108__$1 = (function (){var statearr_26153 = state_26108;
(statearr_26153[(25)] = inst_26067__$1);

return statearr_26153;
})();
if(inst_26067__$1){
var statearr_26154_26222 = state_26108__$1;
(statearr_26154_26222[(1)] = (33));

} else {
var statearr_26155_26223 = state_26108__$1;
(statearr_26155_26223[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (25))){
var inst_26051 = (state_26108[(10)]);
var inst_26050 = (state_26108[(21)]);
var inst_26053 = (inst_26051 < inst_26050);
var inst_26054 = inst_26053;
var state_26108__$1 = state_26108;
if(cljs.core.truth_(inst_26054)){
var statearr_26156_26224 = state_26108__$1;
(statearr_26156_26224[(1)] = (27));

} else {
var statearr_26157_26225 = state_26108__$1;
(statearr_26157_26225[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (34))){
var state_26108__$1 = state_26108;
var statearr_26158_26226 = state_26108__$1;
(statearr_26158_26226[(2)] = null);

(statearr_26158_26226[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (17))){
var state_26108__$1 = state_26108;
var statearr_26159_26227 = state_26108__$1;
(statearr_26159_26227[(2)] = null);

(statearr_26159_26227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (3))){
var inst_26106 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26108__$1,inst_26106);
} else {
if((state_val_26109 === (12))){
var inst_26035 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26160_26228 = state_26108__$1;
(statearr_26160_26228[(2)] = inst_26035);

(statearr_26160_26228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (2))){
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26108__$1,(4),ch);
} else {
if((state_val_26109 === (23))){
var state_26108__$1 = state_26108;
var statearr_26161_26229 = state_26108__$1;
(statearr_26161_26229[(2)] = null);

(statearr_26161_26229[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (35))){
var inst_26090 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26162_26230 = state_26108__$1;
(statearr_26162_26230[(2)] = inst_26090);

(statearr_26162_26230[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (19))){
var inst_26009 = (state_26108[(7)]);
var inst_26013 = cljs.core.chunk_first.call(null,inst_26009);
var inst_26014 = cljs.core.chunk_rest.call(null,inst_26009);
var inst_26015 = cljs.core.count.call(null,inst_26013);
var inst_25989 = inst_26014;
var inst_25990 = inst_26013;
var inst_25991 = inst_26015;
var inst_25992 = (0);
var state_26108__$1 = (function (){var statearr_26163 = state_26108;
(statearr_26163[(13)] = inst_25992);

(statearr_26163[(14)] = inst_25991);

(statearr_26163[(15)] = inst_25990);

(statearr_26163[(17)] = inst_25989);

return statearr_26163;
})();
var statearr_26164_26231 = state_26108__$1;
(statearr_26164_26231[(2)] = null);

(statearr_26164_26231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (11))){
var inst_25989 = (state_26108[(17)]);
var inst_26009 = (state_26108[(7)]);
var inst_26009__$1 = cljs.core.seq.call(null,inst_25989);
var state_26108__$1 = (function (){var statearr_26165 = state_26108;
(statearr_26165[(7)] = inst_26009__$1);

return statearr_26165;
})();
if(inst_26009__$1){
var statearr_26166_26232 = state_26108__$1;
(statearr_26166_26232[(1)] = (16));

} else {
var statearr_26167_26233 = state_26108__$1;
(statearr_26167_26233[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (9))){
var inst_26037 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26168_26234 = state_26108__$1;
(statearr_26168_26234[(2)] = inst_26037);

(statearr_26168_26234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (5))){
var inst_25987 = cljs.core.deref.call(null,cs);
var inst_25988 = cljs.core.seq.call(null,inst_25987);
var inst_25989 = inst_25988;
var inst_25990 = null;
var inst_25991 = (0);
var inst_25992 = (0);
var state_26108__$1 = (function (){var statearr_26169 = state_26108;
(statearr_26169[(13)] = inst_25992);

(statearr_26169[(14)] = inst_25991);

(statearr_26169[(15)] = inst_25990);

(statearr_26169[(17)] = inst_25989);

return statearr_26169;
})();
var statearr_26170_26235 = state_26108__$1;
(statearr_26170_26235[(2)] = null);

(statearr_26170_26235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (14))){
var state_26108__$1 = state_26108;
var statearr_26171_26236 = state_26108__$1;
(statearr_26171_26236[(2)] = null);

(statearr_26171_26236[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (45))){
var inst_26098 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26172_26237 = state_26108__$1;
(statearr_26172_26237[(2)] = inst_26098);

(statearr_26172_26237[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (26))){
var inst_26040 = (state_26108[(29)]);
var inst_26094 = (state_26108[(2)]);
var inst_26095 = cljs.core.seq.call(null,inst_26040);
var state_26108__$1 = (function (){var statearr_26173 = state_26108;
(statearr_26173[(31)] = inst_26094);

return statearr_26173;
})();
if(inst_26095){
var statearr_26174_26238 = state_26108__$1;
(statearr_26174_26238[(1)] = (42));

} else {
var statearr_26175_26239 = state_26108__$1;
(statearr_26175_26239[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (16))){
var inst_26009 = (state_26108[(7)]);
var inst_26011 = cljs.core.chunked_seq_QMARK_.call(null,inst_26009);
var state_26108__$1 = state_26108;
if(inst_26011){
var statearr_26176_26240 = state_26108__$1;
(statearr_26176_26240[(1)] = (19));

} else {
var statearr_26177_26241 = state_26108__$1;
(statearr_26177_26241[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (38))){
var inst_26087 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26178_26242 = state_26108__$1;
(statearr_26178_26242[(2)] = inst_26087);

(statearr_26178_26242[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (30))){
var state_26108__$1 = state_26108;
var statearr_26179_26243 = state_26108__$1;
(statearr_26179_26243[(2)] = null);

(statearr_26179_26243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (10))){
var inst_25992 = (state_26108[(13)]);
var inst_25990 = (state_26108[(15)]);
var inst_25998 = cljs.core._nth.call(null,inst_25990,inst_25992);
var inst_25999 = cljs.core.nth.call(null,inst_25998,(0),null);
var inst_26000 = cljs.core.nth.call(null,inst_25998,(1),null);
var state_26108__$1 = (function (){var statearr_26180 = state_26108;
(statearr_26180[(26)] = inst_25999);

return statearr_26180;
})();
if(cljs.core.truth_(inst_26000)){
var statearr_26181_26244 = state_26108__$1;
(statearr_26181_26244[(1)] = (13));

} else {
var statearr_26182_26245 = state_26108__$1;
(statearr_26182_26245[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (18))){
var inst_26033 = (state_26108[(2)]);
var state_26108__$1 = state_26108;
var statearr_26183_26246 = state_26108__$1;
(statearr_26183_26246[(2)] = inst_26033);

(statearr_26183_26246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (42))){
var state_26108__$1 = state_26108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26108__$1,(45),dchan);
} else {
if((state_val_26109 === (37))){
var inst_26076 = (state_26108[(23)]);
var inst_26067 = (state_26108[(25)]);
var inst_25980 = (state_26108[(12)]);
var inst_26076__$1 = cljs.core.first.call(null,inst_26067);
var inst_26077 = cljs.core.async.put_BANG_.call(null,inst_26076__$1,inst_25980,done);
var state_26108__$1 = (function (){var statearr_26184 = state_26108;
(statearr_26184[(23)] = inst_26076__$1);

return statearr_26184;
})();
if(cljs.core.truth_(inst_26077)){
var statearr_26185_26247 = state_26108__$1;
(statearr_26185_26247[(1)] = (39));

} else {
var statearr_26186_26248 = state_26108__$1;
(statearr_26186_26248[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26109 === (8))){
var inst_25992 = (state_26108[(13)]);
var inst_25991 = (state_26108[(14)]);
var inst_25994 = (inst_25992 < inst_25991);
var inst_25995 = inst_25994;
var state_26108__$1 = state_26108;
if(cljs.core.truth_(inst_25995)){
var statearr_26187_26249 = state_26108__$1;
(statearr_26187_26249[(1)] = (10));

} else {
var statearr_26188_26250 = state_26108__$1;
(statearr_26188_26250[(1)] = (11));

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
});})(c__15442__auto___26196,cs,m,dchan,dctr,done))
;
return ((function (switch__15386__auto__,c__15442__auto___26196,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_26192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26192[(0)] = state_machine__15387__auto__);

(statearr_26192[(1)] = (1));

return statearr_26192;
});
var state_machine__15387__auto____1 = (function (state_26108){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_26108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e26193){if((e26193 instanceof Object)){
var ex__15390__auto__ = e26193;
var statearr_26194_26251 = state_26108;
(statearr_26194_26251[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26252 = state_26108;
state_26108 = G__26252;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_26108){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_26108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___26196,cs,m,dchan,dctr,done))
})();
var state__15444__auto__ = (function (){var statearr_26195 = f__15443__auto__.call(null);
(statearr_26195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___26196);

return statearr_26195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___26196,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26254 = {};
return obj26254;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26255){
var map__26260 = p__26255;
var map__26260__$1 = ((cljs.core.seq_QMARK_.call(null,map__26260))?cljs.core.apply.call(null,cljs.core.hash_map,map__26260):map__26260);
var opts = map__26260__$1;
var statearr_26261_26264 = state;
(statearr_26261_26264[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26260,map__26260__$1,opts){
return (function (val){
var statearr_26262_26265 = state;
(statearr_26262_26265[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26260,map__26260__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26263_26266 = state;
(statearr_26263_26266[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26255 = null;
if (arguments.length > 3) {
var G__26267__i = 0, G__26267__a = new Array(arguments.length -  3);
while (G__26267__i < G__26267__a.length) {G__26267__a[G__26267__i] = arguments[G__26267__i + 3]; ++G__26267__i;}
  p__26255 = new cljs.core.IndexedSeq(G__26267__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26255);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26268){
var state = cljs.core.first(arglist__26268);
arglist__26268 = cljs.core.next(arglist__26268);
var cont_block = cljs.core.first(arglist__26268);
arglist__26268 = cljs.core.next(arglist__26268);
var ports = cljs.core.first(arglist__26268);
var p__26255 = cljs.core.rest(arglist__26268);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26255);
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
if(typeof cljs.core.async.t26388 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26388 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26389){
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
this.meta26389 = meta26389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26388.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26388.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26388.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26388.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26388.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26388.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26388.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26390){
var self__ = this;
var _26390__$1 = this;
return self__.meta26389;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26390,meta26389__$1){
var self__ = this;
var _26390__$1 = this;
return (new cljs.core.async.t26388(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26389__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26388.cljs$lang$type = true;

cljs.core.async.t26388.cljs$lang$ctorStr = "cljs.core.async/t26388";

cljs.core.async.t26388.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t26388");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26388 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26388(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26389){
return (new cljs.core.async.t26388(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26389));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26388(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15442__auto___26507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___26507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___26507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26460){
var state_val_26461 = (state_26460[(1)]);
if((state_val_26461 === (7))){
var inst_26404 = (state_26460[(7)]);
var inst_26409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26404);
var state_26460__$1 = state_26460;
var statearr_26462_26508 = state_26460__$1;
(statearr_26462_26508[(2)] = inst_26409);

(statearr_26462_26508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (20))){
var inst_26419 = (state_26460[(8)]);
var state_26460__$1 = state_26460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26460__$1,(23),out,inst_26419);
} else {
if((state_val_26461 === (1))){
var inst_26394 = (state_26460[(9)]);
var inst_26394__$1 = calc_state.call(null);
var inst_26395 = cljs.core.seq_QMARK_.call(null,inst_26394__$1);
var state_26460__$1 = (function (){var statearr_26463 = state_26460;
(statearr_26463[(9)] = inst_26394__$1);

return statearr_26463;
})();
if(inst_26395){
var statearr_26464_26509 = state_26460__$1;
(statearr_26464_26509[(1)] = (2));

} else {
var statearr_26465_26510 = state_26460__$1;
(statearr_26465_26510[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (24))){
var inst_26412 = (state_26460[(10)]);
var inst_26404 = inst_26412;
var state_26460__$1 = (function (){var statearr_26466 = state_26460;
(statearr_26466[(7)] = inst_26404);

return statearr_26466;
})();
var statearr_26467_26511 = state_26460__$1;
(statearr_26467_26511[(2)] = null);

(statearr_26467_26511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (4))){
var inst_26394 = (state_26460[(9)]);
var inst_26400 = (state_26460[(2)]);
var inst_26401 = cljs.core.get.call(null,inst_26400,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26402 = cljs.core.get.call(null,inst_26400,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26403 = cljs.core.get.call(null,inst_26400,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26404 = inst_26394;
var state_26460__$1 = (function (){var statearr_26468 = state_26460;
(statearr_26468[(11)] = inst_26403);

(statearr_26468[(12)] = inst_26401);

(statearr_26468[(7)] = inst_26404);

(statearr_26468[(13)] = inst_26402);

return statearr_26468;
})();
var statearr_26469_26512 = state_26460__$1;
(statearr_26469_26512[(2)] = null);

(statearr_26469_26512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (15))){
var state_26460__$1 = state_26460;
var statearr_26470_26513 = state_26460__$1;
(statearr_26470_26513[(2)] = null);

(statearr_26470_26513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (21))){
var inst_26412 = (state_26460[(10)]);
var inst_26404 = inst_26412;
var state_26460__$1 = (function (){var statearr_26471 = state_26460;
(statearr_26471[(7)] = inst_26404);

return statearr_26471;
})();
var statearr_26472_26514 = state_26460__$1;
(statearr_26472_26514[(2)] = null);

(statearr_26472_26514[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (13))){
var inst_26456 = (state_26460[(2)]);
var state_26460__$1 = state_26460;
var statearr_26473_26515 = state_26460__$1;
(statearr_26473_26515[(2)] = inst_26456);

(statearr_26473_26515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (22))){
var inst_26454 = (state_26460[(2)]);
var state_26460__$1 = state_26460;
var statearr_26474_26516 = state_26460__$1;
(statearr_26474_26516[(2)] = inst_26454);

(statearr_26474_26516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (6))){
var inst_26458 = (state_26460[(2)]);
var state_26460__$1 = state_26460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26460__$1,inst_26458);
} else {
if((state_val_26461 === (25))){
var state_26460__$1 = state_26460;
var statearr_26475_26517 = state_26460__$1;
(statearr_26475_26517[(2)] = null);

(statearr_26475_26517[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (17))){
var inst_26434 = (state_26460[(14)]);
var state_26460__$1 = state_26460;
var statearr_26476_26518 = state_26460__$1;
(statearr_26476_26518[(2)] = inst_26434);

(statearr_26476_26518[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (3))){
var inst_26394 = (state_26460[(9)]);
var state_26460__$1 = state_26460;
var statearr_26477_26519 = state_26460__$1;
(statearr_26477_26519[(2)] = inst_26394);

(statearr_26477_26519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (12))){
var inst_26420 = (state_26460[(15)]);
var inst_26434 = (state_26460[(14)]);
var inst_26415 = (state_26460[(16)]);
var inst_26434__$1 = inst_26415.call(null,inst_26420);
var state_26460__$1 = (function (){var statearr_26478 = state_26460;
(statearr_26478[(14)] = inst_26434__$1);

return statearr_26478;
})();
if(cljs.core.truth_(inst_26434__$1)){
var statearr_26479_26520 = state_26460__$1;
(statearr_26479_26520[(1)] = (17));

} else {
var statearr_26480_26521 = state_26460__$1;
(statearr_26480_26521[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (2))){
var inst_26394 = (state_26460[(9)]);
var inst_26397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26394);
var state_26460__$1 = state_26460;
var statearr_26481_26522 = state_26460__$1;
(statearr_26481_26522[(2)] = inst_26397);

(statearr_26481_26522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (23))){
var inst_26445 = (state_26460[(2)]);
var state_26460__$1 = state_26460;
if(cljs.core.truth_(inst_26445)){
var statearr_26482_26523 = state_26460__$1;
(statearr_26482_26523[(1)] = (24));

} else {
var statearr_26483_26524 = state_26460__$1;
(statearr_26483_26524[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (19))){
var inst_26442 = (state_26460[(2)]);
var state_26460__$1 = state_26460;
if(cljs.core.truth_(inst_26442)){
var statearr_26484_26525 = state_26460__$1;
(statearr_26484_26525[(1)] = (20));

} else {
var statearr_26485_26526 = state_26460__$1;
(statearr_26485_26526[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (11))){
var inst_26419 = (state_26460[(8)]);
var inst_26425 = (inst_26419 == null);
var state_26460__$1 = state_26460;
if(cljs.core.truth_(inst_26425)){
var statearr_26486_26527 = state_26460__$1;
(statearr_26486_26527[(1)] = (14));

} else {
var statearr_26487_26528 = state_26460__$1;
(statearr_26487_26528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (9))){
var inst_26412 = (state_26460[(10)]);
var inst_26412__$1 = (state_26460[(2)]);
var inst_26413 = cljs.core.get.call(null,inst_26412__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26414 = cljs.core.get.call(null,inst_26412__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26415 = cljs.core.get.call(null,inst_26412__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26460__$1 = (function (){var statearr_26488 = state_26460;
(statearr_26488[(10)] = inst_26412__$1);

(statearr_26488[(17)] = inst_26414);

(statearr_26488[(16)] = inst_26415);

return statearr_26488;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26460__$1,(10),inst_26413);
} else {
if((state_val_26461 === (5))){
var inst_26404 = (state_26460[(7)]);
var inst_26407 = cljs.core.seq_QMARK_.call(null,inst_26404);
var state_26460__$1 = state_26460;
if(inst_26407){
var statearr_26489_26529 = state_26460__$1;
(statearr_26489_26529[(1)] = (7));

} else {
var statearr_26490_26530 = state_26460__$1;
(statearr_26490_26530[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (14))){
var inst_26420 = (state_26460[(15)]);
var inst_26427 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26420);
var state_26460__$1 = state_26460;
var statearr_26491_26531 = state_26460__$1;
(statearr_26491_26531[(2)] = inst_26427);

(statearr_26491_26531[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (26))){
var inst_26450 = (state_26460[(2)]);
var state_26460__$1 = state_26460;
var statearr_26492_26532 = state_26460__$1;
(statearr_26492_26532[(2)] = inst_26450);

(statearr_26492_26532[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (16))){
var inst_26430 = (state_26460[(2)]);
var inst_26431 = calc_state.call(null);
var inst_26404 = inst_26431;
var state_26460__$1 = (function (){var statearr_26493 = state_26460;
(statearr_26493[(18)] = inst_26430);

(statearr_26493[(7)] = inst_26404);

return statearr_26493;
})();
var statearr_26494_26533 = state_26460__$1;
(statearr_26494_26533[(2)] = null);

(statearr_26494_26533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (10))){
var inst_26420 = (state_26460[(15)]);
var inst_26419 = (state_26460[(8)]);
var inst_26418 = (state_26460[(2)]);
var inst_26419__$1 = cljs.core.nth.call(null,inst_26418,(0),null);
var inst_26420__$1 = cljs.core.nth.call(null,inst_26418,(1),null);
var inst_26421 = (inst_26419__$1 == null);
var inst_26422 = cljs.core._EQ_.call(null,inst_26420__$1,change);
var inst_26423 = (inst_26421) || (inst_26422);
var state_26460__$1 = (function (){var statearr_26495 = state_26460;
(statearr_26495[(15)] = inst_26420__$1);

(statearr_26495[(8)] = inst_26419__$1);

return statearr_26495;
})();
if(cljs.core.truth_(inst_26423)){
var statearr_26496_26534 = state_26460__$1;
(statearr_26496_26534[(1)] = (11));

} else {
var statearr_26497_26535 = state_26460__$1;
(statearr_26497_26535[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (18))){
var inst_26420 = (state_26460[(15)]);
var inst_26414 = (state_26460[(17)]);
var inst_26415 = (state_26460[(16)]);
var inst_26437 = cljs.core.empty_QMARK_.call(null,inst_26415);
var inst_26438 = inst_26414.call(null,inst_26420);
var inst_26439 = cljs.core.not.call(null,inst_26438);
var inst_26440 = (inst_26437) && (inst_26439);
var state_26460__$1 = state_26460;
var statearr_26498_26536 = state_26460__$1;
(statearr_26498_26536[(2)] = inst_26440);

(statearr_26498_26536[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26461 === (8))){
var inst_26404 = (state_26460[(7)]);
var state_26460__$1 = state_26460;
var statearr_26499_26537 = state_26460__$1;
(statearr_26499_26537[(2)] = inst_26404);

(statearr_26499_26537[(1)] = (9));


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
});})(c__15442__auto___26507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15386__auto__,c__15442__auto___26507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_26503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26503[(0)] = state_machine__15387__auto__);

(statearr_26503[(1)] = (1));

return statearr_26503;
});
var state_machine__15387__auto____1 = (function (state_26460){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_26460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e26504){if((e26504 instanceof Object)){
var ex__15390__auto__ = e26504;
var statearr_26505_26538 = state_26460;
(statearr_26505_26538[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26539 = state_26460;
state_26460 = G__26539;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_26460){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_26460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___26507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15444__auto__ = (function (){var statearr_26506 = f__15443__auto__.call(null);
(statearr_26506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___26507);

return statearr_26506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___26507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26541 = {};
return obj26541;
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
return (function (p1__26542_SHARP_){
if(cljs.core.truth_(p1__26542_SHARP_.call(null,topic))){
return p1__26542_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26542_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12773__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26665 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26665 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26666){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26666 = meta26666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26665.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t26665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26665.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26667){
var self__ = this;
var _26667__$1 = this;
return self__.meta26666;
});})(mults,ensure_mult))
;

cljs.core.async.t26665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26667,meta26666__$1){
var self__ = this;
var _26667__$1 = this;
return (new cljs.core.async.t26665(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26666__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26665.cljs$lang$type = true;

cljs.core.async.t26665.cljs$lang$ctorStr = "cljs.core.async/t26665";

cljs.core.async.t26665.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t26665");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26665 = ((function (mults,ensure_mult){
return (function __GT_t26665(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26666){
return (new cljs.core.async.t26665(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26666));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26665(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15442__auto___26787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___26787,mults,ensure_mult,p){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___26787,mults,ensure_mult,p){
return (function (state_26739){
var state_val_26740 = (state_26739[(1)]);
if((state_val_26740 === (7))){
var inst_26735 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26741_26788 = state_26739__$1;
(statearr_26741_26788[(2)] = inst_26735);

(statearr_26741_26788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (20))){
var state_26739__$1 = state_26739;
var statearr_26742_26789 = state_26739__$1;
(statearr_26742_26789[(2)] = null);

(statearr_26742_26789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (1))){
var state_26739__$1 = state_26739;
var statearr_26743_26790 = state_26739__$1;
(statearr_26743_26790[(2)] = null);

(statearr_26743_26790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (24))){
var inst_26718 = (state_26739[(7)]);
var inst_26727 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26718);
var state_26739__$1 = state_26739;
var statearr_26744_26791 = state_26739__$1;
(statearr_26744_26791[(2)] = inst_26727);

(statearr_26744_26791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (4))){
var inst_26670 = (state_26739[(8)]);
var inst_26670__$1 = (state_26739[(2)]);
var inst_26671 = (inst_26670__$1 == null);
var state_26739__$1 = (function (){var statearr_26745 = state_26739;
(statearr_26745[(8)] = inst_26670__$1);

return statearr_26745;
})();
if(cljs.core.truth_(inst_26671)){
var statearr_26746_26792 = state_26739__$1;
(statearr_26746_26792[(1)] = (5));

} else {
var statearr_26747_26793 = state_26739__$1;
(statearr_26747_26793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (15))){
var inst_26712 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26748_26794 = state_26739__$1;
(statearr_26748_26794[(2)] = inst_26712);

(statearr_26748_26794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (21))){
var inst_26732 = (state_26739[(2)]);
var state_26739__$1 = (function (){var statearr_26749 = state_26739;
(statearr_26749[(9)] = inst_26732);

return statearr_26749;
})();
var statearr_26750_26795 = state_26739__$1;
(statearr_26750_26795[(2)] = null);

(statearr_26750_26795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (13))){
var inst_26694 = (state_26739[(10)]);
var inst_26696 = cljs.core.chunked_seq_QMARK_.call(null,inst_26694);
var state_26739__$1 = state_26739;
if(inst_26696){
var statearr_26751_26796 = state_26739__$1;
(statearr_26751_26796[(1)] = (16));

} else {
var statearr_26752_26797 = state_26739__$1;
(statearr_26752_26797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (22))){
var inst_26724 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
if(cljs.core.truth_(inst_26724)){
var statearr_26753_26798 = state_26739__$1;
(statearr_26753_26798[(1)] = (23));

} else {
var statearr_26754_26799 = state_26739__$1;
(statearr_26754_26799[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (6))){
var inst_26670 = (state_26739[(8)]);
var inst_26720 = (state_26739[(11)]);
var inst_26718 = (state_26739[(7)]);
var inst_26718__$1 = topic_fn.call(null,inst_26670);
var inst_26719 = cljs.core.deref.call(null,mults);
var inst_26720__$1 = cljs.core.get.call(null,inst_26719,inst_26718__$1);
var state_26739__$1 = (function (){var statearr_26755 = state_26739;
(statearr_26755[(11)] = inst_26720__$1);

(statearr_26755[(7)] = inst_26718__$1);

return statearr_26755;
})();
if(cljs.core.truth_(inst_26720__$1)){
var statearr_26756_26800 = state_26739__$1;
(statearr_26756_26800[(1)] = (19));

} else {
var statearr_26757_26801 = state_26739__$1;
(statearr_26757_26801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (25))){
var inst_26729 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26758_26802 = state_26739__$1;
(statearr_26758_26802[(2)] = inst_26729);

(statearr_26758_26802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (17))){
var inst_26694 = (state_26739[(10)]);
var inst_26703 = cljs.core.first.call(null,inst_26694);
var inst_26704 = cljs.core.async.muxch_STAR_.call(null,inst_26703);
var inst_26705 = cljs.core.async.close_BANG_.call(null,inst_26704);
var inst_26706 = cljs.core.next.call(null,inst_26694);
var inst_26680 = inst_26706;
var inst_26681 = null;
var inst_26682 = (0);
var inst_26683 = (0);
var state_26739__$1 = (function (){var statearr_26759 = state_26739;
(statearr_26759[(12)] = inst_26682);

(statearr_26759[(13)] = inst_26681);

(statearr_26759[(14)] = inst_26683);

(statearr_26759[(15)] = inst_26680);

(statearr_26759[(16)] = inst_26705);

return statearr_26759;
})();
var statearr_26760_26803 = state_26739__$1;
(statearr_26760_26803[(2)] = null);

(statearr_26760_26803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (3))){
var inst_26737 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26739__$1,inst_26737);
} else {
if((state_val_26740 === (12))){
var inst_26714 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26761_26804 = state_26739__$1;
(statearr_26761_26804[(2)] = inst_26714);

(statearr_26761_26804[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (2))){
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26739__$1,(4),ch);
} else {
if((state_val_26740 === (23))){
var state_26739__$1 = state_26739;
var statearr_26762_26805 = state_26739__$1;
(statearr_26762_26805[(2)] = null);

(statearr_26762_26805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (19))){
var inst_26670 = (state_26739[(8)]);
var inst_26720 = (state_26739[(11)]);
var inst_26722 = cljs.core.async.muxch_STAR_.call(null,inst_26720);
var state_26739__$1 = state_26739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26739__$1,(22),inst_26722,inst_26670);
} else {
if((state_val_26740 === (11))){
var inst_26680 = (state_26739[(15)]);
var inst_26694 = (state_26739[(10)]);
var inst_26694__$1 = cljs.core.seq.call(null,inst_26680);
var state_26739__$1 = (function (){var statearr_26763 = state_26739;
(statearr_26763[(10)] = inst_26694__$1);

return statearr_26763;
})();
if(inst_26694__$1){
var statearr_26764_26806 = state_26739__$1;
(statearr_26764_26806[(1)] = (13));

} else {
var statearr_26765_26807 = state_26739__$1;
(statearr_26765_26807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (9))){
var inst_26716 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26766_26808 = state_26739__$1;
(statearr_26766_26808[(2)] = inst_26716);

(statearr_26766_26808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (5))){
var inst_26677 = cljs.core.deref.call(null,mults);
var inst_26678 = cljs.core.vals.call(null,inst_26677);
var inst_26679 = cljs.core.seq.call(null,inst_26678);
var inst_26680 = inst_26679;
var inst_26681 = null;
var inst_26682 = (0);
var inst_26683 = (0);
var state_26739__$1 = (function (){var statearr_26767 = state_26739;
(statearr_26767[(12)] = inst_26682);

(statearr_26767[(13)] = inst_26681);

(statearr_26767[(14)] = inst_26683);

(statearr_26767[(15)] = inst_26680);

return statearr_26767;
})();
var statearr_26768_26809 = state_26739__$1;
(statearr_26768_26809[(2)] = null);

(statearr_26768_26809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (14))){
var state_26739__$1 = state_26739;
var statearr_26772_26810 = state_26739__$1;
(statearr_26772_26810[(2)] = null);

(statearr_26772_26810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (16))){
var inst_26694 = (state_26739[(10)]);
var inst_26698 = cljs.core.chunk_first.call(null,inst_26694);
var inst_26699 = cljs.core.chunk_rest.call(null,inst_26694);
var inst_26700 = cljs.core.count.call(null,inst_26698);
var inst_26680 = inst_26699;
var inst_26681 = inst_26698;
var inst_26682 = inst_26700;
var inst_26683 = (0);
var state_26739__$1 = (function (){var statearr_26773 = state_26739;
(statearr_26773[(12)] = inst_26682);

(statearr_26773[(13)] = inst_26681);

(statearr_26773[(14)] = inst_26683);

(statearr_26773[(15)] = inst_26680);

return statearr_26773;
})();
var statearr_26774_26811 = state_26739__$1;
(statearr_26774_26811[(2)] = null);

(statearr_26774_26811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (10))){
var inst_26682 = (state_26739[(12)]);
var inst_26681 = (state_26739[(13)]);
var inst_26683 = (state_26739[(14)]);
var inst_26680 = (state_26739[(15)]);
var inst_26688 = cljs.core._nth.call(null,inst_26681,inst_26683);
var inst_26689 = cljs.core.async.muxch_STAR_.call(null,inst_26688);
var inst_26690 = cljs.core.async.close_BANG_.call(null,inst_26689);
var inst_26691 = (inst_26683 + (1));
var tmp26769 = inst_26682;
var tmp26770 = inst_26681;
var tmp26771 = inst_26680;
var inst_26680__$1 = tmp26771;
var inst_26681__$1 = tmp26770;
var inst_26682__$1 = tmp26769;
var inst_26683__$1 = inst_26691;
var state_26739__$1 = (function (){var statearr_26775 = state_26739;
(statearr_26775[(12)] = inst_26682__$1);

(statearr_26775[(17)] = inst_26690);

(statearr_26775[(13)] = inst_26681__$1);

(statearr_26775[(14)] = inst_26683__$1);

(statearr_26775[(15)] = inst_26680__$1);

return statearr_26775;
})();
var statearr_26776_26812 = state_26739__$1;
(statearr_26776_26812[(2)] = null);

(statearr_26776_26812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (18))){
var inst_26709 = (state_26739[(2)]);
var state_26739__$1 = state_26739;
var statearr_26777_26813 = state_26739__$1;
(statearr_26777_26813[(2)] = inst_26709);

(statearr_26777_26813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26740 === (8))){
var inst_26682 = (state_26739[(12)]);
var inst_26683 = (state_26739[(14)]);
var inst_26685 = (inst_26683 < inst_26682);
var inst_26686 = inst_26685;
var state_26739__$1 = state_26739;
if(cljs.core.truth_(inst_26686)){
var statearr_26778_26814 = state_26739__$1;
(statearr_26778_26814[(1)] = (10));

} else {
var statearr_26779_26815 = state_26739__$1;
(statearr_26779_26815[(1)] = (11));

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
});})(c__15442__auto___26787,mults,ensure_mult,p))
;
return ((function (switch__15386__auto__,c__15442__auto___26787,mults,ensure_mult,p){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_26783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26783[(0)] = state_machine__15387__auto__);

(statearr_26783[(1)] = (1));

return statearr_26783;
});
var state_machine__15387__auto____1 = (function (state_26739){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_26739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e26784){if((e26784 instanceof Object)){
var ex__15390__auto__ = e26784;
var statearr_26785_26816 = state_26739;
(statearr_26785_26816[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26817 = state_26739;
state_26739 = G__26817;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_26739){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_26739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___26787,mults,ensure_mult,p))
})();
var state__15444__auto__ = (function (){var statearr_26786 = f__15443__auto__.call(null);
(statearr_26786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___26787);

return statearr_26786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___26787,mults,ensure_mult,p))
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
var c__15442__auto___26954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26924){
var state_val_26925 = (state_26924[(1)]);
if((state_val_26925 === (7))){
var state_26924__$1 = state_26924;
var statearr_26926_26955 = state_26924__$1;
(statearr_26926_26955[(2)] = null);

(statearr_26926_26955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (1))){
var state_26924__$1 = state_26924;
var statearr_26927_26956 = state_26924__$1;
(statearr_26927_26956[(2)] = null);

(statearr_26927_26956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (4))){
var inst_26888 = (state_26924[(7)]);
var inst_26890 = (inst_26888 < cnt);
var state_26924__$1 = state_26924;
if(cljs.core.truth_(inst_26890)){
var statearr_26928_26957 = state_26924__$1;
(statearr_26928_26957[(1)] = (6));

} else {
var statearr_26929_26958 = state_26924__$1;
(statearr_26929_26958[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (15))){
var inst_26920 = (state_26924[(2)]);
var state_26924__$1 = state_26924;
var statearr_26930_26959 = state_26924__$1;
(statearr_26930_26959[(2)] = inst_26920);

(statearr_26930_26959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (13))){
var inst_26913 = cljs.core.async.close_BANG_.call(null,out);
var state_26924__$1 = state_26924;
var statearr_26931_26960 = state_26924__$1;
(statearr_26931_26960[(2)] = inst_26913);

(statearr_26931_26960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (6))){
var state_26924__$1 = state_26924;
var statearr_26932_26961 = state_26924__$1;
(statearr_26932_26961[(2)] = null);

(statearr_26932_26961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (3))){
var inst_26922 = (state_26924[(2)]);
var state_26924__$1 = state_26924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26924__$1,inst_26922);
} else {
if((state_val_26925 === (12))){
var inst_26910 = (state_26924[(8)]);
var inst_26910__$1 = (state_26924[(2)]);
var inst_26911 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26910__$1);
var state_26924__$1 = (function (){var statearr_26933 = state_26924;
(statearr_26933[(8)] = inst_26910__$1);

return statearr_26933;
})();
if(cljs.core.truth_(inst_26911)){
var statearr_26934_26962 = state_26924__$1;
(statearr_26934_26962[(1)] = (13));

} else {
var statearr_26935_26963 = state_26924__$1;
(statearr_26935_26963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (2))){
var inst_26887 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26888 = (0);
var state_26924__$1 = (function (){var statearr_26936 = state_26924;
(statearr_26936[(9)] = inst_26887);

(statearr_26936[(7)] = inst_26888);

return statearr_26936;
})();
var statearr_26937_26964 = state_26924__$1;
(statearr_26937_26964[(2)] = null);

(statearr_26937_26964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (11))){
var inst_26888 = (state_26924[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26924,(10),Object,null,(9));
var inst_26897 = chs__$1.call(null,inst_26888);
var inst_26898 = done.call(null,inst_26888);
var inst_26899 = cljs.core.async.take_BANG_.call(null,inst_26897,inst_26898);
var state_26924__$1 = state_26924;
var statearr_26938_26965 = state_26924__$1;
(statearr_26938_26965[(2)] = inst_26899);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26924__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (9))){
var inst_26888 = (state_26924[(7)]);
var inst_26901 = (state_26924[(2)]);
var inst_26902 = (inst_26888 + (1));
var inst_26888__$1 = inst_26902;
var state_26924__$1 = (function (){var statearr_26939 = state_26924;
(statearr_26939[(7)] = inst_26888__$1);

(statearr_26939[(10)] = inst_26901);

return statearr_26939;
})();
var statearr_26940_26966 = state_26924__$1;
(statearr_26940_26966[(2)] = null);

(statearr_26940_26966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (5))){
var inst_26908 = (state_26924[(2)]);
var state_26924__$1 = (function (){var statearr_26941 = state_26924;
(statearr_26941[(11)] = inst_26908);

return statearr_26941;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26924__$1,(12),dchan);
} else {
if((state_val_26925 === (14))){
var inst_26910 = (state_26924[(8)]);
var inst_26915 = cljs.core.apply.call(null,f,inst_26910);
var state_26924__$1 = state_26924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26924__$1,(16),out,inst_26915);
} else {
if((state_val_26925 === (16))){
var inst_26917 = (state_26924[(2)]);
var state_26924__$1 = (function (){var statearr_26942 = state_26924;
(statearr_26942[(12)] = inst_26917);

return statearr_26942;
})();
var statearr_26943_26967 = state_26924__$1;
(statearr_26943_26967[(2)] = null);

(statearr_26943_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (10))){
var inst_26892 = (state_26924[(2)]);
var inst_26893 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26924__$1 = (function (){var statearr_26944 = state_26924;
(statearr_26944[(13)] = inst_26892);

return statearr_26944;
})();
var statearr_26945_26968 = state_26924__$1;
(statearr_26945_26968[(2)] = inst_26893);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26924__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26925 === (8))){
var inst_26906 = (state_26924[(2)]);
var state_26924__$1 = state_26924;
var statearr_26946_26969 = state_26924__$1;
(statearr_26946_26969[(2)] = inst_26906);

(statearr_26946_26969[(1)] = (5));


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
});})(c__15442__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15386__auto__,c__15442__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_26950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26950[(0)] = state_machine__15387__auto__);

(statearr_26950[(1)] = (1));

return statearr_26950;
});
var state_machine__15387__auto____1 = (function (state_26924){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_26924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e26951){if((e26951 instanceof Object)){
var ex__15390__auto__ = e26951;
var statearr_26952_26970 = state_26924;
(statearr_26952_26970[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26971 = state_26924;
state_26924 = G__26971;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_26924){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_26924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15444__auto__ = (function (){var statearr_26953 = f__15443__auto__.call(null);
(statearr_26953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___26954);

return statearr_26953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__15442__auto___27079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___27079,out){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___27079,out){
return (function (state_27055){
var state_val_27056 = (state_27055[(1)]);
if((state_val_27056 === (7))){
var inst_27034 = (state_27055[(7)]);
var inst_27035 = (state_27055[(8)]);
var inst_27034__$1 = (state_27055[(2)]);
var inst_27035__$1 = cljs.core.nth.call(null,inst_27034__$1,(0),null);
var inst_27036 = cljs.core.nth.call(null,inst_27034__$1,(1),null);
var inst_27037 = (inst_27035__$1 == null);
var state_27055__$1 = (function (){var statearr_27057 = state_27055;
(statearr_27057[(7)] = inst_27034__$1);

(statearr_27057[(8)] = inst_27035__$1);

(statearr_27057[(9)] = inst_27036);

return statearr_27057;
})();
if(cljs.core.truth_(inst_27037)){
var statearr_27058_27080 = state_27055__$1;
(statearr_27058_27080[(1)] = (8));

} else {
var statearr_27059_27081 = state_27055__$1;
(statearr_27059_27081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (1))){
var inst_27026 = cljs.core.vec.call(null,chs);
var inst_27027 = inst_27026;
var state_27055__$1 = (function (){var statearr_27060 = state_27055;
(statearr_27060[(10)] = inst_27027);

return statearr_27060;
})();
var statearr_27061_27082 = state_27055__$1;
(statearr_27061_27082[(2)] = null);

(statearr_27061_27082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (4))){
var inst_27027 = (state_27055[(10)]);
var state_27055__$1 = state_27055;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27055__$1,(7),inst_27027);
} else {
if((state_val_27056 === (6))){
var inst_27051 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
var statearr_27062_27083 = state_27055__$1;
(statearr_27062_27083[(2)] = inst_27051);

(statearr_27062_27083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (3))){
var inst_27053 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27055__$1,inst_27053);
} else {
if((state_val_27056 === (2))){
var inst_27027 = (state_27055[(10)]);
var inst_27029 = cljs.core.count.call(null,inst_27027);
var inst_27030 = (inst_27029 > (0));
var state_27055__$1 = state_27055;
if(cljs.core.truth_(inst_27030)){
var statearr_27064_27084 = state_27055__$1;
(statearr_27064_27084[(1)] = (4));

} else {
var statearr_27065_27085 = state_27055__$1;
(statearr_27065_27085[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (11))){
var inst_27027 = (state_27055[(10)]);
var inst_27044 = (state_27055[(2)]);
var tmp27063 = inst_27027;
var inst_27027__$1 = tmp27063;
var state_27055__$1 = (function (){var statearr_27066 = state_27055;
(statearr_27066[(11)] = inst_27044);

(statearr_27066[(10)] = inst_27027__$1);

return statearr_27066;
})();
var statearr_27067_27086 = state_27055__$1;
(statearr_27067_27086[(2)] = null);

(statearr_27067_27086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (9))){
var inst_27035 = (state_27055[(8)]);
var state_27055__$1 = state_27055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27055__$1,(11),out,inst_27035);
} else {
if((state_val_27056 === (5))){
var inst_27049 = cljs.core.async.close_BANG_.call(null,out);
var state_27055__$1 = state_27055;
var statearr_27068_27087 = state_27055__$1;
(statearr_27068_27087[(2)] = inst_27049);

(statearr_27068_27087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (10))){
var inst_27047 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
var statearr_27069_27088 = state_27055__$1;
(statearr_27069_27088[(2)] = inst_27047);

(statearr_27069_27088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (8))){
var inst_27034 = (state_27055[(7)]);
var inst_27035 = (state_27055[(8)]);
var inst_27027 = (state_27055[(10)]);
var inst_27036 = (state_27055[(9)]);
var inst_27039 = (function (){var c = inst_27036;
var v = inst_27035;
var vec__27032 = inst_27034;
var cs = inst_27027;
return ((function (c,v,vec__27032,cs,inst_27034,inst_27035,inst_27027,inst_27036,state_val_27056,c__15442__auto___27079,out){
return (function (p1__26972_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26972_SHARP_);
});
;})(c,v,vec__27032,cs,inst_27034,inst_27035,inst_27027,inst_27036,state_val_27056,c__15442__auto___27079,out))
})();
var inst_27040 = cljs.core.filterv.call(null,inst_27039,inst_27027);
var inst_27027__$1 = inst_27040;
var state_27055__$1 = (function (){var statearr_27070 = state_27055;
(statearr_27070[(10)] = inst_27027__$1);

return statearr_27070;
})();
var statearr_27071_27089 = state_27055__$1;
(statearr_27071_27089[(2)] = null);

(statearr_27071_27089[(1)] = (2));


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
});})(c__15442__auto___27079,out))
;
return ((function (switch__15386__auto__,c__15442__auto___27079,out){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_27075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27075[(0)] = state_machine__15387__auto__);

(statearr_27075[(1)] = (1));

return statearr_27075;
});
var state_machine__15387__auto____1 = (function (state_27055){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_27055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e27076){if((e27076 instanceof Object)){
var ex__15390__auto__ = e27076;
var statearr_27077_27090 = state_27055;
(statearr_27077_27090[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27091 = state_27055;
state_27055 = G__27091;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_27055){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_27055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___27079,out))
})();
var state__15444__auto__ = (function (){var statearr_27078 = f__15443__auto__.call(null);
(statearr_27078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___27079);

return statearr_27078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___27079,out))
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
var c__15442__auto___27184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___27184,out){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___27184,out){
return (function (state_27161){
var state_val_27162 = (state_27161[(1)]);
if((state_val_27162 === (7))){
var inst_27143 = (state_27161[(7)]);
var inst_27143__$1 = (state_27161[(2)]);
var inst_27144 = (inst_27143__$1 == null);
var inst_27145 = cljs.core.not.call(null,inst_27144);
var state_27161__$1 = (function (){var statearr_27163 = state_27161;
(statearr_27163[(7)] = inst_27143__$1);

return statearr_27163;
})();
if(inst_27145){
var statearr_27164_27185 = state_27161__$1;
(statearr_27164_27185[(1)] = (8));

} else {
var statearr_27165_27186 = state_27161__$1;
(statearr_27165_27186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (1))){
var inst_27138 = (0);
var state_27161__$1 = (function (){var statearr_27166 = state_27161;
(statearr_27166[(8)] = inst_27138);

return statearr_27166;
})();
var statearr_27167_27187 = state_27161__$1;
(statearr_27167_27187[(2)] = null);

(statearr_27167_27187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (4))){
var state_27161__$1 = state_27161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27161__$1,(7),ch);
} else {
if((state_val_27162 === (6))){
var inst_27156 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
var statearr_27168_27188 = state_27161__$1;
(statearr_27168_27188[(2)] = inst_27156);

(statearr_27168_27188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (3))){
var inst_27158 = (state_27161[(2)]);
var inst_27159 = cljs.core.async.close_BANG_.call(null,out);
var state_27161__$1 = (function (){var statearr_27169 = state_27161;
(statearr_27169[(9)] = inst_27158);

return statearr_27169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27161__$1,inst_27159);
} else {
if((state_val_27162 === (2))){
var inst_27138 = (state_27161[(8)]);
var inst_27140 = (inst_27138 < n);
var state_27161__$1 = state_27161;
if(cljs.core.truth_(inst_27140)){
var statearr_27170_27189 = state_27161__$1;
(statearr_27170_27189[(1)] = (4));

} else {
var statearr_27171_27190 = state_27161__$1;
(statearr_27171_27190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (11))){
var inst_27138 = (state_27161[(8)]);
var inst_27148 = (state_27161[(2)]);
var inst_27149 = (inst_27138 + (1));
var inst_27138__$1 = inst_27149;
var state_27161__$1 = (function (){var statearr_27172 = state_27161;
(statearr_27172[(10)] = inst_27148);

(statearr_27172[(8)] = inst_27138__$1);

return statearr_27172;
})();
var statearr_27173_27191 = state_27161__$1;
(statearr_27173_27191[(2)] = null);

(statearr_27173_27191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (9))){
var state_27161__$1 = state_27161;
var statearr_27174_27192 = state_27161__$1;
(statearr_27174_27192[(2)] = null);

(statearr_27174_27192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (5))){
var state_27161__$1 = state_27161;
var statearr_27175_27193 = state_27161__$1;
(statearr_27175_27193[(2)] = null);

(statearr_27175_27193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (10))){
var inst_27153 = (state_27161[(2)]);
var state_27161__$1 = state_27161;
var statearr_27176_27194 = state_27161__$1;
(statearr_27176_27194[(2)] = inst_27153);

(statearr_27176_27194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27162 === (8))){
var inst_27143 = (state_27161[(7)]);
var state_27161__$1 = state_27161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27161__$1,(11),out,inst_27143);
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
});})(c__15442__auto___27184,out))
;
return ((function (switch__15386__auto__,c__15442__auto___27184,out){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_27180 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27180[(0)] = state_machine__15387__auto__);

(statearr_27180[(1)] = (1));

return statearr_27180;
});
var state_machine__15387__auto____1 = (function (state_27161){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_27161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e27181){if((e27181 instanceof Object)){
var ex__15390__auto__ = e27181;
var statearr_27182_27195 = state_27161;
(statearr_27182_27195[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27196 = state_27161;
state_27161 = G__27196;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_27161){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_27161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___27184,out))
})();
var state__15444__auto__ = (function (){var statearr_27183 = f__15443__auto__.call(null);
(statearr_27183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___27184);

return statearr_27183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___27184,out))
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
if(typeof cljs.core.async.t27204 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27204 = (function (ch,f,map_LT_,meta27205){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27205 = meta27205;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27204.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27204.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27204.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27204.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27207 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27207 = (function (fn1,_,meta27205,map_LT_,f,ch,meta27208){
this.fn1 = fn1;
this._ = _;
this.meta27205 = meta27205;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27208 = meta27208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27207.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27197_SHARP_){
return f1.call(null,(((p1__27197_SHARP_ == null))?null:self__.f.call(null,p1__27197_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27209){
var self__ = this;
var _27209__$1 = this;
return self__.meta27208;
});})(___$1))
;

cljs.core.async.t27207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27209,meta27208__$1){
var self__ = this;
var _27209__$1 = this;
return (new cljs.core.async.t27207(self__.fn1,self__._,self__.meta27205,self__.map_LT_,self__.f,self__.ch,meta27208__$1));
});})(___$1))
;

cljs.core.async.t27207.cljs$lang$type = true;

cljs.core.async.t27207.cljs$lang$ctorStr = "cljs.core.async/t27207";

cljs.core.async.t27207.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27207");
});})(___$1))
;

cljs.core.async.__GT_t27207 = ((function (___$1){
return (function __GT_t27207(fn1__$1,___$2,meta27205__$1,map_LT___$1,f__$1,ch__$1,meta27208){
return (new cljs.core.async.t27207(fn1__$1,___$2,meta27205__$1,map_LT___$1,f__$1,ch__$1,meta27208));
});})(___$1))
;

}

return (new cljs.core.async.t27207(fn1,___$1,self__.meta27205,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t27204.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27204.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27204.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27206){
var self__ = this;
var _27206__$1 = this;
return self__.meta27205;
});

cljs.core.async.t27204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27206,meta27205__$1){
var self__ = this;
var _27206__$1 = this;
return (new cljs.core.async.t27204(self__.ch,self__.f,self__.map_LT_,meta27205__$1));
});

cljs.core.async.t27204.cljs$lang$type = true;

cljs.core.async.t27204.cljs$lang$ctorStr = "cljs.core.async/t27204";

cljs.core.async.t27204.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27204");
});

cljs.core.async.__GT_t27204 = (function __GT_t27204(ch__$1,f__$1,map_LT___$1,meta27205){
return (new cljs.core.async.t27204(ch__$1,f__$1,map_LT___$1,meta27205));
});

}

return (new cljs.core.async.t27204(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t27213 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27213 = (function (ch,f,map_GT_,meta27214){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27214 = meta27214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27213.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27213.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27213.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27213.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27213.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27213.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27215){
var self__ = this;
var _27215__$1 = this;
return self__.meta27214;
});

cljs.core.async.t27213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27215,meta27214__$1){
var self__ = this;
var _27215__$1 = this;
return (new cljs.core.async.t27213(self__.ch,self__.f,self__.map_GT_,meta27214__$1));
});

cljs.core.async.t27213.cljs$lang$type = true;

cljs.core.async.t27213.cljs$lang$ctorStr = "cljs.core.async/t27213";

cljs.core.async.t27213.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27213");
});

cljs.core.async.__GT_t27213 = (function __GT_t27213(ch__$1,f__$1,map_GT___$1,meta27214){
return (new cljs.core.async.t27213(ch__$1,f__$1,map_GT___$1,meta27214));
});

}

return (new cljs.core.async.t27213(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t27219 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27219 = (function (ch,p,filter_GT_,meta27220){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27220 = meta27220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27219.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27219.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27219.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27221){
var self__ = this;
var _27221__$1 = this;
return self__.meta27220;
});

cljs.core.async.t27219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27221,meta27220__$1){
var self__ = this;
var _27221__$1 = this;
return (new cljs.core.async.t27219(self__.ch,self__.p,self__.filter_GT_,meta27220__$1));
});

cljs.core.async.t27219.cljs$lang$type = true;

cljs.core.async.t27219.cljs$lang$ctorStr = "cljs.core.async/t27219";

cljs.core.async.t27219.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27219");
});

cljs.core.async.__GT_t27219 = (function __GT_t27219(ch__$1,p__$1,filter_GT___$1,meta27220){
return (new cljs.core.async.t27219(ch__$1,p__$1,filter_GT___$1,meta27220));
});

}

return (new cljs.core.async.t27219(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15442__auto___27304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___27304,out){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___27304,out){
return (function (state_27283){
var state_val_27284 = (state_27283[(1)]);
if((state_val_27284 === (7))){
var inst_27279 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27285_27305 = state_27283__$1;
(statearr_27285_27305[(2)] = inst_27279);

(statearr_27285_27305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (1))){
var state_27283__$1 = state_27283;
var statearr_27286_27306 = state_27283__$1;
(statearr_27286_27306[(2)] = null);

(statearr_27286_27306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (4))){
var inst_27265 = (state_27283[(7)]);
var inst_27265__$1 = (state_27283[(2)]);
var inst_27266 = (inst_27265__$1 == null);
var state_27283__$1 = (function (){var statearr_27287 = state_27283;
(statearr_27287[(7)] = inst_27265__$1);

return statearr_27287;
})();
if(cljs.core.truth_(inst_27266)){
var statearr_27288_27307 = state_27283__$1;
(statearr_27288_27307[(1)] = (5));

} else {
var statearr_27289_27308 = state_27283__$1;
(statearr_27289_27308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (6))){
var inst_27265 = (state_27283[(7)]);
var inst_27270 = p.call(null,inst_27265);
var state_27283__$1 = state_27283;
if(cljs.core.truth_(inst_27270)){
var statearr_27290_27309 = state_27283__$1;
(statearr_27290_27309[(1)] = (8));

} else {
var statearr_27291_27310 = state_27283__$1;
(statearr_27291_27310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (3))){
var inst_27281 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27283__$1,inst_27281);
} else {
if((state_val_27284 === (2))){
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27283__$1,(4),ch);
} else {
if((state_val_27284 === (11))){
var inst_27273 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27292_27311 = state_27283__$1;
(statearr_27292_27311[(2)] = inst_27273);

(statearr_27292_27311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (9))){
var state_27283__$1 = state_27283;
var statearr_27293_27312 = state_27283__$1;
(statearr_27293_27312[(2)] = null);

(statearr_27293_27312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (5))){
var inst_27268 = cljs.core.async.close_BANG_.call(null,out);
var state_27283__$1 = state_27283;
var statearr_27294_27313 = state_27283__$1;
(statearr_27294_27313[(2)] = inst_27268);

(statearr_27294_27313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (10))){
var inst_27276 = (state_27283[(2)]);
var state_27283__$1 = (function (){var statearr_27295 = state_27283;
(statearr_27295[(8)] = inst_27276);

return statearr_27295;
})();
var statearr_27296_27314 = state_27283__$1;
(statearr_27296_27314[(2)] = null);

(statearr_27296_27314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (8))){
var inst_27265 = (state_27283[(7)]);
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27283__$1,(11),out,inst_27265);
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
});})(c__15442__auto___27304,out))
;
return ((function (switch__15386__auto__,c__15442__auto___27304,out){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_27300 = [null,null,null,null,null,null,null,null,null];
(statearr_27300[(0)] = state_machine__15387__auto__);

(statearr_27300[(1)] = (1));

return statearr_27300;
});
var state_machine__15387__auto____1 = (function (state_27283){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_27283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e27301){if((e27301 instanceof Object)){
var ex__15390__auto__ = e27301;
var statearr_27302_27315 = state_27283;
(statearr_27302_27315[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27316 = state_27283;
state_27283 = G__27316;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_27283){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_27283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___27304,out))
})();
var state__15444__auto__ = (function (){var statearr_27303 = f__15443__auto__.call(null);
(statearr_27303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___27304);

return statearr_27303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___27304,out))
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
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__){
return (function (state_27482){
var state_val_27483 = (state_27482[(1)]);
if((state_val_27483 === (7))){
var inst_27478 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27484_27525 = state_27482__$1;
(statearr_27484_27525[(2)] = inst_27478);

(statearr_27484_27525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (20))){
var inst_27448 = (state_27482[(7)]);
var inst_27459 = (state_27482[(2)]);
var inst_27460 = cljs.core.next.call(null,inst_27448);
var inst_27434 = inst_27460;
var inst_27435 = null;
var inst_27436 = (0);
var inst_27437 = (0);
var state_27482__$1 = (function (){var statearr_27485 = state_27482;
(statearr_27485[(8)] = inst_27437);

(statearr_27485[(9)] = inst_27436);

(statearr_27485[(10)] = inst_27459);

(statearr_27485[(11)] = inst_27434);

(statearr_27485[(12)] = inst_27435);

return statearr_27485;
})();
var statearr_27486_27526 = state_27482__$1;
(statearr_27486_27526[(2)] = null);

(statearr_27486_27526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (1))){
var state_27482__$1 = state_27482;
var statearr_27487_27527 = state_27482__$1;
(statearr_27487_27527[(2)] = null);

(statearr_27487_27527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (4))){
var inst_27423 = (state_27482[(13)]);
var inst_27423__$1 = (state_27482[(2)]);
var inst_27424 = (inst_27423__$1 == null);
var state_27482__$1 = (function (){var statearr_27488 = state_27482;
(statearr_27488[(13)] = inst_27423__$1);

return statearr_27488;
})();
if(cljs.core.truth_(inst_27424)){
var statearr_27489_27528 = state_27482__$1;
(statearr_27489_27528[(1)] = (5));

} else {
var statearr_27490_27529 = state_27482__$1;
(statearr_27490_27529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (15))){
var state_27482__$1 = state_27482;
var statearr_27494_27530 = state_27482__$1;
(statearr_27494_27530[(2)] = null);

(statearr_27494_27530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (21))){
var state_27482__$1 = state_27482;
var statearr_27495_27531 = state_27482__$1;
(statearr_27495_27531[(2)] = null);

(statearr_27495_27531[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (13))){
var inst_27437 = (state_27482[(8)]);
var inst_27436 = (state_27482[(9)]);
var inst_27434 = (state_27482[(11)]);
var inst_27435 = (state_27482[(12)]);
var inst_27444 = (state_27482[(2)]);
var inst_27445 = (inst_27437 + (1));
var tmp27491 = inst_27436;
var tmp27492 = inst_27434;
var tmp27493 = inst_27435;
var inst_27434__$1 = tmp27492;
var inst_27435__$1 = tmp27493;
var inst_27436__$1 = tmp27491;
var inst_27437__$1 = inst_27445;
var state_27482__$1 = (function (){var statearr_27496 = state_27482;
(statearr_27496[(8)] = inst_27437__$1);

(statearr_27496[(9)] = inst_27436__$1);

(statearr_27496[(11)] = inst_27434__$1);

(statearr_27496[(14)] = inst_27444);

(statearr_27496[(12)] = inst_27435__$1);

return statearr_27496;
})();
var statearr_27497_27532 = state_27482__$1;
(statearr_27497_27532[(2)] = null);

(statearr_27497_27532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (22))){
var state_27482__$1 = state_27482;
var statearr_27498_27533 = state_27482__$1;
(statearr_27498_27533[(2)] = null);

(statearr_27498_27533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (6))){
var inst_27423 = (state_27482[(13)]);
var inst_27432 = f.call(null,inst_27423);
var inst_27433 = cljs.core.seq.call(null,inst_27432);
var inst_27434 = inst_27433;
var inst_27435 = null;
var inst_27436 = (0);
var inst_27437 = (0);
var state_27482__$1 = (function (){var statearr_27499 = state_27482;
(statearr_27499[(8)] = inst_27437);

(statearr_27499[(9)] = inst_27436);

(statearr_27499[(11)] = inst_27434);

(statearr_27499[(12)] = inst_27435);

return statearr_27499;
})();
var statearr_27500_27534 = state_27482__$1;
(statearr_27500_27534[(2)] = null);

(statearr_27500_27534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (17))){
var inst_27448 = (state_27482[(7)]);
var inst_27452 = cljs.core.chunk_first.call(null,inst_27448);
var inst_27453 = cljs.core.chunk_rest.call(null,inst_27448);
var inst_27454 = cljs.core.count.call(null,inst_27452);
var inst_27434 = inst_27453;
var inst_27435 = inst_27452;
var inst_27436 = inst_27454;
var inst_27437 = (0);
var state_27482__$1 = (function (){var statearr_27501 = state_27482;
(statearr_27501[(8)] = inst_27437);

(statearr_27501[(9)] = inst_27436);

(statearr_27501[(11)] = inst_27434);

(statearr_27501[(12)] = inst_27435);

return statearr_27501;
})();
var statearr_27502_27535 = state_27482__$1;
(statearr_27502_27535[(2)] = null);

(statearr_27502_27535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (3))){
var inst_27480 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27482__$1,inst_27480);
} else {
if((state_val_27483 === (12))){
var inst_27468 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27503_27536 = state_27482__$1;
(statearr_27503_27536[(2)] = inst_27468);

(statearr_27503_27536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (2))){
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27482__$1,(4),in$);
} else {
if((state_val_27483 === (23))){
var inst_27476 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27504_27537 = state_27482__$1;
(statearr_27504_27537[(2)] = inst_27476);

(statearr_27504_27537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (19))){
var inst_27463 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27505_27538 = state_27482__$1;
(statearr_27505_27538[(2)] = inst_27463);

(statearr_27505_27538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (11))){
var inst_27434 = (state_27482[(11)]);
var inst_27448 = (state_27482[(7)]);
var inst_27448__$1 = cljs.core.seq.call(null,inst_27434);
var state_27482__$1 = (function (){var statearr_27506 = state_27482;
(statearr_27506[(7)] = inst_27448__$1);

return statearr_27506;
})();
if(inst_27448__$1){
var statearr_27507_27539 = state_27482__$1;
(statearr_27507_27539[(1)] = (14));

} else {
var statearr_27508_27540 = state_27482__$1;
(statearr_27508_27540[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (9))){
var inst_27470 = (state_27482[(2)]);
var inst_27471 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27482__$1 = (function (){var statearr_27509 = state_27482;
(statearr_27509[(15)] = inst_27470);

return statearr_27509;
})();
if(cljs.core.truth_(inst_27471)){
var statearr_27510_27541 = state_27482__$1;
(statearr_27510_27541[(1)] = (21));

} else {
var statearr_27511_27542 = state_27482__$1;
(statearr_27511_27542[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (5))){
var inst_27426 = cljs.core.async.close_BANG_.call(null,out);
var state_27482__$1 = state_27482;
var statearr_27512_27543 = state_27482__$1;
(statearr_27512_27543[(2)] = inst_27426);

(statearr_27512_27543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (14))){
var inst_27448 = (state_27482[(7)]);
var inst_27450 = cljs.core.chunked_seq_QMARK_.call(null,inst_27448);
var state_27482__$1 = state_27482;
if(inst_27450){
var statearr_27513_27544 = state_27482__$1;
(statearr_27513_27544[(1)] = (17));

} else {
var statearr_27514_27545 = state_27482__$1;
(statearr_27514_27545[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (16))){
var inst_27466 = (state_27482[(2)]);
var state_27482__$1 = state_27482;
var statearr_27515_27546 = state_27482__$1;
(statearr_27515_27546[(2)] = inst_27466);

(statearr_27515_27546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27483 === (10))){
var inst_27437 = (state_27482[(8)]);
var inst_27435 = (state_27482[(12)]);
var inst_27442 = cljs.core._nth.call(null,inst_27435,inst_27437);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27482__$1,(13),out,inst_27442);
} else {
if((state_val_27483 === (18))){
var inst_27448 = (state_27482[(7)]);
var inst_27457 = cljs.core.first.call(null,inst_27448);
var state_27482__$1 = state_27482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27482__$1,(20),out,inst_27457);
} else {
if((state_val_27483 === (8))){
var inst_27437 = (state_27482[(8)]);
var inst_27436 = (state_27482[(9)]);
var inst_27439 = (inst_27437 < inst_27436);
var inst_27440 = inst_27439;
var state_27482__$1 = state_27482;
if(cljs.core.truth_(inst_27440)){
var statearr_27516_27547 = state_27482__$1;
(statearr_27516_27547[(1)] = (10));

} else {
var statearr_27517_27548 = state_27482__$1;
(statearr_27517_27548[(1)] = (11));

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
});})(c__15442__auto__))
;
return ((function (switch__15386__auto__,c__15442__auto__){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_27521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27521[(0)] = state_machine__15387__auto__);

(statearr_27521[(1)] = (1));

return statearr_27521;
});
var state_machine__15387__auto____1 = (function (state_27482){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_27482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e27522){if((e27522 instanceof Object)){
var ex__15390__auto__ = e27522;
var statearr_27523_27549 = state_27482;
(statearr_27523_27549[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27550 = state_27482;
state_27482 = G__27550;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_27482){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_27482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__))
})();
var state__15444__auto__ = (function (){var statearr_27524 = f__15443__auto__.call(null);
(statearr_27524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__))
);

return c__15442__auto__;
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
var c__15442__auto___27647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___27647,out){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___27647,out){
return (function (state_27622){
var state_val_27623 = (state_27622[(1)]);
if((state_val_27623 === (7))){
var inst_27617 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
var statearr_27624_27648 = state_27622__$1;
(statearr_27624_27648[(2)] = inst_27617);

(statearr_27624_27648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (1))){
var inst_27599 = null;
var state_27622__$1 = (function (){var statearr_27625 = state_27622;
(statearr_27625[(7)] = inst_27599);

return statearr_27625;
})();
var statearr_27626_27649 = state_27622__$1;
(statearr_27626_27649[(2)] = null);

(statearr_27626_27649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (4))){
var inst_27602 = (state_27622[(8)]);
var inst_27602__$1 = (state_27622[(2)]);
var inst_27603 = (inst_27602__$1 == null);
var inst_27604 = cljs.core.not.call(null,inst_27603);
var state_27622__$1 = (function (){var statearr_27627 = state_27622;
(statearr_27627[(8)] = inst_27602__$1);

return statearr_27627;
})();
if(inst_27604){
var statearr_27628_27650 = state_27622__$1;
(statearr_27628_27650[(1)] = (5));

} else {
var statearr_27629_27651 = state_27622__$1;
(statearr_27629_27651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (6))){
var state_27622__$1 = state_27622;
var statearr_27630_27652 = state_27622__$1;
(statearr_27630_27652[(2)] = null);

(statearr_27630_27652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (3))){
var inst_27619 = (state_27622[(2)]);
var inst_27620 = cljs.core.async.close_BANG_.call(null,out);
var state_27622__$1 = (function (){var statearr_27631 = state_27622;
(statearr_27631[(9)] = inst_27619);

return statearr_27631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27622__$1,inst_27620);
} else {
if((state_val_27623 === (2))){
var state_27622__$1 = state_27622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27622__$1,(4),ch);
} else {
if((state_val_27623 === (11))){
var inst_27602 = (state_27622[(8)]);
var inst_27611 = (state_27622[(2)]);
var inst_27599 = inst_27602;
var state_27622__$1 = (function (){var statearr_27632 = state_27622;
(statearr_27632[(7)] = inst_27599);

(statearr_27632[(10)] = inst_27611);

return statearr_27632;
})();
var statearr_27633_27653 = state_27622__$1;
(statearr_27633_27653[(2)] = null);

(statearr_27633_27653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (9))){
var inst_27602 = (state_27622[(8)]);
var state_27622__$1 = state_27622;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27622__$1,(11),out,inst_27602);
} else {
if((state_val_27623 === (5))){
var inst_27599 = (state_27622[(7)]);
var inst_27602 = (state_27622[(8)]);
var inst_27606 = cljs.core._EQ_.call(null,inst_27602,inst_27599);
var state_27622__$1 = state_27622;
if(inst_27606){
var statearr_27635_27654 = state_27622__$1;
(statearr_27635_27654[(1)] = (8));

} else {
var statearr_27636_27655 = state_27622__$1;
(statearr_27636_27655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (10))){
var inst_27614 = (state_27622[(2)]);
var state_27622__$1 = state_27622;
var statearr_27637_27656 = state_27622__$1;
(statearr_27637_27656[(2)] = inst_27614);

(statearr_27637_27656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27623 === (8))){
var inst_27599 = (state_27622[(7)]);
var tmp27634 = inst_27599;
var inst_27599__$1 = tmp27634;
var state_27622__$1 = (function (){var statearr_27638 = state_27622;
(statearr_27638[(7)] = inst_27599__$1);

return statearr_27638;
})();
var statearr_27639_27657 = state_27622__$1;
(statearr_27639_27657[(2)] = null);

(statearr_27639_27657[(1)] = (2));


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
});})(c__15442__auto___27647,out))
;
return ((function (switch__15386__auto__,c__15442__auto___27647,out){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_27643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27643[(0)] = state_machine__15387__auto__);

(statearr_27643[(1)] = (1));

return statearr_27643;
});
var state_machine__15387__auto____1 = (function (state_27622){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_27622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e27644){if((e27644 instanceof Object)){
var ex__15390__auto__ = e27644;
var statearr_27645_27658 = state_27622;
(statearr_27645_27658[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27659 = state_27622;
state_27622 = G__27659;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_27622){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_27622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___27647,out))
})();
var state__15444__auto__ = (function (){var statearr_27646 = f__15443__auto__.call(null);
(statearr_27646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___27647);

return statearr_27646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___27647,out))
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
var c__15442__auto___27794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___27794,out){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___27794,out){
return (function (state_27764){
var state_val_27765 = (state_27764[(1)]);
if((state_val_27765 === (7))){
var inst_27760 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27766_27795 = state_27764__$1;
(statearr_27766_27795[(2)] = inst_27760);

(statearr_27766_27795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (1))){
var inst_27727 = (new Array(n));
var inst_27728 = inst_27727;
var inst_27729 = (0);
var state_27764__$1 = (function (){var statearr_27767 = state_27764;
(statearr_27767[(7)] = inst_27728);

(statearr_27767[(8)] = inst_27729);

return statearr_27767;
})();
var statearr_27768_27796 = state_27764__$1;
(statearr_27768_27796[(2)] = null);

(statearr_27768_27796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (4))){
var inst_27732 = (state_27764[(9)]);
var inst_27732__$1 = (state_27764[(2)]);
var inst_27733 = (inst_27732__$1 == null);
var inst_27734 = cljs.core.not.call(null,inst_27733);
var state_27764__$1 = (function (){var statearr_27769 = state_27764;
(statearr_27769[(9)] = inst_27732__$1);

return statearr_27769;
})();
if(inst_27734){
var statearr_27770_27797 = state_27764__$1;
(statearr_27770_27797[(1)] = (5));

} else {
var statearr_27771_27798 = state_27764__$1;
(statearr_27771_27798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (15))){
var inst_27754 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27772_27799 = state_27764__$1;
(statearr_27772_27799[(2)] = inst_27754);

(statearr_27772_27799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (13))){
var state_27764__$1 = state_27764;
var statearr_27773_27800 = state_27764__$1;
(statearr_27773_27800[(2)] = null);

(statearr_27773_27800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (6))){
var inst_27729 = (state_27764[(8)]);
var inst_27750 = (inst_27729 > (0));
var state_27764__$1 = state_27764;
if(cljs.core.truth_(inst_27750)){
var statearr_27774_27801 = state_27764__$1;
(statearr_27774_27801[(1)] = (12));

} else {
var statearr_27775_27802 = state_27764__$1;
(statearr_27775_27802[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (3))){
var inst_27762 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27764__$1,inst_27762);
} else {
if((state_val_27765 === (12))){
var inst_27728 = (state_27764[(7)]);
var inst_27752 = cljs.core.vec.call(null,inst_27728);
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27764__$1,(15),out,inst_27752);
} else {
if((state_val_27765 === (2))){
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27764__$1,(4),ch);
} else {
if((state_val_27765 === (11))){
var inst_27744 = (state_27764[(2)]);
var inst_27745 = (new Array(n));
var inst_27728 = inst_27745;
var inst_27729 = (0);
var state_27764__$1 = (function (){var statearr_27776 = state_27764;
(statearr_27776[(10)] = inst_27744);

(statearr_27776[(7)] = inst_27728);

(statearr_27776[(8)] = inst_27729);

return statearr_27776;
})();
var statearr_27777_27803 = state_27764__$1;
(statearr_27777_27803[(2)] = null);

(statearr_27777_27803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (9))){
var inst_27728 = (state_27764[(7)]);
var inst_27742 = cljs.core.vec.call(null,inst_27728);
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27764__$1,(11),out,inst_27742);
} else {
if((state_val_27765 === (5))){
var inst_27728 = (state_27764[(7)]);
var inst_27729 = (state_27764[(8)]);
var inst_27737 = (state_27764[(11)]);
var inst_27732 = (state_27764[(9)]);
var inst_27736 = (inst_27728[inst_27729] = inst_27732);
var inst_27737__$1 = (inst_27729 + (1));
var inst_27738 = (inst_27737__$1 < n);
var state_27764__$1 = (function (){var statearr_27778 = state_27764;
(statearr_27778[(12)] = inst_27736);

(statearr_27778[(11)] = inst_27737__$1);

return statearr_27778;
})();
if(cljs.core.truth_(inst_27738)){
var statearr_27779_27804 = state_27764__$1;
(statearr_27779_27804[(1)] = (8));

} else {
var statearr_27780_27805 = state_27764__$1;
(statearr_27780_27805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (14))){
var inst_27757 = (state_27764[(2)]);
var inst_27758 = cljs.core.async.close_BANG_.call(null,out);
var state_27764__$1 = (function (){var statearr_27782 = state_27764;
(statearr_27782[(13)] = inst_27757);

return statearr_27782;
})();
var statearr_27783_27806 = state_27764__$1;
(statearr_27783_27806[(2)] = inst_27758);

(statearr_27783_27806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (10))){
var inst_27748 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27784_27807 = state_27764__$1;
(statearr_27784_27807[(2)] = inst_27748);

(statearr_27784_27807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (8))){
var inst_27728 = (state_27764[(7)]);
var inst_27737 = (state_27764[(11)]);
var tmp27781 = inst_27728;
var inst_27728__$1 = tmp27781;
var inst_27729 = inst_27737;
var state_27764__$1 = (function (){var statearr_27785 = state_27764;
(statearr_27785[(7)] = inst_27728__$1);

(statearr_27785[(8)] = inst_27729);

return statearr_27785;
})();
var statearr_27786_27808 = state_27764__$1;
(statearr_27786_27808[(2)] = null);

(statearr_27786_27808[(1)] = (2));


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
});})(c__15442__auto___27794,out))
;
return ((function (switch__15386__auto__,c__15442__auto___27794,out){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_27790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27790[(0)] = state_machine__15387__auto__);

(statearr_27790[(1)] = (1));

return statearr_27790;
});
var state_machine__15387__auto____1 = (function (state_27764){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_27764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e27791){if((e27791 instanceof Object)){
var ex__15390__auto__ = e27791;
var statearr_27792_27809 = state_27764;
(statearr_27792_27809[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27810 = state_27764;
state_27764 = G__27810;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_27764){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_27764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___27794,out))
})();
var state__15444__auto__ = (function (){var statearr_27793 = f__15443__auto__.call(null);
(statearr_27793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___27794);

return statearr_27793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___27794,out))
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
var c__15442__auto___27953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___27953,out){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___27953,out){
return (function (state_27923){
var state_val_27924 = (state_27923[(1)]);
if((state_val_27924 === (7))){
var inst_27919 = (state_27923[(2)]);
var state_27923__$1 = state_27923;
var statearr_27925_27954 = state_27923__$1;
(statearr_27925_27954[(2)] = inst_27919);

(statearr_27925_27954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (1))){
var inst_27882 = [];
var inst_27883 = inst_27882;
var inst_27884 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27923__$1 = (function (){var statearr_27926 = state_27923;
(statearr_27926[(7)] = inst_27884);

(statearr_27926[(8)] = inst_27883);

return statearr_27926;
})();
var statearr_27927_27955 = state_27923__$1;
(statearr_27927_27955[(2)] = null);

(statearr_27927_27955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (4))){
var inst_27887 = (state_27923[(9)]);
var inst_27887__$1 = (state_27923[(2)]);
var inst_27888 = (inst_27887__$1 == null);
var inst_27889 = cljs.core.not.call(null,inst_27888);
var state_27923__$1 = (function (){var statearr_27928 = state_27923;
(statearr_27928[(9)] = inst_27887__$1);

return statearr_27928;
})();
if(inst_27889){
var statearr_27929_27956 = state_27923__$1;
(statearr_27929_27956[(1)] = (5));

} else {
var statearr_27930_27957 = state_27923__$1;
(statearr_27930_27957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (15))){
var inst_27913 = (state_27923[(2)]);
var state_27923__$1 = state_27923;
var statearr_27931_27958 = state_27923__$1;
(statearr_27931_27958[(2)] = inst_27913);

(statearr_27931_27958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (13))){
var state_27923__$1 = state_27923;
var statearr_27932_27959 = state_27923__$1;
(statearr_27932_27959[(2)] = null);

(statearr_27932_27959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (6))){
var inst_27883 = (state_27923[(8)]);
var inst_27908 = inst_27883.length;
var inst_27909 = (inst_27908 > (0));
var state_27923__$1 = state_27923;
if(cljs.core.truth_(inst_27909)){
var statearr_27933_27960 = state_27923__$1;
(statearr_27933_27960[(1)] = (12));

} else {
var statearr_27934_27961 = state_27923__$1;
(statearr_27934_27961[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (3))){
var inst_27921 = (state_27923[(2)]);
var state_27923__$1 = state_27923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27923__$1,inst_27921);
} else {
if((state_val_27924 === (12))){
var inst_27883 = (state_27923[(8)]);
var inst_27911 = cljs.core.vec.call(null,inst_27883);
var state_27923__$1 = state_27923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27923__$1,(15),out,inst_27911);
} else {
if((state_val_27924 === (2))){
var state_27923__$1 = state_27923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27923__$1,(4),ch);
} else {
if((state_val_27924 === (11))){
var inst_27887 = (state_27923[(9)]);
var inst_27891 = (state_27923[(10)]);
var inst_27901 = (state_27923[(2)]);
var inst_27902 = [];
var inst_27903 = inst_27902.push(inst_27887);
var inst_27883 = inst_27902;
var inst_27884 = inst_27891;
var state_27923__$1 = (function (){var statearr_27935 = state_27923;
(statearr_27935[(7)] = inst_27884);

(statearr_27935[(8)] = inst_27883);

(statearr_27935[(11)] = inst_27903);

(statearr_27935[(12)] = inst_27901);

return statearr_27935;
})();
var statearr_27936_27962 = state_27923__$1;
(statearr_27936_27962[(2)] = null);

(statearr_27936_27962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (9))){
var inst_27883 = (state_27923[(8)]);
var inst_27899 = cljs.core.vec.call(null,inst_27883);
var state_27923__$1 = state_27923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27923__$1,(11),out,inst_27899);
} else {
if((state_val_27924 === (5))){
var inst_27887 = (state_27923[(9)]);
var inst_27884 = (state_27923[(7)]);
var inst_27891 = (state_27923[(10)]);
var inst_27891__$1 = f.call(null,inst_27887);
var inst_27892 = cljs.core._EQ_.call(null,inst_27891__$1,inst_27884);
var inst_27893 = cljs.core.keyword_identical_QMARK_.call(null,inst_27884,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27894 = (inst_27892) || (inst_27893);
var state_27923__$1 = (function (){var statearr_27937 = state_27923;
(statearr_27937[(10)] = inst_27891__$1);

return statearr_27937;
})();
if(cljs.core.truth_(inst_27894)){
var statearr_27938_27963 = state_27923__$1;
(statearr_27938_27963[(1)] = (8));

} else {
var statearr_27939_27964 = state_27923__$1;
(statearr_27939_27964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (14))){
var inst_27916 = (state_27923[(2)]);
var inst_27917 = cljs.core.async.close_BANG_.call(null,out);
var state_27923__$1 = (function (){var statearr_27941 = state_27923;
(statearr_27941[(13)] = inst_27916);

return statearr_27941;
})();
var statearr_27942_27965 = state_27923__$1;
(statearr_27942_27965[(2)] = inst_27917);

(statearr_27942_27965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (10))){
var inst_27906 = (state_27923[(2)]);
var state_27923__$1 = state_27923;
var statearr_27943_27966 = state_27923__$1;
(statearr_27943_27966[(2)] = inst_27906);

(statearr_27943_27966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27924 === (8))){
var inst_27887 = (state_27923[(9)]);
var inst_27883 = (state_27923[(8)]);
var inst_27891 = (state_27923[(10)]);
var inst_27896 = inst_27883.push(inst_27887);
var tmp27940 = inst_27883;
var inst_27883__$1 = tmp27940;
var inst_27884 = inst_27891;
var state_27923__$1 = (function (){var statearr_27944 = state_27923;
(statearr_27944[(14)] = inst_27896);

(statearr_27944[(7)] = inst_27884);

(statearr_27944[(8)] = inst_27883__$1);

return statearr_27944;
})();
var statearr_27945_27967 = state_27923__$1;
(statearr_27945_27967[(2)] = null);

(statearr_27945_27967[(1)] = (2));


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
});})(c__15442__auto___27953,out))
;
return ((function (switch__15386__auto__,c__15442__auto___27953,out){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_27949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27949[(0)] = state_machine__15387__auto__);

(statearr_27949[(1)] = (1));

return statearr_27949;
});
var state_machine__15387__auto____1 = (function (state_27923){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_27923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e27950){if((e27950 instanceof Object)){
var ex__15390__auto__ = e27950;
var statearr_27951_27968 = state_27923;
(statearr_27951_27968[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27969 = state_27923;
state_27923 = G__27969;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_27923){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_27923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___27953,out))
})();
var state__15444__auto__ = (function (){var statearr_27952 = f__15443__auto__.call(null);
(statearr_27952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___27953);

return statearr_27952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___27953,out))
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

//# sourceMappingURL=async.js.map?rel=1429446763058