# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Story.create!([
  {
    "created_at" => Date.new,
    "updated_at" => Date.new,
    "details" => {
        "id" => "http://www.abc.net.au/news/2015-04-15/head-of-mental-health-review-says-changes-up-to-a-decade-overdue/6394292", "actor" => {
            "id" => "Dan Conifer And Stephanie Smail", "displayName" => "Dan Conifer And Stephanie Smail"
        }, "title" => "Mental health review head says changes up to a decade overdue", "summary" => "<p>The head of a review into Australia's mental health sector warns the system will struggle without change and a major funding overhaul.</p>", "updated" => 1429065177, "language" => "en", "published" => 1429065177, "categories" => ["Mental Health", "Health", "Government and Politics", "Programs and Initiatives"], "permalinkUrl" => "http://www.abc.net.au/news/2015-04-15/head-of-mental-health-review-says-changes-up-to-a-decade-overdue/6394292", "standardLinks" => {
            "alternate" => [{
                "rel" => "alternate", "href" => "http://www.abc.net.au/news/2015-04-15/head-of-mental-health-review-says-changes-up-to-a-decade-overdue/6394292", "type" => "text/html", "title" => "Mental health review head says changes up to a decade overdue"
            }], "enclosure" => [{
                "rel" => "enclosure", "href" => "http://www.abc.net.au/news/image/365384-16x9-2150x1210.jpg", "type" => "image/jpeg", "title" => "Mental health review head says changes up to a decade overdue"
            }, {
                "rel" => "enclosure", "href" => "http://www.abc.net.au/news/image/365384-4x3-940x705.jpg", "type" => "image/jpeg", "title" => "Mental health review head says changes up to a decade overdue"
            }, {
                "rel" => "enclosure", "href" => "http://www.abc.net.au/news/image/365384-3x2-940x627.jpg", "type" => "image/jpeg", "title" => "Mental health review head says changes up to a decade overdue"
            }, {
                "rel" => "enclosure", "href" => "http://www.abc.net.au/news/image/365384-3x4-940x1253.jpg", "type" => "image/jpeg", "title" => "Mental health review head says changes up to a decade overdue"
            }, {
                "rel" => "enclosure", "href" => "http://www.abc.net.au/news/image/365384-1x1-1400x1400.jpg", "type" => "image/jpeg", "title" => "Mental health review head says changes up to a decade overdue"
            }], "thumbnail" => [{
                "rel" => "thumbnail", "href" => "http://www.abc.net.au/news/image/365384-4x3-140x105.jpg", "type" => "image/jpeg", "title" => "Mental health review head says changes up to a decade overdue"
            }]
        }
    }, "analysis" => {
        "id" => "e11ad1c6-52bb-4b08-bef3-71a557512851", "status" => "PROCESSED", "themes" => [{
            "title" => "mental health services", "stemmed" => "mental health service", "evidence" => 7, "is_about" => true, "normalized" => "mental health service", "strength_score" => 4.197222, "sentiment_score" => 3.0, "sentiment_polarity" => "positive"
        }, {
            "title" => "major funding overhaul", "stemmed" => "major funding overhaul", "evidence" => 7, "is_about" => true, "normalized" => "major funding overhaul", "strength_score" => 2.6267483, "sentiment_score" => 2.1920002, "sentiment_polarity" => "positive"
        }, {
            "title" => "consistent measures", "stemmed" => "consistent measure", "evidence" => 7, "is_about" => true, "normalized" => "consistent measure", "strength_score" => 2.1761904, "sentiment_score" => 1.9948162, "sentiment_polarity" => "positive"
        }, {
            "title" => "major flaws", "stemmed" => "major flaw", "evidence" => 7, "is_about" => false, "normalized" => "major flaw", "strength_score" => 1.8309525, "sentiment_score" => -0.374, "sentiment_polarity" => "neutral"
        }, {
            "title" => "seeking help", "stemmed" => "seeking help", "evidence" => 7, "is_about" => false, "normalized" => "seeking help", "strength_score" => 1.8309525, "sentiment_score" => 1.1783245, "sentiment_polarity" => "positive"
        }], "topics" => [{
            "type" => "concept", "title" => "Health", "hitcount" => 0, "strength_score" => 0.70271736, "sentiment_score" => 0.30675557, "sentiment_polarity" => "neutral"
        }, {
            "type" => "query", "title" => "Health", "hitcount" => 11, "strength_score" => 0.0, "sentiment_score" => 3.3721547, "sentiment_polarity" => "positive"
        }, {
            "type" => "query", "title" => "Education", "hitcount" => 2, "strength_score" => 0.0, "sentiment_score" => 0.916191, "sentiment_polarity" => "positive"
        }], "phrases" => [{
            "type" => "detected", "title" => "recommendations", "is_negated" => true, "is_intensified" => true, "negating_phrase" => "no", "sentiment_score" => 0.80520004, "sentiment_polarity" => "positive"
        }, {
            "type" => "detected", "title" => "losing", "is_negated" => false, "is_intensified" => false, "sentiment_score" => -0.7, "sentiment_polarity" => "negative"
        }, {
            "type" => "detected", "title" => "suffering", "is_negated" => true, "is_intensified" => false, "negating_phrase" => "reduce", "sentiment_score" => 0.75, "sentiment_polarity" => "positive"
        }, {
            "type" => "detected", "title" => "rather", "is_negated" => true, "is_intensified" => false, "negating_phrase" => "reduce", "sentiment_score" => -0.6, "sentiment_polarity" => "negative"
        }, {
            "type" => "detected", "title" => "improves", "is_negated" => false, "is_intensified" => false, "sentiment_score" => 0.735, "sentiment_polarity" => "positive"
        }, {
            "type" => "possible", "title" => "present way", "sentiment_polarity" => "neutral"
        }, {
            "type" => "possible", "title" => "clear need", "sentiment_polarity" => "neutral"
        }, {
            "type" => "possible", "title" => "somewhat rebalance", "sentiment_polarity" => "neutral"
        }, {
            "type" => "possible", "title" => "immediately reduce", "sentiment_polarity" => "neutral"
        }, {
            "type" => "possible", "title" => "consistent measures", "sentiment_polarity" => "neutral"
        }], "summary" => "The head of a review into Australia's mental health sector has warned the system will struggle without change and a major funding overhaul... The ABC has obtained a summary of the yet-to-be released report, which finds the Commonwealth spends almost $10 billion on mental health annually, but with no consistent measures of whether it improves people's lives... Suicide Prevention Australia chief Sue Murray also called for the report's immediate release, arguing the delay had real impacts on the mental health sector... ", "entities" => [{
            "type" => "named", "label" => "Currency Amount", "title" => "$1 billion", "themes" => [{
                "title" => "mental health sector", "stemmed" => "mental health sector", "evidence" => 7, "is_about" => false, "normalized" => "mental health sector", "strength_score" => 3.675, "sentiment_score" => 3.0, "sentiment_polarity" => "positive"
            }, {
                "title" => "major funding overhaul", "stemmed" => "major funding overhaul", "evidence" => 7, "is_about" => false, "normalized" => "major funding overhaul", "strength_score" => 3.125, "sentiment_score" => 1.4613334, "sentiment_polarity" => "positive"
            }, {
                "title" => "mental health services", "stemmed" => "mental health service", "evidence" => 7, "is_about" => false, "normalized" => "mental health service", "strength_score" => 2.0, "sentiment_score" => 1.0, "sentiment_polarity" => "positive"
            }, {
                "title" => "major flaws", "stemmed" => "major flaw", "evidence" => 7, "is_about" => false, "normalized" => "major flaw", "strength_score" => 1.3333334, "sentiment_score" => -0.12466666, "sentiment_polarity" => "neutral"
            }, {
                "title" => "seeking help", "stemmed" => "seeking help", "evidence" => 7, "is_about" => false, "normalized" => "seeking help", "strength_score" => 1.3333334, "sentiment_score" => 0.33220953, "sentiment_polarity" => "neutral"
            }], "evidence" => 7, "is_about" => false, "confident" => true, "entity_type" => "Pattern", "sentiment_score" => 0.3905231, "sentiment_polarity" => "neutral"
        }, {
            "type" => "named", "label" => "Person", "title" => "Professor Allan Fels", "themes" => [{
                "title" => "mental health services", "stemmed" => "mental health service", "evidence" => 7, "is_about" => false, "normalized" => "mental health service", "strength_score" => 4.4424605, "sentiment_score" => 2.0, "sentiment_polarity" => "positive"
            }, {
                "title" => "major flaws", "stemmed" => "major flaw", "evidence" => 7, "is_about" => false, "normalized" => "major flaw", "strength_score" => 2.0833335, "sentiment_score" => -0.24933332, "sentiment_polarity" => "neutral"
            }, {
                "title" => "seeking help", "stemmed" => "seeking help", "evidence" => 7, "is_about" => false, "normalized" => "seeking help", "strength_score" => 2.0833335, "sentiment_score" => 0.83849394, "sentiment_polarity" => "positive"
            }, {
                "title" => "consistent measures", "stemmed" => "consistent measure", "evidence" => 7, "is_about" => false, "normalized" => "consistent measure", "strength_score" => 1.9761906, "sentiment_score" => 1.8967869, "sentiment_polarity" => "positive"
            }, {
                "title" => "human suffering", "stemmed" => "human suffer", "evidence" => 7, "is_about" => false, "normalized" => "human suffer", "strength_score" => 0.5, "sentiment_score" => 1.5, "sentiment_polarity" => "positive"
            }], "evidence" => 7, "is_about" => false, "confident" => true, "entity_type" => "Person", "sentiment_score" => 1.042866, "sentiment_polarity" => "positive"
        }, {
            "type" => "named", "label" => "Person", "title" => "Jan McLucas", "themes" => [{
                "title" => "mental health spokeswoman", "stemmed" => "mental health spokeswoman", "evidence" => 4, "is_about" => false, "normalized" => "mental health spokeswoman", "strength_score" => 1.5, "sentiment_score" => 0.25, "sentiment_polarity" => "neutral"
            }, {
                "title" => "mental health sector", "stemmed" => "mental health sector", "evidence" => 4, "is_about" => false, "normalized" => "mental health sector", "strength_score" => 1.5, "sentiment_score" => 0.5, "sentiment_polarity" => "neutral"
            }, {
                "title" => "immediate release", "stemmed" => "immediate release", "evidence" => 4, "is_about" => false, "normalized" => "immediate release", "strength_score" => 1.0, "sentiment_score" => 0.16616109, "sentiment_polarity" => "neutral"
            }, {
                "title" => "real impacts", "stemmed" => "real impact", "evidence" => 4, "is_about" => false, "normalized" => "real impact", "strength_score" => 1.0, "sentiment_score" => 0.33308053, "sentiment_polarity" => "neutral"
            }], "evidence" => 7, "is_about" => false, "confident" => true, "entity_type" => "Person", "sentiment_score" => -0.63750005, "sentiment_polarity" => "negative"
        }, {
            "type" => "named", "label" => "Person", "title" => "Sue Murray", "themes" => [{
                "title" => "mental health sector", "stemmed" => "mental health sector", "evidence" => 4, "is_about" => false, "normalized" => "mental health sector", "strength_score" => 1.5, "sentiment_score" => 0.5, "sentiment_polarity" => "neutral"
            }, {
                "title" => "immediate release", "stemmed" => "immediate release", "evidence" => 4, "is_about" => false, "normalized" => "immediate release", "strength_score" => 1.0, "sentiment_score" => 0.16375, "sentiment_polarity" => "neutral"
            }, {
                "title" => "real impacts", "stemmed" => "real impact", "evidence" => 4, "is_about" => false, "normalized" => "real impact", "strength_score" => 1.0, "sentiment_score" => 0.331875, "sentiment_polarity" => "neutral"
            }, {
                "title" => "lengthy delay", "stemmed" => "lengthy delay", "evidence" => 4, "is_about" => false, "normalized" => "lengthy delay", "strength_score" => 1.0, "sentiment_score" => -0.009062499, "sentiment_polarity" => "neutral"
            }, {
                "title" => "losing staff", "stemmed" => "losing staff", "evidence" => 4, "is_about" => false, "normalized" => "losing staff", "strength_score" => 1.0, "sentiment_score" => -0.7, "sentiment_polarity" => "negative"
            }], "evidence" => 7, "is_about" => true, "confident" => true, "entity_type" => "Person", "sentiment_score" => 0.055119947, "sentiment_polarity" => "neutral"
        }, {
            "type" => "named", "label" => "Person", "title" => "Ms Ley", "themes" => [{
                "title" => "mental health sector", "stemmed" => "mental health sector", "evidence" => 7, "is_about" => false, "normalized" => "mental health sector", "strength_score" => 1.425, "sentiment_score" => 1.5, "sentiment_polarity" => "positive"
            }, {
                "title" => "overarching strategy", "stemmed" => "overarching strategy", "evidence" => 7, "is_about" => false, "normalized" => "overarching strategy", "strength_score" => 1.3333334, "sentiment_score" => 0.38850003, "sentiment_polarity" => "neutral"
            }, {
                "title" => "wide-ranging recommendations", "stemmed" => "wide-ranging recommend", "evidence" => 7, "is_about" => false, "normalized" => "wide-ranging recommend", "strength_score" => 1.3333334, "sentiment_score" => 0.66, "sentiment_polarity" => "positive"
            }, {
                "title" => "mental health issues", "stemmed" => "mental health issue", "evidence" => 7, "is_about" => false, "normalized" => "mental health issue", "strength_score" => 1.25, "sentiment_score" => 1.5, "sentiment_polarity" => "positive"
            }, {
                "title" => "mental health experts", "stemmed" => "mental health expert", "evidence" => 7, "is_about" => false, "normalized" => "mental health expert", "strength_score" => 1.125, "sentiment_score" => 1.05, "sentiment_polarity" => "positive"
            }], "evidence" => 7, "is_about" => false, "confident" => true, "entity_type" => "Person", "sentiment_score" => 1.8686666, "sentiment_polarity" => "positive"
        }], "language" => "English", "config_id" => "faa7da62-975b-498c-b27e-1494a0209453", "source_text" => "The head of a review into Australia's mental health sector has warned the system will struggle without change and a major funding overhaul.\nThe National Mental Health Commission (NMHC) probe found major flaws in responses to people seeking help, and recommends shifting more than $1 billion from hospitals to community-based mental health services.\nNMHC chairman Professor Allan Fels said the system was up to a decade overdue for an overhaul.\n\"The system would be struggling if it continues on in the present way,\" he told AM.\n\"There is a clear need for rebalancing and that would reduce both human suffering and economic costs. \n\"The Commonwealth should get ready to somewhat rebalance its spending away from it all going into hospitals when it would be better spent on services that keep people out of hospitals.\"\nProfessor Fels said there were no recommendations to immediately reduce hospital funding.\nThe ABC has obtained a summary of the yet-to-be released report, which finds the Commonwealth spends almost $10 billion on mental health annually, but with no consistent measures of whether it improves people's lives.\nIt recommends: \nPressure is building on the Federal Government to release the long-awaited review.\nThe NMHC report was delivered in November last year but has not been publicly released.\nOpposition mental health spokeswoman Jan McLucas has argued the delay is unacceptable.\n\"This report has been leaked, and I think leaked out of frustration, so that this conversation that we need to have as a nation can be had,\" Senator McLucas said.\nSuicide Prevention Australia chief Sue Murray also called for the report's immediate release, arguing the delay had real impacts on the mental health sector.\n \n\"The lengthy delay in the release of the report has led to some organisations losing staff,\" Ms Murray said.\n\"What that means is the services that those organisations are able to provide are diminished.\"\nHealth Minister Sussan Ley said the review would be released soon.\n\"The Abbott Government is currently finalising its overarching strategy to address the complex and wide-ranging recommendations of the Mental Health Review, which will be released shortly in conjunction with review itself,\" Ms Ley said in a statement.\n\"I can confirm the Government is committed to working with mental health experts and other levels of government over the next 12 months to deliver better outcomes for the sector and Australians long-term.\"\nThe minister also played down the chance of shifting $1 billion from hospitals to community-based care.\n\"This is a report to the Government, not of Government, and any recommendations will need to continue to be scrutinised in consultation with the mental health sector and other levels of government,\" Ms Ley said.\n\"However, my strong view is we need to be partners with the states if we are to address serious mental health issues in this country long-term.\n\"Our preference therefore is to work with the states to deliver better co-ordination of existing roles and funding arrangements, rather than reduce the part they play.\"", "language_score" => 420.0, "auto_categories" => [{
            "type" => "node", "title" => "Health", "categories" => [{
                "type" => "concept", "title" => "Nursing_specialties", "strength_score" => 0.5815371
            }, {
                "type" => "concept", "title" => "Public_health_education", "strength_score" => 0.540764
            }, {
                "type" => "concept", "title" => "World_Health_Organization", "strength_score" => 0.5378308
            }, {
                "type" => "concept", "title" => "Healthcare_reform", "strength_score" => 0.529284
            }, {
                "type" => "concept", "title" => "Universal_healthcare", "strength_score" => 0.5090442
            }], "strength_score" => 1.0
        }], "sentiment_score" => 0.032580752, "sentiment_polarity" => "neutral"
    }, "text" => "The head of a review into Australia's mental health sector has warned the system will struggle without change and a major funding overhaul.\nThe National Mental Health Commission (NMHC) probe found major flaws in responses to people seeking help, and recommends shifting more than $1 billion from hospitals to community-based mental health services.\nNMHC chairman Professor Allan Fels said the system was up to a decade overdue for an overhaul.\n\"The system would be struggling if it continues on in the present way,\" he told AM.\n\"There is a clear need for rebalancing and that would reduce both human suffering and economic costs. \n\"The Commonwealth should get ready to somewhat rebalance its spending away from it all going into hospitals when it would be better spent on services that keep people out of hospitals.\"\nProfessor Fels said there were no recommendations to immediately reduce hospital funding.\nThe ABC has obtained a summary of the yet-to-be released report, which finds the Commonwealth spends almost $10 billion on mental health annually, but with no consistent measures of whether it improves people's lives.\nIt recommends: \nPressure is building on the Federal Government to release the long-awaited review.\nThe NMHC report was delivered in November last year but has not been publicly released.\nOpposition mental health spokeswoman Jan McLucas has argued the delay is unacceptable.\n\"This report has been leaked, and I think leaked out of frustration, so that this conversation that we need to have as a nation can be had,\" Senator McLucas said.\nSuicide Prevention Australia chief Sue Murray also called for the report's immediate release, arguing the delay had real impacts on the mental health sector.\n \n\"The lengthy delay in the release of the report has led to some organisations losing staff,\" Ms Murray said.\n\"What that means is the services that those organisations are able to provide are diminished.\"\nHealth Minister Sussan Ley said the review would be released soon.\n\"The Abbott Government is currently finalising its overarching strategy to address the complex and wide-ranging recommendations of the Mental Health Review, which will be released shortly in conjunction with review itself,\" Ms Ley said in a statement.\n\"I can confirm the Government is committed to working with mental health experts and other levels of government over the next 12 months to deliver better outcomes for the sector and Australians long-term.\"\nThe minister also played down the chance of shifting $1 billion from hospitals to community-based care.\n\"This is a report to the Government, not of Government, and any recommendations will need to continue to be scrutinised in consultation with the mental health sector and other levels of government,\" Ms Ley said.\n\"However, my strong view is we need to be partners with the states if we are to address serious mental health issues in this country long-term.\n\"Our preference therefore is to work with the states to deliver better co-ordination of existing roles and funding arrangements, rather than reduce the part they play.\"", "semantria_id" => "e11ad1c6-52bb-4b08-bef3-71a557512851", "created_at" => "2015-04-15T02:46:03.616Z", "updated_at" => "2015-04-15T02:46:24.598Z"
}])