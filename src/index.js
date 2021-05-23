import {ThemeProvider, createMuiTheme} from '@material-ui/core'
import React from 'react'
import ReactDom from 'react-dom'
import {Layout} from './components'

import './style/style.css'

const App=()=>{
  return <>
 <Layout/>
  </>
}

const theme=createMuiTheme({})

ReactDom.render(
  <ThemeProvider theme={theme}>
  <App/>
  </ThemeProvider>,
  document.getElementById("root"),
)
