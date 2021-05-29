import {ThemeProvider, createMuiTheme} from '@material-ui/core'

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter} from "react-router-dom"
import {Header} from  './components'
import './style/style.css'

const App=()=>{
  return <>
  <Header/>
  
{/*   
 <Layout 
 chatList={<ChatList/>} 
 messageList={<MessageList/>}
 />
  <div>
     <Link to="/chat/room1">TEst1</Link>   
     <Link to="/chat/room2">TEst2</Link>
    <Switch>
      <Route path={["/chat/:roomId"]}>
         {(params) => (
          <MessageProvider {...params}>
            {([state, actions]) => (
             <>
                {console.log(state, actions)}
                @TODO сюда передать данные из state
                <ChatList chat={state}/>
               
                <MessageList/>
              </>
            )}
          </MessageProvider>
        )}
      </Route>
    </Switch>
  </div> */}

 </>
// return (
//   <div>
//     <Link to="/chat/room1">TEst1</Link>
//     <Link to="/chat/room2">TEst2</Link>
//     <Switch>
//       <Route path={["/chat/:roomId"]}>
//         {(params) => (
//           <MessageProvider {...params}>
//             {([state, actions]) => (
//              <>
//                 {/* {console.log(state, actions)} */}
//                 {/* @TODO сюда передать данные из state */}
//                 <ChatList chats={state}/>
               
//                 <MessageList messages={state} fun={actions}/>
//               </>
//             )}
//           </MessageProvider>
//         )}
//       </Route>
//     </Switch>
//   </div>
// )
}

const theme=createMuiTheme({})
const roodElement=document.getElementById('root')

ReactDom.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
  <App/>
  </ThemeProvider>
  </BrowserRouter>
  ,
  roodElement,
)

