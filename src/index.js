import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from 'vendor/registerServiceWorker'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'lib/store'
import App from 'containers/app'
import 'styles/base.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target,
)

if (module.hot) {
  module.hot.accept('containers/app', () => {
    import('containers/app').then((module) => {
      const NextApp = module.default

      render(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NextApp />
          </ConnectedRouter>
        </Provider>,
        target,
      )
    })
  })
}

window.store = store
registerServiceWorker()
