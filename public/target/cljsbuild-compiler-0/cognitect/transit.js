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
var G__16889 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16889) : com.cognitect.transit.eq.hashCode.call(null,G__16889));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__16890 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16890) : com.cognitect.transit.eq.hashCode.call(null,G__16890));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__16891 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16891) : com.cognitect.transit.eq.hashCode.call(null,G__16891));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__16896_16900 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__16897_16901 = null;
var count__16898_16902 = (0);
var i__16899_16903 = (0);
while(true){
if((i__16899_16903 < count__16898_16902)){
var k_16904 = chunk__16897_16901.cljs$core$IIndexed$_nth$arity$2(null,i__16899_16903);
var v_16905 = (b[k_16904]);
(a[k_16904] = v_16905);

var G__16906 = seq__16896_16900;
var G__16907 = chunk__16897_16901;
var G__16908 = count__16898_16902;
var G__16909 = (i__16899_16903 + (1));
seq__16896_16900 = G__16906;
chunk__16897_16901 = G__16907;
count__16898_16902 = G__16908;
i__16899_16903 = G__16909;
continue;
} else {
var temp__4126__auto___16910 = cljs.core.seq(seq__16896_16900);
if(temp__4126__auto___16910){
var seq__16896_16911__$1 = temp__4126__auto___16910;
if(cljs.core.chunked_seq_QMARK_(seq__16896_16911__$1)){
var c__4593__auto___16912 = cljs.core.chunk_first(seq__16896_16911__$1);
var G__16913 = cljs.core.chunk_rest(seq__16896_16911__$1);
var G__16914 = c__4593__auto___16912;
var G__16915 = cljs.core.count(c__4593__auto___16912);
var G__16916 = (0);
seq__16896_16900 = G__16913;
chunk__16897_16901 = G__16914;
count__16898_16902 = G__16915;
i__16899_16903 = G__16916;
continue;
} else {
var k_16917 = cljs.core.first(seq__16896_16911__$1);
var v_16918 = (b[k_16917]);
(a[k_16917] = v_16918);

var G__16919 = cljs.core.next(seq__16896_16911__$1);
var G__16920 = null;
var G__16921 = (0);
var G__16922 = (0);
seq__16896_16900 = G__16919;
chunk__16897_16901 = G__16920;
count__16898_16902 = G__16921;
i__16899_16903 = G__16922;
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
var G__16923 = arr;
var G__16924 = true;
var G__16925 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__16923,G__16924,G__16925) : cljs.core.PersistentArrayMap.fromArray.call(null,G__16923,G__16924,G__16925));
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
var G__16926 = arr;
var G__16927 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__16926,G__16927) : cljs.core.PersistentVector.fromArray.call(null,G__16926,G__16927));
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
var G__16932 = cljs.core.name(type);
var G__16933 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__16932){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__16932))
,":",((function (G__16932){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__16932))
,"set",((function (G__16932){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__16932))
,"list",((function (G__16932){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__16932))
,"cmap",((function (G__16932){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__16934 = (i + (2));
var G__16935 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__16934;
ret = G__16935;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__16932))
], null),cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$17)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__16932,G__16933) : com.cognitect.transit.reader.call(null,G__16932,G__16933));
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
var seq__16936_16942 = cljs.core.seq(v);
var chunk__16937_16943 = null;
var count__16938_16944 = (0);
var i__16939_16945 = (0);
while(true){
if((i__16939_16945 < count__16938_16944)){
var x_16946 = chunk__16937_16943.cljs$core$IIndexed$_nth$arity$2(null,i__16939_16945);
ret.push(x_16946);

var G__16947 = seq__16936_16942;
var G__16948 = chunk__16937_16943;
var G__16949 = count__16938_16944;
var G__16950 = (i__16939_16945 + (1));
seq__16936_16942 = G__16947;
chunk__16937_16943 = G__16948;
count__16938_16944 = G__16949;
i__16939_16945 = G__16950;
continue;
} else {
var temp__4126__auto___16951 = cljs.core.seq(seq__16936_16942);
if(temp__4126__auto___16951){
var seq__16936_16952__$1 = temp__4126__auto___16951;
if(cljs.core.chunked_seq_QMARK_(seq__16936_16952__$1)){
var c__4593__auto___16953 = cljs.core.chunk_first(seq__16936_16952__$1);
var G__16954 = cljs.core.chunk_rest(seq__16936_16952__$1);
var G__16955 = c__4593__auto___16953;
var G__16956 = cljs.core.count(c__4593__auto___16953);
var G__16957 = (0);
seq__16936_16942 = G__16954;
chunk__16937_16943 = G__16955;
count__16938_16944 = G__16956;
i__16939_16945 = G__16957;
continue;
} else {
var x_16958 = cljs.core.first(seq__16936_16952__$1);
ret.push(x_16958);

var G__16959 = cljs.core.next(seq__16936_16952__$1);
var G__16960 = null;
var G__16961 = (0);
var G__16962 = (0);
seq__16936_16942 = G__16959;
chunk__16937_16943 = G__16960;
count__16938_16944 = G__16961;
i__16939_16945 = G__16962;
continue;
}
} else {
}
}
break;
}

