FROM node:current-alpine AS base
WORKDIR /base
COPY package*.json ./
RUN yarn install
COPY . .
RUN ls -l && yarn gen:prisma

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN yarn build

FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
COPY --from=build /build/prisma ./prisma
COPY --from=build /build/.env ./.env
COPY --from=build /build/.env.production ./.env.production
RUN ls -l && yarn install --production && yarn gen:prisma

EXPOSE 3000
CMD yarn start