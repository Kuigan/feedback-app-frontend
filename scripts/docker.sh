# Build the frontend app container
docker build \
    -t feedback-app-frontend:v3.0 \
    -t feedback-app-frontend:latest \
    -t galaataman/feedback-app-frontend:v3.0 \
    -t galaataman/feedback-app-frontend:latest .

# Push the images to Docker Hub
docker push galaataman/feedback-app-frontend:v3.0
docker push galaataman/feedback-app-frontend:latest

# Start the app with Docker Compose
docker-compose up --build