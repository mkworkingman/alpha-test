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
          className={openMenu ? "hamburger-icon hamburger-icon--active" : "hamburger-icon"}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className="hamburger-icon__lines"></div>
        </div>
        <div className={openMenu ? "hamburger-menu hamburger-menu--active" : "hamburger-menu"}>
          <ul className="hamburger-menu__links-list">
            <li className="hamburger-menu__link">
              <a href="/">О мероприятии</a>
            </li>
            <li className="hamburger-menu__link">
              <a href="/">Спикеры</a>
            </li>
          </ul>
          <RegistrationBtn />
        </div>
      </nav>
    </header>
  )
}
