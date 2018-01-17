import React from 'react'
import { CSSGrid, makeResponsive, measureItems, layout } from 'react-stonecutter'
import ProjectCard from '../ProjectCard'
import sizeMe from 'react-sizeme'
import FadeIn from '../FadeIn'

const Grid = CSSGrid

const sizes = {
  320: 1,
  768: 2,
  1224: 3,
  1600: 4,
  2000: 5,
  2400: 6,
}
const ProjectsGrid = ({
  projects,
  size,
  onClickProject,
}) => {
  const panelWidth = size.width
  const sizeStep = Object.keys(sizes).filter(s => s < panelWidth).pop()
  const gutterWidth = 20
  const columns = sizes[sizeStep]
  const minPadding = 10;
  const columnWidth = Math.ceil(((panelWidth - ((columns) * gutterWidth) - minPadding) / columns))
  const itemHeight = columnWidth + 90

  return (
    <div style={{ width: '100%' }}>
      <FadeIn>
        <Grid
          component="div"
          columnWidth={columnWidth}
          gutterWidth={20}
          gutterHeight={20}
          itemHeight={itemHeight}
          columns={columns}
          duration={300}
          easing="ease-in-out"
        >
          {projects.map(project => (
            <div key={project.id}>
              <ProjectCard
                onClick={onClickProject}
                onClickMoreInfo={() => {}}
                onClickVisit={() => {}}
                width={columnWidth}
                height={itemHeight}
                {...project}
              />
            </div>
          ))}
        </Grid>
      </FadeIn>

    </div>

  )
}

export default sizeMe({
  refreshMode: 'debounce',
})(ProjectsGrid)
