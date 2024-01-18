import './styles/startScreenStyles.css';
import coverImage from '../src/assets/images/startimage.jpg'
// eslint-disable-next-line react/prop-types
const StartScreen = ({startGame}) =>{
    const howToPlay = () =>{
        const inst = document.querySelector('.instructions')
        inst.style.display = inst.style.display ==='none' ? '': 'none'; 
    }

    return(
        <div className='start-screen'>
            <img src={coverImage} className='cover-image'/>
            <div className="menu">
                <h1>WELCOME LEGENDS</h1>
                <h2>SELECT YOUR DIFFICULTY LEVEL</h2>
                <div className="diff-buttons">
                    <button onClick={() =>startGame(5)}>Easy</button>
                    <button onClick={() => startGame(7)}>Medium</button>
                    <button onClick={() => startGame(9)}>Hard</button>
                    <button onClick={() => startGame(24)}>God mode</button>
                    <button onClick={howToPlay}>How to play?</button>
                </div>
                <h4 style={{display:'none'}} className='instructions'>Just don&apos;t click on the same tile twice</h4>
            </div>
        </div>
    )
}
export default StartScreen;