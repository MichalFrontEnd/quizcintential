import React from "react";
import { Stack, Title } from "@mantine/core";
import CustomButton from "./molecules/CustomButton";
import InnerContainer from "./molecules/InnerContainer";

interface DifficultyMenuProps {
  onSelectDifficulty: (difficulty: string) => void;
}

const DifficultyMenu: React.FC<DifficultyMenuProps> = ({
  onSelectDifficulty,
}) => {
  return (
    <InnerContainer>
       <div className="container__header"><Title>Select Difficulty Level</Title>
       </div>
       <div className="container__content">
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
      </div>
    </InnerContainer>
  );
};

export default DifficultyMenu;
