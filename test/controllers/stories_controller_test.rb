require 'test_helper'

class StoriesControllerTest < ActionController::TestCase

  test 'POST create' do
    stub_requests
    post(:create, JSON.parse(File.open("#{Rails.root}/test/fixtures/superfeedr_story.json").read).merge(:format => "json"))
    assert_response :success
  end

  test 'GET index' do
    story = stories(:details_text_analysis).save!
    get(:index, format: :json)
    assert_response :success
  end
  
end
