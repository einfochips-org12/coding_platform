import { useState, useEffect } from "react";
import { File, FolderOpen } from "lucide-react";

const Submissions = () => {
  const [exercise, setExercise] = useState({
    title: "Dennis Ritchie",
    moduleId: "DR-Module 1",
    description:
      'Exercise 1-1. Run the "hello, world" program on your system. Experiment with leaving out parts of the program, to see what error messages you get.',
  });

  const [functionFiles, setFunctionFiles] = useState([
    { name: "Function1.c", content: "" },
    { name: "header.h", content: "" },
  ]);

  const [mainFiles, setMainFiles] = useState([
    { name: "main.c", content: "" },
  ]);

  const [codeOutput, setCodeOutput] = useState("Code is Successfully Run.");
  const [isLoading, setIsLoading] = useState(false);

  const fetchExercise = () => {
    console.log("Fetching exercise from API...");
  };

  useEffect(() => {
    fetchExercise();
  }, []);

  const handleAddFunctionFile = () => {
    const newFileName = `Function${functionFiles.length + 1}.c`;
    setFunctionFiles([...functionFiles, { name: newFileName, content: "" }]);
  };

  const handleAddMainFile = () => {
    const newFileName = `main${mainFiles.length + 1}.c`;
    setMainFiles([...mainFiles, { name: newFileName, content: "" }]);
  };

  const handleRunCode = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCodeOutput("Code is Successfully Run.");
      setIsLoading(false);
    }, 1000);
  };

  const handleSubmit = () => {
    console.log("Submitting exercise solution...");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow p-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{exercise.title}</h1>
            <span className="text-gray-500">{exercise.moduleId}</span>
          </div>

          <p className="mb-8 text-gray-700">{exercise.description}</p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Function Files</h2>
            <div className="flex mb-2">
              <button
                onClick={handleAddFunctionFile}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                <span className="mr-2">+</span>
                Add Files
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {functionFiles.map((file, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded px-3 py-1 flex items-center"
                >
                  <File size={16} className="mr-1" />
                  <span>{file.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Main Files</h2>
            <div className="flex mb-2">
              <button
                onClick={handleAddMainFile}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                <span className="mr-2">+</span>
                Add Files
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {mainFiles.map((file, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded px-3 py-1 flex items-center"
                >
                  <File size={16} className="mr-1" />
                  <span>{file.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <div></div>
            <div className="flex flex-col">
              <button
                onClick={handleRunCode}
                className="bg-blue-600 text-white px-8 py-2 rounded mb-2 hover:bg-blue-700 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? <span>Running...</span> : <span>Run</span>}
              </button>

              <div className="border border-gray-300 rounded p-4 h-48 w-80 bg-white mb-6 overflow-auto">
                <p className="text-gray-700">{codeOutput}</p>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed left-0 top-0 bottom-0 w-16 bg-gray-100 flex flex-col items-center py-4">
        <div className="flex flex-col gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200">
            <File size={20} className="text-gray-500" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg">
            <FolderOpen size={20} className="text-white" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200">
            <File size={20} className="text-gray-500" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-200">
            <File size={20} className="text-gray-500" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Submissions;
