Rails.application.routes.draw do
  resources :users, only: [:show, :edit, :update, :delete]
  resources :images, only: [:index, :show, :delete]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
