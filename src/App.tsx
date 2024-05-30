import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle'
import { Quiz } from './components/Quiz';

const App: React.FC = () => {
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const handleDifficultyChange = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  };

  return (
    <>
    <GlobalStyle />
    <div>
      {!difficulty ? (
        <div>
          <h1>Select Difficulty</h1>
          <button onClick={() => handleDifficultyChange('easy')}>Easy</button>
          <button onClick={() => handleDifficultyChange('medium')}>Moderate</button>
          <button onClick={() => handleDifficultyChange('hard')}>Madness</button>
          <button onClick={() => handleDifficultyChange('sparta')}>Sparta</button>
        </div>
      ) : (
        <Quiz difficulty={difficulty} setDifficulty={setDifficulty}/>
        )}
    </div>
        </>
  );
};

export default App;
