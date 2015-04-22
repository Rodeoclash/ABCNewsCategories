class ApplicationController < ActionController::Base
  before_action :authenticate, :except => :main
  protect_from_forgery with: :null_session
  skip_before_filter :verify_authenticity_token

  def main
    
  end

  protected

    def authenticate
      if user = authenticate_with_http_token { |token, options| User.authenticate(token, options) }
        @current_user = user
      else
        request_http_token_authentication
      end
    end

end
