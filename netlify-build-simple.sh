#!/bin/bash

# Simple Netlify Build Script for ACE BIT Sindri
echo "🚀 Starting Netlify Build Process..."

# Check Node.js version
echo "📦 Node.js version: $(node --version)"
echo "📦 NPM version: $(npm --version)"

# Clear cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# Install dependencies
echo "📥 Installing dependencies..."
npm ci --legacy-peer-deps --production=false

# Build the project
echo "🏗️ Building project..."
npm run build

# Check build output
if [ -d "build" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build directory contents:"
    ls -la build/
else
    echo "❌ Build failed - build directory not found"
    exit 1
fi
