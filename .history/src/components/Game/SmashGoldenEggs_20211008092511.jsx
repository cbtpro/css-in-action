import React from 'react'
import Egg from './Egg'

import hammer from '../../assets/images/hammer.png'
import styles from './SmashGoldenEggs.css'

const SmashGoldenEggs = (props) => {
  return <>
    <div className={styles.container}>
      <img src={hammer} className={`${styles.hammer} ${styles.active}`} />
      <div className={styles.eggs}>
      {
        [0, 1, 2].map(item => {
          return <Egg key={item} />
        })
      }
      </div>
    </div>
  </>
}
export default SmashGoldenEggs