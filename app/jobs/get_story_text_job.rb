class GetStoryTextJob < ActiveJob::Base
  queue_as :default

  def perform(story_id)
    story = Story.find(story_id)   
    story.get_remote_text
  end
end
