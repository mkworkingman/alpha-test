import React, { useState } from 'react'
import './header.scss'
import logo from '../../images/logo.svg';
import { RegistrationBtn } from '../RegistrationBtn';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="header">
      <nav className="container">
        <img className="header__logo" src={logo} alt="logo" />
        <div
          className={
            openMenu ? "hamburger-icon hamburger-icon--active" : "hamburger-icon"
          }
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className="hamburger-icon__lines"></div>
        </div>
        <div className="hamburger-menu">
          <RegistrationBtn />
        </div>
      </nav>
    </header>
  )
}
