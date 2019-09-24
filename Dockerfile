FROM node:10-alpine

RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm

WORKDIR /devel

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD ["npm", "start"]