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
var seq__31256_31264 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31257_31265 = null;
var count__31258_31266 = (0);
var i__31259_31267 = (0);
while(true){
if((i__31259_31267 < count__31258_31266)){
var k_31268 = cljs.core._nth.call(null,chunk__31257_31265,i__31259_31267);
e.setAttribute(cljs.core.name.call(null,k_31268),cljs.core.get.call(null,attrs,k_31268));

var G__31269 = seq__31256_31264;
var G__31270 = chunk__31257_31265;
var G__31271 = count__31258_31266;
var G__31272 = (i__31259_31267 + (1));
seq__31256_31264 = G__31269;
chunk__31257_31265 = G__31270;
count__31258_31266 = G__31271;
i__31259_31267 = G__31272;
continue;
} else {
var temp__4126__auto___31273 = cljs.core.seq.call(null,seq__31256_31264);
if(temp__4126__auto___31273){
var seq__31256_31274__$1 = temp__4126__auto___31273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31256_31274__$1)){
var c__13560__auto___31275 = cljs.core.chunk_first.call(null,seq__31256_31274__$1);
var G__31276 = cljs.core.chunk_rest.call(null,seq__31256_31274__$1);
var G__31277 = c__13560__auto___31275;
var G__31278 = cljs.core.count.call(null,c__13560__auto___31275);
var G__31279 = (0);
seq__31256_31264 = G__31276;
chunk__31257_31265 = G__31277;
count__31258_31266 = G__31278;
i__31259_31267 = G__31279;
continue;
} else {
var k_31280 = cljs.core.first.call(null,seq__31256_31274__$1);
e.setAttribute(cljs.core.name.call(null,k_31280),cljs.core.get.call(null,attrs,k_31280));

var G__31281 = cljs.core.next.call(null,seq__31256_31274__$1);
var G__31282 = null;
var G__31283 = (0);
var G__31284 = (0);
seq__31256_31264 = G__31281;
chunk__31257_31265 = G__31282;
count__31258_31266 = G__31283;
i__31259_31267 = G__31284;
continue;
}
} else {
}
}
break;
}

