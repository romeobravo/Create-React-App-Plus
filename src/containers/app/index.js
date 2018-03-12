import React from 'react'
import { Route } from 'react-router-dom'
import bem from 'bem-classes'

import Home from 'containers/home'
import About from 'containers/about'
import 'styles/blocks/app.css'

import Header from './header'

const App = () => {
  const app = bem('app')

  return (
    <div className={app}>
      <Header />

      <main className={app('main')}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  )
}

export default App
