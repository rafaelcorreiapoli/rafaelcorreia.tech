import React from 'react'
import { string, arrayOf, func } from 'prop-types'
import FloatingPanel from '../FloatingPanel'
import Tag from '../../components/Tag'
import styles from './styles.module.css'
console.log(styles)
class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleMouseEnter() {
    this.setState({
      hover: true,
    })
  }
  handleMouseLeave() {
    this.setState({
      hover: false,
    })
  }

  handleClick() {
    this.props.onClick(this.props.id)
  }
  render() {
    const {
      id,
      coverUrl,
      name,
      categories,
      onClickMoreInfo,
      onClickVisit,
      width,
      height,
    } = this.props
    const {
      hover,
    } = this.state

    return (
      <FloatingPanel style={{ width, height, cursor: 'pointer' }} onClick={this.handleClick}>
        <div className={styles.imageContainer} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} style={{ width, height: height - 90 }}>
          <img
            src={coverUrl}
            className={styles.image}
            alt={name}
            style={{
              transform: `translate(0px, -${hover ? 50 : 0}px)`,
            }}
          />
          <div className={styles.buttons}>
            <div className={styles.button} onClick={onClickMoreInfo} role="button">
              More
            </div>
            <div className={styles.button} onClick={onClickVisit} role="button">
              Visit
            </div>
          </div>
        </div>

        <div className={styles.descriptionContainer}>
          <span className={styles.name}>{name}</span>
          <div className={styles.categoriesContainer}>
            {categories.map((category, i) => (
              <Tag key={i}>#{category}</Tag>
            ))}
          </div>

        </div>
      </FloatingPanel>
    )
  }
}

ProjectCard.propTypes = {
  coverUrl: string.isRequired,
  name: string.isRequired,
  categories: arrayOf(string.isRequired).isRequired,
  onClickMoreInfo: func.isRequired,
  onClickVisit: func.isRequired,
}

export default ProjectCard