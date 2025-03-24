import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";

const WeatherApp = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated();

  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    if (coords) {
      const { latitude, longitude } = coords;
      const fetchWeatherData = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WEATHER_URL}lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      };

      fetchWeatherData();
    }
  }, [coords]);

  if (!isGeolocationAvailable) return <div>Geolocation is not available</div>;
  if (!isGeolocationEnabled) return <div>Geolocation is not enabled</div>;

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.temp}°C</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherApp;
