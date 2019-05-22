Rails.application.routes.draw do
  namespace :api do
    get 'v1/MakeUpBagProducts'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do 
    namespace :v1 do 
      resources :makeup_bags
      resources :shopping_lists
      resources :products
      resources :users
      resources :makeup_bag_products
      resources :shopping_list_products
      resources :auth, only: [:create]

      post '/login', to: 'auth#create'
    end
  end
end
