import React from "react";
import he from "he";
import { shuffleArray } from "../../../utils";
import { Question } from "../../../types";
import InnerContainer from "../../molecules/InnerContainer/InnerContainer";
import TextInputQuestion from "../TextInputQuestion";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import BooleanQuestion from "../BooleanQuestion";
import Counter from "../../molecules/Counter";

interface QuestionCardProps {
  question: Question;
  questions: Question[];
  handleAnswer: (answer: string) => void;
  current: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  handleAnswer,
  questions,
  current,
}) => {
  // Shuffles all the answer options if the question doesn't require a text input
  const answers =
    question.type !== "text"
      ? shuffleArray([...question.incorrect_answers, question.correct_answer])
      : [];

  return (
    <InnerContainer>
      <div className='container__header'>
        <h2>{he.decode(question.question)}</h2>
        <Counter
          current={current}
          total={questions.length}
        />
      </div>
      <div className='container__content'>
        {question.type === "text" && (
          <TextInputQuestion handleAnswer={handleAnswer} />
        )}
        {question.type === "multiple" && (
          <MultipleChoiceQuestion
            answers={answers}
            handleAnswer={handleAnswer}
          />
        )}
        {question.type === "boolean" && (
          <BooleanQuestion
            answers={answers}
            handleAnswer={handleAnswer}
          />
        )}
      </div>
    </InnerContainer>
  );
};

export default QuestionCard;
