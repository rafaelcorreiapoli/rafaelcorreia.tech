import React from 'react'
import { array, shape, number } from 'prop-types'
import { CSSGrid, measureItems } from 'react-stonecutter'
import sizeMe from 'react-sizeme'
import TechnologyCard from '../TechnologyCard'
import FadeIn from '../FadeIn'

const Grid = measureItems(CSSGrid, { measureImages: true })

class TechnologiesGrid extends React.Component {
  render() {
    const {
      technologies,
      size,
    } = this.props
    const gutterWidth = 10
    const columnWidth = 100
    const minPadding = 0;
    const columns = Math.floor((size.width - minPadding) / (columnWidth + gutterWidth));

    return (
      <div style={{ width: '100%' }}>
        <FadeIn>
          <Grid
            component="div"
            columnWidth={columnWidth}
            gutterWidth={gutterWidth}
            gutterHeight={10}
            columns={columns}
            itemHeight={134}
            duration={300}
            easing="ease-out"
          >
            {technologies.map(technology => (
              <div key={technology.id}>
                <TechnologyCard

                  {...technology}
                />
              </div>
            ))}
          </Grid>
        </FadeIn>
      </div>

    )
  }
}

TechnologiesGrid.propTypes = {
  size: shape({
    width: number,
    height: number,
  }).isRequired,
  technologies: array.isRequired,
}

export default sizeMe()(TechnologiesGrid)
