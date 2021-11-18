import React from 'react'

function Start({startGame}) {
    return (
        <div>
            <h1>START SCREEN</h1>
            <button onClick={() => startGame()}>Start!</button>
        </div>
    )
}

export default Start
