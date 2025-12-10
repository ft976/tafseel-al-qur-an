# Quran App - Tafseel-al-Quran

An Islamic educational platform for exploring the Quran with AI-powered explanations, audio recitations, and interactive features.

## Features

- Browse and search the entire Quran by Surah and Ayah
- AI-powered Hinglish explanations of verses
- Audio recitations with translation playback
- Interactive Islamic calendar
- Duas (supplications) and their explanations
- Islamic concepts and pillars of Islam
- Prophets of Islam and their stories
- Names of Allah with meanings
- Zakat calculator
- Quiz section for testing knowledge

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)
- A Google AI (Gemini) API key for AI features

## Setup Instructions

### 1. Install Dependencies

Double-click the `install-deps.bat` file or run in terminal:

```bash
npm install
```

### 2. Configure Environment Variables

1. Open the `.env` file
2. Replace `your_actual_google_ai_api_key_here` with your actual Google AI API key
3. Save the file

To get a Google AI API key:
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Create an account or sign in
3. Generate an API key
4. Copy and paste it into the `.env` file

### 3. Run the Development Server

Double-click the `start-dev.bat` file or run in terminal:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/ai` - AI flows and Genkit configuration
- `/app` - Next.js app router pages
- `/components` - React components
- `/firebase` - Firebase configuration and utilities
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and data
- `/public` - Static assets

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Firebase (Authentication and Firestore)
- Genkit (Google AI integration)
- Radix UI Components

## Troubleshooting

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues and solutions.

## Contributing

This is a private project. Please contact the project owner for contribution guidelines.

## License

This project is proprietary and confidential. All rights reserved.