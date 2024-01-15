import legendsArray from "./legends";

// eslint-disable-next-line react/prop-types
const Cards = ({cardId, clickHandler}) =>{
    const indx = legendsArray.findIndex((legend) => legend.id === cardId);
    return(
        <div className="legend-card" onClick={e => clickHandler(e, indx)}>
            <img src = {legendsArray[indx].imgSrc} />
            <h1>{legendsArray[indx].name}</h1>
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