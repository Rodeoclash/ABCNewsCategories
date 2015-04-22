class StoryUser < ActiveRecord::Base
  validates_inclusion_of :interest, :in => 0.0..1.0
  belongs_to :story
  belongs_to :user
end
