Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do 
      resources :makeup_bags
      resources :shopping_lists
      resources :products
      resources :users
      resources :auth, only: [:create]

      post '/login', to: 'auth#create'
    end
  end
end
