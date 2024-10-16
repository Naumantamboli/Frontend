// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function newFunction(){
  return (
    <div>
      <h1>New function created</h1>
    </div>
  )
}

const anotherUser = "chai aur code"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target : '_blank'},
  'click me ',
  anotherUser               //we can write variables as this
)

ReactDom.createRoot(document.getElementById('root')).render(
  // <App />
  // App()  we can also write it as a function call
  // <newFunction />
  // newFunction()
  reactElement
)
