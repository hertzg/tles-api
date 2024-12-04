FROM node:22-alpine AS base
WORKDIR /app
RUN mkdir -p /app/conf
COPY ./conf/config.json.EXAMPLE /app/conf/config.json

FROM base AS webproc
RUN apk update \
    	&& apk --no-cache add dnsmasq \
    	&& apk add --no-cache --virtual .build-deps curl bash \
        && curl https://i.jpillora.com/webproc | bash \
        && apk del .build-deps

FROM base AS node_deps
COPY package*.json ./
RUN npm install

FROM node:22-alpine
COPY --from=node_deps /app/ /app/
COPY --from=webproc /app/webproc /app/webproc
COPY ./src ./src
ENTRYPOINT ["/app/webproc", "-c", "/app/conf/config.json", "-c", "/app/conf/cookies.json", "npm", "start"]