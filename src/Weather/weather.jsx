
import { useState } from "react";


function Weather() {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({


        city: "Baghlan",
        temperature: 28,
        description: "clear sky",
        humidity: 45,
        wind: 10,
        icon: "☀️"

    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    const searchWeather = () => {
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
            .then(res => res.json())
            .then(locationData => {
                if (!locationData.results) {
                    throw new Error(alert("city not found !"))
                }
                const loc = locationData.results[0];

                return fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true`
                );
            })
            .then(res => res.json())
            .then(data => {
                const w = data.current_weather;

                setWeather({
                    city: city,
                    temperature: w.temperature,
                    wind: w.windspeed,
                    humidity: "N/A",
                    description: "Live Weather",
                    icon: "☀️"
                });
                setLoading(false)
            })
            .catch(err => {
                setError(err.message);
                setLoading(false)
            });
    };


    let backgroundColor = "#ffffff";

    if(weather.description==="clear sky"){
        backgroundColor= "#FFD54F"
    }else if(weather.description==="partly cloudly"){
        backgroundColor="#B0BEC5"
    }else if(weather.description==="Rainy"){
        backgroundColor="#64B5F6"
    }

    return (


        <div className="container mt-5  rounded" style={{backgroundColor:"backgroundColor",
            minHeight:"100vh",
            transition:"0.5s"
        }}>

            <div className="card shadow p-4">

                <h2 className="text-center mb-4">Weather App</h2>

                <div className="input-group">
                    <input type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city} placeholder="Enter city name ?" className="form-control" />

                    {loading && <p>Loading...</p>}
                    {error && <p style={{ color: "red" }}>{error}</p>}


                    <button className="btn btn-primary " onClick={searchWeather}
                    >Search</button>
                </div>


                <div className="text-center">

                    <h1>{weather.icon}</h1>
                    <h2>{weather.city}</h2>
                    <h1>{weather.temperature}°C</h1>
                    <p>{weather.description}</p>


                </div>

                <div className="row mt-5">

                    <div className="col-6">
                        <div className="card p-3 text-center">
                            <h4>💧</h4>
                            <h5>Humidity</h5>
                            <p>{weather.humidity}%</p>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="card p-3 text-center">
                            <h4>🌬️</h4>
                            <h5>Wind</h5>
                            <h4>{weather.wind}km/h</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )



} export default Weather;