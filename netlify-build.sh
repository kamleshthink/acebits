#!/bin/bash

# Netlify Build Script for ACE BIT Sindri
echo "🚀 Starting Netlify Build Process..."

# Set Node.js version
echo "📦 Setting Node.js version to 20.11.0..."
nvm use 20.11.0 || echo "Node version already set"

# Clear cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# Install dependencies with legacy peer deps
echo "📥 Installing dependencies..."
npm ci --legacy-peer-deps --production=false

# Install TypeScript globally if needed
echo "🔧 Installing TypeScript..."
npm install -g typescript

# Build the project
echo "🏗️ Building project..."
npm run build

echo "✅ Build completed successfully!"
