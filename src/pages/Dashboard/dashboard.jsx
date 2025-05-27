// import { useState } from 'react';
// import { Calendar, ChevronLeft, ChevronRight, User } from 'lucide-react';

// export default function Dashboard() {
//   // Sample data that would come from API in a real implementation
//   const userData = {
//     name: "Talviya",
//     role: "Intern",
//     tasks: {
//       total: 102,
//       completed: 3,
//       ongoing: 11,
//       remaining: 88
//     },
//     problems: {
//       solved: 146,
//       total: 3520,
//       attempting: 3,
//       difficulty: {
//         easy: { solved: 65, total: 873 },
//         medium: { solved: 68, total: 1825 },
//         hard: { solved: 13, total: 822 }
//       },
//       // All solved and ongoing problems
//       allProblems: [
//         // Solved problems
//         { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
//         { id: 2, title: "Reverse Integer", difficulty: "Medium", status: "Solved", date: "2022-11-25" },
//         { id: 3, title: "Valid Parentheses", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
//         { id: 4, title: "Merge Two Sorted Lists", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
//         { id: 5, title: "Maximum Subarray", difficulty: "Medium", status: "Solved", date: "2022-11-25" },
//         { id: 9, title: "Valid Anagram", difficulty: "Easy", status: "Solved", date: "2022-11-24" },
//         { id: 10, title: "Group Anagrams", difficulty: "Medium", status: "Solved", date: "2022-11-24" },
//         { id: 11, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Solved", date: "2022-11-24" },
//         { id: 13, title: "Climbing Stairs", difficulty: "Easy", status: "Solved", date: "2022-11-23" },
//         { id: 14, title: "Coin Change", difficulty: "Medium", status: "Solved", date: "2022-11-23" },
//         // These would continue to 146 solved problems in total
        
//         // Ongoing/attempting problems
//         { id: 147, title: "Binary Tree Level Order Traversal", difficulty: "Medium", status: "Attempting", date: "2022-11-25" },
//         { id: 148, title: "Dynamic Programming Problem", difficulty: "Hard", status: "Attempting", date: "2022-11-25" },
//         { id: 149, title: "Graph Traversal Problem", difficulty: "Hard", status: "Attempting", date: "2022-11-24" }
//       ]
//     },
//     // Daily submission data that would come from API
//     dailySubmissions: {
//       // Format: "YYYY-MM-DD": { solved: number, attempted: number, submissions: array of problems }
//       "2022-11-25": {
//         solved: 5,
//         attempted: 8,
//         submissions: [
//           { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved" },
//           { id: 2, title: "Reverse Integer", difficulty: "Medium", status: "Solved" },
//           { id: 3, title: "Valid Parentheses", difficulty: "Easy", status: "Solved" },
//           { id: 4, title: "Merge Two Sorted Lists", difficulty: "Easy", status: "Solved" },
//           { id: 5, title: "Maximum Subarray", difficulty: "Medium", status: "Solved" },
//           { id: 6, title: "Binary Tree Level Order Traversal", difficulty: "Medium", status: "Attempted" },
//           { id: 7, title: "Dynamic Programming Problem", difficulty: "Hard", status: "Attempted" },
//           { id: 8, title: "Graph Traversal Problem", difficulty: "Hard", status: "Attempted" }
//         ]
//       },
//       "2022-11-24": {
//         solved: 3,
//         attempted: 4,
//         submissions: [
//           { id: 9, title: "Valid Anagram", difficulty: "Easy", status: "Solved" },
//           { id: 10, title: "Group Anagrams", difficulty: "Medium", status: "Solved" },
//           { id: 11, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Solved" },
//           { id: 12, title: "Trapping Rain Water", difficulty: "Hard", status: "Attempted" }
//         ]
//       },
//       "2022-11-23": {
//         solved: 2,
//         attempted: 3,
//         submissions: [
//           { id: 13, title: "Climbing Stairs", difficulty: "Easy", status: "Solved" },
//           { id: 14, title: "Coin Change", difficulty: "Medium", status: "Solved" },
//           { id: 15, title: "Word Break", difficulty: "Hard", status: "Attempted" }
//         ]
//       }
//     }
//   };

//   // State for calendar
//   const [currentMonth, setCurrentMonth] = useState(new Date(2022, 10)); // November 2022
//   const [selectedDate, setSelectedDate] = useState("2022-11-25"); // Initially selected date
//   const [showDailyData, setShowDailyData] = useState(true);
//   const [showAllProblems, setShowAllProblems] = useState(false);
//   const [problemFilter, setProblemFilter] = useState("all"); // "all", "solved", "attempting"

//   // Helper function to format date as YYYY-MM-DD
//  const formatDate = (date) => {
//   return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
// };

//   // Generate calendar days
//   const generateCalendarDays = () => {
//     const year = currentMonth.getFullYear();
//     const month = currentMonth.getMonth();
    
//     const firstDay = new Date(year, month, 1);
//     const lastDay = new Date(year, month + 1, 0);
    
//     const daysInMonth = lastDay.getDate();
//     const startingDayOfWeek = firstDay.getDay();
    
//     const prevMonthLastDay = new Date(year, month, 0).getDate();
    
//     const days = [];
    
//     // Previous month days
//     for (let i = startingDayOfWeek - 1; i >= 0; i--) {
//       const date = new Date(year, month - 1, prevMonthLastDay - i);
//       const dateStr = formatDate(date);
//       days.push({ 
//         day: prevMonthLastDay - i, 
//         currentMonth: false, 
//         date: date,
//         dateStr: dateStr,
//         hasData: userData.dailySubmissions[dateStr] !== undefined
//       });
//     }
    
//     // Current month days
//     for (let i = 1; i <= daysInMonth; i++) {
//       const date = new Date(year, month, i);
//       const dateStr = formatDate(date);
//       days.push({ 
//         day: i, 
//         currentMonth: true, 
//         date: date,
//         dateStr: dateStr,
//         hasData: userData.dailySubmissions[dateStr] !== undefined,
//         isSelected: dateStr === selectedDate
//       });
//     }
    
//     // Next month days
//     const remainingDays = 42 - days.length;
//     for (let i = 1; i <= remainingDays; i++) {
//       const date = new Date(year, month + 1, i);
//       const dateStr = formatDate(date);
//       days.push({ 
//         day: i, 
//         currentMonth: false, 
//         date: date,
//         dateStr: dateStr,
//         hasData: userData.dailySubmissions[dateStr] !== undefined
//       });
//     }
    
