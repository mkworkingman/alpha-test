import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentGender, setCurrentTime, search, clear } from '../features/filter/filterSlice'
import { CustomSelect } from './CustomSelect'
import './filter.scss'

export const Filter = () => {
  const dispatch = useDispatch()
  const time = useSelector(state => state.filter.time)
  const currentGender = useSelector(state => state.filter.currentGender)
  const currentTime = useSelector(state => state.filter.currentTime)

  return (
    <div className="filter">
      <CustomSelect
        name="Пол спикера"
        values={['male', 'female']}
        currentValue={currentGender}
        setValue={setCurrentGender}
      />
      <CustomSelect
        name="Время выступления"
        values={time || []}
        currentValue={currentTime}
        setValue={setCurrentTime}
      />
      <button
        className="filter__btn filter__btn--clean"
        onClick={() => dispatch(clear())}
      >
        Clean
      </button>
      <button
        className="filter__btn filter__btn--search"
        onClick={() => dispatch(search())}
      >
        Search
      </button>
    </div>
  )
}
