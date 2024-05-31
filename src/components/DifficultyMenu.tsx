import React from "react";
import styled from "styled-components";
import { Stack, Title } from "@mantine/core";
import CustomButton from "./molecules/CustomButton";

const DifficultyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30%;
  height: 70vh;
  padding: 3rem;
  text-align: center;
`;

interface DifficultyMenuProps {
  onSelectDifficulty: (difficulty: string) => void;
}

const DifficultyMenu: React.FC<DifficultyMenuProps> = ({
  onSelectDifficulty,
}) => {
  return (
    <DifficultyContainer>
      <Title>Select Difficulty Level</Title>
      <Stack
        align='stretch'
        justify='center'
        gap='md'
      >
        <CustomButton
          size='lg'
          onClick={() => onSelectDifficulty("easy")}
        >
          Easy
        </CustomButton>
        <CustomButton
          size='lg'
          onClick={() => onSelectDifficulty("medium")}
        >
          Medium
        </CustomButton>
        <CustomButton
          size='lg'
          onClick={() => onSelectDifficulty("hard")}
        >
          Hard
        </CustomButton>
        <CustomButton
          size='lg'
          onClick={() => onSelectDifficulty("sparta")}
        >
          Sparta
        </CustomButton>
      </Stack>
    </DifficultyContainer>
  );
};

export default DifficultyMenu;
