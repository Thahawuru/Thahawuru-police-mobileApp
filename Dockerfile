# Use the latest Node.js 20 base image for React Native
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default port for Expo
EXPOSE 19000

# Start the Expo development server
CMD ["npm", "start"]
