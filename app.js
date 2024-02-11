import {getData, getCountryByName} from './fetch.js';

const data = await getData();
// console.log(data);

const countries = await getCountryByName("poland");
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
      localStorage.setItem("country", JSON.stringify(country));
      container.innerHTML = "";

      const specificsContainer = document.createElement("div");
      specificsContainer.classList.add("specifics");
      
      const specificsButton = document.createElement("div");
      specificsButton.classList.add("specifics-button");

      const specificsContent = document.createElement("div");
      specificsContent.classList.add("specifics-content");

      const specificsFlag = document.createElement("img");
      specificsFlag.classList.add("specifics-flag");
      specificsFlag.setAttribute("src", country.flags.svg); 

      const specificsInfo = document.createElement("div");
      specificsInfo.classList.add("specifics-info");

      const specificsName = document.createElement("h1");
      specificsName.classList.add("specifics-name");
      specificsName.textContent = country.name.common;

      const specificsDetails = document.createElement("div");
      specificsDetails.classList.add("specifics-details");

      let specificsDetail = document.createElement("p");
      specificsDetail.classList.add("specifics-detail");

      specificsDetail.textContent = "Native Name: " + country.name.nativeName[Object.keys(country.name.nativeName)[0]].common;
      specificsDetails.appendChild(specificsDetail);
      
      specificsDetail.textContent = "Native Name: " + country.name.nativeName[Object.keys(country.name.nativeName)[0]].common;
      specificsDetails.appendChild(specificsDetail);
      

      specificsDetail.textContent = "Population: " + country.population;
      specificsDetails.appendChild(specificsDetail);
      

      specificsDetail.textContent = "Region: " + country.name.region;
      specificsDetails.appendChild(specificsDetail);
      

      specificsDetail.textContent = "Sub region: " + country.subregion;
      specificsDetails.appendChild(specificsDetail);
      

      specificsDetail.textContent = "Capital: " + country.name.capital;
      specificsDetails.appendChild(specificsDetail);

      specificsDetail.textContent = "Currencies: " + country.currencies;
      specificsDetails.appendChild(specificsDetail);
      
      specificsDetail.textContent = "Languages: ";
      for(const [key, value] of Object.entries(country.languages)){
        specificsDetail.textContent += value + ", ";
      }
      specificsDetails.appendChild(specificsDetail);
      
      container.append(specificsContainer);
      specificsContainer.append(specificsButton, specificsContent);
      specificsContent.append(specificsFlag, specificsInfo);
      specificsInfo.append(specificsName, specificsDetails);

    })
  })
}

displayCountries();