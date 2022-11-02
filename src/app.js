import axios from "axios";

console.log('Hallo daar!');

async function fetchData() {
  try {
    const result = await axios.get('https://restcountries.com/v2/all');
    result.data.map((country) => {
      const { name: countryName, flags: countyFlags, population: countyPopulation } = result.data;
      console.log(countryName, countyFlags, countyPopulation);
    })

    console.log(result.data);

  } catch (e) {
    console.error(e);
  }
}

fetchData();

