class StoriesController < ApplicationController
  protect_from_forgery :except => :create

  def create
    params[:items].each {|details|
      @story = Story.create!({details: details})
    }
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

end
