class PetsController < ApplicationController
  def show
    @pet = Pet.find(params[:id])
    @pet.apply_time_decay # Actualizar estadísticas
  end

  def update
    @pet = Pet.find(params[:id])

    case params[:action_name]
    when "feed"
      @pet.feed!
    when "play"
      @pet.play!
    when "sleep"
      @pet.sleep!
    else
      render json: { error: "Acción no válida" }, status: :unprocessable_entity
      return
    end

    respond_to do |format|
      if @pet.save
        format.turbo_stream do
          render turbo_stream: turbo_stream.update("game_board",
                                                   partial: "pets/pet",
                                                   locals: { pet: @pet })
        end
        format.html { redirect_to @pet }
        format.json { render :show, status: :ok, location: @pet }
      else
        format.turbo_stream { render :show }
        format.html { render :show, status: :unprocessable_entity }
        format.json { render json: @pet.errors, status: :unprocessable_entity }
      end
    end
  end
end
