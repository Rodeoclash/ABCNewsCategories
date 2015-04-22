// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__16893 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16893) : com.cognitect.transit.eq.hashCode.call(null,G__16893));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__16894 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16894) : com.cognitect.transit.eq.hashCode.call(null,G__16894));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__16895 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16895) : com.cognitect.transit.eq.hashCode.call(null,G__16895));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__16900_16904 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__16901_16905 = null;
var count__16902_16906 = (0);
var i__16903_16907 = (0);
while(true){
if((i__16903_16907 < count__16902_16906)){
var k_16908 = chunk__16901_16905.cljs$core$IIndexed$_nth$arity$2(null,i__16903_16907);
var v_16909 = (b[k_16908]);
(a[k_16908] = v_16909);

var G__16910 = seq__16900_16904;
var G__16911 = chunk__16901_16905;
var G__16912 = count__16902_16906;
var G__16913 = (i__16903_16907 + (1));
seq__16900_16904 = G__16910;
chunk__16901_16905 = G__16911;
count__16902_16906 = G__16912;
i__16903_16907 = G__16913;
continue;
} else {
var temp__4126__auto___16914 = cljs.core.seq(seq__16900_16904);
if(temp__4126__auto___16914){
var seq__16900_16915__$1 = temp__4126__auto___16914;
if(cljs.core.chunked_seq_QMARK_(seq__16900_16915__$1)){
var c__4593__auto___16916 = cljs.core.chunk_first(seq__16900_16915__$1);
var G__16917 = cljs.core.chunk_rest(seq__16900_16915__$1);
var G__16918 = c__4593__auto___16916;
var G__16919 = cljs.core.count(c__4593__auto___16916);
var G__16920 = (0);
seq__16900_16904 = G__16917;
chunk__16901_16905 = G__16918;
count__16902_16906 = G__16919;
i__16903_16907 = G__16920;
continue;
} else {
var k_16921 = cljs.core.first(seq__16900_16915__$1);
var v_16922 = (b[k_16921]);
(a[k_16921] = v_16922);

var G__16923 = cljs.core.next(seq__16900_16915__$1);
var G__16924 = null;
var G__16925 = (0);
var G__16926 = (0);
seq__16900_16904 = G__16923;
chunk__16901_16905 = G__16924;
count__16902_16906 = G__16925;
i__16903_16907 = G__16926;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__16927 = arr;
var G__16928 = true;
var G__16929 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__16927,G__16928,G__16929) : cljs.core.PersistentArrayMap.fromArray.call(null,G__16927,G__16928,G__16929));
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
var G__16930 = arr;
var G__16931 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__16930,G__16931) : cljs.core.PersistentVector.fromArray.call(null,G__16930,G__16931));
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.cljs$core$IFn$_invoke$arity$2(type,null);
});
var reader__2 = (function (type,opts){
var G__16936 = cljs.core.name(type);
var G__16937 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__16936){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__16936))
,":",((function (G__16936){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__16936))
,"set",((function (G__16936){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__16936))
,"list",((function (G__16936){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__16936))
,"cmap",((function (G__16936){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__16938 = (i + (2));
var G__16939 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__16938;
ret = G__16939;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__16936))
], null),cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$17)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__16936,G__16937) : com.cognitect.transit.reader.call(null,G__16936,G__16937));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16940_16946 = cljs.core.seq(v);
var chunk__16941_16947 = null;
var count__16942_16948 = (0);
var i__16943_16949 = (0);
while(true){
if((i__16943_16949 < count__16942_16948)){
var x_16950 = chunk__16941_16947.cljs$core$IIndexed$_nth$arity$2(null,i__16943_16949);
ret.push(x_16950);

var G__16951 = seq__16940_16946;
var G__16952 = chunk__16941_16947;
var G__16953 = count__16942_16948;
var G__16954 = (i__16943_16949 + (1));
seq__16940_16946 = G__16951;
chunk__16941_16947 = G__16952;
count__16942_16948 = G__16953;
i__16943_16949 = G__16954;
continue;
} else {
var temp__4126__auto___16955 = cljs.core.seq(seq__16940_16946);
if(temp__4126__auto___16955){
var seq__16940_16956__$1 = temp__4126__auto___16955;
if(cljs.core.chunked_seq_QMARK_(seq__16940_16956__$1)){
var c__4593__auto___16957 = cljs.core.chunk_first(seq__16940_16956__$1);
var G__16958 = cljs.core.chunk_rest(seq__16940_16956__$1);
var G__16959 = c__4593__auto___16957;
var G__16960 = cljs.core.count(c__4593__auto___16957);
var G__16961 = (0);
seq__16940_16946 = G__16958;
chunk__16941_16947 = G__16959;
count__16942_16948 = G__16960;
i__16943_16949 = G__16961;
continue;
} else {
var x_16962 = cljs.core.first(seq__16940_16956__$1);
ret.push(x_16962);

var G__16963 = cljs.core.next(seq__16940_16956__$1);
var G__16964 = null;
var G__16965 = (0);
var G__16966 = (0);
seq__16940_16946 = G__16963;
chunk__16941_16947 = G__16964;
count__16942_16948 = G__16965;
i__16943_16949 = G__16966;
continue;
}
} else {
}
}
break;
}

