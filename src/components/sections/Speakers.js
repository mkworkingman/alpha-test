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
  const loading = useSelector(state => state.filter.loading)
  const success = useSelector(state => state.filter.success)

  useEffect(() => {
      dispatch(getSpeakers())
  }, [dispatch])

  return (
    <section className="speakers">
      <h2 id="speakers" className="speakers__heading">Спикеры нашего форума</h2>
      {loading
        ? <h3>Loading...</h3>
        : (success
            ? <>
                <Filter />
                {time && time.map(hour => (
                  <SpeakersByDate
                    key={hour}
                    hour={hour}
                    speakers={speakers.filter(v => v.performance_time === hour)}
                  />
                ))}
            </>
            : <h3>Sorry, something went wrong...</h3>
          )
      }
    </section>
  )
}
