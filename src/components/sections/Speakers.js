import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SpeakersByDate } from '../SpeakersByDate'
import { CustomSelect } from '../CustomSelect'

export const Speakers = () => {
  const [initialSpeakers, setInitialSpeakers] = useState(null)
  const [currentSpeakers, setCurrentSpeakers] = useState(null)
  const [initialTime, setInitialTime] = useState(null)
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
      <CustomSelect name="Пол спикера" values={['Мужской', 'Женский']} />
      {currentTime && currentTime.map(hour => (
        <SpeakersByDate
          hour={hour}
          speakers={currentSpeakers.filter(v => v.performance_time === hour)}
          key={hour} />
      ))}
    </section>
  )
}
