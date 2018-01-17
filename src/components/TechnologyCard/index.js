import React from 'react'
import { string, number } from 'prop-types'
import FloatingPanel from '../FloatingPanel'
import styles from './styles.module.css'

const TechnologyCard = ({
  imageUrl,
  name,
  skillProgress,
}) => (
  <FloatingPanel>
    <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className={styles.nameContainer}>
      <p className={styles.p}>{name}</p>
    </div>
    <div className={styles.progressTrack}>
      <div
        className={styles.progress}
        style={{
          width: `${skillProgress * 100}%`,
        }}
      />
    </div>
  </FloatingPanel>
)


TechnologyCard.propTypes = {
  imageUrl: string.isRequired,
  name: string.isRequired,
  skillProgress: number.isRequired,
}
export default TechnologyCard
