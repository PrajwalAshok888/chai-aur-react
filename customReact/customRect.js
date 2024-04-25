const domContainer=document.querySelector("#root")

const element={
    key:'a',
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    value:"Click me to visit Google"

}

function createRender(element,domContainer){
    /*
    const domElement=document.createElement(element.key)
    domElement.innerHTML=element.value
    domElement.setAttribute('href',element.props.href)
    domElement.setAttribute('target',element.props.target)
    domContainer.appendChild(domElement)

    this is good for elements which has attributes but what for other elements without any properties
    */

    // to solve above problem make the function more modular
    const domElement=document.createElement(element.key)
    domElement.innerHTML=element.value
    for (const prop in element.props) {
        if(prop==="value") continue
        domElement.setAttribute(prop,element.props[prop])
    }
    domContainer.appendChild(domElement)

    //this solves setting attributes manually for 100s of elements
    //if there are no properties for html element just dont include props object
}
createRender(element,domContainer)