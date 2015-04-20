// Compiled by ClojureScript 0.0-2816 {}
goog.provide('abcnews.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('reagent.core');
abcnews.core.get_auth_token = (function get_auth_token(){
return window.localStorage.getItem("auth-token");
});
abcnews.core.set_auth_token = (function set_auth_token(value){
return window.localStorage.setItem("auth-token",value);
});
abcnews.core.request_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),[cljs.core.str("Token token="),cljs.core.str(abcnews.core.get_auth_token.call(null))].join('')], null)], null);
abcnews.core.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth-token","auth-token",30990976),abcnews.core.get_auth_token.call(null)], null);
abcnews.core.fetch_auth_token = (function fetch_auth_token(){
return ajax.core.POST.call(null,"/users.json",cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__20415_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetched-auth-token","fetched-auth-token",-214664611),p1__20415_SHARP_], null));
})], null),abcnews.core.request_options));
});
abcnews.core.get_stories = (function get_stories(){
return ajax.core.GET.call(null,"/stories.json",cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__20416_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetched-stories","fetched-stories",-468112560),p1__20416_SHARP_], null));
})], null),abcnews.core.request_options));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
if((abcnews.core.get_auth_token.call(null) == null)){
abcnews.core.fetch_auth_token.call(null);
} else {
abcnews.core.get_stories.call(null);
}

return cljs.core.merge.call(null,db,abcnews.core.initial_state);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"fetched-auth-token","fetched-auth-token",-214664611),(function (db,p__20417){
var vec__20418 = p__20417;
var _ = cljs.core.nth.call(null,vec__20418,(0),null);
var value = cljs.core.nth.call(null,vec__20418,(1),null);
var auth_token_value = new cljs.core.Keyword(null,"auth_token","auth_token",1432865949).cljs$core$IFn$_invoke$arity$1(value);
abcnews.core.set_auth_token.call(null,auth_token_value);

abcnews.core.get_stories.call(null);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"auth-token","auth-token",30990976),auth_token_value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"fetched-stories","fetched-stories",-468112560),(function (db,p__20419){
var vec__20420 = p__20419;
var _ = cljs.core.nth.call(null,vec__20420,(0),null);
var stories = cljs.core.nth.call(null,vec__20420,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"stories","stories",-1910187794),new cljs.core.Keyword(null,"stories","stories",-1910187794).cljs$core$IFn$_invoke$arity$1(stories));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-state","current-state",1048284452),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,db);
}));
}));
abcnews.core.current_state = (function current_state(){
var state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,state)),null,(2))], null);
});
abcnews.core.simple_example = (function simple_example(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.current_state], null)], null);
});
abcnews.core.run = (function run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('abcnews.core.run', abcnews.core.run);

//# sourceMappingURL=core.js.map?rel=1429513693610