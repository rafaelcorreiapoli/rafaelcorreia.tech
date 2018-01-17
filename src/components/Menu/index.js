import React from 'react'
import { string } from 'prop-types'
import MenuItem from '../MenuItem'
import MenuFooter from '../MenuFooter'
import MenuHeader from '../MenuHeader'
import styles from './styles.module.css'

const Menu = () => (
  <div className={styles.container}>
    <MenuHeader />
    <MenuFooter />
    <div className={styles.links}>
      {/* <Link prefetch href="/"><MenuItem text="Projects" /></Link>
      <Link prefetch href="/technologies"><MenuItem text="Technologies" /></Link>
      <Link prefetch href="/customers"><MenuItem text="Customers" /></Link>
      <Link prefetch href="/about"><MenuItem text="About" /></Link> */}
    </div>
  </div>
)


export default Menu
