import React from 'react'
import { useDispatch } from 'react-redux'
import './customSelect.scss'

export const CustomSelect = ({name, values, currentValue, setValue}) => {
  const dispatch = useDispatch()
  return (
    <div className="select">
      <div className="select__name">{name}</div>
      <div className="select__itself">
        <p className="select__active-value">{currentValue}</p>
        <ul className="select__values-list">
          <li className="select__value" onClick={() => dispatch(setValue(null))}></li>
          {values.map(v => (
            <li key={v} className="select__value" onClick={() => dispatch(setValue(v))}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
