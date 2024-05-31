import React from "react";
import { Question } from "../types";
import CustomButton from "./molecules/CustomButton";
import styled from 'styled-components';


interface SummaryProps {
  score: number;
  questions: Question[];
  restartQuiz: () => void;
}

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  text-align: center;
  justify-content: center;
`;

const Summary: React.FC<SummaryProps> = ({ score, questions, restartQuiz }) => {
  return (
    <InnerContainer>
      <h2>Quiz Complete!</h2>
      <p>Correct Answers: {score}</p>
      <p>Incorrect Answers: {questions.length - score}</p>
      <p>Total Questions Answered: {questions.length}</p>
      <p>Final Score: {(score / questions.length) * 100}%</p>
      <CustomButton size='lg' onClick={restartQuiz}>Restart Quiz</CustomButton>
    </InnerContainer>
  );
};

export { Summary };
