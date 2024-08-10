import React from 'react'

export const Country = (props) => {
  console.log(props)
  const { name, pop, capital } = props
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {pop}</p>
    </div>
  )
}
