#!/bin/sh
vue-cli-service build --mode debug --watch &
cd server
make && ./bin/shortcuts ../dist
