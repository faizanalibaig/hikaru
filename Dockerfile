FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install --ignore-scripts

COPY ./ ./

RUN npm run build

CMD ["npm", "start"]
