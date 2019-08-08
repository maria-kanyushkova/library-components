FROM node:alpine

WORKDIR /devel

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD ["npm", "start"]