class LocalStorage{
  constructor(){
    this.city;
    this.defaultCity = 'London';
  }
  getLocationData(){
if(localStorage.getItem('city')=== null){
  this.city = this.defaultCity;
}else{
  this.city = localStorage.getItem('city');
}
return {
city:this.city
} 
  }

  setLocationData(city){
    localStorage.setItem('city',city);///since we have setting the city which is a string input we dont need to wrap it into JSON.stringify as we did in our earlier tasklist and booklist projects
  }
}