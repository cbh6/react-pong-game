import * as React from 'react';

const GameContext = React.createContext();

function gameReducer(state, action) {
  switch (action.type) {
    case 'setBarLeftPos': {
      return { ...state, barLeftPos: action.payload };
    }
    case 'setBarRightPos': {
      return { ...state, barRightPos: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = React.useReducer(gameReducer, { barLeftPos: 0, barRightPos: 0 });
  const value = { state, dispatch };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

function useGame() {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}

export { GameProvider, useGame };
