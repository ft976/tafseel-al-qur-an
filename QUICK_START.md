# 🚀 Quick Start: Tafseel Al-Quran

Get your Quran app running in 5 minutes!

## 1️⃣ Authentication Setup (Clerk)

1. **Sign Up:** Go to [clerk.com](https://clerk.com) and create a free account.
2. **Create App:** Create a new application named "**Tafseel Al-Quran**".
3. **Get Keys:** Copy your **Publishable Key** and **Secret Key**.
4. **Configure:**
   - Go to your project folder: `c:\Users\Rehan Ahmad\Desktop\src`
   - Copy `.env.local.example` to `.env.local`:
     ```powershell
     Copy-Item .env.local.example .env.local
     ```
   - Open `.env.local` and paste your keys:
     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
     CLERK_SECRET_KEY=sk_test_...
     ```

## 2️⃣ Run the App

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**

## 3️⃣ Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Add Environment Variables (Clerk & Firebase keys)
   - Click **Deploy**

---

### 🔑 Key Features Ready
- **Authentication:** Clerk (Email, Google, etc.) - *Integrated*
- **Dashboard:** Protected user area - *Ready at /dashboard*
- **Database:** Firebase - *Configured*
- **AI:** Google Genkit - *Ready*
- **UI:** Tailwind + Radix UI - *Styled*

### 📁 Important Files
- `CLERK_SETUP.md`: Detailed auth instructions
- `DEPLOYMENT_GUIDE.md`: Full deployment guide
- `src/middleware.ts`: Auth protection rules
- `src/app/layout.tsx`: Main app wrapper
