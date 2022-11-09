import axios from "axios";

async function fetchCountry(name) {
  const URI = 'https://restcountries.com/v2/';
  const ENDPOINT = 'name/'

  try {
    const result = await axios.get(URI, {
      params: {
        name: name,
      }
    });
    const list = document.getElementById('list');

    const countryName = document.createElement("li");
    const country
  } catch(e) {
    console.error(e);
  }
}