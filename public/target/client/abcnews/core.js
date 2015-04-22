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
abcnews.core.request_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
abcnews.core.auth_header = (function auth_header(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Token token="),cljs.core.str(abcnews.core.get_auth_token.call(null))].join('')], null)], null);
});
abcnews.core.initial_state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-user","current-user",-868792091),cljs.core.PersistentArrayMap.EMPTY], null);
abcnews.core.create_user = (function create_user(){
return ajax.core.POST.call(null,"/users.json",cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__23418_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-user","created-user",1322326133),p1__23418_SHARP_], null));
})], null),abcnews.core.request_options));
});
abcnews.core.get_current_user = (function get_current_user(){
return ajax.core.GET.call(null,"/current_user.json",cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__23419_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetched-current-user","fetched-current-user",1654888703),p1__23419_SHARP_], null));
})], null),abcnews.core.auth_header.call(null),abcnews.core.request_options));
});
abcnews.core.get_stories = (function get_stories(){
return ajax.core.GET.call(null,"/stories.json",cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__23420_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetched-stories","fetched-stories",-468112560),p1__23420_SHARP_], null));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(1000)], null)], null),abcnews.core.auth_header.call(null),abcnews.core.request_options));
});
abcnews.core.create_story_user_interest = (function create_story_user_interest(story,interest_amount){
return ajax.core.POST.call(null,[cljs.core.str("/stories/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(story)),cljs.core.str("/interest.json")].join(''),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__23421_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-story-user-interest","created-story-user-interest",1651134579),p1__23421_SHARP_], null));
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"story_id","story_id",899973475),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(story),new cljs.core.Keyword(null,"interest","interest",655528052),interest_amount], null)], null),abcnews.core.auth_header.call(null),abcnews.core.request_options));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
if((abcnews.core.get_auth_token.call(null) == null)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-user","create-user",1923675328)], null));
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-stories","fetch-stories",-624675135)], null));
}

return cljs.core.merge.call(null,db,abcnews.core.initial_state);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"create-user","create-user",1923675328),(function (db,p__23422){
var vec__23423 = p__23422;
var _ = cljs.core.nth.call(null,vec__23423,(0),null);
abcnews.core.create_user.call(null);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"created-user","created-user",1322326133),(function (db,p__23424){
var vec__23425 = p__23424;
var _ = cljs.core.nth.call(null,vec__23425,(0),null);
var user = cljs.core.nth.call(null,vec__23425,(1),null);
abcnews.core.set_auth_token.call(null,cljs.core.get_in.call(null,user,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"auth_token","auth_token",1432865949)], null)));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetched-current-user","fetched-current-user",1654888703),user], null));

