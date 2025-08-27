# 🚀 Netlify Deployment Guide for ACE BITS

## 📋 Prerequisites

- GitHub repository connected to Netlify
- Node.js 20.11.0 support
- NPM 10.2.4 support

## ⚙️ Netlify Build Settings

### Build Command
```bash
npm ci --legacy-peer-deps && npm run build
```

### Publish Directory
```
build
```

### Base Directory
```
(leave empty)
```

## 🔧 Environment Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_VERSION` | `20.11.0` | Node.js version |
| `NPM_VERSION` | `10.2.4` | NPM version |
| `CI` | `false` | Disable CI mode |
| `SKIP_PREFLIGHT_CHECK` | `true` | Skip preflight checks |
| `NPM_FLAGS` | `--legacy-peer-deps` | NPM installation flags |

## 📁 File Structure

```
acebit-main/
├── netlify.toml          # Netlify configuration
├── .nvmrc               # Node.js version
├── package.json         # Dependencies and scripts
├── netlify-build.sh     # Complex build script (optional)
└── netlify-build-simple.sh # Simple build script (backup)
```

## 🚀 Deployment Process

### 1. Automatic Deployment
- Push to `main` branch
- Netlify automatically triggers build
- Build output deployed to CDN

### 2. Manual Deployment
```bash
# Build locally
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=build
```

### 3. Build Commands

#### Primary Build Command
```bash
npm ci --legacy-peer-deps && npm run build
```

#### Alternative Build Commands
```bash
# Using package.json script
npm run build:netlify

# Using build script
chmod +x netlify-build-simple.sh && ./netlify-build-simple.sh
```

## 🔍 Troubleshooting

### Build Failures

#### Error: "netlify-build.sh: No such file or directory"
**Solution:** Use direct npm commands instead of build script

#### Error: "Dependencies installation failed"
**Solution:** Ensure `--legacy-peer-deps` flag is used

#### Error: "Node version mismatch"
**Solution:** Verify `.nvmrc` file contains `20.11.0`

### Performance Issues

#### Slow Builds
- Clear npm cache: `npm cache clean --force`
- Use `npm ci` instead of `npm install`
- Enable build caching in Netlify

#### Large Bundle Size
- Enable code splitting
- Optimize images
- Use dynamic imports

## 📱 Build Output

### Expected Build Directory
```
build/
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── index.html
└── asset-manifest.json
```

### Build Verification
```bash
# Check build output
ls -la build/

# Verify static assets
ls -la build/static/
```

## 🌐 Domain Configuration

### Primary Domain
- **Netlify subdomain:** `acebits.netlify.app`
- **Custom domain:** Configure as needed

### HTTPS Settings
- **Force HTTPS:** Enabled
- **TLS certificate:** Automatic

## 📊 Monitoring

### Build Logs
- Check Netlify dashboard for build logs
- Monitor build time and success rate
- Set up build notifications

### Performance Metrics
- Core Web Vitals
- Lighthouse scores
- Page load times

## 🔄 Continuous Deployment

### GitHub Integration
1. Connect GitHub repository
2. Set build settings
3. Configure branch deployment
4. Enable automatic builds

### Branch Deployments
- **Main branch:** Production deployment
- **Feature branches:** Preview deployments
- **Pull requests:** Automatic preview builds

## 📞 Support

### Common Issues
- Build script not found
- Dependency conflicts
- Node.js version issues
- Build timeout errors

### Resources
- [Netlify Documentation](https://docs.netlify.com/)
- [Build Configuration](https://docs.netlify.com/configure-builds/overview/)
- [Deploy Settings](https://docs.netlify.com/site-deploys/overview/)

---

**Last Updated:** 21-08-2025  
**Version:** 1.0.0  
**Status:** ✅ Ready for Deployment
