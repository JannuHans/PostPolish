@echo off
echo 🚀 PostPolish Deployment Script
echo ================================

REM Check if we're in the right directory
if not exist "client" (
    echo ❌ Error: Please run this script from the SocioPilot root directory
    pause
    exit /b 1
)

echo 📦 Preparing for deployment...

REM Check if git is initialized
if not exist ".git" (
    echo 🔧 Initializing Git repository...
    git init
)

REM Add all files
echo 📁 Adding files to Git...
git add .

REM Check if there are changes to commit
git diff --staged --quiet
if %errorlevel% equ 0 (
    echo ℹ️  No changes to commit
) else (
    echo 💾 Committing changes...
    git commit -m "Deploy: Prepare for production deployment"
)

REM Check if remote exists
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔗 Adding remote origin...
    git remote add origin https://github.com/JannuHans/PostPolish.git
)

REM Push to GitHub
echo ⬆️  Pushing to GitHub...
git push -u origin main

echo.
echo ✅ Code pushed to GitHub successfully!
echo.
echo 📋 Next Steps:
echo 1. Deploy backend to Render:
echo    - Go to https://dashboard.render.com
echo    - Create new Web Service
echo    - Connect GitHub repository
echo    - Set Root Directory to 'server'
echo    - Set Build Command to 'npm install'
echo    - Set Start Command to 'npm start'
echo    - Set environment variables (GEMINI_API_KEY)
echo.
echo 2. Deploy frontend to Vercel:
echo    - Go to https://vercel.com/dashboard
echo    - Import GitHub repository
echo    - Set root directory to 'client'
echo    - Set environment variable (VITE_API_URL to your Render URL)
echo.
echo 📖 See DEPLOYMENT.md for detailed instructions
pause
