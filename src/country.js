import axios from "axios";

async function fetchCountry(name) {
  const URI = 'https://restcountries.com/v2/';
  const ENDPOINT = 'name/'
  const error = document.getElementById('error');

  try {
    const info = document.getElementById('info');
    info.replaceChildren("");
    error.replaceChildren("");

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
    countryInformation.textContent = `${result.data[0].name} is situated in ${result.data[0].region}. It has a 
      population of ${result.data[0].population} ${getCurrencyString(result.data[0].currencies)}${getLanguagesString(result.data[0].languages)}.`;


    info.appendChild(countryFlag);
    info.appendChild(countryName);
    info.appendChild(countryInformation);

  } catch(e) {
    console.error(e);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Country was not found";
    error.appendChild(errorMessage);
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

function getLanguagesString(languages) {
  let languageString = `. They speak ${languages[0].name}`;
  for (let i = 1; i < languages.length - 1; i++) {
    if (i === 1) {
      languageString += `, ${languages[i].name}`;
    }
  }
  if (languages.length > 1) {
    languageString += ` and ${languages[languages.length-1].name}`;
  }
  return languageString;
}
