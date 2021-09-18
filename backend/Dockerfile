FROM strapi/base:12 as base

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

FROM base AS dev

RUN npm run-script build

CMD [ "npm", "run", "develop" ]

FROM base AS prod

ENV NODE_ENV production
RUN npm run-script build

CMD [ "npm", "run", "start" ]
