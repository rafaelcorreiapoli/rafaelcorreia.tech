import React from 'react'
import styles from './styles.module.css'

const FloatingPanel = ({
  children,
  ...props
}) => (
  <div className={styles.container} {...props}>
    {children}
  </div>
)

export default FloatingPanel
