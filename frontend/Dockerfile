# Use official Node.js image as base
FROM node:16

# Set working directory
WORKDIR /app

# Copy frontend files
COPY . .

# Install dependencies
RUN npm install

# Expose frontend port
EXPOSE 3000

# Start React app
CMD ["npm", "start"]
