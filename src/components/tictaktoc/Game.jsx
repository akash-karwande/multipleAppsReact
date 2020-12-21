import React, {useEffect} from 'react'
import Board from './Board'

function Game(props) {

    useEffect(() => {
        document.title = 'Play | TicTak'
    },[])
    return (
        <div className="game">
            <div className="game-board">
                <h2>Play Tic Tac Toc</h2>
                <Board />
            </div>
        </div>
    )
}

export default Game
