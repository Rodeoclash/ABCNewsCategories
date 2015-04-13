ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  include WebMock::API

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  def stub_requests
    stub_request(:get, 'http://www.abc.net.au/news/2015-04-05/sawmill-fire-at-jamestown-deliberate-ghan-rail-keswick/6371584').
      to_return(:status => 200, :body => File.open("#{Rails.root}/test/fixtures/acb_newsitem.html").read)

    stub_request(:post, /api\.semantria/).
      to_return(:status => 202)
  end

end
