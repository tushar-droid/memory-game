
// eslint-disable-next-line react/prop-types
const EndScreen = ({highScore , gameResult, playAgain, score}) =>{
    

    return(
        <div className="result-screen">
            <h1>{gameResult}</h1>
            <h1>High Score: {highScore}</h1>
            <h1>Your Score: {score}</h1>
            <button className="playagain-btn" onClick={playAgain}>Play again</button>
        </div>
    )
}


export default EndScreen;

