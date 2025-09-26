import React from 'react';
import { WeatherData } from '../types/weather';
import weatherService from '../services/weatherService';

interface CurrentWeatherProps {
  weather: WeatherData;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather }) => {
  return (
    <div className="current-weather">
      <div className="glass-card">
        <div className="weather-icon">
          {weatherService.getWeatherEmoji(weather.current.condition.text)}
        </div>
        <div className="temperature">
          {Math.round(weather.current.temp_c)}°C
        </div>
        <div className="city-name">
          {weather.location.name}, {weather.location.country}
        </div>
        <div className="description">
          {weather.current.condition.text}
        </div>
        
        <div className="weather-details">
          <div className="detail-item">
            <i className="fas fa-thermometer-half"></i>
            <div className="value">{Math.round(weather.current.feelslike_c)}°C</div>
            <div className="label">Feels like</div>
          </div>
          
          <div className="detail-item">
            <i className="fas fa-tint"></i>
            <div className="value">{weather.current.humidity}%</div>
            <div className="label">Humidity</div>
          </div>
          
          <div className="detail-item">
            <i className="fas fa-wind"></i>
            <div className="value">{Math.round(weather.current.wind_kph)} km/h</div>
            <div className="label">Wind Speed</div>
          </div>
          
          <div className="detail-item">
            <i className="fas fa-gauge-high"></i>
            <div className="value">{weather.current.pressure_mb} hPa</div>
            <div className="label">Pressure</div>
          </div>
          
          <div className="detail-item">
            <i className="fas fa-eye"></i>
            <div className="value">{weather.current.vis_km} km</div>
            <div className="label">Visibility</div>
          </div>
          
          <div className="detail-item">
            <i className="fas fa-cloud"></i>
            <div className="value">{weather.current.cloud}%</div>
            <div className="label">Cloudiness</div>
          </div>
          
          <div className="detail-item">
            <i className="fas fa-sun"></i>
            <div className="value">N/A</div>
            <div className="label">Sunrise</div>
          </div>
          
          <div className="detail-item">
            <i className="fas fa-moon"></i>
            <div className="value">N/A</div>
            <div className="label">Sunset</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;