class StorySerializer < ActiveModel::Serializer
  attributes :id, :summary, :title, :image, :created_at
end
