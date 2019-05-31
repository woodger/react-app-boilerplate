FROM node

WORKDIR /usr/src/app
COPY . .

RUN npm -g install serve
RUN npm install --production

ENV NODE_ENV=production
ENV HOST=localhost
ENV PORT=3000
ENV API_URL=http://example.com

RUN npm run build

EXPOSE 3000
CMD [ "serve", "-s", "dist", "-p", "3000" ]
