import React, { useState } from "react";
import CustomButton from "../../molecules/CustomButton/CustomButton";
import { Stack } from "@mantine/core";
import styled from "styled-components";

interface TextInputQuestionProps {
  handleAnswer: (answer: string) => void;
}

const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  border: 3px solid var(--primary-color);
  outline: 4px solid var(--dark-color);
  border-radius: 2px;
  font-size: 16px;
  color: var(--text-color);
  background-color: var(--input-background-color);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

export const TextInputQuestion: React.FC<TextInputQuestionProps> = ({
  handleAnswer,
}) => {
  const [textAnswer, setTextAnswer] = useState<string>("");

  const onSubmit = (): void => {
    handleAnswer(textAnswer.toUpperCase());
    setTextAnswer("");
  };

  return (
    <Stack
      align='stretch'
      justify='center'
      gap='lg'
    >
      <StyledInput
        type='text'
        value={textAnswer}
        onChange={(e) => setTextAnswer(e.target.value)}
        placeholder='Type your answer here'
      />
      <CustomButton size='lg' onClick={onSubmit}>Submit</CustomButton>
    </Stack>
  );
};

export default TextInputQuestion;
