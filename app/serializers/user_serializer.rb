class UserSerializer < ActiveModel::Serializer
  attributes :id, :auth_token, :created_at
  has_many :story_users
end
