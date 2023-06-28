async function getWeatherData(city) {
    const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=59d6cfb69d934532a51161240232606&q=${city}`, {mode: 'cors'})
    const jsonData = response.json()
    const tempC = await jsonData.then(res => res.current.temp_c)

    return tempC
}

async function locationToSearch(event){
    event.preventDefault();
    const value = document.getElementById('location').value
    const currentTemperature = await getWeatherData(value)

    document.getElementById("search-results").innerHTML = "The current temperature is " + currentTemperature +"°C"
}


document.getElementById('submit').addEventListener('click', locationToSearch)