var G__16940 = "array";
var G__16941 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__16940,G__16941) : com.cognitect.transit.tagged.call(null,G__16940,G__16941));
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
var seq__16963_16969 = cljs.core.seq(v);
var chunk__16964_16970 = null;
var count__16965_16971 = (0);
var i__16966_16972 = (0);
while(true){
if((i__16966_16972 < count__16965_16971)){
var x_16973 = chunk__16964_16970.cljs$core$IIndexed$_nth$arity$2(null,i__16966_16972);
ret.push(x_16973);

var G__16974 = seq__16963_16969;
var G__16975 = chunk__16964_16970;
var G__16976 = count__16965_16971;
var G__16977 = (i__16966_16972 + (1));
seq__16963_16969 = G__16974;
chunk__16964_16970 = G__16975;
count__16965_16971 = G__16976;
i__16966_16972 = G__16977;
continue;
} else {
var temp__4126__auto___16978 = cljs.core.seq(seq__16963_16969);
if(temp__4126__auto___16978){
var seq__16963_16979__$1 = temp__4126__auto___16978;
if(cljs.core.chunked_seq_QMARK_(seq__16963_16979__$1)){
var c__4593__auto___16980 = cljs.core.chunk_first(seq__16963_16979__$1);
var G__16981 = cljs.core.chunk_rest(seq__16963_16979__$1);
var G__16982 = c__4593__auto___16980;
var G__16983 = cljs.core.count(c__4593__auto___16980);
var G__16984 = (0);
seq__16963_16969 = G__16981;
chunk__16964_16970 = G__16982;
count__16965_16971 = G__16983;
i__16966_16972 = G__16984;
continue;
} else {
var x_16985 = cljs.core.first(seq__16963_16979__$1);
ret.push(x_16985);

var G__16986 = cljs.core.next(seq__16963_16979__$1);
var G__16987 = null;
var G__16988 = (0);
var G__16989 = (0);
seq__16963_16969 = G__16986;
chunk__16964_16970 = G__16987;
count__16965_16971 = G__16988;
i__16966_16972 = G__16989;
continue;
}
} else {
}
}
break;
}

var G__16967 = "array";
var G__16968 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__16967,G__16968) : com.cognitect.transit.tagged.call(null,G__16967,G__16968));
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
var seq__16990_16994 = cljs.core.seq(v);
var chunk__16991_16995 = null;
var count__16992_16996 = (0);
var i__16993_16997 = (0);
while(true){
if((i__16993_16997 < count__16992_16996)){
var x_16998 = chunk__16991_16995.cljs$core$IIndexed$_nth$arity$2(null,i__16993_16997);
ret.push(x_16998);

var G__16999 = seq__16990_16994;
var G__17000 = chunk__16991_16995;
var G__17001 = count__16992_16996;
var G__17002 = (i__16993_16997 + (1));
seq__16990_16994 = G__16999;
chunk__16991_16995 = G__17000;
count__16992_16996 = G__17001;
i__16993_16997 = G__17002;
continue;
} else {
var temp__4126__auto___17003 = cljs.core.seq(seq__16990_16994);
if(temp__4126__auto___17003){
var seq__16990_17004__$1 = temp__4126__auto___17003;
if(cljs.core.chunked_seq_QMARK_(seq__16990_17004__$1)){
var c__4593__auto___17005 = cljs.core.chunk_first(seq__16990_17004__$1);
var G__17006 = cljs.core.chunk_rest(seq__16990_17004__$1);
var G__17007 = c__4593__auto___17005;
var G__17008 = cljs.core.count(c__4593__auto___17005);
var G__17009 = (0);
seq__16990_16994 = G__17006;
chunk__16991_16995 = G__17007;
count__16992_16996 = G__17008;
i__16993_16997 = G__17009;
continue;
} else {
var x_17010 = cljs.core.first(seq__16990_17004__$1);
ret.push(x_17010);

var G__17011 = cljs.core.next(seq__16990_17004__$1);
var G__17012 = null;
var G__17013 = (0);
var G__17014 = (0);
seq__16990_16994 = G__17011;
chunk__16991_16995 = G__17012;
count__16992_16996 = G__17013;
i__16993_16997 = G__17014;
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
var G__17033 = cljs.core.name(type);
var G__17034 = cognitect.transit.opts_merge({"unpack": ((function (G__17033,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__17033,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x17038 = cljs.core.clone(handlers);
x17038.forEach = ((function (x17038,G__17033,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__17039 = cljs.core.seq(coll);
var chunk__17040 = null;
var count__17041 = (0);
var i__17042 = (0);
while(true){
if((i__17042 < count__17041)){
var vec__17043 = chunk__17040.cljs$core$IIndexed$_nth$arity$2(null,i__17042);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17043,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17043,(1),null);
var G__17044_17049 = v;
var G__17045_17050 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17044_17049,G__17045_17050) : f.call(null,G__17044_17049,G__17045_17050));

var G__17051 = seq__17039;
var G__17052 = chunk__17040;
var G__17053 = count__17041;
var G__17054 = (i__17042 + (1));
seq__17039 = G__17051;
chunk__17040 = G__17052;
count__17041 = G__17053;
i__17042 = G__17054;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17039);
if(temp__4126__auto__){
var seq__17039__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17039__$1)){
var c__4593__auto__ = cljs.core.chunk_first(seq__17039__$1);
var G__17055 = cljs.core.chunk_rest(seq__17039__$1);
var G__17056 = c__4593__auto__;
var G__17057 = cljs.core.count(c__4593__auto__);
var G__17058 = (0);
seq__17039 = G__17055;
chunk__17040 = G__17056;
count__17041 = G__17057;
i__17042 = G__17058;
continue;
} else {
var vec__17046 = cljs.core.first(seq__17039__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17046,(1),null);
var G__17047_17059 = v;
var G__17048_17060 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17047_17059,G__17048_17060) : f.call(null,G__17047_17059,G__17048_17060));

var G__17061 = cljs.core.next(seq__17039__$1);
var G__17062 = null;
var G__17063 = (0);
var G__17064 = (0);
seq__17039 = G__17061;
chunk__17040 = G__17062;
count__17041 = G__17063;
i__17042 = G__17064;
continue;
}
} else {
return null;
}
}
break;
}
});})(x17038,G__17033,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x17038;
})(), "objectBuilder": ((function (G__17033,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__17033,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__17035 = obj;
G__17035.push((function (){var G__17036 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__17036) : kfn.call(null,G__17036));
})(),(function (){var G__17037 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__17037) : vfn.call(null,G__17037));
})());

