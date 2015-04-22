// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12815__auto___24195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24195){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24195){
return (function (state_24177){
var state_val_24178 = (state_24177[(1)]);
if((state_val_24178 === (9))){
var inst_24169 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24179_24196 = state_24177__$1;
(statearr_24179_24196[(2)] = inst_24169);

(statearr_24179_24196[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24178 === (8))){
var inst_24165 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24180_24197 = state_24177__$1;
(statearr_24180_24197[(2)] = inst_24165);

(statearr_24180_24197[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24178 === (7))){
var inst_24158 = (state_24177[(7)]);
var inst_24171 = (state_24177[(2)]);
var inst_24172 = re_frame.handlers.handle(inst_24158);
var state_24177__$1 = (function (){var statearr_24181 = state_24177;
(statearr_24181[(8)] = inst_24171);

(statearr_24181[(9)] = inst_24172);

return statearr_24181;
})();
var statearr_24182_24198 = state_24177__$1;
(statearr_24182_24198[(2)] = null);

(statearr_24182_24198[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24178 === (6))){
var inst_24167 = cljs.core.async.timeout((0));
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24177__$1,(9),inst_24167);
} else {
if((state_val_24178 === (5))){
var inst_24162 = reagent.core.flush();
var inst_24163 = cljs.core.async.timeout((20));
var state_24177__$1 = (function (){var statearr_24183 = state_24177;
(statearr_24183[(10)] = inst_24162);

return statearr_24183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24177__$1,(8),inst_24163);
} else {
if((state_val_24178 === (4))){
var inst_24158 = (state_24177[(7)]);
var inst_24158__$1 = (state_24177[(2)]);
var inst_24159 = cljs.core.meta(inst_24158__$1);
var inst_24160 = cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(inst_24159);
var state_24177__$1 = (function (){var statearr_24184 = state_24177;
(statearr_24184[(7)] = inst_24158__$1);

return statearr_24184;
})();
if(cljs.core.truth_(inst_24160)){
var statearr_24185_24199 = state_24177__$1;
(statearr_24185_24199[(1)] = (5));

} else {
var statearr_24186_24200 = state_24177__$1;
(statearr_24186_24200[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24178 === (3))){
var inst_24175 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24177__$1,inst_24175);
} else {
if((state_val_24178 === (2))){
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24177__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_24178 === (1))){
var state_24177__$1 = state_24177;
var statearr_24187_24201 = state_24177__$1;
(statearr_24187_24201[(2)] = null);

(statearr_24187_24201[(1)] = (2));


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
});})(c__12815__auto___24195))
;
return ((function (switch__12735__auto__,c__12815__auto___24195){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24191[(0)] = state_machine__12736__auto__);

(statearr_24191[(1)] = (1));

return statearr_24191;
});
var state_machine__12736__auto____1 = (function (state_24177){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24177);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24192){if((e24192 instanceof Object)){
var ex__12739__auto__ = e24192;
var statearr_24193_24202 = state_24177;
(statearr_24193_24202[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24177);

return cljs.core.constant$keyword$83;
} else {
throw e24192;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24203 = state_24177;
state_24177 = G__24203;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24177){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24195))
})();
var state__12817__auto__ = (function (){var statearr_24194 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24195);

return statearr_24194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24195))
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
