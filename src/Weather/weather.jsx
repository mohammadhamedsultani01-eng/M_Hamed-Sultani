import { useState } from "react";

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({
    city: "Baghlan",
    temperature: 28,
    description: "Clear Sky",
    humidity: 45,
    wind: 10,
    icon: "☀️",
    bg: "#FFD54F"
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // تابع نگاشت کد WMO به آیکون، متن و رنگ پس‌زمینه
  const getWeatherDetails = (code) => {
    if (code === 0) {
      return { description: "Clear Sky", icon: "☀️", bg: "#FFD54F" };
    } else if (code >= 1 && code <= 3) {
      return { description: "Partly Cloudy", icon: "⛅", bg: "#B0BEC5" };
    } else if (code >= 45 && code <= 48) {
      return { description: "Foggy", icon: "🌫️", bg: "#CFD8DC" };
    } else if (code >= 51 && code <= 67) {
      return { description: "Rainy", icon: "🌧️", bg: "#90CAF9" };
    } else if (code >= 71 && code <= 77) {
      return { description: "Snowy", icon: "❄️", bg: "#E0F7FA" };
    } else if (code >= 95) {
      return { description: "Thunderstorm", icon: "🌩️", bg: "#7E57C2" };
    } else {
      return { description: "Overcast", icon: "☁️", bg: "#90A4AE" };
    }
  };

  const searchWeather = () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");

    // ۱. پیدا کردن موقعیت جغرافیایی شهر
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`)
      .then((res) => res.json())
      .then((locationData) => {
        if (!locationData.results || locationData.results.length === 0) {
          throw new Error("City not found!");
        }
        const loc = locationData.results[0];

        // ۲. دریافت اطلاعات آب و هوا بر اساس نیازمندی‌ها
        return fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current=temperature_2m,relative_humidity_2m,weathercode,wind_speed_10m`
        );
      })
      .then((res) => res.json())
      .then((data) => {
        const current = data.current;
        const details = getWeatherDetails(current.weathercode);

        setWeather({
          city: city,
          temperature: Math.round(current.temperature_2m),
          wind: current.wind_speed_10m,
          humidity: current.relative_humidity_2m,
          description: details.description,
          icon: details.icon,
          bg: details.bg
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div
      className="container mt-5 rounded p-3"
      style={{
        backgroundColor: weather.bg,
        minHeight: "100vh",
        transition: "background-color 0.5s ease"
      }}
    >
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Weather App</h2>

        <div className="input-group mb-3">
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="Enter city name..."
            className="form-control"
          />
          <button className="btn btn-primary" onClick={searchWeather}>
            Search
          </button>
        </div>

        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center" style={{ color: "red" }}>{error}</p>}

        <div className="text-center mt-3">
          <h1 style={{ fontSize: "4rem" }}>{weather.icon}</h1>
          <h2>{weather.city}</h2>
          <h1>{weather.temperature}°C</h1>
          <p className="fw-bold">{weather.description}</p>
        </div>

        <div className="row mt-4">
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
              <p>{weather.wind} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