//     return days;
//   };

//   const handleDateClick = (dateStr) => {
//     if (userData.dailySubmissions[dateStr]) {
//       setSelectedDate(dateStr);
//       setShowDailyData(true);
//     }
//   };
  
//   const days = generateCalendarDays();
//   const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  
//   // Previous and next month handlers
//   const prevMonth = () => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
//   };
  
//   const nextMonth = () => {
//     setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
//   };

//   // Calculate progress percentage for the circular progress indicator
//   const progressPercentage = (userData.problems.solved / userData.problems.total) * 100;
  
//   return (
//     <div className="flex h-screen bg-gray-50">
      
//       <div className="flex-1 overflow-auto p-6">
//         <div className="mb-6">
//           <h1 className="text-2xl font-semibold">Welcome back, Meet Talviya <span className="text-2xl">👋</span></h1>
//           <p className="text-gray-500">Intern</p>
//         </div>
        
//         {/* Task Status Cards */}
//         <div className="grid grid-cols-4 gap-4 mb-8">
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h2 className="text-gray-500 text-sm font-medium mb-2">Total Task</h2>
//             <p className="text-blue-600 text-3xl font-bold">{userData.tasks.total}</p>
//           </div>
          
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h2 className="text-gray-500 text-sm font-medium mb-2">Completed Task</h2>
//             <p className="text-blue-600 text-3xl font-bold">{userData.tasks.completed}</p>
//           </div>
          
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h2 className="text-gray-500 text-sm font-medium mb-2">Ongoing</h2>
//             <p className="text-red-500 text-3xl font-bold">{userData.tasks.ongoing}</p>
//           </div>
          
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h2 className="text-gray-500 text-sm font-medium mb-2">Remaining</h2>
//             <p className="text-green-500 text-3xl font-bold">{userData.tasks.remaining}</p>
//           </div>
//         </div>
        
//         {/* Chart and Calendar Section */}
//         <div className="grid grid-cols-2 gap-6">
//           {/* Circular Progress Chart */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <div className="flex justify-center mb-6">
//               <div className="relative w-48 h-48">
//                 {/* Background circle */}
//                 <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                
//                 {/* Progress circle */}
//                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//                   <circle 
//                     cx="50" 
//                     cy="50" 
//                     r="46" 
//                     fill="none" 
//                     stroke="#f3f4f6" 
//                     strokeWidth="8"
//                   />
//                   <circle 
//                     cx="50" 
//                     cy="50" 
//                     r="46" 
//                     fill="none" 
//                     stroke="url(#gradient)" 
//                     strokeWidth="8"
//                     strokeDasharray={2 * Math.PI * 46}
//                     strokeDashoffset={2 * Math.PI * 46 * (1 - progressPercentage / 100)}
//                     strokeLinecap="round"
//                     transform="rotate(-90 50 50)"
//                   />
//                   <defs>
//                     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#fcd34d" />
//                       <stop offset="50%" stopColor="#f97316" />
//                       <stop offset="100%" stopColor="#06b6d4" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
                
//                 {/* Center content */}
//                 <div 
//                   className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
//                   onClick={() => setShowAllProblems(true)}
//                 >
//                   <p className="text-3xl font-bold">{userData.problems.solved}</p>
//                   <p className="text-sm text-gray-500">/{userData.problems.total}</p>
//                   <div className="flex items-center mt-1">
//                     <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                     <span className="text-sm font-medium">Solved</span>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">{userData.problems.attempting} Attempting</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* All Problems Modal */}
//             {showAllProblems && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                 <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl max-h-3/4 overflow-hidden">
//                   <div className="p-4 border-b flex justify-between items-center">
//                     <h2 className="text-xl font-semibold">All Problems</h2>
//                     <button 
//                       onClick={() => setShowAllProblems(false)}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                       </svg>
//                     </button>
//                   </div>
                  
//                   <div className="p-4 border-b">
//                     <div className="flex space-x-2">
//                       <button 
//                         onClick={() => setProblemFilter("all")}
//                         className={`px-4 py-2 rounded-md ${problemFilter === "all" ? 
//                           "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                       >
//                         All
//                       </button>
//                       <button 
//                         onClick={() => setProblemFilter("solved")}
//                         className={`px-4 py-2 rounded-md ${problemFilter === "solved" ? 
//                           "bg-green-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                       >
//                         Solved ({userData.problems.solved})
//                       </button>
//                       <button 
//                         onClick={() => setProblemFilter("attempting")}
//                         className={`px-4 py-2 rounded-md ${problemFilter === "attempting" ? 
//                           "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                       >
//                         Attempting ({userData.problems.attempting})
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="p-4 overflow-y-auto max-h-96">
//                     <table className="min-w-full">
//                       <thead>
//                         <tr>
//                           <th className="text-left py-2 px-4 border-b">Title</th>
//                           <th className="text-left py-2 px-4 border-b">Difficulty</th>
//                           <th className="text-left py-2 px-4 border-b">Status</th>
//                           <th className="text-left py-2 px-4 border-b">Date</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {userData.problems.allProblems
//                           .filter(problem => {
//                             if (problemFilter === "solved") return problem.status === "Solved";
//                             if (problemFilter === "attempting") return problem.status === "Attempting";
//                             return true;
//                           })
//                           .map(problem => (
//                             <tr key={problem.id} className="hover:bg-gray-50">
//                               <td className="py-2 px-4 border-b">{problem.title}</td>
//                               <td className="py-2 px-4 border-b">
//                                 <span className={`px-2 py-1 rounded text-xs ${
//                                   problem.difficulty === "Easy" ? "bg-green-100 text-green-700" :
//                                   problem.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
//                                   "bg-red-100 text-red-700"
//                                 }`}>
//                                   {problem.difficulty}
//                                 </span>
//                               </td>
//                               <td className="py-2 px-4 border-b">
//                                 <span className={`${
//                                   problem.status === "Solved" ? "text-green-500" : "text-yellow-500"
//                                 } font-medium`}>
//                                   {problem.status}
//                                 </span>
//                               </td>
//                               <td className="py-2 px-4 border-b text-gray-500 text-sm">
//                                 {problem.date}
//                               </td>
//                             </tr>
//                           ))
//                         }
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             {/* Difficulty stats */}
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-green-50 p-3 rounded-lg">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-green-600">Easy</span>
//                 </div>
//                 <p className="text-sm font-bold">{userData.problems.difficulty.easy.solved}/{userData.problems.difficulty.easy.total}</p>
//               </div>
              
