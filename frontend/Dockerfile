FROM node:16-alpine AS Builder

RUN mkdir src

WORKDIR /src

RUN npm install -g npm@8.12.1

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . ./

RUN npm run build && rm -rf node_modules

FROM nginx:1.17

WORKDIR /usr/share/nginx/html/

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

COPY --from=Builder ./src/build  /usr/share/nginx/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]