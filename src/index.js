import React from 'react'
import ReactDom from 'react-dom'
import {MessageField} from './components'
import './style/style.css'

const App=()=>{
  return <><MessageField/></>
}


ReactDom.render(
  <React.Fragment>
  <App/>
  </React.Fragment>,
  document.getElementById("root"),
)
