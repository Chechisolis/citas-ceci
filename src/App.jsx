import { useState } from 'react'
import db from "./db/quotes.json"
import QuoteBox from "./components/QuoteBox"
import './App.css'


  const getRandom = (arrayElements)=>{
  const quantityValues = arrayElements.length
  const randomIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[randomIndex]

  }

  let colors = ["#0048BA","#B0BF1A","#7CB9E8","#3CD070","#B284BE","#5D8AA8",
  "#00308F",  "#72A0C1","#AF002A","#FFF700","#FFAE42","#84DE02","#722F37"
,"#644117","#5FA778","#FC0FC0","#CEC8EF","#893843","#0FC0FC","#DE6FA1"]



function App() {
const [quote,setQuote] = useState(getRandom(db));
const [color,setColor] = useState(getRandom(colors));

const newQuote = () =>{

  console.log(quote.quote);
  console.log(quote.author);
setQuote(getRandom(db))
setColor(getRandom(colors))
}


  return (
    <div className="App" style={{backgroundColor:color}}>
  <QuoteBox quote={quote} color={color} newQuote={newQuote} />

    </div>
  )
}

export default App
