(ns abcnews.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET POST]]
            [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]))


(defn get-auth-token
  []
  (.getItem (.-localStorage js/window) "auth-token"))


(defn set-auth-token
  [value]
  (.setItem (.-localStorage js/window) "auth-token" value))


(def request-options                                                            ;; defaults used for all requests
  {:response-format :json                                   
   :keywords? true
   :headers {
     :authorization (str "Token token=" (get-auth-token))
    }})


(def initial-state                                                              
  {:auth-token (get-auth-token)})  


;; -- Ajax --------------------------------------------------------------------


(defn fetch-auth-token                                                           ;; gets an auth token by creating a user on the server
  []
  (POST "/users.json" (merge {:handler #(dispatch [:fetched-auth-token %])}
                              request-options)))
                                         

(defn get-stories                                                               ;; returns last ten stories in system
  []
  (GET "/stories.json" (merge {:handler #(dispatch [:fetched-stories %])}
                               request-options)))


;; -- Event Handlers ----------------------------------------------------------


(register-handler                                                               ;; setup initial state
  :initialize                                                                   ;; usage:  (submit [:initialize])
  (fn 
    [db _]
    (if (nil? (get-auth-token))
        (fetch-auth-token)                                                      ;; get a new token from the server
        (get-stories))                                                          ;; otherwise let the app know we have an auth token to work with
    (merge db initial-state)))                                                  ;; what it returns becomes the new state


(register-handler
  :fetched-auth-token
  (fn
    [db [_ value]]
    (let [auth-token-value (:auth_token value)]
      (set-auth-token auth-token-value)
      (get-stories)
      (assoc db :auth-token auth-token-value))))


(register-handler
  :fetched-stories
  (fn
    [db [_ stories]]
    (assoc db :stories (:stories stories))))


;; -- Subscription Handlers ---------------------------------------------------


(register-sub
  :timer
  (fn 
    [db _]                       ;; db is the app-db atom
    (reaction (:timer @db))))    ;; wrap the compitation in a reaction


(register-sub
  :time-color
  (fn 
    [db _]
    (reaction (:time-color @db))))


(register-sub
  :current-state
  (fn 
    [db _]
    (reaction @db)))


;; -- View Components ---------------------------------------------------------

(defn current-state
  []
  (let [state (subscribe [:current-state])]
    [:pre (.stringify js/JSON (clj->js @state) nil 2)]))


(defn simple-example
  []
  [:div
    [current-state]])
   ;[clock]
   ;[color-input]])


;; -- Entry Point -------------------------------------------------------------


(defn ^:export run
  []
  (dispatch-sync [:initialize])
  (reagent/render [simple-example]
                  (js/document.getElementById "app")))