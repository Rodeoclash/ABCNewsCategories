// Compiled by ClojureScript 0.0-2816 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31532_SHARP_,p2__31533_SHARP_){
var and__12761__auto__ = p1__31532_SHARP_;
if(cljs.core.truth_(and__12761__auto__)){
return p2__31533_SHARP_;
} else {
return and__12761__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__12773__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__12773__auto__){
return or__12773__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__31535_SHARP_,p2__31534_SHARP_){
return [cljs.core.str(p2__31534_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__12773__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__12773__auto__){
return or__12773__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__12773__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__13670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13674__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13674__auto__,method_table__13670__auto__,prefer_table__13671__auto__,method_cache__13672__auto__,cached_hierarchy__13673__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31536){
var map__31537 = p__31536;
var map__31537__$1 = ((cljs.core.seq_QMARK_.call(null,map__31537))?cljs.core.apply.call(null,cljs.core.hash_map,map__31537):map__31537);
var file = cljs.core.get.call(null,map__31537__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31538){
var map__31539 = p__31538;
var map__31539__$1 = ((cljs.core.seq_QMARK_.call(null,map__31539))?cljs.core.apply.call(null,cljs.core.hash_map,map__31539):map__31539);
var namespace = cljs.core.get.call(null,map__31539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__13670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13674__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13674__auto__,method_table__13670__auto__,prefer_table__13671__auto__,method_cache__13672__auto__,cached_hierarchy__13673__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31540){if((e31540 instanceof Error)){
var e = e31540;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31540;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__31541,callback){
var map__31543 = p__31541;
var map__31543__$1 = ((cljs.core.seq_QMARK_.call(null,map__31543))?cljs.core.apply.call(null,cljs.core.hash_map,map__31543):map__31543);
var file_msg = map__31543__$1;
var request_url = cljs.core.get.call(null,map__31543__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31543,map__31543__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31543,map__31543__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__31544){
var map__31546 = p__31544;
var map__31546__$1 = ((cljs.core.seq_QMARK_.call(null,map__31546))?cljs.core.apply.call(null,cljs.core.hash_map,map__31546):map__31546);
var file_msg = map__31546__$1;
var meta_data = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__12773__auto__ = meta_data;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__12761__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__12761__auto__){
var or__12773__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__12773__auto____$1)){
return or__12773__auto____$1;
} else {
var and__12761__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__12761__auto____$1){
var or__12773__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__12773__auto____$2){
return or__12773__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__12761__auto____$1;
}
}
}
} else {
return and__12761__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__31547,callback){
var map__31549 = p__31547;
var map__31549__$1 = ((cljs.core.seq_QMARK_.call(null,map__31549))?cljs.core.apply.call(null,cljs.core.hash_map,map__31549):map__31549);
var file_msg = map__31549__$1;
var namespace = cljs.core.get.call(null,map__31549__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31549__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__16178__auto___31636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto___31636,out){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto___31636,out){
return (function (state_31618){
var state_val_31619 = (state_31618[(1)]);
if((state_val_31619 === (7))){
var inst_31602 = (state_31618[(7)]);
var inst_31608 = (state_31618[(2)]);
var inst_31609 = cljs.core.async.put_BANG_.call(null,out,inst_31608);
var inst_31598 = inst_31602;
var state_31618__$1 = (function (){var statearr_31620 = state_31618;
(statearr_31620[(8)] = inst_31598);

(statearr_31620[(9)] = inst_31609);

return statearr_31620;
})();
var statearr_31621_31637 = state_31618__$1;
(statearr_31621_31637[(2)] = null);

(statearr_31621_31637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (6))){
var inst_31614 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
var statearr_31622_31638 = state_31618__$1;
(statearr_31622_31638[(2)] = inst_31614);

(statearr_31622_31638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (5))){
var inst_31612 = cljs.core.async.close_BANG_.call(null,out);
var state_31618__$1 = state_31618;
var statearr_31623_31639 = state_31618__$1;
(statearr_31623_31639[(2)] = inst_31612);

(statearr_31623_31639[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (4))){
var inst_31601 = (state_31618[(10)]);
var inst_31606 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31601);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31618__$1,(7),inst_31606);
} else {
if((state_val_31619 === (3))){
var inst_31616 = (state_31618[(2)]);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31618__$1,inst_31616);
} else {
if((state_val_31619 === (2))){
var inst_31601 = (state_31618[(10)]);
var inst_31598 = (state_31618[(8)]);
var inst_31601__$1 = cljs.core.nth.call(null,inst_31598,(0),null);
var inst_31602 = cljs.core.nthnext.call(null,inst_31598,(1));
var inst_31603 = (inst_31601__$1 == null);
var inst_31604 = cljs.core.not.call(null,inst_31603);
var state_31618__$1 = (function (){var statearr_31624 = state_31618;
(statearr_31624[(10)] = inst_31601__$1);

(statearr_31624[(7)] = inst_31602);

return statearr_31624;
})();
if(inst_31604){
var statearr_31625_31640 = state_31618__$1;
(statearr_31625_31640[(1)] = (4));

} else {
var statearr_31626_31641 = state_31618__$1;
(statearr_31626_31641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31619 === (1))){
var inst_31596 = cljs.core.nth.call(null,files,(0),null);
var inst_31597 = cljs.core.nthnext.call(null,files,(1));
var inst_31598 = files;
var state_31618__$1 = (function (){var statearr_31627 = state_31618;
(statearr_31627[(11)] = inst_31597);

(statearr_31627[(8)] = inst_31598);

(statearr_31627[(12)] = inst_31596);

return statearr_31627;
})();
var statearr_31628_31642 = state_31618__$1;
(statearr_31628_31642[(2)] = null);

(statearr_31628_31642[(1)] = (2));


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
});})(c__16178__auto___31636,out))
;
return ((function (switch__16122__auto__,c__16178__auto___31636,out){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_31632 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31632[(0)] = state_machine__16123__auto__);

(statearr_31632[(1)] = (1));

return statearr_31632;
});
var state_machine__16123__auto____1 = (function (state_31618){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_31618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e31633){if((e31633 instanceof Object)){
var ex__16126__auto__ = e31633;
var statearr_31634_31643 = state_31618;
(statearr_31634_31643[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31644 = state_31618;
state_31618 = G__31644;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_31618){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_31618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto___31636,out))
})();
var state__16180__auto__ = (function (){var statearr_31635 = f__16179__auto__.call(null);
(statearr_31635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto___31636);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto___31636,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31645,p__31646){
var map__31649 = p__31645;
var map__31649__$1 = ((cljs.core.seq_QMARK_.call(null,map__31649))?cljs.core.apply.call(null,cljs.core.hash_map,map__31649):map__31649);
var opts = map__31649__$1;
var url_rewriter = cljs.core.get.call(null,map__31649__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31650 = p__31646;
var map__31650__$1 = ((cljs.core.seq_QMARK_.call(null,map__31650))?cljs.core.apply.call(null,cljs.core.hash_map,map__31650):map__31650);
var file_msg = map__31650__$1;
var file = cljs.core.get.call(null,map__31650__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__31651){
var map__31654 = p__31651;
var map__31654__$1 = ((cljs.core.seq_QMARK_.call(null,map__31654))?cljs.core.apply.call(null,cljs.core.hash_map,map__31654):map__31654);
var file = cljs.core.get.call(null,map__31654__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31654__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__12761__auto__ = eval_body__$1;
if(cljs.core.truth_(and__12761__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__12761__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31655){var e = e31655;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31660,p__31661){
var map__31862 = p__31660;
var map__31862__$1 = ((cljs.core.seq_QMARK_.call(null,map__31862))?cljs.core.apply.call(null,cljs.core.hash_map,map__31862):map__31862);
var opts = map__31862__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31863 = p__31661;
var map__31863__$1 = ((cljs.core.seq_QMARK_.call(null,map__31863))?cljs.core.apply.call(null,cljs.core.hash_map,map__31863):map__31863);
var msg = map__31863__$1;
var files = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (state_31987){
var state_val_31988 = (state_31987[(1)]);
if((state_val_31988 === (7))){
var inst_31875 = (state_31987[(7)]);
var inst_31877 = (state_31987[(8)]);
var inst_31874 = (state_31987[(9)]);
var inst_31876 = (state_31987[(10)]);
var inst_31882 = cljs.core._nth.call(null,inst_31875,inst_31877);
var inst_31883 = figwheel.client.file_reloading.eval_body.call(null,inst_31882);
var inst_31884 = (inst_31877 + (1));
var tmp31989 = inst_31875;
var tmp31990 = inst_31874;
var tmp31991 = inst_31876;
var inst_31874__$1 = tmp31990;
var inst_31875__$1 = tmp31989;
var inst_31876__$1 = tmp31991;
var inst_31877__$1 = inst_31884;
var state_31987__$1 = (function (){var statearr_31992 = state_31987;
(statearr_31992[(7)] = inst_31875__$1);

(statearr_31992[(11)] = inst_31883);

(statearr_31992[(8)] = inst_31877__$1);

(statearr_31992[(9)] = inst_31874__$1);

(statearr_31992[(10)] = inst_31876__$1);

return statearr_31992;
})();
var statearr_31993_32062 = state_31987__$1;
(statearr_31993_32062[(2)] = null);

(statearr_31993_32062[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (20))){
var inst_31923 = (state_31987[(12)]);
var inst_31926 = (state_31987[(13)]);
var inst_31920 = (state_31987[(14)]);
var inst_31924 = (state_31987[(15)]);
var inst_31919 = (state_31987[(16)]);
var inst_31929 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31931 = (function (){var files_not_loaded = inst_31926;
var res = inst_31924;
var res_SINGLEQUOTE_ = inst_31923;
var files_SINGLEQUOTE_ = inst_31920;
var all_files = inst_31919;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31923,inst_31926,inst_31920,inst_31924,inst_31919,inst_31929,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (p__31930){
var map__31994 = p__31930;
var map__31994__$1 = ((cljs.core.seq_QMARK_.call(null,map__31994))?cljs.core.apply.call(null,cljs.core.hash_map,map__31994):map__31994);
var file = cljs.core.get.call(null,map__31994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31923,inst_31926,inst_31920,inst_31924,inst_31919,inst_31929,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
})();
var inst_31932 = cljs.core.map.call(null,inst_31931,inst_31924);
var inst_31933 = cljs.core.pr_str.call(null,inst_31932);
var inst_31934 = figwheel.client.utils.log.call(null,inst_31933);
var inst_31935 = (function (){var files_not_loaded = inst_31926;
var res = inst_31924;
var res_SINGLEQUOTE_ = inst_31923;
var files_SINGLEQUOTE_ = inst_31920;
var all_files = inst_31919;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31923,inst_31926,inst_31920,inst_31924,inst_31919,inst_31929,inst_31931,inst_31932,inst_31933,inst_31934,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31923,inst_31926,inst_31920,inst_31924,inst_31919,inst_31929,inst_31931,inst_31932,inst_31933,inst_31934,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
})();
var inst_31936 = setTimeout(inst_31935,(10));
var state_31987__$1 = (function (){var statearr_31995 = state_31987;
(statearr_31995[(17)] = inst_31929);

(statearr_31995[(18)] = inst_31934);

return statearr_31995;
})();
var statearr_31996_32063 = state_31987__$1;
(statearr_31996_32063[(2)] = inst_31936);

(statearr_31996_32063[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (27))){
var inst_31946 = (state_31987[(19)]);
var state_31987__$1 = state_31987;
var statearr_31997_32064 = state_31987__$1;
(statearr_31997_32064[(2)] = inst_31946);

(statearr_31997_32064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (1))){
var inst_31866 = (state_31987[(20)]);
var inst_31864 = before_jsload.call(null,files);
var inst_31865 = (function (){return ((function (inst_31866,inst_31864,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (p1__31656_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31656_SHARP_);
});
;})(inst_31866,inst_31864,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
})();
var inst_31866__$1 = cljs.core.filter.call(null,inst_31865,files);
var inst_31867 = cljs.core.not_empty.call(null,inst_31866__$1);
var state_31987__$1 = (function (){var statearr_31998 = state_31987;
(statearr_31998[(21)] = inst_31864);

(statearr_31998[(20)] = inst_31866__$1);

return statearr_31998;
})();
if(cljs.core.truth_(inst_31867)){
var statearr_31999_32065 = state_31987__$1;
(statearr_31999_32065[(1)] = (2));

} else {
var statearr_32000_32066 = state_31987__$1;
(statearr_32000_32066[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (24))){
var state_31987__$1 = state_31987;
var statearr_32001_32067 = state_31987__$1;
(statearr_32001_32067[(2)] = null);

(statearr_32001_32067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (4))){
var inst_31911 = (state_31987[(2)]);
var inst_31912 = (function (){return ((function (inst_31911,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (p1__31657_SHARP_){
var and__12761__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31657_SHARP_);
if(cljs.core.truth_(and__12761__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31657_SHARP_));
} else {
return and__12761__auto__;
}
});
;})(inst_31911,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
})();
var inst_31913 = cljs.core.filter.call(null,inst_31912,files);
var state_31987__$1 = (function (){var statearr_32002 = state_31987;
(statearr_32002[(22)] = inst_31911);

(statearr_32002[(23)] = inst_31913);

return statearr_32002;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32003_32068 = state_31987__$1;
(statearr_32003_32068[(1)] = (16));

} else {
var statearr_32004_32069 = state_31987__$1;
(statearr_32004_32069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (15))){
var inst_31901 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_32005_32070 = state_31987__$1;
(statearr_32005_32070[(2)] = inst_31901);

(statearr_32005_32070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (21))){
var state_31987__$1 = state_31987;
var statearr_32006_32071 = state_31987__$1;
(statearr_32006_32071[(2)] = null);

(statearr_32006_32071[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (31))){
var inst_31954 = (state_31987[(24)]);
var inst_31964 = (state_31987[(2)]);
var inst_31965 = cljs.core.not_empty.call(null,inst_31954);
var state_31987__$1 = (function (){var statearr_32007 = state_31987;
(statearr_32007[(25)] = inst_31964);

return statearr_32007;
})();
if(cljs.core.truth_(inst_31965)){
var statearr_32008_32072 = state_31987__$1;
(statearr_32008_32072[(1)] = (32));

} else {
var statearr_32009_32073 = state_31987__$1;
(statearr_32009_32073[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (32))){
var inst_31954 = (state_31987[(24)]);
var inst_31967 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31954);
var inst_31968 = cljs.core.pr_str.call(null,inst_31967);
var inst_31969 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31968)].join('');
var inst_31970 = figwheel.client.utils.log.call(null,inst_31969);
var state_31987__$1 = state_31987;
var statearr_32010_32074 = state_31987__$1;
(statearr_32010_32074[(2)] = inst_31970);

(statearr_32010_32074[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (33))){
var state_31987__$1 = state_31987;
var statearr_32011_32075 = state_31987__$1;
(statearr_32011_32075[(2)] = null);

(statearr_32011_32075[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (13))){
var inst_31887 = (state_31987[(26)]);
var inst_31891 = cljs.core.chunk_first.call(null,inst_31887);
var inst_31892 = cljs.core.chunk_rest.call(null,inst_31887);
var inst_31893 = cljs.core.count.call(null,inst_31891);
var inst_31874 = inst_31892;
var inst_31875 = inst_31891;
var inst_31876 = inst_31893;
var inst_31877 = (0);
var state_31987__$1 = (function (){var statearr_32012 = state_31987;
(statearr_32012[(7)] = inst_31875);

(statearr_32012[(8)] = inst_31877);

(statearr_32012[(9)] = inst_31874);

(statearr_32012[(10)] = inst_31876);

return statearr_32012;
})();
var statearr_32013_32076 = state_31987__$1;
(statearr_32013_32076[(2)] = null);

(statearr_32013_32076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (22))){
var inst_31926 = (state_31987[(13)]);
var inst_31939 = (state_31987[(2)]);
var inst_31940 = cljs.core.not_empty.call(null,inst_31926);
var state_31987__$1 = (function (){var statearr_32014 = state_31987;
(statearr_32014[(27)] = inst_31939);

return statearr_32014;
})();
if(cljs.core.truth_(inst_31940)){
var statearr_32015_32077 = state_31987__$1;
(statearr_32015_32077[(1)] = (23));

} else {
var statearr_32016_32078 = state_31987__$1;
(statearr_32016_32078[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (36))){
var state_31987__$1 = state_31987;
var statearr_32017_32079 = state_31987__$1;
(statearr_32017_32079[(2)] = null);

(statearr_32017_32079[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (29))){
var inst_31955 = (state_31987[(28)]);
var inst_31958 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31955);
var inst_31959 = cljs.core.pr_str.call(null,inst_31958);
var inst_31960 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31959)].join('');
var inst_31961 = figwheel.client.utils.log.call(null,inst_31960);
var state_31987__$1 = state_31987;
var statearr_32018_32080 = state_31987__$1;
(statearr_32018_32080[(2)] = inst_31961);

(statearr_32018_32080[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (6))){
var inst_31908 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_32019_32081 = state_31987__$1;
(statearr_32019_32081[(2)] = inst_31908);

(statearr_32019_32081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (28))){
var inst_31955 = (state_31987[(28)]);
var inst_31952 = (state_31987[(2)]);
var inst_31953 = cljs.core.get.call(null,inst_31952,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31954 = cljs.core.get.call(null,inst_31952,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31955__$1 = cljs.core.get.call(null,inst_31952,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31956 = cljs.core.not_empty.call(null,inst_31955__$1);
var state_31987__$1 = (function (){var statearr_32020 = state_31987;
(statearr_32020[(24)] = inst_31954);

(statearr_32020[(28)] = inst_31955__$1);

(statearr_32020[(29)] = inst_31953);

return statearr_32020;
})();
if(cljs.core.truth_(inst_31956)){
var statearr_32021_32082 = state_31987__$1;
(statearr_32021_32082[(1)] = (29));

} else {
var statearr_32022_32083 = state_31987__$1;
(statearr_32022_32083[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (25))){
var inst_31985 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31987__$1,inst_31985);
} else {
if((state_val_31988 === (34))){
var inst_31953 = (state_31987[(29)]);
var inst_31973 = (state_31987[(2)]);
var inst_31974 = cljs.core.not_empty.call(null,inst_31953);
var state_31987__$1 = (function (){var statearr_32023 = state_31987;
(statearr_32023[(30)] = inst_31973);

return statearr_32023;
})();
if(cljs.core.truth_(inst_31974)){
var statearr_32024_32084 = state_31987__$1;
(statearr_32024_32084[(1)] = (35));

} else {
var statearr_32025_32085 = state_31987__$1;
(statearr_32025_32085[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (17))){
var inst_31913 = (state_31987[(23)]);
var state_31987__$1 = state_31987;
var statearr_32026_32086 = state_31987__$1;
(statearr_32026_32086[(2)] = inst_31913);

(statearr_32026_32086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (3))){
var state_31987__$1 = state_31987;
var statearr_32027_32087 = state_31987__$1;
(statearr_32027_32087[(2)] = null);

(statearr_32027_32087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (12))){
var inst_31904 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_32028_32088 = state_31987__$1;
(statearr_32028_32088[(2)] = inst_31904);

(statearr_32028_32088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (2))){
var inst_31866 = (state_31987[(20)]);
var inst_31873 = cljs.core.seq.call(null,inst_31866);
var inst_31874 = inst_31873;
var inst_31875 = null;
var inst_31876 = (0);
var inst_31877 = (0);
var state_31987__$1 = (function (){var statearr_32029 = state_31987;
(statearr_32029[(7)] = inst_31875);

(statearr_32029[(8)] = inst_31877);

(statearr_32029[(9)] = inst_31874);

(statearr_32029[(10)] = inst_31876);

return statearr_32029;
})();
var statearr_32030_32089 = state_31987__$1;
(statearr_32030_32089[(2)] = null);

(statearr_32030_32089[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (23))){
var inst_31923 = (state_31987[(12)]);
var inst_31926 = (state_31987[(13)]);
var inst_31920 = (state_31987[(14)]);
var inst_31946 = (state_31987[(19)]);
var inst_31924 = (state_31987[(15)]);
var inst_31919 = (state_31987[(16)]);
var inst_31942 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31945 = (function (){var files_not_loaded = inst_31926;
var res = inst_31924;
var res_SINGLEQUOTE_ = inst_31923;
var files_SINGLEQUOTE_ = inst_31920;
var all_files = inst_31919;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31923,inst_31926,inst_31920,inst_31946,inst_31924,inst_31919,inst_31942,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (p__31944){
var map__32031 = p__31944;
var map__32031__$1 = ((cljs.core.seq_QMARK_.call(null,map__32031))?cljs.core.apply.call(null,cljs.core.hash_map,map__32031):map__32031);
var meta_data = cljs.core.get.call(null,map__32031__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31923,inst_31926,inst_31920,inst_31946,inst_31924,inst_31919,inst_31942,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
})();
var inst_31946__$1 = cljs.core.group_by.call(null,inst_31945,inst_31926);
var inst_31947 = cljs.core.seq_QMARK_.call(null,inst_31946__$1);
var state_31987__$1 = (function (){var statearr_32032 = state_31987;
(statearr_32032[(31)] = inst_31942);

(statearr_32032[(19)] = inst_31946__$1);

return statearr_32032;
})();
if(inst_31947){
var statearr_32033_32090 = state_31987__$1;
(statearr_32033_32090[(1)] = (26));

} else {
var statearr_32034_32091 = state_31987__$1;
(statearr_32034_32091[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (35))){
var inst_31953 = (state_31987[(29)]);
var inst_31976 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31953);
var inst_31977 = cljs.core.pr_str.call(null,inst_31976);
var inst_31978 = [cljs.core.str("not required: "),cljs.core.str(inst_31977)].join('');
var inst_31979 = figwheel.client.utils.log.call(null,inst_31978);
var state_31987__$1 = state_31987;
var statearr_32035_32092 = state_31987__$1;
(statearr_32035_32092[(2)] = inst_31979);

(statearr_32035_32092[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (19))){
var inst_31923 = (state_31987[(12)]);
var inst_31920 = (state_31987[(14)]);
var inst_31924 = (state_31987[(15)]);
var inst_31919 = (state_31987[(16)]);
var inst_31923__$1 = (state_31987[(2)]);
var inst_31924__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31923__$1);
var inst_31925 = (function (){var res = inst_31924__$1;
var res_SINGLEQUOTE_ = inst_31923__$1;
var files_SINGLEQUOTE_ = inst_31920;
var all_files = inst_31919;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31923,inst_31920,inst_31924,inst_31919,inst_31923__$1,inst_31924__$1,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (p1__31659_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31659_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31923,inst_31920,inst_31924,inst_31919,inst_31923__$1,inst_31924__$1,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
})();
var inst_31926 = cljs.core.filter.call(null,inst_31925,inst_31923__$1);
var inst_31927 = cljs.core.not_empty.call(null,inst_31924__$1);
var state_31987__$1 = (function (){var statearr_32036 = state_31987;
(statearr_32036[(12)] = inst_31923__$1);

(statearr_32036[(13)] = inst_31926);

(statearr_32036[(15)] = inst_31924__$1);

return statearr_32036;
})();
if(cljs.core.truth_(inst_31927)){
var statearr_32037_32093 = state_31987__$1;
(statearr_32037_32093[(1)] = (20));

} else {
var statearr_32038_32094 = state_31987__$1;
(statearr_32038_32094[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (11))){
var state_31987__$1 = state_31987;
var statearr_32039_32095 = state_31987__$1;
(statearr_32039_32095[(2)] = null);

(statearr_32039_32095[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (9))){
var inst_31906 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_32040_32096 = state_31987__$1;
(statearr_32040_32096[(2)] = inst_31906);

(statearr_32040_32096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (5))){
var inst_31877 = (state_31987[(8)]);
var inst_31876 = (state_31987[(10)]);
var inst_31879 = (inst_31877 < inst_31876);
var inst_31880 = inst_31879;
var state_31987__$1 = state_31987;
if(cljs.core.truth_(inst_31880)){
var statearr_32041_32097 = state_31987__$1;
(statearr_32041_32097[(1)] = (7));

} else {
var statearr_32042_32098 = state_31987__$1;
(statearr_32042_32098[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (14))){
var inst_31887 = (state_31987[(26)]);
var inst_31896 = cljs.core.first.call(null,inst_31887);
var inst_31897 = figwheel.client.file_reloading.eval_body.call(null,inst_31896);
var inst_31898 = cljs.core.next.call(null,inst_31887);
var inst_31874 = inst_31898;
var inst_31875 = null;
var inst_31876 = (0);
var inst_31877 = (0);
var state_31987__$1 = (function (){var statearr_32043 = state_31987;
(statearr_32043[(7)] = inst_31875);

(statearr_32043[(8)] = inst_31877);

(statearr_32043[(32)] = inst_31897);

(statearr_32043[(9)] = inst_31874);

(statearr_32043[(10)] = inst_31876);

return statearr_32043;
})();
var statearr_32044_32099 = state_31987__$1;
(statearr_32044_32099[(2)] = null);

(statearr_32044_32099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (26))){
var inst_31946 = (state_31987[(19)]);
var inst_31949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31946);
var state_31987__$1 = state_31987;
var statearr_32045_32100 = state_31987__$1;
(statearr_32045_32100[(2)] = inst_31949);

(statearr_32045_32100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (16))){
var inst_31913 = (state_31987[(23)]);
var inst_31915 = (function (){var all_files = inst_31913;
return ((function (all_files,inst_31913,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function (p1__31658_SHARP_){
return cljs.core.update_in.call(null,p1__31658_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31913,state_val_31988,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
})();
var inst_31916 = cljs.core.map.call(null,inst_31915,inst_31913);
var state_31987__$1 = state_31987;
var statearr_32046_32101 = state_31987__$1;
(statearr_32046_32101[(2)] = inst_31916);

(statearr_32046_32101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (30))){
var state_31987__$1 = state_31987;
var statearr_32047_32102 = state_31987__$1;
(statearr_32047_32102[(2)] = null);

(statearr_32047_32102[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (10))){
var inst_31887 = (state_31987[(26)]);
var inst_31889 = cljs.core.chunked_seq_QMARK_.call(null,inst_31887);
var state_31987__$1 = state_31987;
if(inst_31889){
var statearr_32048_32103 = state_31987__$1;
(statearr_32048_32103[(1)] = (13));

} else {
var statearr_32049_32104 = state_31987__$1;
(statearr_32049_32104[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (18))){
var inst_31920 = (state_31987[(14)]);
var inst_31919 = (state_31987[(16)]);
var inst_31919__$1 = (state_31987[(2)]);
var inst_31920__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31919__$1);
var inst_31921 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31920__$1);
var state_31987__$1 = (function (){var statearr_32050 = state_31987;
(statearr_32050[(14)] = inst_31920__$1);

(statearr_32050[(16)] = inst_31919__$1);

return statearr_32050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31987__$1,(19),inst_31921);
} else {
if((state_val_31988 === (37))){
var inst_31982 = (state_31987[(2)]);
var state_31987__$1 = state_31987;
var statearr_32051_32105 = state_31987__$1;
(statearr_32051_32105[(2)] = inst_31982);

(statearr_32051_32105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31988 === (8))){
var inst_31874 = (state_31987[(9)]);
var inst_31887 = (state_31987[(26)]);
var inst_31887__$1 = cljs.core.seq.call(null,inst_31874);
var state_31987__$1 = (function (){var statearr_32052 = state_31987;
(statearr_32052[(26)] = inst_31887__$1);

return statearr_32052;
})();
if(inst_31887__$1){
var statearr_32053_32106 = state_31987__$1;
(statearr_32053_32106[(1)] = (10));

} else {
var statearr_32054_32107 = state_31987__$1;
(statearr_32054_32107[(1)] = (11));

}

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
}
}
}
});})(c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
;
return ((function (switch__16122__auto__,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_32058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32058[(0)] = state_machine__16123__auto__);

(statearr_32058[(1)] = (1));

return statearr_32058;
});
var state_machine__16123__auto____1 = (function (state_31987){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_31987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e32059){if((e32059 instanceof Object)){
var ex__16126__auto__ = e32059;
var statearr_32060_32108 = state_31987;
(statearr_32060_32108[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32109 = state_31987;
state_31987 = G__32109;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_31987){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_31987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
})();
var state__16180__auto__ = (function (){var statearr_32061 = f__16179__auto__.call(null);
(statearr_32061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_32061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__,map__31862,map__31862__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31863,map__31863__$1,msg,files))
);

return c__16178__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__32112,link){
var map__32114 = p__32112;
var map__32114__$1 = ((cljs.core.seq_QMARK_.call(null,map__32114))?cljs.core.apply.call(null,cljs.core.hash_map,map__32114):map__32114);
var file = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__32114,map__32114__$1,file){
return (function (p1__32110_SHARP_,p2__32111_SHARP_){
if(cljs.core._EQ_.call(null,p1__32110_SHARP_,p2__32111_SHARP_)){
return p1__32110_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__32114,map__32114__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32118){
var map__32119 = p__32118;
var map__32119__$1 = ((cljs.core.seq_QMARK_.call(null,map__32119))?cljs.core.apply.call(null,cljs.core.hash_map,map__32119):map__32119);
var current_url_length = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32115_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32115_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__32120){
var map__32122 = p__32120;
var map__32122__$1 = ((cljs.core.seq_QMARK_.call(null,map__32122))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);
var f_data = map__32122__$1;
var request_url = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__12773__auto__ = request_url;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__32123,files_msg){
var map__32145 = p__32123;
var map__32145__$1 = ((cljs.core.seq_QMARK_.call(null,map__32145))?cljs.core.apply.call(null,cljs.core.hash_map,map__32145):map__32145);
var opts = map__32145__$1;
var on_cssload = cljs.core.get.call(null,map__32145__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32146_32166 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32147_32167 = null;
var count__32148_32168 = (0);
var i__32149_32169 = (0);
while(true){
if((i__32149_32169 < count__32148_32168)){
var f_32170 = cljs.core._nth.call(null,chunk__32147_32167,i__32149_32169);
figwheel.client.file_reloading.reload_css_file.call(null,f_32170);

var G__32171 = seq__32146_32166;
var G__32172 = chunk__32147_32167;
var G__32173 = count__32148_32168;
var G__32174 = (i__32149_32169 + (1));
seq__32146_32166 = G__32171;
chunk__32147_32167 = G__32172;
count__32148_32168 = G__32173;
i__32149_32169 = G__32174;
continue;
} else {
var temp__4126__auto___32175 = cljs.core.seq.call(null,seq__32146_32166);
if(temp__4126__auto___32175){
var seq__32146_32176__$1 = temp__4126__auto___32175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32146_32176__$1)){
var c__13560__auto___32177 = cljs.core.chunk_first.call(null,seq__32146_32176__$1);
var G__32178 = cljs.core.chunk_rest.call(null,seq__32146_32176__$1);
var G__32179 = c__13560__auto___32177;
var G__32180 = cljs.core.count.call(null,c__13560__auto___32177);
var G__32181 = (0);
seq__32146_32166 = G__32178;
chunk__32147_32167 = G__32179;
count__32148_32168 = G__32180;
i__32149_32169 = G__32181;
continue;
} else {
var f_32182 = cljs.core.first.call(null,seq__32146_32176__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32182);

var G__32183 = cljs.core.next.call(null,seq__32146_32176__$1);
var G__32184 = null;
var G__32185 = (0);
var G__32186 = (0);
seq__32146_32166 = G__32183;
chunk__32147_32167 = G__32184;
count__32148_32168 = G__32185;
i__32149_32169 = G__32186;
continue;
}
} else {
}
}
break;
}

var c__16178__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16178__auto__,map__32145,map__32145__$1,opts,on_cssload){
return (function (){
var f__16179__auto__ = (function (){var switch__16122__auto__ = ((function (c__16178__auto__,map__32145,map__32145__$1,opts,on_cssload){
return (function (state_32156){
var state_val_32157 = (state_32156[(1)]);
if((state_val_32157 === (2))){
var inst_32152 = (state_32156[(2)]);
var inst_32153 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32154 = on_cssload.call(null,inst_32153);
var state_32156__$1 = (function (){var statearr_32158 = state_32156;
(statearr_32158[(7)] = inst_32152);

return statearr_32158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32156__$1,inst_32154);
} else {
if((state_val_32157 === (1))){
var inst_32150 = cljs.core.async.timeout.call(null,(100));
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32156__$1,(2),inst_32150);
} else {
return null;
}
}
});})(c__16178__auto__,map__32145,map__32145__$1,opts,on_cssload))
;
return ((function (switch__16122__auto__,c__16178__auto__,map__32145,map__32145__$1,opts,on_cssload){
return (function() {
var state_machine__16123__auto__ = null;
var state_machine__16123__auto____0 = (function (){
var statearr_32162 = [null,null,null,null,null,null,null,null];
(statearr_32162[(0)] = state_machine__16123__auto__);

(statearr_32162[(1)] = (1));

return statearr_32162;
});
var state_machine__16123__auto____1 = (function (state_32156){
while(true){
var ret_value__16124__auto__ = (function (){try{while(true){
var result__16125__auto__ = switch__16122__auto__.call(null,state_32156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16125__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16125__auto__;
}
break;
}
}catch (e32163){if((e32163 instanceof Object)){
var ex__16126__auto__ = e32163;
var statearr_32164_32187 = state_32156;
(statearr_32164_32187[(5)] = ex__16126__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16124__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32188 = state_32156;
state_32156 = G__32188;
continue;
} else {
return ret_value__16124__auto__;
}
break;
}
});
state_machine__16123__auto__ = function(state_32156){
switch(arguments.length){
case 0:
return state_machine__16123__auto____0.call(this);
case 1:
return state_machine__16123__auto____1.call(this,state_32156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16123__auto____0;
state_machine__16123__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16123__auto____1;
return state_machine__16123__auto__;
})()
;})(switch__16122__auto__,c__16178__auto__,map__32145,map__32145__$1,opts,on_cssload))
})();
var state__16180__auto__ = (function (){var statearr_32165 = f__16179__auto__.call(null);
(statearr_32165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16178__auto__);

return statearr_32165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16180__auto__);
});})(c__16178__auto__,map__32145,map__32145__$1,opts,on_cssload))
);

return c__16178__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1429705622535