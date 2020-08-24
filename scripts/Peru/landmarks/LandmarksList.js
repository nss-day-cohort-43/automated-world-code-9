import { peruLandmarks } from './LandmarkDataProvider.js'
import { peruLandmark } from './Landmark.js'

const usePeruLandmarks = peruLandmarks();
const landmarksUI = document.querySelector(".landmarksUI");

export const landmarksList = () => {
  usePeruLandmarks.forEach(landmark => {
    landmarksUI.innerHTML += peruLandmark(landmark)
  })
  return usePeruLandmarks
}