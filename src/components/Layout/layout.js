import React from 'react'
import styles from './layout.module.css'

export const Layout=({chatList,children})=>{
  return(<>
    <div className={styles.flex_row}>
    {chatList}
    {children}
    </div>
    </>
  )
}
