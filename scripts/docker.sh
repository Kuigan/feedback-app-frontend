# Build the frontend app container
docker build \
    -t feedback-app-frontend:v1.0 \
    -t feedback-app-frontend:latest \
    -t kuigan/feedback-app-frontend:v1.0 \
    -t kuigan/feedback-app-frontend:latest .

# Push the image to Docker Hub
    docker push kuigan/feedback-app-frontend:v1.0
    docker push kuigan/feedback-app-frontend:latest

docker-compose up