import React, { useState } from "react";
import { Question } from '../types';

interface SummaryProps {
    score: number;
    questions: Question[];
    restartQuiz: () => void;
  }

const Summary: React.FC<SummaryProps> = ({
  score,
    questions,
    restartQuiz 


}) => {


  return (
    <div>
    <h2>Quiz Complete!</h2>
    <p>Correct Answers: {score}</p>
    <p>Incorrect Answers: {questions.length - score}</p>
    <p>Total Questions Answered: {questions.length}</p>
    <p>Final Score: {(score / questions.length) * 100}%</p>
    <button onClick={restartQuiz}>Restart Quiz</button>
  </div>
  );
};

export { Summary };
