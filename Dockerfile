FROM node:10.15.3

WORKDIR /app

COPY package*.json /app/
RUN npm install
COPY . /app

RUN npm run build


ENV NODE_ENV=development PORT=3000
ENV DB_URI=mongodb://mongo/Sapp SESSION_SECRET='secret'

EXPOSE $PORT

CMD [ "npm", "start" ] 
