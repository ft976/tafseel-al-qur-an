const { spawn } = require('child_process');

// Try to run Next.js development server
const nextDev = spawn('npx', ['next', 'dev'], { 
  stdio: 'inherit',
  shell: true
});

nextDev.on('error', (error) => {
  console.error('Failed to start Next.js development server:', error);
});

nextDev.on('close', (code) => {
  console.log(`Next.js development server exited with code ${code}`);
});