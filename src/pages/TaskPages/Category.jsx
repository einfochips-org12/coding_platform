


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Lock, Unlock } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function CategoryPage() {
//   const [categories] = useState([
//     {
//       name: "Dennis Ritchie",
//       totalSub: 8,
//       totalQuestion: 145,
//       isLocked: false,
//     },
//     {
//       name: "Yashwant Kanetkar",
//       totalSub: 9,
//       totalQuestion: 145,
//       isLocked: false,
//     },
//     { name: "Takeaway", totalSub: 9, totalQuestion: 145, isLocked: true },
//     { name: "Debugging", totalSub: 0, totalQuestion: 145, isLocked: true },
//     { name: "Error Solving", totalSub: 0, totalQuestion: 145, isLocked: true },
//   ]);

//   const [openCategory, setOpenCategory] = useState(null);
//   const navigate = useNavigate();

//   const toggleCategory = (index) => {
//     if (categories[index].isLocked) return;
//     setOpenCategory(openCategory === index ? null : index);
//   };

//   const getSubCategories = (count) => {
//     return Array(count)
//       .fill()
//       .map((_, i) => ({
//         name: `Subcategory ${i + 1}`,
//         questionCount: Math.floor(Math.random() * 30) + 10,
//       }));
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     navigate("/tasks");
//   };

//   return (
//     <div className="h-full w-full p-4 flex justify-center items-center">
//       <div className="max-w-3xl h-full w-full">
//         <div className="bg-white rounded-xl shadow-sm space-y-2 w-full h-full p-4">
//           {categories.map((category, index) => (
//             <div key={index} className="border-b last:border-b-0">
//               <div
//                 className="px-6 py-4 flex items-center justify-between mt-5 cursor-pointer border border-gray-400 rounded-lg shadow-md hover:bg-gray-50"
//                 onClick={() => toggleCategory(index)}
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-medium">
//                     {index + 1}
//                   </div>
//                   <Link to="/tasks">
//                   <span className="font-medium text-gray-800">
//                     {category.name}
//                   </span>
//                   </Link>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="flex flex-col items-end mr-4">
//                     <div className="flex justify-between w-full">
//                       <span className="text-xs text-gray-400 mr-16">
//                         Total Sub
//                       </span>
//                       <span className="text-xs text-gray-400">
//                         Total Question
//                       </span>
//                     </div>
//                     <div className="flex justify-between w-full">
//                       <span className="font-semibold text-gray-700 mr-16">
//                         {category.totalSub}
//                       </span>
//                       <span className="font-semibold text-gray-700">
//                         {category.totalQuestion}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="w-6 h-6 flex items-center justify-center">
//                     {category.isLocked ? (
//                       <Lock size={20} className="text-gray-600" />
//                     ) : (
//                       <Unlock size={20} className="text-green-500" />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Animate subcategories */}
//               <AnimatePresence>
//                 {openCategory === index &&
//                   !category.isLocked &&
//                   category.totalSub > 0 && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden bg-gray-50 px-10 py-3"
//                     >
//                       <div className="space-y-2">
//                         {getSubCategories(category.totalSub).map(
//                           (sub, subIndex) => (
//                             <div
//                               key={subIndex}
//                               onClick={() => handleSubcategoryClick(sub)}
//                               className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
//                             >
//                               <span className="text-sm text-gray-700">
//                                 {sub.name}
//                               </span>
//                               <span className="text-xs text-gray-500">
//                                 {sub.questionCount} questions
//                               </span>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     </motion.div>
//                   )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Lock, Unlock } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function CategoryPage() {
//   const [categories] = useState([
//     {
//       name: "Dennis Ritchie",
//       totalSub: 8,
//       totalQuestion: 145,
//       isLocked: false,
//     },
//     {
//       name: "Yashwant Kanetkar",
//       totalSub: 9,
//       totalQuestion: 145,
//       isLocked: false,
//     },
//     { name: "Takeaway", totalSub: 9, totalQuestion: 145, isLocked: true },
//     { name: "Debugging", totalSub: 0, totalQuestion: 145, isLocked: true },
//     { name: "Error Solving", totalSub: 0, totalQuestion: 145, isLocked: true },
//   ]);

//   const [openCategory, setOpenCategory] = useState(null);
//   const navigate = useNavigate();

//   const toggleCategory = (index) => {
//     if (categories[index].isLocked) return;
//     setOpenCategory(openCategory === index ? null : index);
//   };

//   const getSubCategories = (count) => {
//     return Array(count)
//       .fill()
//       .map((_, i) => ({
//         name: `Subcategory ${i + 1}`,
//         questionCount: Math.floor(Math.random() * 30) + 10,
//       }));
//   };

//   const handleSubcategoryClick = (categoryID  ) => {
//     navigate("/category/task");
//   };

//   return (
//     <div className="h-full w-full p-4 flex justify-center items-center">
//       <div className="max-w-3xl h-full w-full">
//         <div className="bg-white rounded-xl shadow-sm space-y-2 w-full h-full p-4">
//           {categories.map((category, index) => (
//             <div key={index} className="border-b last:border-b-0">
//               <div
//                 className="px-6 py-4 flex items-center justify-between mt-5 cursor-pointer border border-gray-400 rounded-lg shadow-md hover:bg-gray-50"
//                 onClick={() => toggleCategory(index)}
//               >
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-medium">
//                     {index + 1}
//                   </div>
//                   <span className="font-medium text-gray-800">
//                     {category.name}
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="flex flex-col items-end mr-4">
//                     <div className="flex justify-between w-full">
//                       <span className="text-xs text-gray-400 mr-16">
//                         Total Sub
//                       </span>
//                       <span className="text-xs text-gray-400">
//                         Total Question
//                       </span>
//                     </div>
//                     <div className="flex justify-between w-full">
//                       <span className="font-semibold text-gray-700 mr-16">
//                         {category.totalSub}
//                       </span>
//                       <span className="font-semibold text-gray-700">
//                         {category.totalQuestion}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="w-6 h-6 flex items-center justify-center">
//                     {category.isLocked ? (
//                       <Lock size={20} className="text-gray-600" />
//                     ) : (
//                       <Unlock size={20} className="text-green-500" />
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Animate subcategories */}
//               <AnimatePresence>
//                 {openCategory === index &&
//                   !category.isLocked &&
//                   category.totalSub > 0 && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden bg-gray-50 px-10 py-3"
//                     >
//                       <div className="space-y-2">
//                         {getSubCategories(category.totalSub).map(
//                           (sub, subIndex) => (
//                             <div
//                               key={subIndex}
//                               onClick={() => handleSubcategoryClick(sub)}
//                               className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
//                             >
//                               <span className="text-sm text-gray-700">
//                                 {sub.name}
//                               </span>
//                               <span className="text-xs text-gray-500">
//                                 {sub.questionCount} questions
//                               </span>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     </motion.div>
//                   )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Unlock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categoriesData = [
  {
    id: "dennis-ritchie",
    name: "Dennis Ritchie",
    totalSub: 8,
    totalQuestion: 145,
    isLocked: false,
  },
  {
    id: "yashwant-kanetkar",
    name: "Yashwant Kanetkar",
    totalSub: 9,
    totalQuestion: 145,
    isLocked: false,
  },
  {
    id: "takeaway",
    name: "Takeaway",
    totalSub: 9,
    totalQuestion: 145,
    isLocked: true,
  },
  {
    id: "debugging",
    name: "Debugging",
    totalSub: 0,
    totalQuestion: 145,
    isLocked: true,
  },
  {
    id: "error-solving",
    name: "Error Solving",
    totalSub: 0,
    totalQuestion: 145,
    isLocked: true,
  },
];

