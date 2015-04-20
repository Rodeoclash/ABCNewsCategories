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
return cljs.core.reduce.call(null,(function (p1__30534_SHARP_,p2__30535_SHARP_){
var and__12761__auto__ = p1__30534_SHARP_;
if(cljs.core.truth_(and__12761__auto__)){
return p2__30535_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30537_SHARP_,p2__30536_SHARP_){
return [cljs.core.str(p2__30536_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30538){
var map__30539 = p__30538;
var map__30539__$1 = ((cljs.core.seq_QMARK_.call(null,map__30539))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);
var file = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30540){
var map__30541 = p__30540;
var map__30541__$1 = ((cljs.core.seq_QMARK_.call(null,map__30541))?cljs.core.apply.call(null,cljs.core.hash_map,map__30541):map__30541);
var namespace = cljs.core.get.call(null,map__30541__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e30542){if((e30542 instanceof Error)){
var e = e30542;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30542;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__30543,callback){
var map__30545 = p__30543;
var map__30545__$1 = ((cljs.core.seq_QMARK_.call(null,map__30545))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545):map__30545);
var file_msg = map__30545__$1;
var request_url = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30545,map__30545__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30545,map__30545__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__30546){
var map__30548 = p__30546;
var map__30548__$1 = ((cljs.core.seq_QMARK_.call(null,map__30548))?cljs.core.apply.call(null,cljs.core.hash_map,map__30548):map__30548);
var file_msg = map__30548__$1;
var meta_data = cljs.core.get.call(null,map__30548__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__30548__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__30549,callback){
var map__30551 = p__30549;
var map__30551__$1 = ((cljs.core.seq_QMARK_.call(null,map__30551))?cljs.core.apply.call(null,cljs.core.hash_map,map__30551):map__30551);
var file_msg = map__30551__$1;
var namespace = cljs.core.get.call(null,map__30551__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30551__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__15442__auto___30638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto___30638,out){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto___30638,out){
return (function (state_30620){
var state_val_30621 = (state_30620[(1)]);
if((state_val_30621 === (7))){
var inst_30604 = (state_30620[(7)]);
var inst_30610 = (state_30620[(2)]);
var inst_30611 = cljs.core.async.put_BANG_.call(null,out,inst_30610);
var inst_30600 = inst_30604;
var state_30620__$1 = (function (){var statearr_30622 = state_30620;
(statearr_30622[(8)] = inst_30600);

(statearr_30622[(9)] = inst_30611);

return statearr_30622;
})();
var statearr_30623_30639 = state_30620__$1;
(statearr_30623_30639[(2)] = null);

(statearr_30623_30639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (6))){
var inst_30616 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
var statearr_30624_30640 = state_30620__$1;
(statearr_30624_30640[(2)] = inst_30616);

(statearr_30624_30640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (5))){
var inst_30614 = cljs.core.async.close_BANG_.call(null,out);
var state_30620__$1 = state_30620;
var statearr_30625_30641 = state_30620__$1;
(statearr_30625_30641[(2)] = inst_30614);

(statearr_30625_30641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (4))){
var inst_30603 = (state_30620[(10)]);
var inst_30608 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30603);
var state_30620__$1 = state_30620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30620__$1,(7),inst_30608);
} else {
if((state_val_30621 === (3))){
var inst_30618 = (state_30620[(2)]);
var state_30620__$1 = state_30620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30620__$1,inst_30618);
} else {
if((state_val_30621 === (2))){
var inst_30603 = (state_30620[(10)]);
var inst_30600 = (state_30620[(8)]);
var inst_30603__$1 = cljs.core.nth.call(null,inst_30600,(0),null);
var inst_30604 = cljs.core.nthnext.call(null,inst_30600,(1));
var inst_30605 = (inst_30603__$1 == null);
var inst_30606 = cljs.core.not.call(null,inst_30605);
var state_30620__$1 = (function (){var statearr_30626 = state_30620;
(statearr_30626[(7)] = inst_30604);

(statearr_30626[(10)] = inst_30603__$1);

return statearr_30626;
})();
if(inst_30606){
var statearr_30627_30642 = state_30620__$1;
(statearr_30627_30642[(1)] = (4));

} else {
var statearr_30628_30643 = state_30620__$1;
(statearr_30628_30643[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30621 === (1))){
var inst_30598 = cljs.core.nth.call(null,files,(0),null);
var inst_30599 = cljs.core.nthnext.call(null,files,(1));
var inst_30600 = files;
var state_30620__$1 = (function (){var statearr_30629 = state_30620;
(statearr_30629[(11)] = inst_30598);

(statearr_30629[(12)] = inst_30599);

(statearr_30629[(8)] = inst_30600);

return statearr_30629;
})();
var statearr_30630_30644 = state_30620__$1;
(statearr_30630_30644[(2)] = null);

(statearr_30630_30644[(1)] = (2));


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
});})(c__15442__auto___30638,out))
;
return ((function (switch__15386__auto__,c__15442__auto___30638,out){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_30634 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30634[(0)] = state_machine__15387__auto__);

(statearr_30634[(1)] = (1));

return statearr_30634;
});
var state_machine__15387__auto____1 = (function (state_30620){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_30620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e30635){if((e30635 instanceof Object)){
var ex__15390__auto__ = e30635;
var statearr_30636_30645 = state_30620;
(statearr_30636_30645[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30646 = state_30620;
state_30620 = G__30646;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_30620){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_30620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto___30638,out))
})();
var state__15444__auto__ = (function (){var statearr_30637 = f__15443__auto__.call(null);
(statearr_30637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto___30638);

return statearr_30637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto___30638,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__30647,p__30648){
var map__30651 = p__30647;
var map__30651__$1 = ((cljs.core.seq_QMARK_.call(null,map__30651))?cljs.core.apply.call(null,cljs.core.hash_map,map__30651):map__30651);
var opts = map__30651__$1;
var url_rewriter = cljs.core.get.call(null,map__30651__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30652 = p__30648;
var map__30652__$1 = ((cljs.core.seq_QMARK_.call(null,map__30652))?cljs.core.apply.call(null,cljs.core.hash_map,map__30652):map__30652);
var file_msg = map__30652__$1;
var file = cljs.core.get.call(null,map__30652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__30653){
var map__30656 = p__30653;
var map__30656__$1 = ((cljs.core.seq_QMARK_.call(null,map__30656))?cljs.core.apply.call(null,cljs.core.hash_map,map__30656):map__30656);
var file = cljs.core.get.call(null,map__30656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__30656__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e30657){var e = e30657;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__30662,p__30663){
var map__30864 = p__30662;
var map__30864__$1 = ((cljs.core.seq_QMARK_.call(null,map__30864))?cljs.core.apply.call(null,cljs.core.hash_map,map__30864):map__30864);
var opts = map__30864__$1;
var load_unchanged_files = cljs.core.get.call(null,map__30864__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__30864__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30864__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30865 = p__30663;
var map__30865__$1 = ((cljs.core.seq_QMARK_.call(null,map__30865))?cljs.core.apply.call(null,cljs.core.hash_map,map__30865):map__30865);
var msg = map__30865__$1;
var files = cljs.core.get.call(null,map__30865__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (state_30989){
var state_val_30990 = (state_30989[(1)]);
if((state_val_30990 === (7))){
var inst_30879 = (state_30989[(7)]);
var inst_30876 = (state_30989[(8)]);
var inst_30878 = (state_30989[(9)]);
var inst_30877 = (state_30989[(10)]);
var inst_30884 = cljs.core._nth.call(null,inst_30877,inst_30879);
var inst_30885 = figwheel.client.file_reloading.eval_body.call(null,inst_30884);
var inst_30886 = (inst_30879 + (1));
var tmp30991 = inst_30876;
var tmp30992 = inst_30878;
var tmp30993 = inst_30877;
var inst_30876__$1 = tmp30991;
var inst_30877__$1 = tmp30993;
var inst_30878__$1 = tmp30992;
var inst_30879__$1 = inst_30886;
var state_30989__$1 = (function (){var statearr_30994 = state_30989;
(statearr_30994[(7)] = inst_30879__$1);

(statearr_30994[(8)] = inst_30876__$1);

(statearr_30994[(9)] = inst_30878__$1);

(statearr_30994[(11)] = inst_30885);

(statearr_30994[(10)] = inst_30877__$1);

return statearr_30994;
})();
var statearr_30995_31064 = state_30989__$1;
(statearr_30995_31064[(2)] = null);

(statearr_30995_31064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (20))){
var inst_30921 = (state_30989[(12)]);
var inst_30922 = (state_30989[(13)]);
var inst_30925 = (state_30989[(14)]);
var inst_30928 = (state_30989[(15)]);
var inst_30926 = (state_30989[(16)]);
var inst_30931 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30933 = (function (){var files_not_loaded = inst_30928;
var res = inst_30926;
var res_SINGLEQUOTE_ = inst_30925;
var files_SINGLEQUOTE_ = inst_30922;
var all_files = inst_30921;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30921,inst_30922,inst_30925,inst_30928,inst_30926,inst_30931,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (p__30932){
var map__30996 = p__30932;
var map__30996__$1 = ((cljs.core.seq_QMARK_.call(null,map__30996))?cljs.core.apply.call(null,cljs.core.hash_map,map__30996):map__30996);
var file = cljs.core.get.call(null,map__30996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__30996__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30921,inst_30922,inst_30925,inst_30928,inst_30926,inst_30931,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
})();
var inst_30934 = cljs.core.map.call(null,inst_30933,inst_30926);
var inst_30935 = cljs.core.pr_str.call(null,inst_30934);
var inst_30936 = figwheel.client.utils.log.call(null,inst_30935);
var inst_30937 = (function (){var files_not_loaded = inst_30928;
var res = inst_30926;
var res_SINGLEQUOTE_ = inst_30925;
var files_SINGLEQUOTE_ = inst_30922;
var all_files = inst_30921;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30921,inst_30922,inst_30925,inst_30928,inst_30926,inst_30931,inst_30933,inst_30934,inst_30935,inst_30936,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30921,inst_30922,inst_30925,inst_30928,inst_30926,inst_30931,inst_30933,inst_30934,inst_30935,inst_30936,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
})();
var inst_30938 = setTimeout(inst_30937,(10));
var state_30989__$1 = (function (){var statearr_30997 = state_30989;
(statearr_30997[(17)] = inst_30931);

(statearr_30997[(18)] = inst_30936);

return statearr_30997;
})();
var statearr_30998_31065 = state_30989__$1;
(statearr_30998_31065[(2)] = inst_30938);

(statearr_30998_31065[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (27))){
var inst_30948 = (state_30989[(19)]);
var state_30989__$1 = state_30989;
var statearr_30999_31066 = state_30989__$1;
(statearr_30999_31066[(2)] = inst_30948);

(statearr_30999_31066[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (1))){
var inst_30868 = (state_30989[(20)]);
var inst_30866 = before_jsload.call(null,files);
var inst_30867 = (function (){return ((function (inst_30868,inst_30866,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (p1__30658_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30658_SHARP_);
});
;})(inst_30868,inst_30866,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
})();
var inst_30868__$1 = cljs.core.filter.call(null,inst_30867,files);
var inst_30869 = cljs.core.not_empty.call(null,inst_30868__$1);
var state_30989__$1 = (function (){var statearr_31000 = state_30989;
(statearr_31000[(21)] = inst_30866);

(statearr_31000[(20)] = inst_30868__$1);

return statearr_31000;
})();
if(cljs.core.truth_(inst_30869)){
var statearr_31001_31067 = state_30989__$1;
(statearr_31001_31067[(1)] = (2));

} else {
var statearr_31002_31068 = state_30989__$1;
(statearr_31002_31068[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (24))){
var state_30989__$1 = state_30989;
var statearr_31003_31069 = state_30989__$1;
(statearr_31003_31069[(2)] = null);

(statearr_31003_31069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (4))){
var inst_30913 = (state_30989[(2)]);
var inst_30914 = (function (){return ((function (inst_30913,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (p1__30659_SHARP_){
var and__12761__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30659_SHARP_);
if(cljs.core.truth_(and__12761__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30659_SHARP_));
} else {
return and__12761__auto__;
}
});
;})(inst_30913,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
})();
var inst_30915 = cljs.core.filter.call(null,inst_30914,files);
var state_30989__$1 = (function (){var statearr_31004 = state_30989;
(statearr_31004[(22)] = inst_30915);

(statearr_31004[(23)] = inst_30913);

return statearr_31004;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31005_31070 = state_30989__$1;
(statearr_31005_31070[(1)] = (16));

} else {
var statearr_31006_31071 = state_30989__$1;
(statearr_31006_31071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (15))){
var inst_30903 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31007_31072 = state_30989__$1;
(statearr_31007_31072[(2)] = inst_30903);

(statearr_31007_31072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (21))){
var state_30989__$1 = state_30989;
var statearr_31008_31073 = state_30989__$1;
(statearr_31008_31073[(2)] = null);

(statearr_31008_31073[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (31))){
var inst_30956 = (state_30989[(24)]);
var inst_30966 = (state_30989[(2)]);
var inst_30967 = cljs.core.not_empty.call(null,inst_30956);
var state_30989__$1 = (function (){var statearr_31009 = state_30989;
(statearr_31009[(25)] = inst_30966);

return statearr_31009;
})();
if(cljs.core.truth_(inst_30967)){
var statearr_31010_31074 = state_30989__$1;
(statearr_31010_31074[(1)] = (32));

} else {
var statearr_31011_31075 = state_30989__$1;
(statearr_31011_31075[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (32))){
var inst_30956 = (state_30989[(24)]);
var inst_30969 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30956);
var inst_30970 = cljs.core.pr_str.call(null,inst_30969);
var inst_30971 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_30970)].join('');
var inst_30972 = figwheel.client.utils.log.call(null,inst_30971);
var state_30989__$1 = state_30989;
var statearr_31012_31076 = state_30989__$1;
(statearr_31012_31076[(2)] = inst_30972);

(statearr_31012_31076[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (33))){
var state_30989__$1 = state_30989;
var statearr_31013_31077 = state_30989__$1;
(statearr_31013_31077[(2)] = null);

(statearr_31013_31077[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (13))){
var inst_30889 = (state_30989[(26)]);
var inst_30893 = cljs.core.chunk_first.call(null,inst_30889);
var inst_30894 = cljs.core.chunk_rest.call(null,inst_30889);
var inst_30895 = cljs.core.count.call(null,inst_30893);
var inst_30876 = inst_30894;
var inst_30877 = inst_30893;
var inst_30878 = inst_30895;
var inst_30879 = (0);
var state_30989__$1 = (function (){var statearr_31014 = state_30989;
(statearr_31014[(7)] = inst_30879);

(statearr_31014[(8)] = inst_30876);

(statearr_31014[(9)] = inst_30878);

(statearr_31014[(10)] = inst_30877);

return statearr_31014;
})();
var statearr_31015_31078 = state_30989__$1;
(statearr_31015_31078[(2)] = null);

(statearr_31015_31078[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (22))){
var inst_30928 = (state_30989[(15)]);
var inst_30941 = (state_30989[(2)]);
var inst_30942 = cljs.core.not_empty.call(null,inst_30928);
var state_30989__$1 = (function (){var statearr_31016 = state_30989;
(statearr_31016[(27)] = inst_30941);

return statearr_31016;
})();
if(cljs.core.truth_(inst_30942)){
var statearr_31017_31079 = state_30989__$1;
(statearr_31017_31079[(1)] = (23));

} else {
var statearr_31018_31080 = state_30989__$1;
(statearr_31018_31080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (36))){
var state_30989__$1 = state_30989;
var statearr_31019_31081 = state_30989__$1;
(statearr_31019_31081[(2)] = null);

(statearr_31019_31081[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (29))){
var inst_30957 = (state_30989[(28)]);
var inst_30960 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30957);
var inst_30961 = cljs.core.pr_str.call(null,inst_30960);
var inst_30962 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30961)].join('');
var inst_30963 = figwheel.client.utils.log.call(null,inst_30962);
var state_30989__$1 = state_30989;
var statearr_31020_31082 = state_30989__$1;
(statearr_31020_31082[(2)] = inst_30963);

(statearr_31020_31082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (6))){
var inst_30910 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31021_31083 = state_30989__$1;
(statearr_31021_31083[(2)] = inst_30910);

(statearr_31021_31083[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (28))){
var inst_30957 = (state_30989[(28)]);
var inst_30954 = (state_30989[(2)]);
var inst_30955 = cljs.core.get.call(null,inst_30954,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30956 = cljs.core.get.call(null,inst_30954,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_30957__$1 = cljs.core.get.call(null,inst_30954,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30958 = cljs.core.not_empty.call(null,inst_30957__$1);
var state_30989__$1 = (function (){var statearr_31022 = state_30989;
(statearr_31022[(28)] = inst_30957__$1);

(statearr_31022[(24)] = inst_30956);

(statearr_31022[(29)] = inst_30955);

return statearr_31022;
})();
if(cljs.core.truth_(inst_30958)){
var statearr_31023_31084 = state_30989__$1;
(statearr_31023_31084[(1)] = (29));

} else {
var statearr_31024_31085 = state_30989__$1;
(statearr_31024_31085[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (25))){
var inst_30987 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30989__$1,inst_30987);
} else {
if((state_val_30990 === (34))){
var inst_30955 = (state_30989[(29)]);
var inst_30975 = (state_30989[(2)]);
var inst_30976 = cljs.core.not_empty.call(null,inst_30955);
var state_30989__$1 = (function (){var statearr_31025 = state_30989;
(statearr_31025[(30)] = inst_30975);

return statearr_31025;
})();
if(cljs.core.truth_(inst_30976)){
var statearr_31026_31086 = state_30989__$1;
(statearr_31026_31086[(1)] = (35));

} else {
var statearr_31027_31087 = state_30989__$1;
(statearr_31027_31087[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (17))){
var inst_30915 = (state_30989[(22)]);
var state_30989__$1 = state_30989;
var statearr_31028_31088 = state_30989__$1;
(statearr_31028_31088[(2)] = inst_30915);

(statearr_31028_31088[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (3))){
var state_30989__$1 = state_30989;
var statearr_31029_31089 = state_30989__$1;
(statearr_31029_31089[(2)] = null);

(statearr_31029_31089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (12))){
var inst_30906 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31030_31090 = state_30989__$1;
(statearr_31030_31090[(2)] = inst_30906);

(statearr_31030_31090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (2))){
var inst_30868 = (state_30989[(20)]);
var inst_30875 = cljs.core.seq.call(null,inst_30868);
var inst_30876 = inst_30875;
var inst_30877 = null;
var inst_30878 = (0);
var inst_30879 = (0);
var state_30989__$1 = (function (){var statearr_31031 = state_30989;
(statearr_31031[(7)] = inst_30879);

(statearr_31031[(8)] = inst_30876);

(statearr_31031[(9)] = inst_30878);

(statearr_31031[(10)] = inst_30877);

return statearr_31031;
})();
var statearr_31032_31091 = state_30989__$1;
(statearr_31032_31091[(2)] = null);

(statearr_31032_31091[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (23))){
var inst_30921 = (state_30989[(12)]);
var inst_30922 = (state_30989[(13)]);
var inst_30925 = (state_30989[(14)]);
var inst_30928 = (state_30989[(15)]);
var inst_30926 = (state_30989[(16)]);
var inst_30948 = (state_30989[(19)]);
var inst_30944 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30947 = (function (){var files_not_loaded = inst_30928;
var res = inst_30926;
var res_SINGLEQUOTE_ = inst_30925;
var files_SINGLEQUOTE_ = inst_30922;
var all_files = inst_30921;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30921,inst_30922,inst_30925,inst_30928,inst_30926,inst_30948,inst_30944,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (p__30946){
var map__31033 = p__30946;
var map__31033__$1 = ((cljs.core.seq_QMARK_.call(null,map__31033))?cljs.core.apply.call(null,cljs.core.hash_map,map__31033):map__31033);
var meta_data = cljs.core.get.call(null,map__31033__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30921,inst_30922,inst_30925,inst_30928,inst_30926,inst_30948,inst_30944,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
})();
var inst_30948__$1 = cljs.core.group_by.call(null,inst_30947,inst_30928);
var inst_30949 = cljs.core.seq_QMARK_.call(null,inst_30948__$1);
var state_30989__$1 = (function (){var statearr_31034 = state_30989;
(statearr_31034[(31)] = inst_30944);

(statearr_31034[(19)] = inst_30948__$1);

return statearr_31034;
})();
if(inst_30949){
var statearr_31035_31092 = state_30989__$1;
(statearr_31035_31092[(1)] = (26));

} else {
var statearr_31036_31093 = state_30989__$1;
(statearr_31036_31093[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (35))){
var inst_30955 = (state_30989[(29)]);
var inst_30978 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30955);
var inst_30979 = cljs.core.pr_str.call(null,inst_30978);
var inst_30980 = [cljs.core.str("not required: "),cljs.core.str(inst_30979)].join('');
var inst_30981 = figwheel.client.utils.log.call(null,inst_30980);
var state_30989__$1 = state_30989;
var statearr_31037_31094 = state_30989__$1;
(statearr_31037_31094[(2)] = inst_30981);

(statearr_31037_31094[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (19))){
var inst_30921 = (state_30989[(12)]);
var inst_30922 = (state_30989[(13)]);
var inst_30925 = (state_30989[(14)]);
var inst_30926 = (state_30989[(16)]);
var inst_30925__$1 = (state_30989[(2)]);
var inst_30926__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30925__$1);
var inst_30927 = (function (){var res = inst_30926__$1;
var res_SINGLEQUOTE_ = inst_30925__$1;
var files_SINGLEQUOTE_ = inst_30922;
var all_files = inst_30921;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30921,inst_30922,inst_30925,inst_30926,inst_30925__$1,inst_30926__$1,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (p1__30661_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30661_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_30921,inst_30922,inst_30925,inst_30926,inst_30925__$1,inst_30926__$1,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
})();
var inst_30928 = cljs.core.filter.call(null,inst_30927,inst_30925__$1);
var inst_30929 = cljs.core.not_empty.call(null,inst_30926__$1);
var state_30989__$1 = (function (){var statearr_31038 = state_30989;
(statearr_31038[(14)] = inst_30925__$1);

(statearr_31038[(15)] = inst_30928);

(statearr_31038[(16)] = inst_30926__$1);

return statearr_31038;
})();
if(cljs.core.truth_(inst_30929)){
var statearr_31039_31095 = state_30989__$1;
(statearr_31039_31095[(1)] = (20));

} else {
var statearr_31040_31096 = state_30989__$1;
(statearr_31040_31096[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (11))){
var state_30989__$1 = state_30989;
var statearr_31041_31097 = state_30989__$1;
(statearr_31041_31097[(2)] = null);

(statearr_31041_31097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (9))){
var inst_30908 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31042_31098 = state_30989__$1;
(statearr_31042_31098[(2)] = inst_30908);

(statearr_31042_31098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (5))){
var inst_30879 = (state_30989[(7)]);
var inst_30878 = (state_30989[(9)]);
var inst_30881 = (inst_30879 < inst_30878);
var inst_30882 = inst_30881;
var state_30989__$1 = state_30989;
if(cljs.core.truth_(inst_30882)){
var statearr_31043_31099 = state_30989__$1;
(statearr_31043_31099[(1)] = (7));

} else {
var statearr_31044_31100 = state_30989__$1;
(statearr_31044_31100[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (14))){
var inst_30889 = (state_30989[(26)]);
var inst_30898 = cljs.core.first.call(null,inst_30889);
var inst_30899 = figwheel.client.file_reloading.eval_body.call(null,inst_30898);
var inst_30900 = cljs.core.next.call(null,inst_30889);
var inst_30876 = inst_30900;
var inst_30877 = null;
var inst_30878 = (0);
var inst_30879 = (0);
var state_30989__$1 = (function (){var statearr_31045 = state_30989;
(statearr_31045[(7)] = inst_30879);

(statearr_31045[(8)] = inst_30876);

(statearr_31045[(9)] = inst_30878);

(statearr_31045[(32)] = inst_30899);

(statearr_31045[(10)] = inst_30877);

return statearr_31045;
})();
var statearr_31046_31101 = state_30989__$1;
(statearr_31046_31101[(2)] = null);

(statearr_31046_31101[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (26))){
var inst_30948 = (state_30989[(19)]);
var inst_30951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30948);
var state_30989__$1 = state_30989;
var statearr_31047_31102 = state_30989__$1;
(statearr_31047_31102[(2)] = inst_30951);

(statearr_31047_31102[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (16))){
var inst_30915 = (state_30989[(22)]);
var inst_30917 = (function (){var all_files = inst_30915;
return ((function (all_files,inst_30915,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function (p1__30660_SHARP_){
return cljs.core.update_in.call(null,p1__30660_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_30915,state_val_30990,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
})();
var inst_30918 = cljs.core.map.call(null,inst_30917,inst_30915);
var state_30989__$1 = state_30989;
var statearr_31048_31103 = state_30989__$1;
(statearr_31048_31103[(2)] = inst_30918);

(statearr_31048_31103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (30))){
var state_30989__$1 = state_30989;
var statearr_31049_31104 = state_30989__$1;
(statearr_31049_31104[(2)] = null);

(statearr_31049_31104[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (10))){
var inst_30889 = (state_30989[(26)]);
var inst_30891 = cljs.core.chunked_seq_QMARK_.call(null,inst_30889);
var state_30989__$1 = state_30989;
if(inst_30891){
var statearr_31050_31105 = state_30989__$1;
(statearr_31050_31105[(1)] = (13));

} else {
var statearr_31051_31106 = state_30989__$1;
(statearr_31051_31106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (18))){
var inst_30921 = (state_30989[(12)]);
var inst_30922 = (state_30989[(13)]);
var inst_30921__$1 = (state_30989[(2)]);
var inst_30922__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_30921__$1);
var inst_30923 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30922__$1);
var state_30989__$1 = (function (){var statearr_31052 = state_30989;
(statearr_31052[(12)] = inst_30921__$1);

(statearr_31052[(13)] = inst_30922__$1);

return statearr_31052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30989__$1,(19),inst_30923);
} else {
if((state_val_30990 === (37))){
var inst_30984 = (state_30989[(2)]);
var state_30989__$1 = state_30989;
var statearr_31053_31107 = state_30989__$1;
(statearr_31053_31107[(2)] = inst_30984);

(statearr_31053_31107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30990 === (8))){
var inst_30889 = (state_30989[(26)]);
var inst_30876 = (state_30989[(8)]);
var inst_30889__$1 = cljs.core.seq.call(null,inst_30876);
var state_30989__$1 = (function (){var statearr_31054 = state_30989;
(statearr_31054[(26)] = inst_30889__$1);

return statearr_31054;
})();
if(inst_30889__$1){
var statearr_31055_31108 = state_30989__$1;
(statearr_31055_31108[(1)] = (10));

} else {
var statearr_31056_31109 = state_30989__$1;
(statearr_31056_31109[(1)] = (11));

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
});})(c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
;
return ((function (switch__15386__auto__,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_31060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31060[(0)] = state_machine__15387__auto__);

(statearr_31060[(1)] = (1));

return statearr_31060;
});
var state_machine__15387__auto____1 = (function (state_30989){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_30989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e31061){if((e31061 instanceof Object)){
var ex__15390__auto__ = e31061;
var statearr_31062_31110 = state_30989;
(statearr_31062_31110[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31111 = state_30989;
state_30989 = G__31111;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_30989){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_30989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
})();
var state__15444__auto__ = (function (){var statearr_31063 = f__15443__auto__.call(null);
(statearr_31063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_31063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__,map__30864,map__30864__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30865,map__30865__$1,msg,files))
);

return c__15442__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31114,link){
var map__31116 = p__31114;
var map__31116__$1 = ((cljs.core.seq_QMARK_.call(null,map__31116))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116):map__31116);
var file = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31116,map__31116__$1,file){
return (function (p1__31112_SHARP_,p2__31113_SHARP_){
if(cljs.core._EQ_.call(null,p1__31112_SHARP_,p2__31113_SHARP_)){
return p1__31112_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31116,map__31116__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31120){
var map__31121 = p__31120;
var map__31121__$1 = ((cljs.core.seq_QMARK_.call(null,map__31121))?cljs.core.apply.call(null,cljs.core.hash_map,map__31121):map__31121);
var current_url_length = cljs.core.get.call(null,map__31121__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31121__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31117_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31117_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31122){
var map__31124 = p__31122;
var map__31124__$1 = ((cljs.core.seq_QMARK_.call(null,map__31124))?cljs.core.apply.call(null,cljs.core.hash_map,map__31124):map__31124);
var f_data = map__31124__$1;
var request_url = cljs.core.get.call(null,map__31124__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31124__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31125,files_msg){
var map__31147 = p__31125;
var map__31147__$1 = ((cljs.core.seq_QMARK_.call(null,map__31147))?cljs.core.apply.call(null,cljs.core.hash_map,map__31147):map__31147);
var opts = map__31147__$1;
var on_cssload = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31148_31168 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31149_31169 = null;
var count__31150_31170 = (0);
var i__31151_31171 = (0);
while(true){
if((i__31151_31171 < count__31150_31170)){
var f_31172 = cljs.core._nth.call(null,chunk__31149_31169,i__31151_31171);
figwheel.client.file_reloading.reload_css_file.call(null,f_31172);

var G__31173 = seq__31148_31168;
var G__31174 = chunk__31149_31169;
var G__31175 = count__31150_31170;
var G__31176 = (i__31151_31171 + (1));
seq__31148_31168 = G__31173;
chunk__31149_31169 = G__31174;
count__31150_31170 = G__31175;
i__31151_31171 = G__31176;
continue;
} else {
var temp__4126__auto___31177 = cljs.core.seq.call(null,seq__31148_31168);
if(temp__4126__auto___31177){
var seq__31148_31178__$1 = temp__4126__auto___31177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31148_31178__$1)){
var c__13560__auto___31179 = cljs.core.chunk_first.call(null,seq__31148_31178__$1);
var G__31180 = cljs.core.chunk_rest.call(null,seq__31148_31178__$1);
var G__31181 = c__13560__auto___31179;
var G__31182 = cljs.core.count.call(null,c__13560__auto___31179);
var G__31183 = (0);
seq__31148_31168 = G__31180;
chunk__31149_31169 = G__31181;
count__31150_31170 = G__31182;
i__31151_31171 = G__31183;
continue;
} else {
var f_31184 = cljs.core.first.call(null,seq__31148_31178__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31184);

var G__31185 = cljs.core.next.call(null,seq__31148_31178__$1);
var G__31186 = null;
var G__31187 = (0);
var G__31188 = (0);
seq__31148_31168 = G__31185;
chunk__31149_31169 = G__31186;
count__31150_31170 = G__31187;
i__31151_31171 = G__31188;
continue;
}
} else {
}
}
break;
}

var c__15442__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15442__auto__,map__31147,map__31147__$1,opts,on_cssload){
return (function (){
var f__15443__auto__ = (function (){var switch__15386__auto__ = ((function (c__15442__auto__,map__31147,map__31147__$1,opts,on_cssload){
return (function (state_31158){
var state_val_31159 = (state_31158[(1)]);
if((state_val_31159 === (2))){
var inst_31154 = (state_31158[(2)]);
var inst_31155 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31156 = on_cssload.call(null,inst_31155);
var state_31158__$1 = (function (){var statearr_31160 = state_31158;
(statearr_31160[(7)] = inst_31154);

return statearr_31160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31158__$1,inst_31156);
} else {
if((state_val_31159 === (1))){
var inst_31152 = cljs.core.async.timeout.call(null,(100));
var state_31158__$1 = state_31158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31158__$1,(2),inst_31152);
} else {
return null;
}
}
});})(c__15442__auto__,map__31147,map__31147__$1,opts,on_cssload))
;
return ((function (switch__15386__auto__,c__15442__auto__,map__31147,map__31147__$1,opts,on_cssload){
return (function() {
var state_machine__15387__auto__ = null;
var state_machine__15387__auto____0 = (function (){
var statearr_31164 = [null,null,null,null,null,null,null,null];
(statearr_31164[(0)] = state_machine__15387__auto__);

(statearr_31164[(1)] = (1));

return statearr_31164;
});
var state_machine__15387__auto____1 = (function (state_31158){
while(true){
var ret_value__15388__auto__ = (function (){try{while(true){
var result__15389__auto__ = switch__15386__auto__.call(null,state_31158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15389__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15389__auto__;
}
break;
}
}catch (e31165){if((e31165 instanceof Object)){
var ex__15390__auto__ = e31165;
var statearr_31166_31189 = state_31158;
(statearr_31166_31189[(5)] = ex__15390__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15388__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31190 = state_31158;
state_31158 = G__31190;
continue;
} else {
return ret_value__15388__auto__;
}
break;
}
});
state_machine__15387__auto__ = function(state_31158){
switch(arguments.length){
case 0:
return state_machine__15387__auto____0.call(this);
case 1:
return state_machine__15387__auto____1.call(this,state_31158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15387__auto____0;
state_machine__15387__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15387__auto____1;
return state_machine__15387__auto__;
})()
;})(switch__15386__auto__,c__15442__auto__,map__31147,map__31147__$1,opts,on_cssload))
})();
var state__15444__auto__ = (function (){var statearr_31167 = f__15443__auto__.call(null);
(statearr_31167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15442__auto__);

return statearr_31167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15444__auto__);
});})(c__15442__auto__,map__31147,map__31147__$1,opts,on_cssload))
);

return c__15442__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1429446863493