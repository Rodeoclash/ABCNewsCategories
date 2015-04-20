Rails.application.routes.draw do
  resources :users
  resource :current_user
  resources :stories do
    post :interest
  end

  root to: 'application#main'

  #target/client/goog/

end
