// import React, { useState, useEffect } from "react";
// import Editor from "@monaco-editor/react";
// import { loader } from "@monaco-editor/react";

// // Function to return default files based on the language
// const getDefaultFiles = (lang) => {
//   if (lang === "c") {
//     return {
//       "main.c": `#include "custom.h"

// int main() {
//     sayHello();
//     return 0;
// }`,
//       "custom.h": `#ifndef CUSTOM_H
// #define CUSTOM_H

// void sayHello();

// #endif`,
//       "functions.c": `#include <stdio.h>
// #include "custom.h"

// void sayHello() {
//     printf("Hello from function file!\\n");
// }`
//     };
//   }
//   if (lang === "cpp") {
//     return {
//       "main.cpp": `#include <iostream>

// int main() {
//     std::cout << "Hello, C++ World!" << std::endl;
//     return 0;
// }`
//     };
//   }
//   if (lang === "javascript") {
//     return {
//       "main.js": `console.log("Hello, JavaScript World!");`
//     };
//   }
//   return {};
// };

// const getExtension = (lang) => {
//   switch (lang) {
//     case "c":
//       return ".c";
//     case "cpp":
//       return ".cpp";
//     case "javascript":
//       return ".js";
//     default:
//       return ".txt";
//   }
// };

// function CodeEditor() {
//   const [language, setLanguage] = useState("c");
//   const [files, setFiles] = useState(getDefaultFiles("c"));
//   const [activeFile, setActiveFile] = useState("main.c");
//   const [isLoading, setIsLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState("");
//   const [theme, setTheme] = useState("vs-dark"); // Default theme
//   const [output, setOutput] = useState({
//     compilationResult: "",
//     executionOutput: "",
//     errorMessage: ""
//   });

//   // Configure Monaco editor themes
//   useEffect(() => {
//     // Define and register the "one-dark" theme
//     loader.init().then(monaco => {
//       monaco.editor.defineTheme('one-dark', {
//         base: 'vs-dark',
//         inherit: true,
//         rules: [
//           { token: 'comment', foreground: '5C6370', fontStyle: 'italic' },
//           { token: 'keyword', foreground: 'C678DD' },
//           { token: 'function', foreground: '61AFEF' },
//           { token: 'string', foreground: '98C379' },
//           { token: 'number', foreground: 'D19A66' },
//           { token: 'type', foreground: 'E5C07B' },
//           { token: 'operator', foreground: '56B6C2' }
//         ],
//         colors: {
//           'editor.background': '#282C34',
//           'editor.foreground': '#ABB2BF',
//           'editor.lineHighlightBackground': '#2C313C',
//           'editorCursor.foreground': '#528BFF',
//           'editorWhitespace.foreground': '#3B4048',
//           'editorLineNumber.foreground': '#495162',
//           'editor.selectionBackground': '#3E4451',
//           'editor.findMatchBackground': '#42557B',
//           'editor.findMatchHighlightBackground': '#314365',
//         }
//       });

//       // Define and register the "one-light" theme
//       monaco.editor.defineTheme('one-light', {
//         base: 'vs',
//         inherit: true,
//         rules: [
//           { token: 'comment', foreground: '9E9E9E', fontStyle: 'italic' },
//           { token: 'keyword', foreground: 'A626A4' },
//           { token: 'function', foreground: '4078F2' },
//           { token: 'string', foreground: '50A14F' },
//           { token: 'number', foreground: 'C76B29' },
//           { token: 'type', foreground: 'C18401' },
//           { token: 'operator', foreground: '0184BC' }
//         ],
//         colors: {
//           'editor.background': '#FAFAFA',
//           'editor.foreground': '#383A42',
//           'editor.lineHighlightBackground': '#F0F0F0',
//           'editorCursor.foreground': '#526FFF',
//           'editorWhitespace.foreground': '#E5E5E5',
//           'editorLineNumber.foreground': '#9D9D9F',
//           'editor.selectionBackground': '#D7DAE0',
//           'editor.findMatchBackground': '#C5E1FF',
//           'editor.findMatchHighlightBackground': '#D8EBFF',
//         }
//       });
//     });
//   }, []);

