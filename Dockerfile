FROM node:10-alpine as build

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh yarn

RUN mkdir /app

WORKDIR /app

COPY package.json .


# ---------------

FROM node:10-alpine

RUN mkdir -p /app/build

RUN apk update && apk upgrade && apk add yarn git

WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package.json .
COPY --from=build /app/client/server.js .

ENV NODE_ENV production

EXPOSE 3001

CMD ["node", "server.js"]