//               <div className="bg-yellow-50 p-3 rounded-lg">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-yellow-600">Med</span>
//                 </div>
//                 <p className="text-sm font-bold">{userData.problems.difficulty.medium.solved}/{userData.problems.difficulty.medium.total}</p>
//               </div>
              
//               <div className="bg-red-50 p-3 rounded-lg">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-red-600">Hard</span>
//                 </div>
//                 <p className="text-sm font-bold">{userData.problems.difficulty.hard.solved}/{userData.problems.difficulty.hard.total}</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Calendar */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Date</h2>
//               <div className="flex items-center text-gray-500 text-sm">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 <span>Choose Date</span>
//                 <button className="ml-2 text-gray-400">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
            
//             <div className="flex items-center justify-between mb-4">
//               <button onClick={prevMonth} className="p-1 rounded-full hover:bg-gray-100">
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
              
//               <h3 className="font-medium">
//                 {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
//               </h3>
              
//               <button onClick={nextMonth} className="p-1 rounded-full hover:bg-gray-100">
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
            
//             <div className="grid grid-cols-7 gap-1">
//               {/* Week day headers */}
//               {weekDays.map((day, index) => (
//                 <div key={index} className="text-center text-xs font-medium text-gray-500 py-1">
//                   {day}
//                 </div>
//               ))}
              
//               {/* Calendar days */}
//               {days.map((day, index) => (
//                 <div 
//                   key={index} 
//                   onClick={() => handleDateClick(day.dateStr)}
//                   className={`
//                     text-center py-1 text-sm rounded-full cursor-pointer
//                     ${!day.currentMonth ? 'text-gray-300' : 'text-gray-700'}
//                     ${day.isSelected ? 'bg-blue-600 text-white' : ''}
//                     ${day.hasData && !day.isSelected ? 'border border-blue-400' : ''}
//                     hover:bg-gray-100
//                   `}
//                 >
//                   {day.day}
//                 </div>
//               ))}
//             </div>
            
//             {/* Daily Submission Data */}
//             {showDailyData && userData.dailySubmissions[selectedDate] && (
//               <div className="mt-6 border-t pt-4">
//                 <div className="flex justify-between items-center mb-3">
//                   <h3 className="font-medium">Submissions on {selectedDate}</h3>
//                   <div className="text-sm">
//                     <span className="text-green-500 font-medium">{userData.dailySubmissions[selectedDate].solved} solved</span>
//                     <span className="mx-2">•</span>
//                     <span className="text-yellow-500 font-medium">{userData.dailySubmissions[selectedDate].attempted - userData.dailySubmissions[selectedDate].solved} attempted</span>
//                   </div>
//                 </div>
//                 <div className="max-h-48 overflow-y-auto">
//                   {userData.dailySubmissions[selectedDate].submissions.map((problem) => (
//                     <div key={problem.id} className="flex items-center justify-between py-2 border-b">
//                       <div className="flex items-center">
//                         <div className={`w-2 h-2 rounded-full mr-2 ${
//                           problem.status === 'Solved' ? 'bg-green-500' : 'bg-yellow-500'
//                         }`}></div>
//                         <span className="text-sm font-medium">{problem.title}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <span className={`text-xs px-2 py-1 rounded mr-2 ${
//                           problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
//                           problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
//                           'bg-red-100 text-red-700'
//                         }`}>
//                           {problem.difficulty}
//                         </span>
//                         <span className={`text-xs ${
//                           problem.status === 'Solved' ? 'text-green-500' : 'text-yellow-500'
//                         }`}>
//                           {problem.status}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from 'react';
// import { Calendar, ChevronLeft, ChevronRight, User } from 'lucide-react';

// export default function Dashboard() {
//   // Sample data that would come from API in a real implementation
//   const userData = {
//     name: "Talviya",
//     role: "Intern",
//     tasks: {
//       total: 102,
//       completed: 3,
//       ongoing: 11,
//       remaining: 88
//     },
//     problems: {
//       solved: 146,
//       total: 3520,
//       attempting: 3,
//       difficulty: {
//         easy: { solved: 65, total: 873 },
//         medium: { solved: 68, total: 1825 },
//         hard: { solved: 13, total: 822 }
//       },
//       // All solved and ongoing problems
//       allProblems: [
//         // Solved problems
//         { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
//         { id: 2, title: "Reverse Integer", difficulty: "Medium", status: "Solved", date: "2022-11-25" },
//         { id: 3, title: "Valid Parentheses", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
//         { id: 4, title: "Merge Two Sorted Lists", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
//         { id: 5, title: "Maximum Subarray", difficulty: "Medium", status: "Solved", date: "2022-11-25" },
//         { id: 9, title: "Valid Anagram", difficulty: "Easy", status: "Solved", date: "2022-11-24" },
//         { id: 10, title: "Group Anagrams", difficulty: "Medium", status: "Solved", date: "2022-11-24" },
//         { id: 11, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Solved", date: "2022-11-24" },
//         { id: 13, title: "Climbing Stairs", difficulty: "Easy", status: "Solved", date: "2022-11-23" },
//         { id: 14, title: "Coin Change", difficulty: "Medium", status: "Solved", date: "2022-11-23" },
//         // These would continue to 146 solved problems in total
        
