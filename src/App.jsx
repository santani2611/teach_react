import './App.css'
import Cards from './Cards'
import { City } from './City'
import { CountryList } from './CountryList'
function App() {
  return (
    <div>
      <h1 className="header">I am America</h1>
      <Cards />
      <br />
      <br />
      <br />
      <City name="Gorakhpur" pinCode="273001" famous="AbhimanyuSantani" />
      <CountryList />
    </div>
  )
}

export default App
