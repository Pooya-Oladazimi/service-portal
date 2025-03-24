FROM node:18-alpine AS builder

ARG NPM_TOKEN

ENV NPM_TOKEN=${NPM_TOKEN}

WORKDIR /app

COPY package.json package-lock.json ./

RUN echo "//npm.pkg.github.com/:_authToken=$NPM_TOKEN" > "/app/.npmrc" &&\
  echo "@ts4nfdi:registry=https://npm.pkg.github.com" >> "/app/.npmrc"

RUN npm install --force

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

RUN npm install --production --force

EXPOSE 3000

CMD ["npm", "start"]
