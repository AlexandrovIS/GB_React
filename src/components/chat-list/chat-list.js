import {List} from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import { Chat } from './chat'



export class ChatList extends React.Component{
  render(){
    const {conversations} = this.props
    return (
      <List>
        {conversations.map((chat, index)=>(
          <Link key={index} to={`/pages/chats/${chat.title}`}>
            <Chat 
            selected={chat.title===this.props.match.params.roomId} 
            chat={chat}
            />
          </Link>
        )
        )
        }
      </List>
    
    )
  }
}