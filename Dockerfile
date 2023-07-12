FROM node:16
COPY . /app
WORKDIR /app
RUN npm ci
CMD ["npm", "start"]