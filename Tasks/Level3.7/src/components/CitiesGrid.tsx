import React, { useState, useEffect } from 'react';
import { WeatherData } from '../types/weather';
import { popularCities } from '../data/cities';
import weatherService from '../services/weatherService';
import LoadingSpinner from './LoadingSpinner';

interface CitiesGridProps {
  onCitySelect: (cityName: string) => void;
}

const CitiesGrid: React.FC<CitiesGridProps> = ({ onCitySelect }) => {
  const [citiesWeather, setCitiesWeather] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCitiesWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch weather for first 6 popular cities to avoid too many API calls
        const weatherPromises = popularCities.slice(0, 6).map(city =>
          weatherService.getCurrentWeather(city.name)
        );

        const weatherData = await Promise.all(weatherPromises);
        setCitiesWeather(weatherData);
      } catch (err) {
        setError('Failed to load cities weather data');
        console.error('Error fetching cities weather:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCitiesWeather();
  }, []);

  if (loading) {
    return <LoadingSpinner message="Loading popular cities..." />;
  }

  if (error) {
    return (
      <div className="error-message">
        <i className="fas fa-exclamation-triangle"></i>
        <h3>Could not load cities</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="cities-section">
      <h2 className="cities-title">Popular Cities</h2>
      <div className="cities-grid">
        {citiesWeather.map((weather, index) => (
          <div
            key={`${weather.location.name}-${index}`}
            className="city-card glass-card"
            onClick={() => onCitySelect(weather.location.name)}
          >
            <div className="city-header">
              <h3 className="city-name">{weather.location.name}</h3>
              <div className="city-temp">{Math.round(weather.current.temp_c)}°</div>
            </div>

            <div className="city-weather">
              <div className="city-icon">
                {weatherService.getWeatherEmoji(weather.current.condition.text)}
              </div>
              <div className="city-desc">
                {weather.current.condition.text}
              </div>
            </div>

            <div className="city-details">
              <div className="city-detail">
                <div className="city-detail-value">{weather.current.humidity}%</div>
                <div className="city-detail-label">Humidity</div>
              </div>
              <div className="city-detail">
                <div className="city-detail-value">{Math.round(weather.current.wind_kph)}</div>
                <div className="city-detail-label">Wind km/h</div>
              </div>
              <div className="city-detail">
                <div className="city-detail-value">{Math.round(weather.current.feelslike_c)}°</div>
                <div className="city-detail-label">Feels like</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesGrid;