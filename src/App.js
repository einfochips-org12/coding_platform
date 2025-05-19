
// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Sidebar from "./components/sidebar/Sidebar";
// import TaskPage from "./pages/TaskPages/taskpage";
// import LoginForm from "./pages/Login/Login";
// import SignupForm from "./pages/Signup/signup";
// import Dashboard from "./pages/Dashboard/dashboard";

// import CategoryPage from "./pages/TaskPages/Category";
// import Submissions from "./pages/submission/submission";
// import EditorPage from "./pages/Editor/editor";
// const App = () => {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const toggleSidebar = () => setIsExpanded((prev) => !prev);

//   return (
//     <BrowserRouter>
//       <div className="flex h-screen overflow-hidden">
//         {/* Sidebar only on authenticated routes */}

//         <Routes>
//           {/* Public */}
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/signup" element={<SignupForm />} />

//           {/* Protected area (with sidebar) */}
//           <Route
//             path="/*"
//             element={
//               <>
//                 <Sidebar
//                   isExpanded={isExpanded}
//                   toggleSidebar={toggleSidebar}
//                 />
//                 <div className="flex-1">
//                   <Routes>
//                     <Route path="/dashboard" element={<Dashboard />} />
//                     <Route path="/category" element={<CategoryPage />} />
//                     <Route
//                       path="/category/:categoryId/tasks"
//                       element={<TaskPage />}
//                     />

//                     <Route
//                       path="/category/:categoryId/tasks/:taskId"
//                       element={<EditorPage />}
//                     />

//                     <Route path="/submissions" element={<Submissions />} />

//                     <Route
//                       path="*"
//                       element={<Navigate to="/dashboard" replace />}
//                     />
//                   </Routes>
//                 </div>
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Admin/Sidebar";
import TaskPage from "./pages/TaskPages/taskpage";
import LoginForm from "./pages/Login/Login";
import SignupForm from "./pages/Signup/signup";
import Dashboard from "./pages/Dashboard/dashboard";
import CategoryPage from "./pages/TaskPages/Category";
import Submissions from "./pages/submission/submission";
import EditorPage from "./pages/Editor/editor";

import AdminDashboard from "./pages/admin/Dashboard/Admindashboard";
import UserAcceptancePanel from "./pages/admin/UserAcceptancePanel/UserAcceptancePanel";
import AdminTaskPage from "./pages/admin/TaskPage/TaskPage";
const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleSidebar = () => setIsExpanded((prev) => !prev);
  const [isAdmin, setIsAdmin] = useState(false); 
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Routes>
          {/* Public */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />

         
          <Route
            path="/admin/*"
            element={
              <>
                <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
                <div className="flex-1">
                  <Routes>
                    <Route path="/AdminDashboard" element={<AdminDashboard />} />
                    <Route path="/UserAcceptancePanel" element={<UserAcceptancePanel />} />
                    <Route path="/tasks" element={<AdminTaskPage />} />
                  </Routes>
                </div>
              </>
            }
          />

          {/* User routes */}
          {/* <Route
            path="/*"
            element={
              <>
                <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} role="user"/>
                <div className="flex-1">
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="category" element={<CategoryPage />} />
                    <Route path="category/:categoryId/tasks" element={<TaskPage />} />
                    <Route path="category/:categoryId/tasks/:taskId" element={<EditorPage />} />
                    <Route path="submissions" element={<Submissions />} />
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                  </Routes>
                </div>
              </>
            }
          /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
