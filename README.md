# 📱 Postpolish - AI-Powered Social Media Content Analyzer

<div align="center">

![PostPolish Logo](https://img.shields.io/badge/PostPolish-AI%20Content%20Analyzer-blue?style=for-the-badge&logo=robot)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![AI](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=for-the-badge&logo=google)

*Transform your social media content with AI-powered insights and optimization suggestions*

[🚀 Live Demo](https://post-polish-beta.vercel.app/) • [📖 Features](#-features) • [🛠️ Installation](#️-installation) • [🚀 Deployment](#-deployment) • [📚 Documentation](#-documentation)

</div>

---

## 🌟 Overview

PostPolish is a cutting-edge web application that revolutionizes social media content creation by leveraging artificial intelligence to analyze, optimize, and enhance your posts. Whether you're a content creator, digital marketer, or social media manager, PostPolish provides actionable insights to maximize engagement and reach.

### 🎯 What Makes PostPolish Special?

- **🤖 AI-Powered Analysis**: Uses Google's Gemini AI to provide intelligent content analysis
- **📄 Multi-Format Support**: Handles PDFs, images (PNG, JPG), and text extraction
- **📊 Engagement Metrics**: Real-time analysis of hashtags, mentions, links, and sentiment
- **💡 Actionable Insights**: Get specific, implementable suggestions to improve your content
- **🎨 Modern UI**: Beautiful, responsive design with dark theme and smooth animations
- **⚡ Real-time Processing**: Fast text extraction and AI analysis

---

## ✨ Features

### 🔍 **Content Analysis**
- **Text Extraction**: Advanced OCR for images and PDF parsing for documents
- **Sentiment Analysis**: Understand the emotional tone of your content
- **Engagement Metrics**: Track hashtags, mentions, links, and content length
- **Visual Analytics**: Interactive charts and progress indicators

### 🤖 **AI-Powered Insights**
- **Post Strengths**: AI identifies what makes your content compelling
- **Improvement Suggestions**: 3-5 specific, actionable recommendations
- **Engagement Optimization**: Tips to boost likes, shares, and comments
- **Content Strategy**: Guidance on tone, formatting, and call-to-actions

### 🎨 **User Experience**
- **Drag & Drop Upload**: Intuitive file handling with visual feedback
- **Real-time Processing**: Live progress updates during analysis
- **Copy & Share**: Easy content copying with one-click functionality
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 🔧 **Technical Features**
- **RESTful API**: Clean, well-documented backend architecture
- **File Management**: Automatic cleanup and secure file handling
- **Error Handling**: Comprehensive error management and user feedback
- **CORS Support**: Cross-origin resource sharing for seamless integration

---

## 🏗️ Architecture

### **Frontend (React + Vite)**
```
client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── FileUpload.jsx   # Drag & drop file upload
│   │   ├── ResultCard.jsx   # Analysis results display
│   │   ├── Loading.jsx      # Loading states
│   │   └── ErrorMessage.jsx # Error handling
│   ├── App.jsx             # Main application logic
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

### **Backend (Node.js + Express)**
```
server/
├── index.js               # Main server file
├── package.json           # Dependencies and scripts
├── uploads/               # Temporary file storage
└── eng.traineddata        # Tesseract OCR model
```

---

## 🛠️ Tech Stack

### **Frontend Technologies**
- **React 19.1.1** - Modern UI framework with hooks and functional components
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Axios** - Promise-based HTTP client for API requests
- **Lucide React** - Beautiful, customizable SVG icons
- **React Markdown** - Markdown rendering for AI-generated content
- **React Dropzone** - Drag and drop file upload functionality

### **Backend Technologies**
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework
- **Multer** - Middleware for handling multipart/form-data
- **Tesseract.js** - OCR (Optical Character Recognition) for image text extraction
- **PDF-Parse** - PDF text extraction library
- **Sentiment** - Sentiment analysis for content evaluation
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

### **AI & Machine Learning**
- **Google Gemini API** - Advanced language model for content analysis
- **Tesseract OCR** - Open-source OCR engine for text recognition
- **Sentiment Analysis** - Natural language processing for emotional tone detection

### **Deployment & Infrastructure**
- **Vercel** - Frontend hosting and deployment
- **Render** - Backend hosting and API deployment
- **GitHub** - Version control and CI/CD integration

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Git** (for cloning the repository)
- **Google Gemini API Key** (get one from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/PostPolish.git
cd PostPolish
```

### Step 2: Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
"GEMINI_API_KEY=your_gemini_api_key_here"
"PORT=5000" 

# Start the server
npm start
```

### Step 3: Frontend Setup
```bash
# Navigate to client directory (in a new terminal)
cd client

# Install dependencies
npm install

# Create environment file
"VITE_API_URL=http://localhost:5000"

# Start the development server
npm run dev
```

### Step 4: Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

---

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
NODE_ENV=development
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

### API Configuration
The application uses Google's Gemini API for AI-powered content analysis. Make sure to:
1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Enable the Generative Language API in your Google Cloud Console
3. Set appropriate API restrictions for security

---

## 📖 Usage Guide

### 1. **Upload Content**
- Drag and drop a PDF or image file onto the upload area
- Or click "Browse" to select a file from your device
- Supported formats: PDF, PNG, JPG, JPEG

### 2. **Analyze Content**
- Click the "Analyze" button to start processing
- Watch the real-time progress as the AI extracts text and generates insights
- The process typically takes 10-30 seconds depending on content length

### 3. **Review Results**
- **Extracted Text**: View the text extracted from your file
- **Post Insights**: Read AI-generated analysis of your content's strengths
- **Improvement Suggestions**: Get specific recommendations to boost engagement
- **Engagement Metrics**: See hashtag count, mentions, links, and sentiment score

### 4. **Take Action**
- Copy any section using the copy buttons
- Implement the suggested improvements
- Use the insights to refine your content strategy

---

## 🚀 Deployment

### Quick Deployment
We've included automated deployment scripts for easy setup:

#### Deploy to Vercel (Frontend)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy frontend
cd client
vercel --prod
```

#### Deploy to Render (Backend)
```bash
# Install Render CLI
npm install -g @render/cli

# Deploy backend
cd server
render services create --name PostPolish-backend
```

### Manual Deployment
For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

---

## 🔌 API Reference

### Endpoints

#### `POST /api/analyze`
Analyzes uploaded content and returns AI-generated insights.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: File upload (PDF, PNG, JPG)

**Response:**
```json
{
  "extractedText": "string",
  "postInsights": "string",
  "postSuggestions": "string",
  "analysis": {
    "metrics": {
      "hashtagCount": number,
      "lengthCount": number,
      "mentionCount": number,
      "linkCount": number,
      "sentimentScore": number
    }
  }
}
```

### Error Handling
- **400**: Invalid file type or no file uploaded
- **500**: Server error or AI processing failure

---

## 🧪 Testing

### Run Tests
```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

### Manual Testing
1. Upload various file types (PDF, PNG, JPG)
2. Test with different content lengths
3. Verify AI insights are generated
4. Check error handling with invalid files

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Code Style
- Use ESLint for JavaScript/React code
- Follow the existing code structure
- Add comments for complex logic
- Write tests for new features

### Reporting Issues
- Use GitHub Issues to report bugs
- Include steps to reproduce
- Provide system information
- Add screenshots if applicable

---

## 📊 Performance

### Optimization Features
- **Lazy Loading**: Components load only when needed
- **Image Optimization**: Automatic image compression and resizing
- **Code Splitting**: Reduced initial bundle size
- **Caching**: Intelligent caching for better performance
- **CDN**: Global content delivery for faster loading

### Benchmarks
- **Text Extraction**: 2-5 seconds for typical documents
- **AI Analysis**: 5-15 seconds depending on content length
- **Page Load**: < 2 seconds on average connection
- **File Upload**: Supports files up to 10MB

---

## 🔒 Security

### Security Features
- **Input Validation**: All file uploads are validated
- **File Sanitization**: Automatic cleanup of uploaded files
- **CORS Protection**: Configured for secure cross-origin requests
- **Environment Variables**: Sensitive data stored securely
- **HTTPS**: Encrypted communication in production

### Best Practices
- Never commit API keys to version control
- Use environment variables for sensitive data
- Regularly update dependencies
- Monitor for security vulnerabilities

---

## 📈 Roadmap

### Upcoming Features
- [ ] **Multi-language Support**: Analysis in multiple languages
- [ ] **Batch Processing**: Analyze multiple files at once
- [ ] **Content Templates**: Pre-built templates for different platforms
- [ ] **Analytics Dashboard**: Track performance over time
- [ ] **Team Collaboration**: Share insights with team members
- [ ] **API Rate Limiting**: Advanced rate limiting for production
- [ ] **Content Scheduling**: Integration with social media schedulers

### Version History
- **v1.0.0** - Initial release with basic AI analysis
- **v1.1.0** - Added sentiment analysis and engagement metrics
- **v1.2.0** - Improved UI/UX and error handling
- **v2.0.0** - Complete rewrite with React 19 and modern architecture

---

## 🐛 Troubleshooting

### Common Issues

#### "API Key not found" Error
- Verify your `GEMINI_API_KEY` is set correctly
- Check that the API key has proper permissions
- Ensure the Generative Language API is enabled

#### File Upload Issues
- Check file size (max 10MB)
- Verify file format (PDF, PNG, JPG only)
- Ensure stable internet connection

#### Slow Performance
- Check your internet connection
- Verify API key quotas haven't been exceeded
- Try with smaller files first

### Getting Help
- Check the [Issues](https://github.com/your-username/PostPolish/issues) page
- Join our [Discord Community](https://discord.gg/PostPolish)
- Email support: support@PostPolish.com

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google AI** for providing the Gemini API
- **Tesseract.js** for OCR capabilities
- **React Team** for the amazing framework
- **Vercel & Render** for hosting services
- **Open Source Community** for various libraries and tools

---

## 📞 Contact

**Jannu Hans**
- LinkedIn: [Jannu Hans](https://www.linkedin.com/in/jannu-hans-16181a2a1/)

