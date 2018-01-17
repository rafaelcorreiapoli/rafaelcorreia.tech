import React from 'react'
import { string, object, any } from 'prop-types'


const FitImage = ({
  imageUrl,
  style,
  width,
  height,
  ...props
}) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
      width,
      height,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      display: 'inline-block',
      ...style,
    }}
    {...props}
  />
)
FitImage.propTypes = {
  imageUrl: string.isRequired,
  style: object,
  width: any.isRequired,
  height: any.isRequired,
}
export default FitImage
