class UsersController < ApplicationController
  skip_before_filter :authenticate, :only => :create

  def create
    @user = User.new
    if @user.save
      respond_to do |format|
        format.json { render json: @user }
      end
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

end
