import {getData, getCountryByName} from './fetch.js';

let key, country;
const getFromLocalStorage = () => {
    if(!localStorage.getItem("country")){
        localStorage.setItem("country" , "");
        if(!localStorage.getItem("code")){
            localStorage.setItem("code" , "")
            location.assign("404.html");
        }else{
            return localStorage.getItem("code");
        }
    }else{
        return localStorage.getItem("country");
    }
}

key = getFromLocalStorage();
console.log(key);

country = await getCountryByName(key);
console.log(country)

const comaSeperate = (object, key) => {
    let str = "";
    if(typeof object[key] == "object")
        object[key] = Object.values(object[key]);
    for(let i = 0; i < object[key].length; i++){
        str = object[key][i];
        if(i < object[key].length-1) str =+ ", ";
    }
    return str;
}

const displayPage = () => {
    const specifics = document.createElement("div");
    specifics.classList.add("specifics");

    const button = document.createElement("div");
    button.classList.add("specifics-button")
    button.innerText = "Go back!"
    button.addEventListener("click", () => {
        localStorage.setItem("country", "");
        location.assign("index.html");
    })

    const content = document.createElement("div");
    content.classList.add("specifics-content")

    const flag = document.createElement("img")
    flag.classList.add("specifics-flag");
    flag.setAttribute("src", `${country[0].flags.svg}`);

    const info = document.createElement("div");
    info.classList.add("specifics-info");

    const title = document.createElement("h1");
    title.classList.add("specifics-title");
    title.innerText = `${country[0].name.official}`;

    const details = document.createElement("div")
    details.classList.add("specific-details");

    const detail1 = document.createElement("span");
    detail1.classList.add("specifics-detail")
    let toDisplay = comaSeperate(country[0], "languages");
    detail1.innerText = `Languages: ${toDisplay}`

    const detail2 = document.createElement("span");
    detail2.classList.add("specifics-detail")
    detail2.innerText = `Region: ${country[0].region}`
    
    const detail3 = document.createElement("span");
    detail3.classList.add("specifics-detail")
    detail3.innerText = `Sub-region: ${country[0].subregion}`

    const detail4 = document.createElement("span");
    detail4.classList.add("specifics-detail")
    toDisplay = "";

    let keys = Object.keys(country[0].currencies);
    console.log(keys);
    for(let i = 0; i < keys.length; i++){
        toDisplay += keys[i];
        if(i < keys.length-1) toDisplay += ", ";
    }


    detail4.innerText = `Currencies: ${toDisplay}`

    const detail5 = document.createElement("span");
    detail5.classList.add("specifics-detail")
    detail5.innerText = `Flag: ${country[0].flag}`

    const detail6 = document.createElement("span");
    detail6.classList.add("specifics-detail")
    toDisplay = comaSeperate(country[0], "timezones");
    detail6.innerText = `Timezones: ${toDisplay}`

    details.append(detail1, detail2, detail3, detail4, detail5, detail6);

    const borders = document.createElement("div");
    borders.classList.add("specifics-borders");
    
    const borderLabel = document.createElement("label");
    borderLabel.classList.add("specifics-borders-label");
    borderLabel.innerText = "Borders: ";

    borders.append(borderLabel);

    if(country[0].borders){
        for(let i = 0; i < country[0].borders.length; i++){
            const border = document.createElement("div");
            border.classList.add("specifics-borders-button");
            border.innerText = country[0].borders[i];
    
            border.addEventListener("click", () => {
                localStorage.setItem("country", "");
                localStorage.setItem("code", country[0].borders[i]);
                location.reload();
            })
    
            borders.appendChild(border);
        }
    }

    info.append(title, details, borders);
    content.append(flag, info);
    specifics.append(button, content);

    const body = document.querySelector("body")
    body.appendChild(specifics);
}

displayPage();