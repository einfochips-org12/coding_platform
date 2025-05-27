// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { BarChart, Bar } from 'recharts';
// import { Bell, LayoutDashboard, CheckSquare, Users, FileText, PieChart, User, HelpCircle } from 'lucide-react';

// // Mock API data - in a real app, you would fetch this from your API
// const fetchDashboardData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         totalUsers: 102,
//         totalTasks: 1023,
//         totalCategories: 8,
//         performanceData: [
//           { day: 'Thu', tasks: 80 },
//           { day: 'Fri', tasks: 100 },
//           { day: 'Sat', tasks: 90 },
//           { day: 'Sun', tasks: 110 },
//           { day: 'Mon', tasks: 95 },
//           { day: 'Tue', tasks: 120 },
//           { day: 'Wed', tasks: 150 },
//         ],
//         taskOverview: [
//           { type: 'Easy', value: 80 },
//           { type: 'Medium', value: 50 },
//           { type: 'Hard', value: 20 },
//         ]
//       });
//     }, 500);
//   });
// };

// export default function Dashboard() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState('dashboard');

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const data = await fetchDashboardData();
//         setDashboardData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error loading dashboard data:', error);
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="text-blue-600 text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <div className="flex-1 overflow-y-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center p-6 bg-white border-b border-gray-200">
//           <div>
//             <h1 className="text-xl font-semibold">Welcome back, Hemal Shah 👋</h1>
//             <p className="text-gray-500">Project Manager</p>
//           </div>
//           <div className="relative">
//             <Bell size={24} />
//             <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//           </div>
//         </div>

//         {/* Dashboard content */}
//         <div className="p-6">
//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6 mb-6">
//             <StatsCard 
//               title="Total Users" 
//               value={dashboardData.totalUsers} 
//               textColor="text-green-500" 
//               onClick={() => setActiveSection('users')}
//             />
//             <StatsCard 
//               title="Total Task"
//               value={dashboardData.totalTasks} 
//               textColor="text-indigo-500" 
//               onClick={() => setActiveSection('tasks')}
//             />
//             <StatsCard 
//               title="Total Categories" 
//               value={dashboardData.totalCategories} 
//               textColor="text-green-500" 
//               onClick={() => setActiveSection('categories')}
//             />
//           </div>

//           {/* Charts */}
//           <div className="grid grid-cols-2 gap-6">
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h2 className="text-lg font-medium mb-4">Performance Overview</h2>
//               <p className="text-sm text-gray-500 mb-4">Tasks Completed Per Day</p>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={dashboardData.performanceData}>
//                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                     <XAxis dataKey="day" axisLine={false} tickLine={false} />
//                     <YAxis axisLine={false} tickLine={false} />
//                     <Tooltip />
//                     <Line 
//                       type="monotone" 
//                       dataKey="tasks" 
//                       stroke="#2563EB" 
//                       strokeWidth={2} 
//                       dot={{ r: 4, fill: "#2563EB" }} 
//                       activeDot={{ r: 6 }} 
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h2 className="text-lg font-medium mb-4">Task Overview</h2>
//               <div className="h-64">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={dashboardData.taskOverview}>
//                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                     <XAxis dataKey="type" axisLine={false} tickLine={false} />
//                     <YAxis axisLine={false} tickLine={false} />
//                     <Tooltip />
//                     <Bar 
//                       dataKey="value" 
//                       fill={(data) => {
//                         if (data.type === 'Easy') return '#2563EB';
//                         if (data.type === 'Medium') return '#F59E0B';
//                         return '#EF4444';
//                       }}
//                       radius={[4, 4, 0, 0]}
//                     />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Component for sidebar items
// function SidebarItem({ icon, label, active, hasChildren, onClick }) {
//   return (
//     <div 
//       className={`flex items-center px-4 py-3 cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
//       onClick={onClick}
//     >
//       <div className={`${active ? 'text-blue-600' : 'text-gray-400'}`}>
//         {icon}
//       </div>
//       <span className="ml-3 font-medium text-sm">{label}</span>
//       {hasChildren && (
//         <div className="ml-auto">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
//           </svg>
//         </div>
//       )}
//     </div>
//   );
// }


// // Component for stats cards
// function StatsCard({ title, value, textColor, onClick }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow cursor-pointer" onClick={onClick}>
//       <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
//       <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
// import { Bell } from 'lucide-react';
//  // Make sure this file exists
// import UserAcceptancePanel from '../UserAcceptancePanel/UserAcceptancePanel';

