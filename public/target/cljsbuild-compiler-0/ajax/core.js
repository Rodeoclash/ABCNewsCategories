// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

ajax.core.AjaxImpl = (function (){var obj16352 = {};
return obj16352;
})();

ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__3794__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (ajax.core._js_ajax_request[(function (){var G__16356 = x__4450__auto__;
return goog.typeOf(G__16356);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


ajax.core.AjaxRequest = (function (){var obj16358 = {};
return obj16358;
})();

ajax.core._abort = (function _abort(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (ajax.core._abort[(function (){var G__16362 = x__4450__auto__;
return goog.typeOf(G__16362);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (ajax.core._abort["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$);
}
});


ajax.core.DirectlySubmittable = (function (){var obj16364 = {};
return obj16364;
})();


ajax.core.AjaxResponse = (function (){var obj16366 = {};
return obj16366;
})();

ajax.core._status = (function _status(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.ajax$core$AjaxResponse$_status$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (ajax.core._status[(function (){var G__16370 = x__4450__auto__;
return goog.typeOf(G__16370);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (ajax.core._status["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status",this$);
}
}
})().call(null,this$);
}
});

ajax.core._status_text = (function _status_text(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.ajax$core$AjaxResponse$_status_text$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (ajax.core._status_text[(function (){var G__16374 = x__4450__auto__;
return goog.typeOf(G__16374);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (ajax.core._status_text["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status-text",this$);
}
}
})().call(null,this$);
}
});

ajax.core._body = (function _body(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.ajax$core$AjaxResponse$_body$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (ajax.core._body[(function (){var G__16378 = x__4450__auto__;
return goog.typeOf(G__16378);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (ajax.core._body["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-body",this$);
}
}
})().call(null,this$);
}
});

ajax.core._get_response_header = (function _get_response_header(this$,header){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2;
} else {
return and__3794__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (ajax.core._get_response_header[(function (){var G__16382 = x__4450__auto__;
return goog.typeOf(G__16382);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (ajax.core._get_response_header["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-response-header",this$);
}
}
})().call(null,this$,header);
}
});

ajax.core._was_aborted = (function _was_aborted(this$){
if((function (){var and__3794__auto__ = this$;
if(and__3794__auto__){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1;
} else {
return and__3794__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__4450__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3806__auto__ = (ajax.core._was_aborted[(function (){var G__16386 = x__4450__auto__;
return goog.typeOf(G__16386);
})()]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (ajax.core._was_aborted["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol("AjaxResponse.-was-aborted",this$);
}
}
})().call(null,this$);
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function submittable_QMARK_(params){
var or__3806__auto__ = (function (){var G__16390 = params;
if(G__16390){
var bit__4487__auto__ = null;
if(cljs.core.truth_((function (){var or__3806__auto__ = bit__4487__auto__;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return G__16390.ajax$core$DirectlySubmittable$;
}
})())){
return true;
} else {
if((!G__16390.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__16390);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(ajax.core.DirectlySubmittable,G__16390);
}
})();
if(or__3806__auto__){
return or__3806__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__16392){
var map__16393 = p__16392;
var map__16393__$1 = ((cljs.core.seq_QMARK_(map__16393))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16393):map__16393);
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16393__$1,cljs.core.constant$keyword$19,false);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16393__$1,cljs.core.constant$keyword$20,(0));
var this$__$1 = this;
var G__16394 = this$__$1;
var G__16395_16399 = G__16394;
var G__16396_16400 = goog.net.EventType.COMPLETE;
var G__16397_16401 = ((function (G__16395_16399,G__16396_16400,G__16394,this$__$1,map__16393,map__16393__$1,with_credentials,timeout){
return (function (p1__16391_SHARP_){
var G__16398 = p1__16391_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__16398) : handler.call(null,G__16398));
});})(G__16395_16399,G__16396_16400,G__16394,this$__$1,map__16393,map__16393__$1,with_credentials,timeout))
;
goog.events.listen(G__16395_16399,G__16396_16400,G__16397_16401);

G__16394.setTimeoutInterval(timeout);

G__16394.setWithCredentials(with_credentials);

G__16394.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__16394;
});
ajax.core.ready_state = (function ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.constant$keyword$21,(1),cljs.core.constant$keyword$22,(2),cljs.core.constant$keyword$23,(3),cljs.core.constant$keyword$24,(4),cljs.core.constant$keyword$25], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__16403){
var map__16404 = p__16403;
var map__16404__$1 = ((cljs.core.seq_QMARK_(map__16404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16404):map__16404);
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16404__$1,cljs.core.constant$keyword$19,false);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16404__$1,cljs.core.constant$keyword$20,(0));
var this$__$1 = this;
this$__$1.timeout = timeout;

this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__16404,map__16404__$1,with_credentials,timeout){
return (function (p1__16402_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$25,ajax.core.ready_state(p1__16402_SHARP_))){
var G__16405 = this$__$1;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__16405) : handler.call(null,G__16405));
} else {
return null;
}
});})(this$__$1,map__16404,map__16404__$1,with_credentials,timeout))
;

var G__16406 = this$__$1;
G__16406.open(method,uri,true);

var t_16413 = G__16406;
var t_16414__$1 = (function (){var seq__16407 = cljs.core.seq(headers);
var chunk__16408 = null;
var count__16409 = (0);
var i__16410 = (0);
while(true){
if((i__16410 < count__16409)){
var vec__16411 = chunk__16408.cljs$core$IIndexed$_nth$arity$2(null,i__16410);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16411,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16411,(1),null);
t_16413.setRequestHeader(k,v);

var G__16415 = seq__16407;
var G__16416 = chunk__16408;
var G__16417 = count__16409;
var G__16418 = (i__16410 + (1));
seq__16407 = G__16415;
chunk__16408 = G__16416;
count__16409 = G__16417;
i__16410 = G__16418;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__16407);
if(temp__4126__auto__){
var seq__16407__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16407__$1)){
var c__4593__auto__ = cljs.core.chunk_first(seq__16407__$1);
var G__16419 = cljs.core.chunk_rest(seq__16407__$1);
var G__16420 = c__4593__auto__;
var G__16421 = cljs.core.count(c__4593__auto__);
var G__16422 = (0);
seq__16407 = G__16419;
chunk__16408 = G__16420;
count__16409 = G__16421;
i__16410 = G__16422;
continue;
} else {
var vec__16412 = cljs.core.first(seq__16407__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16412,(1),null);
t_16413.setRequestHeader(k,v);

var G__16423 = cljs.core.next(seq__16407__$1);
var G__16424 = null;
var G__16425 = (0);
var G__16426 = (0);
seq__16407 = G__16423;
chunk__16408 = G__16424;
count__16409 = G__16425;
i__16410 = G__16426;
continue;
}
} else {
return null;
}
}
break;
}
})();