export default function CategoryPage() {
  const [categories] = useState(categoriesData);
  const [openCategory, setOpenCategory] = useState(null);
  const navigate = useNavigate();

  const toggleCategory = (index) => {
    if (categories[index].isLocked) return;
    setOpenCategory(openCategory === index ? null : index);
  };

  const getSubCategories = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => ({
        name: `Subcategory ${i + 1}`,
        questionCount: Math.floor(Math.random() * 30) + 10,
      }));
  };

  const handleSubcategoryClick = (categoryId) => {
    
    navigate(`/category/${categoryId}/tasks`);
  };

  return (
    <div className="h-full w-full p-4 flex justify-center items-center">
      <div className="max-w-3xl h-full w-full">
        <div className="bg-white rounded-xl shadow-sm space-y-2 w-full h-full p-4">
          {categories.map((category, index) => (
            <div key={category.id} className="border-b last:border-b-0">
              <div
                className="px-6 py-4 flex items-center justify-between mt-5 cursor-pointer border border-gray-400 rounded-lg shadow-md hover:bg-gray-50"
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-medium">
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-800">{category.name}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-end mr-4">
                    <div className="flex justify-between w-full">
                      <span className="text-xs text-gray-400 mr-16">Total Sub</span>
                      <span className="text-xs text-gray-400">Total Question</span>
                    </div>
                    <div className="flex justify-between w-full">
                      <span className="font-semibold text-gray-700 mr-16">{category.totalSub}</span>
                      <span className="font-semibold text-gray-700">{category.totalQuestion}</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    {category.isLocked ? (
                      <Lock size={20} className="text-gray-600" />
                    ) : (
                      <Unlock size={20} className="text-green-500" />
                    )}
                  </div>
                </div>
              </div>

              {/* Animate subcategories */}
              <AnimatePresence>
                {openCategory === index && !category.isLocked && category.totalSub > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-gray-50 px-10 py-3"
                  >
                    <div className="space-y-2">
                      {getSubCategories(category.totalSub).map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          onClick={() => handleSubcategoryClick(category.id)}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                        >
                          <span className="text-sm text-gray-700">{sub.name}</span>
                          <span className="text-xs text-gray-500">{sub.questionCount} questions</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
