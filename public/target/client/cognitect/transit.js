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
var G__16885 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16885) : com.cognitect.transit.eq.hashCode.call(null,G__16885));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__16886 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16886) : com.cognitect.transit.eq.hashCode.call(null,G__16886));
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
var G__16887 = this$__$1;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(G__16887) : com.cognitect.transit.eq.hashCode.call(null,G__16887));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__16892_16896 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__16893_16897 = null;
var count__16894_16898 = (0);
var i__16895_16899 = (0);
while(true){
if((i__16895_16899 < count__16894_16898)){
var k_16900 = chunk__16893_16897.cljs$core$IIndexed$_nth$arity$2(null,i__16895_16899);
var v_16901 = (b[k_16900]);
(a[k_16900] = v_16901);

var G__16902 = seq__16892_16896;
var G__16903 = chunk__16893_16897;
var G__16904 = count__16894_16898;
var G__16905 = (i__16895_16899 + (1));
seq__16892_16896 = G__16902;
chunk__16893_16897 = G__16903;
count__16894_16898 = G__16904;
i__16895_16899 = G__16905;
continue;
} else {
var temp__4126__auto___16906 = cljs.core.seq(seq__16892_16896);
if(temp__4126__auto___16906){
var seq__16892_16907__$1 = temp__4126__auto___16906;
if(cljs.core.chunked_seq_QMARK_(seq__16892_16907__$1)){
var c__4593__auto___16908 = cljs.core.chunk_first(seq__16892_16907__$1);
var G__16909 = cljs.core.chunk_rest(seq__16892_16907__$1);
var G__16910 = c__4593__auto___16908;
var G__16911 = cljs.core.count(c__4593__auto___16908);
var G__16912 = (0);
seq__16892_16896 = G__16909;
chunk__16893_16897 = G__16910;
count__16894_16898 = G__16911;
i__16895_16899 = G__16912;
continue;
} else {
var k_16913 = cljs.core.first(seq__16892_16907__$1);
var v_16914 = (b[k_16913]);
(a[k_16913] = v_16914);

var G__16915 = cljs.core.next(seq__16892_16907__$1);
var G__16916 = null;
var G__16917 = (0);
var G__16918 = (0);
seq__16892_16896 = G__16915;
chunk__16893_16897 = G__16916;
count__16894_16898 = G__16917;
i__16895_16899 = G__16918;
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
var G__16919 = arr;
var G__16920 = true;
var G__16921 = true;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(G__16919,G__16920,G__16921) : cljs.core.PersistentArrayMap.fromArray.call(null,G__16919,G__16920,G__16921));
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
var G__16922 = arr;
var G__16923 = true;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(G__16922,G__16923) : cljs.core.PersistentVector.fromArray.call(null,G__16922,G__16923));
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
var G__16928 = cljs.core.name(type);
var G__16929 = cognitect.transit.opts_merge({"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__16928){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__16928))
,":",((function (G__16928){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__16928))
,"set",((function (G__16928){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__16928))
,"list",((function (G__16928){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__16928))
,"cmap",((function (G__16928){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__16930 = (i + (2));
var G__16931 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__16930;
ret = G__16931;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__16928))
], null),cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(opts)], 0)))},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$17)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__16928,G__16929) : com.cognitect.transit.reader.call(null,G__16928,G__16929));
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
var seq__16932_16938 = cljs.core.seq(v);
var chunk__16933_16939 = null;
var count__16934_16940 = (0);
var i__16935_16941 = (0);
while(true){
if((i__16935_16941 < count__16934_16940)){
var x_16942 = chunk__16933_16939.cljs$core$IIndexed$_nth$arity$2(null,i__16935_16941);
ret.push(x_16942);

var G__16943 = seq__16932_16938;
var G__16944 = chunk__16933_16939;
var G__16945 = count__16934_16940;
var G__16946 = (i__16935_16941 + (1));
seq__16932_16938 = G__16943;
chunk__16933_16939 = G__16944;
count__16934_16940 = G__16945;
i__16935_16941 = G__16946;
continue;
} else {
var temp__4126__auto___16947 = cljs.core.seq(seq__16932_16938);
if(temp__4126__auto___16947){
var seq__16932_16948__$1 = temp__4126__auto___16947;
if(cljs.core.chunked_seq_QMARK_(seq__16932_16948__$1)){
var c__4593__auto___16949 = cljs.core.chunk_first(seq__16932_16948__$1);
var G__16950 = cljs.core.chunk_rest(seq__16932_16948__$1);
var G__16951 = c__4593__auto___16949;
var G__16952 = cljs.core.count(c__4593__auto___16949);
var G__16953 = (0);
seq__16932_16938 = G__16950;
chunk__16933_16939 = G__16951;
count__16934_16940 = G__16952;
i__16935_16941 = G__16953;
continue;
} else {
var x_16954 = cljs.core.first(seq__16932_16948__$1);
ret.push(x_16954);

var G__16955 = cljs.core.next(seq__16932_16948__$1);
var G__16956 = null;
var G__16957 = (0);
var G__16958 = (0);
seq__16932_16938 = G__16955;
chunk__16933_16939 = G__16956;
count__16934_16940 = G__16957;
i__16935_16941 = G__16958;
continue;
}
} else {
}
}
break;
}

