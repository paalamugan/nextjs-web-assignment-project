# Supported tags and respective Dockerfile links, 17-alpine3.14, 17.4-alpine3.14, 17.4.0-alpine3.14, alpine3.14, current-alpine3.14
FROM node:16-alpine as builder

# Set working directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json yarn.lock ./

# Expose the port the app runs in (3000)
EXPOSE 3000

FROM builder as production
ENV NODE_ENV production

RUN yarn install --frozen-lockfile

COPY --chown=node:node . ./
USER node

# Building app
RUN yarn build

# Running the app
CMD yarn start