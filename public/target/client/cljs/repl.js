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
var seq__30495_30499 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30496_30500 = null;
var count__30497_30501 = (0);
var i__30498_30502 = (0);
while(true){
if((i__30498_30502 < count__30497_30501)){
var f_30503 = cljs.core._nth.call(null,chunk__30496_30500,i__30498_30502);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30503);

var G__30504 = seq__30495_30499;
var G__30505 = chunk__30496_30500;
var G__30506 = count__30497_30501;
var G__30507 = (i__30498_30502 + (1));
seq__30495_30499 = G__30504;
chunk__30496_30500 = G__30505;
count__30497_30501 = G__30506;
i__30498_30502 = G__30507;
continue;
} else {
var temp__4126__auto___30508 = cljs.core.seq.call(null,seq__30495_30499);
if(temp__4126__auto___30508){
var seq__30495_30509__$1 = temp__4126__auto___30508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30495_30509__$1)){
var c__13560__auto___30510 = cljs.core.chunk_first.call(null,seq__30495_30509__$1);
var G__30511 = cljs.core.chunk_rest.call(null,seq__30495_30509__$1);
var G__30512 = c__13560__auto___30510;
var G__30513 = cljs.core.count.call(null,c__13560__auto___30510);
var G__30514 = (0);
seq__30495_30499 = G__30511;
chunk__30496_30500 = G__30512;
count__30497_30501 = G__30513;
i__30498_30502 = G__30514;
continue;
} else {
var f_30515 = cljs.core.first.call(null,seq__30495_30509__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30515);

var G__30516 = cljs.core.next.call(null,seq__30495_30509__$1);
var G__30517 = null;
var G__30518 = (0);
var G__30519 = (0);
seq__30495_30499 = G__30516;
chunk__30496_30500 = G__30517;
count__30497_30501 = G__30518;
i__30498_30502 = G__30519;
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

//# sourceMappingURL=repl.js.map?rel=1429446863032