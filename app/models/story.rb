require 'open-uri'

class Story < ActiveRecord::Base
  after_save :get_remote_content

  def permalink
    details["permalinkUrl"]
  end

  def remote_content
    Nokogiri::HTML(open(permalink)).css(".article > p:not(.published):not(.topics)").map(&:content).join("\n").force_encoding(Encoding::UTF_8)
  end

  private

  def get_remote_content
    GetStoryContentJob.perform_later self.id
  end

end
