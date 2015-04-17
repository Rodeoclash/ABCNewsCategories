class CurrentUsersController < ApplicationController

  def show
    respond_to do |format|
      format.json { render json: @current_user }
    end
  end

end
