// import { useState } from "react";
// import { Trash2, Lock, Unlock, Edit, Plus, Check, X } from "lucide-react";

// export default function TaskCategoriesPage() {
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Dennis Ritchie", totalSub: 8, totalQuestion: 145, locked: false },
//     { id: 2, name: "Yashwant Kanetkar", totalSub: 9, totalQuestion: 145, locked: false },
//     { id: 3, name: "Takeaway", totalSub: 9, totalQuestion: 145, locked: true },
//     { id: 4, name: "Debugging", totalSub: 0, totalQuestion: 145, locked: true },
//     { id: 5, name: "Error Solving", totalSub: 0, totalQuestion: 145, locked: true },
//   ]);
  
//   const [showAddTaskModal, setShowAddTaskModal] = useState(false);
//   const [newTaskName, setNewTaskName] = useState("");
//   const [newTaskSub, setNewTaskSub] = useState(0);
//   const [newTaskQuestion, setNewTaskQuestion] = useState(145);
  
//   const [editingCategory, setEditingCategory] = useState(null);
//   const [editFormData, setEditFormData] = useState({
//     name: "",
//     totalSub: 0,
//     totalQuestion: 0
//   });

//   const handleCategoryClick = (id) => {
//     // Only navigate if we're not editing this category
//     if (!editingCategory || editingCategory !== id) {
//       console.log(`Navigating to tasks for category ID: ${id}`);
//       // Navigation would be implemented here in a real app
//     }
//   };

//   const handleDelete = (e, id) => {
//     e.stopPropagation();
//     setCategories(categories.filter(category => category.id !== id));
//   };

//   const handleLockToggle = (e, id) => {
//     e.stopPropagation();
//     setCategories(categories.map(category => 
//       category.id === id ? { ...category, locked: !category.locked } : category
//     ));
//   };

//   const handleEdit = (e, id) => {
//     e.stopPropagation();
//     const categoryToEdit = categories.find(category => category.id === id);
//     if (categoryToEdit) {
//       setEditingCategory(id);
//       setEditFormData({
//         name: categoryToEdit.name,
//         totalSub: categoryToEdit.totalSub,
//         totalQuestion: categoryToEdit.totalQuestion
//       });
//     }
//   };

//   const handleEditFormChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData({
//       ...editFormData,
//       [name]: name === 'name' ? value : parseInt(value, 10) || 0
//     });
//   };

//   const handleEditFormSubmit = (e) => {
//     e.stopPropagation();
//     setCategories(categories.map(category => 
//       category.id === editingCategory ? 
//       { 
//         ...category, 
//         name: editFormData.name,
//         totalSub: editFormData.totalSub,
//         totalQuestion: editFormData.totalQuestion
//       } : 
//       category
//     ));
//     setEditingCategory(null);
//   };

//   const handleCancelEdit = (e) => {
//     e.stopPropagation();
//     setEditingCategory(null);
//   };

//   const handleAddTask = () => {
//     setShowAddTaskModal(true);
//   };

//   const handleAddTaskSubmit = (e) => {
//     e.preventDefault();
//     if (newTaskName.trim()) {
//       const newCategory = {
//         id: categories.length + 1,
//         name: newTaskName,
//         totalSub: newTaskSub,
//         totalQuestion: newTaskQuestion,
//         locked: false,
//       };
//       setCategories([...categories, newCategory]);
//       setNewTaskName("");
//       setNewTaskSub(0);
//       setNewTaskQuestion(145);
//       setShowAddTaskModal(false);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-auto">
//         <div className="bg-white rounded-md shadow-sm p-6">
//           {/* Header with Add Task Button */}
//           <div className="flex justify-end mb-6">
//             <button 
//               onClick={handleAddTask}
//               className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-colors"
//             >
//               <Plus size={20} />
//               <span>Add Task</span>
//             </button>
//           </div>

