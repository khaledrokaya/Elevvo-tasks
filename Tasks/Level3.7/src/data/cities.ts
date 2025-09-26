import { City } from '../types/weather';

export const popularCities: City[] = [
  { name: 'New York', country: 'US', lat: 40.7128, lon: -74.0060 },
  { name: 'London', country: 'GB', lat: 51.5074, lon: -0.1278 },
  { name: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
  { name: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
  { name: 'Sydney', country: 'AU', lat: -33.8688, lon: 151.2093 },
  { name: 'Dubai', country: 'AE', lat: 25.2048, lon: 55.2708 },
  { name: 'Singapore', country: 'SG', lat: 1.3521, lon: 103.8198 },
  { name: 'Los Angeles', country: 'US', lat: 34.0522, lon: -118.2437 },
  { name: 'Berlin', country: 'DE', lat: 52.5200, lon: 13.4050 },
  { name: 'Cairo', country: 'EG', lat: 30.0444, lon: 31.2357 },
  { name: 'Mumbai', country: 'IN', lat: 19.0760, lon: 72.8777 },
  { name: 'Beijing', country: 'CN', lat: 39.9042, lon: 116.4074 }
];

export const weatherTips = [
  "Check the UV index before going outside!",
  "Don't forget your umbrella on rainy days ☔",
  "Stay hydrated during hot weather 💧",
  "Layer up when it's cold outside 🧥",
  "Windy weather? Secure loose items! 💨",
  "Perfect weather for outdoor activities! 🌞",
  "Cloudy skies make great photography lighting 📸",
  "Thunderstorms? Stay indoors and stay safe ⚡"
];

export const getRandomTip = (): string => {
  return weatherTips[Math.floor(Math.random() * weatherTips.length)];
};