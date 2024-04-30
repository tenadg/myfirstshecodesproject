function displayWeather (response) {
  console.log(response.data);
  let temperatureElement=document.querySelector("#.current-temperature");
  console.log(temperatureElement);
  temperatureElement.innerHTML=Math.round(response.data.temperature.current);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector(".current-city");
  let city = searchInputElement.value;
  let apiKey = "3ff6cbf7904o3b69bt917218508fcdac";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
  cityElement.innerHTML = city;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);

  let currentDateElement = document.querySelector("#current-date");
  let currentDate = newDate ();

  currentDateElement.innerHTML= formatDate(currentDate);