G__16406.send((function (){var or__3806__auto__ = body;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return "";
}
})());

return G__16406;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__16427){
var map__16428 = p__16427;
var map__16428__$1 = ((cljs.core.seq_QMARK_(map__16428))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16428):map__16428);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16428__$1,cljs.core.constant$keyword$26);
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16428__$1,cljs.core.constant$keyword$27);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16428__$1,cljs.core.constant$keyword$20);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16428__$1,cljs.core.constant$keyword$28);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){
return ajax.core._abort(this$);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function read_edn(xhrio){
return cljs.reader.read_string(ajax.core._body(xhrio));
});
ajax.core.edn_response_format = (function() {
var edn_response_format = null;
var edn_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,ajax.core.read_edn,cljs.core.constant$keyword$30,"EDN",cljs.core.constant$keyword$31,"application/edn"], null);
});
var edn_response_format__1 = (function (opts){
return edn_response_format.cljs$core$IFn$_invoke$arity$0();
});
edn_response_format = function(opts){
switch(arguments.length){
case 0:
return edn_response_format__0.call(this);
case 1:
return edn_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edn_response_format.cljs$core$IFn$_invoke$arity$0 = edn_response_format__0;
edn_response_format.cljs$core$IFn$_invoke$arity$1 = edn_response_format__1;
return edn_response_format;
})()
;
ajax.core.edn_request_format = (function edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,cljs.core.pr_str,cljs.core.constant$keyword$31,"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function() {
var transit_write = null;
var transit_write__1 = (function (writer){
return (function (params){
return cognitect.transit.write(writer,params);
});
});
var transit_write__2 = (function (writer,params){
return cognitect.transit.write(writer,params);
});
transit_write = function(writer,params){
switch(arguments.length){
case 1:
return transit_write__1.call(this,writer);
case 2:
return transit_write__2.call(this,writer,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_write.cljs$core$IFn$_invoke$arity$1 = transit_write__1;
transit_write.cljs$core$IFn$_invoke$arity$2 = transit_write__2;
return transit_write;
})()
;
ajax.core.transit_request_format = (function() {
var transit_request_format = null;
var transit_request_format__0 = (function (){
return transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var transit_request_format__1 = (function (p__16429){
var map__16432 = p__16429;
var map__16432__$1 = ((cljs.core.seq_QMARK_(map__16432))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16432):map__16432);
var opts = map__16432__$1;
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,cljs.core.constant$keyword$33);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,cljs.core.constant$keyword$34);
var writer__$1 = (function (){var or__3806__auto__ = writer;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((function (){var or__3806__auto____$1 = type;
if(cljs.core.truth_(or__3806__auto____$1)){
return or__3806__auto____$1;
} else {
return cljs.core.constant$keyword$35;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1(writer__$1),cljs.core.constant$keyword$31,ajax.core.transit_content_type], null);
});
transit_request_format = function(p__16429){
switch(arguments.length){
case 0:
return transit_request_format__0.call(this);
case 1:
return transit_request_format__1.call(this,p__16429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_request_format.cljs$core$IFn$_invoke$arity$0 = transit_request_format__0;
transit_request_format.cljs$core$IFn$_invoke$arity$1 = transit_request_format__1;
return transit_request_format;
})()
;
ajax.core.transit_read = (function() {
var transit_read = null;
var transit_read__1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});
var transit_read__2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
});
var transit_read__3 = (function (reader,raw,xhrio){
var text = ajax.core._body(xhrio);
var data = cognitect.transit.read(reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
}
});
transit_read = function(reader,raw,xhrio){
switch(arguments.length){
case 1:
return transit_read__1.call(this,reader);
case 2:
return transit_read__2.call(this,reader,raw);
case 3:
return transit_read__3.call(this,reader,raw,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_read.cljs$core$IFn$_invoke$arity$1 = transit_read__1;
transit_read.cljs$core$IFn$_invoke$arity$2 = transit_read__2;
transit_read.cljs$core$IFn$_invoke$arity$3 = transit_read__3;
return transit_read;
})()
;
ajax.core.transit_response_format = (function() {
var transit_response_format = null;
var transit_response_format__0 = (function (){
return transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var transit_response_format__1 = (function (p__16433){
var map__16436 = p__16433;
var map__16436__$1 = ((cljs.core.seq_QMARK_(map__16436))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16436):map__16436);
var opts = map__16436__$1;
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16436__$1,cljs.core.constant$keyword$36);
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16436__$1,cljs.core.constant$keyword$37);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16436__$1,cljs.core.constant$keyword$34);
var reader__$1 = (function (){var or__3806__auto__ = reader;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((function (){var or__3806__auto____$1 = type;
if(cljs.core.truth_(or__3806__auto____$1)){
return or__3806__auto____$1;
} else {
return cljs.core.constant$keyword$35;
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2(reader__$1,raw),cljs.core.constant$keyword$30,"Transit",cljs.core.constant$keyword$31,"application/transit+json"], null);
});
transit_response_format = function(p__16433){
switch(arguments.length){
case 0:
return transit_response_format__0.call(this);
case 1:
return transit_response_format__1.call(this,p__16433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transit_response_format.cljs$core$IFn$_invoke$arity$0 = transit_response_format__0;
transit_response_format.cljs$core$IFn$_invoke$arity$1 = transit_response_format__1;
return transit_response_format;
})()
;
ajax.core.params_to_str = (function params_to_str(params){
if(cljs.core.truth_(params)){
return (function (){var G__16438 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__16438);
})().toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,ajax.core.params_to_str,cljs.core.constant$keyword$31,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function() {
var raw_response_format = null;
var raw_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,ajax.core._body,cljs.core.constant$keyword$30,"raw text",cljs.core.constant$keyword$31,"*/*"], null);
});
var raw_response_format__1 = (function (opts){
return raw_response_format.cljs$core$IFn$_invoke$arity$0();
});
raw_response_format = function(opts){
switch(arguments.length){
case 0:
return raw_response_format__0.call(this);
case 1:
return raw_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
raw_response_format.cljs$core$IFn$_invoke$arity$0 = raw_response_format__0;
raw_response_format.cljs$core$IFn$_invoke$arity$1 = raw_response_format__1;
return raw_response_format;
})()
;
ajax.core.write_json = (function write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,ajax.core.write_json,cljs.core.constant$keyword$31,"application/json"], null);
});
ajax.core.json_read = (function() {
var json_read = null;
var json_read__1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3794__auto__ = prefix;
if(cljs.core.truth_(and__3794__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3794__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__16446 = text__$1;
return goog.json.parse(G__16446);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$11,keywords_QMARK_], 0));
}
});
});
var json_read__2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3794__auto__ = prefix;
if(cljs.core.truth_(and__3794__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3794__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__16445 = text__$1;
return goog.json.parse(G__16445);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$11,keywords_QMARK_], 0));
}
});
});
var json_read__3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3794__auto__ = prefix;
if(cljs.core.truth_(and__3794__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3794__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__16444 = text__$1;
return goog.json.parse(G__16444);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$11,keywords_QMARK_], 0));
}
});
});
var json_read__4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body(xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__3794__auto__ = prefix;
if(cljs.core.truth_(and__3794__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__3794__auto__;
}
})())?text.substring(prefix.length()):text);
var json = (function (){var G__16443 = text__$1;
return goog.json.parse(G__16443);
})();
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$11,keywords_QMARK_], 0));
}
});
json_read = function(prefix,raw,keywords_QMARK_,xhrio){
switch(arguments.length){
case 1:
return json_read__1.call(this,prefix);
case 2:
return json_read__2.call(this,prefix,raw);
case 3:
return json_read__3.call(this,prefix,raw,keywords_QMARK_);
case 4:
return json_read__4.call(this,prefix,raw,keywords_QMARK_,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_read.cljs$core$IFn$_invoke$arity$1 = json_read__1;
json_read.cljs$core$IFn$_invoke$arity$2 = json_read__2;
json_read.cljs$core$IFn$_invoke$arity$3 = json_read__3;
json_read.cljs$core$IFn$_invoke$arity$4 = json_read__4;
return json_read;
})()
;
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should think about using this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function() {
var json_response_format = null;
var json_response_format__0 = (function (){
return json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});
var json_response_format__1 = (function (p__16447){
var map__16450 = p__16447;
var map__16450__$1 = ((cljs.core.seq_QMARK_(map__16450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16450):map__16450);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16450__$1,cljs.core.constant$keyword$36);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16450__$1,cljs.core.constant$keyword$38);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16450__$1,cljs.core.constant$keyword$39);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.constant$keyword$30,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.constant$keyword$31,"application/json"], null);
});
json_response_format = function(p__16447){
switch(arguments.length){
case 0:
return json_response_format__0.call(this);
case 1:
return json_response_format__1.call(this,p__16447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
json_response_format.cljs$core$IFn$_invoke$arity$0 = json_response_format__0;
json_response_format.cljs$core$IFn$_invoke$arity$1 = json_response_format__1;
return json_response_format;
})()
;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function() {
var get_format = null;
var get_format__1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
var G__16458 = opts;
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(G__16458) : format_entry.call(null,G__16458));

}
}
});
});
var get_format__2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_(format_entry)){
return get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.second(format_entry));
} else {
if(cljs.core.map_QMARK_(format_entry)){
return format_entry;
} else {
var G__16457 = opts;
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(G__16457) : format_entry.call(null,G__16457));

}
}
});
get_format = function(opts,format_entry){
switch(arguments.length){
case 1:
return get_format__1.call(this,opts);
case 2:
return get_format__2.call(this,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_format.cljs$core$IFn$_invoke$arity$1 = get_format__1;
get_format.cljs$core$IFn$_invoke$arity$2 = get_format__2;
return get_format;
})()
;
ajax.core.accept_entry = (function() {
var accept_entry = null;
var accept_entry__1 = (function (opts){
return (function (format_entry){
var or__3806__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return "*/*";
}
});
});
var accept_entry__2 = (function (opts,format_entry){
var or__3806__auto__ = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,format_entry)));
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return "*/*";
}
});
accept_entry = function(opts,format_entry){
switch(arguments.length){
case 1:
return accept_entry__1.call(this,opts);
case 2:
return accept_entry__2.call(this,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accept_entry.cljs$core$IFn$_invoke$arity$1 = accept_entry__1;
accept_entry.cljs$core$IFn$_invoke$arity$2 = accept_entry__2;
return accept_entry;
})()
;
ajax.core.detect_content_type = (function() {
var detect_content_type = null;
var detect_content_type__1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var detect_content_type__2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var detect_content_type__3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,format_entry);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
detect_content_type = function(content_type,opts,format_entry){
switch(arguments.length){
case 1:
return detect_content_type__1.call(this,content_type);
case 2:
return detect_content_type__2.call(this,content_type,opts);
case 3:
return detect_content_type__3.call(this,content_type,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_content_type.cljs$core$IFn$_invoke$arity$1 = detect_content_type__1;
detect_content_type.cljs$core$IFn$_invoke$arity$2 = detect_content_type__2;
detect_content_type.cljs$core$IFn$_invoke$arity$3 = detect_content_type__3;
return detect_content_type;
})()
;
ajax.core.get_default_format = (function get_default_format(xhrio,p__16459){
var map__16461 = p__16459;
var map__16461__$1 = ((cljs.core.seq_QMARK_(map__16461))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16461):map__16461);
var opts = map__16461__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16461__$1,cljs.core.constant$keyword$40);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((function (){var or__3806__auto__ = ajax.core._get_response_header(xhrio,"Content-Type");
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function() {
var detect_response_format_read = null;
var detect_response_format_read__1 = (function (opts){
return (function (xhrio){
return cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
});
var detect_response_format_read__2 = (function (opts,xhrio){
return cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format(xhrio,opts)).call(null,xhrio);
});
detect_response_format_read = function(opts,xhrio){
switch(arguments.length){
case 1:
return detect_response_format_read__1.call(this,opts);
case 2:
return detect_response_format_read__2.call(this,opts,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = detect_response_format_read__1;
detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = detect_response_format_read__2;
return detect_response_format_read;
})()
;
ajax.core.accept_header = (function accept_header(p__16462){
var map__16464 = p__16462;
var map__16464__$1 = ((cljs.core.seq_QMARK_(map__16464))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16464):map__16464);
var opts = map__16464__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16464__$1,cljs.core.constant$keyword$40);
if(cljs.core.vector_QMARK_(response_format)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1(opts),response_format));
} else {
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2(opts,response_format);
}
});
ajax.core.detect_response_format = (function() {
var detect_response_format = null;
var detect_response_format__0 = (function (){
return detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$40,ajax.core.default_formats], null));
});
var detect_response_format__1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$41,[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),cljs.core.constant$keyword$31,accept], null);
});
detect_response_format = function(opts){
switch(arguments.length){
case 0:
return detect_response_format__0.call(this);
case 1:
return detect_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
detect_response_format.cljs$core$IFn$_invoke$arity$0 = detect_response_format__0;
detect_response_format.cljs$core$IFn$_invoke$arity$1 = detect_response_format__1;
return detect_response_format;
})()
;
ajax.core.get_response_format = (function get_response_format(p__16466){
var map__16468 = p__16466;
var map__16468__$1 = ((cljs.core.seq_QMARK_(map__16468))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16468):map__16468);
var opts = map__16468__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16468__$1,cljs.core.constant$keyword$40);
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,response_format,cljs.core.constant$keyword$30,"custom",cljs.core.constant$keyword$31,"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__16469,xhrio){
var map__16471 = p__16469;
var map__16471__$1 = ((cljs.core.seq_QMARK_(map__16471))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16471):map__16471);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16471__$1,cljs.core.constant$keyword$30);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$42,status,cljs.core.constant$keyword$43,cljs.core.constant$keyword$45,cljs.core.constant$keyword$44,null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$46,status_text,cljs.core.array_seq([cljs.core.constant$keyword$43,cljs.core.constant$keyword$47,cljs.core.constant$keyword$48,ajax.core._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$46,ajax.core._status_text(xhrio),cljs.core.array_seq([cljs.core.constant$keyword$49,parse_error], 0));
}
});
/**
* @param {...*} var_args
*/
ajax.core.fail = (function() { 
var fail__delegate = function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$42,status,cljs.core.constant$keyword$46,status_text,cljs.core.constant$keyword$43,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
};
var fail = function (status,status_text,failure,var_args){
var params = null;
if (arguments.length > 3) {
var G__16472__i = 0, G__16472__a = new Array(arguments.length -  3);
while (G__16472__i < G__16472__a.length) {G__16472__a[G__16472__i] = arguments[G__16472__i + 3]; ++G__16472__i;}
  params = new cljs.core.IndexedSeq(G__16472__a,0);
} 
return fail__delegate.call(this,status,status_text,failure,params);};
fail.cljs$lang$maxFixedArity = 3;
fail.cljs$lang$applyTo = (function (arglist__16473){
var status = cljs.core.first(arglist__16473);
arglist__16473 = cljs.core.next(arglist__16473);
var status_text = cljs.core.first(arglist__16473);
arglist__16473 = cljs.core.next(arglist__16473);
var failure = cljs.core.first(arglist__16473);
var params = cljs.core.rest(arglist__16473);
return fail__delegate(status,status_text,failure,params);
});
fail.cljs$core$IFn$_invoke$arity$variadic = fail__delegate;
return fail;
})()
;
ajax.core.interpret_response = (function interpret_response(p__16474,xhrio){
var map__16487 = p__16474;
var map__16487__$1 = ((cljs.core.seq_QMARK_(map__16487))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16487):map__16487);
var format = map__16487__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16487__$1,cljs.core.constant$keyword$29);
try{var status = ajax.core._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),status)){
if(cljs.core.truth_(ajax.core._was_aborted(xhrio))){
var G__16489 = "Request aborted by client.";
var G__16490 = cljs.core.constant$keyword$51;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__16489,G__16490) : fail.call(null,G__16489,G__16490));
} else {
var G__16491 = "Request timed out.";
var G__16492 = cljs.core.constant$keyword$20;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__16491,G__16492) : fail.call(null,G__16491,G__16492));
}
} else {
try{var response = (function (){var G__16494 = xhrio;
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(G__16494) : read.call(null,G__16494));
})();
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__16495 = ajax.core._status_text(xhrio);
var G__16496 = cljs.core.constant$keyword$45;
var G__16497 = cljs.core.constant$keyword$44;
var G__16498 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__16495,G__16496,G__16497,G__16498) : fail.call(null,G__16495,G__16496,G__16497,G__16498));
}
}catch (e16493){if((e16493 instanceof Object)){
var e = e16493;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format,xhrio)], null);
} else {
throw e16493;

}
}}
}catch (e16488){if((e16488 instanceof Object)){
var e = e16488;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),e.message,cljs.core.constant$keyword$50,cljs.core.array_seq([cljs.core.constant$keyword$50,e], 0));
} else {
throw e16488;

}
}});
ajax.core.no_format = (function no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$32,format,cljs.core.constant$keyword$31,"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.process_inputs = (function process_inputs(p__16499,p__16500){
var map__16505 = p__16499;
var map__16505__$1 = ((cljs.core.seq_QMARK_(map__16505))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16505):map__16505);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16505__$1,cljs.core.constant$keyword$52);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16505__$1,cljs.core.constant$keyword$53);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16505__$1,cljs.core.constant$keyword$41);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16505__$1,cljs.core.constant$keyword$54);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16505__$1,cljs.core.constant$keyword$55);
var map__16506 = p__16500;
var map__16506__$1 = ((cljs.core.seq_QMARK_(map__16506))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16506):map__16506);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16506__$1,cljs.core.constant$keyword$31);
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__3806__auto__ = headers;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ajax.core.normalize_method(method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers__$1], null);
} else {
var map__16507 = ajax.core.get_request_format(format);
var map__16507__$1 = ((cljs.core.seq_QMARK_(map__16507))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16507):map__16507);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16507__$1,cljs.core.constant$keyword$31);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16507__$1,cljs.core.constant$keyword$32);
var body = ((!((write == null)))?(function (){var G__16508 = params;
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(G__16508) : write.call(null,G__16508));
})():((ajax.core.submittable_QMARK_(params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([headers__$1,content_type__$2], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function() {
var js_handler = null;
var js_handler__1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__16514 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__16514) : handler.call(null,G__16514));
});
});
var js_handler__2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__16513 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__16513) : handler.call(null,G__16513));
});
});
var js_handler__3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response(response_format,xhrio);
var G__16512 = response;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__16512) : handler.call(null,G__16512));
});
js_handler = function(response_format,handler,xhrio){
switch(arguments.length){
case 1:
return js_handler__1.call(this,response_format);
case 2:
return js_handler__2.call(this,response_format,handler);
case 3:
return js_handler__3.call(this,response_format,handler,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_handler.cljs$core$IFn$_invoke$arity$1 = js_handler__1;
js_handler.cljs$core$IFn$_invoke$arity$2 = js_handler__2;
js_handler.cljs$core$IFn$_invoke$arity$3 = js_handler__3;
return js_handler;
})()
;
ajax.core.base_handler = (function base_handler(response_format,p__16515){
var map__16517 = p__16515;
var map__16517__$1 = ((cljs.core.seq_QMARK_(map__16517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16517):map__16517);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16517__$1,cljs.core.constant$keyword$56);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax_request(p__16518){
var map__16521 = p__16518;
var map__16521__$1 = ((cljs.core.seq_QMARK_(map__16521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16521):map__16521);
var opts = map__16521__$1;
var api = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16521__$1,cljs.core.constant$keyword$57);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16521__$1,cljs.core.constant$keyword$54);
var response_format = ajax.core.get_response_format(opts);
var method__$1 = ajax.core.normalize_method(method);
var vec__16522 = ajax.core.process_inputs(opts,response_format);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16522,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16522,(1),null);
var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16522,(2),null);
var handler = ajax.core.base_handler(response_format,opts);
var api__$1 = (function (){var or__3806__auto__ = api;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request(api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__16524 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__16524) {
case "url":
return ajax.core.url_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "edn":
return ajax.core.edn_request_format();

break;
case "json":
return ajax.core.json_request_format();

break;
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),keyword_response_format_2(cljs.core.second(format),format_params)], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$29,format,cljs.core.constant$keyword$30,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__16529 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__16529) {
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "edn":
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16531_SHARP_){
return ajax.core.keyword_response_format_2(p1__16531_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2(format,format_params);
}
});
ajax.core.transform_handler = (function() {
var transform_handler = null;
var transform_handler__1 = (function (p__16534){
var map__16545 = p__16534;
var map__16545__$1 = ((cljs.core.seq_QMARK_(map__16545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16545):map__16545);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16545__$1,cljs.core.constant$keyword$58);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16545__$1,cljs.core.constant$keyword$59);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16545__$1,cljs.core.constant$keyword$56);
return ((function (map__16545,map__16545__$1,finally$,error_handler,handler){
return (function (p__16546){
var vec__16547 = p__16546;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16547,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16547,(1),null);
var temp__4124__auto___16549 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___16549)){
var h_16550 = temp__4124__auto___16549;
var G__16548_16551 = result;
(h_16550.cljs$core$IFn$_invoke$arity$1 ? h_16550.cljs$core$IFn$_invoke$arity$1(G__16548_16551) : h_16550.call(null,G__16548_16551));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(map__16545,map__16545__$1,finally$,error_handler,handler))
});
var transform_handler__2 = (function (p__16532,p__16533){
var map__16542 = p__16532;
var map__16542__$1 = ((cljs.core.seq_QMARK_(map__16542))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16542):map__16542);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,cljs.core.constant$keyword$58);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,cljs.core.constant$keyword$59);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,cljs.core.constant$keyword$56);
var vec__16543 = p__16533;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16543,(1),null);
var temp__4124__auto___16552 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___16552)){
var h_16553 = temp__4124__auto___16552;
var G__16544_16554 = result;
(h_16553.cljs$core$IFn$_invoke$arity$1 ? h_16553.cljs$core$IFn$_invoke$arity$1(G__16544_16554) : h_16553.call(null,G__16544_16554));
} else {
}

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
transform_handler = function(p__16532,p__16533){
switch(arguments.length){
case 1:
return transform_handler__1.call(this,p__16532);
case 2:
return transform_handler__2.call(this,p__16532,p__16533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transform_handler.cljs$core$IFn$_invoke$arity$1 = transform_handler__1;
transform_handler.cljs$core$IFn$_invoke$arity$2 = transform_handler__2;
return transform_handler;
})()
;
ajax.core.transform_opts = (function transform_opts(p__16555){
var map__16557 = p__16555;
var map__16557__$1 = ((cljs.core.seq_QMARK_(map__16557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16557):map__16557);
var opts = map__16557__$1;
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16557__$1,cljs.core.constant$keyword$53);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16557__$1,cljs.core.constant$keyword$40);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16557__$1,cljs.core.constant$keyword$41);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16557__$1,cljs.core.constant$keyword$54);

