
const apiKey = "461f65f82640e2e4ecc134dc4f73ee7b";

document.getElementById("searchBtn").addEventListener("click", getWeather);

async function getWeather() {

    const city = document.getElementById("city").value;

    document.getElementById("status").innerText = "Loading...";
    document.getElementById("result").innerHTML = "";

    try{

        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if(data.cod != 200){
            throw new Error("City not found");
        }

        document.getElementById("status").innerText = "";

        document.getElementById("result").innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

    }catch(error){
        document.getElementById("status").innerText = "";
        document.getElementById("result").innerHTML = "City not found!";
    }

}
