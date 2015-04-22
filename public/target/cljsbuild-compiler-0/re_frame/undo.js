// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
goog.require('re_frame.db');
goog.require('reagent.core');
goog.require('re_frame.utils');
re_frame.undo.max_undos = (function (){var G__23987 = (50);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23987) : cljs.core.atom.call(null,G__23987));
})();
re_frame.undo.set_max_undos_BANG_ = (function set_max_undos_BANG_(n){
var G__23990 = re_frame.undo.max_undos;
var G__23991 = n;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23990,G__23991) : cljs.core.reset_BANG_.call(null,G__23990,G__23991));
});
re_frame.undo.undo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.app_explain = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
re_frame.undo.undo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_history_BANG_ = (function clear_history_BANG_(){
var G__24002_24012 = re_frame.undo.undo_list;
var G__24003_24013 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24002_24012,G__24003_24013) : cljs.core.reset_BANG_.call(null,G__24002_24012,G__24003_24013));

var G__24004_24014 = re_frame.undo.redo_list;
var G__24005_24015 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24004_24014,G__24005_24015) : cljs.core.reset_BANG_.call(null,G__24004_24014,G__24005_24015));

var G__24006_24016 = re_frame.undo.undo_explain_list;
var G__24007_24017 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24006_24016,G__24007_24017) : cljs.core.reset_BANG_.call(null,G__24006_24016,G__24007_24017));

var G__24008_24018 = re_frame.undo.redo_explain_list;
var G__24009_24019 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24008_24018,G__24009_24019) : cljs.core.reset_BANG_.call(null,G__24008_24018,G__24009_24019));

var G__24010 = re_frame.undo.app_explain;
var G__24011 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24010,G__24011) : cljs.core.reset_BANG_.call(null,G__24010,G__24011));
});
/**
* stores the value currently in app-db, so the user can later undo
*/
re_frame.undo.store_now_BANG_ = (function store_now_BANG_(explanation){
var G__24036_24052 = re_frame.undo.redo_list;
var G__24037_24053 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24036_24052,G__24037_24053) : cljs.core.reset_BANG_.call(null,G__24036_24052,G__24037_24053));

var G__24038_24054 = re_frame.undo.redo_explain_list;
var G__24039_24055 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24038_24054,G__24039_24055) : cljs.core.reset_BANG_.call(null,G__24038_24054,G__24039_24055));

var G__24040_24056 = re_frame.undo.undo_list;
var G__24041_24057 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__24042 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24042) : cljs.core.deref.call(null,G__24042));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24043 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24043) : cljs.core.deref.call(null,G__24043));
})(),(function (){var G__24044 = re_frame.db.app_db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24044) : cljs.core.deref.call(null,G__24044));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24040_24056,G__24041_24057) : cljs.core.reset_BANG_.call(null,G__24040_24056,G__24041_24057));

var G__24045_24058 = re_frame.undo.undo_explain_list;
var G__24046_24059 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__24047 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24047) : cljs.core.deref.call(null,G__24047));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24048 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24048) : cljs.core.deref.call(null,G__24048));
})(),(function (){var G__24049 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24049) : cljs.core.deref.call(null,G__24049));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24045_24058,G__24046_24059) : cljs.core.reset_BANG_.call(null,G__24045_24058,G__24046_24059));

var G__24050 = re_frame.undo.app_explain;
var G__24051 = explanation;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24050,G__24051) : cljs.core.reset_BANG_.call(null,G__24050,G__24051));
});
re_frame.undo.undos_QMARK_ = (function undos_QMARK_(){
return (cljs.core.count((function (){var G__24061 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24061) : cljs.core.deref.call(null,G__24061));
})()) > (0));
});
re_frame.undo.redos_QMARK_ = (function redos_QMARK_(){
return (cljs.core.count((function (){var G__24063 = re_frame.undo.redo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24063) : cljs.core.deref.call(null,G__24063));
})()) > (0));
});
/**
* return list of undo descriptions or empty list if no undos
*/
re_frame.undo.undo_explanations = (function undo_explanations(){
if(re_frame.undo.undos_QMARK_()){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24066 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24066) : cljs.core.deref.call(null,G__24066));
})(),(function (){var G__24067 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24067) : cljs.core.deref.call(null,G__24067));
})());
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.subs.register(cljs.core.constant$keyword$99,(function handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.undos_QMARK_();
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$100,(function handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.redos_QMARK_();
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$101,(function handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.undo_explanations();
}));
}));
re_frame.subs.register(cljs.core.constant$keyword$102,(function handler(_,___$1){
return reagent.ratom.make_reaction((function (){
var G__24069 = re_frame.undo.redo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24069) : cljs.core.deref.call(null,G__24069));
}));
}));
re_frame.undo.undo = (function undo(undos,cur,redos){
var u = (function (){var G__24079 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24079) : cljs.core.deref.call(null,G__24079));
})();
var r = cljs.core.cons((function (){var G__24080 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24080) : cljs.core.deref.call(null,G__24080));
})(),(function (){var G__24081 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24081) : cljs.core.deref.call(null,G__24081));
})());
var G__24082_24088 = cur;
var G__24083_24089 = cljs.core.last(u);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24082_24088,G__24083_24089) : cljs.core.reset_BANG_.call(null,G__24082_24088,G__24083_24089));

var G__24084_24090 = redos;
var G__24085_24091 = r;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24084_24090,G__24085_24091) : cljs.core.reset_BANG_.call(null,G__24084_24090,G__24085_24091));

var G__24086 = undos;
var G__24087 = cljs.core.pop(u);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24086,G__24087) : cljs.core.reset_BANG_.call(null,G__24086,G__24087));
});
/**
* undo until we reach n or run out of undos
*/
re_frame.undo.undo_n = (function undo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.undos_QMARK_())){
re_frame.undo.undo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.undo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__24092 = (n - (1));
n = G__24092;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$103,(function handler(_,p__24093){
var vec__24095 = p__24093;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24095,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24095,(1),null);
if(!(re_frame.undo.undos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:undo]), but there is nothing to undo."], 0));
} else {
return re_frame.undo.undo_n((function (){var or__3806__auto__ = n;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.undo.redo = (function redo(undos,cur,redos){
var u = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24105 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24105) : cljs.core.deref.call(null,G__24105));
})(),(function (){var G__24106 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24106) : cljs.core.deref.call(null,G__24106));
})());
var r = (function (){var G__24107 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24107) : cljs.core.deref.call(null,G__24107));
})();
var G__24108_24114 = cur;
var G__24109_24115 = cljs.core.first(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24108_24114,G__24109_24115) : cljs.core.reset_BANG_.call(null,G__24108_24114,G__24109_24115));

var G__24110_24116 = redos;
var G__24111_24117 = cljs.core.rest(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24110_24116,G__24111_24117) : cljs.core.reset_BANG_.call(null,G__24110_24116,G__24111_24117));

var G__24112 = undos;
var G__24113 = u;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24112,G__24113) : cljs.core.reset_BANG_.call(null,G__24112,G__24113));
});
/**
* redo until we reach n or run out of redos
*/
re_frame.undo.redo_n = (function redo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.redos_QMARK_())){
re_frame.undo.redo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.redo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__24118 = (n - (1));
n = G__24118;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$104,(function handler(_,p__24119){
var vec__24121 = p__24119;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24121,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24121,(1),null);
if(!(re_frame.undo.redos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:redo]), but there is nothing to redo."], 0));
} else {
return re_frame.undo.redo_n((function (){var or__3806__auto__ = n;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return (1);
}
})());
}
}));
