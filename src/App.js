import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Robot from './components/Robot';
import './styles.css';
import robotsList from './helper/robots';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [robots, setRobots] = useState(robotsList);

  useEffect(() => {
    shuffleRobots();
  }, [score]);
  //Fisher-Yates shuffle
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  //cannot put in just prevState because items remain the same,
  //remember to always create copies of arrays in react!
  const shuffleRobots = () => {
    setRobots((prevState) => shuffle([...prevState]));
  };

  const robotCheck = (currRobot) => {
    if (currRobot.clicked === false) {
      incrementScore();
      setRobots(
        robots.map((robot) => {
          if (robot.id === currRobot.id) {
            robot.clicked = true;
          }
          return robot;
        })
      );
    } else {
      resetScore();
      setRobots(
        robots.map((robot) => {
          robot.clicked = false;
          return robot;
        })
      );
    }
  };

  const resetScore = () => {
    setScore(0);
  };
  const incrementScore = () => {
    setScore((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <Header score={score} />
      <div className="robotHolder">
        {robots.map((robot) => {
          return (
            <Robot
              robot={robot}
              robotCheck={robotCheck}
              incrementScore={incrementScore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
