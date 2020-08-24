import { peruCities } from './CityDataProvider.js'
import { peruCity } from './City.js'

const usePeruCities = peruCities();
const citiesUI = document.querySelector(".citiesUI");

export const citiesList = () => {
  usePeruCities.forEach(city => {
    citiesUI.innerHTML += peruCity(city)
  })
  return citiesUI;
}