// // Mock API data
// const fetchDashboardData = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         totalUsers: 102,
//         totalTasks: 1023,
//         totalCategories: 8,
//         performanceData: [
//           { day: 'Thu', tasks: 80 },
//           { day: 'Fri', tasks: 100 },
//           { day: 'Sat', tasks: 90 },
//           { day: 'Sun', tasks: 110 },
//           { day: 'Mon', tasks: 95 },
//           { day: 'Tue', tasks: 120 },
//           { day: 'Wed', tasks: 150 },
//         ],
//         taskOverview: [
//           { type: 'Easy', value: 80 },
//           { type: 'Medium', value: 50 },
//           { type: 'Hard', value: 20 },
//         ]
//       });
//     }, 500);
//   });
// };
// const notifications = [
//     { id: 1, message: "New task assigned to you." },
//     { id: 2, message: "Project deadline is tomorrow." },
//     { id: 3, message: "New comment on your task." }
//   ];

//   const userRequests = [
//     { id: 1, user: "John Doe", request: "Access to Project X" },
//     { id: 2, user: "Jane Smith", request: "Request for additional resources" }
//   ];
// export default function Dashboard() {
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeSection, setActiveSection] = useState('dashboard');
//   const [showNotifications, setShowNotifications] = useState(false);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const data = await fetchDashboardData();
//         setDashboardData(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error loading dashboard data:', error);
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="text-blue-600 text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <div className="flex-1 overflow-y-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center p-6 bg-white border-b border-gray-200 relative">
//           <div>
//             <h1 className="text-xl font-semibold">Welcome back, Hemal Shah 👋</h1>
//             <p className="text-gray-500">Project Manager</p>
//           </div>
//           {/* <div className="relative">
//             <Bell 
//               size={24} 
//               onClick={() => setShowNotifications(prev => !prev)} 
//               className="cursor-pointer"
//             />
//             <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>

//             {showNotifications && (
//               <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10">
//                 <div className="p-4 border-b font-medium text-gray-700">Notifications</div>
//                 <div className="p-4">
//                   <button 
//                     onClick={() => {
//                       setActiveSection('userRequests');
//                       setShowNotifications(false);
//                     }} 
//                     className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                   >
//                     User Requests
//                   </button>
//                   {showNotifications && (
//             <NotificationPanel
//               notifications={notifications}
//               userRequests={userRequests}
//               onClose={() => setShowNotifications(false)}
//             />
//           )}
//                 </div>
//               </div>
//             )}
//           </div> */}
//           <div className="relative">
//   <Bell 
//     size={24} 
//     onClick={() => setShowNotifications(prev => !prev)} 
//     className="cursor-pointer"
//   />
//   <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>

//   {showNotifications && (
//     <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md z-10">
//       <div className="p-4 border-b font-semibold text-gray-800">Notifications</div>

//       {/* Notifications List */}
//       <div className="max-h-60 overflow-y-auto divide-y">
//         <div className="p-4 text-sm">
//           <p><strong>John Doe</strong> requested access to premium content.</p>
//         </div>
//         <div className="p-4 text-sm">
//           <p><strong>Jane Smith</strong> requested password reset.</p>
//         </div>
//         {/* Add more notifications dynamically here */}
//       </div>

//       {/* Footer Action */}
//       <div className="p-4 border-t text-right">
//         <button 
//           onClick={() => {
//             setActiveSection('userRequests');
//             setShowNotifications(false);
//           }} 
//           className="text-blue-600 hover:underline"
//         >
//           View All Requests →
//         </button>
//       </div>
//     </div>
//   )}
// </div>

//         </div>

//         {/* Dashboard Content */}
//         <div className="p-6">
//           {activeSection === 'dashboard' && (
//             <>
//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-6 mb-6">
//                 <StatsCard 
//                   title="Total Users" 
//                   value={dashboardData.totalUsers} 
//                   textColor="text-green-500" 
//                   onClick={() => setActiveSection('users')}
//                 />
//                 <StatsCard 
//                   title="Total Task"
//                   value={dashboardData.totalTasks} 
//                   textColor="text-indigo-500" 
//                   onClick={() => setActiveSection('tasks')}
//                 />
//                 <StatsCard 
//                   title="Total Categories" 
//                   value={dashboardData.totalCategories} 
//                   textColor="text-green-500" 
//                   onClick={() => setActiveSection('categories')}
//                 />
//               </div>

//               {/* Charts */}
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="bg-white p-4 rounded-lg shadow">
//                   <h2 className="text-lg font-medium mb-4">Performance Overview</h2>
//                   <p className="text-sm text-gray-500 mb-4">Tasks Completed Per Day</p>
//                   <div className="h-64">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <LineChart data={dashboardData.performanceData}>
//                         <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                         <XAxis dataKey="day" axisLine={false} tickLine={false} />
//                         <YAxis axisLine={false} tickLine={false} />
//                         <Tooltip />
//                         <Line 
//                           type="monotone" 
//                           dataKey="tasks" 
//                           stroke="#2563EB" 
//                           strokeWidth={2} 
//                           dot={{ r: 4, fill: "#2563EB" }} 
//                           activeDot={{ r: 6 }} 
//                         />
//                       </LineChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>

