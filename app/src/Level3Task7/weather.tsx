import React, { useState, useEffect } from 'react';
import weatherService from './services/weatherService';
import { WeatherData, ProcessedForecastDay } from './types/weather';
import { getWeatherBackground, getWeatherIcon } from './utils/weatherHelpers';
import './index.css';

function Weather() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ProcessedForecastDay[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [locationRequested, setLocationRequested] = useState(false);

  //* Get user location
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (locationRequested) return;

    try {
      setLocationRequested(true);
      const coords = await weatherService.getCurrentLocation();
      await loadWeatherByCoords(coords.latitude, coords.longitude);
    } catch (err) {
      await loadWeatherForCity('London');
    }
  };

  const loadWeatherByCoords = async (lat: number, lon: number) => {
    try {
      setLoading(true);
      setError(null);
      const [weather, forecastData] = await Promise.all([
        weatherService.getCurrentWeatherByCoords(lat, lon),
        weatherService.getForecastByCoords(lat, lon)
      ]);
      setCurrentWeather(weather);
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const loadWeatherForCity = async (cityName: string) => {
    try {
      setLoading(true);
      setError(null);
      const [weather, forecastData] = await Promise.all([
        weatherService.getCurrentWeather(cityName),
        weatherService.getForecast(cityName)
      ]);
      setCurrentWeather(weather);
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'City not found');
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

  const handleLocationClick = () => {
    requestLocationPermission();
  };

  return (
    <div className="level3_7">
      <div className="flex flex-col min-h-screen">
        {/*//* Header */}
        <header className="py-8 text-center">
          <h1 className="mx-4 mb-2 text-4xl font-bold text-white md:text-6xl animate-float">
            <i className="mr-4 fas fa-cloud-sun"></i>
            Weather Dashboard
          </h1>
          <p className="mx-4 text-lg text-white/80">
            Get real-time weather information for any city
          </p>
        </header>

        {/*//* Search Bar */}
        <div className="px-6 mx-auto mb-8 w-full max-w-[50rem]">
          <form onSubmit={handleSearch} className="flex flex-col gap-3 text-center md:flex-row">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter city name..."
                className="w-full px-6 py-4 text-lg text-white transition-all border rounded-full bg-white/20 backdrop-blur-md border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30"
              />
            </div>
            <div className='flex justify-center gap-2'>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-8 py-4 font-semibold text-white rounded-full cursor-pointer disabled:bg-primary-800 hover:shadow-lg btn-primary"
              >
                <i className="mr-2 fas fa-search"></i>
                Search
              </button>
              <button
                type="button"
                onClick={handleLocationClick}
                disabled={loading}
                className="px-6 py-4 font-semibold text-white border rounded-full cursor-pointer bg-white/20 hover:bg-white/30 disabled:bg-white/10 backdrop-blur-md border-white/30"
                title="Use current location"
              >
                <i className="fas fa-location-dot"></i>
              </button>
            </div>
          </form>
        </div>

        {/*//* Weather Card */}
        <main className="flex-1 w-full max-w-4xl px-6 pb-8 mx-auto">
          {/*//* Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="mb-4 loading-spinner"></div>
              <p className="text-lg text-white/80">Fetching weather data...</p>
            </div>
          )}

          {/*//* Error */}
          {error && !loading && (
            <div className="py-8 text-center message error">
              <i className="mb-2 text-2xl fas fa-exclamation-triangle"></i>
              <p className="text-lg">{error}</p>
              <button
                onClick={() => setError(null)}
                className="px-6 py-2 mt-4 text-white transition-all rounded-full bg-white/20 hover:bg-white/30"
              >
                Try Again
              </button>
            </div>
          )}

          {/*//* Main Weather Card */}
          {currentWeather && !loading && !error && (
            <div className="mb-8">
              <div className="relative overflow-hidden glass-card animate-slide-in">
                <div
                  className="weather-bg"
                  style={{
                    backgroundImage: `url(${getWeatherBackground(currentWeather.current.condition.text)})`
                  }}
                ></div>
                <div className="weather-content">
                  <div className="text-center">
                    <h2 className="mb-2 text-3xl font-bold">
                      <i className="mr-2 fas fa-map-marker-alt"></i>
                      {currentWeather.location.name}, {currentWeather.location.country}
                    </h2>
                    <p className="mb-6 text-white/80">
                      {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <div className="mb-8">
                      <i className={`${getWeatherIcon(currentWeather.current.condition.text)} text-6xl mb-4 animate-float`}></i>
                      <div className="mb-2 text-6xl font-bold">
                        {Math.round(currentWeather.current.temp_c)}°C
                      </div>
                      <div className="text-xl capitalize text-white/90">
                        {currentWeather.current.condition.text}
                      </div>
                      <div className="text-lg text-white/70">
                        Feels like {Math.round(currentWeather.current.feelslike_c)}°C
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                      <div className="text-center">
                        <i className="mb-2 text-2xl fas fa-eye text-white/70"></i>
                        <div className="font-semibold">{currentWeather.current.vis_km} km</div>
                        <div className="text-sm text-white/70">Visibility</div>
                      </div>
                      <div className="text-center">
                        <i className="mb-2 text-2xl fas fa-tint text-white/70"></i>
                        <div className="font-semibold">{currentWeather.current.humidity}%</div>
                        <div className="text-sm text-white/70">Humidity</div>
                      </div>
                      <div className="text-center">
                        <i className="mb-2 text-2xl fas fa-wind text-white/70"></i>
                        <div className="font-semibold">{currentWeather.current.wind_kph} km/h</div>
                        <div className="text-sm text-white/70">Wind Speed</div>
                      </div>
                      <div className="text-center">
                        <i className="mb-2 text-2xl fas fa-thermometer-half text-white/70"></i>
                        <div className="font-semibold">{currentWeather.current.pressure_mb} mb</div>
                        <div className="text-sm text-white/70">Pressure</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*//* 3-Day Forecast Cards */}
          {forecast.length > 0 && !loading && !error && (
            <div className="animate-slide-in">
              <h3 className="mb-6 text-2xl font-bold text-center text-white">
                3-Day Forecast
              </h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {forecast.map((day) => (
                  <div key={day.date} className="glass-card">
                    <div className="p-6 text-center text-white">
                      <div className="mb-3 text-lg font-semibold">
                        {day.dayName}
                      </div>
                      <i className={`${getWeatherIcon(day.condition)} text-4xl mb-3 text-white/90`}></i>
                      <div className="mb-2">
                        <span className="text-2xl font-bold">
                          {Math.round(day.temp_max)}°
                        </span>
                        <span className="ml-2 text-lg text-white/70">
                          {Math.round(day.temp_min)}°
                        </span>
                      </div>
                      <div className="text-sm capitalize text-white/80">
                        {day.condition}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/*//* Footer */}
        <footer className="pt-6 pb-10 text-center text-white/80">
          <p>&copy; 2024 Weather Dashboard. Built by <a href="https://www.khaled-mostafa.me" className='text-white underline' target="_blank" rel="noopener noreferrer">Khaled Mostafa</a></p>
        </footer>
      </div>
    </div>
  );
}

export default Weather;