//           {/* Column Headers */}
//           <div className="grid grid-cols-12 gap-4 mb-2">
//             <div className="col-span-6">
//               <span className="text-gray-500 text-sm">Name</span>
//             </div>
//             <div className="col-span-3 text-center">
//               <span className="text-gray-500 text-sm">Total Sub</span>
//             </div>
//             <div className="col-span-3 text-center">
//               <span className="text-gray-500 text-sm">Total Question</span>
//             </div>
//           </div>

//           {/* Task Categories List */}
//           <div className="space-y-4">
//             {categories.map((category) => (
//               <div 
//                 key={category.id} 
//                 onClick={() => handleCategoryClick(category.id)}
//                 className="bg-white rounded-md border p-4 grid grid-cols-12 gap-4 items-center cursor-pointer mb-4 relative"
//               >
//                 {editingCategory === category.id ? (
//                   // Edit Form
//                   <>
//                     <div className="col-span-6 font-medium">
//                       <input
//                         type="text"
//                         name="name"
//                         value={editFormData.name}
//                         onChange={handleEditFormChange}
//                         className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="col-span-3 text-center">
//                       <input
//                         type="number"
//                         name="totalSub"
//                         value={editFormData.totalSub}
//                         onChange={handleEditFormChange}
//                         className="w-20 border border-gray-300 rounded px-3 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="col-span-3 text-center">
//                       <input
//                         type="number"
//                         name="totalQuestion"
//                         value={editFormData.totalQuestion}
//                         onChange={handleEditFormChange}
//                         className="w-20 border border-gray-300 rounded px-3 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
                    
//                     {/* Save/Cancel buttons */}
//                     <div className="absolute right-4 flex items-center space-x-4">
//                       <button 
//                         onClick={handleCancelEdit}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <X size={18} />
//                       </button>
//                       <button 
//                         onClick={handleEditFormSubmit}
//                         className="text-green-500 hover:text-green-700"
//                       >
//                         <Check size={18} />
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   // Normal View
//                   <>
//                     <div className="col-span-6 font-medium flex items-center justify-between">
//                       <span>{category.name}</span>
//                       <button 
//                         onClick={(e) => handleDelete(e, category.id)}
//                         className="text-gray-600 hover:text-gray-900 mr-2"
//                       >
//                         <Trash2 size={18} className="text-gray-500" />
//                       </button>
//                     </div>
//                     <div className="col-span-3 text-center">{category.totalSub}</div>
//                     <div className="col-span-3 text-center">{category.totalQuestion}</div>
                    
