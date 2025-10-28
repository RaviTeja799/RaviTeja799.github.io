# GitHub Pages Deployment - Quick Start

## Quick Setup (3 Steps)

### 1. Update Configuration Files

**In `package.json`**, replace the homepage:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

**In `vite.config.ts`**, replace the base path:
```typescript
base: process.env.GITHUB_PAGES === "true" ? "/YOUR_REPO_NAME/" : "/"
```

### 2. Initialize Git & Push to GitHub

```bash
# If not already initialized
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 3. Deploy

**Windows (PowerShell):**
```powershell
$env:GITHUB_PAGES="true"; npm run deploy
```

**Mac/Linux:**
```bash
GITHUB_PAGES=true npm run deploy
```

**Windows (CMD):**
```cmd
set GITHUB_PAGES=true && npm run deploy
```

## Configure GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: `gh-pages` branch, `/ (root)` folder
4. Save

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Update Your Site

```bash
git add .
git commit -m "Update site"
git push
GITHUB_PAGES=true npm run deploy
```

---

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
