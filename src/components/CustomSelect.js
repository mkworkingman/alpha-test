import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import './customSelect.scss'

export const CustomSelect = ({name, values, currentValue, setValue}) => {
  const dispatch = useDispatch()
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen && setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [setOpen])

  return (
    <div className="select">
      <div className="select__name">{name}</div>
      <div
        className={open ? "select__itself select__itself--active" : "select__itself"}
        onClick={() => setOpen(!open)}
        ref={ref}
      >
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
