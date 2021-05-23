import {ListItem,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core' 
import ImageIcon from '@material-ui/icons/Image';
import React from 'react'

export class Chat extends React.Component{

  handelListItemClick=()=>{
   
  }

  render (){
    const {title, handelListItemClick, selected}=this.props

  return <ListItem >
    <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
    <ListItemText 
    primary={title} 
    secondary={`${new Date().toDateString()}`} />
    </ListItem>
  }
}

