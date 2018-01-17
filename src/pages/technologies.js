import React from 'react'
import Layout from '../components/Layout'
import TechnologiesGrid from '../components/TechnologiesGrid'
import TECHNOLOGIES from '../data/technologies'
import objectToArray from '../lib/objectToArray'

const techArray = objectToArray(TECHNOLOGIES)
export default () => (
  <div style={{
    width: '100%'
  }}>
    <TechnologiesGrid technologies={[...techArray].sort((a, b) => {
      if (a.skillProgress !== b.skillProgress) {
        return b.skillProgress - a.skillProgress
      }
      return a.id - b.id
    })}
    />
  </div>
)
