// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.handlers');
goog.require('re_frame.db');
goog.require('reagent.core');
goog.require('re_frame.utils');
re_frame.undo.max_undos = (function (){var G__23983 = (50);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23983) : cljs.core.atom.call(null,G__23983));
})();
re_frame.undo.set_max_undos_BANG_ = (function set_max_undos_BANG_(n){
var G__23986 = re_frame.undo.max_undos;
var G__23987 = n;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23986,G__23987) : cljs.core.reset_BANG_.call(null,G__23986,G__23987));
});
re_frame.undo.undo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.app_explain = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
re_frame.undo.undo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.redo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_history_BANG_ = (function clear_history_BANG_(){
var G__23998_24008 = re_frame.undo.undo_list;
var G__23999_24009 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23998_24008,G__23999_24009) : cljs.core.reset_BANG_.call(null,G__23998_24008,G__23999_24009));

var G__24000_24010 = re_frame.undo.redo_list;
var G__24001_24011 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24000_24010,G__24001_24011) : cljs.core.reset_BANG_.call(null,G__24000_24010,G__24001_24011));

var G__24002_24012 = re_frame.undo.undo_explain_list;
var G__24003_24013 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24002_24012,G__24003_24013) : cljs.core.reset_BANG_.call(null,G__24002_24012,G__24003_24013));

var G__24004_24014 = re_frame.undo.redo_explain_list;
var G__24005_24015 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24004_24014,G__24005_24015) : cljs.core.reset_BANG_.call(null,G__24004_24014,G__24005_24015));

var G__24006 = re_frame.undo.app_explain;
var G__24007 = "";
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24006,G__24007) : cljs.core.reset_BANG_.call(null,G__24006,G__24007));
});
/**
* stores the value currently in app-db, so the user can later undo
*/
re_frame.undo.store_now_BANG_ = (function store_now_BANG_(explanation){
var G__24032_24048 = re_frame.undo.redo_list;
var G__24033_24049 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24032_24048,G__24033_24049) : cljs.core.reset_BANG_.call(null,G__24032_24048,G__24033_24049));

var G__24034_24050 = re_frame.undo.redo_explain_list;
var G__24035_24051 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24034_24050,G__24035_24051) : cljs.core.reset_BANG_.call(null,G__24034_24050,G__24035_24051));

var G__24036_24052 = re_frame.undo.undo_list;
var G__24037_24053 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__24038 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24038) : cljs.core.deref.call(null,G__24038));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24039 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24039) : cljs.core.deref.call(null,G__24039));
})(),(function (){var G__24040 = re_frame.db.app_db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24040) : cljs.core.deref.call(null,G__24040));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24036_24052,G__24037_24053) : cljs.core.reset_BANG_.call(null,G__24036_24052,G__24037_24053));

var G__24041_24054 = re_frame.undo.undo_explain_list;
var G__24042_24055 = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var G__24043 = re_frame.undo.max_undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24043) : cljs.core.deref.call(null,G__24043));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24044 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24044) : cljs.core.deref.call(null,G__24044));
})(),(function (){var G__24045 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24045) : cljs.core.deref.call(null,G__24045));
})())));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24041_24054,G__24042_24055) : cljs.core.reset_BANG_.call(null,G__24041_24054,G__24042_24055));

var G__24046 = re_frame.undo.app_explain;
var G__24047 = explanation;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24046,G__24047) : cljs.core.reset_BANG_.call(null,G__24046,G__24047));
});
re_frame.undo.undos_QMARK_ = (function undos_QMARK_(){
return (cljs.core.count((function (){var G__24057 = re_frame.undo.undo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24057) : cljs.core.deref.call(null,G__24057));
})()) > (0));
});
re_frame.undo.redos_QMARK_ = (function redos_QMARK_(){
return (cljs.core.count((function (){var G__24059 = re_frame.undo.redo_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24059) : cljs.core.deref.call(null,G__24059));
})()) > (0));
});
/**
* return list of undo descriptions or empty list if no undos
*/
re_frame.undo.undo_explanations = (function undo_explanations(){
if(re_frame.undo.undos_QMARK_()){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24062 = re_frame.undo.undo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24062) : cljs.core.deref.call(null,G__24062));
})(),(function (){var G__24063 = re_frame.undo.app_explain;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24063) : cljs.core.deref.call(null,G__24063));
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
var G__24065 = re_frame.undo.redo_explain_list;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24065) : cljs.core.deref.call(null,G__24065));
}));
}));
re_frame.undo.undo = (function undo(undos,cur,redos){
var u = (function (){var G__24075 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24075) : cljs.core.deref.call(null,G__24075));
})();
var r = cljs.core.cons((function (){var G__24076 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24076) : cljs.core.deref.call(null,G__24076));
})(),(function (){var G__24077 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24077) : cljs.core.deref.call(null,G__24077));
})());
var G__24078_24084 = cur;
var G__24079_24085 = cljs.core.last(u);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24078_24084,G__24079_24085) : cljs.core.reset_BANG_.call(null,G__24078_24084,G__24079_24085));

var G__24080_24086 = redos;
var G__24081_24087 = r;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24080_24086,G__24081_24087) : cljs.core.reset_BANG_.call(null,G__24080_24086,G__24081_24087));

var G__24082 = undos;
var G__24083 = cljs.core.pop(u);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24082,G__24083) : cljs.core.reset_BANG_.call(null,G__24082,G__24083));
});
/**
* undo until we reach n or run out of undos
*/
re_frame.undo.undo_n = (function undo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.undos_QMARK_())){
re_frame.undo.undo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.undo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__24088 = (n - (1));
n = G__24088;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$103,(function handler(_,p__24089){
var vec__24091 = p__24089;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24091,(1),null);
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
var u = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__24101 = undos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24101) : cljs.core.deref.call(null,G__24101));
})(),(function (){var G__24102 = cur;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24102) : cljs.core.deref.call(null,G__24102));
})());
var r = (function (){var G__24103 = redos;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24103) : cljs.core.deref.call(null,G__24103));
})();
var G__24104_24110 = cur;
var G__24105_24111 = cljs.core.first(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24104_24110,G__24105_24111) : cljs.core.reset_BANG_.call(null,G__24104_24110,G__24105_24111));

var G__24106_24112 = redos;
var G__24107_24113 = cljs.core.rest(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24106_24112,G__24107_24113) : cljs.core.reset_BANG_.call(null,G__24106_24112,G__24107_24113));

var G__24108 = undos;
var G__24109 = u;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24108,G__24109) : cljs.core.reset_BANG_.call(null,G__24108,G__24109));
});
/**
* redo until we reach n or run out of redos
*/
re_frame.undo.redo_n = (function redo_n(n){
while(true){
if(((n > (0))) && (re_frame.undo.redos_QMARK_())){
re_frame.undo.redo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.redo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__24114 = (n - (1));
n = G__24114;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$104,(function handler(_,p__24115){
var vec__24117 = p__24115;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24117,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24117,(1),null);
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
