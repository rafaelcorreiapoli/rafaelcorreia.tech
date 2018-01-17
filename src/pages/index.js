import React from 'react'
import Layout from '../components/Layout'
import ProjectsGrid from '../components/ProjectsGrid'
import Modal from 'react-modal'
import ProjectSlider from '../components/ProjectSlider'
import SlideShow from '../components/SlideShow'
import ProjectModal from '../components/ProjectModal'
import ProjectInfo from '../components/ProjectInfo'
import objectToArray from '../lib/objectToArray'

import PROJECTS from '../data/projects'


export default class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedImage: 0,
    }
    // this.openProject = this.openProject.bind(this)
    // this.closeProject = this.closeProject.bind(this)
  }

  // openProject(id) {
  //   Router.push({ pathname: '/', query: { project: id } })
  // }

  // closeProject() {
  //   Router.push({ pathname: '/', query: { } })
  // }

  render() {
    // const selectedProjectId = this.props.url.query.project
    // const selectedProject = PROJECTS[selectedProjectId]
    return (
        <div style={{
          width: '100%'
        }}>
          <ProjectsGrid projects={objectToArray(PROJECTS)} onClickProject={this.openProject} />
        </div>

        /* <ProjectModal
          isOpen={!!selectedProject}
          onRequestClose={this.closeProject}
        >
          {selectedProject &&
            <div>
              <ProjectSlider images={selectedProject.images} />
              <ProjectInfo {...selectedProject} />
            </div>
          }
        </ProjectModal> */
    )
  }
}
