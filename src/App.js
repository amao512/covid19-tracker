import React, { useState, useEffect } from 'react';
import './App.css';
import { Cards, CountryPicker } from './components';
import { fetchData } from './api/api';

const App = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData())
    }

    getData();
  }, [setData])

  console.log(data)

  return (
    <div className='App'>
      <div className='container'>
        <Cards data={data} />
        <CountryPicker />
     </div>
    </div>
  );
}

export default App;
