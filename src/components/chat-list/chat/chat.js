import {ListItem,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core' 
import ImageIcon from '@material-ui/icons/Image';
import React from 'react'

export class Chat extends React.Component{
  
  render (){
  const {chat,selected}=this.props
    
  return (
    <ListItem 
    selected={selected}
    >
    <ListItemAvatar >
      <Avatar>
      <ImageIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText 
    primary={chat.title} 
    secondary={`${new Date().toDateString()}`} />
    </ListItem>
  )
  }
}