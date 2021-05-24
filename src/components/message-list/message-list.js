import {Input, Button, InputAdornment,withStyles, List} from '@material-ui/core'
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
  state={
    messages:[
      {author:'User', value:'Message 1!', date:`${new Date()}`}
    ],
    value:''
  }

  componentDidUpdate(props,state){
    const {messages}=this.state
    const lastMessage=messages[messages.length-1]
    
    if(lastMessage.author === 'User' && state.messages !== messages){
      setTimeout(()=>{
        this.setState({
          messages:[...messages,{author:'Both',value:' Both message ', date: `${new Date()}`}]
        })
      },300)
    }
}

  sendMessage=({author,value})=>{
    const {messages}=this.state

    this.setState({
      messages:[...messages,{author,value, date: `${new Date()}`}],
      value:''
    })
  }

  handelChangeInput=({target})=>{
    this.setState({
      value:target.value
    })
  }

  handelPressInput=({code})=>{
    const {value}=this.state
    if(code==='Enter'&&value){
    
        this.sendMessage({author:'User',value})
      
      
    }
  }

  render(){
    const {messages, value}=this.state

    return <div className={styles.message__field}>
    {/* <Input placeholder='Input'/> */}
    {messages.map((item,idx)=>(<Message message={item} key={idx}/>))}
    {/* <Button  onClick={this.sendMessage}>Send message</Button> */}
    <StyledInput 
    value={value}
    onChange={this.handelChangeInput}
    onKeyPress={this.handelPressInput}
    // onKeyUp={()=>this.sendMessage({author:'User',value})}
    placeholder='StyledInput' 
    fullWidth={true} 
    endAdornment={
      <InputAdornment>
      {value&&(<Send className={styles.icon} 
      onClick={()=>this.sendMessage({author:'User',value})}/>)}
      </InputAdornment>
      }
    />
    
      </div>
  }
}

