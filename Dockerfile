FROM node:10.15.3

WORKDIR /app

COPY package*.json /app
RUN npm install
COPY . /app

RUN next build

EXPOSE 8081

ENV DB_URI=mongodb://localhost/Sapp SESSION_SECRET='secret'

CMD [ "node server/index.js" ] 
