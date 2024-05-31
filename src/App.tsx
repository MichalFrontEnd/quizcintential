import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle'
import { Quiz } from './components/Quiz';
import DifficultyMenu from './components/DifficultyMenu';
import WrapperContainer from './components/molecules/WrapperContainer';

const App: React.FC = () => {
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const handleDifficultyChange = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  };

  return (
    <>
      <GlobalStyle />
      <WrapperContainer size="sm">
        {!difficulty ? (
          <DifficultyMenu onSelectDifficulty={handleDifficultyChange} />
        ) : (
          <Quiz difficulty={difficulty} setDifficulty={setDifficulty} />
        )}
      </WrapperContainer>
    </>
  );
};

export default App;

