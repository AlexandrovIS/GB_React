import React from 'react'
import {Message} from '../message'

export class MessageField extends React.Component{
  state={
    messages:[
      // {author:'User', value:'Message 1!', date:`${new Date()}`}
    ]
  }

  componentDidUpdate(){
    const {messages}=this.state
    const lastMes=messages[messages.length-1]

    if(lastMes.author==='User'){
      this.setState({
          messages:[...messages,{author:'Both',value:' Both message ', date: `${new Date()}`}]
        })
    }
}

  sendMessage=()=>{
    const {messages}=this.state

    this.setState({
      messages:[...messages,{author:'User',value:'push the button - new message ', date: `${new Date()}`}]
    })
  }

  render(){
    const {messages}=this.state

    return <>
     <button onClick={this.sendMessage}>Send message</button>
    {messages.map((item,idx)=>(<Message message={item} key={idx}/>))}
      </>
  }
}
