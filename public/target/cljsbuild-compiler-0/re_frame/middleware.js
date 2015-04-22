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
if(!((function (){var G__23746 = app_db;
if(G__23746){
var bit__4487__auto__ = null;
if(cljs.core.truth_((function (){var or__3806__auto__ = bit__4487__auto__;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return G__23746.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__23746.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__23746);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__23746);
}
})())){
if(cljs.core.map_QMARK_(app_db)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: Looks like \"pure\" is in the middleware pipeline twice. Ignoring."], 0));
} else {
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"pure\" middleware not given a Ratom.  Got: ",app_db], 0));
}

return handler;
} else {
var db = (function (){var G__23747 = app_db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23747) : cljs.core.deref.call(null,G__23747));
})();
var new_db = (function (){var G__23748 = db;
var G__23749 = event_vec;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23748,G__23749) : handler.call(null,G__23748,G__23749));
})();
if((new_db == null)){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: your pure handler returned nil. It should return the new db state."], 0));
} else {
if(!((db === new_db))){
var G__23750 = app_db;
var G__23751 = new_db;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23750,G__23751) : cljs.core.reset_BANG_.call(null,G__23750,G__23751));
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
try{var G__23762 = db;
var G__23763 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23762,G__23763) : handler.call(null,G__23762,G__23763));
}catch (e23761){var e = e23761;
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

var new_db = (function (){var G__23770 = db;
var G__23771 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23770,G__23771) : handler.call(null,G__23770,G__23771));
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
var G__23778 = db;
var G__23779 = cljs.core.vec(cljs.core.rest(v));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23778,G__23779) : handler.call(null,G__23778,G__23779));
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
return cljs.core.assoc_in(db,path__$1,(function (){var G__23794 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path__$1);
var G__23795 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23794,G__23795) : handler.call(null,G__23794,G__23795));
})());
});
;})(path__$1,_))
});
;})(path__$1,_))
};
var path = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23796__i = 0, G__23796__a = new Array(arguments.length -  0);
while (G__23796__i < G__23796__a.length) {G__23796__a[G__23796__i] = arguments[G__23796__i + 0]; ++G__23796__i;}
  args = new cljs.core.IndexedSeq(G__23796__a,0);
} 
return path__delegate.call(this,args);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__23797){
var args = cljs.core.seq(arglist__23797);
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
var explanation__$1 = ((cljs.core.fn_QMARK_(explanation))?(function (){var G__23826 = db;
var G__23827 = event_vec;
return (explanation.cljs$core$IFn$_invoke$arity$2 ? explanation.cljs$core$IFn$_invoke$arity$2(G__23826,G__23827) : explanation.call(null,G__23826,G__23827));
})():((typeof explanation === 'string')?explanation:(((explanation == null))?"":re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: undoable given a bad parameter. Got: ",explanation], 0))
)));
re_frame.undo.store_now_BANG_(explanation__$1);

var G__23828 = db;
var G__23829 = event_vec;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23828,G__23829) : handler.call(null,G__23828,G__23829));
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
var G__23858 = (function (){var G__23860 = db;
var G__23861 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23860,G__23861) : handler.call(null,G__23860,G__23861));
})();
var G__23859 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23858,G__23859) : f.call(null,G__23858,G__23859));
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
var new_db = (function (){var G__23890 = db;
var G__23891 = v;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__23890,G__23891) : handler.call(null,G__23890,G__23891));
})();
var G__23892_23894 = new_db;
var G__23893_23895 = v;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__23892_23894,G__23893_23895) : f.call(null,G__23892_23894,G__23893_23895));

return new_db;
});
});
});
