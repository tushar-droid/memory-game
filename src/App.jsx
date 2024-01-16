import { useState } from "react";
import Game from "./Game";
import StartScreen from "./StartScreen";
const App = () =>{

    const [page, setPage] = useState('startScreen')
    const [level, setLevel] = useState();
    
    const startGame = (selectedLevel) =>{
        console.log('selected level is :', selectedLevel);
        setPage('game');     
        setLevel(selectedLevel)           
    }




    return(
        <>
            {page ==='startScreen' && <StartScreen 
                startGame ={startGame}
            />}
            {page==='game' && 
            <Game
                level={level}/>}
        </>
    )
}


export default App;