import React from 'react';
import CustomButton from "../../molecules/CustomButton";
import { Group } from '@mantine/core';


interface BooleanQuestionProps {
  answers?: string[];
  handleAnswer: (answer: string) => void;
}

export const BooleanQuestion: React.FC<BooleanQuestionProps> = ({ answers, handleAnswer }) => {
  return (
    <Group justify="center">
      {answers?.map((answer, index) => (
        <CustomButton key={index} size='lg' onClick={() => handleAnswer(answer)}>
          {answer}
        </CustomButton>
      ))}
    </Group>
  );
};

export default BooleanQuestion;