var needs_format = !((ajax.core.submittable_QMARK_(params)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")));
var rf = (cljs.core.truth_((function (){var or__3806__auto__ = format;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$56,ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.array_seq([cljs.core.constant$keyword$41,rf,cljs.core.constant$keyword$40,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$55,uri,cljs.core.array_seq([cljs.core.constant$keyword$54,method], 0))));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,opts){
var f__10864__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__10864__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10864__auto__));
};
var GET = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__16558__i = 0, G__16558__a = new Array(arguments.length -  1);
while (G__16558__i < G__16558__a.length) {G__16558__a[G__16558__i] = arguments[G__16558__i + 1]; ++G__16558__i;}
  opts = new cljs.core.IndexedSeq(G__16558__a,0);
} 
return GET__delegate.call(this,uri,opts);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__16559){
var uri = cljs.core.first(arglist__16559);
var opts = cljs.core.rest(arglist__16559);
return GET__delegate(uri,opts);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,opts){
var f__10864__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__10864__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10864__auto__));
};
var HEAD = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__16560__i = 0, G__16560__a = new Array(arguments.length -  1);
while (G__16560__i < G__16560__a.length) {G__16560__a[G__16560__i] = arguments[G__16560__i + 1]; ++G__16560__i;}
  opts = new cljs.core.IndexedSeq(G__16560__a,0);
} 
return HEAD__delegate.call(this,uri,opts);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__16561){
var uri = cljs.core.first(arglist__16561);
var opts = cljs.core.rest(arglist__16561);
return HEAD__delegate(uri,opts);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,opts){
var f__10864__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__10864__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10864__auto__));
};
var POST = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__16562__i = 0, G__16562__a = new Array(arguments.length -  1);
while (G__16562__i < G__16562__a.length) {G__16562__a[G__16562__i] = arguments[G__16562__i + 1]; ++G__16562__i;}
  opts = new cljs.core.IndexedSeq(G__16562__a,0);
} 
return POST__delegate.call(this,uri,opts);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__16563){
var uri = cljs.core.first(arglist__16563);
var opts = cljs.core.rest(arglist__16563);
return POST__delegate(uri,opts);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,opts){
var f__10864__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__10864__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10864__auto__));
};
var PUT = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__16564__i = 0, G__16564__a = new Array(arguments.length -  1);
while (G__16564__i < G__16564__a.length) {G__16564__a[G__16564__i] = arguments[G__16564__i + 1]; ++G__16564__i;}
  opts = new cljs.core.IndexedSeq(G__16564__a,0);
} 
return PUT__delegate.call(this,uri,opts);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__16565){
var uri = cljs.core.first(arglist__16565);
var opts = cljs.core.rest(arglist__16565);
return PUT__delegate(uri,opts);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,opts){
var f__10864__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__10864__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10864__auto__));
};
var DELETE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__16566__i = 0, G__16566__a = new Array(arguments.length -  1);
while (G__16566__i < G__16566__a.length) {G__16566__a[G__16566__i] = arguments[G__16566__i + 1]; ++G__16566__i;}
  opts = new cljs.core.IndexedSeq(G__16566__a,0);
} 
return DELETE__delegate.call(this,uri,opts);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__16567){
var uri = cljs.core.first(arglist__16567);
var opts = cljs.core.rest(arglist__16567);
return DELETE__delegate(uri,opts);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,opts){
var f__10864__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__10864__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10864__auto__));
};
var OPTIONS = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__16568__i = 0, G__16568__a = new Array(arguments.length -  1);
while (G__16568__i < G__16568__a.length) {G__16568__a[G__16568__i] = arguments[G__16568__i + 1]; ++G__16568__i;}
  opts = new cljs.core.IndexedSeq(G__16568__a,0);
} 
return OPTIONS__delegate.call(this,uri,opts);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__16569){
var uri = cljs.core.first(arglist__16569);
var opts = cljs.core.rest(arglist__16569);
return OPTIONS__delegate(uri,opts);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,opts){
var f__10864__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__10864__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__10864__auto__));
};
var TRACE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__16570__i = 0, G__16570__a = new Array(arguments.length -  1);
while (G__16570__i < G__16570__a.length) {G__16570__a[G__16570__i] = arguments[G__16570__i + 1]; ++G__16570__i;}
  opts = new cljs.core.IndexedSeq(G__16570__a,0);
} 
return TRACE__delegate.call(this,uri,opts);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__16571){
var uri = cljs.core.first(arglist__16571);
var opts = cljs.core.rest(arglist__16571);
return TRACE__delegate(uri,opts);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
