FROM node:10 as build-stage 
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm install
COPY ./ /usr/app/
RUN npm run build
# VOLUME ["/var/www/html"]

FROM nginx:1.13.12-alpine as deploy
WORKDIR /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY --from=build-stage /usr/app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/app/build/ /usr/share/nginx/html/

