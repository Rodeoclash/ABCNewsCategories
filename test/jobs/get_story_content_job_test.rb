require 'test_helper'

class GetStoryContentJobTest < ActiveJob::TestCase
  
  test "@perform" do
    stub_requests
    story = stories(:one)
    GetStoryContentJob.new.perform(story.id)
    story.reload
    assert(story.content == 'Fire has damaged a $3 million dining car of The Ghan at the main Adelaide interstate rail terminal at Keswick.')
  end

  test "@perform_content_exists" do
    story = stories(:one)
    story.content = 'Already set'
    GetStoryContentJob.new.perform(story.id)
    assert(story.content == 'Already set')
  end

end