var G__16936 = "array";
var G__16937 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__16936,G__16937) : com.cognitect.transit.tagged.call(null,G__16936,G__16937));
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
var seq__16959_16965 = cljs.core.seq(v);
var chunk__16960_16966 = null;
var count__16961_16967 = (0);
var i__16962_16968 = (0);
while(true){
if((i__16962_16968 < count__16961_16967)){
var x_16969 = chunk__16960_16966.cljs$core$IIndexed$_nth$arity$2(null,i__16962_16968);
ret.push(x_16969);

var G__16970 = seq__16959_16965;
var G__16971 = chunk__16960_16966;
var G__16972 = count__16961_16967;
var G__16973 = (i__16962_16968 + (1));
seq__16959_16965 = G__16970;
chunk__16960_16966 = G__16971;
count__16961_16967 = G__16972;
i__16962_16968 = G__16973;
continue;
} else {
var temp__4126__auto___16974 = cljs.core.seq(seq__16959_16965);
if(temp__4126__auto___16974){
var seq__16959_16975__$1 = temp__4126__auto___16974;
if(cljs.core.chunked_seq_QMARK_(seq__16959_16975__$1)){
var c__4593__auto___16976 = cljs.core.chunk_first(seq__16959_16975__$1);
var G__16977 = cljs.core.chunk_rest(seq__16959_16975__$1);
var G__16978 = c__4593__auto___16976;
var G__16979 = cljs.core.count(c__4593__auto___16976);
var G__16980 = (0);
seq__16959_16965 = G__16977;
chunk__16960_16966 = G__16978;
count__16961_16967 = G__16979;
i__16962_16968 = G__16980;
continue;
} else {
var x_16981 = cljs.core.first(seq__16959_16975__$1);
ret.push(x_16981);

var G__16982 = cljs.core.next(seq__16959_16975__$1);
var G__16983 = null;
var G__16984 = (0);
var G__16985 = (0);
seq__16959_16965 = G__16982;
chunk__16960_16966 = G__16983;
count__16961_16967 = G__16984;
i__16962_16968 = G__16985;
continue;
}
} else {
}
}
break;
}

