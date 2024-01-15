import Cards from "./compnents/cards";
import '../src/styles/styles.css'
import { useState, useEffect } from "react";
const App = () =>{
  
  const [randNumbers, setrandNumbers] = useState([1,5,2,6,9]);
  const [clickedCards, setClickedCards] = useState([])
  const [counter, setCounter] =useState(0)


  
  const cardClicked = (e, id) =>{


    if(clickedCards.includes(id))
    {
      window.alert('Game Over')
      setClickedCards([])
      return
    }

    const temp = [...clickedCards];
    temp.push(id)
    setClickedCards(temp)    
  }


  useEffect(() => {
    let size = 5; 
    let uniqueArray = [];
    while (uniqueArray.length < size) {
      let randomValue = Math.floor(Math.random() * 6);  
      if (!uniqueArray.includes(randomValue)) {
        uniqueArray.push(randomValue);
      }
    }
    setrandNumbers(uniqueArray)    


    setCounter(clickedCards.length)
  }, [clickedCards])



  return(
    <>
      <div className="cards-container">
        {randNumbers.map((ind) => 
          <Cards 
          cardId = {ind}
          key = {ind}
          clickHandler={cardClicked}
          />
        )}
      </div>
      <h1>Score: {counter}</h1>
    </>
  )
}

export default App;