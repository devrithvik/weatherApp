import './App.css';
import {useState} from 'react';
function App() {
  const api = {
    key: "743eacc1010a062abdd0d86cc3b64a6b",
    base: "https://api.openweathermap.org/data/2.5/",
  };
    const [city,setCity]= useState('');
    const [weather,setWeather] = useState({});
    const updateWeather = () => {
      fetch(`${api.base}weather?q=${city}&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => { console.log(result);setWeather(result); })
      setCity('');
    }
  return (
    <div className="App">
     <h1>THE WEATHER APP</h1>
        <input type="text" value={city} onChange={e => setCity(e.target.value)}></input>
        <button onClick={updateWeather}>SEARCH</button>
       {weather.cod!=='404' ?
       <>
       <p>{weather.name}</p>
       <p>{weather.main.temp} •F</p>
       <p>{weather.weather[0].main}</p>
       <p>({weather.weather[0].description})</p>
       </>
       :
        <p>please check the city name once again !!</p>
       }
    </div> 
   
  );
}

export default App;
