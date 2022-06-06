import React from "react";


export default function Die(prop){

    let backgroundChange
    prop.isHeld ? backgroundChange={backgroundColor: "#59E391"}: backgroundChange={backgroundColor: "transparent"}

    return(
        <div className="boxGame" style={backgroundChange} onClick={()=>{prop.onClick(prop.id)}}>
            <h2 className="boxGame__h2">{prop.value}</h2>
        </div>
    )
}





