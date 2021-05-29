import React, {Component} from 'react'
import {Layout,ChatList,MessageList} from  '../components'

// eslint-disable-next-line import/no-default-export
export default class Chats extends Component{
  render(){
    return<>
      <Layout chatList={<ChatList/>} messageList={<MessageList/>}/>
      </>
  }
}
