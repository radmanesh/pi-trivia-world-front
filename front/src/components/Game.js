import React, { useState, useEffect } from 'react';
import Question from './Question';

function Game() {
  const [score, setScore] = useState(0);

  // Add your game logic here

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [score, setScore] = useState(0);
  // const [gameStatus, setGameStatus] = useState('notStarted'); // 'notStarted', 'ongoing', 'finished'

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => {
        setQuestions(res.results);
        console.log("result: %o , %o", res, res.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {!loading && !error && !!questions && questions.map((question, index) => (
        // each question starts here. (question is a question with all properties)
        <Question key={'q'+index} question={question}></Question>
      ))}
    </div>
  );
}

export default Game;