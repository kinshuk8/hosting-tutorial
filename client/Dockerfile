# build stage
FROM oven/bun:1.3.1 AS build

WORKDIR /app

COPY package*.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

# production stage

FROM oven/bun:1.3.1 AS production

WORKDIR /app

RUN bun add -g serve

ENV PATH="/usr/local/bin:${PATH}"

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
