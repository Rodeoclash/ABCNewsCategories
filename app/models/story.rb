require 'open-uri'

class Story < ActiveRecord::Base
  after_save :get_remote_content

  def permalink
    superfeedr_details["permalinkUrl"]
  end

  def remote_content
    Nokogiri::HTML(open(permalink)).css(".article > p:not(.published):not(.topics)").map(&:content).join("\n")
  end

  private

  def get_remote_content
    if content.nil?
      self.content = remote_content
      self.save!
    end
  end

end
