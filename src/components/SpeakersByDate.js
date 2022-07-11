import React from 'react'
import { Speaker } from './Speaker'
import './speakersByDate.scss'

export const SpeakersByDate = ({hour, speakers}) => {
  return (
    <>
      {speakers.length ? (<section className="speakers-by-date">
        <h3 className="speakers-by-date__heading">Выступают в {hour}</h3>
        <ul className="speakers-by-date__list">
          {speakers.map(speaker => <Speaker
            key={speaker.name}
            name={speaker.name}
            photo_url={speaker.photo_url}
            description={speaker.description}
          />)}
        </ul>
      </section>) : null}
    </>
  )
}
