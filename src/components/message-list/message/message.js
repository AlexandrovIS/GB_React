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
    const {message}=this.props
    const {author, value, date}=message

    return (
    <ul className={style.message__list}>
      <li className={style.message}>{value}</li>  
      <div className={style.flex__li}> 
      <li>author: {author}</li>
      <li>date: {date}</li>
      </div>
    </ul>
    )
  }
}