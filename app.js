//Init Storage
const storage = new LocalStorage();
//Get Stored Location Data
const storedLocation = storage.getLocationData()

///Init Weather
const weather = new Weather(storedLocation.city);

///Init UI
const ui = new UI();

///Get Weather om DOM Load
document.addEventListener('DOMContentLoaded',getWeather);

///Change location Event Listener
document.getElementById('w-change-btn').addEventListener('click',(e)=>
{
  const city = document.getElementById('city').value;
  console.log(city);

  ///Change Location
  weather.changeLocation(city);

///Set changed Location to persist localstorage
storage.setLocationData(city);

//Get Weather with the changed location  
  getWeather(city);


  ///Close Modal
  $('#locModal').modal('hide'); ///we have use jquery here.
 
});


function getWeather(){
  weather.getWeather()
  .then(res => {
    console.log(res);
    console.log(res.main);
    console.log(res.name);
    console.log(res.weather[0].description);
    console.log(res.main.temp);

    ui.render(res);
  })
  .catch(err => {
    console.log(err)
  });
}

