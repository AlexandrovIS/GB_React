import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter} from "react-router-dom"
import {createStore,compose} from 'redux'
import roodReducer from '../src/store/reducers/roodReducer'
import {Header} from  './components'
import './style/style.css'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
    
const store=createStore(roodReducer,composeEnhancers())

const App=()=>{
  return <>
  <Header/>
  </>
}

const roodElement=document.getElementById('root')

const app=(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
)

ReactDom.render(app,roodElement)