var G__16944 = "array";
var G__16945 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__16944,G__16945) : com.cognitect.transit.tagged.call(null,G__16944,G__16945));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16967_16973 = cljs.core.seq(v);
var chunk__16968_16974 = null;
var count__16969_16975 = (0);
var i__16970_16976 = (0);
while(true){
if((i__16970_16976 < count__16969_16975)){
var x_16977 = chunk__16968_16974.cljs$core$IIndexed$_nth$arity$2(null,i__16970_16976);
ret.push(x_16977);

var G__16978 = seq__16967_16973;
var G__16979 = chunk__16968_16974;
var G__16980 = count__16969_16975;
var G__16981 = (i__16970_16976 + (1));
seq__16967_16973 = G__16978;
chunk__16968_16974 = G__16979;
count__16969_16975 = G__16980;
i__16970_16976 = G__16981;
continue;
} else {
var temp__4126__auto___16982 = cljs.core.seq(seq__16967_16973);
if(temp__4126__auto___16982){
var seq__16967_16983__$1 = temp__4126__auto___16982;
if(cljs.core.chunked_seq_QMARK_(seq__16967_16983__$1)){
var c__4593__auto___16984 = cljs.core.chunk_first(seq__16967_16983__$1);
var G__16985 = cljs.core.chunk_rest(seq__16967_16983__$1);
var G__16986 = c__4593__auto___16984;
var G__16987 = cljs.core.count(c__4593__auto___16984);
var G__16988 = (0);
seq__16967_16973 = G__16985;
chunk__16968_16974 = G__16986;
count__16969_16975 = G__16987;
i__16970_16976 = G__16988;
continue;
} else {
var x_16989 = cljs.core.first(seq__16967_16983__$1);
ret.push(x_16989);

var G__16990 = cljs.core.next(seq__16967_16983__$1);
var G__16991 = null;
var G__16992 = (0);
var G__16993 = (0);
seq__16967_16973 = G__16990;
chunk__16968_16974 = G__16991;
count__16969_16975 = G__16992;
i__16970_16976 = G__16993;
continue;
}
} else {
}
}
break;
}

var G__16971 = "array";
var G__16972 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__16971,G__16972) : com.cognitect.transit.tagged.call(null,G__16971,G__16972));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16994_16998 = cljs.core.seq(v);
var chunk__16995_16999 = null;
var count__16996_17000 = (0);
var i__16997_17001 = (0);
while(true){
if((i__16997_17001 < count__16996_17000)){
var x_17002 = chunk__16995_16999.cljs$core$IIndexed$_nth$arity$2(null,i__16997_17001);
ret.push(x_17002);

var G__17003 = seq__16994_16998;
var G__17004 = chunk__16995_16999;
var G__17005 = count__16996_17000;
var G__17006 = (i__16997_17001 + (1));
seq__16994_16998 = G__17003;
chunk__16995_16999 = G__17004;
count__16996_17000 = G__17005;
i__16997_17001 = G__17006;
continue;
} else {
var temp__4126__auto___17007 = cljs.core.seq(seq__16994_16998);
if(temp__4126__auto___17007){
var seq__16994_17008__$1 = temp__4126__auto___17007;
if(cljs.core.chunked_seq_QMARK_(seq__16994_17008__$1)){
var c__4593__auto___17009 = cljs.core.chunk_first(seq__16994_17008__$1);
var G__17010 = cljs.core.chunk_rest(seq__16994_17008__$1);
var G__17011 = c__4593__auto___17009;
var G__17012 = cljs.core.count(c__4593__auto___17009);
var G__17013 = (0);
seq__16994_16998 = G__17010;
chunk__16995_16999 = G__17011;
count__16996_17000 = G__17012;
i__16997_17001 = G__17013;
continue;
} else {
var x_17014 = cljs.core.first(seq__16994_17008__$1);
ret.push(x_17014);

var G__17015 = cljs.core.next(seq__16994_17008__$1);
var G__17016 = null;
var G__17017 = (0);
var G__17018 = (0);
seq__16994_16998 = G__17015;
chunk__16995_16999 = G__17016;
count__16996_17000 = G__17017;
i__16997_17001 = G__17018;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.cljs$core$IFn$_invoke$arity$2(type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__17037 = cljs.core.name(type);
var G__17038 = cognitect.transit.opts_merge({"unpack": ((function (G__17037,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__17037,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x17042 = cljs.core.clone(handlers);
x17042.forEach = ((function (x17042,G__17037,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__17043 = cljs.core.seq(coll);
var chunk__17044 = null;
var count__17045 = (0);
var i__17046 = (0);
while(true){
if((i__17046 < count__17045)){
var vec__17047 = chunk__17044.cljs$core$IIndexed$_nth$arity$2(null,i__17046);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17047,(1),null);
var G__17048_17053 = v;
var G__17049_17054 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17048_17053,G__17049_17054) : f.call(null,G__17048_17053,G__17049_17054));

var G__17055 = seq__17043;
var G__17056 = chunk__17044;
var G__17057 = count__17045;
var G__17058 = (i__17046 + (1));
seq__17043 = G__17055;
chunk__17044 = G__17056;
count__17045 = G__17057;
i__17046 = G__17058;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17043);
if(temp__4126__auto__){
var seq__17043__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17043__$1)){
var c__4593__auto__ = cljs.core.chunk_first(seq__17043__$1);
var G__17059 = cljs.core.chunk_rest(seq__17043__$1);
var G__17060 = c__4593__auto__;
var G__17061 = cljs.core.count(c__4593__auto__);
var G__17062 = (0);
seq__17043 = G__17059;
chunk__17044 = G__17060;
count__17045 = G__17061;
i__17046 = G__17062;
continue;
} else {
var vec__17050 = cljs.core.first(seq__17043__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17050,(1),null);
var G__17051_17063 = v;
var G__17052_17064 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17051_17063,G__17052_17064) : f.call(null,G__17051_17063,G__17052_17064));

var G__17065 = cljs.core.next(seq__17043__$1);
var G__17066 = null;
var G__17067 = (0);
var G__17068 = (0);
seq__17043 = G__17065;
chunk__17044 = G__17066;
count__17045 = G__17067;
i__17046 = G__17068;
continue;
}
} else {
return null;
}
}
break;
}
});})(x17042,G__17037,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x17042;
})(), "objectBuilder": ((function (G__17037,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__17037,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__17039 = obj;
G__17039.push((function (){var G__17040 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__17040) : kfn.call(null,G__17040));
})(),(function (){var G__17041 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__17041) : vfn.call(null,G__17041));
})());

