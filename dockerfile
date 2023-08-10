FROM node:16

RUN mkdir /home/digiEssouira

WORKDIR /home/digiEssouira

COPY package.* .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]




