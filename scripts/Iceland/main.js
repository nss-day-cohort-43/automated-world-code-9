import { icelandicCities } from './cities/CityDataProvider.js';
import { cityList } from './cities/CityList.js'


import { icelandicLandmarks } from './landmarks/LandmarkDataProvider.js';
import { landmarkList } from './landmarks/LandmarkList.js'

import { icelandicLeaders } from './leaders/LeaderDataProvider.js';
import { leaderList } from './leaders/LeaderList.js'


icelandicCities();
icelandicLandmarks();
icelandicLeaders();


cityList();
landmarkList();
leaderList();