//   const handleLanguageChange = (e) => {
//     const lang = e.target.value;
//     const defaultFiles = getDefaultFiles(lang);
//     setLanguage(lang);
//     setFiles(defaultFiles);
//     setActiveFile(Object.keys(defaultFiles)[0]);
//   };

//   const handleCodeChange = (value) => {
//     setFiles((prev) => ({
//       ...prev,
//       [activeFile]: value
//     }));
//   };

//   const handleAddFile = () => {
//     const ext = getExtension(language);
//     const isCH = language === "c";

//     let newFileName = prompt(
//       `Enter new file name (${isCH ? "with .c or .h extension" : `with ${ext}`}):`,
//       isCH ? `newfile.c` : `newfile${ext}`
//     );

//     if (!newFileName) return;

//     const validExts = isCH ? [".c", ".h"] : [ext];
//     const isValidExt = validExts.some((v) => newFileName.endsWith(v));

//     if (!isValidExt) {
//       alert(`File must end with ${validExts.join(" or ")}`);
//       return;
//     }

//     if (files[newFileName]) {
//       alert("File already exists!");
//       return;
//     }

//     let defaultContent = "";
//     if (newFileName.endsWith(".h")) {
//       const headerGuard = newFileName.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase();
//       defaultContent = `#ifndef ${headerGuard}\n#define ${headerGuard}\n\n\n#endif`;
//     } else if (newFileName.endsWith(".c") || newFileName.endsWith(".cpp")) {
//       defaultContent = `// ${newFileName}\n\nint main() {\n    return 0;\n}`;
//     } else if (newFileName.endsWith(".js")) {
//       defaultContent = `console.log("New JS file");`;
//     }

//     const isMainInNewFile = defaultContent.includes("int main()");
//     let updatedFiles = { ...files };

//     if (isMainInNewFile) {
//       for (const fileName in updatedFiles) {
//         if (updatedFiles[fileName].includes("int main()")) {
//           delete updatedFiles[fileName];
//           break;
//         }
//       }
//     }

//     updatedFiles[newFileName] = defaultContent;
//     setFiles(updatedFiles);
//     setActiveFile(newFileName);
//   };

//   const handleDeleteFile = () => {
//     if (Object.keys(files).length === 1) {
//       alert("Cannot delete the last file.");
//       return;
//     }
//     if (!window.confirm(`Delete file "${activeFile}"?`)) return;

//     const newFiles = { ...files };
//     delete newFiles[activeFile];
//     const nextFile = Object.keys(newFiles)[0];
//     setFiles(newFiles);
//     setActiveFile(nextFile);
//   };

//   const checkMainConflict = () => {
//     let mainCount = 0;
//     Object.keys(files).forEach((fileName) => {
//       const content = files[fileName];
//       if (content.includes("int main()")) {
//         mainCount++;
//       }
//     });

//     if (mainCount > 1) {
//       alert("Multiple 'main' functions found. Please ensure only one main exists.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!checkMainConflict()) return; // Check for main conflict before proceeding
    
//     const formData = new FormData();
    
//     // Add required parameters to the formData
//     formData.append("UserId", 1); // Replace with actual UserId
//     formData.append("TaskId", 1); // Replace with actual TaskId
//     formData.append("Language", language); // Add language like "c", "cpp", etc.
    
//     // Add the main code file (CodeFile)
//     if (files[activeFile]) {
//       const blob = new Blob([files[activeFile]], { type: "text/plain" });
//       formData.append("CodeFile", blob, activeFile);
//     }
    
//     // Add the actual code (Code) as a fallback, if needed
//     formData.append("Code", files[activeFile] || "");
    
//     // Add any additional files (AdditionalFiles)
//     Object.keys(files).forEach((fileName) => {
//       if (fileName !== activeFile) {
//         const blob = new Blob([files[fileName]], { type: "text/plain" });
//         formData.append("AdditionalFiles", blob, fileName);
//       }
//     });
    
//     // Add the Execute flag (assuming it's a boolean)
//     formData.append("Execute", "true"); // or "false" depending on the requirement

//     // Set loading state and clear previous output
//     setIsLoading(true);
//     setStatusMessage("⏳ Compiling and running...");
//     setOutput({
//       compilationResult: "",
//       executionOutput: "",
//       errorMessage: ""
//     });

