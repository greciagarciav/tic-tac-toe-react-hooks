import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square({ value, onClick }) {
    
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}
  
function Board() {
    const[valueAllSquares, setvaluesofAllSquares] = useState(Array(9).fill(null));
    const[xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(valueAllSquares); 
      
    function renderSquare(clickedSquare) {
        return <Square
            value={valueAllSquares[clickedSquare]}
            onClick={() => {
                if (valueAllSquares[clickedSquare] != null || winner != null) {
                    return;
                }
                const valueAllSquaresCopy = valueAllSquares.slice();
                valueAllSquaresCopy[clickedSquare] = xIsNext ? "X" : "O";
                setvaluesofAllSquares(valueAllSquaresCopy);

                setXisNext(!xIsNext);
                }}
        />;
    }

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function Restart({ onClick }) {
        return (
            <button className="restart" onClick={onClick}>
                Play again
            </button>
        );
    }
    
    function renderRestartButton() {
        return (
            <Restart
                onClick={() => {
                    setvaluesofAllSquares(Array(9).fill(null));
                    setXisNext(true);
                }}
            />
        );
    }
    

    return(
        <div className="container">
        <div className="title">{'TIC TAC TOE'}</div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="restart-button">{renderRestartButton()}</div>
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


function calculateWinner(valueAllSquares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (valueAllSquares[a] && valueAllSquares[a] === valueAllSquares[b] && valueAllSquares[a] === valueAllSquares[c]) {
        return valueAllSquares[a];
      }
    }
    return null;
  }