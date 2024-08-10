import React from 'react'
import { Country } from './Country'

export const CountryList = () => {
  const countries = [
    { name: 'USA', capital: 'Washington, D.C.', pop: 331000000 },
    { name: 'Canada', capital: 'Ottawa', pop: 38000000 },
    { name: 'Mexico', capital: 'Mexico City', pop: 126000000 },
  ]
  return (
    <div>
      {countries.map((country) => {
        return (
          <>
            <Country
              name={country.name}
              capital={country.capital}
              pop={country.pop}
            />
          </>
        )
      })}
    </div>
  )
}
