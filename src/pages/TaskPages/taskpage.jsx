// // TaskPage.js
// import React from "react";

// const TaskPage = ({ isSidebarExpanded }) => {
//   const tasks = [
//     {
//       name: 'Exercise 1-1. Run the "hello, world" program...',
//       category: "DR-Module 1",
//       difficulty: "Medium",
//       time: "10:00:00",
//       status: "done",
//     },
//     {
//       name: "Exercise 1-2. Experiment to find out...",
//       category: "DR-Module 1",
//       difficulty: "Hard",
//       time: "10:00:00",
//       status: "done",
//     },
//     {
//       name: "Exercise 1-3. Modify the temperature...",
//       category: "DR-Module 1",
//       difficulty: "Medium",
//       time: "10:00:00",
//       status: "fail",
//     },
//     {
//       name: "Exercise 1-3. Modify the temperature...",
//       category: "DR-Module 1",
//       difficulty: "Medium",
//       time: "10:00:00",
//       status: "fail",
//     },
//     {
//       name: "Exercise 1-3. Modify the temperature...",
//       category: "DR-Module 1",
//       difficulty: "Medium",
//       time: "10:00:00",
//       status: "fail",
//     },
//     {
//       name: "Exercise 1-3. Modify the temperature...",
//       category: "DR-Module 1",
//       difficulty: "Medium",
//       time: "10:00:00",
//       status: "fail",
//     },
//     {
//       name: "Exercise 1-3. Modify the temperature...",
//       category: "DR-Module 1",
//       difficulty: "Medium",
//       time: "10:00:00",
//       status: "fail",
//     },
//     // Add more tasks...
//   ];
//   return (
//     <div className="flex-grow h-full flex-col bg-gray-300 p-2 overflow-auto transition-all duration-300">
//       <div className="w-full h-full bg-white border border-gray-300 rounded-lg flex flex-col items-center p-2">
//         <div className=" w-full flex justify-between items-center bg-white p-4 rounded-tl-lg rounded-tr-lg">
//           {/* Profile Name */}
//           <div className="text-xl font-bold text-gray-800">Dennis Ritchie</div>

//           {/* Search Bar */}
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="px-4 py-2 border border-gray-300 rounded-lg"
//             />

//             {/* Sort Dropdown */}
//             <div className="relative">
//               <button className="px-4 py-2 bg-gray-200 rounded-br-lg flex items-center">
//                 <span>Sort by: Newest</span>
//                 <svg
//                   className="ml-2 h-4 w-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 15l7-7 7 7"
//                   />
//                 </svg>
//               </button>
//               {/* Dropdown Menu (optional) */}
//               {/* <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-md">
//               <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100">Newest</button>
//               <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100">Oldest</button>
//             </div> */}
//             </div>
//           </div>
//         </div>
//         {/* <div className=" w-full h-full bg-red-300 flex justify-between p-2">
          
//           <div>
//             <p>Task Name</p>
//           </div>

          
//           <div className="flex justify-between space-x-1">
//             <div>Task Description</div>
//             <div>Task Description</div>
//             <div>Task Description</div>
//           </div>
         
//         </div> */}
//          <div className="p-6 bg-gray-100 w-full h-full overflow-x-auto">
//       <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
//         <thead className="bg-gray-100 text-gray-700 text-left text-sm">
//           <tr>
//             <th className="px-4 py-2">Task Name</th>
//             <th className="px-4 py-2">Sub Category</th>
//             <th className="px-4 py-2">Difficulty</th>
//             <th className="px-4 py-2">Estimation Time</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm text-gray-800">
//           {tasks.map((task, index) => (
//             <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
//               <td className="px-4 py-3">{task.name}</td>
//               <td className="px-4 py-3">{task.category}</td>
//               <td className={`px-4 py-3 font-medium ${
//                 task.difficulty === "Hard"
//                   ? "text-red-500"
//                   : task.difficulty === "Medium"
//                   ? "text-blue-500"
//                   : "text-green-500"
//               }`}>
//                 {task.difficulty}
//               </td>
//               <td className="px-4 py-3">{task.time}</td>
//               <td className="px-4 py-3">
//                 {task.status === "done" ? (
//                   <span className="text-green-600 text-xl">✔️</span>
//                 ) : task.status === "fail" ? (
//                   <span className="text-red-500 text-xl">❌</span>
//                 ) : (
//                   <span className="text-gray-400 text-xl">⌛</span>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination (static example) */}
//       <div className="mt-4 flex justify-between items-center space-x-2 text-sm text-gray-600">
//         <span>Showing data 1 to 8</span>
//         <div className="flex items-center space-x-1">
//           {[1, 2, 3, 4].map((page) => (
//             <button
//               key={page}
//               className={`px-3 py-1 rounded ${
//                 page === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//           <span>...</span>
//           <button className="px-3 py-1 bg-gray-200 rounded">40</button>
//         </div>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default TaskPage;


