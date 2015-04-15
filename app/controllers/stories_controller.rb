class StoriesController < ApplicationController
  protect_from_forgery :except => :create

  def index
    @stories = Story.all.paginated(params[:limit], params[:page])
    respond_to do |format|
      format.json { render json: @stories }
    end
  end

  def create
    params[:items].each {|details|
      @story = Story.create!({details: details})
    }
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

end
