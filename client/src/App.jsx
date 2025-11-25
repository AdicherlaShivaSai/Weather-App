import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import axios from "axios";
import "./App.css";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(`${BACKEND_URL}/api/weather`, {
        params: { city: cityName },
      });

      setWeather(response.data);
      localStorage.setItem("lastCity", cityName);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("City not found. Please try again.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) fetchWeather(city);
  }, []);

  return (
    <div className="app">
      <h1 className="title">🌦️ Weather Finder</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && !loading && <WeatherDisplay data={weather} />}
    </div>
  );
}

export default App;
