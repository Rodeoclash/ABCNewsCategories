// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12815__auto___24187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12815__auto___24187){
return (function (){
var f__12816__auto__ = (function (){var switch__12735__auto__ = ((function (c__12815__auto___24187){
return (function (state_24169){
var state_val_24170 = (state_24169[(1)]);
if((state_val_24170 === (9))){
var inst_24161 = (state_24169[(2)]);
var state_24169__$1 = state_24169;
var statearr_24171_24188 = state_24169__$1;
(statearr_24171_24188[(2)] = inst_24161);

(statearr_24171_24188[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24170 === (8))){
var inst_24157 = (state_24169[(2)]);
var state_24169__$1 = state_24169;
var statearr_24172_24189 = state_24169__$1;
(statearr_24172_24189[(2)] = inst_24157);

(statearr_24172_24189[(1)] = (7));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24170 === (7))){
var inst_24150 = (state_24169[(7)]);
var inst_24163 = (state_24169[(2)]);
var inst_24164 = re_frame.handlers.handle(inst_24150);
var state_24169__$1 = (function (){var statearr_24173 = state_24169;
(statearr_24173[(8)] = inst_24164);

(statearr_24173[(9)] = inst_24163);

return statearr_24173;
})();
var statearr_24174_24190 = state_24169__$1;
(statearr_24174_24190[(2)] = null);

(statearr_24174_24190[(1)] = (2));


return cljs.core.constant$keyword$83;
} else {
if((state_val_24170 === (6))){
var inst_24159 = cljs.core.async.timeout((0));
var state_24169__$1 = state_24169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24169__$1,(9),inst_24159);
} else {
if((state_val_24170 === (5))){
var inst_24154 = reagent.core.flush();
var inst_24155 = cljs.core.async.timeout((20));
var state_24169__$1 = (function (){var statearr_24175 = state_24169;
(statearr_24175[(10)] = inst_24154);

return statearr_24175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24169__$1,(8),inst_24155);
} else {
if((state_val_24170 === (4))){
var inst_24150 = (state_24169[(7)]);
var inst_24150__$1 = (state_24169[(2)]);
var inst_24151 = cljs.core.meta(inst_24150__$1);
var inst_24152 = cljs.core.constant$keyword$98.cljs$core$IFn$_invoke$arity$1(inst_24151);
var state_24169__$1 = (function (){var statearr_24176 = state_24169;
(statearr_24176[(7)] = inst_24150__$1);

return statearr_24176;
})();
if(cljs.core.truth_(inst_24152)){
var statearr_24177_24191 = state_24169__$1;
(statearr_24177_24191[(1)] = (5));

} else {
var statearr_24178_24192 = state_24169__$1;
(statearr_24178_24192[(1)] = (6));

}

return cljs.core.constant$keyword$83;
} else {
if((state_val_24170 === (3))){
var inst_24167 = (state_24169[(2)]);
var state_24169__$1 = state_24169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24169__$1,inst_24167);
} else {
if((state_val_24170 === (2))){
var state_24169__$1 = state_24169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24169__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_24170 === (1))){
var state_24169__$1 = state_24169;
var statearr_24179_24193 = state_24169__$1;
(statearr_24179_24193[(2)] = null);

(statearr_24179_24193[(1)] = (2));


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
});})(c__12815__auto___24187))
;
return ((function (switch__12735__auto__,c__12815__auto___24187){
return (function() {
var state_machine__12736__auto__ = null;
var state_machine__12736__auto____0 = (function (){
var statearr_24183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24183[(0)] = state_machine__12736__auto__);

(statearr_24183[(1)] = (1));

return statearr_24183;
});
var state_machine__12736__auto____1 = (function (state_24169){
while(true){
var ret_value__12737__auto__ = (function (){try{while(true){
var result__12738__auto__ = switch__12735__auto__(state_24169);
if(cljs.core.keyword_identical_QMARK_(result__12738__auto__,cljs.core.constant$keyword$83)){
continue;
} else {
return result__12738__auto__;
}
break;
}
}catch (e24184){if((e24184 instanceof Object)){
var ex__12739__auto__ = e24184;
var statearr_24185_24194 = state_24169;
(statearr_24185_24194[(5)] = ex__12739__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24169);

return cljs.core.constant$keyword$83;
} else {
throw e24184;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12737__auto__,cljs.core.constant$keyword$83)){
var G__24195 = state_24169;
state_24169 = G__24195;
continue;
} else {
return ret_value__12737__auto__;
}
break;
}
});
state_machine__12736__auto__ = function(state_24169){
switch(arguments.length){
case 0:
return state_machine__12736__auto____0.call(this);
case 1:
return state_machine__12736__auto____1.call(this,state_24169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12736__auto____0;
state_machine__12736__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12736__auto____1;
return state_machine__12736__auto__;
})()
;})(switch__12735__auto__,c__12815__auto___24187))
})();
var state__12817__auto__ = (function (){var statearr_24186 = (function (){return (f__12816__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12816__auto__.cljs$core$IFn$_invoke$arity$0() : f__12816__auto__.call(null));
})();
(statearr_24186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12815__auto___24187);

return statearr_24186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12817__auto__);
});})(c__12815__auto___24187))
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
