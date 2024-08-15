import React, { useState } from 'react';
import quizQuestions from './Quiz_Question';
import { shuffle } from 'lodash';

const qzQuestion = shuffle(quizQuestions).slice(0, 5);

function App() {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === qzQuestion[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setcurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption('');
  };

  if (currentQuestionIndex >= qzQuestion.length) {
    return <div>Your score is: {score}</div>;
  }

  const question = qzQuestion[currentQuestionIndex];

  return (
    <div>
      <h1>Quiz App</h1>
      <h2>{question.question}</h2>
      <form onSubmit={handleSubmit}>
        {question.options.map((option) => (
          <div className="opt" key={option}>
            <input
              type="radio"
              id={option} // Assign a unique id to each radio button
              name="opt"
              value={option}
              checked={selectedOption === option} // Ensure the selected option is marked
              onChange={handleOptionChange}
            />
            <label htmlFor={option}> {option}</label> {/* Match htmlFor with the input's id */}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
