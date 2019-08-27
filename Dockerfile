FROM node
WORKDIR /usr/src/app
COPY . .

RUN npm install -g serve
RUN npm install --production
RUN npm run build

EXPOSE 8080
CMD ["serve", "-s", "dist", "-p", "8080"]
