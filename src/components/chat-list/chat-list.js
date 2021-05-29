import {List} from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
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
    const {conversations}=this.props
    console.log(conversations)
    return (
      
      
      <List >
        {conversations.conversations.map((chat, index)=>(<>
          <Link key={index} to={`/chat/${chat.title}`}>
          <Chat 
          title={chat}
          
          index={index} 
          // selected={this.state.selectedIndex} 
          handelListItemClick={this.handelListItemClick}/>
          </Link>
          </>
        ))
        }
      </List>
    
    )
  }
}