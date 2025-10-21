FROM node:22-alpine

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
