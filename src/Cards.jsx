import { useState } from 'react'
function Cards() {
  //let name = 'Rakesh DR.'
  let [name, setName] = useState('Rakesh Dr')
  return (
    <div>
      <div className="card">
        <h4>{name}</h4>
        <button
          onClick={() => {
            // name = 'Dinesh IAS'
            setName('Dinesh IAS')
            console.log(name)
          }}
        >
          Change Name
        </button>
        {console.log(name)}
      </div>
    </div>
  )
}

export default Cards
