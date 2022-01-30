import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    const[value] = useState(props);

    return (
        <button className="square">
            {value}
        </button>
    );
}
  
function Board(props) {
    Square(props); 
    <Square value={props} />;
    const status = 'Next player: X';

    return(
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {Square(0)}
            {Square(1)}
            {Square(2)}
          </div>
          <div className="board-row">
            {Square(3)}
            {Square(4)}
            {Square(5)}
          </div>
          <div className="board-row">
            {Square(6)}
            {Square(7)}
            {Square(8)}
          </div>
        </div>
    );
};

function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

// ========================================
  
ReactDOM.render(
<Game />,
document.getElementById('root')
);