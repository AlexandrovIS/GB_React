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

  handlerChangeValue=(event)=>{
    const {match}=this.props
    const {params}=match
    const {target:{value}}=event

    this.setState({
      conversations:this.state.conversations.map(conversation=>{
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

    const {messages,conversations}=this.state
    const {match}=this.props
    const {params}=match
    const newMessage={author,message,date:`${new Date().getHours()} ${new Date().getMinutes()}`}

    this.setState({
      messages: {
        ...messages,
        [params.roomId]: [...(messages[params.roomId] || []), newMessage],
      },
      conversations: conversations.map((conversation) =>
        conversation.title === params.roomId
          ? {
              ...conversation,
              value: '',
            }
          : conversation,
      ),
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
      handlerChangeValue:this.handlerChangeValue
    }

    return children([state,actions])
  }
}