import React, { useState } from 'react';
import { Quiz } from './components/Quiz';

const App: React.FC = () => {
  const [level, setLevel] = useState<string | null>(null);

  const handleLevelChange = (newLevel: string) => {
    setLevel(newLevel);
  };

  return (
    <div>
      {!level ? (
        <div>
          <h1>Select Level</h1>
          <button onClick={() => handleLevelChange('easy')}>Easy</button>
          <button onClick={() => handleLevelChange('medium')}>Moderate</button>
          <button onClick={() => handleLevelChange('hard')}>Madness</button>
          <button onClick={() => handleLevelChange('sparta')}>Sparta</button>
        </div>
      ) : (
        <Quiz level={level} setLevel={setLevel}/>
      )}
    </div>
  );
};

export default App;
