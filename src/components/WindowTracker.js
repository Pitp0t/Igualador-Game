import React from "react";


export default function  WindowTracker(){

    const [windowWidht, setWindowWidht] = React.useState(window.innerWidth) 


    


    React.useEffect(()=>{
        const watchWidht = ()=>{
            console.log('probandoo')
            setWindowWidht(window.innerWidth)
        }
        
        window.addEventListener('resize',watchWidht)

        return function (){
            console.log('cleaning Up')
            window.removeEventListener('resize',watchWidht)
        }


    },[windowWidht])


    return(
        <div>
            <h1>WIDOW WIDTH: {windowWidht}</h1>
        </div>

    )
}




