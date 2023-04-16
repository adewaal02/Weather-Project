function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("temperature");
  temperatureElement.innerHTML = Math.round (response,data.main.temp);
}

let apiKey = "4f003o4e6c8fd236a8bea09t025fefec";
let apiUrl =
  "https://apihttps://api.https://api.openweathermap.org/data/2.5/weather?q=New York&appid={4f003o4e6c8fd236a8bea09t025fefec}";

axios.get(apiUrl).then(displayTemperature);
