import { useRef } from "react";
import { Upload, FileText, Image } from "lucide-react";

const FileUpload = ({
  file,
  onFileChange,
  dragActive,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  loading,
}) => {
  const fileInputRef = useRef(null);

  return (
    <div
      className={`w-full p-12 rounded-2xl transition-all duration-300 border-2 ${
        dragActive
          ? "border-blue-400 bg-blue-50/50 shadow-lg scale-[1.02]"
          : "border-dashed border-slate-300 bg-slate-50/50 hover:border-blue-300 hover:bg-blue-50/30"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className={`p-6 rounded-full transition-all duration-300 ${
          dragActive 
            ? "bg-blue-100 text-blue-600 scale-110" 
            : "bg-gradient-to-br from-blue-100 to-teal-100 text-blue-600"
        }`}>
          <Upload size={48} />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-slate-800">
            {dragActive ? "Drop it here!" : "Drop your content here"}
          </h3>
          <p className="text-slate-600">
            PDF, JPG, PNG, or any image file
          </p>
          <p className="text-sm text-slate-500">
            or click to browse your files
          </p>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={onFileChange}
          className="hidden"
        />
        <button
          type="button"
          className="px-8 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
          onClick={() => fileInputRef.current.click()}
        >
          📁 Choose File
        </button>
      </div>

      {file && (
        <div className="mt-6 p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg">
              {file.type.startsWith("image/") ? (
                <Image size={24} className="text-blue-600" />
              ) : (
                <FileText size={24} className="text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-slate-800">
                {file.name}
              </h4>
              <p className="text-xs text-slate-500">
                {(file.size / 1024).toFixed(1)} KB • Ready to analyze
              </p>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
