import PropTypes from 'prop-types'
import React from 'react'
import style from'./messade.module.css'

export class Message extends React.Component{
  static propTypes={
    message: PropTypes.shape({
      author: PropTypes.string,
      value:PropTypes.string,
      date: PropTypes.date
    }),
  }

  render(){
    const {message:{message,author,date}}=this.props
    
    return (
    <ul className={style.message__list}>
      <li className={style.message}>{message}</li>  
      <div className={style.flex__li}> 
      <li>author: {author}</li>
      <li>date: {date}</li>
      </div>
    </ul>
    )
  }
}