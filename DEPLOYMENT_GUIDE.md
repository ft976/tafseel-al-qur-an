# 🚀 One-Click Vercel Deployment Guide

Your app is **100% Ready**. Follow these 3 simple steps:

## Step 1: Upload to GitHub
(You have probably already done this. If not:)
```bash
git push origin main
```

## Step 2: Import into Vercel
1. Go to **[vercel.com/new](https://vercel.com/new)**.
2. Click **Import** next to your `quran-app` repository.
3. Vercel will auto-detect everything.

## Step 3: Add Keys & Deploy
1. Click **Environment Variables**.
2. Add these two keys (Copy-Paste from `VERCEL_KEYS.txt`):
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
3. Click **Deploy**.

---

### 🎉 That's it!
Your app will be live in ~2 minutes.
Authorized users can access the **Dashboard** at `/dashboard`.
