# Use the official Node.js image as the base image
FROM node:14-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 30010

# Command to run the application
CMD ["nodemon", "app.js"]
