import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import {Layout,ChatList,MessageList,MessageProvider} from  '../components'
// eslint-disable-next-line import/no-default-export
export default class Chats extends Component{
  render(){
    return(
    <Switch>
    <Route path={["/chat/:roomId", "/chat"]}>
      {(params) => (
        <MessageProvider {...params}>
          {([state, actions]) => {
            
            return (
              <Layout
                chatList={<ChatList {...params} {...state} />}
              >
                <Route path="/chat/:roomId">
                  <MessageList {...state} {...actions} />
                </Route>
                
              </Layout>
            )
          }}
        </MessageProvider>
      )}
    </Route>
    <Route
      exact={true}
      path="*"
      component={() => <h1>такого чата нет</h1>}
    />
  </Switch>)
  }
}
