let currentTemperature = 0

async function getWeatherData(city) {
    await fetch(`https://api.weatherapi.com/v1/current.json?key=59d6cfb69d934532a51161240232606&q=${city}`, {mode: 'cors'}).then(response => {
        response.json().then(result => console.log(result))
    })

}

getWeatherData()