FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node:node /app

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
