#!/bin/bash
#This is designed around AWS, but could easily be adapted to a local boot2docker
# Make sure the following are defined in your env;
# - AWS_ACCESS_KEY_ID
# - AWS_SECRET_ACCESS_KEY
# - AWS_VPC_ID

# Set up the docker host. This will be an ubuntu 14.04 image according to the docker-machine docs
docker-machine create --driver amazonec2 aws01

# Set up cloudflare with the right IP address
# XXX USE THIS https://www.npmjs.com/package/cloudflare-cli

