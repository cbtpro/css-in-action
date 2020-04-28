import React from 'react'
import ReactDOM from 'react-dom'

import TranslucentBorder from './components/Border/TranslucentBorder'
import MultipleBorder from './components/Border/MultipleBorder'
import Chessboard from './components/Background/Chessboard'

import styles from './index.css';
const App = () => {
  return <div className={styles.app}>
    你好
    <TranslucentBorder />
    <MultipleBorder />
    <Chessboard />
  </div>
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)