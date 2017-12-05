Rails.application.routes.draw do
  root 'users#index'
  
  get 'user_form', to: 'users#form'
    resources :users do
      
    end
end