return G__17039;
});})(G__17037,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__17037,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$17)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__17037,G__17038) : com.cognitect.transit.writer.call(null,G__17037,G__17038));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t17083 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t17083 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta17084){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta17084 = meta17084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t17083.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__17086 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__17086) : self__.tag_fn.call(null,G__17086));
});

cognitect.transit.t17083.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__17087 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__17087) : self__.rep_fn.call(null,G__17087));
});

cognitect.transit.t17083.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__17088 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__17088) : self__.str_rep_fn.call(null,G__17088));
} else {
return null;
}
});

cognitect.transit.t17083.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t17083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17085){
var self__ = this;
var _17085__$1 = this;
return self__.meta17084;
});

cognitect.transit.t17083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17085,meta17084__$1){
var self__ = this;
var _17085__$1 = this;
return (new cognitect.transit.t17083(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta17084__$1));
});

cognitect.transit.t17083.cljs$lang$type = true;

cognitect.transit.t17083.cljs$lang$ctorStr = "cognitect.transit/t17083";

cognitect.transit.t17083.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/t17083");
});

cognitect.transit.__GT_t17083 = (function __GT_t17083(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17084){
return (new cognitect.transit.t17083(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17084));
});

}

return (new cognitect.transit.t17083(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
var G__17091 = tag;
var G__17092 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__17091,G__17092) : com.cognitect.transit.types.taggedValue.call(null,G__17091,G__17092));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__17094 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__17094) : com.cognitect.transit.types.isTaggedValue.call(null,G__17094));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__17096 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__17096) : com.cognitect.transit.types.integer.call(null,G__17096));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__17098 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__17098) : com.cognitect.transit.types.isInteger.call(null,G__17098));
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__17100 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__17100) : com.cognitect.transit.types.bigInteger.call(null,G__17100));
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__17102 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__17102) : com.cognitect.transit.types.isBigInteger.call(null,G__17102));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__17104 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__17104) : com.cognitect.transit.types.bigDecimalValue.call(null,G__17104));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__17106 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__17106) : com.cognitect.transit.types.isBigDecimal.call(null,G__17106));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__17108 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__17108) : com.cognitect.transit.types.uri.call(null,G__17108));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__17110 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__17110) : com.cognitect.transit.types.isURI.call(null,G__17110));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__17112 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__17112) : com.cognitect.transit.types.uuid.call(null,G__17112));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__17114 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__17114) : com.cognitect.transit.types.isUUID.call(null,G__17114));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__17116 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__17116) : com.cognitect.transit.types.binary.call(null,G__17116));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__17118 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__17118) : com.cognitect.transit.types.isBinary.call(null,G__17118));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__17120 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__17120) : com.cognitect.transit.types.quoted.call(null,G__17120));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__17122 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__17122) : com.cognitect.transit.types.isQuoted.call(null,G__17122));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__17124 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__17124) : com.cognitect.transit.types.link.call(null,G__17124));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__17126 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__17126) : com.cognitect.transit.types.isLink.call(null,G__17126));
});