//                 <div className="bg-white p-4 rounded-lg shadow">
//                   <h2 className="text-lg font-medium mb-4">Task Overview</h2>
//                   <div className="h-64">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart data={dashboardData.taskOverview}>
//                         <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                         <XAxis dataKey="type" axisLine={false} tickLine={false} />
//                         <YAxis axisLine={false} tickLine={false} />
//                         <Tooltip />
//                         <Bar 
//                           dataKey="value" 
//                           fill="#2563EB"
//                           radius={[4, 4, 0, 0]}
//                         />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}

//           {activeSection === 'userRequests' && <UserAcceptancePanel/>}
//         </div>
//       </div>
//     </div>
//   );
// }
// function NotificationPanel({ notifications, userRequests, onClose }) {
//   return (
//     <div className="absolute right-6 top-16 w-96 bg-white border border-gray-300 rounded-md shadow-lg z-50 p-4">
//       <div className="flex justify-between items-center mb-3">
//         <h3 className="font-semibold text-lg">Notifications</h3>
//         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
//       </div>

//       {/* User Requests Button */}
//       <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-4">
//         User Requests ({userRequests.length})
//       </button>

//       {/* User Requests List */}
//       <div className="mb-4 max-h-32 overflow-y-auto">
//         <h4 className="font-semibold mb-2">User Requests</h4>
//         {userRequests.length === 0 && <p className="text-gray-500">No user requests</p>}
//         {userRequests.map((req) => (
//           <div key={req.id} className="border-b border-gray-200 py-2">
//             <p><span className="font-semibold">{req.user}</span>: {req.request}</p>
//           </div>
//         ))}
//       </div>

//       {/* Notifications List */}
//       <div className="max-h-48 overflow-y-auto">
//         {notifications.length === 0 && <p className="text-gray-500">No notifications</p>}
//         {notifications.map((note) => (
//           <div key={note.id} className="border-b border-gray-200 py-2">
//             <p>{note.message}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// // StatsCard Component
// function StatsCard({ title, value, textColor, onClick }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow cursor-pointer" onClick={onClick}>
//       <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
//       <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fetchDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalUsers: 102,
        totalTasks: 1023,
        totalCategories: 8,
        performanceData: [
          { day: 'Thu', tasks: 80 },
          { day: 'Fri', tasks: 100 },
          { day: 'Sat', tasks: 90 },
          { day: 'Sun', tasks: 110 },
          { day: 'Mon', tasks: 95 },
          { day: 'Tue', tasks: 120 },
          { day: 'Wed', tasks: 150 },
        ],
        taskOverview: [
          { type: 'Easy', value: 80 },
          { type: 'Medium', value: 50 },
          { type: 'Hard', value: 20 },
        ],
        notifications: [
          { id: 1, message: 'John Doe requested access to premium content.' },
          { id: 2, message: 'Jane Smith requested a password reset.' },
        ]
      });
    }, 500);
  });
};

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-blue-600 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 bg-white border-b border-gray-200 relative">
          <div>
            <h1 className="text-xl font-semibold">Welcome back, Hemal Shah 👋</h1>
            <p className="text-gray-500">Project Manager</p>
          </div>
          <div className="relative">
            <Bell 
              size={24} 
              onClick={() => setShowNotifications(prev => !prev)} 
              className="cursor-pointer"
            />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-md z-50">
                <div className="p-4 border-b font-semibold text-gray-800">Notifications</div>
                <div className="max-h-60 overflow-y-auto divide-y">
                  {dashboardData.notifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      className="p-4 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        alert(`Notification clicked:\n${notif.message}`);
                      }}
                    >
                      {notif.message}
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t text-right">
                  <button 
                    onClick={() => {
                      navigate('/admin/UserAcceptancePanel');
                      setShowNotifications(false);
                    }} 
                    className="text-blue-600 hover:underline"
                  >
                    View All Requests →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <StatsCard title="Total Users" value={dashboardData.totalUsers} textColor="text-green-500" />
            <StatsCard title="Total Task" value={dashboardData.totalTasks} textColor="text-indigo-500" />
            <StatsCard title="Total Categories" value={dashboardData.totalCategories} textColor="text-green-500" />
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 overflow-auto lg:overflow-hidden gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Performance Overview</h2>
              <p className="text-sm text-gray-500 mb-4">Tasks Completed Per Day</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dashboardData.performanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="tasks" 
                      stroke="#2563EB" 
                      strokeWidth={2} 
                      dot={{ r: 4, fill: "#2563EB" }} 
                      activeDot={{ r: 6 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-medium mb-4">Task Overview</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dashboardData.taskOverview}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="type" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar 
                      dataKey="value" 
                      fill={({ payload }) => {
                        if (payload.type === 'Easy') return '#2563EB';
                        if (payload.type === 'Medium') return '#F59E0B';
                        return '#EF4444';
                      }}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsCard({ title, value, textColor }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow cursor-pointer">
      <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
      <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
}
