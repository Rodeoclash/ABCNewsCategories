class User < ActiveRecord::Base
  has_many :story_users
  has_many :stories, through: :story_user
  before_create :set_auth_token

  def self.authenticate(token, options)
    self.where({auth_token: token}).first
  end

  private

    def set_auth_token
      return if auth_token.present?
      self.auth_token = generate_auth_token
    end

    def generate_auth_token
      SecureRandom.uuid.gsub(/\-/,'')
    end

end
