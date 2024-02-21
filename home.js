import {getData, getCountryByName} from './fetch.js';

const data = await getData();
// console.log(data);

const countries = await getData();
console.log(countries);
const container = document.querySelector('.container');

const displayCountry = (country) =>{
  container.innerHTML = "";
  
}

const displayCountries = () =>{
  container.innerHTML = "";
  countries.forEach((country) =>{
    const countryContainer = document.createElement("div");
    countryContainer.classList.add("country-container");

    const countryFlagContainer = document.createElement("div");
    countryFlagContainer.classList.add("country-flag-container");

    const countryFlag = document.createElement("img");
    countryFlag.classList.add("country-flag");
    countryFlag.setAttribute("src", country.flags.svg);

    countryFlagContainer.append(countryFlag);

    const countryName = document.createElement("h1");
    countryName.classList.add("country-name");
    countryName.textContent = country.name.common;

    const countryPopulation = document.createElement("p");
    countryPopulation.classList.add("country-information");
    countryPopulation.textContent = "Population: " + country.population;

    const countryRegion = document.createElement("p");
    countryRegion.classList.add("country-information");
    countryRegion.textContent = "Region: " + country.region;
    
    const countryCapital = document.createElement("p");
    countryCapital.classList.add("country-information");
    countryCapital.textContent = "Capital: " + country.capital;

    countryContainer.append(countryFlagContainer, countryName, countryPopulation, countryRegion, countryCapital);
    container.append(countryContainer);

    countryContainer.addEventListener("click", () =>{
      localStorage.setItem("country", (country.name.common).toLowerCase())
      location.assign("specifics.html");
    })
  })
}

displayCountries();