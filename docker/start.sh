#! /usr/bin/env bash

cd /src

git clone http://github.com/anythingbot/anythingbot.git

cd anythingbot

npm install

cp configs/template.js configs/custom.js

npm run main
