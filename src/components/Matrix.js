import React from 'react'

export default class Matrix extends React.Component {

  componentDidMount() {
    let ctx = this.canvas.getContext('2d')
    ctx.translate(this.canvas.width, 0)
    ctx.scale(-1, 1)
    let columns = []
    for (let i = 0; i < 32; columns[i++] = 758 + Math.random() * 1e2) {}
    let frame = () => {
      ctx.globalAlpha = this.props.backgroundOpacity || 0.05
      ctx.fillStyle = this.props.backgroundColor || '#000'
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      ctx.globalAlpha = 1
      ctx.fillStyle = this.props.textColor || '#0F0'
      columns = columns.map((value, index) => {
        let character = String.fromCharCode(12448 + Math.random() * 96)
        this.canvas.getContext('2d').fillText(character, index * 10 + Math.random() * 6 - 3, value)
        return value > 758 + Math.random() * 1e4 ? 0 : value + 10
      })
      window.setTimeout(frame, this.props.interval || 33)
    }
    window.setTimeout(frame, this.props.delay || 0)
  }
  
  render() {
    return (
      <div
        style={{
          ...this.props.style,
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvas => this.canvas = canvas}
          width={this.props.width || 300}
          height={this.props.height || 300}
        />
      </div>
    )
  }

}
