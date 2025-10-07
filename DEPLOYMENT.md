# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

**That's it!** Your site will be live at `https://your-project.vercel.app`

## Deploy to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/`
4. Click "Save and Deploy"

## Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click "Deploy site"

## Self-Hosted Deployment

### Prerequisites
- Node.js 18+ installed
- PM2 or similar process manager
- Reverse proxy (Nginx/Apache)
- SSL certificate (Let's Encrypt recommended)

### Steps

1. **Build the application**
```bash
npm install
npm run build
```

2. **Start the production server**
```bash
npm start
```

3. **Use PM2 for process management**
```bash
# Install PM2
npm install -g pm2

# Start the application
pm2 start npm --name "portfolio" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

4. **Configure Nginx as reverse proxy**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Setup SSL with Let's Encrypt**
```bash
sudo certbot --nginx -d yourdomain.com
```

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```bash
# Example environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id

# Web3 Configuration (when implemented)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your-project-id
NEXT_PUBLIC_CHAIN_ID=1

# API Keys (when needed)
NEXT_PUBLIC_IPFS_GATEWAY=https://gateway.pinata.cloud
```

## Post-Deployment Checklist

- [ ] Verify site loads correctly
- [ ] Test all interactive elements
- [ ] Check WebGL/Three.js scene works
- [ ] Test contact form submission
- [ ] Verify responsive design on mobile
- [ ] Test all navigation links
- [ ] Verify SEO metadata
- [ ] Check Lighthouse scores
- [ ] Setup analytics (optional)
- [ ] Configure custom domain (optional)
- [ ] Setup SSL certificate
- [ ] Test PWA functionality

## Performance Optimization

### CDN Configuration
Most platforms (Vercel, Cloudflare, Netlify) include CDN by default.

### Caching Headers
Already configured in `vercel.json` for Vercel deployments.

For other platforms, add these headers:
```
Cache-Control: public, max-age=31536000, immutable (for static assets)
Cache-Control: public, max-age=0, must-revalidate (for HTML)
```

### Image Optimization
Next.js automatically optimizes images. For best results:
- Use WebP/AVIF formats
- Provide appropriate sizes
- Use lazy loading

## Monitoring & Analytics

### Recommended Services

**Analytics:**
- Plausible.io (privacy-friendly)
- Vercel Analytics (built-in)
- Google Analytics 4

**Error Tracking:**
- Sentry
- LogRocket
- Rollbar

**Performance:**
- Vercel Speed Insights
- Google PageSpeed Insights
- WebPageTest

## Troubleshooting

### Build Fails

**Problem**: npm install fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

**Problem**: Build errors
```bash
# Check Node version
node --version  # Should be 18+

# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Runtime Issues

**Problem**: Three.js not loading
- Ensure client-side rendering with `'use client'`
- Check dynamic import is used
- Verify WebGL support in browser

**Problem**: Navigation not working
- Check anchor links match section IDs
- Verify smooth scroll is enabled
- Test scroll-behavior CSS support

### Performance Issues

**Problem**: Slow initial load
- Check bundle size with `npm run analyze` (after adding analyzer)
- Optimize images
- Enable compression (gzip/brotli)

**Problem**: Animation lag
- Check requestAnimationFrame usage
- Optimize shader complexity
- Reduce particle count if needed

## Domain Configuration

### Custom Domain on Vercel

1. Go to project settings → Domains
2. Add your domain
3. Configure DNS records:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### Custom Domain on Cloudflare

1. Add domain in Cloudflare Pages settings
2. Update DNS records in Cloudflare DNS
3. Enable "Always Use HTTPS"

## Backup & Recovery

### Database Backup (if using)
```bash
# Example for PostgreSQL
pg_dump dbname > backup.sql
```

### Code Backup
Always use version control (Git) and push to remote repository.

### Asset Backup
Store original artwork files in cloud storage (S3, Cloudflare R2, etc.)

## Scaling Considerations

### Horizontal Scaling
- Use serverless functions (Vercel/Netlify)
- Enable CDN caching
- Optimize database queries

### Vertical Scaling
- Increase server resources
- Use Redis for caching
- Implement load balancing

## Security

### Best Practices
- Keep dependencies updated
- Use environment variables for secrets
- Enable security headers (already configured)
- Implement rate limiting for forms
- Use HTTPS only

### Regular Maintenance
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update
```

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Cloudflare Docs**: https://developers.cloudflare.com
- **GitHub Issues**: Report bugs in repository issues

---

**Last Updated**: 2024  
**Deployment Status**: Production Ready  
**Recommended Platform**: Vercel (zero-config)
