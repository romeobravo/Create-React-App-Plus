import React from 'react'
import { Route } from 'react-router-dom'
import bem from 'bem-classes'
import { ApolloClient, ApolloProvider } from 'react-apollo'

import Home from 'containers/home'
import About from 'containers/about'
import 'styles/blocks/app.css'

import Header from './header'

const client = new ApolloClient()

const App = () => {
  const app = bem('app')

  return (
    <ApolloProvider client={client}>
      <div className={app}>
        <Header />

        <main className={app('main')}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    </ApolloProvider>
  )
}

export default App
