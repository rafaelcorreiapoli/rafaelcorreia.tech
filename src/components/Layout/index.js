import React from 'react'
import { node } from 'prop-types'
import Helmet from 'react-helmet'
import Menu from '../Menu'

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
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: node.isRequired,
}

export default Layout
