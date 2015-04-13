require 'semantria'
require 'securerandom'

module SemantriaWrapper

  def self.session
    Semantria::Session.new(ENV['SEMANTRIA_APIKEY'], ENV['SEMANTRIA_APISECRET'], ENV['APPLICATION_NAME'], true)
  end

  def self.send_analysis(text)
    SecureRandom.uuid.tap {|uuid|
      self.session.queueDocument({
        id: uuid,
        text: text
      })
    }
  end

  def self.get_analysis(uuid)
    results = self.session.getProcessedDocuments
    puts "----- results"
    puts results.inspect
  end

end