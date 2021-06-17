import {List} from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { Chat } from './chat'

class ChatList extends React.Component{
  
  render(){
    const { conversations, match } = this.props
    
    return (

      <List>
        {conversations.map((chat)=>(
          <Link key={chat.title} to={`/pages/chats/${chat.title}`}>
            
            <Chat 
            selected={chat.title===match.params.roomId} 
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

function mapStateToProps(state){
  return{
    conversations:state.conversations
  }
}


// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps,null)(ChatList)