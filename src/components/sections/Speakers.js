import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Speakers = () => {
  const [initialSpeakers, setInitialSpeakers] = useState(null)
  const [initialTime, setInitialTime] = useState(null)
  const [currentSpeakers, setCurrentSpeakers] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)
  useEffect(() => {
    axios.get('https://pro.alphadevteam.com/api/tz/speakers')
      .then(res => {
        const time = [...new Set(res.data.response.map(v => v.performance_time))]
        setInitialSpeakers(res.data.response)
        setCurrentSpeakers(res.data.response)
        setInitialTime(time)
        setCurrentTime(time)
      })
  }, [])

  return (
    <section>
      <h2>Спикеры нашего форума</h2>
      <h3>...filter will be here...</h3>
      {currentSpeakers && currentSpeakers.map(speaker => (
        <div key={speaker.name}>{speaker.name}</div>
      ))}
      {currentTime && currentTime.map(hour => (
        <div key={hour}>
          <h3>Выступают в {hour}</h3>
        </div>
      ))}
    </section>
  )
}
