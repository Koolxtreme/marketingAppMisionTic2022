FROM node:16
ENV MONGO_URL="mongodb://mongo:OsCW3u43RDWm3MFrFUzi@containers-us-west-100.railway.app:7664/crudMarketingApp"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]