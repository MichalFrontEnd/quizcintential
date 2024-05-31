import React, { useState, useEffect } from "react";
import { QuestionCard } from "./QuestionCard";
import { Summary } from "./Summary";
import { Question } from "../types";
import { shuffleArray, getQuestionLimit } from "../utils";

interface QuizProps {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
}

const Quiz: React.FC<QuizProps> = ({ difficulty, setDifficulty }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/questions");
        const data = await response.json();
        const results = data.results as Question[];
        const shuffledQuestions = shuffleArray(results).slice(
          0,
          getQuestionLimit(difficulty)
        );
        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [difficulty]);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setDifficulty("");
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <>
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
    </>
  );
};

export { Quiz };
