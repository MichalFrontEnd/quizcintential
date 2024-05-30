import React, { useState } from "react";
import he from "he";
import { shuffleArray } from "../utils";
import { Question } from "../types";

interface QuestionCardProps {
  question: Question;
  handleAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  handleAnswer,
}) => {
  const [textAnswer, setTextAnswer] = useState<string>("");

  // Shuffles all the answer options if the question doesn't require a text input
  const answers =
    question.type !== "text"
      ? shuffleArray([...question.incorrect_answers, question.correct_answer])
      : null;

  const onSubmit = (): void => {
    handleAnswer(textAnswer.toUpperCase());
    setTextAnswer(""); // Reset input after submission
  };

  return (
    <div>
      <h2>{he.decode(question.question)}</h2>
      {question.type === "text" ? (
        <>
          <input
            type='text'
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            placeholder='Type your answer here'
          />
          <button onClick={onSubmit}>Submit</button>
        </>
      ) : (
        <>
          {answers?.map((answer: string, index: number) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
            >
              {he.decode(answer)}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export { QuestionCard };