var seq__31260_31285 = cljs.core.seq.call(null,children);
var chunk__31261_31286 = null;
var count__31262_31287 = (0);
var i__31263_31288 = (0);
while(true){
if((i__31263_31288 < count__31262_31287)){
var ch_31289 = cljs.core._nth.call(null,chunk__31261_31286,i__31263_31288);
e.appendChild(ch_31289);

var G__31290 = seq__31260_31285;
var G__31291 = chunk__31261_31286;
var G__31292 = count__31262_31287;
var G__31293 = (i__31263_31288 + (1));
seq__31260_31285 = G__31290;
chunk__31261_31286 = G__31291;
count__31262_31287 = G__31292;
i__31263_31288 = G__31293;
continue;
} else {
var temp__4126__auto___31294 = cljs.core.seq.call(null,seq__31260_31285);
if(temp__4126__auto___31294){
var seq__31260_31295__$1 = temp__4126__auto___31294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31260_31295__$1)){
var c__13560__auto___31296 = cljs.core.chunk_first.call(null,seq__31260_31295__$1);
var G__31297 = cljs.core.chunk_rest.call(null,seq__31260_31295__$1);
var G__31298 = c__13560__auto___31296;
var G__31299 = cljs.core.count.call(null,c__13560__auto___31296);
var G__31300 = (0);
seq__31260_31285 = G__31297;
chunk__31261_31286 = G__31298;
count__31262_31287 = G__31299;
i__31263_31288 = G__31300;
continue;
} else {
var ch_31301 = cljs.core.first.call(null,seq__31260_31295__$1);
e.appendChild(ch_31301);

var G__31302 = cljs.core.next.call(null,seq__31260_31295__$1);
var G__31303 = null;
var G__31304 = (0);
var G__31305 = (0);
seq__31260_31285 = G__31302;
chunk__31261_31286 = G__31303;
count__31262_31287 = G__31304;
i__31263_31288 = G__31305;
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
var G__31306__i = 0, G__31306__a = new Array(arguments.length -  2);
while (G__31306__i < G__31306__a.length) {G__31306__a[G__31306__i] = arguments[G__31306__i + 2]; ++G__31306__i;}
  children = new cljs.core.IndexedSeq(G__31306__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__31307){
var t = cljs.core.first(arglist__31307);
arglist__31307 = cljs.core.next(arglist__31307);
var attrs = cljs.core.first(arglist__31307);
var children = cljs.core.rest(arglist__31307);
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
var el_31308 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31308.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31308.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_31308.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31308);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__31309,st_map){
var map__31313 = p__31309;
var map__31313__$1 = ((cljs.core.seq_QMARK_.call(null,map__31313))?cljs.core.apply.call(null,cljs.core.hash_map,map__31313):map__31313);
var container_el = cljs.core.get.call(null,map__31313__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31313,map__31313__$1,container_el){
return (function (p__31314){
var vec__31315 = p__31314;
var k = cljs.core.nth.call(null,vec__31315,(0),null);
var v = cljs.core.nth.call(null,vec__31315,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31313,map__31313__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__31316,dom_str){
var map__31318 = p__31316;
var map__31318__$1 = ((cljs.core.seq_QMARK_.call(null,map__31318))?cljs.core.apply.call(null,cljs.core.hash_map,map__31318):map__31318);
var c = map__31318__$1;
var content_area_el = cljs.core.get.call(null,map__31318__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__31319){
var map__31321 = p__31319;
var map__31321__$1 = ((cljs.core.seq_QMARK_.call(null,map__31321))?cljs.core.apply.call(null,cljs.core.hash_map,map__31321):map__31321);
var content_area_el = cljs.core.get.call(null,map__31321__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__){
return (function (state_31363){
var state_val_31364 = (state_31363[(1)]);
if((state_val_31364 === (2))){
var inst_31348 = (state_31363[(7)]);
var inst_31357 = (state_31363[(2)]);
var inst_31358 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31359 = ["auto"];
var inst_31360 = cljs.core.PersistentHashMap.fromArrays(inst_31358,inst_31359);
var inst_31361 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31348,inst_31360);
var state_31363__$1 = (function (){var statearr_31365 = state_31363;
(statearr_31365[(8)] = inst_31357);

return statearr_31365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31363__$1,inst_31361);
} else {
if((state_val_31364 === (1))){
var inst_31348 = (state_31363[(7)]);
var inst_31348__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31349 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31350 = ["10px","10px","100%","68px","1.0"];
var inst_31351 = cljs.core.PersistentHashMap.fromArrays(inst_31349,inst_31350);
var inst_31352 = cljs.core.merge.call(null,inst_31351,style);
var inst_31353 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31348__$1,inst_31352);
var inst_31354 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31348__$1,msg);
var inst_31355 = cljs.core.async.timeout.call(null,(300));
var state_31363__$1 = (function (){var statearr_31366 = state_31363;
(statearr_31366[(9)] = inst_31353);

(statearr_31366[(10)] = inst_31354);

(statearr_31366[(7)] = inst_31348__$1);

return statearr_31366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31363__$1,(2),inst_31355);
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
var statearr_31370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31370[(0)] = state_machine__16123__auto__);

(statearr_31370[(1)] = (1));

return statearr_31370;
});
var state_machine__16123__auto____1 = (function (state_31363){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_31363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e31371){if((e31371 instanceof Object)){
var ex__16126__auto__ = e31371;
var statearr_31372_31374 = state_31363;
(statearr_31372_31374[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31375 = state_31363;
state_31363 = G__31375;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_31363){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_31363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__))
})();
var state__16180__auto__ = (function (){var statearr_31373 = f__16179__auto__.call(null);
(statearr_31373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_31373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__))
);

return c__16178__auto__;
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
var vec__31377 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__31377,(0),null);
var ln = cljs.core.nth.call(null,vec__31377,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__31380 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__31380,(0),null);
var file_line = cljs.core.nth.call(null,vec__31380,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31380,file_name,file_line){
return (function (p1__31378_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31378_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31380,file_name,file_line))
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
var map__31382 = figwheel.client.heads_up.ensure_container.call(null);
var map__31382__$1 = ((cljs.core.seq_QMARK_.call(null,map__31382))?cljs.core.apply.call(null,cljs.core.hash_map,map__31382):map__31382);
var content_area_el = cljs.core.get.call(null,map__31382__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__){
return (function (state_31429){
var state_val_31430 = (state_31429[(1)]);
if((state_val_31430 === (3))){
var inst_31412 = (state_31429[(7)]);
var inst_31426 = (state_31429[(2)]);
var inst_31427 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31412,"");
var state_31429__$1 = (function (){var statearr_31431 = state_31429;
(statearr_31431[(8)] = inst_31426);

return statearr_31431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31429__$1,inst_31427);
} else {
if((state_val_31430 === (2))){
var inst_31412 = (state_31429[(7)]);
var inst_31419 = (state_31429[(2)]);
var inst_31420 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31421 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31422 = cljs.core.PersistentHashMap.fromArrays(inst_31420,inst_31421);
var inst_31423 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31412,inst_31422);
var inst_31424 = cljs.core.async.timeout.call(null,(200));
var state_31429__$1 = (function (){var statearr_31432 = state_31429;
(statearr_31432[(9)] = inst_31419);

(statearr_31432[(10)] = inst_31423);

return statearr_31432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31429__$1,(3),inst_31424);
} else {
if((state_val_31430 === (1))){
var inst_31412 = (state_31429[(7)]);
var inst_31412__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31413 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31414 = ["0.0"];
var inst_31415 = cljs.core.PersistentHashMap.fromArrays(inst_31413,inst_31414);
var inst_31416 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31412__$1,inst_31415);
var inst_31417 = cljs.core.async.timeout.call(null,(300));
var state_31429__$1 = (function (){var statearr_31433 = state_31429;
(statearr_31433[(11)] = inst_31416);

(statearr_31433[(7)] = inst_31412__$1);

return statearr_31433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31429__$1,(2),inst_31417);
} else {
return null;
}
}
}
});})(c__16178__auto__))
;
return ((function (switch__16122__auto__,c__16178__auto__){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_31437 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31437[(0)] = state_machine__16123__auto__);

(statearr_31437[(1)] = (1));

return statearr_31437;
});
var state_machine__16123__auto____1 = (function (state_31429){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_31429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e31438){if((e31438 instanceof Object)){
var ex__16126__auto__ = e31438;
var statearr_31439_31441 = state_31429;
(statearr_31439_31441[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31442 = state_31429;
state_31429 = G__31442;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_31429){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_31429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__))
})();
var state__16180__auto__ = (function (){var statearr_31440 = f__16179__auto__.call(null);
(statearr_31440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_31440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__))
);

return c__16178__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__){
return (function (state_31474){
var state_val_31475 = (state_31474[(1)]);
if((state_val_31475 === (4))){
var inst_31472 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31474__$1,inst_31472);
} else {
if((state_val_31475 === (3))){
var inst_31469 = (state_31474[(2)]);
var inst_31470 = figwheel.client.heads_up.clear.call(null);
var state_31474__$1 = (function (){var statearr_31476 = state_31474;
(statearr_31476[(7)] = inst_31469);

return statearr_31476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31474__$1,(4),inst_31470);
} else {
if((state_val_31475 === (2))){
var inst_31466 = (state_31474[(2)]);
var inst_31467 = cljs.core.async.timeout.call(null,(400));
var state_31474__$1 = (function (){var statearr_31477 = state_31474;
(statearr_31477[(8)] = inst_31466);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31474__$1,(3),inst_31467);
} else {
if((state_val_31475 === (1))){
var inst_31464 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31474__$1 = state_31474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31474__$1,(2),inst_31464);
} else {
return null;
}
}
}
}
});})(c__16178__auto__))
;
return ((function (switch__16122__auto__,c__16178__auto__){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_31481 = [null,null,null,null,null,null,null,null,null];
(statearr_31481[(0)] = state_machine__16123__auto__);

(statearr_31481[(1)] = (1));

return statearr_31481;
});
var state_machine__16123__auto____1 = (function (state_31474){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_31474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e31482){if((e31482 instanceof Object)){
var ex__16126__auto__ = e31482;
var statearr_31483_31485 = state_31474;
(statearr_31483_31485[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31486 = state_31474;
state_31474 = G__31486;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_31474){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_31474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__))
})();
var state__16180__auto__ = (function (){var statearr_31484 = f__16179__auto__.call(null);
(statearr_31484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_31484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__))
);

return c__16178__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1429705622062