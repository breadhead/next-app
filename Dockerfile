FROM mhart/alpine-node:10 as build

WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build && yarn --production

FROM mhart/alpine-node:base-10

WORKDIR /usr/src
ENV NODE_ENV="production"
ENV PATH="./node_modules/.bin:$PATH"

COPY --from=build /usr/src .

CMD ["next", "start"]