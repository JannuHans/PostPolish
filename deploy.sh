#!/bin/bash

# PostPolish Deployment Script
echo "🚀 PostPolish Deployment Script"
echo "================================"

# Check if we're in the right directory
if [ ! -f "package.json" ] && [ ! -d "client" ] && [ ! -d "server" ]; then
    echo "❌ Error: Please run this script from the SocioPilot root directory"
    exit 1
fi

echo "📦 Preparing for deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Deploy: Prepare for production deployment"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding remote origin..."
    git remote add origin https://github.com/JannuHans/PostPolish.git
fi

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub successfully!"
echo ""
echo "📋 Next Steps:"
echo "1. Deploy backend to Render:"
echo "   - Go to https://dashboard.render.com"
echo "   - Create new Web Service"
echo "   - Connect GitHub repository"
echo "   - Set environment variables (GEMINI_API_KEY)"
echo ""
echo "2. Deploy frontend to Vercel:"
echo "   - Go to https://vercel.com/dashboard"
echo "   - Import GitHub repository"
echo "   - Set root directory to 'client'"
echo "   - Set environment variable (VITE_API_URL to your Render URL)"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions"
