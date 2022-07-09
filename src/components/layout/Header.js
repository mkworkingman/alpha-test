import React from 'react'
import './header.scss'
import logo from '../../images/logo.svg';
import { RegistrationBtn } from '../RegistrationBtn';

export const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <img className="logo" src={logo} alt="logo" />
        <RegistrationBtn />
      </nav>
    </header>
  )
}
