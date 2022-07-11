import React, { useEffect } from 'react'
import { SpeakersByDate } from '../SpeakersByDate'
import { useDispatch, useSelector } from 'react-redux'
import { getSpeakers } from '../../features/filter/filterSlice'
import { Filter } from '../Filter'
import './speakers.scss'

export const Speakers = () => {
  const dispatch = useDispatch()
  const speakers = useSelector(state => state.filter.currentSpeakers)
  const time = useSelector(state => state.filter.time)

  useEffect(() => {
      dispatch(getSpeakers())
  }, [dispatch])

  return (
    <section className="speakers">
      <h2 id="speakers" className="speakers__heading">Спикеры нашего форума</h2>
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
