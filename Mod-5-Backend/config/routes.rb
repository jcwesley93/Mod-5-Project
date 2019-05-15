Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do 
      resources :makeup_bags
      resources :shopping_lists
      resources :users, only: [:create]
      get '/profile', to: 'users#profile'
      post '/signup', to: 'users#create'
    end
  end
end
