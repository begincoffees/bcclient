FROM node:10 as build-stage 
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm install
COPY ./ /usr/app/
RUN npm run build
VOLUME ["/var/www/html"]

# FROM build-stage as deploy
# WORKDIR /usr/share/nginx/html
# COPY --from=build-stage /usr/app/build/ /usr/share/nginx/html/


