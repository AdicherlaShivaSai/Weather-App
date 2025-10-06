const WeatherDisplay = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p className="temp">{Math.round(main.temp)}°C</p>
      <p>{weather[0].main}</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
