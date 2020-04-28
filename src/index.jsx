import React from 'react'
import ReactDOM from 'react-dom'

import TranslucentBorder from './components/Border/TranslucentBorder'

import styles from './index.css';
const App = () => {
  return <div className={styles.app}>
    你好
    <TranslucentBorder />
  </div>
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)