# GitHub Pages Setup Instructions

## ⚠️ IMPORTANT: Enable GitHub Pages First!

**The error you're seeing (`status: 404`) means GitHub Pages is NOT enabled yet.**

## 🔧 Step-by-Step to Fix the Error:

### Step 1: Enable GitHub Pages

1. **Go to your repository**: https://github.com/Mayada92/nurtured-hub

2. **Click on "Settings"** (top menu, right side of your repo)

3. **Click "Pages"** in the left sidebar

4. **Under "Build and deployment" → "Source"**:
   - Select: **"GitHub Actions"** (NOT "Deploy from a branch")
   - Click **"Save"** if there's a button

### Step 2: Manually Trigger the Workflow

5. **Go to "Actions" tab** (top menu)

6. **Click "Deploy to GitHub Pages"** in the left sidebar (under "Workflows")

7. **Click "Run workflow"** button (top right, blue button)

8. **Select branch**: `main`

9. **Click green "Run workflow"** button

10. **Wait 2-5 minutes** - Watch the workflow progress!

11. **Once you see ✅ green checkmark**, your site is live!

## 🚀 Your Site Will Be Available At:

**https://Mayada92.github.io/nurtured-hub/en**

(Note: It may take 2-5 minutes for the first deployment to complete)

## 📋 Check Deployment Status:

1. Go to **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Once it shows a green checkmark ✅, your site is live!

## 🔄 After First Deployment:

- Every time you push to `main` branch, the site will automatically redeploy
- You can also manually trigger deployment:
  1. Go to **Actions** tab
  2. Click **"Deploy to GitHub Pages"** workflow
  3. Click **"Run workflow"** → Select branch → **"Run workflow"**

## ⚠️ Important Notes:

- The base path is `/nurtured-hub` (matching your repo name)
- All URLs will be prefixed with this (e.g., `/nurtured-hub/en`, `/nurtured-hub/ar`)
- For local development, you can temporarily change `base: '/'` in `astro.config.mjs`

