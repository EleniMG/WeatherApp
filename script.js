async function getWeatherData(city) {
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=59d6cfb69d934532a51161240232606&q=${city}`, {mode: 'cors'})
    const jsonData = response.json()
    const tempC = await jsonData.then(res => res.current.temp_c)
    const tempF = await jsonData.then(res => res.current.temp_f)
    return {tempC, tempF}
}

async function locationToSearch(event){
    event.preventDefault();
    const value = document.getElementById('location').value
    const currentTemperatureC = (await getWeatherData(value)).tempC
    const currentTemperatureF = (await getWeatherData(value)).tempF
    document.getElementById("search-results").innerHTML = "The current temperature is " + currentTemperatureC +"°C" + " and for my North American friends, " + currentTemperatureF + "°F." 
}


document.getElementById('submit').addEventListener('click', locationToSearch)
