import React from 'react'
import './header.scss'
import logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <img className="logo" src={logo} alt="logo" />
      </nav>
    </header>
  )
}
