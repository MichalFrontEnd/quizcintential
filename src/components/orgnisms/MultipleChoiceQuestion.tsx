import React from "react";
import CustomButton from "../molecules/CustomButton";
import { Stack } from "@mantine/core";
import he from "he";

interface MultipleChoiceQuestionProps {
  answers: string[];
  handleAnswer: (answer: string) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  answers,
  handleAnswer,
}) => {
  return (
    <Stack
      align='stretch'
      justify='center'
      gap='md'
    >
      {answers?.map((answer, index) => (
        <CustomButton
          size='lg'
          key={index}
          onClick={() => handleAnswer(answer)}
        >
          {he.decode(answer)}
        </CustomButton>
      ))}
    </Stack>
  );
};

export default MultipleChoiceQuestion;
