Rails.application.routes.draw do
  resources :pets, only: [ :show, :update ] do
    member do
      patch "update_pet" => "pets#update"
    end
  end

  # Primero mascota disponible
  root "pets#show", defaults: { id: 1 }
end
