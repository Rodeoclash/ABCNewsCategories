class ApplicationController < ActionController::Base
  before_action :authenticate, :except => :main
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

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
