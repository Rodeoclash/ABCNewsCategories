// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30258_30266 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30259_30267 = null;
var count__30260_30268 = (0);
var i__30261_30269 = (0);
while(true){
if((i__30261_30269 < count__30260_30268)){
var k_30270 = cljs.core._nth.call(null,chunk__30259_30267,i__30261_30269);
e.setAttribute(cljs.core.name.call(null,k_30270),cljs.core.get.call(null,attrs,k_30270));

var G__30271 = seq__30258_30266;
var G__30272 = chunk__30259_30267;
var G__30273 = count__30260_30268;
var G__30274 = (i__30261_30269 + (1));
seq__30258_30266 = G__30271;
chunk__30259_30267 = G__30272;
count__30260_30268 = G__30273;
i__30261_30269 = G__30274;
continue;
} else {
var temp__4126__auto___30275 = cljs.core.seq.call(null,seq__30258_30266);
if(temp__4126__auto___30275){
var seq__30258_30276__$1 = temp__4126__auto___30275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30258_30276__$1)){
var c__13560__auto___30277 = cljs.core.chunk_first.call(null,seq__30258_30276__$1);
var G__30278 = cljs.core.chunk_rest.call(null,seq__30258_30276__$1);
var G__30279 = c__13560__auto___30277;
var G__30280 = cljs.core.count.call(null,c__13560__auto___30277);
var G__30281 = (0);
seq__30258_30266 = G__30278;
chunk__30259_30267 = G__30279;
count__30260_30268 = G__30280;
i__30261_30269 = G__30281;
continue;
} else {
var k_30282 = cljs.core.first.call(null,seq__30258_30276__$1);
e.setAttribute(cljs.core.name.call(null,k_30282),cljs.core.get.call(null,attrs,k_30282));

var G__30283 = cljs.core.next.call(null,seq__30258_30276__$1);
var G__30284 = null;
var G__30285 = (0);
var G__30286 = (0);
seq__30258_30266 = G__30283;
chunk__30259_30267 = G__30284;
count__30260_30268 = G__30285;
i__30261_30269 = G__30286;
continue;
}
} else {
}
}
break;
}

