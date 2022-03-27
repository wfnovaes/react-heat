import { useState } from 'react'
import styles from "./app.module.scss"
import { LoginBox } from './components/loginBox'
import { MessageList } from './components/messageList'

export function App() {

  return (
    <main className={styles.contentWrapper}>
        <MessageList />
        <LoginBox />
    </main>
  )
}