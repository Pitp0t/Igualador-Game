import React from "react";
import Die from "../Die";
import Dice from '../images/dice.svg'
import {nanoid} from 'nanoid'
import Confetti from "../Confetti";


export default function Main(){

    const allNewDice=()=>{
        let randomNumberArray=[]
        for(let i = 0;i<=9;i++){
            let dieParameters = {
                value:Math.floor(Math.random() * 6) + 1,
                isHeld:false,
                id:nanoid()
            }

            randomNumberArray.push(dieParameters)
        }
        return randomNumberArray
    }
    

    const toggleIsHeld =(key)=>{
        setDice((prevalue)=>{
            return prevalue.map((die)=>{
                if(die.id === key) return {...die,isHeld:!die.isHeld}
                return die

            })
        })
    }

    
    const reRoll = ()=>{
        setHowManyRolls((prevalue)=>prevalue = prevalue +1 )
        setDice(prevValue =>prevValue.map((dieHeld)=>{
            if(dieHeld.isHeld) return dieHeld
            else{return {...dieHeld, value:Math.floor(Math.random() * 6) + 1, id:nanoid()}}
        }))
    }
    


    const [dice, setDice] = React.useState(allNewDice())
    const [igualador, setIgualador]=React.useState(false)
    
    const [howManyRolls, setHowManyRolls]= React.useState(0)

    const replay = ()=>{
        setIgualador(false)
        setHowManyRolls(0)
        setDice((prevalue)=>prevalue.map((die)=>{
            return{
                value:Math.floor(Math.random() * 6) + 1,
                isHeld:false,
                id:nanoid()
            }
            

        }))
        
        return allNewDice()
    }

    React.useEffect(()=>{
        if(new Set(dice.map((die)=>die.value)).size === 1){
            console.log(igualador)
            return setIgualador(prevalue=>!prevalue)
        }
        
        
        else{return console.log(igualador)}

      
        
    },[dice])


  
    const creatingDieComponents = dice.map((number)=>{
        return(
            <Die
                value={number.value}
                isHeld={number.isHeld}
                key={number.id}
                id={number.id}
                onClick={toggleIsHeld}
            />
        )
    })


    return(
        <div className="mainContainer">
           

            <h1 className="title-game">Igualador</h1>
            <h4 className="subtitle-game">Seleccioná los numeros iguales y volvé a tirrar los dados</h4>
            <div className="main">
                {creatingDieComponents}
            </div>
            {!igualador &&
                <div className="rerolls">
                    <h3>Rolls{howManyRolls}</h3>
                    <button className = 'buttonReRoll'onClick = {reRoll}>ROLL <img src={Dice}></img></button> 
                    
                
                </div>
            }

            {igualador &&
                <div className="confetti">
                    <Confetti/>
                    <div className="wonContainer">
                        <div className="youWon">Ganaste</div>
                        <h3 >En {howManyRolls} rolls</h3>
                        <button className="wonButton" onClick={replay}> Volver a jugar</button>
                    </div>
                </div>
           
            }
        </div>
    )
}