const ResponseFlag = document.querySelector("#imag_coun");
const ResponseCity = document.querySelector("#city");
const ResponseCoun = document.querySelector("#country");
const ResponseTemp = document.querySelector("#temp");
const ResponseHumi = document.querySelector("#humi");
const ResponseSens = document.querySelector("#sens");
const ResponsePres = document.querySelector("#pres");
const ResponseImag = document.querySelector("#imag");

fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=0710d5de935a4acd9775a035682094fe`)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        ResponseFlag.innerHTML = `<img id="imgFlag" src="${response.flag.png}"></img>`
        ResponseCity.innerHTML = response.city 
        ResponseCoun.innerHTML = response.country  
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${response.latitude}&lon=${response.longitude}&appid=d5f977cde958c2fcdf7117922dfbe089&lang=es&units=metric`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                ResponseTemp.innerHTML = `${response.main.temp}°C - ${response.main.humidity}%`
                ResponseSens.innerHTML = `ST ${response.main.feels_like}°C`
                ResponsePres.innerHTML = `${response.main.pressure}hPa`
                ResponseImag.innerHTML = `<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"></img>`
             })
        })       