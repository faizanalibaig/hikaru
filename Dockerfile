#base image
FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty 
    
RUN mkdir -p hikaru

COPY . /hikaru

RUN npm install

CMD ["node", "/hikaru/dist/server.js"]

#docker build -t (testapp)name