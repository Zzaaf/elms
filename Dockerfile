FROM node
ENV NODE_ENV production
ENV DATABASE_URL postgres://postgres:postgres@localhost:5432/elms-db 
WORKDIR /application
COPY ./server/package.json .
COPY ./server/package-lock.json .
RUN npm ci
COPY ./server .
EXPOSE 4000
CMD [ "npm", "start" ]