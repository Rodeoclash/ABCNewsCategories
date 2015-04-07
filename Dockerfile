FROM ruby:2.1.2

RUN apt-get update -qq && apt-get install -y build-essential npm nodejs-legacy

WORKDIR /tmp
COPY Gemfile Gemfile
RUN bundle install

RUN npm install localtunnel -g

RUN mkdir /app
WORKDIR /app
ADD . /app

CMD foreman start -f Procfile
