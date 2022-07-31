FROM node:16

WORKDIR /usr/server

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 9080

CMD [ "yarn", "dev" ]