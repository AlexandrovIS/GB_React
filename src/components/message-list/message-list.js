import {Input, InputAdornment,withStyles} from '@material-ui/core'
import {Send} from '@material-ui/icons'
import React from 'react'
import { connect } from 'react-redux'
import {changeValue} from '../../store/actions/conversations'
import {sendMessage} from '../../store/actions/messages'
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

class MessageList extends React.Component{
  handlerChangeInput=(event)=>{
    const {changeValue,match}=this.props
    const {roomId}=match.params
    changeValue(roomId,event?.target.value||"")
  }

  handlerPressInput=({code})=>{
    if(code==='Enter'){
      this.handlerSendMessage()
    }
  }

  handlerSendMessage = () => {
    
    const { sendMessage, value, match } = this.props
    const{roomId}=match.params
    
    sendMessage({ author: "User", message: value , roomId:roomId})

    this.handlerChangeInput()
  }

  render(){
    const {messages,value}=this.props
    return <div className={styles.message__field}>
    

    {messages.map((messsage,index)=><Message message={messsage} key={index}/>)}
     
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
function mapStateToProps(state,props){
  const {roomId}  = props.match.params
  return{
    messages: state.messages[roomId]||[],
    value:state.conversations.find(
      (conversation) => conversation.title === roomId,
    )?.value || "",
  }
}

const mapDispachToProps = (dispatch) => ({
  sendMessage: (params) => dispatch(sendMessage(params)),
  changeValue: (id, value) => dispatch(changeValue(id, value)),
})

// eslint-disable-next-line import/no-default-export
export default connect(mapStateToProps,mapDispachToProps)(MessageList)
