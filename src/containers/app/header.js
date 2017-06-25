import React from 'react'
import cx from 'bem-classes'

import logo from 'images/logo.svg'
import 'styles/blocks/header.css'

import Navigation from './navigation'

const Header = () => {
  const header = cx('header')

  return (
    <header className={header}>
      <h1 className={header.e('title')}>Create React App Plus</h1>
      <img src={logo} className={header.e('logo')} alt="logo" />
      <Navigation className={header.e('navigation').s} />
    </header>
  )
}

export default Header
