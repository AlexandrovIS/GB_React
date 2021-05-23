import React from 'react'
import {MessageField,ChatList, Header} from '../index'
import styles from './layout.module.css'

export class Layout extends React.Component{
  render (){
    return <React.Fragment>
    <Header/> 
    <div className={styles.flex_row}>
    <ChatList/>
    <MessageField/>
    </div>
    </React.Fragment>
  }
}
