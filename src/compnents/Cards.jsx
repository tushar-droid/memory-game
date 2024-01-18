import legendsArray from "./legends";
import cardLogo from '../assets/images/back-logo.png'

import ash from '../assets/images/ash.png'
import ballistic from '../assets/images/ballistic.png'
import bangalore from '../assets/images/bangalore.png'
import bloodhound from '../assets/images/bloodhound.png'
import catalyst from '../assets/images/catalyst.png'
import caustic from '../assets/images/caustic.png'
import conduit from '../assets/images/conduit.png'
import crypto from '../assets/images/crypto.png'
import fuse from '../assets/images/fuse.png'
import gibraltar from '../assets/images/gibraltar.png'
import horizon from '../assets/images/horizon.png'
import lifeline from '../assets/images/lifeline.png'
import loba from '../assets/images/loba.png'
import madmaggie from '../assets/images/madmaggie.png'
import mirage from '../assets/images/mirage.png'
import newcastle from '../assets/images/newcastle.png'
import octane from '../assets/images/octane.png'
import pathfinder from '../assets/images/pathfinder.png'
import rampart from '../assets/images/rampart.png'
import revenant from '../assets/images/revenant.png'
import seer from '../assets/images/seer.png'
import valkyrie from '../assets/images/valkyrie.png'
import vantage from '../assets/images/vantage.png'
import wattson from '../assets/images/wattson.png'


// eslint-disable-next-line react/prop-types
const Cards = ({cardId, clickHandler}) =>{
    const legendImages = {
        'ash': ash,
        'ballistic': ballistic,
        'bangalore': bangalore,
        'bloodhound': bloodhound,
        'catalyst':catalyst,
        'caustic':caustic,
        'conduit':conduit,
        'crypto':crypto,
        'fuse':fuse,
        'gibraltar':gibraltar,
        'horizon':horizon,
        'lifeline':lifeline,
        'loba':loba,
        'madmaggie':madmaggie,
        'mirage':mirage,
        'newcastle':newcastle,
        'octane':octane,
        'pathfinder':pathfinder,
        'rampart':rampart,
        'revenant':revenant,
        'seer':seer,
        'valkyrie':valkyrie,
        'vantage':vantage,
        'wattson':wattson,
    }




    const indx = legendsArray.findIndex((legend) => legend.id === cardId);

    return(
        <div className="legend-card flipped" onClick={e => clickHandler(e, indx)}>
            <div className="front card-face">
            <img src = {legendImages[legendsArray[indx].name]} className="card-image"/>
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