import React from 'react'
import { useSelector } from 'react-redux'
import { setCurrentGender, setCurrentTime } from '../features/filter/filterSlice'
import { CustomSelect } from './CustomSelect'

export const Filter = () => {
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
    </div>
  )
}
