import React from 'react'
import ReactDOM from 'react-dom'

import TranslucentBorder from './components/Border/TranslucentBorder'
import MultipleBorder from './components/Border/MultipleBorder'
import Chessboard from './components/Background/Chessboard'
import SmashGoldenEggs from './components/Game/SmashGoldenEggs'

import styles from './index.css';
import Page from './components/Page'
import Grid from './components/Layout/Grid'
import GridItem from './components/Layout/GridItem'

const App = () => {
  return <Page className={styles.app} backgroundImage={require('./assets/image/T5.jpg')}>
    <Grid>
      <GridItem><TranslucentBorder /></GridItem>
      <GridItem><MultipleBorder /></GridItem>
      <GridItem><Chessboard /></GridItem>
      <GridItem><div style={{ width: '411px', height: '731px' }}><SmashGoldenEggs /></div></GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
      <GridItem>area</GridItem>
    </Grid>
  </Page>
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)