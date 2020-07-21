import React, { useState, useEffect } from 'react'
import './App.css'
import { Cards, CountryPicker, Modes } from './components'
import { fetchData, fetchCountries } from './api/api'

const App = () => {

  const [data, setData] = useState<any>({});
  const [countries, setCountries] = useState<Array<any>>([])
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => setData(await fetchData())
    getData()
  }, [setData])

  useEffect(() => {
    const getCountries = async () => setCountries(await fetchCountries())
    getCountries()
  }, [setCountries])

  // useEffect(() => {
  //     setDarkMode(JSON.parse(localStorage.getItem('mode')))
  // }, [darkMode])

  const handleCountry = async (country: string) => {
    const changedData = await fetchData(country)
    setData(changedData)
  }

  return (
    <div className={darkMode ? 'darkApp' : 'App'}>
      <div className='container'>
        <h1 className={darkMode ? 'darkModeLogo' : 'Logo'}>COVID-19 Tracker</h1>
        
        <Modes darkMode={darkMode} setDarkMode={setDarkMode} />

        <Cards data={data} darkMode={darkMode} />

        <CountryPicker countries={countries} 
                       handleCountry={handleCountry} 
                       darkMode={darkMode} 
        />
     </div>
    </div>
  );
}

export default App