// import React, { useState } from "react";

// const TaskPage = ({ isSidebarExpanded }) => {
//   const allTasks = [
//     // Simulated larger data set
//     ...Array(40).fill(0).map((_, i) => ({
//       name: `Exercise 1-${i + 1}. Some task description...`,
//       category: "DR-Module 1",
//       difficulty: i % 3 === 0 ? "Hard" : i % 3 === 1 ? "Medium" : "Easy",
//       time: "10:00:00",
//       status: i % 3 === 0 ? "done" : i % 3 === 1 ? "fail" : "pending",
//     })),
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const tasksPerPage = 8;

//   const totalPages = Math.ceil(allTasks.length / tasksPerPage);
//   const startIndex = (currentPage - 1) * tasksPerPage;
//   const currentTasks = allTasks.slice(startIndex, startIndex + tasksPerPage);

//   const handlePageClick = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="flex-grow h-full flex-col bg-gray-300 p-2 overflow-auto transition-all duration-300">
//       <div className="w-full h-full bg-white border border-gray-300 rounded-lg flex flex-col items-center p-2">
//         <div className="w-full flex justify-between items-center bg-white p-4 rounded-tl-lg rounded-tr-lg">
//           <div className="text-xl font-bold text-gray-800">Dennis Ritchie</div>
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="px-4 py-2 border border-gray-300 rounded-lg"
//             />
//             <div className="relative">
//               <button className="px-4 py-2 bg-gray-200 rounded-br-lg flex items-center">
//                 <span>Sort by: Newest</span>
//                 <svg
//                   className="ml-2 h-4 w-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 15l7-7 7 7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 bg-gray-100 w-full h-full overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
//             <thead className="bg-gray-100 text-gray-700 text-left text-sm">
//               <tr>
//                 <th className="px-4 py-2">Task Name</th>
//                 <th className="px-4 py-2">Sub Category</th>
//                 <th className="px-4 py-2">Difficulty</th>
//                 <th className="px-4 py-2">Estimation Time</th>
//                 <th className="px-4 py-2">Status</th>
//               </tr>
//             </thead>
//             <tbody className="text-sm text-gray-800">
//               {currentTasks.map((task, index) => (
//                 <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
//                   <td className="px-4 py-3">{task.name}</td>
//                   <td className="px-4 py-3">{task.category}</td>
//                   <td
//                     className={`px-4 py-3 font-medium ${
//                       task.difficulty === "Hard"
//                         ? "text-red-500"
//                         : task.difficulty === "Medium"
//                         ? "text-blue-500"
//                         : "text-green-500"
//                     }`}
//                   >
//                     {task.difficulty}
//                   </td>
//                   <td className="px-4 py-3">{task.time}</td>
//                   <td className="px-4 py-3">
//                     {task.status === "done" ? (
//                       <span className="text-green-600 text-xl">✔️</span>
//                     ) : task.status === "fail" ? (
//                       <span className="text-red-500 text-xl">❌</span>
//                     ) : (
//                       <span className="text-gray-400 text-xl">⌛</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination Controls */}
//           <div className="mt-4 flex justify-between items-center space-x-2 text-sm text-gray-600">
//             <span>
//               Showing data {startIndex + 1} to{" "}
//               {Math.min(startIndex + tasksPerPage, allTasks.length)} of{" "}
//               {allTasks.length}
//             </span>
//             <div className="flex items-center space-x-1">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => handlePageClick(page)}
//                   className={`px-3 py-1 rounded ${
//                     page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskPage;


import React, { useState } from "react";

const TaskPage = ({ isSidebarExpanded }) => {
  const allTasks = [
    ...Array(40).fill(0).map((_, i) => ({
      name: `Exercise 1-${i + 1}. Explain the concept of c and try to run the program on your system Explain the concept of c and try to run the program on your system`,
      category: `DR-Module${1 + (i % 3)}`,
      difficulty: i % 3 === 0 ? "Hard" : i % 3 === 1 ? "Medium" : "Easy",
      time: "10:00:00",
      status: i % 3 === 0 ? "done" : i % 3 === 1 ? "fail" : "pending",
    })),
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
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
                <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 ">{task.name}</td>
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

