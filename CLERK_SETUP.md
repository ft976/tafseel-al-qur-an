# 🔐 Clerk Authentication Setup Guide

## ✅ What's Already Done

Your app is now configured with **Clerk authentication** using the latest Next.js App Router approach:

- ✅ `@clerk/nextjs` installed
- ✅ `middleware.ts` created with `clerkMiddleware()`
- ✅ `<ClerkProvider>` wrapping your app in `app/layout.tsx`
- ✅ Environment variables template created (`.env.local.example`)

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create a Clerk Account

1. Go to [https://clerk.com](https://clerk.com)
2. Click "Start building for free"
3. Sign up with GitHub, Google, or email

### Step 2: Create a New Application

1. After signing in, click "Add application"
2. Name it: **"Tafseel Al-Quran"** (or your preferred name)
3. Choose your sign-in options:
   - ✅ Email
   - ✅ Google (recommended)
   - ✅ Phone (optional)
4. Click "Create application"

### Step 3: Get Your API Keys

1. You'll be redirected to the dashboard
2. Click on "API Keys" in the left sidebar
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`)

### Step 4: Add Keys to Your Project

1. **Create `.env.local` file** in your project root:
   ```bash
   # In your terminal
   cd c:\Users\Rehan Ahmad\Desktop\src
   Copy-Item .env.local.example .env.local
   ```

2. **Open `.env.local`** and replace the placeholders:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
   CLERK_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE
   ```

3. **Important:** Make sure `.env.local` is in your `.gitignore` (it already is!)

### Step 5: Test Authentication

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:** `http://localhost:3000`

3. **You should see your app!** Authentication is now ready.

---

## 🎨 Adding Sign In/Sign Up Buttons

To add authentication UI to your app, you can use Clerk's pre-built components:

### Option 1: Add to Header (Recommended)

Update your `components/header.tsx` or create a new auth component:

```typescript
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/10">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}
```

### Option 2: Create Dedicated Auth Pages

Create sign-in and sign-up pages:

**`app/sign-in/[[...sign-in]]/page.tsx`:**
```typescript
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn />
    </div>
  );
}
```

**`app/sign-up/[[...sign-up]]/page.tsx`:**
```typescript
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp />
    </div>
  );
}
```

---

## 🔒 Protecting Routes

### Protect Specific Pages

Use Clerk's `auth()` helper in Server Components:

```typescript
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function ProtectedPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  return <div>This page is protected!</div>;
}
```

### Protect API Routes

```typescript
// app/api/protected/route.ts
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Protected data', userId });
}
```

### Get Current User Data

```typescript
import { currentUser } from '@clerk/nextjs/server';

export default async function ProfilePage() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
```

---

## 🎨 Customizing Clerk UI

### Update Clerk Theme

In your Clerk Dashboard:

1. Go to "Customization" → "Theme"
2. Choose colors that match your app:
   - **Primary color:** `#D4AF37` (Golden - matches your logo)
   - **Background:** `#061222` (Dark blue - matches your app)

### Custom Styling

You can customize Clerk components with CSS:

```css
/* In your globals.css */
.cl-rootBox {
  /* Your custom styles */
}

.cl-card {
  background: rgba(6, 18, 34, 0.95);
  border: 1px solid rgba(212, 175, 55, 0.2);
}
```

---

## 🌐 Deploying to Vercel

### Important: Update Environment Variables

When deploying to Vercel, you need to add your Clerk keys:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add both keys:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Make sure to select all environments (Production, Preview, Development)
5. Redeploy your app

### Production Keys

For production, use **production keys** from Clerk:

1. In Clerk Dashboard, switch to "Production" mode
2. Get new keys (they'll start with `pk_live_...` and `sk_live_...`)
3. Add these to Vercel's environment variables

---

## 📱 Features You Get with Clerk

- ✅ **Email/Password Authentication**
- ✅ **Social Login** (Google, Facebook, etc.)
- ✅ **Phone Number Authentication**
- ✅ **Multi-Factor Authentication (MFA)**
- ✅ **User Profile Management**
- ✅ **Session Management**
- ✅ **Webhooks** for user events
- ✅ **Organizations & Teams** (optional)

---

## 🐛 Troubleshooting

### "Clerk: Missing publishable key"

- Make sure `.env.local` exists and has the correct keys
- Restart your dev server after adding environment variables
- Check that keys start with `pk_test_` and `sk_test_`

### Authentication not working on Vercel

- Verify environment variables are set in Vercel dashboard
- Make sure you're using the correct keys (test vs production)
- Check that your domain is added to Clerk's allowed domains

### Middleware not running

- Ensure `middleware.ts` is in the root of your project (not in `app/`)
- Check that the file is named exactly `middleware.ts`
- Verify the matcher configuration is correct

---

## 📚 Learn More

- **Clerk Docs:** [https://clerk.com/docs](https://clerk.com/docs)
- **Next.js Integration:** [https://clerk.com/docs/quickstarts/nextjs](https://clerk.com/docs/quickstarts/nextjs)
- **Clerk Dashboard:** [https://dashboard.clerk.com](https://dashboard.clerk.com)

---

## ✅ Verification Checklist

Before deploying, make sure:

- [ ] `.env.local` file exists with real Clerk keys
- [ ] `.env.local` is in `.gitignore`
- [ ] `middleware.ts` exists in project root
- [ ] `<ClerkProvider>` wraps your app in `layout.tsx`
- [ ] Authentication works locally (`npm run dev`)
- [ ] Environment variables are set in Vercel
- [ ] Production keys are used for production deployment

---

**You're all set! 🎉** Your app now has enterprise-grade authentication powered by Clerk.
