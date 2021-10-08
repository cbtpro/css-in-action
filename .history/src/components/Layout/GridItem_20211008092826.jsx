import React from 'react'

import styles from './Grid.css'

const GridItem = (props) => {
  return <div className={styles.item}>{props.children}</div>
}

export default GridItem