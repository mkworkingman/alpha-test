import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SpeakersByDate } from '../SpeakersByDate'
import { CustomSelect } from '../CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { getSpeakers } from '../../features/filter/filterSlice'
import { Filter } from '../Filter'

export const Speakers = () => {
  // const [currentTime, setCurrentTime] = useState(null)
  // const [selectedGender, setSelectedGender] = useState(null)
  // const [selectedTime, setSelectedTime] = useState(null)

  const dispatch = useDispatch()
  const speakers = useSelector(state => state.filter.currentSpeakers)
  const time = useSelector(state => state.filter.time)

  useEffect(() => {
      dispatch(getSpeakers())
  }, [dispatch])

  // useEffect(() => {
  //   let speakers = initialSpeakers
    // if (selectedGender) speakers = speakers.filter(v => v.gender === selectedGender)
    // if (selectedTime) speakers = speakers.filter(v => v.performance_time === selectedTime)
    // setCurrentSpeakers(speakers)
  // }, [selectedGender, selectedTime, initialSpeakers])

  return (
    <section>
      <h2>Спикеры нашего форума</h2>
      <Filter />
      {time && time.map(hour => (
        <SpeakersByDate
          hour={hour}
          speakers={speakers.filter(v => v.performance_time === hour)}
          key={hour}
        />
      ))}
    </section>
  )
}
