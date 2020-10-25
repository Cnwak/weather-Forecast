class Weather{
  constructor(){
    this.key = `8b7f38e2761f5f4b29bd12464f7ba5ae`
  }

  async fetchWeather(cityName){
    const weatherFetch = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${this.key}`)

    const weatherData = await weatherFetch.json()

    return weatherData

  }
}

