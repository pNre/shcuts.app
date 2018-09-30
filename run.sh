#!/bin/sh
export PG_CONNECTION_STRING="postgresql://pNre:@localhost:5432/pNre"
cd server
make && ./bin/shortcuts ../dist
