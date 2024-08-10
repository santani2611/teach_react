import React from 'react'

export const City = (props) => {
  console.log(props)
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>{props.pinCode}</h2>
      <h3>{props.famous}</h3>
    </div>
  )
}
