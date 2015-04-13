require 'test_helper'

class StoryTest < ActiveSupport::TestCase
  include ActiveJob::TestHelper
  
  test "@permalink" do
    assert(stories(:details_no_text_no_analysis).permalink == 'http://www.abc.net.au/news/2015-04-05/sawmill-fire-at-jamestown-deliberate-ghan-rail-keswick/6371584')
  end

  test "@remote_text" do
    stub_requests
    assert(stories(:details_no_text_no_analysis).remote_text == 'Fire has damaged a $3 million dining car of The Ghan at the main Adelaide interstate rail terminal at Keswick.')
  end

  test "@send_analysis" do
    story = stories(:details_text_no_analysis)
    story.send_analysis
    assert(story.semantria_id.blank? != true)
    assert_enqueued_jobs 1
  end

  # sends for content
  test "@queue_get_remote_content_with_details_no_content_no_analysis" do
    stub_requests
    story = stories(:details_no_text_no_analysis)
    story.save!
    assert_enqueued_jobs 1
  end

  # sends for analysis
  test "@queue_analysis_send_with_details_content_no_analysis" do
    stub_requests
    story = stories(:details_text_no_analysis)
    story.save!
    assert_enqueued_jobs 1
  end

  # no sends required
  test "@queue_analysis_send_with_details_content_analysis" do
    stub_requests
    story = stories(:details_text_analysis)
    story.save!
    assert_enqueued_jobs 0
  end

end
