function searchWeather(){
    let location=search.value
    fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=6fa99e1f96f024f79970c5a3`).
    then(res=>res.json()).
    then(data=>populateValues(data)).
    catch(err=>alert("failed to fetch data"))
}
function populateValues(data){
    let locationName=data.name
    let weather=data.weather[0].description
    let temperature=data.main.temp
    let pressure=data.main.pressure
    let humidity=data.main.humidity
    let html_data=`<div class="card" style="width: 100%;">
    <img src="https://thumbs.dreamstime.com/z/bright-summer-sky-clouds-nature-weather-theme-atmosphere-127183508.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Location: ${locationName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Weather: ${weather}</li>
      <li class="list-group-item">Temperature: ${temperature}</li>
      <li class="list-group-item">Pressure: ${pressure}</li>
      <li class="list-group-item">Humidity: ${humidity}</li>

    </ul>
  </div>`
  document.querySelector("#result").innerHTML=html_data
}