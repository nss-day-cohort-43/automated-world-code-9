import { egyptCities } from './CityDataProvider.js'
import { egyptCity } from './City.js'

const useEgyptCities = egyptCities();
const citiesUI = document.querySelector(".citiesUI");

export const citiesList = () => {
  useEgyptCities.forEach(city => {
    citiesUI.innerHTML += egyptCity(city)
  })
  return citiesUI;
}
