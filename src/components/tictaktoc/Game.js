import React from 'react'
import Board from './Board'

function Game(props) {
    return (
        <div className="game">
            <div className="game-board">
                <h3>Play tic tac toc</h3>
                <Board />
            </div>
        </div>
    )
}

export default Game
