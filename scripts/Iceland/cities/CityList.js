/*
    *  CityList which renders individual city objects as HTML
*/

import { icelandicCities } from './CityDataProvider.js';
import { City } from './Cities.js';

export const cityList = (cityList) => {

    const contentElement = document.querySelector(".cityList");
    const cities = icelandicCities()


    let cityHTMLRepresentaion = "";
    for (const city of cities) {
        cityHTMLRepresentaion += City(city);
    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        
            ${cityHTMLRepresentaion}
        
    `
}