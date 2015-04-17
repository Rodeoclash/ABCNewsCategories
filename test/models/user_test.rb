require 'test_helper'

class UserTest < ActiveSupport::TestCase 
  test '#authenticate' do
    user = users(:with_token)
    user.save!
    assert(User.authenticate(user.auth_token, {}) == user)
    assert(User.authenticate('does-not-exist', {}) == nil)
  end
end
