Rails.application.routes.draw do
  resources :users
  resource :current_user
  resources :stories do
    post :interest
  end
end
