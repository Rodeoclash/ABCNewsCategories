// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
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
abcnews.core.request_options = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$41,cljs.core.constant$keyword$35,cljs.core.constant$keyword$40,cljs.core.constant$keyword$35,cljs.core.constant$keyword$38,true], null);
abcnews.core.auth_header = (function auth_header(){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$52,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$109,[cljs.core.str("Token token="),cljs.core.str(abcnews.core.get_auth_token())].join('')], null)], null);
});
abcnews.core.initial_state = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$110,cljs.core.PersistentArrayMap.EMPTY], null);
abcnews.core.create_user = (function create_user(){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/users.json",cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$56,(function (p1__16253_SHARP_){
var G__16255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$111,p1__16253_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16255) : re_frame.core.dispatch.call(null,G__16255));
})], null),abcnews.core.request_options], 0))], 0));
});
abcnews.core.get_current_user = (function get_current_user(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/current_user.json",cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$56,(function (p1__16256_SHARP_){
var G__16258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$112,p1__16256_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16258) : re_frame.core.dispatch.call(null,G__16258));
})], null),abcnews.core.auth_header(),abcnews.core.request_options], 0))], 0));
});
abcnews.core.get_stories = (function get_stories(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/stories.json",cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$56,(function (p1__16259_SHARP_){
var G__16261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113,p1__16259_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16261) : re_frame.core.dispatch.call(null,G__16261));
})], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$114,(0),cljs.core.constant$keyword$115,(1000)], null)], null),abcnews.core.auth_header(),abcnews.core.request_options], 0))], 0));
});
abcnews.core.create_story_user_interest = (function create_story_user_interest(story,interest_amount){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str("/stories/"),cljs.core.str(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(story)),cljs.core.str("/interest.json")].join(''),cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$56,(function (p1__16262_SHARP_){
var G__16264 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116,p1__16262_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16264) : re_frame.core.dispatch.call(null,G__16264));
})], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$53,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(story),cljs.core.constant$keyword$118,interest_amount], null)], null),abcnews.core.auth_header(),abcnews.core.request_options], 0))], 0));
});
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$119,(function (db,_){
if((abcnews.core.get_auth_token() == null)){
var G__16265_16267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$120], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16265_16267) : re_frame.core.dispatch.call(null,G__16265_16267));
} else {
var G__16266_16268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$121], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16266_16268) : re_frame.core.dispatch.call(null,G__16266_16268));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([db,abcnews.core.initial_state], 0));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$120,(function (db,p__16269){
var vec__16270 = p__16269;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270,(0),null);
abcnews.core.create_user();

return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$111,(function (db,p__16271){
var vec__16272 = p__16271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16272,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16272,(1),null);
abcnews.core.set_auth_token(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$122,cljs.core.constant$keyword$123], null)));

var G__16273_16274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$112,user], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__16273_16274) : re_frame.core.dispatch_sync.call(null,G__16273_16274));

abcnews.core.get_stories();

return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$124,(function (db,p__16275){
var vec__16276 = p__16275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16276,(0),null);
abcnews.core.get_current_user();

return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$112,(function (db,p__16277){
var vec__16278 = p__16277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16278,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16278,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.constant$keyword$110,cljs.core.constant$keyword$122.cljs$core$IFn$_invoke$arity$1(user));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$121,(function (db,p__16279){
var vec__16280 = p__16279;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16280,(0),null);
abcnews.core.get_stories();

return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$113,(function (db,p__16281){
var vec__16282 = p__16281;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16282,(0),null);
var stories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16282,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.constant$keyword$125,cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(stories));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$126,(function (db,p__16283){
var vec__16284 = p__16283;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16284,(0),null);
var story = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16284,(1),null);
var interest_amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16284,(2),null);
abcnews.core.create_story_user_interest(story,interest_amount);

return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$116,(function (db,p__16285){
var vec__16286 = p__16285;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16286,(0),null);
var story_user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16286,(1),null);
var G__16287_16288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16287_16288) : re_frame.core.dispatch.call(null,G__16287_16288));

