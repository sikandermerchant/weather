class Weather{
  constructor(city){
    this.city = city;
    // this.state = state;
    this.key = 'd7bfdf47b3a3edff2e5f20af47b359d9';

  }

  //Fetch Weather from API
  async getWeather(){
  ///await response of the fetch call
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&units=metric`);
  const resData = await response.json();
  return resData;
  }

  ///Change Location
  changeLocation(city){
    this.city = city;
    // this.state = state;
  }
}

