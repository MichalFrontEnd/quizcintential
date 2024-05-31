import React from "react";
import he from "he";
import { shuffleArray } from "../utils";
import { Question } from "../types";
import InnerContainer from "./molecules/InnerContainer";
import TextInputQuestion from "./orgnisms/TextInputQuestion";
import MultipleChoiceQuestion from "./orgnisms/MultipleChoiceQuestion";
import BooleanQuestion from "./orgnisms/BooleanQuestion";

interface QuestionCardProps {
  question: Question;
  handleAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  handleAnswer,
}) => {
  // Shuffles all the answer options if the question doesn't require a text input
  const answers =
    question.type !== "text"
      ? shuffleArray([...question.incorrect_answers, question.correct_answer])
      : [];

  return (
    <InnerContainer>
      <h2>{he.decode(question.question)}</h2>
      {question.type === 'text' && <TextInputQuestion handleAnswer={handleAnswer} />}
      {question.type === 'multiple' && <MultipleChoiceQuestion answers={answers} handleAnswer={handleAnswer} />}
      {question.type === 'boolean' && <BooleanQuestion answers={answers} handleAnswer={handleAnswer} />}
    </InnerContainer>
  );
};

export { QuestionCard };
