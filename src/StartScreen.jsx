import './styles/startScreenStyles.css'
// eslint-disable-next-line react/prop-types
const StartScreen = ({startGame}) =>{
    return(
        <>
            <h1>Welcome to the game</h1>
            <h2>Select you difficulty level</h2>
            <button onClick={() =>startGame(5)}>Easy</button>
            <button onClick={() => startGame(7)}>Medium</button>
            <button onClick={() => startGame(9)}>Hard</button>
            <button onClick={() => startGame(24)}>God mode</button>
        </>

    )
}

export default StartScreen;