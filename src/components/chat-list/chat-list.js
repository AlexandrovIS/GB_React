import {List} from '@material-ui/core'
import React from 'react'
import { Chat } from '../chat'


export class ChatList extends React.Component{
  state={
    chats:['room_1','room_2'],
    selectedIndex:0
  }

  render(){
    const {chats,selectedIndex}=this.state
  return <List>{chats.map((chat, index)=>(
  <Chat title={chat} key={index} selected={selectedIndex}/>
  ))}</List>
  }
}