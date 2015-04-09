class SendAnalysisJob < ActiveJob::Base
  queue_as :default

  def perform(story_id)
    story = Story.find(story_id)   
    story.analysis_send
    # todo - queue another job to pick up results
  end
end
