function Forecast({ data }) {
  const daily = data.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>

      <div className="forecast-grid">
        {daily.map((item) => (
          <div className="forecast-card" key={item.dt}>
            <p>
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <strong>{Math.round(item.main.temp)}°C</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
