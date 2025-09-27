import axios from 'axios';
import { WeatherData, GeolocationCoords, ForecastData, ProcessedForecastDay } from '../types/weather';

const API_KEY = '5b1029f6eaa24325b4311148252609';
const BASE_URL = 'https://api.weatherapi.com/v1';

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

  //* Get current weather by city name
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

  //* Get current weather by coordinates
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

  //* Get 3-day forecast by city name
  async getForecast(city: string): Promise<ProcessedForecastDay[]> {
    try {
      const response = await this.api.get('/forecast.json', {
        params: { q: city, days: 4 }
      });
      return this.processForecastData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        throw new Error(`City "${city}" not found for forecast data.`);
      }
      throw new Error('Failed to fetch forecast data. Please try again later.');
    }
  }

  //* Get 3-day forecast by coordinates
  async getForecastByCoords(lat: number, lon: number): Promise<ProcessedForecastDay[]> {
    try {
      const response = await this.api.get('/forecast.json', {
        params: { q: `${lat},${lon}`, days: 4 }
      });
      return this.processForecastData(response.data);
    } catch (error) {
      throw new Error('Failed to fetch forecast data for your location.');
    }
  }

  //* Process raw forecast data into daily summaries (skip today)
  private processForecastData(data: ForecastData): ProcessedForecastDay[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return data.forecast.forecastday
      .filter(day => {
        const forecastDate = new Date(day.date);
        forecastDate.setHours(0, 0, 0, 0);
        return forecastDate > today;
      })
      .map(day => {
        const date = new Date(day.date);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        let dayName: string;
        if (date.toDateString() === tomorrow.toDateString()) {
          dayName = 'Tomorrow';
        } else {
          dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        }

        return {
          date: day.date,
          dayName,
          temp_max: day.day.maxtemp_c,
          temp_min: day.day.mintemp_c,
          condition: day.day.condition.text,
          icon: day.day.condition.icon
        };
      });
  }

  //* Get user's current location
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
}

export default new WeatherService();