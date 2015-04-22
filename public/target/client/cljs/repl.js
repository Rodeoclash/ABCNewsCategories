// Compiled by ClojureScript 0.0-2816 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31493_31497 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31494_31498 = null;
var count__31495_31499 = (0);
var i__31496_31500 = (0);
while(true){
if((i__31496_31500 < count__31495_31499)){
var f_31501 = cljs.core._nth.call(null,chunk__31494_31498,i__31496_31500);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31501);

var G__31502 = seq__31493_31497;
var G__31503 = chunk__31494_31498;
var G__31504 = count__31495_31499;
var G__31505 = (i__31496_31500 + (1));
seq__31493_31497 = G__31502;
chunk__31494_31498 = G__31503;
count__31495_31499 = G__31504;
i__31496_31500 = G__31505;
continue;
} else {
var temp__4126__auto___31506 = cljs.core.seq.call(null,seq__31493_31497);
if(temp__4126__auto___31506){
var seq__31493_31507__$1 = temp__4126__auto___31506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31493_31507__$1)){
var c__13560__auto___31508 = cljs.core.chunk_first.call(null,seq__31493_31507__$1);
var G__31509 = cljs.core.chunk_rest.call(null,seq__31493_31507__$1);
var G__31510 = c__13560__auto___31508;
var G__31511 = cljs.core.count.call(null,c__13560__auto___31508);
var G__31512 = (0);
seq__31493_31497 = G__31509;
chunk__31494_31498 = G__31510;
count__31495_31499 = G__31511;
i__31496_31500 = G__31512;
continue;
} else {
var f_31513 = cljs.core.first.call(null,seq__31493_31507__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_31513);

var G__31514 = cljs.core.next.call(null,seq__31493_31507__$1);
var G__31515 = null;
var G__31516 = (0);
var G__31517 = (0);
seq__31493_31497 = G__31514;
chunk__31494_31498 = G__31515;
count__31495_31499 = G__31516;
i__31496_31500 = G__31517;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1429705622100