function displayTemperature(response) {
  console.log(response.data.main.temp);
}
let apiKey = "223a4421e9dbb0fc1bd3e8fae6ad0b9e";
let cityName = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
