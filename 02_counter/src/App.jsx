import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//here react makes it easy to add javascript with html but to make it update in the website,it is all in the control of react hooks
function MyApp(){
  let [counter,setCounter]=useState(15)



  const addValue=()=>{
    counter=counter+1
    if (counter<=20){
      setCounter(counter)
    }
    else{
      counter=20
    }
   
     
    console.log(counter);
  }
  const removeValue=()=>{
    counter=counter-1
    if (counter>=0) {
      setCounter(counter) }
    else{
      counter=0
    }
    
    console.log(counter);
  }
  return(
    <>
    <h1>Counter Application</h1>
    <h2>Counter:{counter}</h2>
    <button 
    onClick={addValue}
    >Add Counter</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Counter</button>
    </>

  )




}
export default MyApp