import React from "react";




// https://api.imgflip.com/get_memes


export default  function Memes(){
    
   

    const [meme, setMeme]= React.useState({
        topText:'',
        bottomText:'',
        randomImg:'https://i.imgflip.com/4t0m5.jpg'
    });


    const [allMemes, setAllMemes] = React.useState('')

    const allMemesRequest = React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res=>res.json())
        .then(res=>setAllMemes(res.data.memes))
     
    },[setMeme])

    


    const useInputValue = (e)=>{
        const {value, name} = e.target
        setMeme((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            }
        })

    }
  
    






    const getMemes = ()=>{
        const randomNumber=Math.floor(Math.random()*100)
        let url = allMemes[randomNumber].url
        console.log(url)
        
        return setMeme((prevValue)=>{
            return{
                ...prevValue,
                randomImg: url
            }
        })
    }


    return(
        <div className="form" >
            <form className="form-formulario">
                <div className="form--container">
                    
                    <input type='text'
                        onChange={useInputValue} 
                        placeholder="Put your title here"
                        value={meme.topText}
                        name='topText'
                    
                    />
                    
                    
                    <input type='text' 
                        onChange={useInputValue} 
                        placeholder="Put your subtitle here"
                        value={meme.bottomText}
                        name='bottomText'
                    />
                
                
                </div>
                <button className='form--boton'onClick={getMemes} type="button">Meme con palabras 🖼️</button>
            </form>
            <div>
                <h1 className="title-meme">{meme.topText}</h1>
                <div className="imgContainer">
                    <img className="imageMeme" src={meme.randomImg}></img>
                </div>
                <h1 className="subtitle-meme">{meme.bottomText}</h1>

            </div>
        </div>

    )
}