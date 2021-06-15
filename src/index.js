import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter} from "react-router-dom"
import {Header} from  './components'
import './style/style.css'

const App=()=>{
  return <>
  <Header/>
  </>
}

const roodElement=document.getElementById('root')

ReactDom.render(
  <BrowserRouter>
  
  <App/>
  
  </BrowserRouter>
  ,
  roodElement,
)