//         // Ongoing/attempting problems
//         { id: 147, title: "Binary Tree Level Order Traversal", difficulty: "Medium", status: "Attempting", date: "2022-11-25" },
//         { id: 148, title: "Dynamic Programming Problem", difficulty: "Hard", status: "Attempting", date: "2022-11-25" },
//         { id: 149, title: "Graph Traversal Problem", difficulty: "Hard", status: "Attempting", date: "2022-11-24" }
//       ]
//     },
//     // Daily submission data that would come from API
//     dailySubmissions: {
//       // Format: "YYYY-MM-DD": { solved: number, attempted: number, submissions: array of problems }
//       "2022-11-25": {
//         solved: 5,
//         attempted: 8,
//         submissions: [
//           { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved" },
//           { id: 2, title: "Reverse Integer", difficulty: "Medium", status: "Solved" },
//           { id: 3, title: "Valid Parentheses", difficulty: "Easy", status: "Solved" },
//           { id: 4, title: "Merge Two Sorted Lists", difficulty: "Easy", status: "Solved" },
//           { id: 5, title: "Maximum Subarray", difficulty: "Medium", status: "Solved" },
//           { id: 6, title: "Binary Tree Level Order Traversal", difficulty: "Medium", status: "Attempted" },
//           { id: 7, title: "Dynamic Programming Problem", difficulty: "Hard", status: "Attempted" },
//           { id: 8, title: "Graph Traversal Problem", difficulty: "Hard", status: "Attempted" }
//         ]
//       },
//       "2022-11-24": {
//         solved: 3,
//         attempted: 4,
//         submissions: [
//           { id: 9, title: "Valid Anagram", difficulty: "Easy", status: "Solved" },
//           { id: 10, title: "Group Anagrams", difficulty: "Medium", status: "Solved" },
//           { id: 11, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Solved" },
//           { id: 12, title: "Trapping Rain Water", difficulty: "Hard", status: "Attempted" }
//         ]
//       },
//       "2022-11-23": {
//         solved: 2,
//         attempted: 3,
//         submissions: [
//           { id: 13, title: "Climbing Stairs", difficulty: "Easy", status: "Solved" },
//           { id: 14, title: "Coin Change", difficulty: "Medium", status: "Solved" },
//           { id: 15, title: "Word Break", difficulty: "Hard", status: "Attempted" }
//         ]
//       },
//       "2022-10-15": {
//         solved: 1,
//         attempted: 2,
//         submissions: [
//           { id: 16, title: "Two Pointers", difficulty: "Easy", status: "Solved" },
//           { id: 17, title: "Sliding Window", difficulty: "Medium", status: "Attempted" }
//         ]
//       },
//       "2022-12-05": {
//         solved: 2,
//         attempted: 3,
//         submissions: [
//           { id: 18, title: "Binary Search", difficulty: "Medium", status: "Solved" },
//           { id: 19, title: "Heap Sort", difficulty: "Hard", status: "Solved" },
//           { id: 20, title: "Graph DFS", difficulty: "Hard", status: "Attempted" }
//         ]
//       }
//     }
//   };

//   // State for calendar
//   const [currentMonth, setCurrentMonth] = useState(new Date(2022, 10)); // November 2022
//   const [selectedDate, setSelectedDate] = useState("2022-11-25"); // Initially selected date
//   const [showDailyData, setShowDailyData] = useState(true);
//   const [showAllProblems, setShowAllProblems] = useState(false);
//   const [problemFilter, setProblemFilter] = useState("all"); // "all", "solved", "attempting"

//   // Helper function to format date as YYYY-MM-DD
//   const formatDate = (date) => {
//     return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
//   };

//   // Generate calendar days - Fixed version
//   const generateCalendarDays = () => {
//     const year = currentMonth.getFullYear();
//     const month = currentMonth.getMonth();
    
//     // First day of current month
//     const firstDayOfMonth = new Date(year, month, 1);
//     // Last day of current month
//     const lastDayOfMonth = new Date(year, month + 1, 0);
//     // Number of days in current month
//     const daysInMonth = lastDayOfMonth.getDate();
//     // What day of week does the month start (0 = Sunday, 1 = Monday, etc.)
//     const startingDayOfWeek = firstDayOfMonth.getDay();
    
//     // Last day of previous month
//     const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
    
//     const days = [];
    
//     // Add previous month's trailing days
//     for (let i = startingDayOfWeek - 1; i >= 0; i--) {
//       const dayNum = lastDayOfPrevMonth - i;
//       const date = new Date(year, month - 1, dayNum);
//       const dateStr = formatDate(date);
//       days.push({
//         day: dayNum,
//         date: date,
//         dateStr: dateStr,
//         currentMonth: false,
//         hasData: userData.dailySubmissions[dateStr] !== undefined,
//         isSelected: dateStr === selectedDate,
//         isToday: formatDate(new Date()) === dateStr
//       });
//     }
    
//     // Add current month days
//     for (let day = 1; day <= daysInMonth; day++) {
//       const date = new Date(year, month, day);
//       const dateStr = formatDate(date);
//       days.push({
//         day: day,
//         date: date,
//         dateStr: dateStr,
//         currentMonth: true,
//         hasData: userData.dailySubmissions[dateStr] !== undefined,
//         isSelected: dateStr === selectedDate,
//         isToday: formatDate(new Date()) === dateStr
//       });
//     }
    
//     // Add next month's leading days to complete the 6-week grid (42 days)
//     const totalCells = 42;
//     const remainingCells = totalCells - days.length;
    
//     for (let day = 1; day <= remainingCells; day++) {
//       const date = new Date(year, month + 1, day);
//       const dateStr = formatDate(date);
//       days.push({
//         day: day,
//         date: date,
//         dateStr: dateStr,
//         currentMonth: false,
//         hasData: userData.dailySubmissions[dateStr] !== undefined,
//         isSelected: dateStr === selectedDate,
//         isToday: formatDate(new Date()) === dateStr
//       });
//     }
    
//     return days;
//   };

//   const handleDateClick = (dateInfo) => {
//     setSelectedDate(dateInfo.dateStr);
//     if (userData.dailySubmissions[dateInfo.dateStr]) {
//       setShowDailyData(true);
//     } else {
//       setShowDailyData(false);
//     }
//   };
  
//   const days = generateCalendarDays();
//   const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
//   // Previous and next month handlers
//   const prevMonth = () => {
//     const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
//     setCurrentMonth(newDate);
//   };
  
//   const nextMonth = () => {
//     const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
//     setCurrentMonth(newDate);
//   };

//   // Calculate progress percentage for the circular progress indicator
//   const progressPercentage = (userData.problems.solved / userData.problems.total) * 100;
  
//   return (
//     <div className="flex h-screen bg-gray-50">
      
//       <div className="flex-1 overflow-auto p-6">
//         <div className="mb-6">
//           <h1 className="text-2xl font-semibold">Welcome back, Meet Talviya <span className="text-2xl">👋</span></h1>
//           <p className="text-gray-500">Intern</p>
//         </div>
        
