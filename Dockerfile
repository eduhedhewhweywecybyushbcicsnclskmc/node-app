FROM node:18
WORKDIR /app
COPY package.json .
COPY index.js .
EXPOSE 3000
CMD ["npm", "start"]
