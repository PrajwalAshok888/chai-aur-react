
// import Chai from "./chai";
// function App() {
    
  
// return(
   
//     <Chai/>
    

// );
 
// }

// export default App

// now that u know how to inject html into browse, lets learn to inject javascript
const username="Chai aur React"
function jsElement() {
    return(<>
    <h1>Lorem, ipsum dolor.</h1>
    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
    {username} 
    {/* this is a evaluated expression and im not going to include this in main from this file i'll dirctly write this in main file to understand better */}
    </>)
}
export default jsElement