//         {/* Task Status Cards */}
//         <div className="grid grid-cols-4 gap-4 mb-8">
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h2 className="text-gray-500 text-sm font-medium mb-2">Total Task</h2>
//             <p className="text-blue-600 text-3xl font-bold">{userData.tasks.total}</p>
//           </div>
          
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h2 className="text-gray-500 text-sm font-medium mb-2">Completed Task</h2>
//             <p className="text-blue-600 text-3xl font-bold">{userData.tasks.completed}</p>
//           </div>
          
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h2 className="text-gray-500 text-sm font-medium mb-2">Ongoing</h2>
//             <p className="text-red-500 text-3xl font-bold">{userData.tasks.ongoing}</p>
//           </div>
          
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h2 className="text-gray-500 text-sm font-medium mb-2">Remaining</h2>
//             <p className="text-green-500 text-3xl font-bold">{userData.tasks.remaining}</p>
//           </div>
//         </div>
        
//         {/* Chart and Calendar Section */}
//         <div className="grid grid-cols-2 gap-6">
//           {/* Circular Progress Chart */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <div className="flex justify-center mb-6">
//               <div className="relative w-48 h-48">
//                 {/* Background circle */}
//                 <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                
//                 {/* Progress circle */}
//                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
//                   <circle 
//                     cx="50" 
//                     cy="50" 
//                     r="46" 
//                     fill="none" 
//                     stroke="#f3f4f6" 
//                     strokeWidth="8"
//                   />
//                   <circle 
//                     cx="50" 
//                     cy="50" 
//                     r="46" 
//                     fill="none" 
//                     stroke="url(#gradient)" 
//                     strokeWidth="8"
//                     strokeDasharray={2 * Math.PI * 46}
//                     strokeDashoffset={2 * Math.PI * 46 * (1 - progressPercentage / 100)}
//                     strokeLinecap="round"
//                     transform="rotate(-90 50 50)"
//                   />
//                   <defs>
//                     <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#fcd34d" />
//                       <stop offset="50%" stopColor="#f97316" />
//                       <stop offset="100%" stopColor="#06b6d4" />
//                     </linearGradient>
//                   </defs>
//                 </svg>
                
//                 {/* Center content */}
//                 <div 
//                   className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
//                   onClick={() => setShowAllProblems(true)}
//                 >
//                   <p className="text-3xl font-bold">{userData.problems.solved}</p>
//                   <p className="text-sm text-gray-500">/{userData.problems.total}</p>
//                   <div className="flex items-center mt-1">
//                     <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                     </svg>
//                     <span className="text-sm font-medium">Solved</span>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">{userData.problems.attempting} Attempting</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* All Problems Modal */}
//             {showAllProblems && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                 <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl max-h-3/4 overflow-hidden">
//                   <div className="p-4 border-b flex justify-between items-center">
//                     <h2 className="text-xl font-semibold">All Problems</h2>
//                     <button 
//                       onClick={() => setShowAllProblems(false)}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                       </svg>
//                     </button>
//                   </div>
                  
//                   <div className="p-4 border-b">
//                     <div className="flex space-x-2">
//                       <button 
//                         onClick={() => setProblemFilter("all")}
//                         className={`px-4 py-2 rounded-md ${problemFilter === "all" ? 
//                           "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                       >
//                         All
//                       </button>
//                       <button 
//                         onClick={() => setProblemFilter("solved")}
//                         className={`px-4 py-2 rounded-md ${problemFilter === "solved" ? 
//                           "bg-green-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                       >
//                         Solved ({userData.problems.solved})
//                       </button>
//                       <button 
//                         onClick={() => setProblemFilter("attempting")}
//                         className={`px-4 py-2 rounded-md ${problemFilter === "attempting" ? 
//                           "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                       >
//                         Attempting ({userData.problems.attempting})
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="p-4 overflow-y-auto max-h-96">
//                     <table className="min-w-full">
//                       <thead>
//                         <tr>
//                           <th className="text-left py-2 px-4 border-b">Title</th>
//                           <th className="text-left py-2 px-4 border-b">Difficulty</th>
//                           <th className="text-left py-2 px-4 border-b">Status</th>
//                           <th className="text-left py-2 px-4 border-b">Date</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {userData.problems.allProblems
//                           .filter(problem => {
//                             if (problemFilter === "solved") return problem.status === "Solved";
//                             if (problemFilter === "attempting") return problem.status === "Attempting";
//                             return true;
//                           })
//                           .map(problem => (
//                             <tr key={problem.id} className="hover:bg-gray-50">
//                               <td className="py-2 px-4 border-b">{problem.title}</td>
//                               <td className="py-2 px-4 border-b">
//                                 <span className={`px-2 py-1 rounded text-xs ${
//                                   problem.difficulty === "Easy" ? "bg-green-100 text-green-700" :
//                                   problem.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
//                                   "bg-red-100 text-red-700"
//                                 }`}>
//                                   {problem.difficulty}
//                                 </span>
//                               </td>
//                               <td className="py-2 px-4 border-b">
//                                 <span className={`${
//                                   problem.status === "Solved" ? "text-green-500" : "text-yellow-500"
//                                 } font-medium`}>
//                                   {problem.status}
//                                 </span>
//                               </td>
//                               <td className="py-2 px-4 border-b text-gray-500 text-sm">
//                                 {problem.date}
//                               </td>
//                             </tr>
//                           ))
//                         }
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             {/* Difficulty stats */}
//             <div className="grid grid-cols-3 gap-2">
//               <div className="bg-green-50 p-3 rounded-lg">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-green-600">Easy</span>
//                 </div>
//                 <p className="text-sm font-bold">{userData.problems.difficulty.easy.solved}/{userData.problems.difficulty.easy.total}</p>
//               </div>
              
//               <div className="bg-yellow-50 p-3 rounded-lg">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-yellow-600">Med</span>
//                 </div>
//                 <p className="text-sm font-bold">{userData.problems.difficulty.medium.solved}/{userData.problems.difficulty.medium.total}</p>
//               </div>
              
//               <div className="bg-red-50 p-3 rounded-lg">
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-red-600">Hard</span>
//                 </div>
//                 <p className="text-sm font-bold">{userData.problems.difficulty.hard.solved}/{userData.problems.difficulty.hard.total}</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Calendar */}
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold">Date</h2>
//               <div className="flex items-center text-gray-500 text-sm">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 <span>Choose Date</span>
//               </div>
//             </div>
            
//             {/* Calendar Header with Navigation */}
//             <div className="flex items-center justify-between mb-4">
//               <button 
//                 onClick={prevMonth} 
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
              
//               <h3 className="font-semibold text-lg">
//                 {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
//               </h3>
              
