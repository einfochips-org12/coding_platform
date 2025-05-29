import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExerciseModal = ({ exercise, isOpen, onClose, onSave ,dispatch}) => {
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
        {/* <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">
              {exercise ? 'Edit Exercise' : 'Add New Exercise'}
            </h2>
          </div>
          
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Exercise Name</label>
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
        </div> */}
        <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
  <div className="p-6 border-b">
    <h2 className="text-xl font-semibold">
      {exercise ? 'Edit Exercise' : 'Add New Exercise'}
    </h2>
  </div>

  <div className="p-4 space-y-4">
    <div>
      <label className="block text-sm font-medium mb-1">Exercise Name</label>
      <textarea
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
        >
          {Array.from({ length: 8 }, (_, i) => (
            <option key={i} value={`DR-Module ${i + 1}`}>DR-Module {i + 1}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Difficulty</label>
        <select
          value={formData.difficulty}
          onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
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
        onChange={(e) => setFormData({ ...formData, textCode: e.target.value })}
        className="w-full p-3 border border-gray-300 rounded-md resize-none"
        rows="4"
        placeholder="Enter code or additional text here..."
      />
    </div>

    {/* ✅ Test Case Section */}
    <div>
      <label className="block text-sm font-medium mb-2">Test Cases</label>
      {formData.testCases?.map((testCase, index) => (
        <div key={index} className="mb-4 p-3 border border-gray-300 rounded-md space-y-2">
          <div>
            <label className="block text-xs font-medium">Input</label>
            <textarea
              value={testCase.input}
              onChange={(e) => {
                const updated = [...formData.testCases];
                updated[index].input = e.target.value;
                setFormData({ ...formData, testCases: updated });
              }}
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              rows="2"
            />
          </div>
          <div>
            <label className="block text-xs font-medium">Expected Output</label>
            <textarea
              value={testCase.expectedOutput}
              onChange={(e) => {
                const updated = [...formData.testCases];
                updated[index].expectedOutput = e.target.value;
                setFormData({ ...formData, testCases: updated });
              }}
              className="w-full p-2 border border-gray-300 rounded-md resize-none"
              rows="2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => {
                const updated = formData.testCases.filter((_, i) => i !== index);
                setFormData({ ...formData, testCases: updated });
              }}
              className="text-sm text-red-500 hover:underline"
            >
              Remove Test Case
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          setFormData({
            ...formData,
            testCases: [...(formData.testCases || []), { input: '', expectedOutput: '' }],
          });
        }}
        className="mt-2 px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
      >
        + Add Test Case
      </button>
    </div>

    {/* ✅ Action Buttons */}
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
            id: exercise?.id,
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

  export default ExerciseModal;