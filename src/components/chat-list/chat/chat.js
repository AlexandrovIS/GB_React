import {ListItem,ListItemText,ListItemAvatar,Avatar} from '@material-ui/core' 
import ImageIcon from '@material-ui/icons/Image';
import React from 'react'
import { Route, Switch} from 'react-router-dom';
import {MessageProvider,ChatList,MessageList }from  '../../index'

export class Chat extends React.Component{
  
  render (){
    const {title, handelListItemClick, selected,index}=this.props
    
  return (
    <Switch>
    <Route path={["/chat/:roomId"]}>
       {(params) => (
        <MessageProvider {...params}>
          {([state, actions]) => (
           <>
              <ChatList conversations={state}/>
              <MessageList messages={state}/>
            </>
          )}
        </MessageProvider>
      )}
    </Route>
  </Switch>

  )
  }
}

{/* <ListItem
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
</ListItem> */}