import React from 'react'
import Menu from '../Menu'
import ProjectsGrid from '../ProjectsGrid'
import Particles from 'react-particles-js'
import TechnologiesGrid from '../TechnologiesGrid'
import styles from '.styles.css'

const Main = () => (
  <div className={styles.container}>
    <Menu />
    <div className={styles.projectsContainer}>
      {/* <ProjectsGrid projects={PROJECTS} /> */}
      <TechnologiesGrid technologies={[...TECHNOLOGIES].sort((a, b) => b.skillProgress - a.skillProgress)} />
    </div>

    <style jsx>{`

    `}
    </style>
  </div>
)

export default Main
