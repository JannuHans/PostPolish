# PostPolish Deployment Guide

This guide will help you deploy PostPolish with the backend on Render and frontend on Vercel.

## Prerequisites

- GitHub account
- Render account (free tier available)
- Vercel account (free tier available)
- Gemini API key from Google AI Studio

## Backend Deployment (Render)

### Step 1: Prepare Backend for Deployment

1. **Environment Variables Setup**
   - The backend uses `GEMINI_API_KEY` environment variable
   - Make sure to set this in Render dashboard

2. **File Structure**
   ```
   SocioPilot/
   ├── server/
   │   ├── index.js
   │   ├── package.json
   │   └── uploads/ (will be created automatically)
   └── render.yaml
   ```

### Step 2: Deploy to Render

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Create Render Service**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository: `JannuHans/PostPolish`

3. **Configure Render Service**
   - **Name**: `postpolish-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Plan**: Free

4. **Set Environment Variables**
   - In Render dashboard, go to Environment tab
   - Add: `GEMINI_API_KEY` = `your_actual_gemini_api_key`
   - Add: `NODE_ENV` = `production`

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note the service URL (e.g., `https://postpolish-backend.onrender.com`)

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend for Deployment

1. **Update API URL**
   - The frontend uses `VITE_API_URL` environment variable
   - Set this to your Render backend URL

2. **File Structure**
   ```
   SocioPilot/
   ├── client/
   │   ├── src/
   │   ├── package.json
   │   ├── vercel.json
   │   └── vite.config.js
   ```

### Step 2: Deploy to Vercel

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository: `JannuHans/PostPolish`

3. **Configure Vercel Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Set Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-render-backend-url.onrender.com`

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Note the frontend URL (e.g., `https://postpolish.vercel.app`)

## Alternative: Deploy via CLI

### Backend (Render CLI)
```bash
# Install Render CLI
npm install -g @render/cli

# Login to Render
render login

# Deploy service
render services create --name postpolish-backend --type web --env node --build-command "cd server && npm install" --start-command "cd server && npm start"
```

### Frontend (Vercel CLI)
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to client directory
cd client

# Deploy
vercel --prod
```

## Environment Variables Summary

### Backend (Render)
- `GEMINI_API_KEY`: Your Gemini API key from Google AI Studio
- `NODE_ENV`: production
- `PORT`: 5000 (automatically set by Render)

### Frontend (Vercel)
- `VITE_API_URL`: Your Render backend URL (e.g., https://postpolish-backend.onrender.com)

## Testing Deployment

1. **Test Backend**
   - Visit: `https://your-backend-url.onrender.com`
   - Should see server running message

2. **Test Frontend**
   - Visit: `https://your-frontend-url.vercel.app`
   - Upload a test file to verify full functionality

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Backend already has CORS enabled
   - If issues persist, check Render logs

2. **API Key Not Working**
   - Verify `GEMINI_API_KEY` is set correctly in Render
   - Check Render logs for authentication errors

3. **File Upload Issues**
   - Render free tier has file system limitations
   - Files are automatically deleted after processing

4. **Build Failures**
   - Check build logs in Render/Vercel dashboard
   - Ensure all dependencies are in package.json

### Monitoring

- **Render**: Check service logs in dashboard
- **Vercel**: Check function logs in dashboard
- **GitHub**: Monitor repository for updates

## Updating Deployment

1. **Push changes to GitHub**
2. **Render**: Automatically redeploys on push to main branch
3. **Vercel**: Automatically redeploys on push to main branch

## Cost Considerations

- **Render Free Tier**: 750 hours/month, spins down after 15 minutes of inactivity
- **Vercel Free Tier**: Unlimited static hosting, 100GB bandwidth
- **Gemini API**: Pay-per-use, very affordable for small projects

## Security Notes

- Never commit API keys to GitHub
- Use environment variables for all sensitive data
- Enable HTTPS (automatic on both platforms)
- Consider rate limiting for production use
