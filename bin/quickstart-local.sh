#!/bin/bash
#This is designed to set up this demo locally
# Set up the docker host. This will be the latest boot2docker image provided by the docker community
docker-machine create demo01

# Get the env together
eval "$(docker-machine env demo01)"

# Run the main dockerfile in this repo
docker-compose up -d

# Setting up the elk stack is still incomplete, but here's the basic gist of it
docker-machine create demo02

# Run the elk stack
eval "$(docker-machine env demo02)"

docker run -p 5601:5601 -p 9200:9200 -p 5000:5000 -it --name elk sebp/elk
