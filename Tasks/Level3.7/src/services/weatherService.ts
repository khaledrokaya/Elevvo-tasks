import axios from 'axios';
import { WeatherData, ForecastData, ProcessedForecastDay, GeolocationCoords } from '../types/weather';

// WeatherAPI.com configuration
const API_KEY = '5b1029f6eaa24325b4311148252609'; // Your WeatherAPI.com API key
const BASE_URL = 'http://api.weatherapi.com/v1';

class WeatherService {
  private api;

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      params: {
        key: API_KEY
      }
    });
  }

  // Get current weather by city name
  async getCurrentWeather(city: string): Promise<WeatherData> {
    try {
      const response = await this.api.get('/current.json', {
        params: { q: city }
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
      }
      throw new Error('Failed to fetch weather data. Please try again later.');
    }
  }

  // Get current weather by coordinates
  async getCurrentWeatherByCoords(lat: number, lon: number): Promise<WeatherData> {
    try {
      const response = await this.api.get('/current.json', {
        params: { q: `${lat},${lon}` }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data for your location.');
    }
  }

  // Get 3-day forecast by city name
  async getForecast(city: string): Promise<ProcessedForecastDay[]> {
    try {
      const response = await this.api.get('/forecast.json', {
        params: { q: city, days: 3 }
      });
      return this.processForecastData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        throw new Error(`City "${city}" not found for forecast data.`);
      }
      throw new Error('Failed to fetch forecast data. Please try again later.');
    }
  }

  // Get 3-day forecast by coordinates
  async getForecastByCoords(lat: number, lon: number): Promise<ProcessedForecastDay[]> {
    try {
      const response = await this.api.get('/forecast.json', {
        params: { q: `${lat},${lon}`, days: 3 }
      });
      return this.processForecastData(response.data);
    } catch (error) {
      throw new Error('Failed to fetch forecast data for your location.');
    }
  }

  // Process raw forecast data into daily summaries
  private processForecastData(data: ForecastData): ProcessedForecastDay[] {
    return data.forecast.forecastday.map(day => ({
      date: this.formatDate(day.date),
      temp_max: day.day.maxtemp_c,
      temp_min: day.day.mintemp_c,
      description: day.day.condition.text,
      icon: day.day.condition.icon,
      humidity: day.day.avghumidity,
      wind_speed: Math.round(day.day.maxwind_kph * 10) / 10
    }));
  }

  // Helper function to format date
  private formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      });
    }
  }

  // Get weather icon URL - WeatherAPI.com provides full URLs
  getIconUrl(iconUrl: string): string {
    return `https:${iconUrl}`;
  }

  // Get user's current location
  async getCurrentLocation(): Promise<GeolocationCoords> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject(new Error('Location access denied by user.'));
              break;
            case error.POSITION_UNAVAILABLE:
              reject(new Error('Location information is unavailable.'));
              break;
            case error.TIMEOUT:
              reject(new Error('Location request timed out.'));
              break;
            default:
              reject(new Error('An unknown error occurred while retrieving location.'));
              break;
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 600000 // 10 minutes
        }
      );
    });
  }

  // Get weather emoji based on weather condition text
  getWeatherEmoji(condition: string): string {
    const conditionLower = condition.toLowerCase();

    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return '☀️';
    } else if (conditionLower.includes('partly cloudy')) {
      return '⛅';
    } else if (conditionLower.includes('cloudy') || conditionLower.includes('overcast')) {
      return '☁️';
    } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
      return '🌧️';
    } else if (conditionLower.includes('thunderstorm') || conditionLower.includes('thunder')) {
      return '⛈️';
    } else if (conditionLower.includes('snow') || conditionLower.includes('blizzard')) {
      return '❄️';
    } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
      return '🌫️';
    } else if (conditionLower.includes('wind')) {
      return '💨';
    }

    return '🌤️'; // default
  }
}

export default new WeatherService();