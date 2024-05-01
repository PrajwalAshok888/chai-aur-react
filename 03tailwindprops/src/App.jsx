// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/container/card'

function App() {
  let obj={//to pass object as prop in the below argument
    name:"Tushar",
    Usn:"1VI20IS064"
  }

  let arr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-7 rounded-xl mb-8'>Chai aur Code</h1>
      
      <Card username="Manu G" newObj={obj} newArr={arr}/>
      <Card username="Prajwal A" />
    </>
  )
}

export default App
