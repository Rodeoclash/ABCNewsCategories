class SendAnalysisJob < ActiveJob::Base
  queue_as :default

  def perform(story_id)
    story = Story.find(story_id)   
    story.send_analysis
  end
end
