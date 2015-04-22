// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12815__auto___24191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24191){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24191){
return (function (state_24173){
var state_val_24174 = (state_24173[(1)]);
if((state_val_24174 === (9))){
var inst_24165 = (state_24173[(2)]);
var state_24173__$1 = state_24173;
var statearr_24175_24192 = state_24173__$1;
(statearr_24175_24192[(2)] = inst_24165);

(statearr_24175_24192[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24174 === (8))){
var inst_24161 = (state_24173[(2)]);
var state_24173__$1 = state_24173;
var statearr_24176_24193 = state_24173__$1;
(statearr_24176_24193[(2)] = inst_24161);

(statearr_24176_24193[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24174 === (7))){
var inst_24154 = (state_24173[(7)]);
var inst_24167 = (state_24173[(2)]);
var inst_24168 = re_frame.handlers.handle(inst_24154);
var state_24173__$1 = (function (){var statearr_24177 = state_24173;
(statearr_24177[(8)] = inst_24167);

(statearr_24177[(9)] = inst_24168);

return statearr_24177;
})();
var statearr_24178_24194 = state_24173__$1;
(statearr_24178_24194[(2)] = null);

(statearr_24178_24194[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24174 === (6))){
var inst_24163 = cljs.core.async.timeout((0));
var state_24173__$1 = state_24173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24173__$1,(9),inst_24163);
} else {
if((state_val_24174 === (5))){
var inst_24158 = reagent.core.flush();
var inst_24159 = cljs.core.async.timeout((20));
var state_24173__$1 = (function (){var statearr_24179 = state_24173;
(statearr_24179[(10)] = inst_24158);

return statearr_24179;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24173__$1,(8),inst_24159);
} else {
if((state_val_24174 === (4))){
var inst_24154 = (state_24173[(7)]);
var inst_24154__$1 = (state_24173[(2)]);
var inst_24155 = cljs.core.meta(inst_24154__$1);
var inst_24156 = cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(inst_24155);
var state_24173__$1 = (function (){var statearr_24180 = state_24173;
(statearr_24180[(7)] = inst_24154__$1);

return statearr_24180;
})();
if(cljs.core.truth_(inst_24156)){
var statearr_24181_24195 = state_24173__$1;
(statearr_24181_24195[(1)] = (5));

} else {
var statearr_24182_24196 = state_24173__$1;
(statearr_24182_24196[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24174 === (3))){
var inst_24171 = (state_24173[(2)]);
var state_24173__$1 = state_24173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24173__$1,inst_24171);
} else {
if((state_val_24174 === (2))){
var state_24173__$1 = state_24173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24173__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_24174 === (1))){
var state_24173__$1 = state_24173;
var statearr_24183_24197 = state_24173__$1;
(statearr_24183_24197[(2)] = null);

(statearr_24183_24197[(1)] = (2));


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
});})(c__12815__auto___24191))
;
return ((function (switch__12735__auto__,c__12815__auto___24191){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24187 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24187[(0)] = state_machine__12736__auto__);

(statearr_24187[(1)] = (1));

return statearr_24187;
});
var state_machine__12736__auto____1 = (function (state_24173){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24173);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24188){if((e24188 instanceof Object)){
var ex__12739__auto__ = e24188;
var statearr_24189_24198 = state_24173;
(statearr_24189_24198[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24173);

return cljs.core.constant$keyword$83;
} else {
throw e24188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24199 = state_24173;
state_24173 = G__24199;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24173){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24191))
})();
var state__12817__auto__ = (function (){var statearr_24190 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24191);

return statearr_24190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24191))
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
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"dispatch\" is ignoring a nil event."], 0));
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.router.event_chan,event_v);
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
re_frame.handlers.handle(event_v);

return null;
});
