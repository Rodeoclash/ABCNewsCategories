class StoriesController < ApplicationController
  skip_before_filter :authenticate, :only => :create
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

  def interest
    @story_user = StoryUser.new({story_id: params[:story_id], user_id: @current_user.id, interest: params[:interest]})
    if @story_user.save
      respond_to do |format|
        format.json { render json: @story_user }
      end
    else
      render json: @story_user.errors, status: :unprocessable_entity
    end
  end

end
