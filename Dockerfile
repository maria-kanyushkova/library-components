FROM node:alpine

WORKDIR /devel

COPY storybook/package.json .
COPY storybook/yarn.lock .

RUN yarn install

COPY storybook .

CMD ["npm", "start"]