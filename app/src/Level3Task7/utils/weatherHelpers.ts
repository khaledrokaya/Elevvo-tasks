export const getWeatherBackground = (condition: string): string => {
  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
    return 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  } else if (conditionLower.includes('snow') || conditionLower.includes('blizzard')) {
    return 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  } else if (conditionLower.includes('cloud')) {
    return 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  } else if (conditionLower.includes('thunder')) {
    return 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
    return 'https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
  }

  return 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
};

export const getWeatherIcon = (condition: string): string => {
  const conditionLower = condition.toLowerCase();

  if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
    return 'fas fa-sun';
  } else if (conditionLower.includes('partly cloudy')) {
    return 'fas fa-cloud-sun';
  } else if (conditionLower.includes('cloudy') || conditionLower.includes('overcast')) {
    return 'fas fa-cloud';
  } else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return 'fas fa-cloud-rain';
  } else if (conditionLower.includes('thunder')) {
    return 'fas fa-bolt';
  } else if (conditionLower.includes('snow') || conditionLower.includes('blizzard')) {
    return 'fas fa-snowflake';
  } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
    return 'fas fa-smog';
  } else if (conditionLower.includes('wind')) {
    return 'fas fa-wind';
  }

  return 'fas fa-cloud-sun';
};