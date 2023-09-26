export const themes = {
  DARK_BLUE: 'bootstrap4-dark-blue',
  LIGHT_BLUE: 'bootstrap4-light-blue'
}

export const API_KEY: string = 'f1ddbf5d22b44e78bf658637e0713371';

export const URLS = {
  TR: {
    TOP_HEADLINES: `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`,
    BUSINESS: `https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=${API_KEY}`,
    ENTERTAINMENT: `https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=${API_KEY}`,
    GENERAL: `https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=${API_KEY}`,
    HEALTH: `https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=${API_KEY}`,
    SCIENCE: `https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=${API_KEY}`,
    SPORTS: `https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=${API_KEY}`,
    TECHNOLOGY: `https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=${API_KEY}`,

  }, US: {
    TOP_HEADLINES: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    BUSINESS: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`,
    ENTERTAINMENT: `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${API_KEY}`,
    GENERAL: `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`,
    HEALTH: `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`,
    SCIENCE: `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${API_KEY}`,
    SPORTS: `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${API_KEY}`,
    TECHNOLOGY: `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`,
  }
}


export const CATEGORIES = {
  TR: {
    APPEARANCE: 'Görünüm',
    DARK_MODE: 'Karanlık',
    LIGHT_MODE: 'Aydınlık',
    TOP_HEADLINES: 'Ana Sayfa',
    BUSINESS: 'İş Dünyası',
    ENTERTAINMENT: 'Eğlence',
    GENERAL: 'Genel',
    HEALTH: 'Sağlık',
    SCIENCE: 'Bilim',
    SPORTS: 'Spor',
    TECHNOLOGY: 'Teknoloji',
  },
  US:
    {
      APPEARANCE: 'Appearance',
      DARK_MODE: 'Dark',
      LIGHT_MODE: 'Light',
      TOP_HEADLINES: 'Home Page',
      BUSINESS: 'Business',
      ENTERTAINMENT: 'Entertainment',
      GENERAL: 'General',
      HEALTH: 'Health',
      SCIENCE: 'Science',
      SPORTS: 'Sports',
      TECHNOLOGY: 'Technology',
    }
}

