# GitHub Pages Deployment Guide

This guide explains how to deploy your portfolio to GitHub Pages.

## Prerequisites

- Git installed on your system
- A GitHub account
- Node.js and npm installed

## Initial Setup

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio`, `my-portfolio`, or `USERNAME.github.io`)
4. Choose "Public" visibility
5. Do NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Configure Your Repository Name

Before deploying, you need to update the repository name in two files:

#### Update `package.json`

Replace `USERNAME` and `REPOSITORY_NAME` in the homepage field:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME"
```

Example:

```json
"homepage": "https://johndoe.github.io/portfolio"
```

**Special Case:** If your repository is named `USERNAME.github.io`, use:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io"
```

#### Update `vite.config.ts`

Replace `REPOSITORY_NAME` in the base path:

```typescript
base: process.env.GITHUB_PAGES === "true" ? "/YOUR_REPOSITORY_NAME/" : "/";
```

Example:

```typescript
base: process.env.GITHUB_PAGES === "true" ? "/portfolio/" : "/";
```

**Special Case:** If your repository is named `USERNAME.github.io`, use:

```typescript
base: process.env.GITHUB_PAGES === "true" ? "/" : "/";
```

### 3. Initialize Git and Connect to GitHub

If you haven't already initialized git in your project:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If you already have a git repository:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

## Deployment

### Deploy to GitHub Pages

Once your repository is set up and configured, deploy with:

```bash
# Set environment variable and deploy
GITHUB_PAGES=true npm run deploy
```

On Windows (PowerShell):

```powershell
$env:GITHUB_PAGES="true"; npm run deploy
```

On Windows (CMD):

```cmd
set GITHUB_PAGES=true && npm run deploy
```

This command will:

1. Build your project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Push the `gh-pages` branch to GitHub

### Configure GitHub Pages Settings

After your first deployment:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click "Save"

GitHub will now build and deploy your site. This may take a few minutes.

### Access Your Deployed Site

Your site will be available at:

- `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

Or if using `USERNAME.github.io` repository:

- `https://YOUR_USERNAME.github.io/`

## Updating Your Site

To update your deployed site after making changes:

```bash
# 1. Commit your changes
git add .
git commit -m "Your commit message"
git push

# 2. Deploy to GitHub Pages
GITHUB_PAGES=true npm run deploy
```

## Troubleshooting

### Assets Not Loading

If images, fonts, or other assets aren't loading:

1. Verify the `base` path in `vite.config.ts` matches your repository name
2. Ensure the `homepage` in `package.json` is correct
3. Check that asset paths in your code are relative (not absolute)

### 404 Errors on Page Refresh

GitHub Pages doesn't support client-side routing by default. To fix this:

1. Create a `404.html` file in the `client/public` directory
2. Copy the contents of `index.html` to `404.html`
3. Redeploy

### Site Not Updating

If your site isn't updating after deployment:

1. Clear your browser cache
2. Wait a few minutes for GitHub's CDN to update
3. Check the Actions tab in your repository for build status
4. Verify the `gh-pages` branch was updated

### Build Errors

If the build fails:

```bash
# Test the build locally first
npm run build

# Check for TypeScript errors
npm run check

# Fix any errors before deploying
```

## Local Testing

To test your site with the GitHub Pages base path locally:

```bash
# Build with GitHub Pages configuration
GITHUB_PAGES=true npm run build

# Preview the built site
npm run preview
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `client/public/` with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. In GitHub repository settings > Pages, add your custom domain
4. Update `homepage` in `package.json` to your custom domain

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages Package](https://github.com/tschaub/gh-pages)

## Support

If you encounter issues:

1. Check the GitHub Actions logs in your repository
2. Review the browser console for errors
3. Verify all configuration steps were completed correctly
4. Ensure your repository is public (GitHub Pages requires public repos for free tier)
