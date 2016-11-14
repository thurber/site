import React from 'react'
import Wanted from './Wanted'
import Terminal from './Terminal'

export default ({showIntro, endIntro}) => (
  <div
    onClick={showIntro ? endIntro : undefined}
    style={{
      overflow: 'hidden',
      minWidth: '100%',
      minHeight: '100%',
      backgroundColor: showIntro ? 'white' : 'black',
      animation: showIntro ? 'fadeBgToBlack 10s ease-in-out 16s forwards' : undefined,
    }}
  >
    {showIntro ?
      <Wanted/>
      :
      <Terminal/>
    }
  </div>
)
