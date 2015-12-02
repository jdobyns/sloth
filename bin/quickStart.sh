#!/bin/bash
#This is designed around AWS, but could easily be adapted to a local boot2docker
# Make sure the following are defined in your env;
# - AWS_ACCESS_KEY_ID
# - AWS_SECRET_ACCESS_KEY
# - AWS_VPC_ID

# Set up the docker host. This will be an ubuntu 14.04 image according to the docker-machine docs
docker-machine create --driver amazonec2 aws01

# Set up cloudflare with the right IP address
curl -X GET "https://api.cloudflare.com/client/v4/zones/cd7d0123e3012345da9420df9514dad0" \
  -H "Content-Type:application/json" \
  -H "X-Auth-Key:1234567893feefc5f0q5000bfo0c38d90bbeb" \
  -H "X-Auth-Email:example@example.com"


