import React from 'react'
import { string } from 'prop-types'
import styles from './styles.module.css'

const MenuItem = ({
  text,
  selected,
  ...props
}) => (
  <div className={styles.container} {...props} style={{ fontWeight: selected ? '700' : '300' }}>
    {text}
  </div>
)
MenuItem.propTypes = {
  text: string.isRequired,
}

export default MenuItem
