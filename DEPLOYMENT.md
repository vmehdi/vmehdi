# Production Deployment with Nginx Reverse Proxy

## Prerequisites

- Docker and Docker Compose installed
- SSL certificates from Let's Encrypt (if using HTTPS)
- Domain name pointing to your server
- Nginx installed on the host system

## Quick Start

### 1. SSL Certificate Setup (if not already done)

```bash
# Install certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d vmehdi.com -d www.vmehdi.com
```

### 2. Deploy Next.js Application

```bash
# Build and start the application
docker-compose up -d --build

# Check status
docker-compose ps
```

### 3. Configure Nginx (on host system)

```bash
# Copy nginx config to sites-available
sudo cp nginx.conf /etc/nginx/sites-available/vmehdi.com

# Enable the site
sudo ln -s /etc/nginx/sites-available/vmehdi.com /etc/nginx/sites-enabled/

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 4. Access the Application

- HTTP: `http://vmehdi.com` (redirects to HTTPS)
- HTTPS: `https://vmehdi.com`
- Direct: `http://localhost:3000` (for testing)

## Architecture

```
Internet → Nginx (Port 80/443) → Next.js App (Port 3000)
```

- **Nginx**: Reverse proxy running on host system, SSL termination
- **Next.js App**: Application server running in Docker on port 3000
- **Communication**: Nginx proxies requests to localhost:3000

## Configuration Files

### nginx.conf

- SSL termination
- Security headers
- Gzip compression
- Static file caching
- Proxy to localhost:3000

### docker-compose.yml

- Single service: `vmehdi-app`
- Exposes port 3000 to host
- Health checks
- Production environment

## SSL Certificate Renewal

### Automatic Renewal

```bash
# Test renewal
sudo certbot renew --dry-run

# Set up automatic renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Manual Renewal

```bash
sudo certbot renew
sudo systemctl reload nginx
```

## Monitoring and Logs

### View Logs

```bash
# Application logs
docker-compose logs -f vmehdi-app

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Health Checks

```bash
# Check container health
docker ps

# Test health endpoint
curl https://vmehdi.com/health
curl http://localhost:3000/api/health
```

## Performance Optimization

### Nginx Caching

The nginx configuration includes:

- Static file caching (1 year)
- Next.js static assets caching
- Gzip compression

### Docker Optimization

- Multi-stage build for smaller images
- Non-root user for security
- Health checks for reliability

## Troubleshooting

### Common Issues

1. **SSL Certificate Issues**

   ```bash
   # Check certificate status
   sudo certbot certificates

   # Renew if needed
   sudo certbot renew
   ```

2. **Nginx Configuration Errors**

   ```bash
   # Test nginx config
   sudo nginx -t

   # Reload nginx
   sudo systemctl reload nginx
   ```

3. **Application Not Starting**

   ```bash
   # Check app logs
   docker-compose logs vmehdi-app

   # Restart app
   docker-compose restart vmehdi-app
   ```

4. **Port Conflicts**

   ```bash
   # Check what's using port 3000
   sudo netstat -tlnp | grep :3000

   # Check what's using port 80/443
   sudo netstat -tlnp | grep :80
   sudo netstat -tlnp | grep :443
   ```

5. **Connection Issues**

   ```bash
   # Test direct connection to app
   curl http://localhost:3000

   # Test through nginx
   curl https://vmehdi.com
   ```

### Debug Mode

```bash
# Run in debug mode
docker-compose logs -f vmehdi-app
```

## Scaling

### Horizontal Scaling

```bash
# Scale the application
docker-compose up --scale vmehdi-app=3 -d
```

### Load Balancing

For multiple app instances, you can configure nginx to load balance between different ports:

```nginx
upstream app_servers {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

location / {
    proxy_pass http://app_servers;
    # ... other proxy settings
}
```

## Backup and Recovery

### Backup SSL Certificates

```bash
# Backup certificates
sudo tar -czf ssl-backup.tar.gz /etc/letsencrypt/
```

### Backup Application Data

```bash
# Backup Docker volumes (if any)
docker run --rm -v vmehdi_data:/data -v $(pwd):/backup alpine tar czf /backup/app-backup.tar.gz -C /data .
```

## Security Considerations

1. **Firewall**: Only open ports 80 and 443
2. **SSL**: Use strong SSL configuration
3. **Headers**: Security headers are included in nginx config
4. **Updates**: Regularly update Docker images and nginx
5. **Monitoring**: Monitor logs for suspicious activity

## Environment Variables

You can customize the deployment by creating a `.env` file:

```bash
# .env
NODE_ENV=production
PORT=3000
DOMAIN=vmehdi.com
```

Then reference in docker-compose.yml:

```yaml
environment:
  - NODE_ENV=${NODE_ENV:-production}
  - PORT=${PORT:-3000}
```

## Development vs Production

### Development

```bash
# Run in development mode
npm run dev
# or
bun run dev
```

### Production (Docker + Nginx)

```bash
# Build and run with Docker
docker-compose up -d --build

# Configure nginx on host
sudo cp nginx.conf /etc/nginx/sites-available/vmehdi.com
sudo ln -s /etc/nginx/sites-available/vmehdi.com /etc/nginx/sites-enabled/
sudo systemctl reload nginx
```
