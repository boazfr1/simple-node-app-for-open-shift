FROM node:latest

WORKDIR /usr/src/app

ENV NODE_ENV production

# Just copy the package.json...
COPY package*.json ./

# so we can cache this layer:
RUN npm install

COPY . .

EXPOSE 8081

# command to run on container start
CMD [ "node", "./bin/www" ]
