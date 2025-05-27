import React, { useState, useReducer } from 'react';
import { Search, Plus,SquarePlus,FileSpreadsheet, Edit, Trash2, Copy, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

// Redux-like state management using useReducer
const initialState = {
  exercises: [
    {
      id: 1,
      name: 'Run the "hello, world" program on your system. Experiment with leaving out parts of the program, to see what error messages you get.',
      category: 'DR-Module 1',
      difficulty: 'Medium',
      modifiedDate: '24-03-2025',
      textCode: ''
    },
    {
      id: 2,
      name: 'Experiment to find out what happens when printf\'s argument string contains \\c, where c is some character not listed above.',
      category: 'DR-Module 1',
      difficulty: 'Hard',
      modifiedDate: '24-03-2025',
      textCode: ''
    },
    {
      id: 3,
      name: 'Modify the temperature conversion program to print a heading above the table.',
      category: 'DR-Module 1',
      difficulty: 'Medium',
      modifiedDate: '24-03-2025',
      textCode: ''
    },
    {
      id: 4,
      name: 'Write a function setbits(x,p,n,y) that returns x with the n bits that begin at position p set to the rightmost n bits of y, leaving the other bits unchanged.',
      category: 'DR-Module 2',
      difficulty: 'Medium',
      modifiedDate: '24-03-2025',
      textCode: ''
    },
    {
      id: 5,
      name: 'Add access to library functions like sin, exp, and pow. See <math.h> in Appendix B, Section 4.',
      category: 'DR-Module 4',
      difficulty: 'Easy',
      modifiedDate: '24-03-2025',
      textCode: ''
    },
    {
      id: 6,
      name: 'Modify undef so that it does not add redundant parentheses to declarations.',
      category: 'DR-Module 5',
      difficulty: 'Easy',
      modifiedDate: '24-03-2025',
      textCode: ''
    },
    {
      id: 7,
      name: 'Write a function undef that will remove a name and definition from the table maintained by lookup and install.',
      category: 'DR-Module 6',
      difficulty: 'Hard',
      modifiedDate: '24-03-2025',
      textCode: ''
    },
    {
      id: 8,
      name: 'Rewrite the postfix calculator of Chapter 4 to use scanf and/or sscanf to do the input and number conversion.',
      category: 'DR-Module 7',
      difficulty: 'Easy',
      modifiedDate: '24-03-2025',
      textCode: ''
    }
  ],
  searchTerm: '',
  sortBy: 'newest',
  currentPage: 1,
  itemsPerPage: 8,
  selectedExercises: []
};

function exerciseReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload, currentPage: 1 };
    case 'SET_SORT_BY':
      return { ...state, sortBy: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: [...state.exercises, { ...action.payload, id: Date.now() }]
      };
    case 'UPDATE_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.map(ex =>
          ex.id === action.payload.id ? { ...ex, ...action.payload } : ex
        )
      };
    case 'DELETE_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.filter(ex => ex.id !== action.payload)
      };
    case 'TOGGLE_SELECT_EXERCISE':
      const isSelected = state.selectedExercises.includes(action.payload);
      return {
        ...state,
        selectedExercises: isSelected
          ? state.selectedExercises.filter(id => id !== action.payload)
          : [...state.selectedExercises, action.payload]
      };
    case 'DUPLICATE_EXERCISE':
      const exerciseToDuplicate = state.exercises.find(ex => ex.id === action.payload);
      return {
        ...state,
        exercises: [...state.exercises, { ...exerciseToDuplicate, id: Date.now(), name: exerciseToDuplicate.name + ' (Copy)' }]
      };
    default:
      return state;
  }
}

