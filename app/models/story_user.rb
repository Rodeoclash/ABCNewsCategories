class StoryUser < ActiveRecord::Base
  validates_inclusion_of :interest, :in => 0.0..1.0
  has_many :stories, through: :story_user
end
