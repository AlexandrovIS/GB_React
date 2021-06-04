import {Input, InputAdornment,withStyles} from '@material-ui/core'
import {Send} from '@material-ui/icons'
import React from 'react'
import {Message} from './message'
import styles from './message-list.module.css'

const StyledInput=withStyles((theme)=>({
  root:{
    '&':{
      color:'#9a9fa1',
      padding:'10px 15px',
      fontSize:'16px'
    }
  }
}))(Input)

export class MessageList extends React.Component{
  handlerChangeInput=(event)=>{
    this.props.handlerChangeValue(event)
  }

  handlerPressInput=({code})=>{
    if(code==='Enter'){
      this.handlerSendMessage()
    }
  }

  handlerSendMessage = () => {
    const { sendMessage, value } = this.props
    sendMessage({ author: "User", message: value })
  }

  render(){
    const {messages, value}=this.props
    
    return <div className={styles.message__field}>
    
    {messages.map((item,index)=>(<Message message={item} key={index}/>))}
    
    <StyledInput 
      value={value}
      onChange={this.handlerChangeInput}
      onKeyPress={this.handlerPressInput}
      
      placeholder='Message...' 
      fullWidth={true} 
      endAdornment={
        <InputAdornment>
        {value&&(<Send className={styles.icon} 
        onClick={this.handlerSendMessage}/>)}
        </InputAdornment>
      }
    />
    </div>
  }
}
