FROM node:8.11.1-alpine
WORKDIR /usr/app/
COPY package*.json /usr/app/
RUN npm install --silent
COPY . .

VOLUME ["bcserver"]