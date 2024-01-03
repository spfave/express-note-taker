FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production
COPY ./src ./src
EXPOSE 3000
RUN chown -R node /app
USER node
CMD ["npm", "start"]
