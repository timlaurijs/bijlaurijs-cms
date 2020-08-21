
FROM node:10-alpine as builder

ADD package.json package-lock.json ./
RUN npm install --only=production
ADD . .
RUN npm run-script build

FROM nginx:alpine
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY --from=builder /dist .

EXPOSE 5000