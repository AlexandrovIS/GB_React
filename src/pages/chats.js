import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import {Layout,MessageList} from  '../components'
import ChatList from '../components/chat-list/chat-list'

 export class Chats extends Component{
  render(){
    return<>
    
    <Switch>
      <Route path={['/pages/chats/:roomId', 'pages/chats/']}>
      {(params) => (
     <>
        <Layout 
        chatList={<ChatList  {...params}/>}
        >
          <Route path='/pages/chats/:roomId'>
            <MessageList {...params}/>
          </Route>
          <Route exact={true} path="/chat">
          <h2>message not found</h2>
        </Route>
        </Layout>
     </>
      )}
      </Route>
    </Switch>
    
    </>
  }
}


