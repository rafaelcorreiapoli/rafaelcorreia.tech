import React from 'react'
import { arrayOf, string } from 'prop-types'
import styles from './styles.module.css'


export default class SlideShow extends React.Component {
  static propTypes = {
    images: arrayOf(string).isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      imgIndex: 0,
    }
    this._updateImgIndex = this._updateImgIndex.bind(this)
  }

  _updateImgIndex() {
    this.setState({
      imgIndex: (this.state.imgIndex + 1) % this.props.images.length,
    })
  }
  componentDidMount() {
    this.intervalId = setInterval(this._updateImgIndex, 5000)
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  render() {
    const {
      images,
    } = this.props
    return (
      <div className={styles.container}>
        <img key={images[0]} alt={images[0]} src={images[0]} className={styles.img} />
        {/* {images.map((image, i) => (
          <img key={image} alt={image} src={image} style={{ opacity: i === this.state.imgIndex ? 1 : 0 }} />
          ))} */}
      </div>


    )
  }
}
