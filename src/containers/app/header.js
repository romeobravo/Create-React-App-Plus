import React from 'react'
import bem from 'bem-classes'

import logo from 'images/logo.svg'
import 'styles/blocks/header.css'

import Navigation from './navigation'

const Header = () => {
  const header = bem('header')

  return (
    <header className={header}>
      <h1 className={header('title')}>Create React App Plus</h1>
      <img src={logo} className={header('logo')} alt="logo" />
      <Navigation className={header('navigation').toString()} />
    </header>
  )
}

export default Header
