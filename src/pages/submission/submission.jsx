// import { useState, useEffect } from "react";
// import { File, FolderOpen } from "lucide-react";

// const Submissions = () => {
//   const [exercise, setExercise] = useState({
//     title: "Dennis Ritchie",
//     moduleId: "DR-Module 1",
//     description:
//       'Exercise 1-1. Run the "hello, world" program on your system. Experiment with leaving out parts of the program, to see what error messages you get.',
//   });

//   const [functionFiles, setFunctionFiles] = useState([
//     { name: "Function1.c", content: "" },
//     { name: "header.h", content: "" },
//   ]);

//   const [mainFiles, setMainFiles] = useState([
//     { name: "main.c", content: "" },
//   ]);

//   const [codeOutput, setCodeOutput] = useState("Code is Successfully Run.");
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchExercise = () => {
//     console.log("Fetching exercise from API...");
//   };

//   useEffect(() => {
//     fetchExercise();
//   }, []);

//   const handleAddFunctionFile = () => {
//     const newFileName = `Function${functionFiles.length + 1}.c`;
//     setFunctionFiles([...functionFiles, { name: newFileName, content: "" }]);
//   };

//   const handleAddMainFile = () => {
//     const newFileName = `main${mainFiles.length + 1}.c`;
//     setMainFiles([...mainFiles, { name: newFileName, content: "" }]);
//   };

//   const handleRunCode = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setCodeOutput("Code is Successfully Run.");
//       setIsLoading(false);
//     }, 1000);
//   };

//   const handleSubmit = () => {
//     console.log("Submitting exercise solution...");
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       <div className="flex-1 p-6">
//         <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold">{exercise.title}</h1>
//             <span className="text-gray-500">{exercise.moduleId}</span>
//           </div>

//           <p className="mb-8 text-gray-700">{exercise.description}</p>

//           <div className="mb-6">
//             <h2 className="text-lg font-semibold mb-2">Function Files</h2>
//             <div className="flex mb-2">
//               <button
//                 onClick={handleAddFunctionFile}
//                 className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 <span className="mr-2">+</span>
//                 Add Files
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {functionFiles.map((file, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-300 rounded px-3 py-1 flex items-center"
//                 >
//                   <File size={16} className="mr-1" />
//                   <span>{file.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <h2 className="text-lg font-semibold mb-2">Main Files</h2>
//             <div className="flex mb-2">
//               <button
//                 onClick={handleAddMainFile}
//                 className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 <span className="mr-2">+</span>
//                 Add Files
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {mainFiles.map((file, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-300 rounded px-3 py-1 flex items-center"
//                 >
//                   <File size={16} className="mr-1" />
//                   <span>{file.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-between">
//             <div></div>
//             <div className="flex flex-col">
//               <button
//                 onClick={handleRunCode}
//                 className="bg-blue-600 text-white px-8 py-2 rounded mb-2 hover:bg-blue-700 flex items-center justify-center"
//                 disabled={isLoading}
//               >
//                 {isLoading ? <span>Running...</span> : <span>Run</span>}
//               </button>

//               <div className="border border-gray-300 rounded p-4 h-48 w-80 bg-white mb-6 overflow-auto">
//                 <p className="text-gray-700">{codeOutput}</p>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="fixed left-0 top-0 bottom-0 w-16 bg-gray-100 flex flex-col items-center py-4">
//         <div className="flex flex-col gap-4">
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200">
//             <File size={20} className="text-gray-500" />
//           </button>
//           <button className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg">
//             <FolderOpen size={20} className="text-white" />
//           </button>
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200">
//             <File size={20} className="text-gray-500" />
//           </button>
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200">
//             <File size={20} className="text-gray-500" />
//           </button>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Submissions;


import React, { useState } from "react";

// Create a simulated data structure with modules, chapters, and exercises with submission history
const generateSubmissionData = () => {
  // Create 3 modules
  const modules = [
    { id: 1, name: "DR-Modules" },
    { id: 2, name: "Ypk Modules" },
    { id: 3, name: "Take Away Module" }
  ];

  // Create chapters (replacing subcategories)
  const chapters = modules.flatMap(module => [
    { id: `${module.id}-1`, name: "Chapter 1", moduleId: module.id },
    { id: `${module.id}-2`, name: "Chapter 2", moduleId: module.id },
    { id: `${module.id}-3`, name: "Chapter 3", moduleId: module.id }
  ]);

  // Create exercises and their submissions
  const exercises = [];
  const submissions = [];

  // Generate file content templates
  const generateFileContent = (exerciseId, fileName, isSorting) => {
    if (fileName.endsWith('.c')) {
      return isSorting 
        ? `// File: ${fileName}
#include <stdio.h>
${fileName === 'main.c' ? '#include "helper1.h"' : ''}

${fileName === 'main.c' ? 'int main()' : `void ${fileName.replace('.c', '')}(int arr[], int n)`} {
    ${fileName === 'main.c' 
      ? `int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("Original array: \\n");
    printArray(arr, n);
    
    // Call sorting function
    bubbleSort(arr, n);
    
    printf("Sorted array: \\n");
    printArray(arr, n);
    
    return 0;` 
      : `// Implementation of bubble sort
    int i, j, temp;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap the elements
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }`}
}`
        : `// File: ${fileName}
#include <stdio.h>
${fileName === 'main.c' ? '#include "helper1.h"' : ''}

${fileName === 'main.c' ? 'int main()' : `void ${fileName.replace('.c', '')}(int count)`} {
    ${fileName === 'main.c' 
      ? `int sum = 0;
    int count = 10;
    
    // Fixed bug: initialization value for i was incorrect
    // for(int i = 1; i <= count; i++) // Original buggy code
    for(int i = 0; i < count; i++) {
        sum += i;
    }
    
    // Fixed bug: wrong format specifier
    // printf("Sum: %f\\n", sum); // Original buggy code
    printf("Sum: %d\\n", sum);
    
    // Using helper function
    validateInput(count);
    
    return 0;` 
      : `// Helper function to validate input
    if (count < 0) {
        printf("Error: Count cannot be negative\\n");
        return;
    }
    
    printf("Input validation passed for count: %d\\n", count);`}
}`;
    } else if (fileName.endsWith('.h')) {
      return `// Header file: ${fileName}
#ifndef ${fileName.replace('.', '_').toUpperCase()}
#define ${fileName.replace('.', '_').toUpperCase()}

// Function prototypes
${fileName === 'helper1.h' 
  ? (isSorting 
      ? `void bubbleSort(int arr[], int n);
void printArray(int arr[], int n);` 
      : `void validateInput(int count);`)
  : `// Additional helper functions`}

${isSorting && fileName === 'helper1.h' 
  ? `// Function to print an array
void printArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}` 
  : ''}

#endif`;
    } else if (fileName.endsWith('.txt')) {
      return `Exercise ${exerciseId} Notes\n
This file contains my notes for the exercise.
${isSorting 
  ? `- Bubble sort has O(n²) time complexity
- We could optimize it further by stopping if no swaps occur in a pass
- Test cases cover various scenarios including sorted, reverse sorted, and random arrays` 
  : `- Found bug in loop initialization
- Format specifier was incorrect for integer output
- Added input validation to prevent negative counts`}

Additional improvement ideas:
${isSorting 
  ? `- Implement quicksort for better performance
- Add capability to sort different data types` 
  : `- Add more robust error handling
- Implement boundary checking`}`;
    } else if (fileName.endsWith('.md')) {
      return `# Exercise ${exerciseId} Documentation

## Overview
${isSorting 
  ? `This implementation demonstrates the bubble sort algorithm, which works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order.` 
  : `This exercise focuses on debugging a simple counting program with two main bugs: incorrect loop initialization and a wrong format specifier.`}

## Implementation Details
${isSorting 
  ? `The sorting algorithm is implemented in the following files:
- main.c: Contains the driver code
- helper1.c: Contains the actual sorting implementation
- helper1.h: Header file with function prototypes` 
  : `The debugging fixes include:
1. Changing the loop initialization from \`i = 1\` to \`i = 0\`
2. Fixing the format specifier from \`%f\` to \`%d\`
3. Adding input validation through a helper function`}

## Test Results
All test cases have been executed successfully.`;
    } else if (fileName.endsWith('.json')) {
      return `{
  "exerciseId": "${exerciseId}",
  "testResults": {
    "totalTests": 10,
    "passed": ${isSorting ? (exerciseId.includes('1-') ? 10 : 8) : (exerciseId.includes('1-') ? 9 : 7)},
    "failed": ${isSorting ? (exerciseId.includes('1-') ? 0 : 2) : (exerciseId.includes('1-') ? 1 : 3)}
  },
  "performance": {
    "timeComplexity": "${isSorting ? 'O(n²)' : 'O(n)'}",
    "spaceComplexity": "O(1)"
  },
  "submission": {
    "date": "${new Date().toISOString().split('T')[0]}",
    "version": "1.0.${Math.floor(Math.random() * 10)}"
  }
}`;
    } else {
      return `// Content for ${fileName} would be displayed here`;
    }
  };

  chapters.forEach(chapter => {
    // Create 3-5 exercises per chapter
    const exerciseCount = 3 + Math.floor(Math.random() * 3);
    
    for (let i = 1; i <= exerciseCount; i++) {
      const moduleNum = chapter.moduleId;
      const chapterNum = chapter.id.split('-')[1];
      const exerciseId = `${moduleNum}-${chapterNum}-${i}`;
      const difficulty = i % 3 === 0 ? "Hard" : i % 3 === 1 ? "Medium" : "Easy";
      const status = i % 3 === 0 ? "done" : i % 3 === 1 ? "fail" : "pending";
      const isSorting = i % 2 === 0;
      
      exercises.push({
        id: exerciseId,
        name: `Exercise ${moduleNum}.${chapterNum}.${i} - ${
          isSorting ? "Implement a sorting algorithm" : "Debug the given program"
        }`,
        description: `This task requires you to ${
          isSorting ? "implement an efficient sorting algorithm" : "find and fix bugs in the program"
        }. Include examples where appropriate.`,
        chapterId: chapter.id,
        difficulty,
        time: "10:00:00",
        status
      });
      
      // Only create submissions for completed or failed exercises
      if (status !== "pending") {
        const startTime = new Date(Date.now() - Math.floor(Math.random() * 3600000));
        const endTime = new Date(startTime.getTime() + Math.floor(Math.random() * 1800000));
        const totalTimeTaken = Math.floor((endTime - startTime) / 1000);
        const format = (date) => `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        const testCasesPassed = status === "done" ? 10 : Math.floor(Math.random() * 7);
        const totalCases = 10;
        
        // Generate 2-4 random files for this submission
        const commonFiles = [
          {
            id: `file-${exerciseId}-0`,
            name: "main.c",
            size: `${Math.floor(Math.random() * 5) + 2}KB`,
            lastModified: format(new Date(endTime.getTime() - Math.floor(Math.random() * 900000))),
            content: generateFileContent(exerciseId, "main.c", isSorting)
          },
          {
            id: `file-${exerciseId}-1`,
            name: "helper1.c",
            size: `${Math.floor(Math.random() * 3) + 1}KB`,
            lastModified: format(new Date(endTime.getTime() - Math.floor(Math.random() * 900000))),
            content: generateFileContent(exerciseId, "helper1.c", isSorting)
          },
          {
            id: `file-${exerciseId}-2`,
            name: "helper1.h",
            size: `${Math.floor(Math.random() * 2) + 1}KB`,
            lastModified: format(new Date(endTime.getTime() - Math.floor(Math.random() * 900000))),
            content: generateFileContent(exerciseId, "helper1.h", isSorting)
          }
        ];
        
        // Add 1-2 additional files
        const additionalFileTypes = ["txt", "md", "json"];
        const additionalFileCount = 1 + Math.floor(Math.random() * 2);
        const additionalFiles = Array(additionalFileCount).fill(0).map((_, idx) => {
          const fileType = additionalFileTypes[Math.floor(Math.random() * additionalFileTypes.length)];
          const fileName = `notes${idx + 1}.${fileType}`;
          return {
            id: `file-${exerciseId}-${idx + 3}`,
            name: fileName,
            size: `${Math.floor(Math.random() * 10) + 1}KB`,
            lastModified: format(new Date(endTime.getTime() - Math.floor(Math.random() * 900000))),
            content: generateFileContent(exerciseId, fileName, isSorting)
          };
        });
        
        const files = [...commonFiles, ...additionalFiles];
        
        submissions.push({
          id: exerciseId,
          exerciseId,
          taskName: `Exercise ${moduleNum}.${chapterNum}.${i} - ${
            isSorting ? "Implement sorting algorithm" : "Debug program"
          }`,
          start: format(startTime),
          end: format(endTime),
          totalTime: `${Math.floor(totalTimeTaken / 60)}m ${totalTimeTaken % 60}s`,
          testCase: `${testCasesPassed}/${totalCases}`,
          files
        });
      }
    }
  });

  return { modules, chapters, exercises, submissions };
};

const { modules, chapters, exercises, submissions } = generateSubmissionData();

const SubmissionPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedModules, setExpandedModules] = useState({});
  const [expandedChapters, setExpandedChapters] = useState({});
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);
  const [selectedFileId, setSelectedFileId] = useState(null);
  
  // Filter exercises based on search query
  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Group filtered exercises by module and chapter
  const groupedExercises = filteredExercises.reduce((acc, exercise) => {
    const chapter = chapters.find(ch => ch.id === exercise.chapterId);
    const moduleId = chapter.moduleId;
    
    if (!acc[moduleId]) {
      acc[moduleId] = {};
    }
    
    if (!acc[moduleId][chapter.id]) {
      acc[moduleId][chapter.id] = [];
    }
    
    acc[moduleId][chapter.id].push(exercise);
    return acc;
  }, {});
  
  // Toggle module expansion
  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };
  
  // Toggle chapter expansion
  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };
  
  // Handle exercise selection to show submissions
  const handleExerciseClick = (exerciseId) => {
    setSelectedExerciseId(exerciseId);
    
    // Find the first file of the selected exercise and select it by default
    const submission = submissions.find(s => s.exerciseId === exerciseId);
    if (submission && submission.files.length > 0) {
      setSelectedFileId(submission.files[0].id);
    } else {
      setSelectedFileId(null);
    }
  };
  
  // Get submission for selected exercise
  const selectedSubmission = submissions.find(s => s.exerciseId === selectedExerciseId);
  
  // Get selected file
  const selectedFile = selectedSubmission?.files.find(f => f.id === selectedFileId);
  
  // Back button handler
  const handleBack = () => {
    setSelectedExerciseId(null);
    setSelectedFileId(null);
  };
  
  // File selection handler
  const handleFileClick = (fileId) => {
    setSelectedFileId(fileId);
  };
  
  // Mock download file function
  const handleDownloadFile = (file) => {
    // In a real app, this would trigger an actual file download
    console.log(`Downloading file: ${file.name}`);
    alert(`Download started for: ${file.name}`);
  };
  
  // Determine syntax highlighting class based on file extension
  const getLanguageClass = (fileName) => {
    if (fileName.endsWith('.c') || fileName.endsWith('.h')) return 'language-c';
    if (fileName.endsWith('.js')) return 'language-javascript';
    if (fileName.endsWith('.py')) return 'language-python';
    if (fileName.endsWith('.json')) return 'language-json';
    if (fileName.endsWith('.md')) return 'language-markdown';
    return 'language-plaintext';
  };

  return (
    <div className="flex-grow h-full flex flex-col bg-gray-100 p-2 overflow-auto transition-all duration-300">
      <div className="w-full h-full bg-white border border-gray-300 rounded-lg flex flex-col items-center">
        <div className="w-full flex justify-between items-center bg-white p-4 border-b border-gray-200">
          <div className="text-xl font-bold text-gray-800">
            {selectedExerciseId ? "Submission Details" : "Submission History"}
          </div>
          {!selectedExerciseId && (
            <input
              type="text"
              placeholder="Search exercises"
              className="px-4 py-2 border border-gray-300 rounded-lg"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          )}
          {selectedExerciseId && (
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Back
            </button>
          )}
        </div>

        <div className="p-4 w-full h-full overflow-auto">
          {!selectedExerciseId ? (
            <div className="w-full">
              {modules.map(module => {
                // Check if this module has any exercises that match the search query
                const hasMatchingExercises = Object.values(groupedExercises[module.id] || {}).some(
                  exercises => exercises.length > 0
                );
                
                if (!hasMatchingExercises && searchQuery) return null;
                
                return (
                  <div key={module.id} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                    <div 
                      className="flex items-center p-3  cursor-pointer hover:bg-gray-200"
                      onClick={() => toggleModule(module.id)}
                    >
                      <div className="mr-2">
                        {expandedModules[module.id] ? "▼" : "►"}
                      </div>
                      <div className="font-bold">{module.name}</div>
                    </div>
                    
                    {expandedModules[module.id] && (
                      <div className="border-t border-gray-200">
                        {chapters
                          .filter(ch => ch.moduleId === module.id)
                          .map(chapter => {
                            const chapterExercises = groupedExercises[module.id]?.[chapter.id] || [];
                            if (!chapterExercises.length && searchQuery) return null;
                            
                            return (
                              <div key={chapter.id} className="border-b border-gray-200 last:border-b-0">
                                <div 
                                  className="flex items-center p-3 bg-gray-50 cursor-pointer hover:bg-gray-100 pl-6"
                                  onClick={() => toggleChapter(chapter.id)}
                                >
                                  <div className="mr-2">
                                    {expandedChapters[chapter.id] ? "▼" : "►"}
                                  </div>
                                  <div className="font-medium">{chapter.name}</div>
                                </div>
                                
                                {expandedChapters[chapter.id] && (
                                  <div>
                                    {chapterExercises.map(exercise => {
                                      const hasSubmission = submissions.some(s => s.exerciseId === exercise.id);
                                      
                                      return (
                                        <div 
                                          key={exercise.id}
                                          className={`p-3 border-t border-gray-100 flex items-center pl-10 ${
                                            hasSubmission 
                                              ? 'cursor-pointer hover:bg-gray-50' 
                                              : 'text-gray-400 cursor-not-allowed'
                                          }`}
                                          onClick={() => hasSubmission && handleExerciseClick(exercise.id)}
                                        >
                                          <div className="flex-grow">{exercise.name}</div>
                                          <div className={`px-2 py-1 rounded-full text-xs ${
                                            exercise.status === "done" 
                                              ? "bg-green-100 text-green-800" 
                                              : exercise.status === "fail" 
                                              ? "bg-red-100 text-red-800" 
                                              : "bg-gray-100 text-gray-800"
                                          }`}>
                                            {exercise.status === "done" 
                                              ? "Completed" 
                                              : exercise.status === "fail" 
                                              ? "Failed" 
                                              : "Pending"}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </div>
                );
              })}
              
              {searchQuery && !Object.keys(groupedExercises).length && (
                <div className="text-center p-8 text-gray-500">
                  No exercises match your search query.
                </div>
              )}
            </div>
          ) : (
            selectedSubmission ? (
              <div className="flex flex-col gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold mb-4">{selectedSubmission.taskName}</h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Started</div>
                      <div className="font-medium">{selectedSubmission.start}</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Completed</div>
                      <div className="font-medium">{selectedSubmission.end}</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Total Time</div>
                      <div className="font-medium">{selectedSubmission.totalTime}</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Test Cases</div>
                      <div className="font-medium">{selectedSubmission.testCase}</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-3">Submission Summary</h3>
                    <p className="text-gray-700">
                      The submission was {selectedSubmission.testCase === "10/10" ? "successful" : "partially successful"}.
                      {selectedSubmission.testCase === "10/10" 
                        ? " All test cases passed successfully." 
                        : ` ${selectedSubmission.testCase.split('/')[0]} out of ${selectedSubmission.testCase.split('/')[1]} test cases passed.`
                      }
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-medium mb-4">Code Submission</h3>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* File list */}
                    <div className="w-full md:w-1/3">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Files</h4>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="max-h-64 overflow-y-auto">
                          {selectedSubmission.files.map((file) => (
                            <div 
                              key={file.id}
                              className={`p-3 flex items-center justify-between border-b border-gray-200 cursor-pointer ${
                                selectedFileId === file.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                              }`}
                              onClick={() => handleFileClick(file.id)}
                            >
                              <div className="flex items-center">
                                <div className="mr-3">
                                  {file.name.endsWith('.c') || file.name.endsWith('.h') ? (
                                    <span className="text-blue-600">📄</span>
                                  ) : file.name.endsWith('.txt') ? (
                                    <span className="text-gray-600">📝</span>
                                  ) : file.name.endsWith('.md') ? (
                                    <span className="text-purple-600">📋</span>
                                  ) : file.name.endsWith('.json') ? (
                                    <span className="text-yellow-600">🔧</span>
                                  ) : (
                                    <span className="text-gray-400">📄</span>
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium">{file.name}</div>
                                  <div className="text-xs text-gray-500">{file.size}</div>
                                </div>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDownloadFile(file);
                                }}
                                className="text-blue-600 hover:text-blue-800 text-sm"
                              >
                                Download
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* File content */}
                    <div className="w-full md:w-2/3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">
                          {selectedFile ? `File: ${selectedFile.name}` : 'Select a file to view'}
                        </h4>
                        {selectedFile && (
                          <div className="text-xs text-gray-500">
                            Last modified: {selectedFile.lastModified}
                          </div>
                        )}
                      </div>
                      
                      {selectedFile ? (
                        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-700">
                          <pre className={getLanguageClass(selectedFile.name)}>
                            {selectedFile.content}
                          </pre>
                        </div>
                      ) : (
                        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center text-gray-500">
                          Select a file from the list to view its content
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center p-8 text-gray-500">
                No submission data available for this exercise.
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
