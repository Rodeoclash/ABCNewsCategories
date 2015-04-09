require 'test_helper'

class GetStoryTextJobTest < ActiveJob::TestCase
  
  test "@perform" do
    stub_requests
    story = stories(:details_no_text_no_analysis)
    GetStoryTextJob.new.perform(story.id)
    story.reload
    assert(story.text == 'Fire has damaged a $3 million dining car of The Ghan at the main Adelaide interstate rail terminal at Keswick.')
  end

  test "@perform_content_exists" do
    story = stories(:details_text_no_analysis)
    story.text = 'Already set'
    GetStoryTextJob.new.perform(story.id)
    assert(story.text == 'Already set')
  end

end
