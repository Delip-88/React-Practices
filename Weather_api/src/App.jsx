import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [fetching, setFetching] = useState(false);

  const Check_Weather = async (Name = 'makwanpur') => {
    setFetching(true);  // Set fetching to true at the beginning of the fetch
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${Name}&format=json&u=c`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '9a749ed2c4mshfbca3d99f7bf00fp1eb4a2jsnca9a2bf3594d',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setWeather(result);
      console.log(result)
      setLoading(false);
      setFetching(false);  // Set fetching to false after the fetch is complete
    } catch (error) {
      setError(error);
      setLoading(false);
      setFetching(false);  // Set fetching to false in case of an error
    }
  };

  useEffect(() => {
    Check_Weather();
  }, []);

  if (loading) {
    return <div style={{color : 'yellow'}}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Check_Weather(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          City Name:
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {/* <h1>Weather in {name || 'Makwanpur'}</h1> */}
      {weather && (
        <div>
          <h4>Country: {fetching ? <div className='loading'>Loading...</div> : `${weather.location.country}`}</h4>
          <p>City: {fetching ? <div className='loading'>Loading...</div> : `${weather.location.city}`}</p>
          <p>Temperature: {fetching ? <div className='loading'>Loading...</div> : `${weather.current_observation.condition.temperature}°C`}</p>
          <p>Condition: {fetching ? <div className='loading'>Loading...</div> : `${weather.current_observation.condition.text}`}</p>
          <p>Humidity: {fetching ? <div className='loading'>Loading...</div> : `${weather.current_observation.atmosphere.humidity}%`}</p>
          <p>Wind Speed: {fetching ? <div className='loading'>Loading...</div> : `${weather.current_observation.wind.speed} km/h`}</p>
          <p>Sunrise: {fetching ? <div className='loading'>Loading...</div> : `${weather.current_observation.astronomy.sunrise}`}</p>
          <p>Sunset: {fetching ? <div className='loading'>Loading...</div> : `${weather.current_observation.astronomy.sunset}`}</p>
          <h2>Forecast</h2>
          <ul>
            {fetching
              ? <div className='loading'>Loading...</div>
              : weather.forecasts.map((forecast, index) => (
                <li key={index}>
                  <p>{forecast.day}: {forecast.text}, High: {forecast.high}°C, Low: {forecast.low}°C</p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