//     try {
//       const response = await fetch("http://localhost:5195/api/CodeExecution/run-code", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Extract the results from the response
//         const { status, results, actualOutput, expectedOutput, error } = data;

//         if (status === "Failed") {
//           setOutput({
//             compilationResult: "",
//             executionOutput: `Test results:\nExpected: ${expectedOutput.join(", ")}\nActual: ${actualOutput.join(", ")}\nResults: ${results.join(", ")}`,
//             errorMessage: error || "An error occurred during execution."
//           });
//           setStatusMessage("❌ Execution failed.");
//         } else {
//           setOutput({
//             compilationResult: data.compilationResult || "Compilation successful.",
//             executionOutput: actualOutput.join("\n"),
//             errorMessage: ""
//           });
//           setStatusMessage("✅ Compiled and executed successfully.");
//         }
//       } else {
//         setOutput({
//           compilationResult: "",
//           executionOutput: "",
//           errorMessage: data.message || "An error occurred while executing the code."
//         });
//         setStatusMessage("❌ Execution failed.");
//       }
//     } catch (error) {
//       setOutput({
//         compilationResult: "",
//         executionOutput: "",
//         errorMessage: "Failed to connect to the server."
//       });
//       setStatusMessage("❌ Server connection error.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Toggle between themes: one-dark and one-light
//   const toggleTheme = () => {
//     setTheme(prevTheme => {
//       if (prevTheme === "vs-dark") return "one-dark";
//       if (prevTheme === "one-dark") return "one-light";
//       return "one-dark";
//     });
//   };

//   const handleFileUpload = (event) => {
//     const uploadedFiles = event.target.files;
//     if (!uploadedFiles) return;

//     let newFiles = { ...files };
//     let mainFileFound = Object.keys(newFiles).find((file) =>
//       newFiles[file].includes("int main()")
//     );

//     Array.from(uploadedFiles).forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = () => {
//         const content = reader.result;
//         const fileExtension = file.name.split(".").pop();

//         const validExts = ["c", "cpp", "h", "js"];
//         if (!validExts.includes(fileExtension)) {
//           alert("Invalid file type. Only .c, .cpp, .h, or .js allowed.");
//           return;
//         }

//         const hasMain = content.includes("int main()");
//         if (hasMain && mainFileFound && mainFileFound !== file.name) {
//           delete newFiles[mainFileFound];
//           mainFileFound = file.name;
//         }

//         newFiles[file.name] = content;
//         setFiles({ ...newFiles });
//         setActiveFile(file.name);
//       };
//       reader.readAsText(file);
//     });
//   };

//   return (
//     <div className="flex flex-col h-full w-full p-4 bg-gray-100">
//       <div className="flex items-center gap-2 mb-4">
//         <select 
//           className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={handleLanguageChange} 
//           value={language}
//         >
//           <option value="c">C</option>
//           <option value="cpp">C++</option>
//           <option value="javascript">JavaScript</option>
//         </select>

//         <select 
//           className="px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           onChange={(e) => setActiveFile(e.target.value)} 
//           value={activeFile}
//         >
//           {Object.keys(files).map((fileName) => (
//             <option key={fileName} value={fileName}>
//               {fileName}
//             </option>
//           ))}
//         </select>

        
        
       
//         <button 
//           className={`px-3 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//             isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
//           }`}
//           onClick={handleSubmit} 
//           disabled={isLoading}
//         >
//           {isLoading ? "Running..." : "Run Code"}
//         </button>
        
        
        
//         <button
//           className={`px-3 py-2 text-white rounded-md focus:outline-none focus:ring-2 ${
//             theme.includes("light") 
//               ? "bg-gray-700 hover:bg-gray-800 focus:ring-gray-500" 
//               : "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400"
//           }`}
//           onClick={toggleTheme}
//         >
//           {theme.includes("light") ? "Dark Theme" : "Light Theme"}
//         </button>
//       </div>

