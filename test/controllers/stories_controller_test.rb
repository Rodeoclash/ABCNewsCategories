require 'test_helper'

class StoriesControllerTest < ActionController::TestCase

  test "POST creates" do
    stub_requests
    post(:create, JSON.parse(File.open("#{Rails.root}/test/fixtures/superfeedr_story.json").read).merge(:format => "json"))
    assert_response :success
  end
  
end
