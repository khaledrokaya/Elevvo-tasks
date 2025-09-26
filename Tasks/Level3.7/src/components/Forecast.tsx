import React from 'react';
import { ProcessedForecastDay } from '../types/weather';
import weatherService from '../services/weatherService';

interface ForecastProps {
  forecast: ProcessedForecastDay[];
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <div className="forecast-section">
      <h2 className="forecast-title">3-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-card glass-card">
            <div className="forecast-date">{day.date}</div>
            <div className="forecast-icon">
              {weatherService.getWeatherEmoji(day.icon)}
            </div>
            <div className="forecast-temps">
              <span className="temp-high">{Math.round(day.temp_max)}°</span>
              <span className="temp-low">{Math.round(day.temp_min)}°</span>
            </div>
            <div className="forecast-desc">{day.description}</div>
            <div className="forecast-details">
              <div className="detail-item">
                <i className="fas fa-tint"></i>
                <div className="value">{day.humidity}%</div>
                <div className="label">Humidity</div>
              </div>
              <div className="detail-item">
                <i className="fas fa-wind"></i>
                <div className="value">{day.wind_speed} m/s</div>
                <div className="label">Wind</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;