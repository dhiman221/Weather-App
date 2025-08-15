const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const apiKey = 'd6943075f4602cd70ac42f735af0cd8a';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) {
    weatherResult.innerHTML = 'City not found';
    return;
  }


  const data = await res.json();
  const { name } = data;
  const { temp, humidity } = data.main;
  const { description, icon } = data.weather[0];

  weatherResult.innerHTML = `
    <h2>${name}</h2>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    <p>${description}</p>
    <p>Temperature: ${temp} °C</p>
    <p>Humidity: ${humidity}%</p>
  `;
});