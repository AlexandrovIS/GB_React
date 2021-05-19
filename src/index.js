import React from 'react'
import ReactDom from 'react-dom'
import './style/style.css'
import { a } from './home'

// class ClassExample extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>
//           Hello Class
//         </h2>
//       </div>
//     )
//   }
// }

// const Example = () => {
//   return (
//     <div>
//       <h1>
//         Hello react
//       </h1>
//       <ClassExample />
//     </div>
//   )
// }

const Message = ({ message }) => {
  return (
    <React.Fragment>
      <h2>{message}</h2>
    </React.Fragment>
  )
}

const MessageField = ({ message }) => {
  return message.map((message, index) => <Message message={message} key={index} />)
}

ReactDom.render(<MessageField message={['Message']} />, document.getElementById('root'))

console.log(a)