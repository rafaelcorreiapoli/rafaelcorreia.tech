import React from 'react'
import Slider from 'react-slick'
import styles from './styles.module.css'

export default class ProjectSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: true,
      variableWidth: false,
      fade: true,
      swipe: false,
    }

    return (
      <div className={styles.container}>
        <Slider {...settings}>
          {this.props.images.map(image => (
            <div key={image} >
              {/* <div className="container" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}> */}
              {/* <img src={image} /> */}
              {/* </div> */}
              <img src={image} className={styles.img} />
            </div>

          ))}
        </Slider>
      </div>

    );
  }
}
