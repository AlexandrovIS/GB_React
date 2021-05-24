import React from 'react'
import {Header} from '../'
import styles from './layout.module.css'

export const Layout=({chatList,messageList})=>{
  return(<>
    <Header/>
    <div className={styles.flex_row}>
    {chatList}
    {messageList}
    </div>
    </>
  )
}
