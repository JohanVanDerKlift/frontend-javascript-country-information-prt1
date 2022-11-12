import axios from "axios";

console.log('Hallo daar!');

async function fetchData() {
  try {
    const result = await axios.get('https://restcountries.com/v2/all');
    console.log(result.data);
    return result.data;
  } catch (e) {
    console.error(e);
  }
}

async function showData() {
  let data = await fetchData();
  data.sort((a, b) => {
    return a.population - b.population;
  })
  data.map((country) => {
    const countryToPrint = document.getElementById('country-list');
    countryToPrint.innerHTML += `
        <li class="${getRegionColor(country.region)}"><div class="flag-wrapper"><img class="flag" src="${country.flags.svg}" alt="Country flag"></div><div class="country-wrapper"><div class="country-name">${country.name}</div>
        <div class="population black">Has a population of ${country.population}</div></div></li>
    `;
  })
}

function getRegionColor(region) {
  let color = "";
  switch (region) {
    case "Asia":
      color = "red";
      break;
    case "Africa":
      color = "blue"
      break;
    case "Americas":
      color = "green";
      break;
    case "Europe":
      color = "yellow";
      break;
    case "Oceania":
      color = "purple";
      break;
    default:
      color = "black";
      break;
  }
  return color;
}

showData();
