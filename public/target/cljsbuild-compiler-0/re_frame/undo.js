// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
goog.require('re_frame.db');
goog.require('reagent.core');
goog.require('re_frame.utils');
re_frame.undo.max_undos = (function (){var G__23991 = (50);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23991) : cljs.core.atom.call(null,G__23991));
})();
re_frame.undo.set_max_undos_BANG_ = (function set_max_undos_BANG_(n){
var G__23994 = re_frame.undo.max_undos;
var G__23995 = n;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23994,G__23995) : cljs.core.reset_BANG_.call(null,G__23994,G__23995));
});
re_frame.undo.undo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.app_explain = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
re_frame.undo.undo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_history_BANG_ = (function clear_history_BANG_(){
var G__24006_24016 = re_frame.undo.undo_list;
var G__24007_24017 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24006_24016,G__24007_24017) : cljs.core.reset_BANG_.call(null,G__24006_24016,G__24007_24017));

var G__24008_24018 = re_frame.undo.redo_list;
var G__24009_24019 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24008_24018,G__24009_24019) : cljs.core.reset_BANG_.call(null,G__24008_24018,G__24009_24019));

var G__24010_24020 = re_frame.undo.undo_explain_list;
var G__24011_24021 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24010_24020,G__24011_24021) : cljs.core.reset_BANG_.call(null,G__24010_24020,G__24011_24021));

var G__24012_24022 = re_frame.undo.redo_explain_list;
var G__24013_24023 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24012_24022,G__24013_24023) : cljs.core.reset_BANG_.call(null,G__24012_24022,G__24013_24023));

var G__24014 = re_frame.undo.app_explain;
var G__24015 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24014,G__24015) : cljs.core.reset_BANG_.call(null,G__24014,G__24015));
});
/**
* stores the value currently in app-db, so the user can later undo
*/
re_frame.undo.store_now_BANG_ = (function store_now_BANG_(explanation){
var G__24040_24056 = re_frame.undo.redo_list;
var G__24041_24057 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24040_24056,G__24041_24057) : cljs.core.reset_BANG_.call(null,G__24040_24056,G__24041_24057));

var G__24042_24058 = re_frame.undo.redo_explain_list;
var G__24043_24059 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24042_24058,G__24043_24059) : cljs.core.reset_BANG_.call(null,G__24042_24058,G__24043_24059));

var G__24044_24060 = re_frame.undo.undo_list;
var G__24045_24061 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__24046 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24046) : cljs.core.deref.call(null,G__24046));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24047 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24047) : cljs.core.deref.call(null,G__24047));
})(),(function (){var G__24048 = re_frame.db.app_db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24048) : cljs.core.deref.call(null,G__24048));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24044_24060,G__24045_24061) : cljs.core.reset_BANG_.call(null,G__24044_24060,G__24045_24061));

var G__24049_24062 = re_frame.undo.undo_explain_list;
var G__24050_24063 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__24051 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24051) : cljs.core.deref.call(null,G__24051));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24052 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24052) : cljs.core.deref.call(null,G__24052));
})(),(function (){var G__24053 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24053) : cljs.core.deref.call(null,G__24053));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24049_24062,G__24050_24063) : cljs.core.reset_BANG_.call(null,G__24049_24062,G__24050_24063));

var G__24054 = re_frame.undo.app_explain;
var G__24055 = explanation;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24054,G__24055) : cljs.core.reset_BANG_.call(null,G__24054,G__24055));
});
re_frame.undo.undos_QMARK_ = (function undos_QMARK_(){
return (cljs.core.count((function (){var G__24065 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24065) : cljs.core.deref.call(null,G__24065));
})()) > (0));
});
re_frame.undo.redos_QMARK_ = (function redos_QMARK_(){
return (cljs.core.count((function (){var G__24067 = re_frame.undo.redo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24067) : cljs.core.deref.call(null,G__24067));
})()) > (0));
});
/**
* return list of undo descriptions or empty list if no undos
*/
re_frame.undo.undo_explanations = (function undo_explanations(){
if(re_frame.undo.undos_QMARK_()){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24070 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24070) : cljs.core.deref.call(null,G__24070));
})(),(function (){var G__24071 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24071) : cljs.core.deref.call(null,G__24071));
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
var G__24073 = re_frame.undo.redo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24073) : cljs.core.deref.call(null,G__24073));
}));
}));
re_frame.undo.undo = (function undo(undos,cur,redos){
var u = (function (){var G__24083 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24083) : cljs.core.deref.call(null,G__24083));
})();
var r = cljs.core.cons((function (){var G__24084 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24084) : cljs.core.deref.call(null,G__24084));
})(),(function (){var G__24085 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24085) : cljs.core.deref.call(null,G__24085));
})());
var G__24086_24092 = cur;
var G__24087_24093 = cljs.core.last(u);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24086_24092,G__24087_24093) : cljs.core.reset_BANG_.call(null,G__24086_24092,G__24087_24093));

var G__24088_24094 = redos;
var G__24089_24095 = r;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24088_24094,G__24089_24095) : cljs.core.reset_BANG_.call(null,G__24088_24094,G__24089_24095));

var G__24090 = undos;
var G__24091 = cljs.core.pop(u);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24090,G__24091) : cljs.core.reset_BANG_.call(null,G__24090,G__24091));
});
/**
* undo until we reach n or run out of undos
*/
re_frame.undo.undo_n = (function undo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.undos_QMARK_())){
re_frame.undo.undo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.undo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__24096 = (n - (1));
n = G__24096;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$103,(function handler(_,p__24097){
var vec__24099 = p__24097;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24099,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24099,(1),null);
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
var u = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24109 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24109) : cljs.core.deref.call(null,G__24109));
})(),(function (){var G__24110 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24110) : cljs.core.deref.call(null,G__24110));
})());
var r = (function (){var G__24111 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24111) : cljs.core.deref.call(null,G__24111));
})();
var G__24112_24118 = cur;
var G__24113_24119 = cljs.core.first(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24112_24118,G__24113_24119) : cljs.core.reset_BANG_.call(null,G__24112_24118,G__24113_24119));

var G__24114_24120 = redos;
var G__24115_24121 = cljs.core.rest(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24114_24120,G__24115_24121) : cljs.core.reset_BANG_.call(null,G__24114_24120,G__24115_24121));

var G__24116 = undos;
var G__24117 = u;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24116,G__24117) : cljs.core.reset_BANG_.call(null,G__24116,G__24117));
});
/**
* redo until we reach n or run out of redos
*/
re_frame.undo.redo_n = (function redo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.redos_QMARK_())){
re_frame.undo.redo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.redo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__24122 = (n - (1));
n = G__24122;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$104,(function handler(_,p__24123){
var vec__24125 = p__24123;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24125,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24125,(1),null);
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