//                     {/* Lock/Unlock icon and Edit icon (positioned on the right side) */}
//                     <div className="absolute right-4 flex items-center space-x-4">
//                       <button 
//                         onClick={(e) => handleLockToggle(e, category.id)}
//                         className="text-gray-600"
//                       >
//                         {category.locked ? (
//                           <Lock size={18} className="text-gray-700" />
//                         ) : (
//                           <Unlock size={18} className="text-green-500" />
//                         )}
//                       </button>
//                       <button 
//                         onClick={(e) => handleEdit(e, category.id)}
//                         className="text-gray-600"
//                       >
//                         <Edit size={18} />
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Add Task Modal */}
//       {showAddTaskModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96">
//             <h2 className="text-xl font-semibold mb-4">Add New Task Category</h2>
//             <form onSubmit={handleAddTaskSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Category Name</label>
//                 <input
//                   type="text"
//                   value={newTaskName}
//                   onChange={(e) => setNewTaskName(e.target.value)}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter category name"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Total Sub</label>
//                 <input
//                   type="number"
//                   value={newTaskSub}
//                   onChange={(e) => setNewTaskSub(parseInt(e.target.value) || 0)}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   min="0"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Total Question</label>
//                 <input
//                   type="number"
//                   value={newTaskQuestion}
//                   onChange={(e) => setNewTaskQuestion(parseInt(e.target.value) || 0)}
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   min="0"
//                 />
//               </div>
//               <div className="flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => setShowAddTaskModal(false)}
//                   className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Add
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { Trash2, Lock, Unlock, Edit, Plus, Check, X, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function TaskCategoriesPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([
    { 
      id: 1, 
      name: "Dennis Ritchie", 
      totalSub: 8, 
      totalQuestion: 145, 
      locked: false,
      expanded: false,
      subcategories: [
        { id: 101, name: "C Programming Basics", questions: 25 },
        { id: 102, name: "Pointers and Memory", questions: 30 },
        { id: 103, name: "Data Structures", questions: 40 },
        { id: 104, name: "File Handling", questions: 20 },
        { id: 105, name: "Advanced C Concepts", questions: 30 }
      ]
    },
    { 
      id: 2, 
      name: "Yashwant Kanetkar", 
      totalSub: 9, 
      totalQuestion: 145, 
      locked: false,
      expanded: false,
      subcategories: [
        { id: 201, name: "Let Us C - Chapter 1", questions: 15 },
        { id: 202, name: "Let Us C - Chapter 2", questions: 20 },
        { id: 203, name: "Let Us C - Chapter 3", questions: 18 },
        { id: 204, name: "Let Us C - Chapter 4", questions: 22 },
        { id: 205, name: "Let Us C - Chapter 5", questions: 25 },
        { id: 206, name: "Let Us C - Chapter 6", questions: 15 },
        { id: 207, name: "Let Us C - Chapter 7", questions: 10 },
        { id: 208, name: "Let Us C - Chapter 8", questions: 12 },
        { id: 209, name: "Let Us C - Chapter 9", questions: 8 }
      ]
    },
    { 
      id: 3, 
      name: "Takeaway", 
      totalSub: 9, 
      totalQuestion: 145, 
      locked: true,
      expanded: false,
      subcategories: [
        { id: 301, name: "Quick Reference", questions: 20 },
        { id: 302, name: "Best Practices", questions: 25 },
        { id: 303, name: "Common Patterns", questions: 30 },
        { id: 304, name: "Tips & Tricks", questions: 15 },
        { id: 305, name: "Code Snippets", questions: 18 },
        { id: 306, name: "Performance Tips", questions: 12 },
        { id: 307, name: "Memory Management", questions: 10 },
        { id: 308, name: "Security Guidelines", questions: 8 },
        { id: 309, name: "Testing Strategies", questions: 7 }
      ]
    },
    { 
      id: 4, 
      name: "Debugging", 
      totalSub: 0, 
      totalQuestion: 145, 
      locked: true,
      expanded: false,
      subcategories: []
    },
    { 
      id: 5, 
      name: "Error Solving", 
      totalSub: 0, 
      totalQuestion: 145, 
      locked: true,
      expanded: false,
      subcategories: []
    },
  ]);
  
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskSub, setNewTaskSub] = useState(0);
  const [newTaskQuestion, setNewTaskQuestion] = useState(145);
  
  const [editingCategory, setEditingCategory] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    totalSub: 0,
    totalQuestion: 0
  });

  const handleCategoryClick = (id) => {
   
    if (!editingCategory || editingCategory !== id) {
      setCategories(categories.map(category => 
        category.id === id ? { ...category, expanded: !category.expanded } : category
      ));
    }
  };

  const handleSubcategoryClick = (categoryId, subcategoryId) => {
    navigate(`/admin/category/${categoryId}/tasks/`);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleLockToggle = (e, id) => {
    e.stopPropagation();
    setCategories(categories.map(category => 
      category.id === id ? { ...category, locked: !category.locked } : category
    ));
  };

  const handleEdit = (e, id) => {
    e.stopPropagation();
    const categoryToEdit = categories.find(category => category.id === id);
    if (categoryToEdit) {
      setEditingCategory(id);
      setEditFormData({
        name: categoryToEdit.name,
        totalSub: categoryToEdit.totalSub,
        totalQuestion: categoryToEdit.totalQuestion
      });
    }
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: name === 'name' ? value : parseInt(value, 10) || 0
    });
  };

  const handleEditFormSubmit = (e) => {
    e.stopPropagation();
    setCategories(categories.map(category => 
      category.id === editingCategory ? 
      { 
        ...category, 
        name: editFormData.name,
        totalSub: editFormData.totalSub,
        totalQuestion: editFormData.totalQuestion
      } : 
      category
    ));
    setEditingCategory(null);
  };

  const handleCancelEdit = (e) => {
    e.stopPropagation();
    setEditingCategory(null);
  };

  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };

  const handleAddTaskSubmit = () => {
    if (newTaskName.trim()) {
      const newCategory = {
        id: categories.length + 1,
        name: newTaskName,
        totalSub: newTaskSub,
        totalQuestion: newTaskQuestion,
        locked: false,
        expanded: false,
        subcategories: []
      };
      setCategories([...categories, newCategory]);
      setNewTaskName("");
      setNewTaskSub(0);
      setNewTaskQuestion(145);
      setShowAddTaskModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="w-full p-3 sm:p-4 lg:p-6">
        <div className="bg-white rounded-md shadow-sm p-3 sm:p-4 lg:p-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Task Categories</h1>
            <button 
              onClick={handleAddTask}
              className="bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Plus size={18} />
              <span>Add Task</span>
            </button>
          </div>

          
          <div className="hidden lg:grid grid-cols-12 gap-4 mb-2">
            <div className="col-span-5">
              <span className="text-gray-500 text-sm font-medium">Name</span>
            </div>
            <div className="col-span-2 text-center">
              <span className="text-gray-500 text-sm font-medium">Total Sub</span>
            </div>
            <div className="col-span-3 text-center">
              <span className="text-gray-500 text-sm font-medium">Total Question</span>
            </div>
            <div className="col-span-2 text-center">
              <span className="text-gray-500 text-sm font-medium">Actions</span>
            </div>
          </div>

          {/* Task Categories List */}
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="border rounded-md overflow-hidden">
                {/* Main category row */}
                <div 
                  
                  className="bg-white p-3 sm:p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  {editingCategory === category.id ? (
                    
                    <div className="space-y-3">
                      {/* Category Name Input */}
                      <div className="flex items-center space-x-2">
                        <div className="w-6 flex-shrink-0"></div>
                        <input
                          type="text"
                          name="name"
                          value={editFormData.name}
                          onChange={handleEditFormChange}
                          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                          placeholder="Category name"
                        />
                        
                      </div>
                      
                      
                      <div className="flex flex-col sm:flex-row gap-3 ml-8">
                        <div className="flex-1">
                          <label className="block text-xs text-gray-500 mb-1">Total Sub</label>
                          <input
                            type="number"
                            name="totalSub"
                            value={editFormData.totalSub}
                            onChange={handleEditFormChange}
                            className="w-full sm:w-20 border border-gray-300 rounded px-3 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-xs text-gray-500 mb-1">Total Questions</label>
                          <input
                            type="number"
                            name="totalQuestion"
                            value={editFormData.totalQuestion}
                            onChange={handleEditFormChange}
                            className="w-full sm:w-20 border border-gray-300 rounded px-3 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                          />
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex justify-end space-x-2 ml-8">
                        <button 
                          onClick={handleCancelEdit}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <X size={18} />
                        </button>
                        <button 
                          onClick={handleEditFormSubmit}
                          className="text-green-500 hover:text-green-700 p-1"
                        >
                          <Check size={18} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    
                    <div>
                      
                      <div className="hidden lg:grid grid-cols-12 gap-4 items-center relative" >
                        <div className="col-span-5 font-medium flex items-center" onClick={() => handleCategoryClick(category.id)}>
                          {category.subcategories.length > 0 ? (
                            category.expanded ? (
                              <ChevronDown size={16} className="mr-2 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronRight size={16} className="mr-2 text-gray-500 flex-shrink-0" />
                            )
                          ) : (
                            <div className="w-6 mr-2 flex-shrink-0"></div>
                          )}
                          <span className="truncate mr-2">{category.name}</span>
                          
                        </div>
                        <div className="col-span-2 text-center text-gray-600">{category.totalSub}</div>
                        <div className="col-span-3 text-center text-gray-600">{category.totalQuestion}</div>
                        
                        {/* Action buttons */}
                        <div className="col-span-2 flex items-center justify-end space-x-3">
                          <button 
                            onClick={(e) => handleLockToggle(e, category.id)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            {category.locked ? (
                              <Lock size={16} />
                            ) : (
                              <Unlock size={16} className="text-green-500" />
                            )}
                          </button>
                          <button 
                            onClick={(e) => handleEdit(e, category.id)}
                            className="text-gray-600 hover:text-blue-600"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                          onClick={(e) => handleDelete(e, category.id)}
                          className="text-gray-600 hover:text-red-600 p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                        </div>
                      </div>

                      {/* Mobile/Tablet Layout */}
                      <div className="lg:hidden">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center flex-1 min-w-0">
                            {category.subcategories.length > 0 ? (
                              category.expanded ? (
                                <ChevronDown size={16} className="mr-2 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronRight size={16} className="mr-2 text-gray-500 flex-shrink-0" />
                              )
                            ) : (
                              <div className="w-6 mr-2 flex-shrink-0"></div>
                            )}
                            <span className="font-medium text-gray-800 truncate text-sm sm:text-base mr-2">{category.name}</span>
                          </div>
                          
                          {/* Action buttons - Mobile */}
                          <div className="flex items-center space-x-1 flex-shrink-0">
                            <button 
                              onClick={(e) => handleLockToggle(e, category.id)}
                              className="text-gray-600 hover:text-gray-800 p-2"
                            >
                              {category.locked ? (
                                <Lock size={16} />
                              ) : (
                                <Unlock size={16} className="text-green-500" />
                              )}
                            </button>
                            <button 
                              onClick={(e) => handleEdit(e, category.id)}
                              className="text-gray-600 hover:text-blue-600 p-2"
                            >
                              <Edit size={16} />
                            </button>
                            <button 
                              onClick={(e) => handleDelete(e, category.id)}
                              className="text-gray-600 hover:text-red-600 p-2"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                        
                        {/* Stats row - Mobile */}
                        <div className="flex justify-start text-sm text-gray-600 ml-8 mt-1">
                          <div className="flex space-x-4">
                            <span><span className="font-medium">{category.totalSub}</span> subs</span>
                            <span><span className="font-medium">{category.totalQuestion}</span> questions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                
                {category.expanded && category.subcategories.length > 0 && (
                  <div className="bg-gray-50 border-t">
                    {category.subcategories.map((subcategory) => (
                      <div 
                        key={subcategory.id}
                        onClick={() => handleSubcategoryClick(category.id, subcategory.id)}
                        className="p-3 ml-4 sm:ml-8 border-b border-gray-200 last:border-b-0 cursor-pointer hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                          <span className="text-gray-700 text-sm sm:text-base">{subcategory.name}</span>
                          <span className="text-gray-500 text-xs sm:text-sm">{subcategory.questions} questions</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Task Modal - Responsive */}
      {showAddTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md mx-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Add New Task Category</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">Category Name</label>
                <input
                  type="text"
                  value={newTaskName}
                  onChange={(e) => setNewTaskName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Enter category name"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Total Sub</label>
                  <input
                    type="number"
                    value={newTaskSub}
                    onChange={(e) => setNewTaskSub(parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    min="0"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 text-sm font-medium">Total Question</label>
                  <input
                    type="number"
                    value={newTaskQuestion}
                    onChange={(e) => setNewTaskQuestion(parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    min="0"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddTaskModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 text-sm sm:text-base order-2 sm:order-1"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddTaskSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm sm:text-base order-1 sm:order-2"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}