//       <div className="flex-grow border border-gray-300 rounded-md overflow-hidden">
//         <Editor
//           height="100%"
//           language={language === "cpp" ? "cpp" : language === "c" ? "c" : "javascript"}
//           value={files[activeFile]}
//           theme={theme}
//           onChange={handleCodeChange}
//           options={{
//             minimap: { enabled: false },
//             scrollBeyondLastLine: false,
//             fontSize: 14,
//             wordWrap: "on"
//           }}
//         />
//       </div>

//       {statusMessage && (
//         <div className={`mt-3 font-bold ${
//           isLoading ? "text-blue-600" : statusMessage.includes("✅") ? "text-green-600" : "text-red-600"
//         }`}>
//           {statusMessage}
//         </div>
//       )}

//       <div className="mt-4 border border-gray-300 rounded-md p-4 bg-white">
//         {output.errorMessage && (
//           <div className="text-red-600 mb-3">
//             <strong>Error:</strong> {output.errorMessage}
//           </div>
//         )}

//         <h3 className="text-lg font-semibold mb-2">Compilation Result:</h3>
//         <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto whitespace-pre-wrap max-h-32">
//           {output.compilationResult || "No result yet"}
//         </pre>

//         <h3 className="text-lg font-semibold mt-4 mb-2">Execution Output:</h3>
//         <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto whitespace-pre-wrap max-h-48">
//           {output.executionOutput || "No output yet"}
//         </pre>
//       </div>
//     </div>
//   );
// }

// export default CodeEditor;

import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { loader } from "@monaco-editor/react";

// Function to return default files based on the language
const getDefaultFiles = (lang) => {
  if (lang === "c") {
    return {
      "main.c": `#include "custom.h"

int main() {
    sayHello();
    return 0;
}`,
      "custom.h": `#ifndef CUSTOM_H
#define CUSTOM_H

void sayHello();

#endif`,
      "functions.c": `#include <stdio.h>
#include "custom.h"

void sayHello() {
    printf("Hello from function file!\\n");
}`
    };
  }
  if (lang === "cpp") {
    return {
      "main.cpp": `#include <iostream>

int main() {
    std::cout << "Hello, C++ World!" << std::endl;
    return 0;
}`
    };
  }
  if (lang === "javascript") {
    return {
      "main.js": `console.log("Hello, JavaScript World!");`
    };
  }
  return {};
};

const getExtension = (lang) => {
  switch (lang) {
    case "c":
      return ".c";
    case "cpp":
      return ".cpp";
    case "javascript":
      return ".js";
    default:
      return ".txt";
  }
};

