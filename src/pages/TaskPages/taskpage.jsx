


  import React, { useState } from "react";
  import CodeEditor from "../Editor/editor";
  import { useNavigate } from "react-router-dom";
  import { useParams } from "react-router-dom";

  const TaskPage = ({ isSidebarExpanded }) => {
    const allTasks = [
      ...Array(40).fill(0).map((_, i) => ({
        id: i + 1,
        name: `Exercise 1-${i + 1}. Explain the concept of c and try to run the program on your system`,
        description: `This task requires you to explain the concept of C programming language and demonstrate how to run a basic C program on your system. Include examples and screenshots where appropriate.`,
        category: `DR-Module${1 + (i % 3)}`,
        difficulty: i % 3 === 0 ? "Hard" : i % 3 === 1 ? "Medium" : "Easy",
        time: "10:00:00",
        status: i % 3 === 0 ? "done" : i % 3 === 1 ? "fail" : "pending",
      })),
    ];
    const navigate = useNavigate();
    const {categoryId} = useParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isEditorFullscreen, setIsEditorFullscreen] = useState(false);
    const tasksPerPage = 8;

    const categories = ["All", ...new Set(allTasks.map((task) => task.category))];

    const filteredTasks = allTasks.filter((task) => {
      const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === "All" || task.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
    const startIndex = (currentPage - 1) * tasksPerPage;
    const currentTasks = filteredTasks.slice(startIndex, startIndex + tasksPerPage);

    const handlePageClick = (page) => {
      setCurrentPage(page);
    };

    const handleTaskClick = (taskId) => {
        navigate(`/user/category/${categoryId}/tasks/${taskId}`);
    };

    const handleCloseEditor = () => {
      setSelectedTask(null);
      setIsEditorFullscreen(false);
    };

    const toggleFullscreen = () => {
      setIsEditorFullscreen(!isEditorFullscreen);
    };

    // If a task is selected, show the editor view
    if (selectedTask) {
      return (
        <div className="flex-grow h-full flex flex-col bg-gray-300 p-2 overflow-hidden">
          <div className="w-full h-full bg-white border border-gray-300 rounded-lg flex flex-col">
            <div className="w-full flex justify-between items-center bg-white p-4 rounded-tl-lg rounded-tr-lg border-b border-gray-200">
              <div className="text-xl font-bold text-gray-800">Task Editor</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {isEditorFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                </button>
                <button
                  onClick={handleCloseEditor}
                  className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Back to Tasks
                </button>
              </div>
            </div>
            
            <div className="flex flex-1 overflow-hidden">
              {/* Task details panel - hidden in fullscreen mode */}
              {!isEditorFullscreen && (
                <div className="w-1/3 border-r border-gray-200 p-4 overflow-y-auto">
                  <h2 className="text-lg font-semibold mb-3">{selectedTask.name}</h2>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">Category:</span>
                      <span>{selectedTask.category}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">Difficulty:</span>
                      <span className={
                        selectedTask.difficulty === "Hard"
                          ? "text-red-500"
                          : selectedTask.difficulty === "Medium"
                          ? "text-blue-500"
                          : "text-green-500"
                      }>{selectedTask.difficulty}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">Time:</span>
                      <span>{selectedTask.time}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="font-medium mr-2">Status:</span>
                      <span>
                        {selectedTask.status === "done" ? (
                          <span className="text-green-600">Completed ✔️</span>
                        ) : selectedTask.status === "fail" ? (
                          <span className="text-red-500">Failed ❌</span>
                        ) : (
                          <span className="text-gray-400">Pending ⌛</span>
                        )}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-medium mb-2">Task Description:</h3>
                    <p className="text-gray-700">{selectedTask.description}</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <h3 className="font-medium mb-2">Instructions:</h3>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                      <li>Read the task description carefully</li>
                      <li>Write and test your code in the editor</li>
                      <li>Click "Run Code" to test your solution</li>
                      <li>Once satisfied, submit your solution</li>
                    </ol>
                  </div>
                </div>
              )}
              
              {/* Editor panel - becomes full width in fullscreen mode */}
              <div className={`${isEditorFullscreen ? "w-full" : "w-2/3"} overflow-hidden`}>
                <CodeEditor />
              </div>
            </div>
          </div>
        </div>
      );
    }

    // If no task is selected, show the tasks list view
    return (
      <div className="flex-grow h-full flex-col bg-gray-300 p-2 overflow-auto transition-all duration-300">
        <div className="w-full h-full bg-white border border-gray-300 rounded-lg flex flex-col items-center p-2">
          <div className="w-full flex justify-between items-center bg-white p-4 rounded-tl-lg rounded-tr-lg">
            <div className="text-xl font-bold text-gray-800">Dennis Ritchie</div>
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 border border-gray-300 rounded-lg"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg"
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-6 bg-gray-100 w-full h-full overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
              <thead className="bg-gray-100 text-gray-700 text-left text-sm">
                <tr>
                  <th className="px-4 py-2">Task Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Difficulty</th>
                  <th className="px-4 py-2">Estimation Time</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {currentTasks.map((task, index) => (
                  <tr 
                    key={index} 
                    className="border-t border-gray-200 hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleTaskClick(task.id)}
                  >
                    <td className="px-4 py-3">{task.name}</td>
                    <td className="px-4 py-3">{task.category}</td>
                    <td
                      className={`px-4 py-3 font-medium ${
                        task.difficulty === "Hard"
                          ? "text-red-500"
                          : task.difficulty === "Medium"
                          ? "text-blue-500"
                          : "text-green-500"
                      }`}
                    >
                      {task.difficulty}
                    </td>
                    <td className="px-4 py-3">{task.time}</td>
                    <td className="px-4 py-3">
                      {task.status === "done" ? (
                        <span className="text-green-600 text-xl">✔️</span>
                      ) : task.status === "fail" ? (
                        <span className="text-red-500 text-xl">❌</span>
                      ) : (
                        <span className="text-gray-400 text-xl">⌛</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="mt-4 flex justify-between items-center space-x-2 text-sm text-gray-600">
              <span>
                Showing data {startIndex + 1} to{" "}
                {Math.min(startIndex + tasksPerPage, filteredTasks.length)} of{" "}
                {filteredTasks.length}
              </span>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-1 rounded ${
                      page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default TaskPage;