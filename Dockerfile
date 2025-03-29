FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

COPY . .

EXPOSE 3000

# Use PM2 with ecosystem file
CMD ["pm2-runtime", "ecosystem.config.js"]
