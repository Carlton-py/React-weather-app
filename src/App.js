import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const[city, setCity] = useState("West bromwich");
  const[weather, setWeather]= useState(null);
  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5135ab6fe768d7031437349a0aefb873&units=metric`)
    .then((res)=> res.json())
    .then ((data)=>setWeather(data))
    .catch((error)=>console.log(error.message));  
  };  
  return (
    <div className="app flex flex-col items-center">
      <h1 className = "py-4 text-5xl text-orange-950 font-serif">Search Weather</h1>
      <div className='form'>
        <form onSubmit = {handleSubmit}>
          <input type ="text" placeholder='Enter city name'
          className = 'px-4 py-3'
          value={city}
          onChange={(e)=>setCity(e.target.value)}/>
          <button type = 'submit' className='px-4 py-3 bg-blue-600 text-white'>Search</button>
        </form>
      </div>
      { 
        weather &&(
          <div className='card bg-blue-600 text-white w-[220px] h-[350px] flex flex-col justify-center items-center mt-10'>
            <h4 className='text-3xl'>{weather.name}</h4>
            <img src = {`https://openweathermap.org/img/w/${weather.weather[0].icon}.png` } alt= ''/>
            <h2 className='text-4xl font-bold mb-2'>
              {weather.main.temp}&deg;
            </h2>
            <p>{weather.weather[0].main}</p>
          </div> 
        )} 
      
    
    
    
    
    
    </div>
  );
}

export default App;
