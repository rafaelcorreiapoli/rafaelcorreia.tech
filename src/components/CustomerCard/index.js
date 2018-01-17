import React from 'react'
import { string } from 'prop-types'
import FitImage from '../FitImage'
import FloatingPanel from '../FloatingPanel'
import './styles.module.css'

const CustomerCard = ({
  name,
  imageUrl,
  siteUrl,
}) => (
  <FloatingPanel style={{ padding: 10 }}>
    <a href={siteUrl} target="_blank">
      <FitImage
        imageUrl={imageUrl}
        width={180}
        height={180}
        className="image"
      />
      <div className="name-container">
        <p className="name">{name}</p>
      </div>
    </a>
  </FloatingPanel>
)
CustomerCard.propTypes = {
  name: string.isRequired,
  imageUrl: string.isRequired,
  siteUrl: string.isRequired,
}

export default CustomerCard
