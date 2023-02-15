Rails.application.routes.draw do
  
  resources :follows
  resources :comment_comments
  resources :comments
  resources :posts
  resources :users

  post "/login", to: "sessions#create"

  get "/me", to: "users#me"

  post "/signup", to: "users#create"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
