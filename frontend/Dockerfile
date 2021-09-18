FROM node:12 AS base

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

FROM base AS dev

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "run", "dev"]

FROM base AS prod

ENV NODE_ENV production

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "start"]