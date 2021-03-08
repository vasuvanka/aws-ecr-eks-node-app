FROM node:12-alpine

LABEL Author="Vasu Vanka"

WORKDIR /usr/src/app

COPY . .

EXPOSE 80

CMD ["node","app.js"]