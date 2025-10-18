# Docker Deployment Guide

## Prerequisites

- Docker installed on your system
- Docker Compose installed

## Quick Start

### 1. Build and Run with Docker Compose

```bash
# Build and start the application
docker-compose up --build

# Run in detached mode (background)
docker-compose up -d --build
```

### 2. Access the Application

- Open your browser and go to: `http://localhost:3000`
- The application will be available on port 3000

### 3. Stop the Application

```bash
# Stop the application
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

## Manual Docker Commands

### Build the Docker Image

```bash
docker build -t vmehdi-website .
```

### Run the Container

```bash
docker run -p 3000:3000 vmehdi-website
```

## Environment Variables

You can customize the application by setting environment variables:

```bash
# Create a .env file
echo "NODE_ENV=production" > .env
echo "PORT=3000" >> .env
```

## Production Deployment

### Using Docker Compose (Recommended)

```bash
# For production deployment
docker-compose -f docker-compose.yml up -d --build
```

### Health Check

The application includes a health check that runs every 30 seconds. You can check the status:

```bash
# Check container health
docker ps

# View logs
docker-compose logs -f vmehdi-app
```

## Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Change the port in docker-compose.yml
   ports:
     - "3001:3000"  # Use port 3001 instead
   ```

2. **Build fails**

   ```bash
   # Clean Docker cache
   docker system prune -a

   # Rebuild without cache
   docker-compose build --no-cache
   ```

3. **Permission issues**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   ```

### View Logs

```bash
# View application logs
docker-compose logs vmehdi-app

# Follow logs in real-time
docker-compose logs -f vmehdi-app
```

## Development vs Production

### Development

```bash
# Run in development mode
npm run dev
# or
bun run dev
```

### Production (Docker)

```bash
# Build and run with Docker
docker-compose up --build
```

## Scaling

To run multiple instances:

```bash
# Scale to 3 instances
docker-compose up --scale vmehdi-app=3
```

Note: You'll need a load balancer (like nginx) to distribute traffic between instances.
