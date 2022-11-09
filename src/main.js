import axios from "axios";

async function fetchCountry(name) {
  const URI = 'https://restcountries.com/v2/';
  const ENDPOINT = 'name/'
  console.log(name);
  try {
    const result = await axios.get(URI + ENDPOINT + name);
    console.log(URI + ENDPOINT + name);
    console.log(result.data)
    const list = document.getElementById('list');

    const countryName = document.createElement("li");
    countryName.textContent = result.data[0].name;
    const subregion = document.createElement('li');
    subregion.textContent = result.data[0].subregion;
    const countryPopulation = document.createElement("li");
    const capital = document.createElement("li");
    const currency = document.createElement("li");
    const language = document.createElement("li");

    list.appendChild(countryName);
    list.appendChild(subregion);
  } catch(e) {
    console.error(e);
  }
}

const name = document.getElementById("country-name");
const button = document.getElementById("button");
button.addEventListener('click', () => {
  fetchCountry(name.value);
})