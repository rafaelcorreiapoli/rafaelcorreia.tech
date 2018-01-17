import React from 'react'


export default class FadeIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false,
    }
  }
  componentDidMount() {
    this.setState({
      mounted: true,
    })
  }
  render() {
    return (
      <div style={{ opacity: this.state.mounted ? 1 : 0, transition: '0.5s' }}>
        {this.props.children}
      </div>
    )
  }
}