var G__16963 = "array";
var G__16964 = ret;
return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2(G__16963,G__16964) : com.cognitect.transit.tagged.call(null,G__16963,G__16964));
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
var seq__16986_16990 = cljs.core.seq(v);
var chunk__16987_16991 = null;
var count__16988_16992 = (0);
var i__16989_16993 = (0);
while(true){
if((i__16989_16993 < count__16988_16992)){
var x_16994 = chunk__16987_16991.cljs$core$IIndexed$_nth$arity$2(null,i__16989_16993);
ret.push(x_16994);

var G__16995 = seq__16986_16990;
var G__16996 = chunk__16987_16991;
var G__16997 = count__16988_16992;
var G__16998 = (i__16989_16993 + (1));
seq__16986_16990 = G__16995;
chunk__16987_16991 = G__16996;
count__16988_16992 = G__16997;
i__16989_16993 = G__16998;
continue;
} else {
var temp__4126__auto___16999 = cljs.core.seq(seq__16986_16990);
if(temp__4126__auto___16999){
var seq__16986_17000__$1 = temp__4126__auto___16999;
if(cljs.core.chunked_seq_QMARK_(seq__16986_17000__$1)){
var c__4593__auto___17001 = cljs.core.chunk_first(seq__16986_17000__$1);
var G__17002 = cljs.core.chunk_rest(seq__16986_17000__$1);
var G__17003 = c__4593__auto___17001;
var G__17004 = cljs.core.count(c__4593__auto___17001);
var G__17005 = (0);
seq__16986_16990 = G__17002;
chunk__16987_16991 = G__17003;
count__16988_16992 = G__17004;
i__16989_16993 = G__17005;
continue;
} else {
var x_17006 = cljs.core.first(seq__16986_17000__$1);
ret.push(x_17006);

var G__17007 = cljs.core.next(seq__16986_17000__$1);
var G__17008 = null;
var G__17009 = (0);
var G__17010 = (0);
seq__16986_16990 = G__17007;
chunk__16987_16991 = G__17008;
count__16988_16992 = G__17009;
i__16989_16993 = G__17010;
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
var G__17029 = cljs.core.name(type);
var G__17030 = cognitect.transit.opts_merge({"unpack": ((function (G__17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x17034 = cljs.core.clone(handlers);
x17034.forEach = ((function (x17034,G__17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__17035 = cljs.core.seq(coll);
var chunk__17036 = null;
var count__17037 = (0);
var i__17038 = (0);
while(true){
if((i__17038 < count__17037)){
var vec__17039 = chunk__17036.cljs$core$IIndexed$_nth$arity$2(null,i__17038);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17039,(1),null);
var G__17040_17045 = v;
var G__17041_17046 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17040_17045,G__17041_17046) : f.call(null,G__17040_17045,G__17041_17046));

var G__17047 = seq__17035;
var G__17048 = chunk__17036;
var G__17049 = count__17037;
var G__17050 = (i__17038 + (1));
seq__17035 = G__17047;
chunk__17036 = G__17048;
count__17037 = G__17049;
i__17038 = G__17050;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__17035);
if(temp__4126__auto__){
var seq__17035__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17035__$1)){
var c__4593__auto__ = cljs.core.chunk_first(seq__17035__$1);
var G__17051 = cljs.core.chunk_rest(seq__17035__$1);
var G__17052 = c__4593__auto__;
var G__17053 = cljs.core.count(c__4593__auto__);
var G__17054 = (0);
seq__17035 = G__17051;
chunk__17036 = G__17052;
count__17037 = G__17053;
i__17038 = G__17054;
continue;
} else {
var vec__17042 = cljs.core.first(seq__17035__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17042,(1),null);
var G__17043_17055 = v;
var G__17044_17056 = k;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17043_17055,G__17044_17056) : f.call(null,G__17043_17055,G__17044_17056));

var G__17057 = cljs.core.next(seq__17035__$1);
var G__17058 = null;
var G__17059 = (0);
var G__17060 = (0);
seq__17035 = G__17057;
chunk__17036 = G__17058;
count__17037 = G__17059;
i__17038 = G__17060;
continue;
}
} else {
return null;
}
}
break;
}
});})(x17034,G__17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x17034;
})(), "objectBuilder": ((function (G__17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__17031 = obj;
G__17031.push((function (){var G__17032 = k;
return (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(G__17032) : kfn.call(null,G__17032));
})(),(function (){var G__17033 = v;
return (vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(G__17033) : vfn.call(null,G__17033));
})());

return G__17031;
});})(G__17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__17029,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.constant$keyword$17)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__17029,G__17030) : com.cognitect.transit.writer.call(null,G__17029,G__17030));
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
if(typeof cognitect.transit.t17075 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t17075 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta17076){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta17076 = meta17076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t17075.prototype.tag = (function (o){
var self__ = this;
var _ = this;
var G__17078 = o;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(G__17078) : self__.tag_fn.call(null,G__17078));
});

