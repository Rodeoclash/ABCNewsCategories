require 'test_helper'

class CurrentUsersControllerTest < ActionController::TestCase

  test 'GET show' do
    user = User.create!
    request.env['HTTP_AUTHORIZATION'] = ActionController::HttpAuthentication::Token.encode_credentials(user.auth_token)
    get(:show, :format => "json")
    assert_response :success
  end

end
