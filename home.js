import {getData, getCountryByName} from './fetch.js';

const data = await getData();
// console.log(data);

const countries = await getData();
console.log(countries);
const container = document.querySelector('.container');

const btn = document.querySelector(".filter-title");

btn.addEventListener("click", () => {
  const filters = document.querySelector(".filters");
  filters.classList.toggle("hidden");
})

const filterCountries = () => {
  const radios = document.querySelectorAll('input[name="region"]');
  let chosenRegion;
  for(const radio of radios){
    if(radio.checked){
      chosenRegion = radio.value;
      break;
    }
  }
  
  displayCountries(countries.filter(item => item.region === chosenRegion));
}

const radios = document.querySelectorAll('input[name="region"]');
radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    filterCountries();
  })
})

const searchbar = document.querySelector("#search")
searchbar.addEventListener("keyup", () => {
  displayCountries(countries.filter(item => item.name.common.toLowerCase().includes(searchbar.value.toLowerCase())));
})  

const displayCountries = (countries) =>{
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
      // console.log(localStorage.getItem("country"));
      location.assign("specifics.html");
    })
  })
}

localStorage.setItem("country", "")
localStorage.setItem("code", "")

displayCountries(countries);
