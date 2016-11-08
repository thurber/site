import React from 'react'
import Panel from 'muicss/lib/react/panel'
import T from 'babel!react-svg!../styles/tcard.svg'

export default props => (
  <Panel
    style={{
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',
        backgroundColor: 'linen',
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
    </div>
  </Panel>
)
