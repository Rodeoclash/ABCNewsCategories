require 'test_helper'

class UsersControllerTest < ActionController::TestCase

  test 'POST create' do
    post(:create, :format => "json")
    assert_response :success
  end

end
