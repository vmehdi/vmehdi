FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:1-alpine

WORKDIR /app

RUN apk add --no-cache wget

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

COPY --from=builder /app/next.config.js ./

RUN bun install --production --frozen-lockfile

RUN addgroup -g 1001 -S nodejs
RUN adduser -u 1001 -S nodejs -G nodejs

RUN mkdir -p .next/cache && chown -R nodejs:nodejs .next

RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0" 

CMD ["bun", "run", "start"]