
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

import AdminSidebar from "./components/Admin/AdminSidebar";
import UserSidebar from "./components/User/UserSidebar";
import TaskPage from "./pages/TaskPages/taskpage";
import LoginForm from "./pages/Login/Login";
import SignupForm from "./pages/Signup/signup";
import Dashboard from "./pages/Dashboard/dashboard";
import CategoryPage from "./pages/TaskPages/Category";
import Submissions from "./pages/submission/submission";
import EditorPage from "./pages/Editor/editor";

import AdminDashboard from "./pages/admin/Dashboard/Admindashboard";
import UserAcceptancePanel from "./pages/admin/UserAcceptancePanel/UserAcceptancePanel";
import AdminUser from "./pages/admin/Users/Users";
import ProfilePage from "./pages/admin/profile/profilePage";
import UserProfile from "./pages/Userprofile/userProfile";
import AdminCategory from "./pages/admin/Category/Category";
import AdminTaskPage from "./pages/admin/Category/taskpage";
const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleSidebar = () => setIsExpanded((prev) => !prev);
  const [isAdmin, setIsAdmin] = useState(false); 
  return (
    // <BrowserRouter>
    //   <div className="flex h-screen lg:overflow-hidden">
    //     <Routes>
          
    //       <Route path="/login" element={<LoginForm />} />
    //       <Route path="/signup" element={<SignupForm />} />

         
    //       <Route
    //         path="/admin/*"
    //         element={
    //           <>
    //             <AdminSidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
    //             <div className="flex-1">
    //               <Routes>
    //                 <Route path="profile" element={<ProfilePage />} />
    //                 <Route path="AdminDashboard" element={<AdminDashboard />} />
    //                 <Route path="UserAcceptancePanel" element={<UserAcceptancePanel />} />
    //                 <Route path="Category" element={<AdminCategory />} />
    //                 <Route path="users" element={<AdminUser />} />
                    
    //               </Routes>
    //             </div>
    //           </>
    //         }
    //       />
    //       <Route
    //         path="/user/*"
    //         element={
    //           <>
    //             <UserSidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} role="user"/>
    //             <div className="flex-1">
    //               <Routes>
    //                 <Route path="dashboard" element={<Dashboard />} />
    //                 <Route path="category" element={<CategoryPage />} />
    //                 <Route path="category/:categoryId/tasks" element={<TaskPage />} />
    //                 <Route path="category/:categoryId/tasks/:taskId" element={<EditorPage />} />
    //                 <Route path="submissions" element={<Submissions />} />
    //                 <Route path="profile" element={<UserProfile />} />
                    
    //               </Routes>
    //             </div>
    //           </>
    //         }
    //       />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>
  <div className="flex h-screen">
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />

      {/* Admin routes */}
      <Route
        path="/admin/*"
        element={
          <div className="flex w-full">
            <AdminSidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
            <div className="flex-1 overflow-y-auto h-screen">
              <Routes>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="AdminDashboard" element={<AdminDashboard />} />
                <Route path="UserAcceptancePanel" element={<UserAcceptancePanel />} />
                <Route path="Category" element={<AdminCategory />} />
                <Route path="Category/:categoryId/tasks" element={<AdminTaskPage />} />
                <Route path="users" element={<AdminUser />} />
              </Routes>
            </div>
          </div>
        }
      />

      {/* User routes */}
      <Route
        path="/user/*"
        element={
          <div className="flex w-full">
            <UserSidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} role="user" />
            <div className="flex-1 overflow-y-auto h-screen">
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="category" element={<CategoryPage />} />
                <Route path="category/:categoryId/tasks" element={<TaskPage />} />
                <Route path="category/:categoryId/tasks/:taskId" element={<EditorPage />} />
                <Route path="submissions" element={<Submissions />} />
                <Route path="profile" element={<UserProfile />} />
              </Routes>
            </div>
          </div>
        }
      />
    </Routes>
  </div>
</BrowserRouter>

  );
};

export default App;
