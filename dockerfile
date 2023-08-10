FROM node:16

WORKDIR /digiEssouira

COPY package.* .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]




