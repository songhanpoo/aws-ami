ARG NODE_VER=10.15.4
ARG ALPINE_VER=3.10
ARG PORT=3000
FROM node:${NODE_VER}-alpine${ALPINE_VER} AS base

RUN apk update && apk upgrade && \
    apk add --no-cache git && apk add bash

# make the 'app' folder the current working directory
WORKDIR /app
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
RUN yarn

FROM base as dev
RUN apk add --no-cache bash curl busybox-extras
CMD ["yarn","dev"]

# prod
FROM base as build
ONBUILD ADD . .

FROM base AS builder
RUN yarn run build

FROM nginx:1.16.0-alpine as prod
RUN rm  /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE ${PORT}
CMD ["nginx","-g","daemon off;"]