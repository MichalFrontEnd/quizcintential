import React, { useState, useEffect } from "react";
import { QuestionCard } from "./QuestionCard";
import { Summary } from "./Summary";
import { shuffleArray } from "../utils";
import { Question } from '../types';



interface QuizProps {
  level: string;
  setLevel: (level: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ level, setLevel }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/questions");
        const data = await response.json();
        const results = data.results as Question[]; // Cast to Question[]
        const shuffledQuestions = shuffleArray(results).slice(
          0,
          getQuestionLimit(level)
        );
        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [level]);

  const getQuestionLimit = (level: string): number => {
    switch (level) {
      case "easy":
        return 10;
      case "medium":
        return 20;
      case "hard":
        return 30;
      case "sparta":
        return 40;
      default:
        return 10;
    }
  };

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setLevel(""); // Reset level to allow user to choose again
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Summary
          score={score}
          questions={questions}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
};

export { Quiz };
