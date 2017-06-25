import React from 'react'
import { Route } from 'react-router-dom'
import cx from 'bem-classes'

import Home from 'containers/home'
import About from 'containers/about'
import 'styles/blocks/app.css'

import Header from './header'

const App = () => {
  const app = cx('app')

  return (
    <div className={app}>
      <Header />

      <main className={app.e('main')}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  )
}

export default App
