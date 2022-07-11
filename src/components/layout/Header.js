import React, { useState, useEffect } from 'react'
import './header.scss'
import logo from '../../images/logo.svg'
import { HamburgerMenu } from '../HamburgerMenu'

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
      if (speakersHeading.getBoundingClientRect().bottom <= 160) {
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
      }, 100)
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
          <HamburgerMenu
            activeLink={activeLink}
            openMenu={setOpenMenu}
          />
        </nav>
      </header>
    </>
  )
}
