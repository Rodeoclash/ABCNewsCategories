class GetAnalysisJob < ActiveJob::Base
  queue_as :default

  def perform(story_id)
    story = Story.find(story_id)   
    story.analysis_get
  end
end
