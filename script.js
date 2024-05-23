
// var arrayString = '';
// const apiKey="588aabb412ebe9d92637ed3a703968ae";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";
// const searchbox=document.querySelector(".input input");
// const searchbtn=document.querySelector(".input button");


// async function checkweather(place){
//     const response= await fetch(apiUrl + place + `&appid=${apiKey}`);
//     var data = await response.json();
//     console.log(data);
//     document.querySelector(".place").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"&deg;";
//     document.querySelector(".humid-percent").innerHTML=data.main.humidity+" %";
//     document.querySelector(".wind-percent").innerHTML=data.wind.speed+" km/h";

// }
// searchbtn.addEventListener("click",()=>
// {
//     const loc=searchbox.value;
//     checkweather(loc);
// });

let button =document.querySelector('.button');
let inputvalue =document.querySelector('.inputvalue');
let place =document.querySelector('.place');
let temp =document.querySelector('.temp');
let desc =document.querySelector('.desc');
let windspeed=document.querySelector('.windspeed');
let humidpercent=document.querySelector('.humidpercent');
let weatherimg=document.querySelector('.weather-img');

button.addEventListener('click',function(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=588aabb412ebe9d92637ed3a703968ae`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found'); // Handle invalid location
            }
            return response.json();
        })
        
        .then(displayData)
        
        .catch(error => {
            console.error('Error fetching weather data:', error);
            place.innerText = 'Location not found';
            temp.innerText = '';
            desc.innerText = '';
            windspeed.innerText = '';
            humidpercent.innerText = '';
            weatherimg.src = '';
        });
        

});
    
const displayData=(weather)=>{
    place.innerText=inputvalue.value;
    temp.innerText=`${Math.round(weather.main.temp)}°C`
    desc.innerText=`Weather condition : ${weather.weather[0].main}`
    windspeed.innerText=`Wind Speed : ${weather.wind.speed} km/h`
    humidpercent.innerText=`Humidity : ${(weather.main.humidity)}%`
    if (weather.weather[0].main === "Clouds") {
        weatherimg.src = "clouds.png";
    } else if (weather.weather[0].main === "Clear") {
        weatherimg.src = "clear.png";
    } else if (weather.weather[0].main === "Haze") {
        weatherimg.src = "haze.png";
    }
    
    

}








