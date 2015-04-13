require 'open-uri'

class Story < ActiveRecord::Base
  after_save :queue_get_remote_text
  after_save :queue_analysis_send

  def permalink
    details["permalinkUrl"]
  end

  def remote_text
    Nokogiri::HTML(open(permalink)).css(".article > p:not(.published):not(.topics)").map(&:content).join("\n")
  end

  def send_analysis
    self.update_attribute(:semantria_id, SemantriaWrapper.send_analysis(text))
    GetAnalysisJob.set(wait: 5.minutes).perform_later(self.id)
  end

  def get_analysis
    SemantriaWrapper.get_analysis(semantria_id)
  end

  private

  def queue_get_remote_text
    if self.details && self.text.nil?
      GetStoryTextJob.perform_later(self.id)
    end
  end

  def queue_analysis_send
    if self.text && self.semantria_id.nil?
      SendAnalysisJob.perform_later(self.id)
    end
  end

end
