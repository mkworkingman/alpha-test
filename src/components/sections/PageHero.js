import React from 'react'
import { RegistrationBtn } from '../RegistrationBtn'
import './pageHero.scss'

export const PageHero = () => {
  return (
    <section className="pagehero">
      <h2 className="pagehero__heading" id="about">Форум Microsoft</h2>
      <h1 className="pagehero__heading">«Finance industry trust in AI and IT-Security»</h1>
      <p className="pagehero__description">Масштабная кибератака и устаревшее оборудование может привести к потере клиентов, ухудшить отношения с партнёрами и учредителями, а невыполнение требований законодательства может привести к существенным штрафам и даже к блокировке ресурсов</p>
      <p>Узнайте как этого избежать, регистрируйтесь на наш форум</p>
      <RegistrationBtn />
    </section>
  )
}
