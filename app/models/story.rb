require 'open-uri'

class Story < ActiveRecord::Base
  after_find :encode_text
  after_save :queue_get_remote_text
  after_save :queue_analysis_send

  def permalink
    details["permalinkUrl"]
  end

  def remote_text
    Nokogiri::HTML(open(permalink)).css(".article > p:not(.published):not(.topics)").map(&:content).join("\n")
  end

  def semantria_session
    Semantria::Session.new(ENV['SEMANTRIA_APIKEY'], ENV['SEMANTRIA_APISECRET'], 'abcnews', true)
  end

  def semantria_doc
    {
      id: id,
      text: text
    }
  end

  def analysis_send
    semantria_session.queueDocument(semantria_doc)
  end

  private

  # This is a terrible hack, it should be UTF-8 in the database anyway
  def encode_text
    if self.text
      self.text = self.text.encode('UTF-8', :invalid => :replace, :undef => :replace)
    end
  end

  def queue_get_remote_text
    if self.details && self.text.nil?
      GetStoryTextJob.perform_later self.id
    end
  end


  def queue_analysis_send
    if self.text && self.analysis.nil?
      SendAnalysisJob.perform_later self.id
    end
  end

end
