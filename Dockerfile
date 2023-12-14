# Start your image with a node base image
FROM node:20-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install node packages
RUN npm install

# Copy src and public directories to the working directory of docker image (/app)
COPY ./src ./src

EXPOSE 3000

# Start application
CMD ["npm", "run", "start"]
