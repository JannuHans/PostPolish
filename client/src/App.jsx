import { useState } from "react";
import axios from "axios";
import FileUpload from "./components/FileUpload";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import ResultCard from "./components/ResultCard";

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [analysisLevel, setAnalysisLevel] = useState(null);
  const [copiedContent, setCopiedContent] = useState(false);
  const [copiedInsights, setCopiedInsights] = useState(false);
  const [copiedSuggestions, setCopiedSuggestions] = useState(false);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];
    if (!allowedTypes.includes(f.type)) {
      setError("File type not supported. Please upload PDF, JPG, or PNG.");
      setFile(null);
      return;
    }
    setError("");
    setFile(f);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a PDF, JPG, or PNG file.");
      return;
    }
    setError("");
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const { data } = await axios.post(`${API_URL}/api/analyze`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(data);
      setAnalysisLevel("medium");
    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const copyWithFeedback = (text, setFlag, ms = 1500) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setFlag(true);
    setTimeout(() => setFlag(false), ms);
  };

  const handleCopyContent = () =>
    copyWithFeedback(result?.extractedText, setCopiedContent, 1200);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 text-slate-800 transition-all duration-300">
      {/* Modern animated background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1)_0%,transparent_50%),radial-gradient(circle_at_40%_60%,rgba(139,92,246,0.1)_0%,transparent_50%)] bg-[length:1200px_1200px] animate-pulse pointer-events-none"></div>
      
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/20 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-emerald-200/20 rounded-lg rotate-12 animate-pulse delay-500"></div>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
              PostPolish
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm text-slate-600 font-medium">AI-Powered Content Enhancement</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-12">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-teal-600 bg-clip-text text-transparent leading-tight">
              Polish Your Posts
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-600">
              AI-Powered Social Media Enhancement
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Transform your social media content with intelligent analysis, engagement optimization, 
              and actionable insights. Upload any post and watch it shine.
            </p>
          </div>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">✨ AI Analysis</span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">📈 Engagement Boost</span>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">🎯 Smart Suggestions</span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">⚡ Instant Results</span>
          </div>
        </section>

        {/* Upload Section */}
        <section className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-800">Upload Your Content</h2>
            <p className="text-slate-600">Drop your PDF, image, or document to get started</p>
          </div>
          
          <FileUpload
            file={file}
            onFileChange={handleFileChange}
            dragActive={dragActive}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            loading={loading}
          />

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onSubmit}
              disabled={loading || !file}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${
                loading || !file
                  ? "bg-slate-300 cursor-not-allowed text-slate-500"
                  : "bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white hover:scale-105 hover:shadow-lg shadow-md"
              }`}
            >
              {loading ? (
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing Content...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>✨ Polish My Post</span>
                </div>
              )}
            </button>

            <button
              onClick={() => {
                setResult(null);
                setFile(null);
                setAnalysisLevel("medium");
                setError("");
                setCopiedContent(false);
                setCopiedInsights(false);
                setCopiedSuggestions(false);
              }}
              className="px-8 py-4 rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-300 font-semibold text-lg"
            >
              🔄 Start Fresh
            </button>
          </div>
        </section>

        {loading && <Loading />}

        <ErrorMessage error={error} />

        {/* Display analysis */}
        {result && (
          <ResultCard
            result={result}
            analysisLevel={analysisLevel}
            setAnalysisLevel={setAnalysisLevel}
            onCopyContent={handleCopyContent}
            copiedContent={copiedContent}
            copiedInsights={copiedInsights}
            copiedSuggestions={copiedSuggestions}
            setCopiedInsights={setCopiedInsights}
            setCopiedSuggestions={setCopiedSuggestions}
          />
        )}
      </main>
      
      <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-slate-200/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-slate-800">PostPolish</span>
            </div>
            <p className="text-slate-600">
              Made by{" "}
              <span className="font-semibold text-slate-800"><a href="https://www.linkedin.com/in/jannu-hans-16181a2a1/" target="_blank" rel="noopener noreferrer">Jannu Hans</a></span>
            </p>
            <p className="text-sm text-slate-500">
              Transform your social media presence with AI-powered insights
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
