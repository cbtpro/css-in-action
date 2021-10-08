import React from 'react'

import styles from './Grid.css'

const Grid = (props) => {
  return <>
    <div className={styles.container}>{props.children}</div>
  </>
}

export default Grid
