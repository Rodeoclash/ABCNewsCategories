require 'test_helper'

class StoriesControllerTest < ActionController::TestCase

  test 'POST create' do
    stub_requests
    post(:create, JSON.parse(File.open("#{Rails.root}/test/fixtures/superfeedr_story.json").read).merge(:format => "json"))
    assert_response :success
  end

  test 'GET index - without token' do
    get(:index, nil)
    assert_response :unauthorized
  end

  test 'GET index - with token' do
    user = User.create!
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Token.encode_credentials(user.auth_token)
    get(:index, {format: :json})
    assert_response :success
  end

  test 'GET index - defaults' do
    user = User.create!
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Token.encode_credentials(user.auth_token)
    story_1 = Story.create!({details: {something: 'here'}, text: 'Story 1'})
    sleep 0.1
    story_2 = Story.create!({details: {something: 'here'}, text: 'Story 2'})
    get(:index, format: :json)
    assert_response :success
    parsed_response = JSON.parse(response.body)
    assert(parsed_response['stories'][0]['text'] == 'Story 2')
    assert(parsed_response['stories'][1]['text'] == 'Story 1')
  end

  test 'GET index - pagination 1' do
    user = User.create!
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Token.encode_credentials(user.auth_token)
    story_1 = Story.create!({details: {something: 'here'}, text: 'Story 1'})
    sleep 0.1
    story_2 = Story.create!({details: {something: 'here'}, text: 'Story 2'})
    get(:index, format: :json, limit: "1", page: "0")
    assert_response :success
    parsed_response = JSON.parse(response.body)
    assert(parsed_response['stories'].size == 1)
    assert(parsed_response['stories'][0]['text'] == 'Story 2')
  end

  test 'GET index - pagination 2' do
    user = User.create!
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Token.encode_credentials(user.auth_token)
    story_1 = Story.create!({details: {something: 'here'}, text: 'Story 1'})
    sleep 0.1
    story_2 = Story.create!({details: {something: 'here'}, text: 'Story 2'})
    get(:index, format: :json, limit: "1", page: "1")
    assert_response :success
    parsed_response = JSON.parse(response.body)
    assert(parsed_response['stories'].size == 1)
    assert(parsed_response['stories'][0]['text'] == 'Story 1')
  end

  test 'POST interest - with interest value' do
    user = User.create!
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Token.encode_credentials(user.auth_token)
    story = Story.create!({details: {something: 'here'}, text: 'Story 1'})
    post(:interest, {format: :json, story_id: story.id, user_id: user.id, interest: 0.8})
    assert_response :success
  end

  test 'POST interest - without interest value' do
    user = User.create!
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Token.encode_credentials(user.auth_token)
    story = Story.create!({details: {something: 'here'}, text: 'Story 1'})
    post(:interest, {format: :json, story_id: story.id, user_id: user.id})
    assert_response 422
  end
  
end
