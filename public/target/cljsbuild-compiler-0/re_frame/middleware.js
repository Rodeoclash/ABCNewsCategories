// Compiled by ClojureScript 0.0-2816 {:elide-asserts true}
goog.provide('re_frame.middleware');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('re_frame.utils');
goog.require('re_frame.undo');
goog.require('reagent.ratom');
/**
* Acts as an adaptor, allowing handlers to be writen as pure functions.
* The re-frame router passes the `app-db` atom as the first parameter to any handler.
* This middleware adapts that atom to be the value within the atom.
* If you strip away the error/efficiency checks, this middleware is doing:
* (reset! app-db (handler @app-db event-vec))
* You don't have to use this middleware directly. It is automatically applied to
* your handler's middleware when you use "register-handler".
* In fact, the only way to by-pass automatic use of "pure" in your middleware
* is to use the low level registration function "re-frame.handlers/register-handler-base"
*/
re_frame.middleware.pure = (function pure(handler){
return (function pure_handler(app_db,event_vec){
if(!((function (){var G__23750 = app_db;
if(G__23750){
var bit__4487__auto__ = null;
if(cljs.core.truth_((function (){var or__3806__auto__ = bit__4487__auto__;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return G__23750.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__23750.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__23750);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__23750);
}
})())){
if(cljs.core.map_QMARK_(app_db)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: Looks like \"pure\" is in the middleware pipeline twice. Ignoring."], 0));
} else {
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"pure\" middleware not given a Ratom.  Got: ",app_db], 0));
}

return handler;
} else {
var db = (function (){var G__23751 = app_db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23751) : cljs.core.deref.call(null,G__23751));
})();
var new_db = (function (){var G__23752 = db;
var G__23753 = event_vec;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23752,G__23753) : handler.call(null,G__23752,G__23753));
})();
if((new_db == null)){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: your pure handler returned nil. It should return the new db state."], 0));
} else {
if(!((db === new_db))){
var G__23754 = app_db;
var G__23755 = new_db;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23754,G__23755) : cljs.core.reset_BANG_.call(null,G__23754,G__23755));
} else {
return null;
}
}
}
});
});
/**
* Middleware which catches and prints any handler-generated exceptions to console.
* Handlers are called from within a core.async go-loop, and core.async produces
* a special kind of hell when in comes to stacktraces. By the time an exception
* has passed through a go-loop its stack is mangled beyond repair and you'll
* have no idea where the exception was thrown.
* So this middleware catches and prints to stacktrace before the core.async sausage
* machine has done its work.
* 
*/
re_frame.middleware.log_ex = (function log_ex(handler){
return (function log_ex_handler(db,v){
try{var G__23766 = db;
var G__23767 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23766,G__23767) : handler.call(null,G__23766,G__23767));
}catch (e23765){var e = e23765;
console.error(e.stack);

throw e;
}});
});
/**
* Middleware which logs debug information to js/console for each event.
* Includes a clojure.data/diff of the db, before vs after, showing the changes
* caused by the event.
*/
re_frame.middleware.debug = (function debug(handler){
return (function debug_handler(db,v){
re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-- New Event ----------------------------------------------------"], 0));

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame event: ",v], 0));

var new_db = (function (){var G__23774 = db;
var G__23775 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23774,G__23775) : handler.call(null,G__23774,G__23775));
})();
var diff = clojure.data.diff(db,new_db);
re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["only before: ",cljs.core.first(diff)], 0));

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["only after : ",cljs.core.second(diff)], 0));

re_frame.utils.groupEnd();

