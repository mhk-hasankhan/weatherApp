function CurrentWeather({ data }) {
  return (
    <div className="current">
      <h2>{data.name}</h2>
      <p className="desc">{data.weather[0].description}</p>
      <div className="temp">{Math.round(data.main.temp)}°C</div>
    </div>
  );
}

export default CurrentWeather;
