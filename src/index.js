import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from 'vendor/registerServiceWorker'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from 'lib/store'
import { ApolloProvider } from 'react-apollo'
import { gql, ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import App from 'containers/app'
import 'styles/base.css'

const target = document.querySelector('#root')

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://3g9uy7wh48.execute-api.eu-central-1.amazonaws.com/prod/graphapi' }),
  cache: new InMemoryCache(),
})

render(
  <ApolloProvider client={client} store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ApolloProvider>,
  target,
)

if (module.hot) {
  module.hot.accept('containers/app', () => {
    import('containers/app').then((module) => {
      const NextApp = module.default

      render(
        <ApolloProvider client={client} store={store}>
          <ConnectedRouter history={history}>
            <NextApp />
          </ConnectedRouter>
        </ApolloProvider>,
        target,
      )
    })
  })
}

window.store = store
registerServiceWorker()