//               <button 
//                 onClick={nextMonth} 
//                 className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
            
//             {/* Calendar Grid */}
//             <div className="grid grid-cols-7 gap-1 mb-2">
//               {/* Week day headers */}
//               {weekDays.map((day, index) => (
//                 <div key={index} className="text-center text-xs font-semibold text-gray-600 py-2">
//                   {day}
//                 </div>
//               ))}
//             </div>
            
//             <div className="grid grid-cols-7 gap-1">
//               {/* Calendar days */}
//               {days.map((dayInfo, index) => (
//                 <button
//                   key={index} 
//                   onClick={() => handleDateClick(dayInfo)}
//                   className={`
//                     h-10 w-full text-center text-sm rounded-lg transition-all duration-200 relative
//                     ${!dayInfo.currentMonth 
//                       ? 'text-gray-300 hover:bg-gray-50' 
//                       : 'text-gray-700 hover:bg-blue-50'
//                     }
//                     ${dayInfo.isSelected 
//                       ? 'bg-blue-600 text-white hover:bg-blue-700' 
//                       : ''
//                     }
//                     ${dayInfo.isToday && !dayInfo.isSelected
//                       ? 'bg-blue-100 text-blue-600 font-semibold'
//                       : ''
//                     }
//                     ${dayInfo.hasData && !dayInfo.isSelected && !dayInfo.isToday
//                       ? 'ring-2 ring-blue-300'
//                       : ''
//                     }
//                   `}
//                 >
//                   {dayInfo.day}
//                   {dayInfo.hasData && (
//                     <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
//                       dayInfo.isSelected ? 'bg-white' : 'bg-blue-500'
//                     }`}></div>
//                   )}
//                 </button>
//               ))}
//             </div>
            
//             {/* Daily Submission Data */}
//             {showDailyData && userData.dailySubmissions[selectedDate] && (
//               <div className="mt-6 border-t pt-4">
//                 <div className="flex justify-between items-center mb-3">
//                   <h3 className="font-medium">Submissions on {selectedDate}</h3>
//                   <div className="text-sm">
//                     <span className="text-green-500 font-medium">{userData.dailySubmissions[selectedDate].solved} solved</span>
//                     <span className="mx-2 text-gray-300">•</span>
//                     <span className="text-yellow-500 font-medium">{userData.dailySubmissions[selectedDate].attempted - userData.dailySubmissions[selectedDate].solved} attempted</span>
//                   </div>
//                 </div>
//                 <div className="max-h-48 overflow-y-auto">
//                   {userData.dailySubmissions[selectedDate].submissions.map((problem) => (
//                     <div key={problem.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
//                       <div className="flex items-center">
//                         <div className={`w-2 h-2 rounded-full mr-3 ${
//                           problem.status === 'Solved' ? 'bg-green-500' : 'bg-yellow-500'
//                         }`}></div>
//                         <span className="text-sm font-medium">{problem.title}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <span className={`text-xs px-2 py-1 rounded ${
//                           problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
//                           problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
//                           'bg-red-100 text-red-700'
//                         }`}>
//                           {problem.difficulty}
//                         </span>
//                         <span className={`text-xs font-medium ${
//                           problem.status === 'Solved' ? 'text-green-500' : 'text-yellow-500'
//                         }`}>
//                           {problem.status}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
            
//             {/* No data message */}
//             {selectedDate && !userData.dailySubmissions[selectedDate] && (
//               <div className="mt-6 border-t pt-4 text-center text-gray-500">
//                 <p className="text-sm">No submissions on {selectedDate}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, User, Menu, X } from 'lucide-react';

