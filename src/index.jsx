import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css';
console.log(styles)
const App = () => {
  return <div className={styles.app}>你好</div>
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)