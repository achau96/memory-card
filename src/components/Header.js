import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <div>Memory Card Game</div>
      <div>Score: {props.score} &nbsp; High Score: 0</div>
    </div>
  );
};

export default Header;
