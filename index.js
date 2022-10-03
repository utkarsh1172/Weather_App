const API_KEY = `f00feefe661fc69ef679b325fabb0900`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
let weatherType = document.querySelector("#weather");

const getWeather = async (city_name) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};



function dateManage(dateArg){
    

    let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January","February","March","April","May","June","July","August","September","October","Novermber","December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${day} ${year}`
}

let todayDate = new Date();
// let weatherType = document.querySelector("#weather");

const showWeather = (data) => {
    console.log(data);

    if(data.cod == '404'){
        weather.innerHTML = `<h1> City Not Found </h1>`
        return;
    }

  weather.innerHTML = 
  `
    <div class="city">${data.name}, ${data.sys.country}</div>
    <div class="date">${dateManage(todayDate)}</div>

        <div class="temp">
    <h1> ${data.main.temp}&deg;C</h1>
        </div>
    <div class="min-max">
    ${data.main.temp_min}&deg;C(min) /${data.main.temp_max}&deg;C(max)
    </div>
    <div class="weather">${data.weather[0].main}.</div>
    `;
 
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeather(search.value);
  document.querySelector(".weather-report").style.display = 'block';
});

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// f00feefe661fc69ef679b325fabb0900
