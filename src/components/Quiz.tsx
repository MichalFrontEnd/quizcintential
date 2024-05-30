import React, { useState, useEffect } from 'react';
import { QuestionCard } from './QuestionCard';
import { shuffleArray } from '../utils';

interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizProps {
  difficulty: string;
}

const Quiz: React.FC<QuizProps> = ({ difficulty }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/questions');
        const data = await response.json();
        const results = data.results as Question[]; // Cast to Question[]
        const filteredQuestions = results.filter((question) => question.difficulty === difficulty);
        const shuffledQuestions = shuffleArray(filteredQuestions).slice(0, getQuestionLimit(difficulty));
        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [difficulty]);

  const getQuestionLimit = (difficulty: string): number => {
    switch (difficulty) {
      case 'easy': return 10;
      case 'medium': return 20;
      case 'hard': return 30;
      case 'sparta': return 40;
      default: return 10;
    }
  };

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <QuestionCard 
          question={questions[currentQuestionIndex]} 
          handleAnswer={handleAnswer} 
        />
      ) : (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export { Quiz };
