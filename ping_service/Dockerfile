FROM node:latest

RUN npm install --global yarn@0.17.4

#Create directory 
RUN mkdir -p /src/ 
WORKDIR /src/

COPY package.json /src/package.json
COPY index.js /src/index.js
RUN cd /src/ && yarn install &&\     
    yarn cache clean

EXPOSE 1337

CMD ["yarn","start"]