export default function Dashboard() {
  // Sample data that would come from API in a real implementation
  const userData = {
    name: "Talviya",
    role: "Intern",
    tasks: {
      total: 102,
      completed: 3,
      ongoing: 11,
      remaining: 88
    },
    problems: {
      solved: 146,
      total: 3520,
      attempting: 3,
      difficulty: {
        easy: { solved: 65, total: 873 },
        medium: { solved: 68, total: 1825 },
        hard: { solved: 13, total: 822 }
      },
      // All solved and ongoing problems
      allProblems: [
        // Solved problems
        { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
        { id: 2, title: "Reverse Integer", difficulty: "Medium", status: "Solved", date: "2022-11-25" },
        { id: 3, title: "Valid Parentheses", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
        { id: 4, title: "Merge Two Sorted Lists", difficulty: "Easy", status: "Solved", date: "2022-11-25" },
        { id: 5, title: "Maximum Subarray", difficulty: "Medium", status: "Solved", date: "2022-11-25" },
        { id: 9, title: "Valid Anagram", difficulty: "Easy", status: "Solved", date: "2022-11-24" },
        { id: 10, title: "Group Anagrams", difficulty: "Medium", status: "Solved", date: "2022-11-24" },
        { id: 11, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Solved", date: "2022-11-24" },
        { id: 13, title: "Climbing Stairs", difficulty: "Easy", status: "Solved", date: "2022-11-23" },
        { id: 14, title: "Coin Change", difficulty: "Medium", status: "Solved", date: "2022-11-23" },
        // These would continue to 146 solved problems in total
        
        // Ongoing/attempting problems
        { id: 147, title: "Binary Tree Level Order Traversal", difficulty: "Medium", status: "Attempting", date: "2022-11-25" },
        { id: 148, title: "Dynamic Programming Problem", difficulty: "Hard", status: "Attempting", date: "2022-11-25" },
        { id: 149, title: "Graph Traversal Problem", difficulty: "Hard", status: "Attempting", date: "2022-11-24" }
      ]
    },
    // Daily submission data that would come from API
    dailySubmissions: {
      // Format: "YYYY-MM-DD": { solved: number, attempted: number, submissions: array of problems }
      "2022-11-25": {
        solved: 5,
        attempted: 8,
        submissions: [
          { id: 1, title: "Two Sum", difficulty: "Easy", status: "Solved" },
          { id: 2, title: "Reverse Integer", difficulty: "Medium", status: "Solved" },
          { id: 3, title: "Valid Parentheses", difficulty: "Easy", status: "Solved" },
          { id: 4, title: "Merge Two Sorted Lists", difficulty: "Easy", status: "Solved" },
          { id: 5, title: "Maximum Subarray", difficulty: "Medium", status: "Solved" },
          { id: 6, title: "Binary Tree Level Order Traversal", difficulty: "Medium", status: "Attempted" },
          { id: 7, title: "Dynamic Programming Problem", difficulty: "Hard", status: "Attempted" },
          { id: 8, title: "Graph Traversal Problem", difficulty: "Hard", status: "Attempted" }
        ]
      },
      "2022-11-24": {
        solved: 3,
        attempted: 4,
        submissions: [
          { id: 9, title: "Valid Anagram", difficulty: "Easy", status: "Solved" },
          { id: 10, title: "Group Anagrams", difficulty: "Medium", status: "Solved" },
          { id: 11, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", status: "Solved" },
          { id: 12, title: "Trapping Rain Water", difficulty: "Hard", status: "Attempted" }
        ]
      },
      "2022-11-23": {
        solved: 2,
        attempted: 3,
        submissions: [
          { id: 13, title: "Climbing Stairs", difficulty: "Easy", status: "Solved" },
          { id: 14, title: "Coin Change", difficulty: "Medium", status: "Solved" },
          { id: 15, title: "Word Break", difficulty: "Hard", status: "Attempted" }
        ]
      },
      "2022-10-15": {
        solved: 1,
        attempted: 2,
        submissions: [
          { id: 16, title: "Two Pointers", difficulty: "Easy", status: "Solved" },
          { id: 17, title: "Sliding Window", difficulty: "Medium", status: "Attempted" }
        ]
      },
      "2022-12-05": {
        solved: 2,
        attempted: 3,
        submissions: [
          { id: 18, title: "Binary Search", difficulty: "Medium", status: "Solved" },
          { id: 19, title: "Heap Sort", difficulty: "Hard", status: "Solved" },
          { id: 20, title: "Graph DFS", difficulty: "Hard", status: "Attempted" }
        ]
      }
    }
  };

  // State for calendar
  const [currentMonth, setCurrentMonth] = useState(new Date(2022, 10)); // November 2022
  const [selectedDate, setSelectedDate] = useState("2022-11-25"); // Initially selected date
  const [showDailyData, setShowDailyData] = useState(true);
  const [showAllProblems, setShowAllProblems] = useState(false);
  const [problemFilter, setProblemFilter] = useState("all"); // "all", "solved", "attempting"

  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  // Generate calendar days - Modified to only show current month dates
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of current month
    const firstDayOfMonth = new Date(year, month, 1);
    // Last day of current month
    const lastDayOfMonth = new Date(year, month + 1, 0);
    // Number of days in current month
    const daysInMonth = lastDayOfMonth.getDate();
    // What day of week does the month start (0 = Sunday, 1 = Monday, etc.)
    const startingDayOfWeek = firstDayOfMonth.getDay();
    
    const days = [];
    
    // Add empty cells for days before the month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({
        day: null,
        date: null,
        dateStr: null,
        currentMonth: false,
        hasData: false,
        isSelected: false,
        isToday: false,
        isEmpty: true
      });
    }
    
    // Add current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = formatDate(date);
      days.push({
        day: day,
        date: date,
        dateStr: dateStr,
        currentMonth: true,
        hasData: userData.dailySubmissions[dateStr] !== undefined,
        isSelected: dateStr === selectedDate,
        isToday: formatDate(new Date()) === dateStr,
        isEmpty: false
      });
    }
    
    return days;
  };

  const handleDateClick = (dateInfo) => {
    if (dateInfo.isEmpty) return;
    
    setSelectedDate(dateInfo.dateStr);
    if (userData.dailySubmissions[dateInfo.dateStr]) {
      setShowDailyData(true);
    } else {
      setShowDailyData(false);
    }
  };
  
  const days = generateCalendarDays();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Previous and next month handlers
  const prevMonth = () => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    setCurrentMonth(newDate);
  };
  
  const nextMonth = () => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    setCurrentMonth(newDate);
  };

  // Calculate progress percentage for the circular progress indicator
  const progressPercentage = (userData.problems.solved / userData.problems.total) * 100;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-semibold">Welcome back, Meet Talviya <span className="text-xl md:text-2xl">👋</span></h1>
          <p className="text-gray-500">Intern</p>
        </div>
        
        {/* Task Status Cards - Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
            <h2 className="text-gray-500 text-xs md:text-sm font-medium mb-2">Total Task</h2>
            <p className="text-blue-600 text-2xl md:text-3xl font-bold">{userData.tasks.total}</p>
          </div>
          
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
            <h2 className="text-gray-500 text-xs md:text-sm font-medium mb-2">Completed Task</h2>
            <p className="text-blue-600 text-2xl md:text-3xl font-bold">{userData.tasks.completed}</p>
          </div>
          
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
            <h2 className="text-gray-500 text-xs md:text-sm font-medium mb-2">Ongoing</h2>
            <p className="text-red-500 text-2xl md:text-3xl font-bold">{userData.tasks.ongoing}</p>
          </div>
          
          <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
            <h2 className="text-gray-500 text-xs md:text-sm font-medium mb-2">Remaining</h2>
            <p className="text-green-500 text-2xl md:text-3xl font-bold">{userData.tasks.remaining}</p>
          </div>
        </div>
        
        {/* Chart and Calendar Section - Responsive Layout */}
        <div className="grid lg:grid-cols-2 overflow-auto lg:overflow-hidden gap-6">
         
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4 md:mb-6">
              <div className="relative w-40 h-40 md:w-48 md:h-48">
               
                <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                
                
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="46" 
                    fill="none" 
                    stroke="#f3f4f6" 
                    strokeWidth="8"
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="46" 
                    fill="none" 
                    stroke="url(#gradient)" 
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 46}
                    strokeDashoffset={2 * Math.PI * 46 * (1 - progressPercentage / 100)}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fcd34d" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center content */}
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => setShowAllProblems(true)}
                >
                  <p className="text-2xl md:text-3xl font-bold">{userData.problems.solved}</p>
                  <p className="text-sm text-gray-500">/{userData.problems.total}</p>
                  <div className="flex items-center mt-1">
                    <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm font-medium">Solved</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{userData.problems.attempting} Attempting</p>
                </div>
              </div>
            </div>
            
            {/* All Problems Modal */}
            {showAllProblems && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
                  <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-lg md:text-xl font-semibold">All Problems</h2>
                    <button 
                      onClick={() => setShowAllProblems(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="p-4 border-b">
                    <div className="flex flex-wrap gap-2">
                      <button 
                        onClick={() => setProblemFilter("all")}
                        className={`px-3 md:px-4 py-2 rounded-md text-sm ${problemFilter === "all" ? 
                          "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                      >
                        All
                      </button>
                      <button 
                        onClick={() => setProblemFilter("solved")}
                        className={`px-3 md:px-4 py-2 rounded-md text-sm ${problemFilter === "solved" ? 
                          "bg-green-600 text-white" : "bg-gray-100 text-gray-700"}`}
                      >
                        Solved ({userData.problems.solved})
                      </button>
                      <button 
                        onClick={() => setProblemFilter("attempting")}
                        className={`px-3 md:px-4 py-2 rounded-md text-sm ${problemFilter === "attempting" ? 
                          "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700"}`}
                      >
                        Attempting ({userData.problems.attempting})
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 overflow-y-auto" style={{maxHeight: 'calc(90vh - 200px)'}}>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="text-left py-2 px-2 md:px-4 border-b text-sm">Title</th>
                            <th className="text-left py-2 px-2 md:px-4 border-b text-sm">Difficulty</th>
                            <th className="text-left py-2 px-2 md:px-4 border-b text-sm">Status</th>
                            <th className="text-left py-2 px-2 md:px-4 border-b text-sm">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userData.problems.allProblems
                            .filter(problem => {
                              if (problemFilter === "solved") return problem.status === "Solved";
                              if (problemFilter === "attempting") return problem.status === "Attempting";
                              return true;
                            })
                            .map(problem => (
                              <tr key={problem.id} className="hover:bg-gray-50">
                                <td className="py-2 px-2 md:px-4 border-b text-sm">{problem.title}</td>
                                <td className="py-2 px-2 md:px-4 border-b">
                                  <span className={`px-2 py-1 rounded text-xs ${
                                    problem.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                                    problem.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                                    "bg-red-100 text-red-700"
                                  }`}>
                                    {problem.difficulty}
                                  </span>
                                </td>
                                <td className="py-2 px-2 md:px-4 border-b">
                                  <span className={`text-sm ${
                                    problem.status === "Solved" ? "text-green-500" : "text-yellow-500"
                                  } font-medium`}>
                                    {problem.status}
                                  </span>
                                </td>
                                <td className="py-2 px-2 md:px-4 border-b text-gray-500 text-xs">
                                  {problem.date}
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Difficulty stats */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-green-50 p-2 md:p-3 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="text-xs md:text-sm font-medium text-green-600">Easy</span>
                </div>
                <p className="text-xs md:text-sm font-bold">{userData.problems.difficulty.easy.solved}/{userData.problems.difficulty.easy.total}</p>
              </div>
              
              <div className="bg-yellow-50 p-2 md:p-3 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="text-xs md:text-sm font-medium text-yellow-600">Med</span>
                </div>
                <p className="text-xs md:text-sm font-bold">{userData.problems.difficulty.medium.solved}/{userData.problems.difficulty.medium.total}</p>
              </div>
              
              <div className="bg-red-50 p-2 md:p-3 rounded-lg">
                <div className="flex justify-between mb-1">
                  <span className="text-xs md:text-sm font-medium text-red-600">Hard</span>
                </div>
                <p className="text-xs md:text-sm font-bold">{userData.problems.difficulty.hard.solved}/{userData.problems.difficulty.hard.total}</p>
              </div>
            </div>
          </div>
          
          {/* Calendar */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Date</h2>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Choose Date</span>
              </div>
            </div>
            
            {/* Calendar Header with Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button 
                onClick={prevMonth} 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <h3 className="font-semibold text-base md:text-lg">
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h3>
              
              <button 
                onClick={nextMonth} 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {/* Week day headers */}
              {weekDays.map((day, index) => (
                <div key={index} className="text-center text-xs font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {/* Calendar days */}
              {days.map((dayInfo, index) => (
                <button
                  key={index} 
                  onClick={() => handleDateClick(dayInfo)}
                  disabled={dayInfo.isEmpty}
                  className={`
                    h-8 md:h-10 w-full text-center text-sm rounded-lg transition-all duration-200 relative
                    ${dayInfo.isEmpty 
                      ? 'cursor-default' 
                      : 'text-gray-700 hover:bg-blue-50 cursor-pointer'
                    }
                    ${dayInfo.isSelected 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : ''
                    }
                    ${dayInfo.isToday && !dayInfo.isSelected
                      ? 'bg-blue-100 text-blue-600 font-semibold'
                      : ''
                    }
                    ${dayInfo.hasData && !dayInfo.isSelected && !dayInfo.isToday
                      ? 'ring-2 ring-blue-300'
                      : ''
                    }
                  `}
                >
                  {dayInfo.day}
                  {dayInfo.hasData && (
                    <div className={`absolute bottom-0.5 md:bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      dayInfo.isSelected ? 'bg-white' : 'bg-blue-500'
                    }`}></div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Daily Submission Data */}
            {showDailyData && userData.dailySubmissions[selectedDate] && (
              <div className="mt-4 md:mt-6 border-t pt-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">
                  <h3 className="font-medium text-sm md:text-base">Submissions on {selectedDate}</h3>
                  <div className="text-xs md:text-sm">
                    <span className="text-green-500 font-medium">{userData.dailySubmissions[selectedDate].solved} solved</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-yellow-500 font-medium">{userData.dailySubmissions[selectedDate].attempted - userData.dailySubmissions[selectedDate].solved} attempted</span>
                  </div>
                </div>
                <div className="max-h-32 md:max-h-48 overflow-y-auto">
                  {userData.dailySubmissions[selectedDate].submissions.map((problem) => (
                    <div key={problem.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                      <div className="flex items-center min-w-0 flex-1">
                        <div className={`w-2 h-2 rounded-full mr-2 md:mr-3 flex-shrink-0 ${
                          problem.status === 'Solved' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <span className="text-xs md:text-sm font-medium truncate">{problem.title}</span>
                      </div>
                      <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
                        <span className={`text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded ${
                          problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {problem.difficulty}
                        </span>
                        <span className={`text-xs font-medium ${
                          problem.status === 'Solved' ? 'text-green-500' : 'text-yellow-500'
                        }`}>
                          {problem.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* No data message */}
            {selectedDate && !userData.dailySubmissions[selectedDate] && (
              <div className="mt-4 md:mt-6 border-t pt-4 text-center text-gray-500">
                <p className="text-sm">No submissions on {selectedDate}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}