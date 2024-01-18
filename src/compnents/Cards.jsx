import legendsArray from "./legends";
import cardLogo from '../assets/images/back-logo.png'
// eslint-disable-next-line react/prop-types
const Cards = ({cardId, clickHandler}) =>{
    const indx = legendsArray.findIndex((legend) => legend.id === cardId);
    return(
        <div className="legend-card flipped" onClick={e => clickHandler(e, indx)}>
            <div className="front card-face">
            <img src = {'src/assets/images/'+legendsArray[indx].name+'.png'} className="card-image"/>

                {/* <img src = {legendsArray[indx].imgSrc} className="card-image"/> */}
                <h1 className="legend-title">{legendsArray[indx].name}</h1>
            </div>
            <div className="back card-face">
                <img src={cardLogo} />
            </div>
        </div>
    )    
    // return (legendsArray.map((legend) =>
    // <div className="legend-card" key={legend.id}>
    //     <img src={legend.imgSrc}/>
    //     <h1>{legend.name}</h1>
    // </div>        
    // ))
}

export default Cards;