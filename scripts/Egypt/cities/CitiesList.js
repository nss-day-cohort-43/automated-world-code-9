import { egyptCities } from './CityDataProvider.js'
import { egyptCity } from './City.js'

const useEgyptCities = egyptCities();
const citiesUI = document.querySelector(".citiesUI");  // hook into DOM with this code / attacting to class named citiesUI

export const citiesList = () => {         // EXPORT PACKAGE////defining a new function and exporting it to whomever wants it
  useEgyptCities.forEach(city => {
    citiesUI.innerHTML += egyptCity(city)     //modifying the Inner HTML (indexPage) to display city and loop another city
  })
  return citiesUI;
}


// now that there are imports (AMERICA) we can now call those functions
// this section is importing the functions made on the data section (DATAPROVIDER) and the display section (CITY)
