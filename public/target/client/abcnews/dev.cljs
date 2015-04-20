(ns abcnews.dev
  (:require [abcnews.core :as abcnews]
            [figwheel.client :as fw]))

(fw/start {:on-jsload abcnews/run
           :websocket-url "ws://localhost:3449/figwheel-ws"})