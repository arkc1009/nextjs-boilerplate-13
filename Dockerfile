FROM node:16.18-alpine AS builder

WORKDIR /app
COPY . /app

RUN yarn install
RUN yarn build

FROM node:16.18-alpine

WORKDIR /app
COPY --from=builder /app /app

ENTRYPOINT [ "yarn", "start" ]