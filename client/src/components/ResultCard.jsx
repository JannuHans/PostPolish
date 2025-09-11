import { FileText, Sparkles, Copy, BarChart3, CheckCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";

const ResultCard = ({ result, onCopyContent, copiedContent, copiedInsights, copiedSuggestions, setCopiedInsights, setCopiedSuggestions }) => {
  const copyWithFeedback = (text, setFlag, ms = 1500) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setFlag(true);
    setTimeout(() => setFlag(false), ms);
  };

  const handleCopyInsights = () => copyWithFeedback(result?.postInsights, setCopiedInsights, 1200);
  const handleCopySuggestions = () => copyWithFeedback(result?.postSuggestions, setCopiedSuggestions, 1200);

  return (
    <div className="space-y-8">
      {/* Extracted Text */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg">
              <FileText size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Extracted Content</h3>
          </div>
          <button
            onClick={onCopyContent}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-xl hover:from-blue-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
          >
            {copiedContent ? <CheckCircle size={16} /> : <Copy size={16} />}
            {copiedContent ? "Copied!" : "Copy Text"}
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">{result.extractedText}</p>
        </div>
      </div>

      {/* AI Insights and Suggestions Grid */}
      {(result.postInsights || result.postSuggestions) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Post Insights */}
          {result.postInsights && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg">
                    <Sparkles size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">AI Insights</h3>
                </div>
                <button
                  onClick={handleCopyInsights}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
                >
                  {copiedInsights ? <CheckCircle size={16} /> : <Copy size={16} />}
                  {copiedInsights ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {result.postInsights}
                </p>
              </div>
            </div>
          )}

          {/* Post Suggestions */}
          {result.postSuggestions && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg">
                    <Sparkles size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Improvement Suggestions</h3>
                </div>
                <button
                  onClick={handleCopySuggestions}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
                >
                  {copiedSuggestions ? <CheckCircle size={16} /> : <Copy size={16} />}
                  {copiedSuggestions ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 overflow-x-auto">
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p
                        className="text-slate-700 whitespace-pre-wrap break-words leading-relaxed mb-3"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        className="text-slate-700 ml-4 list-disc leading-relaxed mb-2"
                        {...props}
                      />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong className="font-bold text-slate-800" {...props} />
                    ),
                  }}
                >
                  {result.postSuggestions}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Engagement Metrics */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
            <BarChart3 size={24} className="text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">Engagement Analytics</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
            <div className="text-2xl font-bold text-blue-700 mb-1">
              {result?.analysis?.metrics?.hashtagCount ?? 0}
            </div>
            <div className="text-sm text-blue-600 font-medium">Hashtags</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl border border-teal-200">
            <div className="text-2xl font-bold text-teal-700 mb-1">
              {result?.analysis?.metrics?.lengthCount ?? 0}
            </div>
            <div className="text-sm text-teal-600 font-medium">Characters</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200">
            <div className="text-2xl font-bold text-emerald-700 mb-1">
              {result?.analysis?.metrics?.mentionCount ?? 0}
            </div>
            <div className="text-sm text-emerald-600 font-medium">Mentions</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
            <div className="text-2xl font-bold text-purple-700 mb-1">
              {result?.analysis?.metrics?.linkCount ?? 0}
            </div>
            <div className="text-sm text-purple-600 font-medium">Links</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600">Sentiment Score</span>
            <span className="text-lg font-bold text-slate-800">
              {((result?.analysis?.metrics?.sentimentScore ?? 0) + 5).toFixed(1)}/10
            </span>
          </div>
          <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 transition-all duration-1000"
              style={{
                width: `${Math.max(
                  0,
                  Math.min(
                    100,
                    ((result?.analysis?.metrics?.sentimentScore ?? 0) + 5) * 10
                  )
                )}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span>Negative</span>
            <span>Neutral</span>
            <span>Positive</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;

