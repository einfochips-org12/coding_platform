
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

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouse,
//   faAngleDown,
//   faEllipsisV,
//   faXmark,
//   faRightFromBracket,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFileLines,
//   faFlag,
//   faBookmark,
// } from "@fortawesome/free-regular-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { Link, useNavigate } from "react-router-dom";

// library.add(faHouse, faAngleDown, faEllipsisV, faXmark, faRightFromBracket);
// library.add(faFileLines, faFlag, faBookmark);

// const Sidebar = ({ isExpanded, toggleSidebar }) => {
//   const [showLogout, setShowLogout] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear(); // Clear any auth data
//     navigate("/login");   // Redirect to login page
//   };

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
//         <Link to="/category" className="w-full">
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

//           <div className="relative">
//             <button
//               onClick={() => setShowLogout((prev) => !prev)}
//               className="w-12 h-12 rounded-full flex justify-center items-center"
//             >
//               <FontAwesomeIcon icon="fa-solid fa-angle-down" className="text-gray-600" />
//             </button>

//             {showLogout && (
//               <div className="absolute right-0 bottom-14 bg-white shadow-md border rounded-md w-32 z-10">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 flex items-center space-x-2"
//                 >
//                   <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
//                   <span>Logout</span>
//                 </button>
//               </div>
//             )}
//           </div>
//         </footer>
//       )}
//     </div>
//   );
// };

// export default Sidebar;



// import { useState } from 'react';
// import { 
//   ChevronDown, 
//   Home, 
//   CheckSquare, 
//   Users, 
//   FileText, 
//   BookOpen, 
//   HelpCircle, 
//   MoreVertical,
//   UserPlus,
//   UserCheck
// } from 'lucide-react';

// export default function Sidebar() {
//   const [expanded, setExpanded] = useState(true);
//   const [activePage, setActivePage] = useState('Dashboard');

//   const menuItems = [
//     { id: 'dashboard', name: 'Dashboard', icon: Home },
//     { id: 'tasks', name: 'Tasks', icon: CheckSquare },
//     { id: 'users', name: 'Users', icon: Users },
//     { id: 'report', name: 'Report', icon: FileText },
//     { id: 'exam', name: 'Exam', icon: BookOpen },
//     { id: 'addMentor', name: 'Add Mentor', icon: UserPlus },
//     { id: 'addReviewer', name: 'Add Reviewer', icon: UserCheck },
//     { id: 'help', name: 'Help', icon: HelpCircle }
//   ];

//   const toggleSidebar = () => {
//     setExpanded(!expanded);
//   };

//   const navigateTo = (pageName) => {
//     setActivePage(pageName);
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`${expanded ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
//         {/* Logo */}
//         <div className="p-5 flex items-center justify-between">
//           {expanded && (
//             <div className="text-blue-600 font-bold text-xl">
//               infochips
//             </div>
//           )}
//           <button 
//             onClick={toggleSidebar} 
//             className={`p-2 rounded-full hover:bg-gray-200 ${!expanded ? 'mx-auto' : ''}`}
//           >
//             <MoreVertical size={20} />
//           </button>
//         </div>

//         {/* Menu Items */}
//         <div className="flex-1 px-3 py-2">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             return (
//               <div 
//                 key={item.id}
//                 onClick={() => navigateTo(item.name)}
//                 className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors
//                   ${activePage === item.name ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
//               >
//                 <Icon size={20} className={expanded ? 'mr-3' : 'mx-auto'} />
//                 {expanded && <span>{item.name}</span>}
//               </div>
//             );
//           })}
//         </div>

//         {/* User Profile */}
//         <div className={`p-4 border-t flex items-center ${expanded ? 'justify-between' : 'justify-center'}`}>
//           <div className={`flex items-center ${!expanded ? 'justify-center w-full' : ''}`}>
//             <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
//               <span className="text-xs font-medium">HS</span>
//             </div>
//             {expanded && (
//               <div className="ml-3">
//                 <div className="text-sm font-medium">Hemal Shah</div>
//                 <div className="text-xs text-gray-500">Product Manager</div>
//               </div>
//             )}
//           </div>
//           {expanded && <ChevronDown size={16} />}
//         </div>
//       </div>

//       {/* Main Content */}
     
//     </div>
//   );
// }




import { useState } from 'react';
import {
  ChevronDown,
  Home,
  CheckSquare,
  Users,
  FileText,
  BookOpen,
  HelpCircle,
  MoreVertical,
  UserPlus,
  UserCheck
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../Assests/eInfochips-Logo.png";
import { img } from 'framer-motion/client';
import ProfileMenu from './profile/profileMenu';
export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home, path: '/admin/AdminDashboard' },
    { id: 'tasks', name: 'Tasks', icon: CheckSquare, path: '/admin/category' },
    { id: 'users', name: 'Users', icon: Users, path: '/admin/users' },
    { id: 'report', name: 'Report', icon: FileText, path: '/report' },
    { id: 'exam', name: 'Exam', icon: BookOpen, path: '/exam' },
    { id: 'addMentor', name: 'Add Mentor', icon: UserPlus, path: '/add-mentor' },
    { id: 'addReviewer', name: 'Add Reviewer', icon: UserCheck, path: '/add-reviewer' },
    { id: 'help', name: 'Help', icon: HelpCircle, path: '/help' }
  ];

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${expanded ? 'w-52' : 'w-20'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 flex items-center justify-between">
          {expanded && (
            <img src={logo} alt="logo" className="w-24 h-10" />
          )}
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-full hover:bg-gray-200 ${!expanded ? 'mx-auto' : ''}`}
          >
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 px-3 py-2">
          {menuItems.map(({ id, name, icon: Icon, path }) => (
            <Link key={id} to={path}>
              <div
                className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors
                  ${location.pathname === path ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
              >
                <Icon size={20} className={expanded ? 'mr-3' : 'mx-auto'} />
                {expanded && <span>{name}</span>}
              </div>
            </Link>
          ))}
        </div>

        {/* User Profile */}
        {/* <div className={`p-4 border-t flex items-center ${expanded ? 'justify-between' : 'justify-center'}`}>
          <div className={`flex items-center ${!expanded ? 'justify-center w-full' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-xs font-medium">HS</span>
            </div>
            {expanded && (
              <div className="ml-3">
                <div className="text-sm font-medium">Hemal Shah</div>
                <div className="text-xs text-gray-500">Product Manager</div>
              </div>
            )}
          </div>
          {expanded && <ChevronDown size={16} />}
        </div> */}

        <ProfileMenu  expanded={expanded} />
      </div>
    </div>
  );
}
