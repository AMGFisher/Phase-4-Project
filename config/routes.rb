Rails.application.routes.draw do
  
  resources :follows
  resources :comment_comments
  resources :comments
  resources :posts
  resources :users

  post "/login", to: "sessions#create"

  get "/me", to: "users#me"


  post "/signup", to: "users#create"

  delete "/logout", to: "sessions#destroy"

  get "/followers", to: "users#followers"
  get "/following", to: "users#following"

  get "/feed", to: "posts#feed"

  get "/personal", to: "posts#personal"
  
  get "/friend/:id", to: "posts#friend"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
