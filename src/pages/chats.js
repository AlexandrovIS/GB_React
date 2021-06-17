import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import {Layout,ChatList,MessageList,MessageProvider} from  '../components'

// eslint-disable-next-line import/no-default-export
export default class Chats extends Component{
  render(){
    return<>
    <Switch>
      <Route path={['/pages/chats/:roomId', 'pages/chats/']}>
      {(params) => (
      <MessageProvider {...params}>
      {([state, actions]) => 
      
        <Layout 
        chatList={<ChatList {...state} {...params}/>}
        >
          <Route path='/pages/chats/:roomId'>
            <MessageList {...state} {...actions}/>
          </Route>
        </Layout>
      }
      </MessageProvider>
      )}
      </Route>
    </Switch>
    </>
  }
}