import React from 'react'
import ReactDOM from 'react-dom'

import TranslucentBorder from './components/Border/TranslucentBorder'
import MultipleBorder from './components/Border/MultipleBorder'
import Chessboard from './components/Background/Chessboard'

import styles from './index.css';
const App = () => {
  return <div className={styles.app}>
    <div className={styles.container}>
      <div className={styles.item}><TranslucentBorder /></div>
      <div className={styles.item}><MultipleBorder /></div>
      <div className={styles.item}><Chessboard /></div>
      <div className={styles.item}>4</div>
      <div className={styles.item}>5</div>
      <div className={styles.item}>6</div>
      <div className={styles.item}>7</div>
      <div className={styles.item}>8</div>
      <div className={styles.item}>9</div>
    </div>
    
    
    
  </div>
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)