import Cards from "./compnents/Cards.jsx";
import '../src/styles/styles.css'

import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
const Game = ({level, endScreen, back}) =>{

  const tiles = level - 2;



  let size = level;   
  const [randNumbers, setrandNumbers] = useState([]);
  const [clickedCards, setClickedCards] = useState([])
  const [counter, setCounter] =useState(0)

  const cardClicked = (e, id) =>{
    const allCards = document.querySelectorAll('.legend-card');
    allCards.forEach(card => {
      if(!card.classList.contains('flipped'))
        card.classList.add('flipped');
    });
    setTimeout(() => {
      const allCards = document.querySelectorAll('.legend-card');
      allCards.forEach(card => {
        card.classList.remove('flipped');
      })
    }, 1000);
    if(clickedCards.includes(id))
    {
      endScreen('Game Over you clicked the same tile', counter)
      setClickedCards([])
      return
    }
    const temp = [...clickedCards];
    temp.push(id)
    setCounter(clickedCards.length + 1)
    setClickedCards(temp)    
  }


  useEffect(() => {
    let nextRound =true;
    if(counter >= size){
      nextRound = false
      endScreen('Good job', counter)
    }

    if(clickedCards.length ===0){             //For the First run
      console.log('looping here');
      let uniqueArray = [];
      while (uniqueArray.length < tiles) {     // changing size to 3 now to tiles
        let randomValue = Math.floor(Math.random() * tiles);  // changing size to 3 now to tiles
        if (!uniqueArray.includes(randomValue)) {
          uniqueArray.push(randomValue);
        }
      }
      setrandNumbers(uniqueArray)          

      setTimeout(() => {
        const allCards = document.querySelectorAll('.legend-card');
        allCards.forEach(card => {
          card.classList.remove('flipped');
        });
      }, 500);


    }
    else{      
      setTimeout(()=>{
        let uniqueArray = [];
        const checkArrays = (arrayOfClickedCards, arrayOfNewCards) =>{
          if(arrayOfClickedCards.length < arrayOfNewCards)
            return false          
          return arrayOfNewCards.every(v => arrayOfClickedCards.includes(v))          
        }


        do{
          uniqueArray = [];
          while (uniqueArray.length < tiles) {                       // changing size to 3
            let randomValue = Math.floor(Math.random() * size);     
            if (!uniqueArray.includes(randomValue)) {
              uniqueArray.push(randomValue);
            }
          }
          if(nextRound ===false)
            break
          
          console.log('Runnign')

        }while(checkArrays(clickedCards, uniqueArray))
        setrandNumbers(uniqueArray)    
        console.log('score is: ', counter)

      },800)

    }
  }, [clickedCards, size, counter, endScreen, tiles])





  return(
    <div className="gameScreen">
      <div className="cards-container">
        {randNumbers.map((ind) => 
          <Cards 
          cardId = {ind}
          key = {ind}
          clickHandler={cardClicked}
          />
        )}
      </div>
      <div className="score-container">
        <h1>Score: {counter}</h1> 
        <button className="go-back" onClick={back}>Back</button>
      </div>
    </div>
  )
}

export default Game;