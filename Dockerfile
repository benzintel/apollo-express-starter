FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
# USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 4000
CMD [ "npm", "start" ]