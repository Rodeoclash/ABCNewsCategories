// Compiled by ClojureScript 0.0-2816 {}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
goog.require('re_frame.db');
goog.require('reagent.core');
goog.require('re_frame.utils');
re_frame.undo.max_undos = cljs.core.atom.call(null,(50));
re_frame.undo.set_max_undos_BANG_ = (function set_max_undos_BANG_(n){
return cljs.core.reset_BANG_.call(null,re_frame.undo.max_undos,n);
});
re_frame.undo.undo_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
re_frame.undo.app_explain = reagent.core.atom.call(null,"");
re_frame.undo.undo_explain_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_explain_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_history_BANG_ = (function clear_history_BANG_(){
cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,re_frame.undo.redo_list,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,re_frame.undo.undo_explain_list,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,re_frame.undo.redo_explain_list,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,re_frame.undo.app_explain,"");
});
/**
* stores the value currently in app-db, so the user can later undo
*/
re_frame.undo.store_now_BANG_ = (function store_now_BANG_(explanation){
cljs.core.reset_BANG_.call(null,re_frame.undo.redo_list,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,re_frame.undo.redo_explain_list,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,re_frame.undo.undo_list,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,re_frame.undo.max_undos),cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list),cljs.core.deref.call(null,re_frame.db.app_db)))));

cljs.core.reset_BANG_.call(null,re_frame.undo.undo_explain_list,cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,re_frame.undo.max_undos),cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.undo.undo_explain_list),cljs.core.deref.call(null,re_frame.undo.app_explain)))));

return cljs.core.reset_BANG_.call(null,re_frame.undo.app_explain,explanation);
});
re_frame.undo.undos_QMARK_ = (function undos_QMARK_(){
return (cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.undo.undo_list)) > (0));
});
re_frame.undo.redos_QMARK_ = (function redos_QMARK_(){
return (cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.undo.redo_list)) > (0));
});
/**
* return list of undo descriptions or empty list if no undos
*/
re_frame.undo.undo_explanations = (function undo_explanations(){
if(re_frame.undo.undos_QMARK_.call(null)){
return cljs.core.conj.call(null,cljs.core.deref.call(null,re_frame.undo.undo_explain_list),cljs.core.deref.call(null,re_frame.undo.app_explain));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"undos?","undos?",-1094259081),(function handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return re_frame.undo.undos_QMARK_.call(null);
}));
}));
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"redos?","redos?",1340247550),(function handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return re_frame.undo.redos_QMARK_.call(null);
}));
}));
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"undo-explanations","undo-explanations",942251259),(function handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return re_frame.undo.undo_explanations.call(null);
}));
}));
re_frame.subs.register.call(null,new cljs.core.Keyword(null,"redo-explanations","redo-explanations",-1933832741),(function handler(_,___$1){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,re_frame.undo.redo_explain_list);
}));
}));
re_frame.undo.undo = (function undo(undos,cur,redos){
var u = cljs.core.deref.call(null,undos);
var r = cljs.core.cons.call(null,cljs.core.deref.call(null,cur),cljs.core.deref.call(null,redos));
cljs.core.reset_BANG_.call(null,cur,cljs.core.last.call(null,u));

cljs.core.reset_BANG_.call(null,redos,r);

return cljs.core.reset_BANG_.call(null,undos,cljs.core.pop.call(null,u));
});
/**
* undo until we reach n or run out of undos
*/
re_frame.undo.undo_n = (function undo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.undos_QMARK_.call(null))){
re_frame.undo.undo.call(null,re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.undo.call(null,re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__24814 = (n - (1));
n = G__24814;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.call(null,new cljs.core.Keyword(null,"undo","undo",-1818036302),(function handler(_,p__24815){
var vec__24817 = p__24815;
var ___$1 = cljs.core.nth.call(null,vec__24817,(0),null);
var n = cljs.core.nth.call(null,vec__24817,(1),null);
if(!(re_frame.undo.undos_QMARK_.call(null))){
return re_frame.utils.warn.call(null,"re-frame: you did a (dispatch [:undo]), but there is nothing to undo.");
} else {
return re_frame.undo.undo_n.call(null,(function (){var or__12773__auto__ = n;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.undo.redo = (function redo(undos,cur,redos){
var u = cljs.core.conj.call(null,cljs.core.deref.call(null,undos),cljs.core.deref.call(null,cur));
var r = cljs.core.deref.call(null,redos);
cljs.core.reset_BANG_.call(null,cur,cljs.core.first.call(null,r));

cljs.core.reset_BANG_.call(null,redos,cljs.core.rest.call(null,r));

return cljs.core.reset_BANG_.call(null,undos,u);
});
/**
* redo until we reach n or run out of redos
*/
re_frame.undo.redo_n = (function redo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.redos_QMARK_.call(null))){
re_frame.undo.redo.call(null,re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.redo.call(null,re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__24818 = (n - (1));
n = G__24818;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.call(null,new cljs.core.Keyword(null,"redo","redo",501190664),(function handler(_,p__24819){
var vec__24821 = p__24819;
var ___$1 = cljs.core.nth.call(null,vec__24821,(0),null);
var n = cljs.core.nth.call(null,vec__24821,(1),null);
if(!(re_frame.undo.redos_QMARK_.call(null))){
return re_frame.utils.warn.call(null,"re-frame: you did a (dispatch [:redo]), but there is nothing to redo.");
} else {
return re_frame.undo.redo_n.call(null,(function (){var or__12773__auto__ = n;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return (1);
}
})());
}
}));

//# sourceMappingURL=undo.js.map?rel=1429446761369