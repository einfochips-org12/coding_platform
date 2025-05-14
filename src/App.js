  // // App.js
  // import React, { useState } from 'react';
  // import Sidebar from './components/sidebar/Sidebar';
  // import TaskPage from './pages/TaskPages/taskpage';
  // import LoginForm from './pages/Login/Login';
  // import SignupForm from './pages/Signup/signup';

  // const App = () => {
  //   const [isExpanded, setIsExpanded] = useState(true);

  //   const toggleSidebar = () => setIsExpanded(prev => !prev);

  //   return (
  //     <div className="flex h-screen overflow-hidden">
  //       <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
  //       <TaskPage isSidebarExpanded={isExpanded} />
  //       {/* <SignupForm /> */}

  //     </div>
  //   );
  // };

  // export default App;

  // App.js
  import React, { useState,useEffect } from 'react';
  import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

  import Sidebar from './components/sidebar/Sidebar';
  import TaskPage from './pages/TaskPages/taskpage';
  import LoginForm from './pages/Login/Login';
  import SignupForm from './pages/Signup/signup';
  import Dashboard from './pages/Dashboard/dashboard';

  import CategoryPage from './pages/TaskPages/Category';
  import Submissions from './pages/submission/submission';
  const App = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => setIsExpanded(prev => !prev);

    return (
      <BrowserRouter>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar only on authenticated routes */}
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
                  <div className="flex-1">
                    <Routes>
                      {/* <Route path="/tasks" element={<TaskPage isSidebarExpanded={isExpanded} />} /> */}
                      <Route path="/category" element={<CategoryPage />} />

                      <Route path="/dashboard" element={<Dashboard />} />
                      
                      <Route path="/submissions" element={<Submissions />} />
                      <Route path="/tasks" element={<TaskPage />} />
                      
                    </Routes>
                  </div>
                </>
              }
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };

  export default App;
