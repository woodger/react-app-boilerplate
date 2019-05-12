FROM node:10.15

WORKDIR /usr/src/app
COPY . .

RUN npm install --production
ENV NODE_ENV=production

CMD [ "npm", "start" ]
EXPOSE 3000
