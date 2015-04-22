// Compiled by ClojureScript 0.0-2816 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
var c__16178__auto___27374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___27374){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___27374){
return (function (state_27356){
var state_val_27357 = (state_27356[(1)]);
if((state_val_27357 === (9))){
var inst_27348 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
var statearr_27358_27375 = state_27356__$1;
(statearr_27358_27375[(2)] = inst_27348);

(statearr_27358_27375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (8))){
var inst_27344 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
var statearr_27359_27376 = state_27356__$1;
(statearr_27359_27376[(2)] = inst_27344);

(statearr_27359_27376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (7))){
var inst_27337 = (state_27356[(7)]);
var inst_27350 = (state_27356[(2)]);
var inst_27351 = re_frame.handlers.handle.call(null,inst_27337);
var state_27356__$1 = (function (){var statearr_27360 = state_27356;
(statearr_27360[(8)] = inst_27351);

(statearr_27360[(9)] = inst_27350);

return statearr_27360;
})();
var statearr_27361_27377 = state_27356__$1;
(statearr_27361_27377[(2)] = null);

(statearr_27361_27377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (6))){
var inst_27346 = cljs.core.async.timeout.call(null,(0));
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27356__$1,(9),inst_27346);
} else {
if((state_val_27357 === (5))){
var inst_27341 = reagent.core.flush.call(null);
var inst_27342 = cljs.core.async.timeout.call(null,(20));
var state_27356__$1 = (function (){var statearr_27362 = state_27356;
(statearr_27362[(10)] = inst_27341);

return statearr_27362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27356__$1,(8),inst_27342);
} else {
if((state_val_27357 === (4))){
var inst_27337 = (state_27356[(7)]);
var inst_27337__$1 = (state_27356[(2)]);
var inst_27338 = cljs.core.meta.call(null,inst_27337__$1);
var inst_27339 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_27338);
var state_27356__$1 = (function (){var statearr_27363 = state_27356;
(statearr_27363[(7)] = inst_27337__$1);

return statearr_27363;
})();
if(cljs.core.truth_(inst_27339)){
var statearr_27364_27378 = state_27356__$1;
(statearr_27364_27378[(1)] = (5));

} else {
var statearr_27365_27379 = state_27356__$1;
(statearr_27365_27379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27357 === (3))){
var inst_27354 = (state_27356[(2)]);
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27356__$1,inst_27354);
} else {
if((state_val_27357 === (2))){
var state_27356__$1 = state_27356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27356__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_27357 === (1))){
var state_27356__$1 = state_27356;
var statearr_27366_27380 = state_27356__$1;
(statearr_27366_27380[(2)] = null);

(statearr_27366_27380[(1)] = (2));


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
});})(c__16178__auto___27374))
;
return ((function (switch__16122__auto__,c__16178__auto___27374){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_27370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27370[(0)] = state_machine__16123__auto__);

(statearr_27370[(1)] = (1));

return statearr_27370;
});
var state_machine__16123__auto____1 = (function (state_27356){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_27356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e27371){if((e27371 instanceof Object)){
var ex__16126__auto__ = e27371;
var statearr_27372_27381 = state_27356;
(statearr_27372_27381[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27382 = state_27356;
state_27356 = G__27382;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_27356){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_27356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___27374))
})();
var state__16180__auto__ = (function (){var statearr_27373 = f__16179__auto__.call(null);
(statearr_27373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___27374);

return statearr_27373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___27374))
);

/**
* Send an event to be processed by the registered handler.
* 
* Usage example:
* (dispatch [:delete-item 42])
* 
*/
re_frame.router.dispatch = (function dispatch(event_v){
if((event_v == null)){
re_frame.utils.warn.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
* Send an event to be processed by the registered handler, but avoid the async-inducing
* use of core.async/chan.
* 
* Usage example:
* (dispatch-sync [:delete-item 42])
*/
re_frame.router.dispatch_sync = (function dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1429705618999