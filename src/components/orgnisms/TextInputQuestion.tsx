import React, { useState } from "react";
import CustomButton from "../molecules/CustomButton";
import { Stack } from "@mantine/core";

interface TextInputQuestionProps {
  handleAnswer: (answer: string) => void;
}

const TextInputQuestion: React.FC<TextInputQuestionProps> = ({
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
      gap='md'
    >
      <input
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
