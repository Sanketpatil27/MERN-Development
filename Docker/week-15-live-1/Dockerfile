FROM node:20

WORKDIR /app

# these are not changed often so we first add then so it can be cached
COPY package* .          
COPY ./prisma .

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3000 

CMD ["node", "dist/index.js"]
