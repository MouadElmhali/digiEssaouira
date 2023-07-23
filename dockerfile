FROM node:16

# WORKDIR /home/digiEssouira/

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]




