import React from 'react'

export const Speaker = ({name, photo_url, description}) => {
  return (
    <li className="speaker">
      <img className="speaker__img" src={photo_url} alt={name} />
      <h4 className="speaker__name">{name}</h4>
      <p className="speaker__description">{description}</p>
      <a href="/" className="speaker__more">Подробнее</a>
    </li>
  )
}
