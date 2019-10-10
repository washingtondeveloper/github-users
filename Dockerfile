FROM ubuntu as builder
RUN apt-get update && apt-get install -y --allow-unauthenticated apt-transport-https lsb-release gnupg curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs
RUN mkdir -p /usr/src/app
ADD . /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install
RUN npm run build
#Run image
FROM nginx
WORKDIR /usr/share/nginx/html/
COPY --from=builder /usr/src/app/build/ .
COPY ./env.sh .
COPY ./.env .
COPY ./config/default.conf /etc/nginx/conf.d
RUN chmod +x env.sh
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g "daemon off;""]
EXPOSE 80