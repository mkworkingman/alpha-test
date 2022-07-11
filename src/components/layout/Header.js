import React, { useState, useEffect } from 'react'
import './header.scss'
import logo from '../../images/logo.svg'
import { RegistrationBtn } from '../RegistrationBtn'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [scrollOnTop, setScrollOnTop] = useState(false)
  const [activeLink, setActiveLink] = useState(false)
  useEffect(() => {
    const speakersHeading = document.querySelector('#speakers')
    function addUnderline() {
      if (document.querySelector('html').scrollTop === 0) {
        setScrollOnTop(false)
      } else {
        setScrollOnTop(true)
      }
      if (speakersHeading.getBoundingClientRect().bottom <= 140) {
        setActiveLink('speakers')
      } else {
        setActiveLink('about')
      }
    }
    addUnderline()

    let timeout
    function scrollHandler() {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        addUnderline()
      }, 200);
    }
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <>
      <div className={scrollOnTop ? "header-offset header-offset--on-top" : "header-offset"}></div>
      <header className={scrollOnTop ? "header header--on-top" : "header"}>
        <nav className="container">
          <img className="logo" src={logo} alt="logo" />
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
        </nav>
      </header>
    </>
  )
}
