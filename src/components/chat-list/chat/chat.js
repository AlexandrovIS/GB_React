import {ListItem,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core' 
import ImageIcon from '@material-ui/icons/Image';
import React from 'react'


export class Chat extends React.Component{
  
  render (){
    const { handelListItemClick, selected, chat} = this.props
    const { title } = chat
    
  return (
    <ListItem
    onClick={(event) =>{handelListItemClick(event,index)}}
    selected={selected===index}>
    <ListItemAvatar >
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
    <ListItemText 
    primary={title} 
    secondary={`${new Date().toDateString()}`} />
    </ListItem>
  ) 
  }
}

 