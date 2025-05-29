import react from "react";

const EditorButtons = ({ handleLanguageChange,
  language,
  setActiveFile,
  activeFile,
  files,
  isLoading,
  handleSubmit,
  theme,
  toggleTheme,
  handleCodeChange,
  statusMessage, }) =>{
    return (
        <div className="flex flex-col h-full w-full p-4 bg-gray-100 overflow-hidden">
      {/* Controls */}
      <div className="flex items-center gap-2 mb-4">
        <select
          className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleLanguageChange}
          value={language}
        >
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="javascript">JavaScript</option>
        </select>

        <select
          className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setActiveFile(e.target.value)}
          value={activeFile}
        >
          {Object.keys(files).map((fileName) => (
            <option key={fileName} value={fileName}>
              {fileName}
            </option>
          ))}
        </select>

        <button
          className={`px-3 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Running..." : "Run Code"}
        </button>

        <button
          className={`px-3 py-2 text-white rounded-md focus:outline-none focus:ring-2 ${
            theme.includes("light")
              ? "bg-gray-700 hover:bg-gray-800 focus:ring-gray-500"
              : "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400"
          }`}
          onClick={toggleTheme}
        >
          {theme.includes("light") ? "Dark Theme" : "Light Theme"}
        </button>
      </div>
    </div>
    )
}

export default EditorButtons;