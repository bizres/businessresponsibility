FROM node:16 AS base

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn install

# Copying source files
COPY . /usr/src/app

FROM base AS dev

RUN yarn run build
EXPOSE 3000

CMD ["yarn", "dev"]

FROM base AS prod

ENV NODE_ENV production
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