return G__17035;
});})(G__17033,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__17033,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$17)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__17033,G__17034) : com.cognitect.transit.writer.call(null,G__17033,G__17034));
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
if(typeof cognitect.transit.t17079 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t17079 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta17080){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta17080 = meta17080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t17079.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__17082 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__17082) : self__.tag_fn.call(null,G__17082));
});

cognitect.transit.t17079.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__17083 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__17083) : self__.rep_fn.call(null,G__17083));
});

cognitect.transit.t17079.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__17084 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__17084) : self__.str_rep_fn.call(null,G__17084));
} else {
return null;
}
});

cognitect.transit.t17079.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t17079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17081){
var self__ = this;
var _17081__$1 = this;
return self__.meta17080;
});

cognitect.transit.t17079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17081,meta17080__$1){
var self__ = this;
var _17081__$1 = this;
return (new cognitect.transit.t17079(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta17080__$1));
});

cognitect.transit.t17079.cljs$lang$type = true;

cognitect.transit.t17079.cljs$lang$ctorStr = "cognitect.transit/t17079";

cognitect.transit.t17079.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/t17079");
});

cognitect.transit.__GT_t17079 = (function __GT_t17079(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17080){
return (new cognitect.transit.t17079(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17080));
});

}

return (new cognitect.transit.t17079(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17087 = tag;
var G__17088 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__17087,G__17088) : com.cognitect.transit.types.taggedValue.call(null,G__17087,G__17088));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__17090 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__17090) : com.cognitect.transit.types.isTaggedValue.call(null,G__17090));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__17092 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__17092) : com.cognitect.transit.types.integer.call(null,G__17092));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__17094 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__17094) : com.cognitect.transit.types.isInteger.call(null,G__17094));
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__17096 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__17096) : com.cognitect.transit.types.bigInteger.call(null,G__17096));
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__17098 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__17098) : com.cognitect.transit.types.isBigInteger.call(null,G__17098));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__17100 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__17100) : com.cognitect.transit.types.bigDecimalValue.call(null,G__17100));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__17102 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__17102) : com.cognitect.transit.types.isBigDecimal.call(null,G__17102));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__17104 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__17104) : com.cognitect.transit.types.uri.call(null,G__17104));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__17106 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__17106) : com.cognitect.transit.types.isURI.call(null,G__17106));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__17108 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__17108) : com.cognitect.transit.types.uuid.call(null,G__17108));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__17110 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__17110) : com.cognitect.transit.types.isUUID.call(null,G__17110));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__17112 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__17112) : com.cognitect.transit.types.binary.call(null,G__17112));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__17114 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__17114) : com.cognitect.transit.types.isBinary.call(null,G__17114));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__17116 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__17116) : com.cognitect.transit.types.quoted.call(null,G__17116));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__17118 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__17118) : com.cognitect.transit.types.isQuoted.call(null,G__17118));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__17120 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__17120) : com.cognitect.transit.types.link.call(null,G__17120));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__17122 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__17122) : com.cognitect.transit.types.isLink.call(null,G__17122));
});
