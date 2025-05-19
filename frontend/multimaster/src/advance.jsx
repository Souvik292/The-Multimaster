import React, { useState } from "react";

const AdvancedMultiplication = () => {
  const [a, setA] = useState(23);
  const [b, setB] = useState(14);
  const [showSolution, setShowSolution] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const getParts = (num) => {
    const tens = Math.floor(num / 10) * 10;
    const ones = num % 10;
    return [tens, ones];
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  const explain = () => {
    setShowExplanation(true);
    const [a1, a2] = getParts(a);
    const [b1, b2] = getParts(b);
    const explanation = `We are solving ${a} times ${b}.
    First, we break ${a} into ${a1} and ${a2}, and ${b} into ${b1} and ${b2}.
    We then multiply each part: ${a1} times ${b1}, ${a1} times ${b2}, ${a2} times ${b1}, and ${a2} times ${b2}.
    Finally, we add all those pieces together to find the total.`;
    speak(explanation);
  };

  const generateProblem = () => {
    const newA = Math.floor(Math.random() * 90) + 10;
    const newB = Math.floor(Math.random() * 90) + 10;
    setA(newA);
    setB(newB);
    setShowSolution(false);
    setShowExplanation(false);
    speak(`New problem! Multiply ${newA} by ${newB}`);
  };

  const [a1, a2] = getParts(a);
  const [b1, b2] = getParts(b);

  const parts = [
    { label: `${a1} × ${b1}`, value: a1 * b1 },
    { label: `${a1} × ${b2}`, value: a1 * b2 },
    { label: `${a2} × ${b1}`, value: a2 * b1 },
    { label: `${a2} × ${b2}`, value: a2 * b2 },
  ];

  const total = parts.reduce((sum, part) => sum + part.value, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-indigo-800 mb-6">📐 Advanced Multiplication</h1>
      <p className="text-lg text-gray-700 mb-4">
        Multiply <span className="font-bold text-indigo-700">{a}</span> × <span className="font-bold text-indigo-700">{b}</span> using area model.
      </p>

      <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow-lg mb-6">
        {parts.map((part, index) => (
          <div
            key={index}
            className="bg-indigo-100 border border-indigo-300 rounded-md p-4 text-center font-medium text-indigo-800"
          >
            {part.label} = {showSolution ? part.value : "?"}
          </div>
        ))}
      </div>

      {showSolution && (
        <div className="text-xl font-semibold text-green-700 mb-4">
          🎯 Total: {a} × {b} = {total}
        </div>
      )}

      {showExplanation && (
        <div className="max-w-xl mt-4 text-md bg-white p-6 rounded-xl shadow text-gray-700 leading-relaxed">
          <h2 className="text-lg font-semibold mb-2">📝 Step-by-Step Explanation:</h2>
          <p>
            1. Break {a} into <strong>{a1}</strong> (tens) and <strong>{a2}</strong> (ones).<br />
            2. Break {b} into <strong>{b1}</strong> (tens) and <strong>{b2}</strong> (ones).<br />
            3. Now multiply each pair:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>{a1} × {b1} = {a1 * b1}</li>
            <li>{a1} × {b2} = {a1 * b2}</li>
            <li>{a2} × {b1} = {a2 * b1}</li>
            <li>{a2} × {b2} = {a2 * b2}</li>
          </ul>
          <p className="mt-3">
            4. Add all the parts together:<br />
            {a1 * b1} + {a1 * b2} + {a2 * b1} + {a2 * b2} = <strong>{total}</strong>
          </p>
          <p className="mt-2">🎉 So, <strong>{a} × {b} = {total}</strong>!</p>
        </div>
      )}

      <div className="flex gap-4 mt-6">
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          onClick={() => setShowSolution(true)}
        >
          Show Answer
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          onClick={explain}
        >
          Explain 🔊
        </button>
        <button
          className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
          onClick={generateProblem}
        >
          New Problem 🔁
        </button>
      </div>
    </div>
  );
};

export default AdvancedMultiplication;
