import axios from "axios";

async function fetchCountry(name) {
  const URI = 'https://restcountries.com/v2/';
  const ENDPOINT = 'name/'
  console.log(name);
  try {
    const info = document.getElementById('info');
    info.replaceChildren("");

    const result = await axios.get(URI + ENDPOINT + name);
    console.log(URI + ENDPOINT + name);
    console.log(result.data)


    const countryFlag = document.createElement('img');
    countryFlag.setAttribute('class', 'flag');
    countryFlag.setAttribute('src', result.data[0].flag);

    const countryName = document.createElement("span");
    countryName.setAttribute('class', 'name');
    countryName.textContent = result.data[0].name;

    const countryInformation = document.createElement('div');
    countryInformation.setAttribute('class', 'country-information');
    countryInformation.textContent = `${result.data[0].name} is situated in ${result.data[0].region}. It has a population of ${result.data[0].population} ${getCurrencyString(result.data[0].currencies)}`;

    info.appendChild(countryFlag);
    info.appendChild(countryName);
    info.appendChild(countryInformation);

  } catch(e) {
    console.error(e);
  }
}

const name = document.getElementById("country-name");
const button = document.getElementById("button");
button.addEventListener('click', () => {
  fetchCountry(name.value);
})

function getCurrencyString(currencies) {
  if (currencies.length === 1) {
    return `and you can pay with ${currencies[0].name}'s`
  } else {
    let currenciesString = `and you can pay with ${currencies[0].name}'s`;
    for (let i = 1; i < currencies.length; i++) {
      currenciesString += ` and ${currencies[i].name}'s`;
    }
    return currenciesString;
  }
}