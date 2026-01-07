import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { getWeather, getForecast } from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchCity = async (city) => {
    try {
      setLoading(true);
      setError("");
      const weatherData = await getWeather(city);
      const forecastData = await getForecast(city);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Weather Dashboard</h1>

        <SearchBar onSearch={searchCity} />

        {loading && <p className="info">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {weather && <CurrentWeather data={weather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
