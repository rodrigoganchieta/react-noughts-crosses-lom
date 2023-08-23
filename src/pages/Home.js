import React, { useEffect } from 'react';
import './Home.css';

import GameContextProvider from '../contexts/GameContext';
import Board from '../components/Board';

export default function Home() {
  useEffect(() => {
    document.title = 'Noughts and Crosses -  React';
  }, []);

  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}
