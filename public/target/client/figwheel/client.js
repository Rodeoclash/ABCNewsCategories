// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29488__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29489__i = 0, G__29489__a = new Array(arguments.length -  0);
while (G__29489__i < G__29489__a.length) {G__29489__a[G__29489__i] = arguments[G__29489__i + 0]; ++G__29489__i;}
  args = new cljs.core.IndexedSeq(G__29489__a,0);
} 
return G__29488__delegate.call(this,args);};
G__29488.cljs$lang$maxFixedArity = 0;
G__29488.cljs$lang$applyTo = (function (arglist__29490){
var args = cljs.core.seq(arglist__29490);
return G__29488__delegate(args);
});
G__29488.cljs$core$IFn$_invoke$arity$variadic = G__29488__delegate;
return G__29488;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__29491){
var map__29493 = p__29491;
var map__29493__$1 = ((cljs.core.seq_QMARK_.call(null,map__29493))?cljs.core.apply.call(null,cljs.core.hash_map,map__29493):map__29493);
var class$ = cljs.core.get.call(null,map__29493__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__29493__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12773__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12761__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12761__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12761__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__15442__auto___29622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___29622,ch){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___29622,ch){
return (function (state_29596){
var state_val_29597 = (state_29596[(1)]);
if((state_val_29597 === (7))){
var inst_29592 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29598_29623 = state_29596__$1;
(statearr_29598_29623[(2)] = inst_29592);

(statearr_29598_29623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (1))){
var state_29596__$1 = state_29596;
var statearr_29599_29624 = state_29596__$1;
(statearr_29599_29624[(2)] = null);

(statearr_29599_29624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (4))){
var inst_29560 = (state_29596[(7)]);
var inst_29560__$1 = (state_29596[(2)]);
var state_29596__$1 = (function (){var statearr_29600 = state_29596;
(statearr_29600[(7)] = inst_29560__$1);

return statearr_29600;
})();
if(cljs.core.truth_(inst_29560__$1)){
var statearr_29601_29625 = state_29596__$1;
(statearr_29601_29625[(1)] = (5));

} else {
var statearr_29602_29626 = state_29596__$1;
(statearr_29602_29626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (13))){
var state_29596__$1 = state_29596;
var statearr_29603_29627 = state_29596__$1;
(statearr_29603_29627[(2)] = null);

(statearr_29603_29627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (6))){
var state_29596__$1 = state_29596;
var statearr_29604_29628 = state_29596__$1;
(statearr_29604_29628[(2)] = null);

(statearr_29604_29628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (3))){
var inst_29594 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29596__$1,inst_29594);
} else {
if((state_val_29597 === (12))){
var inst_29567 = (state_29596[(8)]);
var inst_29580 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29567);
var inst_29581 = cljs.core.first.call(null,inst_29580);
var inst_29582 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29581);
var inst_29583 = console.warn("Figwheel: Not loading code with warnings - ",inst_29582);
var state_29596__$1 = state_29596;
var statearr_29605_29629 = state_29596__$1;
(statearr_29605_29629[(2)] = inst_29583);

(statearr_29605_29629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (2))){
var state_29596__$1 = state_29596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29596__$1,(4),ch);
} else {
if((state_val_29597 === (11))){
var inst_29576 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29606_29630 = state_29596__$1;
(statearr_29606_29630[(2)] = inst_29576);

(statearr_29606_29630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (9))){
var inst_29566 = (state_29596[(9)]);
var inst_29578 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29566,opts);
var state_29596__$1 = state_29596;
if(inst_29578){
var statearr_29607_29631 = state_29596__$1;
(statearr_29607_29631[(1)] = (12));

} else {
var statearr_29608_29632 = state_29596__$1;
(statearr_29608_29632[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (5))){
var inst_29560 = (state_29596[(7)]);
var inst_29566 = (state_29596[(9)]);
var inst_29562 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29563 = (new cljs.core.PersistentArrayMap(null,2,inst_29562,null));
var inst_29564 = (new cljs.core.PersistentHashSet(null,inst_29563,null));
var inst_29565 = figwheel.client.focus_msgs.call(null,inst_29564,inst_29560);
var inst_29566__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29565);
var inst_29567 = cljs.core.first.call(null,inst_29565);
var inst_29568 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29566__$1,opts);
var state_29596__$1 = (function (){var statearr_29609 = state_29596;
(statearr_29609[(8)] = inst_29567);

(statearr_29609[(9)] = inst_29566__$1);

return statearr_29609;
})();
if(cljs.core.truth_(inst_29568)){
var statearr_29610_29633 = state_29596__$1;
(statearr_29610_29633[(1)] = (8));

} else {
var statearr_29611_29634 = state_29596__$1;
(statearr_29611_29634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (14))){
var inst_29586 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29612_29635 = state_29596__$1;
(statearr_29612_29635[(2)] = inst_29586);

(statearr_29612_29635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (10))){
var inst_29588 = (state_29596[(2)]);
var state_29596__$1 = (function (){var statearr_29613 = state_29596;
(statearr_29613[(10)] = inst_29588);

return statearr_29613;
})();
var statearr_29614_29636 = state_29596__$1;
(statearr_29614_29636[(2)] = null);

(statearr_29614_29636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (8))){
var inst_29567 = (state_29596[(8)]);
var inst_29570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29571 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29567);
var inst_29572 = cljs.core.async.timeout.call(null,(1000));
var inst_29573 = [inst_29571,inst_29572];
var inst_29574 = (new cljs.core.PersistentVector(null,2,(5),inst_29570,inst_29573,null));
var state_29596__$1 = state_29596;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29596__$1,(11),inst_29574);
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
});})(c__15442__auto___29622,ch))
;
return ((function (switch__15386__auto__,c__15442__auto___29622,ch){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_29618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29618[(0)] = state_machine__15387__auto__);

(statearr_29618[(1)] = (1));

return statearr_29618;
});
var state_machine__15387__auto____1 = (function (state_29596){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_29596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e29619){if((e29619 instanceof Object)){
var ex__15390__auto__ = e29619;
var statearr_29620_29637 = state_29596;
(statearr_29620_29637[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29638 = state_29596;
state_29596 = G__29638;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_29596){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_29596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___29622,ch))
})();
var state__15444__auto__ = (function (){var statearr_29621 = f__15443__auto__.call(null);
(statearr_29621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___29622);

return statearr_29621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___29622,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29639_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29639_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29648 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29641_SHARP_,p2__29640_SHARP_){
return [cljs.core.str(p2__29640_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29648){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29646 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29647 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29646,_STAR_print_newline_STAR_29647,base_path_29648){
return (function() { 
var G__29649__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29650__i = 0, G__29650__a = new Array(arguments.length -  0);
while (G__29650__i < G__29650__a.length) {G__29650__a[G__29650__i] = arguments[G__29650__i + 0]; ++G__29650__i;}
  args = new cljs.core.IndexedSeq(G__29650__a,0);
} 
return G__29649__delegate.call(this,args);};
G__29649.cljs$lang$maxFixedArity = 0;
G__29649.cljs$lang$applyTo = (function (arglist__29651){
var args = cljs.core.seq(arglist__29651);
return G__29649__delegate(args);
});
G__29649.cljs$core$IFn$_invoke$arity$variadic = G__29649__delegate;
return G__29649;
})()
;})(_STAR_print_fn_STAR_29646,_STAR_print_newline_STAR_29647,base_path_29648))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29647;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29646;
}}catch (e29645){if((e29645 instanceof Error)){
var e = e29645;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29648], null));
} else {
var e = e29645;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29648))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__29652){
var map__29657 = p__29652;
var map__29657__$1 = ((cljs.core.seq_QMARK_.call(null,map__29657))?cljs.core.apply.call(null,cljs.core.hash_map,map__29657):map__29657);
var opts = map__29657__$1;
var build_id = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29657,map__29657__$1,opts,build_id){
return (function (p__29658){
var vec__29659 = p__29658;
var map__29660 = cljs.core.nth.call(null,vec__29659,(0),null);
var map__29660__$1 = ((cljs.core.seq_QMARK_.call(null,map__29660))?cljs.core.apply.call(null,cljs.core.hash_map,map__29660):map__29660);
var msg = map__29660__$1;
var msg_name = cljs.core.get.call(null,map__29660__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29659,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29659,map__29660,map__29660__$1,msg,msg_name,_,map__29657,map__29657__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29659,map__29660,map__29660__$1,msg,msg_name,_,map__29657,map__29657__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29657,map__29657__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__29664){
var vec__29665 = p__29664;
var map__29666 = cljs.core.nth.call(null,vec__29665,(0),null);
var map__29666__$1 = ((cljs.core.seq_QMARK_.call(null,map__29666))?cljs.core.apply.call(null,cljs.core.hash_map,map__29666):map__29666);
var msg = map__29666__$1;
var msg_name = cljs.core.get.call(null,map__29666__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29665,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__29667){
var map__29675 = p__29667;
var map__29675__$1 = ((cljs.core.seq_QMARK_.call(null,map__29675))?cljs.core.apply.call(null,cljs.core.hash_map,map__29675):map__29675);
var on_compile_fail = cljs.core.get.call(null,map__29675__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__29675__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__29675,map__29675__$1,on_compile_fail,on_compile_warning){
return (function (p__29676){
var vec__29677 = p__29676;
var map__29678 = cljs.core.nth.call(null,vec__29677,(0),null);
var map__29678__$1 = ((cljs.core.seq_QMARK_.call(null,map__29678))?cljs.core.apply.call(null,cljs.core.hash_map,map__29678):map__29678);
var msg = map__29678__$1;
var msg_name = cljs.core.get.call(null,map__29678__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29677,(1));
var pred__29679 = cljs.core._EQ_;
var expr__29680 = msg_name;
if(cljs.core.truth_(pred__29679.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29680))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29679.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29680))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29675,map__29675__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__,msg_hist,msg_names,msg){
return (function (state_29877){
var state_val_29878 = (state_29877[(1)]);
if((state_val_29878 === (7))){
var inst_29813 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29879_29920 = state_29877__$1;
(statearr_29879_29920[(2)] = inst_29813);

(statearr_29879_29920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (20))){
var inst_29839 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29877__$1 = state_29877;
if(inst_29839){
var statearr_29880_29921 = state_29877__$1;
(statearr_29880_29921[(1)] = (22));

} else {
var statearr_29881_29922 = state_29877__$1;
(statearr_29881_29922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (27))){
var inst_29851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29852 = figwheel.client.heads_up.display_warning.call(null,inst_29851);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(30),inst_29852);
} else {
if((state_val_29878 === (1))){
var inst_29801 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29877__$1 = state_29877;
if(cljs.core.truth_(inst_29801)){
var statearr_29882_29923 = state_29877__$1;
(statearr_29882_29923[(1)] = (2));

} else {
var statearr_29883_29924 = state_29877__$1;
(statearr_29883_29924[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (24))){
var inst_29867 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29884_29925 = state_29877__$1;
(statearr_29884_29925[(2)] = inst_29867);

(statearr_29884_29925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (4))){
var inst_29875 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29877__$1,inst_29875);
} else {
if((state_val_29878 === (15))){
var inst_29828 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29829 = figwheel.client.format_messages.call(null,inst_29828);
var inst_29830 = figwheel.client.heads_up.display_error.call(null,inst_29829);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(18),inst_29830);
} else {
if((state_val_29878 === (21))){
var inst_29869 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29885_29926 = state_29877__$1;
(statearr_29885_29926[(2)] = inst_29869);

(statearr_29885_29926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (31))){
var inst_29858 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(34),inst_29858);
} else {
if((state_val_29878 === (32))){
var state_29877__$1 = state_29877;
var statearr_29886_29927 = state_29877__$1;
(statearr_29886_29927[(2)] = null);

(statearr_29886_29927[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (33))){
var inst_29863 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29887_29928 = state_29877__$1;
(statearr_29887_29928[(2)] = inst_29863);

(statearr_29887_29928[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (13))){
var inst_29819 = (state_29877[(2)]);
var inst_29820 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29821 = figwheel.client.format_messages.call(null,inst_29820);
var inst_29822 = figwheel.client.heads_up.display_error.call(null,inst_29821);
var state_29877__$1 = (function (){var statearr_29888 = state_29877;
(statearr_29888[(7)] = inst_29819);

return statearr_29888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(14),inst_29822);
} else {
if((state_val_29878 === (22))){
var inst_29841 = figwheel.client.heads_up.clear.call(null);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(25),inst_29841);
} else {
if((state_val_29878 === (29))){
var inst_29865 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29889_29929 = state_29877__$1;
(statearr_29889_29929[(2)] = inst_29865);

(statearr_29889_29929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (6))){
var inst_29809 = figwheel.client.heads_up.clear.call(null);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(9),inst_29809);
} else {
if((state_val_29878 === (28))){
var inst_29856 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29877__$1 = state_29877;
if(inst_29856){
var statearr_29890_29930 = state_29877__$1;
(statearr_29890_29930[(1)] = (31));

} else {
var statearr_29891_29931 = state_29877__$1;
(statearr_29891_29931[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (25))){
var inst_29843 = (state_29877[(2)]);
var inst_29844 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29845 = figwheel.client.heads_up.display_warning.call(null,inst_29844);
var state_29877__$1 = (function (){var statearr_29892 = state_29877;
(statearr_29892[(8)] = inst_29843);

return statearr_29892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(26),inst_29845);
} else {
if((state_val_29878 === (34))){
var inst_29860 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29893_29932 = state_29877__$1;
(statearr_29893_29932[(2)] = inst_29860);

(statearr_29893_29932[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (17))){
var inst_29871 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29894_29933 = state_29877__$1;
(statearr_29894_29933[(2)] = inst_29871);

(statearr_29894_29933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (3))){
var inst_29815 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29877__$1 = state_29877;
if(inst_29815){
var statearr_29895_29934 = state_29877__$1;
(statearr_29895_29934[(1)] = (10));

} else {
var statearr_29896_29935 = state_29877__$1;
(statearr_29896_29935[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (12))){
var inst_29873 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29897_29936 = state_29877__$1;
(statearr_29897_29936[(2)] = inst_29873);

(statearr_29897_29936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (2))){
var inst_29803 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29877__$1 = state_29877;
if(cljs.core.truth_(inst_29803)){
var statearr_29898_29937 = state_29877__$1;
(statearr_29898_29937[(1)] = (5));

} else {
var statearr_29899_29938 = state_29877__$1;
(statearr_29899_29938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (23))){
var inst_29849 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29877__$1 = state_29877;
if(inst_29849){
var statearr_29900_29939 = state_29877__$1;
(statearr_29900_29939[(1)] = (27));

} else {
var statearr_29901_29940 = state_29877__$1;
(statearr_29901_29940[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (19))){
var inst_29836 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29837 = figwheel.client.heads_up.append_message.call(null,inst_29836);
var state_29877__$1 = state_29877;
var statearr_29902_29941 = state_29877__$1;
(statearr_29902_29941[(2)] = inst_29837);

(statearr_29902_29941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (11))){
var inst_29826 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29877__$1 = state_29877;
if(inst_29826){
var statearr_29903_29942 = state_29877__$1;
(statearr_29903_29942[(1)] = (15));

} else {
var statearr_29904_29943 = state_29877__$1;
(statearr_29904_29943[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (9))){
var inst_29811 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29905_29944 = state_29877__$1;
(statearr_29905_29944[(2)] = inst_29811);

(statearr_29905_29944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (5))){
var inst_29805 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(8),inst_29805);
} else {
if((state_val_29878 === (14))){
var inst_29824 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29906_29945 = state_29877__$1;
(statearr_29906_29945[(2)] = inst_29824);

(statearr_29906_29945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (26))){
var inst_29847 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29907_29946 = state_29877__$1;
(statearr_29907_29946[(2)] = inst_29847);

(statearr_29907_29946[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (16))){
var inst_29834 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29877__$1 = state_29877;
if(inst_29834){
var statearr_29908_29947 = state_29877__$1;
(statearr_29908_29947[(1)] = (19));

} else {
var statearr_29909_29948 = state_29877__$1;
(statearr_29909_29948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (30))){
var inst_29854 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29910_29949 = state_29877__$1;
(statearr_29910_29949[(2)] = inst_29854);

(statearr_29910_29949[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (10))){
var inst_29817 = figwheel.client.heads_up.clear.call(null);
var state_29877__$1 = state_29877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29877__$1,(13),inst_29817);
} else {
if((state_val_29878 === (18))){
var inst_29832 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29911_29950 = state_29877__$1;
(statearr_29911_29950[(2)] = inst_29832);

(statearr_29911_29950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29878 === (8))){
var inst_29807 = (state_29877[(2)]);
var state_29877__$1 = state_29877;
var statearr_29912_29951 = state_29877__$1;
(statearr_29912_29951[(2)] = inst_29807);

(statearr_29912_29951[(1)] = (7));


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
});})(c__15442__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15386__auto__,c__15442__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_29916 = [null,null,null,null,null,null,null,null,null];
(statearr_29916[(0)] = state_machine__15387__auto__);

(statearr_29916[(1)] = (1));

return statearr_29916;
});
var state_machine__15387__auto____1 = (function (state_29877){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_29877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e29917){if((e29917 instanceof Object)){
var ex__15390__auto__ = e29917;
var statearr_29918_29952 = state_29877;
(statearr_29918_29952[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29953 = state_29877;
state_29877 = G__29953;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_29877){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_29877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__,msg_hist,msg_names,msg))
})();
var state__15444__auto__ = (function (){var statearr_29919 = f__15443__auto__.call(null);
(statearr_29919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_29919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__,msg_hist,msg_names,msg))
);

return c__15442__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15442__auto___30016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___30016,ch){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___30016,ch){
return (function (state_29999){
var state_val_30000 = (state_29999[(1)]);
if((state_val_30000 === (8))){
var inst_29991 = (state_29999[(2)]);
var state_29999__$1 = (function (){var statearr_30001 = state_29999;
(statearr_30001[(7)] = inst_29991);

return statearr_30001;
})();
var statearr_30002_30017 = state_29999__$1;
(statearr_30002_30017[(2)] = null);

(statearr_30002_30017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (7))){
var inst_29995 = (state_29999[(2)]);
var state_29999__$1 = state_29999;
var statearr_30003_30018 = state_29999__$1;
(statearr_30003_30018[(2)] = inst_29995);

(statearr_30003_30018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (6))){
var state_29999__$1 = state_29999;
var statearr_30004_30019 = state_29999__$1;
(statearr_30004_30019[(2)] = null);

(statearr_30004_30019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (5))){
var inst_29987 = (state_29999[(8)]);
var inst_29989 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29987);
var state_29999__$1 = state_29999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29999__$1,(8),inst_29989);
} else {
if((state_val_30000 === (4))){
var inst_29987 = (state_29999[(8)]);
var inst_29987__$1 = (state_29999[(2)]);
var state_29999__$1 = (function (){var statearr_30005 = state_29999;
(statearr_30005[(8)] = inst_29987__$1);

return statearr_30005;
})();
if(cljs.core.truth_(inst_29987__$1)){
var statearr_30006_30020 = state_29999__$1;
(statearr_30006_30020[(1)] = (5));

} else {
var statearr_30007_30021 = state_29999__$1;
(statearr_30007_30021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30000 === (3))){
var inst_29997 = (state_29999[(2)]);
var state_29999__$1 = state_29999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29999__$1,inst_29997);
} else {
if((state_val_30000 === (2))){
var state_29999__$1 = state_29999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29999__$1,(4),ch);
} else {
if((state_val_30000 === (1))){
var state_29999__$1 = state_29999;
var statearr_30008_30022 = state_29999__$1;
(statearr_30008_30022[(2)] = null);

(statearr_30008_30022[(1)] = (2));


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
});})(c__15442__auto___30016,ch))
;
return ((function (switch__15386__auto__,c__15442__auto___30016,ch){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_30012 = [null,null,null,null,null,null,null,null,null];
(statearr_30012[(0)] = state_machine__15387__auto__);

(statearr_30012[(1)] = (1));

return statearr_30012;
});
var state_machine__15387__auto____1 = (function (state_29999){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_29999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e30013){if((e30013 instanceof Object)){
var ex__15390__auto__ = e30013;
var statearr_30014_30023 = state_29999;
(statearr_30014_30023[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30024 = state_29999;
state_29999 = G__30024;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_29999){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_29999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___30016,ch))
})();
var state__15444__auto__ = (function (){var statearr_30015 = f__15443__auto__.call(null);
(statearr_30015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___30016);

return statearr_30015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___30016,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__){
return (function (state_30045){
var state_val_30046 = (state_30045[(1)]);
if((state_val_30046 === (2))){
var inst_30042 = (state_30045[(2)]);
var inst_30043 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30045__$1 = (function (){var statearr_30047 = state_30045;
(statearr_30047[(7)] = inst_30042);

return statearr_30047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30045__$1,inst_30043);
} else {
if((state_val_30046 === (1))){
var inst_30040 = cljs.core.async.timeout.call(null,(3000));
var state_30045__$1 = state_30045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30045__$1,(2),inst_30040);
} else {
return null;
}
}
});})(c__15442__auto__))
;
return ((function (switch__15386__auto__,c__15442__auto__){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_30051 = [null,null,null,null,null,null,null,null];
(statearr_30051[(0)] = state_machine__15387__auto__);

(statearr_30051[(1)] = (1));

return statearr_30051;
});
var state_machine__15387__auto____1 = (function (state_30045){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_30045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e30052){if((e30052 instanceof Object)){
var ex__15390__auto__ = e30052;
var statearr_30053_30055 = state_30045;
(statearr_30053_30055[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30056 = state_30045;
state_30045 = G__30056;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_30045){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_30045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__))
})();
var state__15444__auto__ = (function (){var statearr_30054 = f__15443__auto__.call(null);
(statearr_30054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_30054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__))
);

return c__15442__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__12761__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__12761__auto__)){
return ("CustomEvent" in window);
} else {
return and__12761__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30060 = {"detail":url};
return obj30060;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30061){
var map__30067 = p__30061;
var map__30067__$1 = ((cljs.core.seq_QMARK_.call(null,map__30067))?cljs.core.apply.call(null,cljs.core.hash_map,map__30067):map__30067);
var ed = map__30067__$1;
var exception_data = cljs.core.get.call(null,map__30067__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30067__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30068_30072 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30069_30073 = null;
var count__30070_30074 = (0);
var i__30071_30075 = (0);
while(true){
if((i__30071_30075 < count__30070_30074)){
var msg_30076 = cljs.core._nth.call(null,chunk__30069_30073,i__30071_30075);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30076);

var G__30077 = seq__30068_30072;
var G__30078 = chunk__30069_30073;
var G__30079 = count__30070_30074;
var G__30080 = (i__30071_30075 + (1));
seq__30068_30072 = G__30077;
chunk__30069_30073 = G__30078;
count__30070_30074 = G__30079;
i__30071_30075 = G__30080;
continue;
} else {
var temp__4126__auto___30081 = cljs.core.seq.call(null,seq__30068_30072);
if(temp__4126__auto___30081){
var seq__30068_30082__$1 = temp__4126__auto___30081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30068_30082__$1)){
var c__13560__auto___30083 = cljs.core.chunk_first.call(null,seq__30068_30082__$1);
var G__30084 = cljs.core.chunk_rest.call(null,seq__30068_30082__$1);
var G__30085 = c__13560__auto___30083;
var G__30086 = cljs.core.count.call(null,c__13560__auto___30083);
var G__30087 = (0);
seq__30068_30072 = G__30084;
chunk__30069_30073 = G__30085;
count__30070_30074 = G__30086;
i__30071_30075 = G__30087;
continue;
} else {
var msg_30088 = cljs.core.first.call(null,seq__30068_30082__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30088);

var G__30089 = cljs.core.next.call(null,seq__30068_30082__$1);
var G__30090 = null;
var G__30091 = (0);
var G__30092 = (0);
seq__30068_30072 = G__30089;
chunk__30069_30073 = G__30090;
count__30070_30074 = G__30091;
i__30071_30075 = G__30092;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30093){
var map__30095 = p__30093;
var map__30095__$1 = ((cljs.core.seq_QMARK_.call(null,map__30095))?cljs.core.apply.call(null,cljs.core.hash_map,map__30095):map__30095);
var w = map__30095__$1;
var message = cljs.core.get.call(null,map__30095__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__12761__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__12761__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__12761__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30102 = cljs.core.seq.call(null,plugins);
var chunk__30103 = null;
var count__30104 = (0);
var i__30105 = (0);
while(true){
if((i__30105 < count__30104)){
var vec__30106 = cljs.core._nth.call(null,chunk__30103,i__30105);
var k = cljs.core.nth.call(null,vec__30106,(0),null);
var plugin = cljs.core.nth.call(null,vec__30106,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30108 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30102,chunk__30103,count__30104,i__30105,pl_30108,vec__30106,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30108.call(null,msg_hist);
});})(seq__30102,chunk__30103,count__30104,i__30105,pl_30108,vec__30106,k,plugin))
);
} else {
}

var G__30109 = seq__30102;
var G__30110 = chunk__30103;
var G__30111 = count__30104;
var G__30112 = (i__30105 + (1));
seq__30102 = G__30109;
chunk__30103 = G__30110;
count__30104 = G__30111;
i__30105 = G__30112;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30102);
if(temp__4126__auto__){
var seq__30102__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30102__$1)){
var c__13560__auto__ = cljs.core.chunk_first.call(null,seq__30102__$1);
var G__30113 = cljs.core.chunk_rest.call(null,seq__30102__$1);
var G__30114 = c__13560__auto__;
var G__30115 = cljs.core.count.call(null,c__13560__auto__);
var G__30116 = (0);
seq__30102 = G__30113;
chunk__30103 = G__30114;
count__30104 = G__30115;
i__30105 = G__30116;
continue;
} else {
var vec__30107 = cljs.core.first.call(null,seq__30102__$1);
var k = cljs.core.nth.call(null,vec__30107,(0),null);
var plugin = cljs.core.nth.call(null,vec__30107,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30117 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30102,chunk__30103,count__30104,i__30105,pl_30117,vec__30107,k,plugin,seq__30102__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30117.call(null,msg_hist);
});})(seq__30102,chunk__30103,count__30104,i__30105,pl_30117,vec__30107,k,plugin,seq__30102__$1,temp__4126__auto__))
);
} else {
}

var G__30118 = cljs.core.next.call(null,seq__30102__$1);
var G__30119 = null;
var G__30120 = (0);
var G__30121 = (0);
seq__30102 = G__30118;
chunk__30103 = G__30119;
count__30104 = G__30120;
i__30105 = G__30121;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__30122){
var map__30124 = p__30122;
var map__30124__$1 = ((cljs.core.seq_QMARK_.call(null,map__30124))?cljs.core.apply.call(null,cljs.core.hash_map,map__30124):map__30124);
var opts = map__30124__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30122 = null;
if (arguments.length > 0) {
var G__30125__i = 0, G__30125__a = new Array(arguments.length -  0);
while (G__30125__i < G__30125__a.length) {G__30125__a[G__30125__i] = arguments[G__30125__i + 0]; ++G__30125__i;}
  p__30122 = new cljs.core.IndexedSeq(G__30125__a,0);
} 
return watch_and_reload__delegate.call(this,p__30122);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30126){
var p__30122 = cljs.core.seq(arglist__30126);
return watch_and_reload__delegate(p__30122);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1429446862379