export default function ExerciseManagementPage() {
  const [state, dispatch] = useReducer(exerciseReducer, initialState);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingExercise, setEditingExercise] = useState(null);

  // Filter and sort exercises
  const filteredExercises = state.exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
    exercise.category.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  const sortedExercises = [...filteredExercises].sort((a, b) => {
    switch (state.sortBy) {
      case 'newest':
        return new Date(b.modifiedDate) - new Date(a.modifiedDate);
      case 'oldest':
        return new Date(a.modifiedDate) - new Date(b.modifiedDate);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedExercises.length / state.itemsPerPage);
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const paginatedExercises = sortedExercises.slice(startIndex, startIndex + state.itemsPerPage);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-blue-600 bg-blue-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const ExerciseModal = ({ exercise, isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
      name: exercise?.name || '',
      category: exercise?.category || 'DR-Module 1',
      difficulty: exercise?.difficulty || 'Medium',
      textCode: exercise?.textCode || ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
      e.preventDefault();
      const exerciseData = {
        ...formData,
        modifiedDate: new Date().toLocaleDateString('en-GB'),
        id: exercise?.id
      };
      
      if (exercise) {
        dispatch({ type: 'UPDATE_EXERCISE', payload: exerciseData });
      } else {
        dispatch({ type: 'ADD_EXERCISE', payload: exerciseData });
      }
      
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">
              {exercise ? 'Edit Exercise' : 'Add New Exercise'}
            </h2>
          </div>
          
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Exercise Name</label>
              <textarea
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md resize-none"
                rows="3"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md"
                >
                  {Array.from({length: 8}, (_, i) => (
                    <option key={i} value={`DR-Module ${i + 1}`}>DR-Module {i + 1}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Difficulty</label>
                <select
                  value={formData.difficulty}
                  onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-md"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Text Code</label>
              <textarea
                value={formData.textCode}
                onChange={(e) => setFormData({...formData, textCode: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md resize-none"
                rows="4"
                placeholder="Enter code or additional text here..."
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  const exerciseData = {
                    ...formData,
                    modifiedDate: new Date().toLocaleDateString('en-GB'),
                    id: exercise?.id
                  };
                  
                  if (exercise) {
                    dispatch({ type: 'UPDATE_EXERCISE', payload: exerciseData });
                  } else {
                    dispatch({ type: 'ADD_EXERCISE', payload: exerciseData });
                  }
                  
                  onClose();
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {exercise ? 'Update' : 'Add'} Exercise
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dennis Ritchie</h1>
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Exercise
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                Add By Excel
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={state.searchTerm}
                  onChange={(e) => dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value })}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                />
              </div>
              
              <select
                value={state.sortBy}
                onChange={(e) => dispatch({ type: 'SET_SORT_BY', payload: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Sort By: Newest</option>
                <option value="oldest">Sort By: Oldest</option>
                <option value="name">Sort By: Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Task Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Base Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Difficulty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Modified Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Text Code
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Test Cases
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedExercises.map((exercise) => (
                  <tr key={exercise.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md">
                        <div className="font-medium">Exercise {exercise.id}</div>
                        <div className="mt-1 text-gray-600 line-clamp-2">
                          {exercise.name}
                        </div>
                        {/* Mobile-only info */}
                        <div className="mt-2 sm:hidden space-y-1">
                          <div className="text-xs text-gray-500">{exercise.category}</div>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                            {exercise.difficulty}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">
                      {exercise.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                        {exercise.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">
                      {exercise.modifiedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        View Code
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        
                        <button
                          onClick={() => setEditingExercise(exercise)}
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => dispatch({ type: 'DELETE_EXERCISE', payload: exercise.id })}
                          className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                     {/* <td className="bg-slate-600 flex items-center justify-center whitespace-nowrap hidden lg:table-cell">
                       
                      </td>  */}
                      <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                      <button
                          
                          className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                          title="Duplicate"
                        >
                          <SquarePlus className="w-6 h-8" />
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: Math.max(1, state.currentPage - 1) })}
                disabled={state.currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: Math.min(totalPages, state.currentPage + 1) })}
                disabled={state.currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(startIndex + state.itemsPerPage, sortedExercises.length)}</span> of{' '}
                  <span className="font-medium">{sortedExercises.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button
                    onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: Math.max(1, state.currentPage - 1) })}
                    disabled={state.currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: pageNum })}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          state.currentPage === pageNum
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => dispatch({ type: 'SET_CURRENT_PAGE', payload: Math.min(totalPages, state.currentPage + 1) })}
                    disabled={state.currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ExerciseModal
        exercise={null}
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
      
      <ExerciseModal
        exercise={editingExercise}
        isOpen={!!editingExercise}
        onClose={() => setEditingExercise(null)}
      />
    </div>
  );
}