#!/usr/bin/env node
/**
 * Setup script for SocioPilot server environment variables
 * This script helps you configure the GEMINI_API_KEY environment variable
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 SocioPilot Server Setup');
console.log('==========================');
console.log('');
console.log('This script will help you set up the required environment variables.');
console.log('You can get your Gemini API key from: https://makersuite.google.com/app/apikey');
console.log('');

rl.question('Enter your Gemini API key: ', (apiKey) => {
  if (!apiKey || apiKey.trim() === '') {
    console.log('❌ No API key provided. Exiting...');
    rl.close();
    return;
  }

  const envContent = `# Google Gemini API Configuration
# Get your API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=${apiKey.trim()}

# Server Configuration
PORT=5000
`;

  const envPath = path.join(__dirname, '.env');
  
  try {
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Environment file created successfully!');
    console.log(`📁 File location: ${envPath}`);
    console.log('');
    console.log('You can now start the server with: npm start');
  } catch (error) {
    console.error('❌ Error creating .env file:', error.message);
    console.log('');
    console.log('Please create the .env file manually with the following content:');
    console.log('---');
    console.log(envContent);
    console.log('---');
  }
  
  rl.close();
});
