let currentTemperature = ""

async function getWeatherData(city) {
    await fetch(`https://api.weatherapi.com/v1/current.json?key=59d6cfb69d934532a51161240232606&q=${city}`, {mode: 'cors'}).then(response => {
        response.json().then(result => console.log(result.current.temp_c))
    })

}

document.getElementById('submit').addEventListener('click', locationToSearch)

function locationToSearch(event){
    event.preventDefault();
    const value = document.getElementById('location').value
    console.log(getWeatherData(value))
   
}

document.getElementById("search-results").innerHTML = currentTemperature

// const submitButton = document.getElementById('submit');
// submitButton.addEventListener('click', () => {
//     let locationToSearch = document.getElementById("location")
//     console.log(document.getElementById("location"))

// })


// console.log(getWeatherData('london'))