class GetStoryContentJob < ActiveJob::Base
  queue_as :default

  def perform(story_id)
    story = Story.find(story_id)
    if story.content.nil?
      story.content = story.remote_content
      story.save!
    end
  end
end
