function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayWord = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  return `${dayWord} ${hour}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city");
  let inputCityName = document.querySelector("h1");
  inputCityName.innerHTML = searchInput.value;
  let city = searchInput.value;

  let apiKey = "fa29c710ebc43ec2tbd44083o39347b6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCurrentTemperature);
}

function displayCurrentTemperature(response) {
  let roundCurrentTemperature = Math.round(response.data.temperature.current);
  let currentTemperature = document.querySelector("#current-temp");
  currentTemperature.innerHTML = `${roundCurrentTemperature}`;
}

let currentTime = document.querySelector("#current-time");
let currentDate = new Date();
currentTime.innerHTML = formatDate(currentDate);

let searchform = document.querySelector("#city-search");
searchform.addEventListener("submit", search);
