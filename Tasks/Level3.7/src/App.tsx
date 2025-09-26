import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import CitiesGrid from './components/CitiesGrid';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import weatherService from './services/weatherService';
import { WeatherData, ProcessedForecastDay } from './types/weather';
import { getRandomTip } from './data/cities';
import './index.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ProcessedForecastDay[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [weatherTip, setWeatherTip] = useState('');

  useEffect(() => {
    setWeatherTip(getRandomTip());
    // Try to load weather for user's location on app start
    loadCurrentLocationWeather();
  }, []);

  const loadCurrentLocationWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      const coords = await weatherService.getCurrentLocation();
      const weather = await weatherService.getCurrentWeatherByCoords(coords.latitude, coords.longitude);
      const forecastData = await weatherService.getForecastByCoords(coords.latitude, coords.longitude);

      setCurrentWeather(weather);
      setForecast(forecastData);
      setWeatherTip(getRandomTip());
    } catch (err) {
      // If location fails, load default city (New York)
      await loadWeatherForCity('New York');
    } finally {
      setLoading(false);
    }
  };

  const loadWeatherForCity = async (cityName: string) => {
    try {
      setLoading(true);
      setError(null);

      const weather = await weatherService.getCurrentWeather(cityName);
      const forecastData = await weatherService.getForecast(cityName);

      setCurrentWeather(weather);
      setForecast(forecastData);
      setWeatherTip(getRandomTip());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      loadWeatherForCity(searchInput.trim());
      setSearchInput('');
    }
  };

  const handleCitySelect = (cityName: string) => {
    loadWeatherForCity(cityName);
  };

  const handleRetry = () => {
    if (currentWeather) {
      loadWeatherForCity(currentWeather.location.name);
    } else {
      loadCurrentLocationWeather();
    }
  };

  return (
    <div className="level3_7">
      <div className="weather-container">
        {/* Header */}
        <header className="weather-header">
          <h1>🌤️ Weather Dashboard</h1>
          <p>{weatherTip}</p>
        </header>

        {/* Search Section */}
        <section className="search-section">
          <form onSubmit={handleSearch} className="search-container">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search for a city..."
              className="search-input"
            />
            <button type="submit" className="search-btn" disabled={loading}>
              <i className="fas fa-search"></i>
              Search
            </button>
            <button
              type="button"
              onClick={loadCurrentLocationWeather}
              className="location-btn"
              disabled={loading}
              title="Use current location"
            >
              <i className="fas fa-location-dot"></i>
            </button>
          </form>
        </section>

        {/* Error Message */}
        {error && (
          <ErrorMessage message={error} onRetry={handleRetry} />
        )}

        {/* Loading State */}
        {loading && (
          <LoadingSpinner message="Fetching latest weather data..." />
        )}

        {/* Current Weather */}
        {!loading && !error && currentWeather && (
          <CurrentWeather weather={currentWeather} />
        )}

        {/* 3-Day Forecast */}
        {!loading && !error && forecast.length > 0 && (
          <Forecast forecast={forecast} />
        )}

        {/* Popular Cities Grid */}
        {!loading && (
          <CitiesGrid onCitySelect={handleCitySelect} />
        )}
      </div>
    </div>
  );
}

export default App;