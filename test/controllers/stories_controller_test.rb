require 'test_helper'

class StoriesControllerTest < ActionController::TestCase

  test 'POST create' do
    stub_requests
    post(:create, JSON.parse(File.open("#{Rails.root}/test/fixtures/superfeedr_story.json").read).merge(:format => "json"))
    assert_response :success
  end

  test 'GET index - order' do
    story_1 = Story.create!({details: {}, text: 'Story 1'})
    sleep 0.1
    story_2 = Story.create!({details: {}, text: 'Story 2'})
    get(:index, format: :json)
    assert_response :success
    parsed_response = JSON.parse(response.body)
    assert(parsed_response[0]['text'] == 'Story 2')
    assert(parsed_response[1]['text'] == 'Story 1')
  end

  test 'GET index - pagination 1' do
    story_1 = Story.create!({details: {}, text: 'Story 1'})
    sleep 0.1
    story_2 = Story.create!({details: {}, text: 'Story 2'})
    get(:index, format: :json, limit: 1, page: 0)
    assert_response :success
    parsed_response = JSON.parse(response.body)
    assert(parsed_response.size == 1)
    assert(parsed_response[0]['text'] == 'Story 2')
  end

  test 'GET index - pagination 2' do
    story_1 = Story.create!({details: {}, text: 'Story 1'})
    sleep 0.1
    story_2 = Story.create!({details: {}, text: 'Story 2'})
    get(:index, format: :json, limit: 1, page: 1)
    assert_response :success
    parsed_response = JSON.parse(response.body)
    assert(parsed_response.size == 1)
    assert(parsed_response[0]['text'] == 'Story 1')
  end
  
end