abcnews.core.get_stories.call(null);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"fetch-current-user","fetch-current-user",316816635),(function (db,p__23426){
var vec__23427 = p__23426;
var _ = cljs.core.nth.call(null,vec__23427,(0),null);
abcnews.core.get_current_user.call(null);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"fetched-current-user","fetched-current-user",1654888703),(function (db,p__23428){
var vec__23429 = p__23428;
var _ = cljs.core.nth.call(null,vec__23429,(0),null);
var user = cljs.core.nth.call(null,vec__23429,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-user","current-user",-868792091),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(user));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"fetch-stories","fetch-stories",-624675135),(function (db,p__23430){
var vec__23431 = p__23430;
var _ = cljs.core.nth.call(null,vec__23431,(0),null);
abcnews.core.get_stories.call(null);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"fetched-stories","fetched-stories",-468112560),(function (db,p__23432){
var vec__23433 = p__23432;
var _ = cljs.core.nth.call(null,vec__23433,(0),null);
var stories = cljs.core.nth.call(null,vec__23433,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"stories","stories",-1910187794),new cljs.core.Keyword(null,"stories","stories",-1910187794).cljs$core$IFn$_invoke$arity$1(stories));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"create-story-user-interest","create-story-user-interest",1849203022),(function (db,p__23434){
var vec__23435 = p__23434;
var _ = cljs.core.nth.call(null,vec__23435,(0),null);
var story = cljs.core.nth.call(null,vec__23435,(1),null);
var interest_amount = cljs.core.nth.call(null,vec__23435,(2),null);
abcnews.core.create_story_user_interest.call(null,story,interest_amount);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"created-story-user-interest","created-story-user-interest",1651134579),(function (db,p__23436){
var vec__23437 = p__23436;
var _ = cljs.core.nth.call(null,vec__23437,(0),null);
var story_user = cljs.core.nth.call(null,vec__23437,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-current-user","fetch-current-user",316816635)], null));

return db;
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-state","current-state",1048284452),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,db);
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"stories","stories",-1910187794),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"stories","stories",-1910187794).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-user","current-user",-868792091),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"current-user","current-user",-868792091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"story-users","story-users",630072958),(function (db,attrs){
var current_user = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user","current-user",-868792091)], null));
return reagent.ratom.make_reaction.call(null,((function (current_user){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,current_user),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"story_users","story_users",-61526835)], null));
});})(current_user))
);
}));
abcnews.core.debug_output = (function debug_output(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),JSON.stringify(cljs.core.clj__GT_js.call(null,state),null,(2))], null);
});
abcnews.core.story_item = (function story_item(story,story_user){
var story_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(story);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(story)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Summary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(story)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Image"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(story),new cljs.core.Keyword(null,"width","width",-384071477),"300px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str("Interest "),cljs.core.str(new cljs.core.Keyword(null,"interest","interest",655528052).cljs$core$IFn$_invoke$arity$1(story_user))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (story_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-story-user-interest","create-story-user-interest",1849203022),story,(1)], null));
});})(story_id))
], null),"Set interest (1)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (story_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-story-user-interest","create-story-user-interest",1849203022),story,0.25], null));
});})(story_id))
], null),"Set interest (0.25)"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),story_id], null));
});
abcnews.core.current_state = (function current_state(){
var state = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.debug_output,state], null);
});
abcnews.core.stories_list = (function stories_list(){
var stories = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stories","stories",-1910187794)], null)));
var story_users = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"story-users","story-users",630072958)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__13529__auto__ = ((function (stories,story_users){
return (function iter__23443(s__23444){
return (new cljs.core.LazySeq(null,((function (stories,story_users){
return (function (){
var s__23444__$1 = s__23444;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23444__$1);
if(temp__4126__auto__){
var s__23444__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23444__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__23444__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__23446 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__23445 = (0);
while(true){
if((i__23445 < size__13528__auto__)){
var story = cljs.core._nth.call(null,c__13527__auto__,i__23445);
cljs.core.chunk_append.call(null,b__23446,abcnews.core.story_item.call(null,story,cljs.core.first.call(null,cljs.core.filter.call(null,((function (i__23445,story,c__13527__auto__,size__13528__auto__,b__23446,s__23444__$2,temp__4126__auto__,stories,story_users){
return (function (p1__23438_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(story),new cljs.core.Keyword(null,"story_id","story_id",899973475).cljs$core$IFn$_invoke$arity$1(p1__23438_SHARP_));
});})(i__23445,story,c__13527__auto__,size__13528__auto__,b__23446,s__23444__$2,temp__4126__auto__,stories,story_users))
,story_users))));

var G__23447 = (i__23445 + (1));
i__23445 = G__23447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23446),iter__23443.call(null,cljs.core.chunk_rest.call(null,s__23444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23446),null);
}
} else {
var story = cljs.core.first.call(null,s__23444__$2);
return cljs.core.cons.call(null,abcnews.core.story_item.call(null,story,cljs.core.first.call(null,cljs.core.filter.call(null,((function (story,s__23444__$2,temp__4126__auto__,stories,story_users){
return (function (p1__23438_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(story),new cljs.core.Keyword(null,"story_id","story_id",899973475).cljs$core$IFn$_invoke$arity$1(p1__23438_SHARP_));
});})(story,s__23444__$2,temp__4126__auto__,stories,story_users))
,story_users))),iter__23443.call(null,cljs.core.rest.call(null,s__23444__$2)));
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
return iter__13529__auto__.call(null,stories);
})()], null);
});
abcnews.core.simple_example = (function simple_example(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Stories"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.stories_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Client side state"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.current_state], null)], null);
});
abcnews.core.run = (function run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abcnews.core.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('abcnews.core.run', abcnews.core.run);

//# sourceMappingURL=core.js.map?rel=1429681638646