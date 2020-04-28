import React from 'react'
import ReactDOM from 'react-dom'

import TranslucentBorder from './components/Border/TranslucentBorder'
import MultipleBorder from './components/Border/MultipleBorder'
import Chessboard from './components/Background/Chessboard'

import styles from './index.css';
import Grid from './components/Layout/Grid'
import GridItem from './components/Layout/GridItem'
const App = () => {
  return <div className={styles.app}>
    <Grid>
      <GridItem><TranslucentBorder /></GridItem>
      <GridItem><MultipleBorder /></GridItem>
      <GridItem><Chessboard /></GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
    </Grid>
  </div>
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)