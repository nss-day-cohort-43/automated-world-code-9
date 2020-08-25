import { egyptLandmarks } from './LandmarkDataProvider.js'
import { egyptLandmark } from './Landmark.js'

const useEgyptLandmarks = egyptLandmarks();
const landmarksUI = document.querySelector(".landmarksUI");

export const landmarksList = () => {
  useEgyptLandmarks.forEach(landmark => {
    landmarksUI.innerHTML += egyptLandmark(landmark)
  })
  return useEgyptLandmarks
}
