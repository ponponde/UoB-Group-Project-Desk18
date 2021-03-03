FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/fr-shohin-admin-server
WORKDIR /srv/app/fr-shohin-admin-server

COPY package.json /srv/app/fr-shohin-admin-server
COPY package-lock.json /srv/app/fr-shohin-admin-server

RUN npm install
COPY . /srv/app/fr-shohin-admin-server
CMD ["npm","run","dev"]