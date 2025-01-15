FROM oven/bun:1 AS base

FROM base AS deps
WORKDIR /temp
COPY package.json bun.lockb .
RUN bun install --frozen-lockfile

FROM base
WORKDIR /app
COPY --from=deps /temp/node_modules ./node_modules
COPY . .

USER bun
CMD ["bun", "run", "index.ts"]
