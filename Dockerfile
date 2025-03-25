FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=secret,id=npm_token \ 
  echo "//npm.pkg.github.com/:_authToken='$(cat /run/secrets/npm_token)'" > "/app/.npmrc" &&\
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
