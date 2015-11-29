# Use the latest because
FROM node:5

# Running on 3000, like Andre
EXPOSE 3000

# Make the folder
RUN mkdir /src/

# Add the files
COPY . /src/

# be in the right place
WORKDIR /src

# start the app
CMD npm start
