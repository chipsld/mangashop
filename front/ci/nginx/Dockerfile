ARG VERSION

# BUN
FROM oven/bun:1.0.22 as node-builder

# set working directory
WORKDIR /app

ENV BUN_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY ./package.json ./bun.lockb /app/
RUN bun install

# add app
COPY . .
RUN bun run build

#   .-.-.   .-.-.   .-.-.   .-.-.   .-.-.   .-.-.   .-.-.   .-.-
#  / / \ \ / / \ \ / / \ \ / / \ \ / / \ \ / / \ \ / / \ \ / / \
# `-'   `-`-'   `-`-'   `-`-'   `-`-'   `-`-'   `-`-'   `-`-'

FROM nginxinc/nginx-unprivileged:1.25.2

WORKDIR /app

# 1O1 is the non-root user of the official nginx-unprivileged image
COPY --chown=101:101 ./ci/nginx/conf.d/app.conf ./ci/nginx/conf.d/status.conf /etc/nginx/conf.d/
COPY --from=node-builder --chown=101:101 /app/dist/ /app/
# COPY --chown=101:101 ./scripts/env-to-javascript-file.sh /docker-entrypoint.d/env-to-javascript-file.sh

# Move all sourcemaps outside public folder
# Create cache folder for static assets
RUN mkdir -p /etc/nginx/sourcemaps \
    && find . -name '*.map' -exec mv {} /etc/nginx/sourcemaps \;
