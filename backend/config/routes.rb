Rails.application.routes.draw do
  resources :users, only: [:create, :show, :edit, :update, :destroy]
  post '/login', to: 'users#login'
  get '/users/:user_id/images', to: 'users#show_images'

  resources :images, only: [:create, :index, :show, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
