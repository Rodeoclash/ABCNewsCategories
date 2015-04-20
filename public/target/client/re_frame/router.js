// Compiled by ClojureScript 0.0-2816 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
var c__15442__auto___24869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___24869){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___24869){
return (function (state_24851){
var state_val_24852 = (state_24851[(1)]);
if((state_val_24852 === (9))){
var inst_24843 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24853_24870 = state_24851__$1;
(statearr_24853_24870[(2)] = inst_24843);

(statearr_24853_24870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24852 === (8))){
var inst_24839 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
var statearr_24854_24871 = state_24851__$1;
(statearr_24854_24871[(2)] = inst_24839);

(statearr_24854_24871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24852 === (7))){
var inst_24832 = (state_24851[(7)]);
var inst_24845 = (state_24851[(2)]);
var inst_24846 = re_frame.handlers.handle.call(null,inst_24832);
var state_24851__$1 = (function (){var statearr_24855 = state_24851;
(statearr_24855[(8)] = inst_24845);

(statearr_24855[(9)] = inst_24846);

return statearr_24855;
})();
var statearr_24856_24872 = state_24851__$1;
(statearr_24856_24872[(2)] = null);

(statearr_24856_24872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24852 === (6))){
var inst_24841 = cljs.core.async.timeout.call(null,(0));
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24851__$1,(9),inst_24841);
} else {
if((state_val_24852 === (5))){
var inst_24836 = reagent.core.flush.call(null);
var inst_24837 = cljs.core.async.timeout.call(null,(20));
var state_24851__$1 = (function (){var statearr_24857 = state_24851;
(statearr_24857[(10)] = inst_24836);

return statearr_24857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24851__$1,(8),inst_24837);
} else {
if((state_val_24852 === (4))){
var inst_24832 = (state_24851[(7)]);
var inst_24832__$1 = (state_24851[(2)]);
var inst_24833 = cljs.core.meta.call(null,inst_24832__$1);
var inst_24834 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_24833);
var state_24851__$1 = (function (){var statearr_24858 = state_24851;
(statearr_24858[(7)] = inst_24832__$1);

return statearr_24858;
})();
if(cljs.core.truth_(inst_24834)){
var statearr_24859_24873 = state_24851__$1;
(statearr_24859_24873[(1)] = (5));

} else {
var statearr_24860_24874 = state_24851__$1;
(statearr_24860_24874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24852 === (3))){
var inst_24849 = (state_24851[(2)]);
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24851__$1,inst_24849);
} else {
if((state_val_24852 === (2))){
var state_24851__$1 = state_24851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24851__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_24852 === (1))){
var state_24851__$1 = state_24851;
var statearr_24861_24875 = state_24851__$1;
(statearr_24861_24875[(2)] = null);

(statearr_24861_24875[(1)] = (2));


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
});})(c__15442__auto___24869))
;
return ((function (switch__15386__auto__,c__15442__auto___24869){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_24865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24865[(0)] = state_machine__15387__auto__);

(statearr_24865[(1)] = (1));

return statearr_24865;
});
var state_machine__15387__auto____1 = (function (state_24851){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_24851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e24866){if((e24866 instanceof Object)){
var ex__15390__auto__ = e24866;
var statearr_24867_24876 = state_24851;
(statearr_24867_24876[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24877 = state_24851;
state_24851 = G__24877;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_24851){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_24851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___24869))
})();
var state__15444__auto__ = (function (){var statearr_24868 = f__15443__auto__.call(null);
(statearr_24868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___24869);

return statearr_24868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___24869))
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

//# sourceMappingURL=router.js.map?rel=1429446761442