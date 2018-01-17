import React from 'react'
import Tag from '../../components/Tag'
import technologiesDb from '../../data/technologies'

const ProjectInfo = ({
  name,
  costumerName,
  description,
  categories,
  date,
  technologies,
}) => (
  <div className="container">


    <div className="project">
      <div className="description">
        <div className="title">
          <span>Project Description</span>
        </div>
        {description}
      </div>
      <div className="sidebar">
        <div className="title">
          <span>Project Details</span>
        </div>
        <ul className="project-details">
          <li><span className="strong">Name</span> <span>{name}</span></li>
          <li><span className="strong">Customer</span> <span>{costumerName}</span></li>
          <li><span className="strong">Date</span> <span>{date}</span></li>

          <div className="categories">
            {
              categories && categories.map(category => (
                <Tag key={category}>
                  #{category}
                </Tag>
              ))
            }
          </div>

        </ul>
      </div>
    </div>

    <div>
      <div className="title">
        <span>Technologies</span>
      </div>
      <div className="technologies">
        {technologies && technologies.map(technology => (
          <img src={technologiesDb[technology].imageUrl} key={technology} alt={technology} />
        ))}
      </div>
    </div>


    <style jsx>{`
      .categories {
        display: flex;
        flex-direction: row;
        margin-left: -2px;
        margin-top: 20px;
      }
      .strong {
        color: #555;
        font-weight: 400;
      }
      .container {
        padding: 40px 60px 40px 60px;
        /*padding-right: 20px;*/
      }
      ul > li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 30px;
        color: #666;
      }

      .title {
        border-bottom: 1px solid #eee;
        padding-bottom: 12px;
        margin-bottom: 30px;
        color: #444;
      }
      .title > span {
        font-weight: 600;
        text-transform: uppercase;
        padding-bottom: 10px;
        border-bottom: 2px solid #1f1f1f;
      }
      .technologies {
        /*margin-top: 20px;*/
        /*margin-bottom: 20px;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .technologies > img {
        margin: 10px;
      }
      .project {
        display: flex;
        flex-direction: row;
        margin-bottom: 60px;
      }
      .sidebar {
        min-width: 260px;
        /*flex: 0.25;*/
        /*min-width: 220px;*/
        /*border-right: 1px solid #d3d3d3;*/
      }
      .description {
        flex: 1;
        padding-right: 60px;
        /*flex: 0.75;*/
        color: #666;
        text-align: justify;
      }
    `}
    </style>
  </div>
)

export default ProjectInfo
