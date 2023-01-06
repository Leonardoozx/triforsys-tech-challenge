FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9004

ENV PORT=9004

CMD ["npm", "start"]