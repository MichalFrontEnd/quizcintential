import React from 'react';

interface CounterProps {
  current: number;
  total: number;
}

export const Counter: React.FC<CounterProps> = ({ current, total }) => {
  return (
    <div>
      <h3>{current+1} / {total}</h3>
    </div>
  );
};

export default Counter;