require 'open-uri'

class Story < ActiveRecord::Base
  after_save :queue_get_remote_text
  after_save :queue_analysis_send

  default_scope { order('created_at DESC') }
  scope :paginated, -> (limit, page) { limit(limit || 10).offset((page || 0) * (limit || 10)) }

  def permalink
    details["permalinkUrl"]
  end

  def get_remote_text
    self.update_attribute(:text, Nokogiri::HTML(open(permalink)).css(".article > p:not(.published):not(.topics)").map(&:content).join("\n"))
  end

  def analysis_corpus
    text[0..7999]
  end

  def send_analysis
    self.update_attribute(:semantria_id, SemantriaWrapper.send_analysis(analysis_corpus))
    GetAnalysisJob.set(wait: 15.seconds).perform_later(self.id)
  end

  def get_analysis
    self.update_attribute(:analysis, SemantriaWrapper.get_analysis(semantria_id))
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
