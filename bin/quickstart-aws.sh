#!/bin/bash
#This is designed around AWS, but could easily be adapted to a local boot2docker
# Make sure the following are defined in your env;
# - AWS_ACCESS_KEY_ID
# - AWS_SECRET_ACCESS_KEY
# - AWS_VPC_ID

# Set up the docker host. This will be an ubuntu 14.04 image according to the docker-machine docs
docker-machine create --driver amazonec2 aws01

# Get the env together
eval "$(docker-machine env aws01)"

# Run the main dockerfile in this repo
docker-compose up -d

# Setting up the elk stack is still incomplete, but here's the basic gist of it
docker-machine create --driver amazonec2 aws02

# Run the stack on the second host
eval "$(docker-machine env aws02)"

docker run -p 5601:5601 -p 9200:9200 -p 5000:5000 -it --name elk sebp/elk
