'use strict'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../reducers/index'
import Background from '../containers/Background'
import '../styles/index.scss'

export default  props => (
  <Provider store={createStore(
    reducers,
    undefined,
    (
      process.env.NODE_ENV !== 'production'
      &&
      typeof window !== 'undefined'
      &&
      window.devToolsExtension
    ) ? window.devToolsExtension() : undefined
  )}>
    <Background/>
  </Provider>
)
