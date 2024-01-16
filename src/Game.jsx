import Cards from "./compnents/cards";
import '../src/styles/styles.css'
import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
const Game = ({level}) =>{

  let size = level;   
  const [randNumbers, setrandNumbers] = useState([]);
  const [clickedCards, setClickedCards] = useState([])
  const [counter, setCounter] =useState(0)
  console.log('Set level is: ',level)

  
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
      });
    }, 2000);



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
    if(clickedCards.length ===0){             //For the First run

      let uniqueArray = [];
      while (uniqueArray.length < 3) {     // changing size to 3
        let randomValue = Math.floor(Math.random() * 3);  // changing size to 3
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
          console.log('ran');
          while (uniqueArray.length < 3) {                       // changing size to 3
            let randomValue = Math.floor(Math.random() * size);     
            if (!uniqueArray.includes(randomValue)) {
              uniqueArray.push(randomValue);
            }
          }  
          console.log('clicked : ', clickedCards)
          console.log('New : ', uniqueArray)
        }while(checkArrays(clickedCards, uniqueArray))
        setrandNumbers(uniqueArray)    
        // let uniqueArray = [];
        // while (uniqueArray.length < size) {
        //   let randomValue = Math.floor(Math.random() * size);  
        //   if (!uniqueArray.includes(randomValue)) {
        //     uniqueArray.push(randomValue);
        // setrandNumbers(uniqueArray)    

        //   }
        // }
      },1000)

    }
    setCounter(() => clickedCards.length);
    if(counter >=size)
      window.alert('You win')

  }, [clickedCards, size, counter])



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
      <h2>Level: {level}</h2>
    </>
  )
}

export default Game;