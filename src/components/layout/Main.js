import React from 'react'
import { PageHero } from '../sections/PageHero'
import { Speakers } from '../sections/Speakers'
import './main.scss'

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <PageHero />
        <Speakers />
      </div>
    </main>
  )
}
