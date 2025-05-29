import React from "react";

const difficultyColors = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-200 text-yellow-800",
  Hard: "bg-red-200 text-red-800",
};
const problem = {
  twoSum: {
    title: "Two Sum",
    difficulty: "Easy",
    description: [
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
      "You can return the answer in any order."
    ],
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      }
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists."
    ]
  },
  reverseString: {
    title: "Reverse String",
    difficulty: "Easy",
    description: [
      "Write a function that reverses a string. The input string is given as an array of characters s.",
      "You must do this by modifying the input array in-place with O(1) extra memory."
    ],
    examples: [
      {
        input: `s = ["h","e","l","l","o"]`,
        output: `["o","l","l","e","h"]`
      }
    ],
    constraints: [
      "1 ≤ s.length ≤ 10⁵",
      "s[i] is a printable ascii character."
    ]
  }
};

export default function ProblemDescription() {
    const problems = problem.twoSum; 
  if (!problems) return <div className="p-6">No problem selected</div>;

  return (
    <div className="p-6 overflow-y-auto h-full bg-white text-gray-800">
      {/* Title and Difficulty */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{problems.title}</h1>
        <span className={`ml-2 px-2 py-1 text-sm rounded-full font-semibold ${difficultyColors[problems.difficulty]}`}>
          {problems.difficulty}
        </span>
      </div>

      {/* Description */}
      <div className="mb-6 space-y-3">
        {problems.description.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      {/* Examples */}
      {problems.examples?.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Example:</h2>
          {problems.examples.map((ex, idx) => (
            <pre
              key={idx}
              className="bg-gray-100 p-3 rounded-md whitespace-pre-wrap text-sm mb-2"
            >
              Input: {ex.input}
              {"\n"}Output: {ex.output}
              {ex.explanation && `\nExplanation: ${ex.explanation}`}
            </pre>
          ))}
        </div>
      )}

      {/* Constraints */}
      {problems.constraints?.length > 0 && (
        <div>
          <h2 className="font-semibold text-lg mb-2">Constraints:</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {problems.constraints.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
