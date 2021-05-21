import PropTypes from 'prop-types'
import React from 'react'


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
    <ul>
      <li>{value}</li>
      <li>author: {author}</li>
      <li>date: {date}</li>
    </ul>
    )
  }
}
