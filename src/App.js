import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Ball from './Ball';
import Bar from './Bar';
import Line from './Line';
import { useGame } from './GameContext';

function App() {
  const time = 50;
  const movement = 20;
  const movementBar = 20;
  const width = document.documentElement.clientWidth - movement;
  const height = document.documentElement.clientHeight - movement;
  const [controlGame, setControlGame] = useState(null);
  const [player1, setPlayer1] = useState({ keyPress: false, keyCode: null });
  const [player2, setPlayer2] = useState({ keyPress: false, keyCode: null });

  const barLeft = useRef(null);
  const barRight = useRef(null);

  const { state, dispatch } = useGame();

  const play = () => {};

  const stop = () => {
    clearInterval(controlGame);
    setControlGame(null);
    document.body.style.background = '#f00';
  };

  useEffect(() => {
    setControlGame(setInterval(play, time));
  }, []);

  useEffect(() => {
    document.onkeydown = function (e) {
      switch (e.key) {
        case 'q':
          dispatch({ type: 'setBarLeftPos', payload: barLeft.current.offsetTop - movementBar });
          break;
        case 'a':
          dispatch({ type: 'setBarLeftPos', payload: barLeft.current.offsetTop + movementBar });
          break;
        case 'o':
          dispatch({ type: 'setBarRightPos', payload: barRight.current.offsetTop - movementBar });
          break;
        case 'l':
          dispatch({ type: 'setBarRightPos', payload: barRight.current.offsetTop + movementBar });
          break;
        default:
          break;
      }
    };
  }, [player1, player2, dispatch]);

  return (
    <div className="App">
      {console.log(JSON.stringify(state))}
      <Ball />
      <Bar position="left" top={state.barLeftPos} ref={barLeft} />
      <Bar position="right" top={state.barRightPos} ref={barRight} />
      <Line />
    </div>
  );
}

export default App;
