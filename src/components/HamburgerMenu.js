import React from 'react'
import { RegistrationBtn } from './RegistrationBtn'

export const HamburgerMenu = ({activeLink, openMenu, setOpenMenu}) => {
  return (
    <>
      <div
        className={openMenu ? "hamburger-icon hamburger-icon--active" : "hamburger-icon"}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="hamburger-icon__lines"></div>
      </div>
      <div className={openMenu ? "hamburger-menu hamburger-menu--active" : "hamburger-menu"}>
        <ul className="hamburger-menu__links-list">
          <li className="hamburger-menu__link">
            <a
              href="#about"
              onClick={() => setOpenMenu(false)}
              className={activeLink === 'about' ? 'active' : ''}
            >
              О мероприятии
            </a>
          </li>
          <li className="hamburger-menu__link">
            <a
              href="#speakers"
              onClick={() => setOpenMenu(false)}
              className={activeLink === 'speakers' ? 'active' : ''}
            >
              Спикеры
            </a>
          </li>
        </ul>
        <RegistrationBtn />
      </div>
    </>
  )
}
