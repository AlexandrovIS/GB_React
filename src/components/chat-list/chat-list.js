import {List} from '@material-ui/core'
import React from 'react'
import { Chat } from './chat'


export class ChatList extends React.Component{
  state={
    chats:['room_1','room_2','Dmitriy'],
    selectedIndex:false
  }

  handelListItemClick=(event,index )=>{
    this.setState({
      selectedIndex: index
      
    })
    

  }

  render(){
    const {chats,selectedIndex}=this.state
    return <List>{chats.map((chat, index)=>(
    <Chat title={chat} key={index} selected={selectedIndex} handelListItemClick={this.handelListItemClick}/>
    ))}</List>
  }
}