return new_db;
});
});
/**
* Middleware which removes the first element of v, allowing you to write
* more asthetically pleasing handlers. No leading underscore on the event-v!
* Your handlers will look like this:
* (defn my-handler
* [db [x y z]]    ;; <-- instead of [_ x y z]
* ....)
* 
*/
re_frame.middleware.trim_v = (function trim_v(handler){
return (function trim_v_handler(db,v){
var G__23782 = db;
var G__23783 = cljs.core.vec(cljs.core.rest(v));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23782,G__23783) : handler.call(null,G__23782,G__23783));
});
});
/**
* A middleware factory which supplies a sub-tree of `db` to the handler.
* Works a bit like update-in. Supplies a narrowed data structure for the handler.
* Afterwards, grafts the result of the handler back into db.
* Usage:
* (path :some :path)
* (path [:some :path])
* (path [:some :path] :to :here)
* (path [:some :path] [:to] :here)
* 
* @param {...*} var_args
*/
re_frame.middleware.path = (function() { 
var path__delegate = function (args){
var path__$1 = cljs.core.flatten(args);
var _ = ((cljs.core.empty_QMARK_(path__$1))?re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: path middleware given no params. Probably a mistake."], 0)):null);
return ((function (path__$1,_){
return (function middleware(handler){
return ((function (path__$1,_){
return (function path_handler(db,v){
return cljs.core.assoc_in(db,path__$1,(function (){var G__23798 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path__$1);
var G__23799 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23798,G__23799) : handler.call(null,G__23798,G__23799));
})());
});
;})(path__$1,_))
});
;})(path__$1,_))
};
var path = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23800__i = 0, G__23800__a = new Array(arguments.length -  0);
while (G__23800__i < G__23800__a.length) {G__23800__a[G__23800__i] = arguments[G__23800__i + 0]; ++G__23800__i;}
  args = new cljs.core.IndexedSeq(G__23800__a,0);
} 
return path__delegate.call(this,args);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__23801){
var args = cljs.core.seq(arglist__23801);
return path__delegate(args);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* A Middleware factory which stores an undo checkpoint.
* "explanation" can be either a string or a function. If it is a
* function then must be:  (db event-vec) -> string.
* "explanation" can be nil. in which case "" is recorded.
* 
*/
re_frame.middleware.undoable = (function undoable(explanation){
return (function middleware(handler){
return (function undoable_handler(db,event_vec){
var explanation__$1 = ((cljs.core.fn_QMARK_(explanation))?(function (){var G__23830 = db;
var G__23831 = event_vec;
return (explanation.cljs$core$IFn$_invoke$arity$2 ? explanation.cljs$core$IFn$_invoke$arity$2(G__23830,G__23831) : explanation.call(null,G__23830,G__23831));
})():((typeof explanation === 'string')?explanation:(((explanation == null))?"":re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: undoable given a bad parameter. Got: ",explanation], 0))
)));
re_frame.undo.store_now_BANG_(explanation__$1);

var G__23832 = db;
var G__23833 = event_vec;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23832,G__23833) : handler.call(null,G__23832,G__23833));
});
});
});
/**
* Middleware factory which runs a given function "f" in the after position.
* "f" is (db v) -> db
* Unlike "after" which is about side effects, "enrich" expects f to process and alter
* db in some useful way, contributing to the derived data, flowing vibe.
* Imagine that todomvc needed to do duplicate detection - if any two todos had
* the same text, then highlight their background, and report them in a warning
* down the bottom.
* Almost any action (edit text, add new todo, remove a todo) requires a
* complete reassesment of duplication errors and warnings. Eg: that edit
* update might have introduced a new duplicate or removed one. Same with a
* todo removal.
* And to perform this enrichment, a function has to inspect all the todos,
* possibly set flags on each, and set some overall list of duplicates.
* And this duplication check might just be one check amoung many.
* "f" would need to be both adding and removing the duplicate warnings.
* By applying "f" in middleware, we keep the handlers simple and yet we
* ensure this important step is not missed.
*/
re_frame.middleware.enrich = (function enrich(f){
return (function middleware(handler){
return (function enrich_handler(db,v){
var G__23862 = (function (){var G__23864 = db;
var G__23865 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23864,G__23865) : handler.call(null,G__23864,G__23865));
})();
var G__23863 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23862,G__23863) : f.call(null,G__23862,G__23863));
});
});
});
/**
* Middleware factory which runs a function "f" in the "after handler"
* position presumably for side effects.
* "f" is given the value of "db". It's return value is ignored.
* Examples: "f" can run schema validation. Or write current state to localstorage. etc.
* In effect, "f" is meant to sideeffect. It gets no chance to change db. See "enrich"
* (if you need that.)
*/
re_frame.middleware.after = (function after(f){
return (function middleware(handler){
return (function after_handler(db,v){
var new_db = (function (){var G__23894 = db;
var G__23895 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23894,G__23895) : handler.call(null,G__23894,G__23895));
})();
var G__23896_23898 = new_db;
var G__23897_23899 = v;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23896_23898,G__23897_23899) : f.call(null,G__23896_23898,G__23897_23899));

return new_db;
});
});
});
