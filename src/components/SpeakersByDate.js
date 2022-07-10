import React from 'react'
import './speakersByDate.scss'

export const SpeakersByDate = ({hour, speakers}) => {
  return (
    <section className="speakers-by-date">
      <h3 className="speakers-by-date__heading">Выступают в {hour}</h3>
      <ul className="speakers-by-date__list">
        {speakers.map(speaker => (
          <li
            key={speaker.name}
            className="speaker"
          >
            <img className="speaker__img" src={speaker.photo_url} alt={speaker.name} />
            {speaker.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
