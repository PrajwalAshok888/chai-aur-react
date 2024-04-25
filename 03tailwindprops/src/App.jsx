// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from '../container/card'

function App() {
  let obj={
    name:"Tushar",
    Usn:"1VI20IS064"
  }

  let arr=[1,2,3,4]
  return (
    <>
      <h1 className='bg-green-400 text-black p-7 rounded-xl'>Chai aur Code</h1>
      <Card username="Prajwal" newName={obj.name} newUsn={obj.Usn} newArr={arr[2]}/>
      <Card buttonText="Do not click me"/>
    </>
  )
}

export default App
