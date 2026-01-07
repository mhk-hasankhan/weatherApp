const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}

export async function getForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Forecast not found");
  }

  return response.json();
}
