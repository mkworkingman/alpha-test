import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SpeakersByDate } from '../SpeakersByDate'
import { CustomSelect } from '../CustomSelect'
import { useDispatch } from 'react-redux'
import { getSpeakers } from '../../features/filter/filterSlice'

export const Speakers = () => {
  const [initialSpeakers, setInitialSpeakers] = useState(null)
  const [currentSpeakers, setCurrentSpeakers] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)
  const [selectedGender, setSelectedGender] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getSpeakers())
  }, [dispatch])

  useEffect(() => {
    axios.get('https://pro.alphadevteam.com/api/tz/speakers')
      .then(res => {
        setInitialSpeakers(res.data.response)
        setCurrentSpeakers(res.data.response)
        setCurrentTime([...new Set(res.data.response.map(v => v.performance_time))])
      })
  }, [])

  useEffect(() => {
    let speakers = initialSpeakers
    if (selectedGender) speakers = speakers.filter(v => v.gender === selectedGender)
    if (selectedTime) speakers = speakers.filter(v => v.performance_time === selectedTime)
    setCurrentSpeakers(speakers)
  }, [selectedGender, selectedTime, initialSpeakers])

  return (
    <section>
      <h2>Спикеры нашего форума</h2>
      <CustomSelect
        name="Пол спикера"
        values={['male', 'female']}
        currentValue={selectedGender}
        setValue={setSelectedGender}
      />
      <CustomSelect
        name="Время выступления"
        values={currentTime || []}
        currentValue={selectedTime}
        setValue={setSelectedTime}
      />
      {currentTime && currentTime.map(hour => (
        <SpeakersByDate
          hour={hour}
          speakers={currentSpeakers.filter(v => v.performance_time === hour)}
          key={hour} />
      ))}
    </section>
  )
}
