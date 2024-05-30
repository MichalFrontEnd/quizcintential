import React from 'react';
import { shuffleArray } from '../utils';

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuestionCardProps {
  question: Question;
  handleAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, handleAnswer }) => {
    // Shuffles all the answer options
  const answers = shuffleArray([
    ...question.incorrect_answers, 
    question.correct_answer
  ]);

  return (
    <div>
      <h2>{question.question}</h2>
      {answers.map((answer:string, index:number) => (
        <button key={index} onClick={() => handleAnswer(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export { QuestionCard };
