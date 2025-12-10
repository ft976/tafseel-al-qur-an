# Troubleshooting Guide for Quran App

## Common Issues and Solutions

### 1. Continuous Reload Issue

If the application keeps reloading continuously, this could be caused by:

#### a) Firebase Initialization Problems
- Ensure your Firebase configuration in `firebase/config.ts` is correct
- Check that all required Firebase environment variables are set

#### b) Background Effects Component
- The background effects component has been optimized to prevent unnecessary re-renders
- If issues persist, you can temporarily disable it by commenting out `<BackgroundEffects />` in `app/layout.tsx`

#### c) Missing Dependencies
- Make sure all dependencies are properly installed by running `npm install`

### 2. API Key Issues

#### Google AI (Gemini) API Key
- Replace `your_actual_google_ai_api_key_here` in the `.env` file with your actual API key
- Get your API key from [Google AI Studio](https://aistudio.google.com/)

### 3. Running the Application

#### Method 1: Using Batch Files (Recommended on Windows)
1. Double-click `install-deps.bat` to install dependencies
2. Double-click `start-dev.bat` to start the development server
3. Visit `http://localhost:3000` in your browser

#### Method 2: Manual Commands
1. Open Command Prompt or PowerShell
2. Navigate to the project directory:
   ```
   cd "c:\Users\Rehan Ahmad\Desktop\src"
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Visit `http://localhost:3000` in your browser

### 4. If the Server Still Won't Start

1. Clear npm cache:
   ```
   npm cache clean --force
   ```

2. Delete `node_modules` folder and `package-lock.json`:
   ```
   rm -rf node_modules
   rm package-lock.json
   ```

3. Reinstall dependencies:
   ```
   npm install
   ```

4. Try starting the server again:
   ```
   npm run dev
   ```

### 5. Browser Issues

If you're experiencing issues in the browser:

1. Try opening in an incognito/private window
2. Clear browser cache and cookies for localhost
3. Try a different browser
4. Check browser console for any error messages (F12 -> Console tab)

### 6. Port Conflicts

If port 3000 is already in use:

1. Stop any processes using port 3000
2. Or start the development server on a different port:
   ```
   npm run dev -- -p 3001
   ```

### 7. Firebase Issues

If you're having Firebase-related issues:

1. Check your internet connection
2. Verify Firebase configuration in `firebase/config.ts`
3. Ensure you have proper permissions for the Firebase project

### 8. Need More Help?

If none of these solutions work:

1. Check the terminal/console output for specific error messages
2. Look at the browser's developer console for client-side errors
3. Verify that Node.js and npm are properly installed on your system