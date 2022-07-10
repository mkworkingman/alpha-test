import React from 'react'
import './customSelect.scss'

export const CustomSelect = ({name, values, currentValue, setValue}) => {
  return (
    <div className="select">
      <div className="select__name">{name}</div>
      <div className="select__itself">
        <p className="select__active-value">{currentValue}</p>
        <ul className="select__values-list">
          <li className="select__value" onClick={() => setValue(null)}></li>
          {values.map(v => (
            <li key={v} className="select__value" onClick={() => setValue(v)}>{v}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
