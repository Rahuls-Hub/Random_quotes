import React,{useState} from 'react'
import './RandomQuote.css'
import reload_icon from '../Assets/ref1.png'
const RandomQuote = () => {

    let quotes=[];

    async function loadQuotes()
    {
       
        const response=await fetch("https://type.fit/api/quotes");
        quotes=await response.json();

    }

    const[quote,setQuote]=useState({
        text:"old id gold",
        author:"Jon doe",
    });
    const random=()=>
    {
        const select= quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
    loadQuotes();

  return (
    <div className='container'>
        <div className="quote">
           {quote.text} 
        </div>
        <div className="line"></div>
        <div className="bottom">
            <div className="author">-{quote.author.split(',')[0]}</div>
            <div className="icons">
                <img src={reload_icon} onClick={()=>{random()}} alt="" />
               
            </div>
        </div>
    </div>
  )
}

export default RandomQuote
