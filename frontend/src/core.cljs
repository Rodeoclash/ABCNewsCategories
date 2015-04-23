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
  {:format :json
   :response-format :json                                   
   :keywords? true})


(defn auth-header                                                               ;; adds the auth token header to the request
  []
  {:headers {
    :Authorization (str "Token token=" (get-auth-token))}})


(def initial-state                                                              
  {:current-user {}})  


;; -- Ajax --------------------------------------------------------------------


(defn create-user                                                       ;; gets an auth token by creating a user on the server
  []
  (POST "/users.json"
        (merge {:handler #(dispatch [:created-user %])}
               request-options)))
                                         

;; TODO - Get current user
(defn get-current-user                                                          ;; returns last ten stories in system
  []
  (GET "/current_user.json"
       (merge {:handler #(dispatch [:fetched-current-user %])}
              (auth-header)
              request-options)))


(defn get-stories                                                               ;; returns last ten stories in system
  []
  (GET "/stories.json"
       (merge {:handler #(dispatch [:fetched-stories %])}
              {:params {
                :page 0
                :limit 1000
              }}
              (auth-header)
              request-options)))


(defn create-story-user-interest                                                     ;; sets interest level in a story
  [story interest-amount]
  (POST (str "/stories/" (:id story) "/interest.json")
        (merge {:handler #(dispatch [:created-story-user-interest %])}
               {:params {
                  :story_id (:id story)
                  :interest interest-amount
               }}
               (auth-header)
               request-options)))


;; -- Event Handlers ----------------------------------------------------------


(register-handler                                                               ;; setup initial state
  :initialize                                                                   ;; usage:  (submit [:initialize])
  (fn 
    [db _]
    (if (nil? (get-auth-token))
        (dispatch [:create-user])                                               ;; get a new token from the server
        (do
          (dispatch [:fetch-stories])
          (dispatch [:fetch-current-user])))                                                          ;; get current stories
    (merge db initial-state)))                                                  ;; what it returns becomes the new state


(register-handler
  :create-user
  (fn
    [db [_]]
      (create-user) 
      db))

(register-handler
  :created-user
  (fn
    [db [_ user]]
      (set-auth-token (get-in user [:user :auth_token]))
      (dispatch-sync [:fetched-current-user user])
      (get-stories)
      db))


(register-handler
  :fetch-current-user
  (fn
    [db [_]]
      (get-current-user)
      db))


(register-handler
  :fetched-current-user
  (fn
    [db [_ user]]
    (assoc db :current-user (:user user))))


(register-handler
  :fetch-stories
  (fn
    [db [_]]
      (get-stories)
      db))


(register-handler
  :fetched-stories
  (fn
    [db [_ stories]]
    (assoc db :stories (:stories stories))))


(register-handler
  :create-story-user-interest
  (fn
    [db [_ story interest-amount]]
    (create-story-user-interest story interest-amount)
    db))


(register-handler
  :created-story-user-interest
  (fn
    [db [_ story-user]]
    (dispatch [:fetch-current-user])
    db))


;; -- Subscription Handlers ---------------------------------------------------


(register-sub
  :current-state
  (fn 
    [db _]                                                                      
    (reaction @db)))


(register-sub
  :stories
  (fn 
    [db _]                                                                      
    (reaction (:stories @db))))                                                 


(register-sub
  :current-user
  (fn 
    [db _]
    (reaction (:current-user @db))))


(register-sub
  :story-users
  (fn 
    [db attrs]
    (let [current-user (subscribe [:current-user])]
      (reaction (get-in @current-user [:story_users])))))                                                                    


;; -- View Components ---------------------------------------------------------


(defn debug-output                                                              ;; expects deferenced data, simply outputs stringified object to screen
  [state]
  [:pre (.stringify js/JSON (clj->js state) nil 2)])


(defn story-item
  [story story-user]
  (let [story-id (:id story)]
    ^{:key story-id}
    [:div
      [:h2 (:title story)]
      [:h4 "Summary"]
      [:p (:summary story)]
      [:h4 "Image"]
      [:img {:src (:image story) :width "300px"}]
      [:h4 (str "Interest " (:interest story-user))]
      [:button
        {:on-click #(dispatch [:create-story-user-interest story 0])}
        "Set interest (0)"]
      [:button
        {:on-click #(dispatch [:create-story-user-interest story 0.25])}
        "Set interest (0.25)"]
      [:button
        {:on-click #(dispatch [:create-story-user-interest story 0.50])}
        "Set interest (0.50)"]
      [:button
        {:on-click #(dispatch [:create-story-user-interest story 0.75])}
        "Set interest (0.75)"]
      [:button
        {:on-click #(dispatch [:create-story-user-interest story 1.00])}
        "Set interest (1.00)"]]))


(defn current-state
  []
  (let [state @(subscribe [:current-state])]
    [debug-output state]))


(defn stories-list
  []
  (let [stories @(subscribe [:stories])
        story-users @(subscribe [:story-users])]
    [:div
      (for [story stories]
        (story-item story (first (filter #(= (:id story) (:story_id %)) story-users))))]))


(defn simple-example
  []
  [:div
    [:h1 "Stories"]
    [stories-list]
    [:hr]
    [:h1 "Client side state"]
    [current-state]])


;; -- Entry Point -------------------------------------------------------------


(defn ^:export run
  []
  (dispatch-sync [:initialize])
  (reagent/render [simple-example]
                  (js/document.getElementById "app")))