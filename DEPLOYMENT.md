# Deployment Guide

Your Next.js portfolio site is ready for deployment! Here are the different options:

## 🚀 Quick Deploy Options

### 1. **Vercel (Recommended)**
- **Best for**: Next.js applications
- **Free tier**: Yes
- **Setup**: 
  1. Go to [vercel.com](https://vercel.com)
  2. Connect your GitHub repository
  3. Vercel will automatically detect Next.js and deploy
  4. Your site will be live at `https://your-project.vercel.app`

### 2. **Netlify**
- **Best for**: Static sites and portfolios
- **Free tier**: Yes
- **Setup**:
  1. Go to [netlify.com](https://netlify.com)
  2. Connect your GitHub repository
  3. Build command: `pnpm build`
  4. Publish directory: `.next`
  5. Your site will be live at `https://your-project.netlify.app`

### 3. **GitHub Pages**
- **Best for**: Free hosting
- **Setup**:
  1. Push your code to GitHub
  2. Go to repository Settings > Pages
  3. Select "GitHub Actions" as source
  4. The workflow will automatically deploy on push

## 📁 Manual Deployment

### For Traditional Hosting (cPanel, etc.)

1. **Build locally**:
   ```bash
   pnpm build
   ```

2. **Upload files**:
   - Upload the entire `.next` folder
   - Upload `package.json`
   - Upload `pnpm-lock.yaml`

3. **On your server**:
   ```bash
   pnpm install --prod
   pnpm start
   ```

## 🔧 Environment Variables

If you need to add environment variables later:
- **Vercel**: Add in project settings
- **Netlify**: Add in site settings
- **Traditional**: Create `.env.local` file

## 📊 Performance

Your site is optimized:
- **Total size**: 1.11 MB
- **First Load JS**: 1.21 MB
- **Build time**: ~30 seconds

## 🎯 Next Steps

1. Choose your preferred hosting platform
2. Follow the setup instructions above
3. Your portfolio will be live and accessible worldwide!

## 🆘 Troubleshooting

If you encounter issues:
1. Make sure Node.js 18+ is installed
2. Run `pnpm install` before building
3. Check that all dependencies are installed
4. Verify the build completes successfully with `pnpm build` 