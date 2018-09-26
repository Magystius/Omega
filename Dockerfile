FROM node:10.11.0-alpine

LABEL version="1.0"
LABEL service="omega"

WORKDIR /src

COPY package.json .
RUN npm i --only=prod

COPY index.js .

EXPOSE 8080

CMD ["npm", "start"]
