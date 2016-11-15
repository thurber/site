import React from 'react'
import { MorphReplace } from 'react-svg-morph'

export default class MorphIcon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showIcon: this.props.iconFrom,
    }
  }

  componentDidMount() {
    if (this.props.delay && this.props.iconTo) {
      setTimeout(() => {
        this.setState({
          showIcon: this.props.iconTo,
        })
      }, this.props.delay)
    }
  }

  render() {
    return (
      <MorphReplace
        duration={this.props.duration}
        rotation={this.props.rotation}
        easing={this.props.easing}
        style={this.props.style}
      >
        {this.state.showIcon}
      </MorphReplace>
    )
  }

}
