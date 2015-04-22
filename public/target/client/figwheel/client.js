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
var G__30600__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30601__i = 0, G__30601__a = new Array(arguments.length -  0);
while (G__30601__i < G__30601__a.length) {G__30601__a[G__30601__i] = arguments[G__30601__i + 0]; ++G__30601__i;}
  args = new cljs.core.IndexedSeq(G__30601__a,0);
} 
return G__30600__delegate.call(this,args);};
G__30600.cljs$lang$maxFixedArity = 0;
G__30600.cljs$lang$applyTo = (function (arglist__30602){
var args = cljs.core.seq(arglist__30602);
return G__30600__delegate(args);
});
G__30600.cljs$core$IFn$_invoke$arity$variadic = G__30600__delegate;
return G__30600;
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
figwheel.client.error_msg_format = (function error_msg_format(p__30603){
var map__30605 = p__30603;
var map__30605__$1 = ((cljs.core.seq_QMARK_.call(null,map__30605))?cljs.core.apply.call(null,cljs.core.hash_map,map__30605):map__30605);
var class$ = cljs.core.get.call(null,map__30605__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30605__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__16178__auto___30734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___30734,ch){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___30734,ch){
return (function (state_30708){
var state_val_30709 = (state_30708[(1)]);
if((state_val_30709 === (7))){
var inst_30704 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
var statearr_30710_30735 = state_30708__$1;
(statearr_30710_30735[(2)] = inst_30704);

(statearr_30710_30735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (1))){
var state_30708__$1 = state_30708;
var statearr_30711_30736 = state_30708__$1;
(statearr_30711_30736[(2)] = null);

(statearr_30711_30736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (4))){
var inst_30672 = (state_30708[(7)]);
var inst_30672__$1 = (state_30708[(2)]);
var state_30708__$1 = (function (){var statearr_30712 = state_30708;
(statearr_30712[(7)] = inst_30672__$1);

return statearr_30712;
})();
if(cljs.core.truth_(inst_30672__$1)){
var statearr_30713_30737 = state_30708__$1;
(statearr_30713_30737[(1)] = (5));

} else {
var statearr_30714_30738 = state_30708__$1;
(statearr_30714_30738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (13))){
var state_30708__$1 = state_30708;
var statearr_30715_30739 = state_30708__$1;
(statearr_30715_30739[(2)] = null);

(statearr_30715_30739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (6))){
var state_30708__$1 = state_30708;
var statearr_30716_30740 = state_30708__$1;
(statearr_30716_30740[(2)] = null);

(statearr_30716_30740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (3))){
var inst_30706 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30708__$1,inst_30706);
} else {
if((state_val_30709 === (12))){
var inst_30679 = (state_30708[(8)]);
var inst_30692 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30679);
var inst_30693 = cljs.core.first.call(null,inst_30692);
var inst_30694 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30693);
var inst_30695 = console.warn("Figwheel: Not loading code with warnings - ",inst_30694);
var state_30708__$1 = state_30708;
var statearr_30717_30741 = state_30708__$1;
(statearr_30717_30741[(2)] = inst_30695);

(statearr_30717_30741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (2))){
var state_30708__$1 = state_30708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30708__$1,(4),ch);
} else {
if((state_val_30709 === (11))){
var inst_30688 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
var statearr_30718_30742 = state_30708__$1;
(statearr_30718_30742[(2)] = inst_30688);

(statearr_30718_30742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (9))){
var inst_30678 = (state_30708[(9)]);
var inst_30690 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30678,opts);
var state_30708__$1 = state_30708;
if(inst_30690){
var statearr_30719_30743 = state_30708__$1;
(statearr_30719_30743[(1)] = (12));

} else {
var statearr_30720_30744 = state_30708__$1;
(statearr_30720_30744[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (5))){
var inst_30678 = (state_30708[(9)]);
var inst_30672 = (state_30708[(7)]);
var inst_30674 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30675 = (new cljs.core.PersistentArrayMap(null,2,inst_30674,null));
var inst_30676 = (new cljs.core.PersistentHashSet(null,inst_30675,null));
var inst_30677 = figwheel.client.focus_msgs.call(null,inst_30676,inst_30672);
var inst_30678__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30677);
var inst_30679 = cljs.core.first.call(null,inst_30677);
var inst_30680 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30678__$1,opts);
var state_30708__$1 = (function (){var statearr_30721 = state_30708;
(statearr_30721[(9)] = inst_30678__$1);

(statearr_30721[(8)] = inst_30679);

return statearr_30721;
})();
if(cljs.core.truth_(inst_30680)){
var statearr_30722_30745 = state_30708__$1;
(statearr_30722_30745[(1)] = (8));

} else {
var statearr_30723_30746 = state_30708__$1;
(statearr_30723_30746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (14))){
var inst_30698 = (state_30708[(2)]);
var state_30708__$1 = state_30708;
var statearr_30724_30747 = state_30708__$1;
(statearr_30724_30747[(2)] = inst_30698);

(statearr_30724_30747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (10))){
var inst_30700 = (state_30708[(2)]);
var state_30708__$1 = (function (){var statearr_30725 = state_30708;
(statearr_30725[(10)] = inst_30700);

return statearr_30725;
})();
var statearr_30726_30748 = state_30708__$1;
(statearr_30726_30748[(2)] = null);

(statearr_30726_30748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30709 === (8))){
var inst_30679 = (state_30708[(8)]);
var inst_30682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30683 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30679);
var inst_30684 = cljs.core.async.timeout.call(null,(1000));
var inst_30685 = [inst_30683,inst_30684];
var inst_30686 = (new cljs.core.PersistentVector(null,2,(5),inst_30682,inst_30685,null));
var state_30708__$1 = state_30708;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30708__$1,(11),inst_30686);
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
});})(c__16178__auto___30734,ch))
;
return ((function (switch__16122__auto__,c__16178__auto___30734,ch){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_30730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30730[(0)] = state_machine__16123__auto__);

(statearr_30730[(1)] = (1));

return statearr_30730;
});
var state_machine__16123__auto____1 = (function (state_30708){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_30708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e30731){if((e30731 instanceof Object)){
var ex__16126__auto__ = e30731;
var statearr_30732_30749 = state_30708;
(statearr_30732_30749[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30750 = state_30708;
state_30708 = G__30750;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_30708){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_30708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___30734,ch))
})();
var state__16180__auto__ = (function (){var statearr_30733 = f__16179__auto__.call(null);
(statearr_30733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___30734);

return statearr_30733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___30734,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30751_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30751_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30760 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30753_SHARP_,p2__30752_SHARP_){
return [cljs.core.str(p2__30752_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30760){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30758 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30759 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30758,_STAR_print_newline_STAR_30759,base_path_30760){
return (function() { 
var G__30761__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30762__i = 0, G__30762__a = new Array(arguments.length -  0);
while (G__30762__i < G__30762__a.length) {G__30762__a[G__30762__i] = arguments[G__30762__i + 0]; ++G__30762__i;}
  args = new cljs.core.IndexedSeq(G__30762__a,0);
} 
return G__30761__delegate.call(this,args);};
G__30761.cljs$lang$maxFixedArity = 0;
G__30761.cljs$lang$applyTo = (function (arglist__30763){
var args = cljs.core.seq(arglist__30763);
return G__30761__delegate(args);
});
G__30761.cljs$core$IFn$_invoke$arity$variadic = G__30761__delegate;
return G__30761;
})()
;})(_STAR_print_fn_STAR_30758,_STAR_print_newline_STAR_30759,base_path_30760))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30759;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30758;
}}catch (e30757){if((e30757 instanceof Error)){
var e = e30757;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30760], null));
} else {
var e = e30757;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30760))
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
figwheel.client.repl_plugin = (function repl_plugin(p__30764){
var map__30769 = p__30764;
var map__30769__$1 = ((cljs.core.seq_QMARK_.call(null,map__30769))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769):map__30769);
var opts = map__30769__$1;
var build_id = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30769,map__30769__$1,opts,build_id){
return (function (p__30770){
var vec__30771 = p__30770;
var map__30772 = cljs.core.nth.call(null,vec__30771,(0),null);
var map__30772__$1 = ((cljs.core.seq_QMARK_.call(null,map__30772))?cljs.core.apply.call(null,cljs.core.hash_map,map__30772):map__30772);
var msg = map__30772__$1;
var msg_name = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30771,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30771,map__30772,map__30772__$1,msg,msg_name,_,map__30769,map__30769__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30771,map__30772,map__30772__$1,msg,msg_name,_,map__30769,map__30769__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30769,map__30769__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30776){
var vec__30777 = p__30776;
var map__30778 = cljs.core.nth.call(null,vec__30777,(0),null);
var map__30778__$1 = ((cljs.core.seq_QMARK_.call(null,map__30778))?cljs.core.apply.call(null,cljs.core.hash_map,map__30778):map__30778);
var msg = map__30778__$1;
var msg_name = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30777,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30779){
var map__30787 = p__30779;
var map__30787__$1 = ((cljs.core.seq_QMARK_.call(null,map__30787))?cljs.core.apply.call(null,cljs.core.hash_map,map__30787):map__30787);
var on_compile_fail = cljs.core.get.call(null,map__30787__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30787__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30787,map__30787__$1,on_compile_fail,on_compile_warning){
return (function (p__30788){
var vec__30789 = p__30788;
var map__30790 = cljs.core.nth.call(null,vec__30789,(0),null);
var map__30790__$1 = ((cljs.core.seq_QMARK_.call(null,map__30790))?cljs.core.apply.call(null,cljs.core.hash_map,map__30790):map__30790);
var msg = map__30790__$1;
var msg_name = cljs.core.get.call(null,map__30790__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30789,(1));
var pred__30791 = cljs.core._EQ_;
var expr__30792 = msg_name;
if(cljs.core.truth_(pred__30791.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30792))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30791.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30792))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30787,map__30787__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__,msg_hist,msg_names,msg){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__,msg_hist,msg_names,msg){
return (function (state_30989){
var state_val_30990 = (state_30989[(1)]);
if((state_val_30990 === (7))){
var inst_30925 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_30991_31032 = state_30989__$1;
(statearr_30991_31032[(2)] = inst_30925);

(statearr_30991_31032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (20))){
var inst_30951 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30989__$1 = state_30989;
if(inst_30951){
var statearr_30992_31033 = state_30989__$1;
(statearr_30992_31033[(1)] = (22));

} else {
var statearr_30993_31034 = state_30989__$1;
(statearr_30993_31034[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (27))){
var inst_30963 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30964 = figwheel.client.heads_up.display_warning.call(null,inst_30963);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(30),inst_30964);
} else {
if((state_val_30990 === (1))){
var inst_30913 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30989__$1 = state_30989;
if(cljs.core.truth_(inst_30913)){
var statearr_30994_31035 = state_30989__$1;
(statearr_30994_31035[(1)] = (2));

} else {
var statearr_30995_31036 = state_30989__$1;
(statearr_30995_31036[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (24))){
var inst_30979 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_30996_31037 = state_30989__$1;
(statearr_30996_31037[(2)] = inst_30979);

(statearr_30996_31037[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (4))){
var inst_30987 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30989__$1,inst_30987);
} else {
if((state_val_30990 === (15))){
var inst_30940 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30941 = figwheel.client.format_messages.call(null,inst_30940);
var inst_30942 = figwheel.client.heads_up.display_error.call(null,inst_30941);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(18),inst_30942);
} else {
if((state_val_30990 === (21))){
var inst_30981 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_30997_31038 = state_30989__$1;
(statearr_30997_31038[(2)] = inst_30981);

(statearr_30997_31038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (31))){
var inst_30970 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(34),inst_30970);
} else {
if((state_val_30990 === (32))){
var state_30989__$1 = state_30989;
var statearr_30998_31039 = state_30989__$1;
(statearr_30998_31039[(2)] = null);

(statearr_30998_31039[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (33))){
var inst_30975 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_30999_31040 = state_30989__$1;
(statearr_30999_31040[(2)] = inst_30975);

(statearr_30999_31040[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (13))){
var inst_30931 = (state_30989[(2)]);
var inst_30932 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30933 = figwheel.client.format_messages.call(null,inst_30932);
var inst_30934 = figwheel.client.heads_up.display_error.call(null,inst_30933);
var state_30989__$1 = (function (){var statearr_31000 = state_30989;
(statearr_31000[(7)] = inst_30931);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(14),inst_30934);
} else {
if((state_val_30990 === (22))){
var inst_30953 = figwheel.client.heads_up.clear.call(null);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(25),inst_30953);
} else {
if((state_val_30990 === (29))){
var inst_30977 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31001_31041 = state_30989__$1;
(statearr_31001_31041[(2)] = inst_30977);

(statearr_31001_31041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (6))){
var inst_30921 = figwheel.client.heads_up.clear.call(null);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(9),inst_30921);
} else {
if((state_val_30990 === (28))){
var inst_30968 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30989__$1 = state_30989;
if(inst_30968){
var statearr_31002_31042 = state_30989__$1;
(statearr_31002_31042[(1)] = (31));

} else {
var statearr_31003_31043 = state_30989__$1;
(statearr_31003_31043[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (25))){
var inst_30955 = (state_30989[(2)]);
var inst_30956 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30957 = figwheel.client.heads_up.display_warning.call(null,inst_30956);
var state_30989__$1 = (function (){var statearr_31004 = state_30989;
(statearr_31004[(8)] = inst_30955);

return statearr_31004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(26),inst_30957);
} else {
if((state_val_30990 === (34))){
var inst_30972 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31005_31044 = state_30989__$1;
(statearr_31005_31044[(2)] = inst_30972);

(statearr_31005_31044[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (17))){
var inst_30983 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31006_31045 = state_30989__$1;
(statearr_31006_31045[(2)] = inst_30983);

(statearr_31006_31045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (3))){
var inst_30927 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30989__$1 = state_30989;
if(inst_30927){
var statearr_31007_31046 = state_30989__$1;
(statearr_31007_31046[(1)] = (10));

} else {
var statearr_31008_31047 = state_30989__$1;
(statearr_31008_31047[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (12))){
var inst_30985 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31009_31048 = state_30989__$1;
(statearr_31009_31048[(2)] = inst_30985);

(statearr_31009_31048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (2))){
var inst_30915 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30989__$1 = state_30989;
if(cljs.core.truth_(inst_30915)){
var statearr_31010_31049 = state_30989__$1;
(statearr_31010_31049[(1)] = (5));

} else {
var statearr_31011_31050 = state_30989__$1;
(statearr_31011_31050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (23))){
var inst_30961 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30989__$1 = state_30989;
if(inst_30961){
var statearr_31012_31051 = state_30989__$1;
(statearr_31012_31051[(1)] = (27));

} else {
var statearr_31013_31052 = state_30989__$1;
(statearr_31013_31052[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (19))){
var inst_30948 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30949 = figwheel.client.heads_up.append_message.call(null,inst_30948);
var state_30989__$1 = state_30989;
var statearr_31014_31053 = state_30989__$1;
(statearr_31014_31053[(2)] = inst_30949);

(statearr_31014_31053[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (11))){
var inst_30938 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30989__$1 = state_30989;
if(inst_30938){
var statearr_31015_31054 = state_30989__$1;
(statearr_31015_31054[(1)] = (15));

} else {
var statearr_31016_31055 = state_30989__$1;
(statearr_31016_31055[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (9))){
var inst_30923 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31017_31056 = state_30989__$1;
(statearr_31017_31056[(2)] = inst_30923);

(statearr_31017_31056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (5))){
var inst_30917 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(8),inst_30917);
} else {
if((state_val_30990 === (14))){
var inst_30936 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31018_31057 = state_30989__$1;
(statearr_31018_31057[(2)] = inst_30936);

(statearr_31018_31057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (26))){
var inst_30959 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31019_31058 = state_30989__$1;
(statearr_31019_31058[(2)] = inst_30959);

(statearr_31019_31058[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (16))){
var inst_30946 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30989__$1 = state_30989;
if(inst_30946){
var statearr_31020_31059 = state_30989__$1;
(statearr_31020_31059[(1)] = (19));

} else {
var statearr_31021_31060 = state_30989__$1;
(statearr_31021_31060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (30))){
var inst_30966 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31022_31061 = state_30989__$1;
(statearr_31022_31061[(2)] = inst_30966);

(statearr_31022_31061[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (10))){
var inst_30929 = figwheel.client.heads_up.clear.call(null);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(13),inst_30929);
} else {
if((state_val_30990 === (18))){
var inst_30944 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31023_31062 = state_30989__$1;
(statearr_31023_31062[(2)] = inst_30944);

(statearr_31023_31062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (8))){
var inst_30919 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31024_31063 = state_30989__$1;
(statearr_31024_31063[(2)] = inst_30919);

(statearr_31024_31063[(1)] = (7));


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
});})(c__16178__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16122__auto__,c__16178__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_31028 = [null,null,null,null,null,null,null,null,null];
(statearr_31028[(0)] = state_machine__16123__auto__);

(statearr_31028[(1)] = (1));

return statearr_31028;
});
var state_machine__16123__auto____1 = (function (state_30989){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_30989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e31029){if((e31029 instanceof Object)){
var ex__16126__auto__ = e31029;
var statearr_31030_31064 = state_30989;
(statearr_31030_31064[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31065 = state_30989;
state_30989 = G__31065;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_30989){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_30989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__,msg_hist,msg_names,msg))
})();
var state__16180__auto__ = (function (){var statearr_31031 = f__16179__auto__.call(null);
(statearr_31031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_31031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__,msg_hist,msg_names,msg))
);

return c__16178__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__16178__auto___31128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___31128,ch){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___31128,ch){
return (function (state_31111){
var state_val_31112 = (state_31111[(1)]);
if((state_val_31112 === (8))){
var inst_31103 = (state_31111[(2)]);
var state_31111__$1 = (function (){var statearr_31113 = state_31111;
(statearr_31113[(7)] = inst_31103);

return statearr_31113;
})();
var statearr_31114_31129 = state_31111__$1;
(statearr_31114_31129[(2)] = null);

(statearr_31114_31129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31112 === (7))){
var inst_31107 = (state_31111[(2)]);
var state_31111__$1 = state_31111;
var statearr_31115_31130 = state_31111__$1;
(statearr_31115_31130[(2)] = inst_31107);

(statearr_31115_31130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31112 === (6))){
var state_31111__$1 = state_31111;
var statearr_31116_31131 = state_31111__$1;
(statearr_31116_31131[(2)] = null);

(statearr_31116_31131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31112 === (5))){
var inst_31099 = (state_31111[(8)]);
var inst_31101 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31099);
var state_31111__$1 = state_31111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31111__$1,(8),inst_31101);
} else {
if((state_val_31112 === (4))){
var inst_31099 = (state_31111[(8)]);
var inst_31099__$1 = (state_31111[(2)]);
var state_31111__$1 = (function (){var statearr_31117 = state_31111;
(statearr_31117[(8)] = inst_31099__$1);

return statearr_31117;
})();
if(cljs.core.truth_(inst_31099__$1)){
var statearr_31118_31132 = state_31111__$1;
(statearr_31118_31132[(1)] = (5));

} else {
var statearr_31119_31133 = state_31111__$1;
(statearr_31119_31133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31112 === (3))){
var inst_31109 = (state_31111[(2)]);
var state_31111__$1 = state_31111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31111__$1,inst_31109);
} else {
if((state_val_31112 === (2))){
var state_31111__$1 = state_31111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31111__$1,(4),ch);
} else {
if((state_val_31112 === (1))){
var state_31111__$1 = state_31111;
var statearr_31120_31134 = state_31111__$1;
(statearr_31120_31134[(2)] = null);

(statearr_31120_31134[(1)] = (2));


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
});})(c__16178__auto___31128,ch))
;
return ((function (switch__16122__auto__,c__16178__auto___31128,ch){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_31124 = [null,null,null,null,null,null,null,null,null];
(statearr_31124[(0)] = state_machine__16123__auto__);

(statearr_31124[(1)] = (1));

return statearr_31124;
});
var state_machine__16123__auto____1 = (function (state_31111){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_31111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e31125){if((e31125 instanceof Object)){
var ex__16126__auto__ = e31125;
var statearr_31126_31135 = state_31111;
(statearr_31126_31135[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31136 = state_31111;
state_31111 = G__31136;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_31111){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_31111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___31128,ch))
})();
var state__16180__auto__ = (function (){var statearr_31127 = f__16179__auto__.call(null);
(statearr_31127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___31128);

return statearr_31127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___31128,ch))
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
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__){
return (function (state_31157){
var state_val_31158 = (state_31157[(1)]);
if((state_val_31158 === (2))){
var inst_31154 = (state_31157[(2)]);
var inst_31155 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31157__$1 = (function (){var statearr_31159 = state_31157;
(statearr_31159[(7)] = inst_31154);

return statearr_31159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31157__$1,inst_31155);
} else {
if((state_val_31158 === (1))){
var inst_31152 = cljs.core.async.timeout.call(null,(3000));
var state_31157__$1 = state_31157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31157__$1,(2),inst_31152);
} else {
return null;
}
}
});})(c__16178__auto__))
;
return ((function (switch__16122__auto__,c__16178__auto__){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_31163 = [null,null,null,null,null,null,null,null];
(statearr_31163[(0)] = state_machine__16123__auto__);

(statearr_31163[(1)] = (1));

return statearr_31163;
});
var state_machine__16123__auto____1 = (function (state_31157){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_31157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e31164){if((e31164 instanceof Object)){
var ex__16126__auto__ = e31164;
var statearr_31165_31167 = state_31157;
(statearr_31165_31167[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31168 = state_31157;
state_31157 = G__31168;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_31157){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_31157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__))
})();
var state__16180__auto__ = (function (){var statearr_31166 = f__16179__auto__.call(null);
(statearr_31166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_31166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__))
);

return c__16178__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31172 = {"detail":url};
return obj31172;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31173){
var map__31179 = p__31173;
var map__31179__$1 = ((cljs.core.seq_QMARK_.call(null,map__31179))?cljs.core.apply.call(null,cljs.core.hash_map,map__31179):map__31179);
var ed = map__31179__$1;
var exception_data = cljs.core.get.call(null,map__31179__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__31179__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31180_31184 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31181_31185 = null;
var count__31182_31186 = (0);
var i__31183_31187 = (0);
while(true){
if((i__31183_31187 < count__31182_31186)){
var msg_31188 = cljs.core._nth.call(null,chunk__31181_31185,i__31183_31187);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31188);

var G__31189 = seq__31180_31184;
var G__31190 = chunk__31181_31185;
var G__31191 = count__31182_31186;
var G__31192 = (i__31183_31187 + (1));
seq__31180_31184 = G__31189;
chunk__31181_31185 = G__31190;
count__31182_31186 = G__31191;
i__31183_31187 = G__31192;
continue;
} else {
var temp__4126__auto___31193 = cljs.core.seq.call(null,seq__31180_31184);
if(temp__4126__auto___31193){
var seq__31180_31194__$1 = temp__4126__auto___31193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31180_31194__$1)){
var c__13560__auto___31195 = cljs.core.chunk_first.call(null,seq__31180_31194__$1);
var G__31196 = cljs.core.chunk_rest.call(null,seq__31180_31194__$1);
var G__31197 = c__13560__auto___31195;
var G__31198 = cljs.core.count.call(null,c__13560__auto___31195);
var G__31199 = (0);
seq__31180_31184 = G__31196;
chunk__31181_31185 = G__31197;
count__31182_31186 = G__31198;
i__31183_31187 = G__31199;
continue;
} else {
var msg_31200 = cljs.core.first.call(null,seq__31180_31194__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31200);

var G__31201 = cljs.core.next.call(null,seq__31180_31194__$1);
var G__31202 = null;
var G__31203 = (0);
var G__31204 = (0);
seq__31180_31184 = G__31201;
chunk__31181_31185 = G__31202;
count__31182_31186 = G__31203;
i__31183_31187 = G__31204;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__31205){
var map__31207 = p__31205;
var map__31207__$1 = ((cljs.core.seq_QMARK_.call(null,map__31207))?cljs.core.apply.call(null,cljs.core.hash_map,map__31207):map__31207);
var w = map__31207__$1;
var message = cljs.core.get.call(null,map__31207__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31214 = cljs.core.seq.call(null,plugins);
var chunk__31215 = null;
var count__31216 = (0);
var i__31217 = (0);
while(true){
if((i__31217 < count__31216)){
var vec__31218 = cljs.core._nth.call(null,chunk__31215,i__31217);
var k = cljs.core.nth.call(null,vec__31218,(0),null);
var plugin = cljs.core.nth.call(null,vec__31218,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31220 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31214,chunk__31215,count__31216,i__31217,pl_31220,vec__31218,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31220.call(null,msg_hist);
});})(seq__31214,chunk__31215,count__31216,i__31217,pl_31220,vec__31218,k,plugin))
);
} else {
}

var G__31221 = seq__31214;
var G__31222 = chunk__31215;
var G__31223 = count__31216;
var G__31224 = (i__31217 + (1));
seq__31214 = G__31221;
chunk__31215 = G__31222;
count__31216 = G__31223;
i__31217 = G__31224;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31214);
if(temp__4126__auto__){
var seq__31214__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31214__$1)){
var c__13560__auto__ = cljs.core.chunk_first.call(null,seq__31214__$1);
var G__31225 = cljs.core.chunk_rest.call(null,seq__31214__$1);
var G__31226 = c__13560__auto__;
var G__31227 = cljs.core.count.call(null,c__13560__auto__);
var G__31228 = (0);
seq__31214 = G__31225;
chunk__31215 = G__31226;
count__31216 = G__31227;
i__31217 = G__31228;
continue;
} else {
var vec__31219 = cljs.core.first.call(null,seq__31214__$1);
var k = cljs.core.nth.call(null,vec__31219,(0),null);
var plugin = cljs.core.nth.call(null,vec__31219,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31229 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31214,chunk__31215,count__31216,i__31217,pl_31229,vec__31219,k,plugin,seq__31214__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31229.call(null,msg_hist);
});})(seq__31214,chunk__31215,count__31216,i__31217,pl_31229,vec__31219,k,plugin,seq__31214__$1,temp__4126__auto__))
);
} else {
}

var G__31230 = cljs.core.next.call(null,seq__31214__$1);
var G__31231 = null;
var G__31232 = (0);
var G__31233 = (0);
seq__31214 = G__31230;
chunk__31215 = G__31231;
count__31216 = G__31232;
i__31217 = G__31233;
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
var watch_and_reload__delegate = function (p__31234){
var map__31236 = p__31234;
var map__31236__$1 = ((cljs.core.seq_QMARK_.call(null,map__31236))?cljs.core.apply.call(null,cljs.core.hash_map,map__31236):map__31236);
var opts = map__31236__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31234 = null;
if (arguments.length > 0) {
var G__31237__i = 0, G__31237__a = new Array(arguments.length -  0);
while (G__31237__i < G__31237__a.length) {G__31237__a[G__31237__i] = arguments[G__31237__i + 0]; ++G__31237__i;}
  p__31234 = new cljs.core.IndexedSeq(G__31237__a,0);
} 
return watch_and_reload__delegate.call(this,p__31234);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31238){
var p__31234 = cljs.core.seq(arglist__31238);
return watch_and_reload__delegate(p__31234);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1429705621782