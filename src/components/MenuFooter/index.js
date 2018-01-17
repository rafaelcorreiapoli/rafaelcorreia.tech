import React from 'react'
import styles from './styles.module.css'

const MenuFooter = () => (
  <div className={styles.div}>
    <address>
      <p className={styles.name}>Rafael Ribeiro Correia</p>
      <p className={styles.p}>Software Engineer</p>
      <p className={styles.p}>Escola Politécnica da USP</p>
      <p className={styles.p}>São Paulo - SP - Brazil</p>
      <p className={styles.p}>rafael.correia.poli@gmail.com</p>
      <p className={styles.p}><abbr title="Phone">P:</abbr> +55 11 94343-3330</p>
      <p className={styles.p}><a className={styles.a} href="#" alt="R. Dr. Samuel de Castro Neves, 72">Localization</a></p>
    </address>
  </div>
)

export default MenuFooter
