#!/bin/bash
set -e

echo "=== Starting Custom Build Process ==="

echo "1. Installing all dependencies..."
npm ci --legacy-peer-deps --production=false

echo "2. Installing TypeScript globally if needed..."
npm install -g typescript@5.9.2

echo "3. Verifying TypeScript installation..."
npx tsc --version

echo "4. Building the application..."
npm run build

echo "5. Build completed successfully!"
echo "=== Custom Build Process Finished ===" 