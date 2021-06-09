import React from 'react'

export class MessageProvider extends React.Component{
  state={
    conversations:[
      {title:'room1',value:''},
      {title:'room2',value:''},
      {title:'room3',value:''}
    ],
    messages:{
      room1:[{author:'User',message:'Message_1',date:`${new Date().getHours()} ${new Date().getMinutes()}`}],
      room2:[],
      room3:[]
    }
  }

  handelChangeValue=(value)=>{
    const {match}=this.props
    const {params}=match

    this.setState({
      conversations:this.conversations.map(conversation=>{
        if(params.roomId===conversation.title){
          return {...conversation,value}
        }
        return conversation
      })
    })
  }

  sendMessage=({author,message})=>{
    if(!message){
      return
    }

    const {messages}=this.state
    const {match}=this.props
    const {params}=match
    const newMessage={author,message,date:new Date()}

    this.setState({
      messages:{
        ...messages,
        [params.roomId]:[...(messages[params.roomId]||[]),newMessage]
      }
    })
  }

  componentDidUpdate(){}

  render(){
    const {children,match}=this.props
    const{params}=match
    const {conversations,messages}=this.state

    const state={
      conversations,
      messages:messages[params.roomId]||[],
      value:conversations.find(conversation=>conversation.title===params.roomId)?.value||''
    }
    const actions={
      sendMessage:this.sendMessage,
      handelChangeValue:this.handelChangeValue
    }

    return children([state,actions])
  }
}