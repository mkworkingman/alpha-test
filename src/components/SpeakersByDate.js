import React from 'react'

export const SpeakersByDate = ({hour, speakers}) => {
  return (
    <section>
      <h3>Выступают в {hour}</h3>
      <ul>
        {speakers.map(speaker => (
          <li key={speaker.name}>{speaker.name}</li>
        ))}
      </ul>
    </section>
  )
}
