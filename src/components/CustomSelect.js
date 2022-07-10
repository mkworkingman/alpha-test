import React from 'react'
import './customSelect.scss'

export const CustomSelect = ({name, values}) => {
  return (
    <div className="select">
      <div className="select__name">{name}</div>
      <div className="select__itself">
        <p className="select__active-value">Test</p>
        <ul className="select__values-list">
          <li className="select__value"></li>
          {values.filter(v => (
            <li key={v} className="select__value">{v}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
