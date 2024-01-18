import { useState } from "react";
import Game from "./Game";
import StartScreen from "./StartScreen";
import EndScreen from "./EndScreen";
const App = () =>{
    // let highScore = 0;
    const [highScore, sethighScore] = useState(0)
    const [score, setScore] = useState(0)
    const [gameResult, setgameResult] = useState('');
    const [page, setPage] = useState('startScreen')
    const [level, setLevel] = useState();
    
    const startGame = (selectedLevel) =>{
        console.log('selected level is :', selectedLevel);
        setPage('game');     
        setLevel(selectedLevel)           
    }
    
    const GameComplete = (res, score) =>{
        setgameResult(res);
        setScore(score)
        if(score > highScore)
            sethighScore(score)        
        setPage('endScreen')
    }



    return(
        <>
            {page ==='startScreen' && <StartScreen 
                startGame ={startGame}

            />}
            {page==='game' && 
            <Game
                level={level}
                endScreen={GameComplete}
                />}
            {page === 'endScreen' && 
            <EndScreen                 
                gameResult={gameResult}
                highScore = {highScore}
                score = {score}
                playAgain={() => setPage('startScreen')}
                />
            
            }


        </>
    )
}


export default App;