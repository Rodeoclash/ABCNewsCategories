// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$82);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t27619 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t27619 = (function (f,fn_handler,meta27620){
this.f = f;
this.fn_handler = fn_handler;
this.meta27620 = meta27620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t27619.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t27619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t27619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t27619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27621){
var self__ = this;
var _27621__$1 = this;
return self__.meta27620;
});

cljs.core.async.impl.ioc_helpers.t27619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27621,meta27620__$1){
var self__ = this;
var _27621__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t27619(self__.f,self__.fn_handler,meta27620__$1));
});

cljs.core.async.impl.ioc_helpers.t27619.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t27619.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t27619";

cljs.core.async.impl.ioc_helpers.t27619.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cljs.core.async.impl.ioc-helpers/t27619");
});

cljs.core.async.impl.ioc_helpers.__GT_t27619 = (function __GT_t27619(f__$1,fn_handler__$1,meta27620){
return (new cljs.core.async.impl.ioc_helpers.t27619(f__$1,fn_handler__$1,meta27620));
});

}

return (new cljs.core.async.impl.ioc_helpers.t27619(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e27623){if((e27623 instanceof Object)){
var ex = e27623;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e27623;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_27627_27630 = state;
(statearr_27627_27630[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_27627_27630[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_27628_27631 = state;
(statearr_27628_27631[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__27629 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27629) : cljs.core.deref.call(null,G__27629));
})());

(statearr_27628_27631[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$83;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_27635_27638 = state;
(statearr_27635_27638[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_27635_27638[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_27636_27639 = state;
(statearr_27636_27639[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__27637 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27637) : cljs.core.deref.call(null,G__27637));
})());

(statearr_27636_27639[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$83;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4409__auto__,k__4410__auto__){
var self__ = this;
var this__4409__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4409__auto____$1,k__4410__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4411__auto__,k27641,else__4412__auto__){
var self__ = this;
var this__4411__auto____$1 = this;
var G__27643 = (((k27641 instanceof cljs.core.Keyword))?k27641.fqn:null);
switch (G__27643) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27641,else__4412__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4423__auto__,writer__4424__auto__,opts__4425__auto__){
var self__ = this;
var this__4423__auto____$1 = this;
var pr_pair__4426__auto__ = ((function (this__4423__auto____$1){
return (function (keyval__4427__auto__){
return cljs.core.pr_sequential_writer(writer__4424__auto__,cljs.core.pr_writer,""," ","",opts__4425__auto__,keyval__4427__auto__);
});})(this__4423__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4424__auto__,pr_pair__4426__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4425__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$84,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$87,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4407__auto__){
var self__ = this;
var this__4407__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4403__auto__){
var self__ = this;
var this__4403__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4413__auto__){
var self__ = this;
var this__4413__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4404__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
var h__4227__auto__ = self__.__hash;
if(!((h__4227__auto__ == null))){
return h__4227__auto__;
} else {
var h__4227__auto____$1 = cljs.core.hash_imap(this__4404__auto____$1);
self__.__hash = h__4227__auto____$1;

return h__4227__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4405__auto__,other__4406__auto__){
var self__ = this;
var this__4405__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3794__auto__ = other__4406__auto__;
if(cljs.core.truth_(and__3794__auto__)){
return ((this__4405__auto____$1.constructor === other__4406__auto__.constructor)) && (cljs.core.equiv_map(this__4405__auto____$1,other__4406__auto__));
} else {
return and__3794__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4418__auto__,k__4419__auto__){
var self__ = this;
var this__4418__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$84,null,cljs.core.constant$keyword$85,null,cljs.core.constant$keyword$88,null,cljs.core.constant$keyword$87,null], null), null),k__4419__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4418__auto____$1),self__.__meta),k__4419__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4419__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4416__auto__,k__4417__auto__,G__27640){
var self__ = this;
var this__4416__auto____$1 = this;
var pred__27644 = cljs.core.keyword_identical_QMARK_;
var expr__27645 = k__4417__auto__;
if(cljs.core.truth_((function (){var G__27647 = cljs.core.constant$keyword$84;
var G__27648 = expr__27645;
return (pred__27644.cljs$core$IFn$_invoke$arity$2 ? pred__27644.cljs$core$IFn$_invoke$arity$2(G__27647,G__27648) : pred__27644.call(null,G__27647,G__27648));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__27640,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27649 = cljs.core.constant$keyword$85;
var G__27650 = expr__27645;
return (pred__27644.cljs$core$IFn$_invoke$arity$2 ? pred__27644.cljs$core$IFn$_invoke$arity$2(G__27649,G__27650) : pred__27644.call(null,G__27649,G__27650));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__27640,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27651 = cljs.core.constant$keyword$86;
var G__27652 = expr__27645;
return (pred__27644.cljs$core$IFn$_invoke$arity$2 ? pred__27644.cljs$core$IFn$_invoke$arity$2(G__27651,G__27652) : pred__27644.call(null,G__27651,G__27652));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__27640,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27653 = cljs.core.constant$keyword$87;
var G__27654 = expr__27645;
return (pred__27644.cljs$core$IFn$_invoke$arity$2 ? pred__27644.cljs$core$IFn$_invoke$arity$2(G__27653,G__27654) : pred__27644.call(null,G__27653,G__27654));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__27640,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27655 = cljs.core.constant$keyword$88;
var G__27656 = expr__27645;
return (pred__27644.cljs$core$IFn$_invoke$arity$2 ? pred__27644.cljs$core$IFn$_invoke$arity$2(G__27655,G__27656) : pred__27644.call(null,G__27655,G__27656));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__27640,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4417__auto__,G__27640),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4421__auto__){
var self__ = this;
var this__4421__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$84,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$85,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$86,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$87,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4408__auto__,G__27640){
var self__ = this;
var this__4408__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__27640,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4414__auto__,entry__4415__auto__){
var self__ = this;
var this__4414__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4415__auto__)){
return cljs.core._assoc(this__4414__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4415__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4415__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4414__auto____$1,entry__4415__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4443__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4443__auto__,writer__4444__auto__){
return cljs.core._write(writer__4444__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__27642){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(G__27642),cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(G__27642),cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(G__27642),cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(G__27642),cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(G__27642),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27642,cljs.core.constant$keyword$84,cljs.core.array_seq([cljs.core.constant$keyword$85,cljs.core.constant$keyword$86,cljs.core.constant$keyword$87,cljs.core.constant$keyword$88], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_27659 = state;
(statearr_27659[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_27659;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$84.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3794__auto__ = exception;
if(cljs.core.truth_(and__3794__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3794__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3794__auto__ = exception;
if(cljs.core.truth_(and__3794__auto__)){
var and__3794__auto____$1 = catch_block;
if(cljs.core.truth_(and__3794__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3794__auto____$1;
}
} else {
return and__3794__auto__;
}
})())){
var statearr_27665 = state;
(statearr_27665[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_27665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_27665[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_27665[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$84,null,cljs.core.array_seq([cljs.core.constant$keyword$85,null], 0)));

return statearr_27665;
} else {
if(cljs.core.truth_((function (){var and__3794__auto__ = exception;
if(cljs.core.truth_(and__3794__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3794__auto__;
}
})())){
var statearr_27666_27670 = state;
(statearr_27666_27670[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__27671 = state;
state = G__27671;
continue;
} else {
if(cljs.core.truth_((function (){var and__3794__auto__ = exception;
if(cljs.core.truth_(and__3794__auto__)){
var and__3794__auto____$1 = cljs.core.not(catch_block);
if(and__3794__auto____$1){
return cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3794__auto____$1;
}
} else {
return and__3794__auto__;
}
})())){
var statearr_27667 = state;
(statearr_27667[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27667[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$86,null));

return statearr_27667;
} else {
if(cljs.core.truth_((function (){var and__3794__auto__ = cljs.core.not(exception);
if(and__3794__auto__){
return cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3794__auto__;
}
})())){
var statearr_27668 = state;
(statearr_27668[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27668[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$86,null));

return statearr_27668;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_27669 = state;
(statearr_27669[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_27669[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_27669;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
