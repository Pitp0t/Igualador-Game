import React from "react";
import igualador from '../images/igualador.svg'

export default function Nav(){

    


    return (
        <div className="nav">
            <div className="logoContainer">
                <img className="nav--logo" src={igualador}></img>
                <h2 className="nav--instagram">Ingualador</h2>
            </div>
            
            <div><button className="portfolio"><a href="https://gonzaloiurman.com/">Portfolio</a></button></div>
         

        </div>
    )
}