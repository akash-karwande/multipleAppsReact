import React, { useState } from 'react'
import Square from './Square';
import './game.css'

function Board() {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXnext, setIsXnext] = useState(true)

    console.log(squares)

    const handleClick = (i) => {

        const square = squares.slice();
        if (calculateWinner(squares) || square[i]) {
            return;
        }
        square[i] = isXnext ? 'X' : 'O';
        setSquares(square);
        setIsXnext(!isXnext);
    }

    const renderSquare = (i) => {
        return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />;
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner is  ' + winner;
    } else {
        status = 'Next player: ' + (isXnext ? 'x' : 'o');
    }

    const restart = () => {
        setSquares(Array(9).fill(null));
    }

    return (
        <div>
            <div className="status" id={winner? 'winner': ''}>{status}
            <button className='restartTic' onClick={() => restart()}>Restart</button>
            </div>

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
        </div>
    )
}

export default Board


function calculateWinner(squares) {
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
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
