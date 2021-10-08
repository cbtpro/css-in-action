import React from 'react'

import styles from './Grid.css'

export default (props) => {
  return <>
    <div className={styles.container}>{props.children}</div>
  </>
}
