import React from "react";
import { Question } from "../types";
import CustomButton from "./molecules/CustomButton";
import InnerContainer from "./molecules/InnerContainer";
import styled from "styled-components";
interface SummaryProps {
  score: number;
  questions: Question[];
  restartQuiz: () => void;
}

const SummaryContainer = styled(InnerContainer)`
  height: 100%;
  justify-content: space-between;

  .container__header {
    padding: 2rem;
    font-size: 0.75rem;
    outline: 5px solid var(--secondary-color);
    border: 10px solid var(--light-color);
    background-color: var(--background-color);
    z-index: 5;
    position: relative;
    margin-top: -10px;
    &::after {
      content: " ";
      position: absolute;
      z-index: 2;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border: 6px solid var(--primary-color);
      outline: 7px solid var(--dark-color);
    }
  }

  .container__content {
    padding: 4rem 0 3rem;
    flex: 1;
    width: 70%;
  }

  .container__footer {
   margin-top: auto;
    margin-bottom: 4rem;
  }
`;

export const Summary: React.FC<SummaryProps> = ({
  score,
  questions,
  restartQuiz,
}) => {
  return (
    <SummaryContainer>
      <div className='container__header'>
        <h1 >Quiz Complete!</h1>
      </div>
      <div className='container__content'>
        <p>Correct Answers: {score}</p>
        <p>Incorrect Answers: {questions.length - score}</p>
        <p>Total Questions Answered: {questions.length}</p>
        <h2>Final Score: {(score / questions.length) * 100}%</h2>
      </div>
      <div className='container__footer'>
        <CustomButton size="xl" onClick={restartQuiz}>Restart Quiz</CustomButton>
      </div>
    </SummaryContainer>
  );
};

export default Summary;
