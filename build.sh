#!/bin/bash

# Comprehensive Build Script for ACE BITS - Netlify
echo "🚀 Starting ACE BITS Build Process..."

# Set Node.js version
echo "📦 Node.js version: $(node --version)"
echo "📦 NPM version: $(npm --version)"

# Clear cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# Install dependencies
echo "📥 Installing dependencies..."
npm ci --legacy-peer-deps --production=false

# Verify dependencies
echo "✅ Dependencies installed successfully"

# Build the project
echo "🏗️ Building project..."
npm run build

# Check build output
if [ -d "build" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build directory contents:"
    ls -la build/
    
    # Check for critical files
    if [ -f "build/index.html" ]; then
        echo "✅ index.html found"
    else
        echo "❌ index.html missing"
        exit 1
    fi
    
    if [ -d "build/static" ]; then
        echo "✅ static directory found"
        echo "📁 Static files:"
        ls -la build/static/
    else
        echo "❌ static directory missing"
        exit 1
    fi
    
    echo "🎉 Build verification completed successfully!"
else
    echo "❌ Build failed - build directory not found"
    exit 1
fi 