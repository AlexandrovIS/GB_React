import React from 'react'
import styles from './layout.module.css'

export const Layout=({chatList,messageList})=>{
  return(<>
    <div className={styles.flex_row}>
    {chatList}
    {messageList}
    </div>
    </>
  )
}
