import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Ball from './Ball';
import Bar from './Bar';
import Line from './Line';

function App() {
  const time = 50;
  const movement = 20;
  const movementBar = 20;
  const width = document.documentElement.clientWidth - movement;
  const height = document.documentElement.clientHeight - movement;
  const [controlGame, setControlGame] = useState(null);
  const [player1, setPlayer1] = useState({ keyPress: false, keyCode: null });
  const [player2, setPlayer2] = useState({ keyPress: false, keyCode: null });
  const [barLeftPos, setBarLeftPos] = useState(0);
  const [barRightPos, setBarRightPos] = useState(0);

  const barLeft = useRef(null);
  const barRight = useRef(null);

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
          setBarLeftPos(barLeft.current.offsetTop - movementBar);
          break;
        case 'a':
          setBarLeftPos(barLeft.current.offsetTop + movementBar);
          break;
        case 'o':
          setBarRightPos(barRight.current.offsetTop - movementBar);
          break;
        case 'l':
          setBarRightPos(barRight.current.offsetTop + movementBar);
          break;
        default:
          break;
      }
    };
  }, [player1, player2]);

  return (
    <div className="App">
      {console.log(barLeft)}
      {console.log(barRight)}
      {console.log(player1)}
      {console.log(player2)}
      <Ball />
      <Bar position="left" top={barLeftPos} ref={barLeft} />
      <Bar position="right" top={barRightPos} ref={barRight} />
      <Line />
    </div>
  );
}

export default App;
