import React from 'react'

export const HeaderLinks = ({activeLink, openMenu}) => {
  return (
    <ul className="hamburger-menu__links-list">
      <li className="hamburger-menu__link">
        <a
          href="#about"
          onClick={() => openMenu(false)}
          className={activeLink === 'about' ? 'active' : ''}
        >
          О мероприятии
        </a>
      </li>
      <li className="hamburger-menu__link">
        <a
          href="#speakers"
          onClick={() => openMenu(false)}
          className={activeLink === 'speakers' ? 'active' : ''}
        >
          Спикеры
        </a>
      </li>
    </ul>
  )
}