cognitect.transit.t17075.prototype.rep = (function (o){
var self__ = this;
var _ = this;
var G__17079 = o;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(G__17079) : self__.rep_fn.call(null,G__17079));
});

cognitect.transit.t17075.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
var G__17080 = o;
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(G__17080) : self__.str_rep_fn.call(null,G__17080));
} else {
return null;
}
});

cognitect.transit.t17075.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t17075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17077){
var self__ = this;
var _17077__$1 = this;
return self__.meta17076;
});

cognitect.transit.t17075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17077,meta17076__$1){
var self__ = this;
var _17077__$1 = this;
return (new cognitect.transit.t17075(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta17076__$1));
});

cognitect.transit.t17075.cljs$lang$type = true;

cognitect.transit.t17075.cljs$lang$ctorStr = "cognitect.transit/t17075";

cognitect.transit.t17075.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write(writer__4394__auto__,"cognitect.transit/t17075");
});

cognitect.transit.__GT_t17075 = (function __GT_t17075(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17076){
return (new cognitect.transit.t17075(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta17076));
});

}

return (new cognitect.transit.t17075(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17083 = tag;
var G__17084 = rep;
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(G__17083,G__17084) : com.cognitect.transit.types.taggedValue.call(null,G__17083,G__17084));
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
var G__17086 = x;
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(G__17086) : com.cognitect.transit.types.isTaggedValue.call(null,G__17086));
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
var G__17088 = s;
return (com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.integer.cljs$core$IFn$_invoke$arity$1(G__17088) : com.cognitect.transit.types.integer.call(null,G__17088));
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
var G__17090 = x;
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(G__17090) : com.cognitect.transit.types.isInteger.call(null,G__17090));
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
var G__17092 = s;
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(G__17092) : com.cognitect.transit.types.bigInteger.call(null,G__17092));
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
var G__17094 = x;
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(G__17094) : com.cognitect.transit.types.isBigInteger.call(null,G__17094));
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
var G__17096 = s;
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(G__17096) : com.cognitect.transit.types.bigDecimalValue.call(null,G__17096));
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
var G__17098 = x;
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(G__17098) : com.cognitect.transit.types.isBigDecimal.call(null,G__17098));
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
var G__17100 = s;
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(G__17100) : com.cognitect.transit.types.uri.call(null,G__17100));
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
var G__17102 = x;
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(G__17102) : com.cognitect.transit.types.isURI.call(null,G__17102));
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
var G__17104 = s;
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(G__17104) : com.cognitect.transit.types.uuid.call(null,G__17104));
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
var G__17106 = x;
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(G__17106) : com.cognitect.transit.types.isUUID.call(null,G__17106));
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
var G__17108 = s;
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(G__17108) : com.cognitect.transit.types.binary.call(null,G__17108));
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
var G__17110 = x;
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(G__17110) : com.cognitect.transit.types.isBinary.call(null,G__17110));
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
var G__17112 = x;
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(G__17112) : com.cognitect.transit.types.quoted.call(null,G__17112));
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
var G__17114 = x;
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(G__17114) : com.cognitect.transit.types.isQuoted.call(null,G__17114));
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
var G__17116 = x;
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(G__17116) : com.cognitect.transit.types.link.call(null,G__17116));
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
var G__17118 = x;
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(G__17118) : com.cognitect.transit.types.isLink.call(null,G__17118));
});
