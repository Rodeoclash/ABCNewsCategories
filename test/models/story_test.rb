require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  include ActiveJob::TestHelper
  
  test "@permalink" do
    assert(stories(:one).permalink == 'http://www.abc.net.au/news/2015-04-05/sawmill-fire-at-jamestown-deliberate-ghan-rail-keswick/6371584')
  end

  test "@article_content" do
    stub_requests
    assert(stories(:one).remote_content == 'Fire has damaged a $3 million dining car of The Ghan at the main Adelaide interstate rail terminal at Keswick.')
  end

  test "@get_remote_content" do
    stub_requests
    story = stories(:one)
    story.save!
    assert_enqueued_jobs 1
  end

end