return db;
}));
var G__16289_16292 = cljs.core.constant$keyword$127;
var G__16290_16293 = ((function (G__16289_16292){
return (function (db,_){
return reagent.ratom.make_reaction(((function (G__16289_16292){
return (function (){
var G__16291 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16291) : cljs.core.deref.call(null,G__16291));
});})(G__16289_16292))
);
});})(G__16289_16292))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__16289_16292,G__16290_16293) : re_frame.core.register_sub.call(null,G__16289_16292,G__16290_16293));
var G__16294_16297 = cljs.core.constant$keyword$125;
var G__16295_16298 = ((function (G__16294_16297){
return (function (db,_){
return reagent.ratom.make_reaction(((function (G__16294_16297){
return (function (){
return cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1((function (){var G__16296 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16296) : cljs.core.deref.call(null,G__16296));
})());
});})(G__16294_16297))
);
});})(G__16294_16297))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__16294_16297,G__16295_16298) : re_frame.core.register_sub.call(null,G__16294_16297,G__16295_16298));
var G__16299_16302 = cljs.core.constant$keyword$110;
var G__16300_16303 = ((function (G__16299_16302){
return (function (db,_){
return reagent.ratom.make_reaction(((function (G__16299_16302){
return (function (){
return cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1((function (){var G__16301 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16301) : cljs.core.deref.call(null,G__16301));
})());
});})(G__16299_16302))
);
});})(G__16299_16302))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__16299_16302,G__16300_16303) : re_frame.core.register_sub.call(null,G__16299_16302,G__16300_16303));
var G__16304_16308 = cljs.core.constant$keyword$128;
var G__16305_16309 = ((function (G__16304_16308){
return (function (db,attrs){
var current_user = (function (){var G__16306 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$110], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16306) : re_frame.core.subscribe.call(null,G__16306));
})();
return reagent.ratom.make_reaction(((function (current_user,G__16304_16308){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16307 = current_user;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16307) : cljs.core.deref.call(null,G__16307));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$129], null));
});})(current_user,G__16304_16308))
);
});})(G__16304_16308))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__16304_16308,G__16305_16309) : re_frame.core.register_sub.call(null,G__16304_16308,G__16305_16309));
abcnews.core.debug_output = (function debug_output(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,JSON.stringify(cljs.core.clj__GT_js(state),null,(2))], null);
});
abcnews.core.story_item = (function story_item(story,story_user){
var story_id = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(story);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,cljs.core.constant$keyword$133.cljs$core$IFn$_invoke$arity$1(story)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,"Summary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,cljs.core.constant$keyword$136.cljs$core$IFn$_invoke$arity$1(story)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,"Image"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$138,cljs.core.constant$keyword$140.cljs$core$IFn$_invoke$arity$1(story),cljs.core.constant$keyword$139,"300px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,[cljs.core.str("Interest "),cljs.core.str(cljs.core.constant$keyword$118.cljs$core$IFn$_invoke$arity$1(story_user))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,((function (story_id){
return (function (){
var G__16312 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,story,(1)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16312) : re_frame.core.dispatch.call(null,G__16312));
});})(story_id))
], null),"Set interest (1)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,((function (story_id){
return (function (){
var G__16313 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$126,story,0.25], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16313) : re_frame.core.dispatch.call(null,G__16313));
});})(story_id))
], null),"Set interest (0.25)"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$81,story_id], null));
});
abcnews.core.current_state = (function current_state(){
var state = (function (){var G__16316 = (function (){var G__16317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16317) : re_frame.core.subscribe.call(null,G__16317));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16316) : cljs.core.deref.call(null,G__16316));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.debug_output,state], null);
});
abcnews.core.stories_list = (function stories_list(){
var stories = (function (){var G__16329 = (function (){var G__16330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$125], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16330) : re_frame.core.subscribe.call(null,G__16330));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16329) : cljs.core.deref.call(null,G__16329));
})();
var story_users = (function (){var G__16331 = (function (){var G__16332 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$128], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16332) : re_frame.core.subscribe.call(null,G__16332));
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16331) : cljs.core.deref.call(null,G__16331));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,(function (){var iter__4562__auto__ = ((function (stories,story_users){
return (function iter__16333(s__16334){
return (new cljs.core.LazySeq(null,((function (stories,story_users){
return (function (){
var s__16334__$1 = s__16334;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__16334__$1);
if(temp__4126__auto__){
var s__16334__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16334__$2)){
var c__4560__auto__ = cljs.core.chunk_first(s__16334__$2);
var size__4561__auto__ = cljs.core.count(c__4560__auto__);
var b__16336 = cljs.core.chunk_buffer(size__4561__auto__);
if((function (){var i__16335 = (0);
while(true){
if((i__16335 < size__4561__auto__)){
var story = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4560__auto__,i__16335);
cljs.core.chunk_append(b__16336,abcnews.core.story_item(story,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__16335,story,c__4560__auto__,size__4561__auto__,b__16336,s__16334__$2,temp__4126__auto__,stories,story_users){
return (function (p1__16318_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(story),cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(p1__16318_SHARP_));
});})(i__16335,story,c__4560__auto__,size__4561__auto__,b__16336,s__16334__$2,temp__4126__auto__,stories,story_users))
,story_users))));

var G__16339 = (i__16335 + (1));
i__16335 = G__16339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16336),iter__16333(cljs.core.chunk_rest(s__16334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16336),null);
}
} else {
var story = cljs.core.first(s__16334__$2);
return cljs.core.cons(abcnews.core.story_item(story,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (story,s__16334__$2,temp__4126__auto__,stories,story_users){
return (function (p1__16318_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(story),cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(p1__16318_SHARP_));
});})(story,s__16334__$2,temp__4126__auto__,stories,story_users))
,story_users))),iter__16333(cljs.core.rest(s__16334__$2)));
}
} else {
return null;
}
break;
}
});})(stories,story_users))
,null,null));
});})(stories,story_users))
;
return iter__4562__auto__(stories);
})()], null);
});
abcnews.core.simple_example = (function simple_example(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,"Stories"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.stories_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$143,"Client side state"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.current_state], null)], null);
});
abcnews.core.run = (function run(){
var G__16342_16344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$119], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__16342_16344) : re_frame.core.dispatch_sync.call(null,G__16342_16344));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.simple_example], null),(function (){var G__16343 = "app";
return document.getElementById(G__16343);
})());
});
goog.exportSymbol('abcnews.core.run', abcnews.core.run);
