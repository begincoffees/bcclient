FROM node:10 as build-stage 
WORKDIR /usr/app
COPY package*.json /usr/app/
RUN npm install
COPY ./ /usr/app/
RUN npm run build

FROM nginx:1.15
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/app/build/ /usr/share/nginx/html
COPY --from=build-stage /usr/app/nginx.conf /etc/nginx/conf.d/default.conf

