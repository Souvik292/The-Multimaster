import React, { useState } from "react";

const MultiplicationVisualizer = () => {
  const [num1, setNum1] = useState(2);
  const [num2, setNum2] = useState(3);
  const [showAnswer, setShowAnswer] = useState(false);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  const handleNewProblem = () => {
    const n1 = Math.floor(Math.random() * 5) + 1;
    const n2 = Math.floor(Math.random() * 5) + 1;
    setNum1(n1);
    setNum2(n2);
    setShowAnswer(false);
    speak(`Let's multiply ${n1} times ${n2}.`);
  };

 const handleExplain = () => {
  const explanation = `Great job! There are ${num1} baskets. 
  Each basket has ${num2} apples. 
  Let's count them all. ${num1} times ${num2} equals ${num1 * num2}.please continue another`;
  speak(explanation);
};




  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">🎉 Let's Multiply!</h1>

      <div className="mb-4 text-xl text-gray-700 text-center">
        How many objects in <span className="font-bold text-purple-800">{num1}</span> groups of <span className="font-bold text-purple-800">{num2}</span>?
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {[...Array(num1)].map((_, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex gap-1">
              {[...Array(num2)].map((_, j) => (
                <span key={j} className="text-2xl">🍎</span>
              ))}
            </div>
            <p className="text-center text-sm mt-2 text-gray-500">Group {i + 1}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {showAnswer ? (
          <div className="text-2xl text-green-700 font-semibold mb-2">
            🎯 Correct! {num1} × {num2} = {num1 * num2}
          </div>
        ) : (
          <button
            onClick={() => setShowAnswer(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-purple-700 transition"
          >
            Show Answer
          </button>
        )}

        <button
          onClick={handleExplain} 
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Explain 🔊
        </button>

        <button
          onClick={handleNewProblem}
          className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
        >
          New Problem 🔁
        </button>
      </div>
    </div>
  );
};

export default MultiplicationVisualizer;

