'use strict'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

(() => {

  window.addEventListener('load', function load(event) {
    
    window.removeEventListener('load', load, false)

    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.getElementById('mount')
    )

    if (module.hot) {
      module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default
        render(
          <AppContainer>
            <App/>
          </AppContainer>,
          document.getElementById('mount')
        )
      })
    }

  })

})()
