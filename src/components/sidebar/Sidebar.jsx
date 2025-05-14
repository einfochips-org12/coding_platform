
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouse,
//   faAngleDown,
//   faEllipsisV,
//   faXmark,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFileLines,
//   faFlag,
//   faBookmark,
// } from "@fortawesome/free-regular-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { Link } from "react-router-dom"; // ✅ Add this

// library.add(faHouse, faAngleDown, faEllipsisV, faXmark);
// library.add(faFileLines, faFlag, faBookmark);

// const Sidebar = ({ isExpanded, toggleSidebar }) => {
//   return (
//     <div
//       className={`h-screen ${
//         isExpanded ? "w-72" : "w-16"
//       } transition-all duration-300 bg-gray-200 flex flex-col justify-center items-center p-2 relative`}
//     >
//       {/* Toggle Button */}
//       <div className="w-full absolute top-3 right-6 flex justify-end pr-2 mt-2">
//         <button onClick={toggleSidebar}>
//           {isExpanded ? (
//             <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-gray-600" />
//           ) : (
//             <FontAwesomeIcon icon="fa-solid fa-ellipsis-v" className="text-gray-600" />
//           )}
//         </button>
//       </div>

//       {/* Menu Items */}
//       <div className="flex flex-col items-center mt-4 space-y-3 w-full text-gray-600">
//         <Link to="/dashboard" className="w-full">
//           <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg space-x-2">
//             <FontAwesomeIcon icon="fa-solid fa-house" />
//             {isExpanded && <p>Dashboard</p>}
//           </div>
//         </Link>
//         <Link to="/tasks" className="w-full">
//           <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg space-x-2">
//             <FontAwesomeIcon icon="fa-regular fa-file-lines" />
//             {isExpanded && <p>Tasks</p>}
//           </div>
//         </Link>
//         <Link to="/submissions" className="w-full">
//           <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg space-x-2">
//             <FontAwesomeIcon icon="fa-regular fa-flag" />
//             {isExpanded && <p>Submissions</p>}
//           </div>
//         </Link>
//         <Link to="/exam" className="w-full">
//           <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg space-x-2">
//             <FontAwesomeIcon icon="fa-regular fa-bookmark" />
//             {isExpanded && <p>Exam</p>}
//           </div>
//         </Link>
//       </div>

//       {/* Footer */}
//       {isExpanded && (
//         <footer className="absolute bottom-0 w-full h-24 flex justify-between items-center p-3">
//           <div className="w-48 h-20 flex justify-start items-center rounded-lg space-x-2 mt-2">
//             <div className="w-10 h-10 bg-white border-blue-500 bottom-5 border rounded-full flex justify-center items-center" />
//             <div className="flex flex-col items-start">
//               <p className="text-gray-600 text-sm">Vivek Kumar</p>
//               <p className="text-gray-400 text-xs">intern</p>
//             </div>
//           </div>
//           <div className="w-12 h-12 rounded-full flex justify-center items-center">
//             <FontAwesomeIcon icon="fa-solid fa-angle-down" className="text-gray-600" />
//           </div>
//         </footer>
//       )}
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAngleDown,
  faEllipsisV,
  faXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFileLines,
  faFlag,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link, useNavigate } from "react-router-dom";

library.add(faHouse, faAngleDown, faEllipsisV, faXmark, faRightFromBracket);
library.add(faFileLines, faFlag, faBookmark);

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear any auth data
    navigate("/login");   // Redirect to login page
  };

  return (
    <div
      className={`h-screen ${
        isExpanded ? "w-72" : "w-16"
      } transition-all duration-300 bg-gray-200 flex flex-col justify-center items-center p-2 relative`}
    >
      {/* Toggle Button */}
      <div className="w-full absolute top-3 right-6 flex justify-end pr-2 mt-2">
        <button onClick={toggleSidebar}>
          {isExpanded ? (
            <FontAwesomeIcon icon="fa-solid fa-xmark" className="text-gray-600" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-ellipsis-v" className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col items-center mt-4 space-y-3 w-full text-gray-600">
        <Link to="/dashboard" className="w-full">
          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg space-x-2">
            <FontAwesomeIcon icon="fa-solid fa-house" />
            {isExpanded && <p>Dashboard</p>}
          </div>
        </Link>
        <Link to="/category" className="w-full">
          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg space-x-2">
            <FontAwesomeIcon icon="fa-regular fa-file-lines" />
            {isExpanded && <p>Tasks</p>}
          </div>
        </Link>
        <Link to="/submissions" className="w-full">
          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg space-x-2">
            <FontAwesomeIcon icon="fa-regular fa-flag" />
            {isExpanded && <p>Submissions</p>}
          </div>
        </Link>
        <Link to="/exam" className="w-full">
          <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg space-x-2">
            <FontAwesomeIcon icon="fa-regular fa-bookmark" />
            {isExpanded && <p>Exam</p>}
          </div>
        </Link>
      </div>

      {/* Footer */}
      {isExpanded && (
        <footer className="absolute bottom-0 w-full h-24 flex justify-between items-center p-3">
          <div className="w-48 h-20 flex justify-start items-center rounded-lg space-x-2 mt-2">
            <div className="w-10 h-10 bg-white border-blue-500 bottom-5 border rounded-full flex justify-center items-center" />
            <div className="flex flex-col items-start">
              <p className="text-gray-600 text-sm">Vivek Kumar</p>
              <p className="text-gray-400 text-xs">intern</p>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowLogout((prev) => !prev)}
              className="w-12 h-12 rounded-full flex justify-center items-center"
            >
              <FontAwesomeIcon icon="fa-solid fa-angle-down" className="text-gray-600" />
            </button>

            {showLogout && (
              <div className="absolute right-0 bottom-14 bg-white shadow-md border rounded-md w-32 z-10">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </footer>
      )}
    </div>
  );
};

export default Sidebar;
