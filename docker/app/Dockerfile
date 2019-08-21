FROM node:9-slim
RUN npm install pm2 -g
WORKDIR /app
COPY . /app
RUN npm install 
CMD ["npm", "start"]

EXPOSE 3000