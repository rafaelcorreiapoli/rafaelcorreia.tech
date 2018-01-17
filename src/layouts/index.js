import React from 'react'
import { node } from 'prop-types'
import Helmet from 'react-helmet'
import Menu from '../components/Menu'
import './index.css'

const Layout = ({
  children,
}) => (
  <div>
    <Helmet
      title="Rafael Ribeiro Correia - Software Engineer"
      meta={[
        { name: 'description', content: 'Web, Mobile & Backend development' },
        { name: 'keywords', content: 'freelancer, software engineer, mobile, backend, web, development, create app, create site' },
      ]}
    />


    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Menu />
      {children()}
    </div>
  </div>
)

export default Layout
