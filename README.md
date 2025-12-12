# Quran App

A modern, beautiful Quran application built with Next.js, TypeScript, and Firebase.

## 🚀 Features

- Built with Next.js (latest version)
- TypeScript for type safety
- **Clerk Authentication** - Secure user authentication with social login
- Firebase integration for data storage
- AI-powered features using Google Genkit
- Beautiful UI with Radix UI components
- Smooth animations with Framer Motion
- Responsive design with Tailwind CSS
- Complete Quran with Tafsir (detailed explanations)
- Audio recitations and translations
- Islamic resources (Duas, Namaz, Hadith, etc.)

## 📦 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animations:** Framer Motion
- **Database:** Firebase
- **AI:** Google Genkit

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
# Clerk Authentication (see CLERK_SETUP.md for details)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here

# Add your Firebase config
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Add your Google AI API key
GOOGLE_GENAI_API_KEY=your_google_ai_api_key
```

**📖 For detailed Clerk setup instructions, see [CLERK_SETUP.md](./CLERK_SETUP.md)**

## 🏃‍♂️ Running Locally

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🌐 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Go to [Vercel](https://vercel.com)**
   - Sign up or log in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables:**
   - In the Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add all your `.env` variables (Firebase config, API keys, etc.)

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your app automatically
   - You'll get a live URL like `https://your-app.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## 🔐 Environment Variables

Make sure to add these environment variables in your Vercel project settings:

**Clerk Authentication:**
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

**Firebase:**
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

**AI:**
- `GOOGLE_GENAI_API_KEY`

## 📝 Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── firebase/         # Firebase configuration
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── ai/               # AI-related code
├── next.config.ts    # Next.js configuration
├── package.json      # Dependencies
└── tsconfig.json     # TypeScript configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com)
