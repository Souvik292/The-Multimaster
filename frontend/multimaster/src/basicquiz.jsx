import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './header';

function Basicquiz() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState('');

  const fetchQuestion = async () => {
    const res = await axios.get('http://localhost:4000/api/question');
    setQuestion(res.data.question);
    setAnswer(res.data.answer);
    setUserAnswer('');
    setResult('');
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const checkAnswer = () => {
    if (parseInt(userAnswer) === answer) {
      setResult('✅ Correct!');
      

    } else {
      setResult(`❌ Wrong! The correct answer is ${answer}`);
      
    }
  };
  

  return (
    <>
    <Header/>
    <div style={{ padding: '2rem', fontFamily: 'Arial' }} className=''>
      <h1 className=''> Multiplication Quiz</h1>
      <p><strong>Question:</strong> {question}</p>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Your answer"
      />
      <button onClick={checkAnswer } >Submit</button>
      <button onClick={fetchQuestion} style={{ marginLeft: '1rem' }}>Next</button>
      <p>{result}</p>
    </div>
    </>
  );
}

export default Basicquiz;