function CodeEditor() {
  const [language, setLanguage] = useState("c");
  const [files, setFiles] = useState(getDefaultFiles("c"));
  const [activeFile, setActiveFile] = useState("main.c");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [theme, setTheme] = useState("vs-dark"); // Default theme
  const [output, setOutput] = useState({
    compilationResult: "",
    executionOutput: "",
    errorMessage: ""
  });

  // Configure Monaco editor themes
  useEffect(() => {
    // Define and register the "one-dark" theme
    loader.init().then(monaco => {
      monaco.editor.defineTheme('one-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: 'comment', foreground: '5C6370', fontStyle: 'italic' },
          { token: 'keyword', foreground: 'C678DD' },
          { token: 'function', foreground: '61AFEF' },
          { token: 'string', foreground: '98C379' },
          { token: 'number', foreground: 'D19A66' },
          { token: 'type', foreground: 'E5C07B' },
          { token: 'operator', foreground: '56B6C2' }
        ],
        colors: {
          'editor.background': '#282C34',
          'editor.foreground': '#ABB2BF',
          'editor.lineHighlightBackground': '#2C313C',
          'editorCursor.foreground': '#528BFF',
          'editorWhitespace.foreground': '#3B4048',
          'editorLineNumber.foreground': '#495162',
          'editor.selectionBackground': '#3E4451',
          'editor.findMatchBackground': '#42557B',
          'editor.findMatchHighlightBackground': '#314365',
        }
      });

      // Define and register the "one-light" theme
      monaco.editor.defineTheme('one-light', {
        base: 'vs',
        inherit: true,
        rules: [
          { token: 'comment', foreground: '9E9E9E', fontStyle: 'italic' },
          { token: 'keyword', foreground: 'A626A4' },
          { token: 'function', foreground: '4078F2' },
          { token: 'string', foreground: '50A14F' },
          { token: 'number', foreground: 'C76B29' },
          { token: 'type', foreground: 'C18401' },
          { token: 'operator', foreground: '0184BC' }
        ],
        colors: {
          'editor.background': '#FAFAFA',
          'editor.foreground': '#383A42',
          'editor.lineHighlightBackground': '#F0F0F0',
          'editorCursor.foreground': '#526FFF',
          'editorWhitespace.foreground': '#E5E5E5',
          'editorLineNumber.foreground': '#9D9D9F',
          'editor.selectionBackground': '#D7DAE0',
          'editor.findMatchBackground': '#C5E1FF',
          'editor.findMatchHighlightBackground': '#D8EBFF',
        }
      });
    });
  }, []);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    const defaultFiles = getDefaultFiles(lang);
    setLanguage(lang);
    setFiles(defaultFiles);
    setActiveFile(Object.keys(defaultFiles)[0]);
  };

  const handleCodeChange = (value) => {
    setFiles((prev) => ({
      ...prev,
      [activeFile]: value
    }));
  };

  const handleAddFile = () => {
    const ext = getExtension(language);
    const isCH = language === "c";

    let newFileName = prompt(
      `Enter new file name (${isCH ? "with .c or .h extension" : `with ${ext}`}):`,
      isCH ? `newfile.c` : `newfile${ext}`
    );

    if (!newFileName) return;

    const validExts = isCH ? [".c", ".h"] : [ext];
    const isValidExt = validExts.some((v) => newFileName.endsWith(v));

    if (!isValidExt) {
      alert(`File must end with ${validExts.join(" or ")}`);
      return;
    }

    if (files[newFileName]) {
      alert("File already exists!");
      return;
    }

    let defaultContent = "";
    if (newFileName.endsWith(".h")) {
      const headerGuard = newFileName.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase();
      defaultContent = `#ifndef ${headerGuard}\n#define ${headerGuard}\n\n\n#endif`;
    } else if (newFileName.endsWith(".c") || newFileName.endsWith(".cpp")) {
      defaultContent = `// ${newFileName}\n\nint main() {\n    return 0;\n}`;
    } else if (newFileName.endsWith(".js")) {
      defaultContent = `console.log("New JS file");`;
    }

    const isMainInNewFile = defaultContent.includes("int main()");
    let updatedFiles = { ...files };

    if (isMainInNewFile) {
      for (const fileName in updatedFiles) {
        if (updatedFiles[fileName].includes("int main()")) {
          delete updatedFiles[fileName];
          break;
        }
      }
    }

    updatedFiles[newFileName] = defaultContent;
    setFiles(updatedFiles);
    setActiveFile(newFileName);
  };

  const handleDeleteFile = () => {
    if (Object.keys(files).length === 1) {
      alert("Cannot delete the last file.");
      return;
    }
    if (!window.confirm(`Delete file "${activeFile}"?`)) return;

    const newFiles = { ...files };
    delete newFiles[activeFile];
    const nextFile = Object.keys(newFiles)[0];
    setFiles(newFiles);
    setActiveFile(nextFile);
  };

  const checkMainConflict = () => {
    let mainCount = 0;
    Object.keys(files).forEach((fileName) => {
      const content = files[fileName];
      if (content.includes("int main()")) {
        mainCount++;
      }
    });

    if (mainCount > 1) {
      alert("Multiple 'main' functions found. Please ensure only one main exists.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!checkMainConflict()) return; // Check for main conflict before proceeding
    
    const formData = new FormData();
    
    // Add required parameters to the formData
    formData.append("UserId", 1); // Replace with actual UserId
    formData.append("TaskId", 1); // Replace with actual TaskId
    formData.append("Language", language); // Add language like "c", "cpp", etc.
    
    // Add the main code file (CodeFile)
    if (files[activeFile]) {
      const blob = new Blob([files[activeFile]], { type: "text/plain" });
      formData.append("CodeFile", blob, activeFile);
    }
    
    // Add the actual code (Code) as a fallback, if needed
    formData.append("Code", files[activeFile] || "");
    
    // Add any additional files (AdditionalFiles)
    Object.keys(files).forEach((fileName) => {
      if (fileName !== activeFile) {
        const blob = new Blob([files[fileName]], { type: "text/plain" });
        formData.append("AdditionalFiles", blob, fileName);
      }
    });
    
    // Add the Execute flag (assuming it's a boolean)
    formData.append("Execute", "true"); // or "false" depending on the requirement

    // Set loading state and clear previous output
    setIsLoading(true);
    setStatusMessage("⏳ Compiling and running...");
    setOutput({
      compilationResult: "",
      executionOutput: "",
      errorMessage: ""
    });

    try {
      const response = await fetch("http://localhost:5195/api/CodeExecution/run-code", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        // Extract the results from the response
        const { status, results, actualOutput, expectedOutput, error } = data;

        if (status === "Failed") {
          setOutput({
            compilationResult: "",
            executionOutput: `Test results:\nExpected: ${expectedOutput.join(", ")}\nActual: ${actualOutput.join(", ")}\nResults: ${results.join(", ")}`,
            errorMessage: error || "An error occurred during execution."
          });
          setStatusMessage("❌ Execution failed.");
        } else {
          setOutput({
            compilationResult: data.compilationResult || "Compilation successful.",
            executionOutput: actualOutput.join("\n"),
            errorMessage: ""
          });
          setStatusMessage("✅ Compiled and executed successfully.");
        }
      } else {
        setOutput({
          compilationResult: "",
          executionOutput: "",
          errorMessage: data.message || "An error occurred while executing the code."
        });
        setStatusMessage("❌ Execution failed.");
      }
    } catch (error) {
      setOutput({
        compilationResult: "",
        executionOutput: "",
        errorMessage: "Failed to connect to the server."
      });
      setStatusMessage("❌ Server connection error.");
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle between themes: one-dark and one-light
  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === "vs-dark") return "one-dark";
      if (prevTheme === "one-dark") return "one-light";
      return "one-dark";
    });
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    if (!uploadedFiles) return;

    let newFiles = { ...files };
    let mainFileFound = Object.keys(newFiles).find((file) =>
      newFiles[file].includes("int main()")
    );

    Array.from(uploadedFiles).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        const fileExtension = file.name.split(".").pop();

        const validExts = ["c", "cpp", "h", "js"];
        if (!validExts.includes(fileExtension)) {
          alert("Invalid file type. Only .c, .cpp, .h, or .js allowed.");
          return;
        }

        const hasMain = content.includes("int main()");
        if (hasMain && mainFileFound && mainFileFound !== file.name) {
          delete newFiles[mainFileFound];
          mainFileFound = file.name;
        }

        newFiles[file.name] = content;
        setFiles({ ...newFiles });
        setActiveFile(file.name);
      };
      reader.readAsText(file);
    });
  };

  return (
    <div className="flex flex-col h-full w-full p-4 bg-gray-100">
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

      <div className="flex-grow border border-gray-300 rounded-md overflow-hidden">
        <Editor
          height="100%"
          language={language === "cpp" ? "cpp" : language === "c" ? "c" : "javascript"}
          value={files[activeFile]}
          theme={theme}
          onChange={handleCodeChange}
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            wordWrap: "on"
          }}
        />
      </div>

      {statusMessage && (
        <div className={`mt-3 font-bold ${
          isLoading ? "text-blue-600" : statusMessage.includes("✅") ? "text-green-600" : "text-red-600"
        }`}>
          {statusMessage}
        </div>
      )}

      <div className="mt-4 border border-gray-300 rounded-md p-4 bg-white">
        {output.errorMessage && (
          <div className="text-red-600 mb-3">
            <strong>Error:</strong> {output.errorMessage}
          </div>
        )}

        <h3 className="text-lg font-semibold mb-2">Compilation Result:</h3>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto whitespace-pre-wrap max-h-32">
          {output.compilationResult || "No result yet"}
        </pre>

        <h3 className="text-lg font-semibold mt-4 mb-2">Execution Output:</h3>
        <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto whitespace-pre-wrap max-h-48">
          {output.executionOutput || "No output yet"}
        </pre>
      </div>
    </div>
  );
}

export default CodeEditor;