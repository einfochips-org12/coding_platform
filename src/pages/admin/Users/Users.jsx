import React, { useState } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  Lock,
  Unlock,
  Trash2,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

export default function UserManagementDashboard() {
  const initialUsers = [
    {
      id: 1,
      name: "Rahul Patel",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Kolkata-wfh",
      department: "PES",
      isBlocked: false,
    },
    {
      id: 2,
      name: "Meet Tridipsinh",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "pune",
      department: "ASIC",
      isBlocked: false,
    },
    {
      id: 3,
      name: "Vivek Kumar",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Bangalore",
      department: "ASIC",
      isBlocked: false,
    },
    {
      id: 4,
      name: "Vivekannand Jha",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Kolkata-wfh",
      department: "PES",
      isBlocked: false,
    },
    {
      id: 5,
      name: "Chinton Lohankhvala",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Kolkata-wfh",
      department: "PES",
      isBlocked: false,
    },
    {
      id: 6,
      name: "Kathryn Murphy",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Kolkata-wfh",
      department: "ASIC",
      isBlocked: false,
    },
    {
      id: 7,
      name: "Shuli Dave",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Kolkata-wfh",
      department: "ASIC",
      isBlocked: true,
    },
    {
      id: 8,
      name: "Priyanshu Kachi",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Kolkata-wfh",
      department: "ASIC",
      isBlocked: true,
    },
    {
      id: 8,
      name: "amite",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Kolkata-wfh",
      department: "ASIC",
      isBlocked: true,
    },
    {
      id: 8,
      name: "Priya",
      gid: "002234",
      email: "xyz@infochips.com",
      office: "Kolkata-wfh",
      department: "ASIC",
      isBlocked: true,
    },
  ];
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.gid.includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to toggle block status of a user
  const toggleBlockStatus = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, isBlocked: !user.isBlocked } : user
      )
    );
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  // Function to handle user selection to view their work
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const usersPerPage = 8;

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col">
        {selectedUser ? (
          <div className="p-6 flex-1">
            <div className="mb-4">
              <button
                onClick={() => setSelectedUser(null)}
                className="flex items-center text-blue-600 font-medium"
              >
                <ChevronLeft size={16} className="mr-1" /> Back to Users
              </button>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">
                {selectedUser.name}'s Work
              </h2>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  {selectedUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">{selectedUser.name}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                  <div className="flex space-x-3 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {selectedUser.department}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      {selectedUser.office}
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      GID: {selectedUser.gid}
                    </span>
                  </div>
                </div>
                <div className="ml-auto">
                  {selectedUser.isBlocked ? (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                      Blocked
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Active
                    </span>
                  )}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium mb-4">Recent Submissions</h3>
                <div className="bg-gray-50 p-8 rounded-lg text-center text-gray-500">
                  {selectedUser.isBlocked ? (
                    <div>
                      <p>This user is currently blocked.</p>
                      <p>No submission data available.</p>
                    </div>
                  ) : (
                    <div>
                      <p>This user has no recent submissions.</p>
                      <p className="mt-2">
                        All submissions and work history will appear here.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
        //   <>
        //     <div className="p-2 border-b flex items-center">
        //       <h1 className="text-xl font-medium">All Users</h1>
        //     </div> 
        //     <div className="p-4">
        //       <div className="flex justify-between">
        //         <div className="relative">
        //           <input
        //             type="text"
        //             placeholder="Search"
        //             className="pl-10 pr-4 py-2 border rounded-md w-64"
        //             value={searchTerm}
        //             onChange={(e) => setSearchTerm(e.target.value)}
        //           />
        //           <Search
        //             size={18}
        //             className="absolute left-3 top-2.5 text-gray-400"
        //           />
        //         </div>
        //         <div className="flex items-center">
        //           <button className="flex items-center space-x-1 border rounded-md px-3 py-2 bg-gray-50 text-gray-700">
        //             <Filter size={16} />
        //             <span>Filter</span>
        //             <ChevronDown size={14} />
        //           </button>
        //         </div>
        //       </div>

              
        //     </div>
           
        //     <div className="bg-white rounded-lg shadow">
        //         <table className="w-full divide-y divide-gray-200">
        //           <thead className="bg-gray-50">
        //             <tr>
        //               <th
        //                 scope="col"
        //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        //               >
        //                 User Name
        //               </th>
        //               <th
        //                 scope="col"
        //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        //               >
        //                 GID
        //               </th>
        //               <th
        //                 scope="col"
        //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        //               >
        //                 Email
        //               </th>
        //               <th
        //                 scope="col"
        //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        //               >
        //                 Office
        //               </th>
        //               <th
        //                 scope="col"
        //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        //               >
        //                 Department
        //               </th>
        //               <th
        //                 scope="col"
        //                 className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
        //               >
        //                 Actions
        //               </th>
        //             </tr>
        //           </thead>

        //           <tbody className="bg-white divide-y divide-gray-200">
        //             {paginatedUsers.map((user) => (
        //               <tr
        //                 key={user.id}
        //                 onClick={() => handleUserSelect(user)}
        //                 className="hover:bg-gray-50 cursor-pointer"
        //               >
        //                 <td className="px-6 py-4 whitespace-nowrap">
        //                   <div className="font-medium text-gray-900">
        //                     {user.name}
        //                   </div>
        //                 </td>
        //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                   {user.gid}
        //                 </td>
        //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                   {user.email}
        //                 </td>
        //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                   {user.office}
        //                 </td>
        //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        //                   {user.department}
        //                 </td>
        //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-center space-x-4">
        //                   <button
        //                     onClick={(e) => {
        //                       e.stopPropagation();
        //                       toggleBlockStatus(user.id);
        //                     }}
        //                     className={
        //                       user.isBlocked
        //                         ? "text-gray-800"
        //                         : "text-green-600"
        //                     }
        //                   >
        //                     {user.isBlocked ? (
        //                       <Lock size={20} />
        //                     ) : (
        //                       <Unlock size={20} />
        //                     )}
        //                   </button>
        //                   <button
        //                     onClick={(e) => {
        //                       e.stopPropagation();
        //                       deleteUser(user.id);
        //                     }}
        //                     className="text-gray-600 hover:text-red-600"
        //                   >
        //                     <Trash2 size={20} />
        //                   </button>
        //                 </td>
        //               </tr>
        //             ))}
        //           </tbody>
        //         </table>
        //       </div>
        //       <div className="px-6 py-3 flex items-center justify-between border-t">
        //           <div className="text-sm text-gray-500">
        //             Showing data {(currentPage - 1) * usersPerPage + 1} to{" "}
        //             {Math.min(currentPage * usersPerPage, filteredUsers.length)}{" "}
        //             of {filteredUsers.length}
        //           </div>
        //           <div className="flex space-x-1">
        //             <button
        //               onClick={() => handlePageChange(currentPage - 1)}
        //               disabled={currentPage === 1}
        //               className="w-8 h-8 flex items-center justify-center rounded-md border bg-white disabled:opacity-50"
        //             >
        //               <ChevronLeft size={16} />
        //             </button>

        //             {[...Array(totalPages)].map((_, index) => {
        //               const page = index + 1;
        //               // Optionally show only first few and last pages, or all pages here
        //               return (
        //                 <button
        //                   key={page}
        //                   onClick={() => handlePageChange(page)}
        //                   className={`w-8 h-8 flex items-center justify-center rounded-md border ${
        //                     page === currentPage
        //                       ? "bg-blue-600 text-white"
        //                       : "bg-white"
        //                   }`}
        //                 >
        //                   {page}
        //                 </button>
        //               );
        //             })}

        //             <button
        //               onClick={() => handlePageChange(currentPage + 1)}
        //               disabled={currentPage === totalPages}
        //               className="w-8 h-8 flex items-center justify-center rounded-md border bg-white disabled:opacity-50"
        //             >
        //               <ChevronRight size={16} />
        //             </button>
        //           </div>
        //         </div>
        //   </>

        <>
  <div className="p-2 border-b flex items-center">
    <h1 className="text-xl font-medium">All Users</h1>
  </div> 
  <div className="p-4">
    <div className="flex justify-between">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border rounded-md w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          size={18}
          className="absolute left-3 top-2.5 text-gray-400"
        />
      </div>
      <div className="flex items-center">
        <button className="flex items-center space-x-1 border rounded-md px-3 py-2 bg-gray-50 text-gray-700">
          <Filter size={16} />
          <span>Filter</span>
          <ChevronDown size={14} />
        </button>
      </div>
    </div>
  </div>

  {/* Scrollable container for the table */}
  <div className="bg-white  max-h-[80%] overflow-auto">
    <table className="w-full divide-y divide-gray-200">
      <thead className="bg-gray-50 sticky top-0 z-10">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            User Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            GID
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Office
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Department
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {paginatedUsers.map((user) => (
          <tr
            key={user.id}
            onClick={() => handleUserSelect(user)}
            className="hover:bg-gray-50 cursor-pointer"
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="font-medium text-gray-900">
                {user.name}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.gid}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.office}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {user.department}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-center space-x-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBlockStatus(user.id);
                }}
                className={
                  user.isBlocked
                    ? "text-gray-800"
                    : "text-green-600"
                }
              >
                {user.isBlocked ? (
                  <Lock size={20} />
                ) : (
                  <Unlock size={20} />
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteUser(user.id);
                }}
                className="text-gray-600 hover:text-red-600"
              >
                <Trash2 size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination below table, always visible */}
  <div className="px-6 py-3 flex items-center justify-between border-t bg-white">
    <div className="text-sm text-gray-500">
      Showing data {(currentPage - 1) * usersPerPage + 1} to{" "}
      {Math.min(currentPage * usersPerPage, filteredUsers.length)}{" "}
      of {filteredUsers.length}
    </div>
    <div className="flex space-x-1">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-md border bg-white disabled:opacity-50"
      >
        <ChevronLeft size={16} />
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-md border ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-md border bg-white disabled:opacity-50"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
</>
        )}
      </div>
    </div>
  );
}
