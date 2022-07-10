import React from 'react'
import './speakersByDate.scss'

export const SpeakersByDate = ({hour, speakers}) => {
  return (
    <>
      {speakers.length ? (<section className="speakers-by-date">
        <h3 className="speakers-by-date__heading">Выступают в {hour}</h3>
        <ul className="speakers-by-date__list">
          {speakers.map(speaker => (
            <li
              key={speaker.name}
              className="speaker"
            >
              <img className="speaker__img" src={speaker.photo_url} alt={speaker.name} />
              <h4 className="speaker__name">{speaker.name}</h4>
              <p className="speaker__description">{speaker.description}</p>
              <a href="/" className="speaker__more">Подробнее</a>
            </li>
          ))}
        </ul>
      </section>) : null}
    </>
  )
}
