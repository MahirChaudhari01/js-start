import {getCountryName} from './constant.js';

let valueSearch = document.querySelector("#valueSearch");

let city = document.querySelector("#city");

let temperature = document.querySelector(".temperature");

let description = document.querySelector("#description");

let clouds = document.querySelector("#clouds");

let humidity= document.querySelector("#humidity");

let pressure = document.querySelector("#pressure");

let form = document.querySelector("form");

let main = document.querySelector("main");


function triggerShake() {
    main.classList.add('error');
    setTimeout(() => {
        main.classList.remove('error');
    }, 500);
}

 

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valueSearch.value.trim() !== '') {
        searchWeather();
    }
});

let API_KEY = "9ca94d23d097e77635ba4d1bee00b790";
let url = 'https://api.openweathermap.org/data/2.5/weather';

const searchWeather = () => {
    const query = valueSearch.value.trim().replace(/\s+/g, '');
    console.log(query);
    

    if (!query) {
        console.warn("Search input is empty.");
        return;
    }

    const countryCode = getCountryName(query);

    if(countryCode == undefined){
        triggerShake();
        return;
    }
    

     fetch(`${url}?q=${encodeURIComponent(query)}&appid=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if(data.cod ==200){
                city.querySelector('figcaption').innerText=query.toLowerCase().replace(/\s+/g, '');
                city.querySelector('img').src=`https://flagsapi.com/${countryCode}/flat/64.png`;
                temperature.querySelector('img').src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temperature.querySelector('figcaption span').innerText=(data.main.temp - 273.15).toFixed(2);
                // description.innerText=data.weather[0].description;
                clouds.innerText=data.clouds.all;
                humidity.innerText=data.main.humidity;
                pressure.innerText=data.main.pressure;
            }else{
                triggerShake();
            }
            valueSearch.value='';
        })
        .catch(err => console.error("Error fetching geolocation:", err));
};

const intiApp = ()=>{
    valueSearch.value='washimgton';
    searchWeather();
}
intiApp();