var seq__30262_30287 = cljs.core.seq.call(null,children);
var chunk__30263_30288 = null;
var count__30264_30289 = (0);
var i__30265_30290 = (0);
while(true){
if((i__30265_30290 < count__30264_30289)){
var ch_30291 = cljs.core._nth.call(null,chunk__30263_30288,i__30265_30290);
e.appendChild(ch_30291);

var G__30292 = seq__30262_30287;
var G__30293 = chunk__30263_30288;
var G__30294 = count__30264_30289;
var G__30295 = (i__30265_30290 + (1));
seq__30262_30287 = G__30292;
chunk__30263_30288 = G__30293;
count__30264_30289 = G__30294;
i__30265_30290 = G__30295;
continue;
} else {
var temp__4126__auto___30296 = cljs.core.seq.call(null,seq__30262_30287);
if(temp__4126__auto___30296){
var seq__30262_30297__$1 = temp__4126__auto___30296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30262_30297__$1)){
var c__13560__auto___30298 = cljs.core.chunk_first.call(null,seq__30262_30297__$1);
var G__30299 = cljs.core.chunk_rest.call(null,seq__30262_30297__$1);
var G__30300 = c__13560__auto___30298;
var G__30301 = cljs.core.count.call(null,c__13560__auto___30298);
var G__30302 = (0);
seq__30262_30287 = G__30299;
chunk__30263_30288 = G__30300;
count__30264_30289 = G__30301;
i__30265_30290 = G__30302;
continue;
} else {
var ch_30303 = cljs.core.first.call(null,seq__30262_30297__$1);
e.appendChild(ch_30303);

var G__30304 = cljs.core.next.call(null,seq__30262_30297__$1);
var G__30305 = null;
var G__30306 = (0);
var G__30307 = (0);
seq__30262_30287 = G__30304;
chunk__30263_30288 = G__30305;
count__30264_30289 = G__30306;
i__30265_30290 = G__30307;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__30308__i = 0, G__30308__a = new Array(arguments.length -  2);
while (G__30308__i < G__30308__a.length) {G__30308__a[G__30308__i] = arguments[G__30308__i + 2]; ++G__30308__i;}
  children = new cljs.core.IndexedSeq(G__30308__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__30309){
var t = cljs.core.first(arglist__30309);
arglist__30309 = cljs.core.next(arglist__30309);
var attrs = cljs.core.first(arglist__30309);
var children = cljs.core.rest(arglist__30309);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13674__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13670__auto__,prefer_table__13671__auto__,method_cache__13672__auto__,cached_hierarchy__13673__auto__,hierarchy__13674__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13670__auto__,prefer_table__13671__auto__,method_cache__13672__auto__,cached_hierarchy__13673__auto__,hierarchy__13674__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13674__auto__,method_table__13670__auto__,prefer_table__13671__auto__,method_cache__13672__auto__,cached_hierarchy__13673__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30310 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30310.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30310.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30310.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30310);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__30311,st_map){
var map__30315 = p__30311;
var map__30315__$1 = ((cljs.core.seq_QMARK_.call(null,map__30315))?cljs.core.apply.call(null,cljs.core.hash_map,map__30315):map__30315);
var container_el = cljs.core.get.call(null,map__30315__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30315,map__30315__$1,container_el){
return (function (p__30316){
var vec__30317 = p__30316;
var k = cljs.core.nth.call(null,vec__30317,(0),null);
var v = cljs.core.nth.call(null,vec__30317,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30315,map__30315__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__30318,dom_str){
var map__30320 = p__30318;
var map__30320__$1 = ((cljs.core.seq_QMARK_.call(null,map__30320))?cljs.core.apply.call(null,cljs.core.hash_map,map__30320):map__30320);
var c = map__30320__$1;
var content_area_el = cljs.core.get.call(null,map__30320__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__30321){
var map__30323 = p__30321;
var map__30323__$1 = ((cljs.core.seq_QMARK_.call(null,map__30323))?cljs.core.apply.call(null,cljs.core.hash_map,map__30323):map__30323);
var content_area_el = cljs.core.get.call(null,map__30323__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__){
return (function (state_30365){
var state_val_30366 = (state_30365[(1)]);
if((state_val_30366 === (2))){
var inst_30350 = (state_30365[(7)]);
var inst_30359 = (state_30365[(2)]);
var inst_30360 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30361 = ["auto"];
var inst_30362 = cljs.core.PersistentHashMap.fromArrays(inst_30360,inst_30361);
var inst_30363 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30350,inst_30362);
var state_30365__$1 = (function (){var statearr_30367 = state_30365;
(statearr_30367[(8)] = inst_30359);

return statearr_30367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30365__$1,inst_30363);
} else {
if((state_val_30366 === (1))){
var inst_30350 = (state_30365[(7)]);
var inst_30350__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30351 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30352 = ["10px","10px","100%","68px","1.0"];
var inst_30353 = cljs.core.PersistentHashMap.fromArrays(inst_30351,inst_30352);
var inst_30354 = cljs.core.merge.call(null,inst_30353,style);
var inst_30355 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30350__$1,inst_30354);
var inst_30356 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30350__$1,msg);
var inst_30357 = cljs.core.async.timeout.call(null,(300));
var state_30365__$1 = (function (){var statearr_30368 = state_30365;
(statearr_30368[(9)] = inst_30356);

(statearr_30368[(7)] = inst_30350__$1);

(statearr_30368[(10)] = inst_30355);

return statearr_30368;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30365__$1,(2),inst_30357);
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
var statearr_30372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30372[(0)] = state_machine__15387__auto__);

(statearr_30372[(1)] = (1));

return statearr_30372;
});
var state_machine__15387__auto____1 = (function (state_30365){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_30365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e30373){if((e30373 instanceof Object)){
var ex__15390__auto__ = e30373;
var statearr_30374_30376 = state_30365;
(statearr_30374_30376[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30377 = state_30365;
state_30365 = G__30377;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_30365){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_30365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__))
})();
var state__15444__auto__ = (function (){var statearr_30375 = f__15443__auto__.call(null);
(statearr_30375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_30375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__))
);

return c__15442__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30379 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30379,(0),null);
var ln = cljs.core.nth.call(null,vec__30379,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__30382 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__30382,(0),null);
var file_line = cljs.core.nth.call(null,vec__30382,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30382,file_name,file_line){
return (function (p1__30380_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30380_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30382,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__30384 = figwheel.client.heads_up.ensure_container.call(null);
var map__30384__$1 = ((cljs.core.seq_QMARK_.call(null,map__30384))?cljs.core.apply.call(null,cljs.core.hash_map,map__30384):map__30384);
var content_area_el = cljs.core.get.call(null,map__30384__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__){
return (function (state_30431){
var state_val_30432 = (state_30431[(1)]);
if((state_val_30432 === (3))){
var inst_30414 = (state_30431[(7)]);
var inst_30428 = (state_30431[(2)]);
var inst_30429 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30414,"");
var state_30431__$1 = (function (){var statearr_30433 = state_30431;
(statearr_30433[(8)] = inst_30428);

return statearr_30433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30431__$1,inst_30429);
} else {
if((state_val_30432 === (2))){
var inst_30414 = (state_30431[(7)]);
var inst_30421 = (state_30431[(2)]);
var inst_30422 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30423 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30424 = cljs.core.PersistentHashMap.fromArrays(inst_30422,inst_30423);
var inst_30425 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30414,inst_30424);
var inst_30426 = cljs.core.async.timeout.call(null,(200));
var state_30431__$1 = (function (){var statearr_30434 = state_30431;
(statearr_30434[(9)] = inst_30421);

(statearr_30434[(10)] = inst_30425);

return statearr_30434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30431__$1,(3),inst_30426);
} else {
if((state_val_30432 === (1))){
var inst_30414 = (state_30431[(7)]);
var inst_30414__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30415 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30416 = ["0.0"];
var inst_30417 = cljs.core.PersistentHashMap.fromArrays(inst_30415,inst_30416);
var inst_30418 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30414__$1,inst_30417);
var inst_30419 = cljs.core.async.timeout.call(null,(300));
var state_30431__$1 = (function (){var statearr_30435 = state_30431;
(statearr_30435[(11)] = inst_30418);

(statearr_30435[(7)] = inst_30414__$1);

return statearr_30435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30431__$1,(2),inst_30419);
} else {
return null;
}
}
}
});})(c__15442__auto__))
;
return ((function (switch__15386__auto__,c__15442__auto__){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_30439 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30439[(0)] = state_machine__15387__auto__);

(statearr_30439[(1)] = (1));

return statearr_30439;
});
var state_machine__15387__auto____1 = (function (state_30431){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_30431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e30440){if((e30440 instanceof Object)){
var ex__15390__auto__ = e30440;
var statearr_30441_30443 = state_30431;
(statearr_30441_30443[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30444 = state_30431;
state_30431 = G__30444;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_30431){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_30431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__))
})();
var state__15444__auto__ = (function (){var statearr_30442 = f__15443__auto__.call(null);
(statearr_30442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_30442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__))
);

return c__15442__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__){
return (function (state_30476){
var state_val_30477 = (state_30476[(1)]);
if((state_val_30477 === (4))){
var inst_30474 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30476__$1,inst_30474);
} else {
if((state_val_30477 === (3))){
var inst_30471 = (state_30476[(2)]);
var inst_30472 = figwheel.client.heads_up.clear.call(null);
var state_30476__$1 = (function (){var statearr_30478 = state_30476;
(statearr_30478[(7)] = inst_30471);

return statearr_30478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30476__$1,(4),inst_30472);
} else {
if((state_val_30477 === (2))){
var inst_30468 = (state_30476[(2)]);
var inst_30469 = cljs.core.async.timeout.call(null,(400));
var state_30476__$1 = (function (){var statearr_30479 = state_30476;
(statearr_30479[(8)] = inst_30468);

return statearr_30479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30476__$1,(3),inst_30469);
} else {
if((state_val_30477 === (1))){
var inst_30466 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30476__$1,(2),inst_30466);
} else {
return null;
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
var statearr_30483 = [null,null,null,null,null,null,null,null,null];
(statearr_30483[(0)] = state_machine__15387__auto__);

(statearr_30483[(1)] = (1));

return statearr_30483;
});
var state_machine__15387__auto____1 = (function (state_30476){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_30476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e30484){if((e30484 instanceof Object)){
var ex__15390__auto__ = e30484;
var statearr_30485_30487 = state_30476;
(statearr_30485_30487[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30488 = state_30476;
state_30476 = G__30488;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_30476){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_30476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__))
})();
var state__15444__auto__ = (function (){var statearr_30486 = f__15443__auto__.call(null);
(statearr_30486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_30486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__))
);

return c__15442__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1429446862972