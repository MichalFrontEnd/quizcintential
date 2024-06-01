import React, { useState, useEffect } from "react";
import { QuestionCard } from "../../orgnisms/QuestionCard/QuestionCard";
import Summary from "../Summary";
import { Question } from "../../../types";
import { shuffleArray, getQuestionLimit } from "../../../utils";
import { Loader } from "@mantine/core";

interface QuizProps {
  difficulty: string;
  setDifficulty: (difficulty: string) => void;
}

export const Quiz: React.FC<QuizProps> = ({ difficulty, setDifficulty }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
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
    if (currentQuestionIndex + 1 >= questions.length) {
      setShowSummary(true);
    }
  };

  const restartQuiz = () => {
    setDifficulty("");
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowSummary(false); //
  };

  if (loading) {
    return <Loader size='xl' />;
  }

  return (
    <>
      {currentQuestionIndex < questions.length ? (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
          questions={questions}
          current={currentQuestionIndex}
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

export default Quiz;
