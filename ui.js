class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    // this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.temp = document.getElementById('w-temp');
    this.feels_like = document.getElementById('w-feels_like');
    this.temp_min = document.getElementById('w-temp_min');
    this.temp_max = document.getElementById('w-temp_max');
    this.pressure = document.getElementById('w-pressure');
    this.humidity = document.getElementById('w-humidity');
  }

  render(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${weather.main.temp}°C`;
    // this.icon.setAttribute('src', img_url);
    this.temp.textContent = `Current Temperature: ${weather.main.temp}°C`;
    this.feels_like.textContent = `Feels Like: ${weather.main.feels_like}°C`;
    this.temp_min.textContent = `Minimum Temperature: ${weather.main.temp_min}°C`;
    this.temp_max.textContent = `Maximum Temperature: ${weather.main.temp_max}°C`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
  }
}