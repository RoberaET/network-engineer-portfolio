#!/bin/bash

# Deployment script for traditional hosting
echo "Building the application..."
pnpm build

echo "Creating deployment package..."
mkdir -p deploy
cp -r .next deploy/
cp package.json deploy/
cp pnpm-lock.yaml deploy/

echo "Deployment package created in 'deploy' folder"
echo "Upload the contents of 'deploy' folder to your hosting provider"
echo ""
echo "On your server, run:"
echo "1. pnpm install --prod"
echo "2. pnpm start" 