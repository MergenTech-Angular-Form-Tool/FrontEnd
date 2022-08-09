# get node image
FROM node:16.16.0

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli@13.1.0
COPY . /app

# start app for development
CMD ng serve --host 0.0.0.0

EXPOSE 4200
