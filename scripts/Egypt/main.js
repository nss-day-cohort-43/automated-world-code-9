import { egyptianCities} from './cities/CityDataProvider.js';
import { egyptianLandmarks } from './landmarks/LandmarkDataProvider.js';
import { egyptianLeaders } from './leaders/LeaderDataProvider.js';

// egyptCities();
// egyptLeaders();
// egyptLandmarks();


const cities = egyptianCities();
console.log(cities)


const landmarks = egyptianLandmarks();
console.log(landmarks)


const leaders = egyptianLeaders();
console.log(leaders)
