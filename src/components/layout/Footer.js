import React from 'react'
import logo from '../../images/logo.svg'
import vk from '../../images/vk.svg'
import fb from '../../images/fb.svg'
import inst from '../../images/inst.svg'
import tlgrm from '../../images/tlgrm.svg'
import './footer.scss'

export const Footer = () => {
  return (
    <footer className="container footer">
      <img className="logo footer__logo" src={logo} alt="logo" />
      <ul className="footer__info footer__list">
        <li className="footer__list-item">Политика конфиденциальности</li>
        <li className="footer__list-item">Публичная оферта</li>
        <li className="footer__list-item">+7 912 123-45-67</li>
        <li className="footer__list-item">about@microsoftforum.com</li>
      </ul>
      <ul className="footer__links footer__list">
        <li className="footer__list-item">О мероприятии</li>
        <li className="footer__list-item">Темы</li>
        <li className="footer__list-item">Расписание</li>
        <li className="footer__list-item">Спикеры</li>
        <li className="footer__list-item">Контакты</li>
      </ul>
      <ul className="footer__socials">
        <a href="https://vk.com/" target="_blank" rel="noreferrer">
          <li className="footer__socials-list-item">
            <img src={vk} alt="vk" />
          </li>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <li className="footer__socials-list-item">
            <img src={fb} alt="fb" />
          </li>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <li className="footer__socials-list-item">
            <img src={inst} alt="inst" />
          </li>
        </a>
        <a href="https://telegram.org/" target="_blank" rel="noreferrer">
          <li className="footer__socials-list-item">
            <img src={tlgrm} alt="tlgrm" />
          </li>
        </a>
      </ul>
    </footer>
  )
}
