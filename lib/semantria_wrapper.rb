require 'semantria'
require 'securerandom'
require 'awesome_print'

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
    self.session.getProcessedDocuments.find {|doc|
      doc['id'] == uuid
    }
  end

end