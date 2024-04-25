import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return(
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ab obcaecati quidem deserunt enim cupiditate vitae sint perferendis quod eius. Architecto laboriosam obcaecati doloremque velit. Facilis sapiente esse quis numquam?</p>
//   )
// }
//and since whatever html tags that will be used inside functions are ultimateley parsed in the following to be understood by react ,we'll try tu use this object itself to render
// const Element={
//   key:'a',
//   props:{
//       href:"https://www.google.com",
//       target:"_blank"
//   },
//   value:"Click me to visit Google"

// }
const username="Chai aur javascript"
const reactElement=React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank'

  },
  "Click Me",
  username//including variables(only evaluated expression such as variables) at the end step
)


// const newElement=(
//   <a href="https://google.com" target="_blank">Visit Google</a>
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  //this is basically a vite syntax which is internally parsing the function which similar to the object that u wrote in customreact.js file

  //other method, since anyway App is a functon inside App.jsx ,we can write the function inside this file only 
  // MyApp()

  //other method

  // *Element*//this wont work because this we used in custom react and we created a custom render function to render this object

  //to solve this modify the first method
  // *newElement*// this will work becuase its doing the same as the 1st method where ur returning the html elemnt and react.render will render it according to its own syntax

  //in order to solve the other method of including the object,u just create an element bu using the syntax of React itself
  reactElement
  
)

