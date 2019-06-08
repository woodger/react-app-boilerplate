FROM node
WORKDIR /usr/src/app
COPY . .

RUN npm -g install serve
RUN npm install --production
RUN npm run build

EXPOSE 3000
CMD [ "serve", "-s", "dist", "-p", "3000" ]
