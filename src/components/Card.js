import React from 'react'
import Panel from 'muicss/lib/react/panel'
import T from 'babel!react-svg!../styles/tcard.svg'
import Matrix from './Matrix'

export default props => (
  <Panel
    style={{
      maxWidth: '300px',
      margin: '10px auto',
      borderRadius: '0',
      backgroundColor: 'linen',
      animation: 'fadeBgToBlack 10s ease-in-out 16s forwards',
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
        backgroundColor: 'antiquewhite',
        borderRadius: '5px',
        border: 'solid 1px rgba(200,200,200,0.25)',
        boxShadow: 'inset 0 0 7px -2px black',
      }}
    >
      <T
        viewBox='0 0 1024 843'
        width={undefined}
        height={undefined}
        style={{
          position: 'absolute',
          overflow: 'visible',
          width: '100%',
          height: '100%',
          left: 0,
          right: 0,
          padding: '10px',
        }}
      />
      <Matrix
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          borderRadius: '5px',
        }}
        textColor='darkseagreen'
        backgroundDelay={2500}
        delay={12000}
        duration={15000}
      />
    </div>
    <div
      style={{
        textAlign: 'center',
        fontFamily: 'serif',
        fontWeight: 'bold',
        fontVariant: 'small-caps',
        color: 'transparent',
        backgroundColor: 'darkred',
        textShadow: '0 1px 2px rgba(255,255,255,0.5)',
        MozBackgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        padding: '10px',
        animation: 'fadeBgToBlack 10s ease-in-out 16s forwards, fadeTextShadow 10s ease-out 20s forwards',
      }}
    >
      <div
        className='mui--text-display1'
        style={{
          lineHeight: '1',
        }}
      >
        Wanted
      </div>
      <div
        className='mui--text-body1'
        style={{
        }}
      >
        dead or alive
      </div>
      <div
        className='mui--text-title'
        style={{
        }}
      >
        Reward: ¥ 1 000 000 000
      </div>
    </div>
  </Panel>
)
