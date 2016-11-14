import React from 'react'

export default class Matrix extends React.Component {

  componentDidMount() {
    let time = 0
    let interval = this.props.interval || 33
    let delay = this.props.delay || 0
    let duration = this.props.duration || undefined
    let bgColor = this.props.backgroundColor || '#000'
    let bgOp = this.props.backgroundOpacity || 0.05
    let bgStep = 0
    let ctx = this.canvas.getContext('2d')
    ctx.translate(this.canvas.width, 0)
    ctx.scale(-1, 1)
    let columns = []
    for (let i = 0; i < 32; columns[i++] = 758 + Math.random() * 1e2) {}
    let frame = () => {
      try {
        if (time > this.props.backgroundDelay) {
          if (bgStep < bgOp) {
            bgStep += bgOp / 200
          }
          if (duration && time > duration) {
            bgStep += (1 - bgOp) / 100
            bgStep = bgStep > 1 ? 1 : bgStep
          }
          ctx.globalAlpha = bgStep
          ctx.fillStyle = bgColor
          ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
          ctx.globalAlpha = 1
        }
        ctx.fillStyle = this.props.textColor || '#0F0'
        columns = columns.map((value, index) => {
          let character = String.fromCharCode(12448 + Math.random() * 96)
          this.canvas.getContext('2d').fillText(
            character,
            index * 10,
            value
          )
          if (duration && time > duration) {
            return value + 10
          }
          return value > 758 + Math.random() * 1e4 ? 0 : value + 10
        })
        time += interval
        if (duration && time > duration + interval * 101) {
          this.props.endIntro()
          return
        }
        window.setTimeout(frame, interval)
      }
      catch(e) {}
    }
    window.setTimeout(frame, delay)
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
