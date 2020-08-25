/*
    *  CityList which renders individual city objects as HTML
*/

import { egyptianLandmarks } from './LandmarkDataProvider.js';
import { Landmark } from './Landmarks.js';

export const landmarkList = (landmarkList) => {

    const contentElement = document.querySelector(".landmarkList");
    const landmarks = egyptianLandmarks()


    let landmarkHTMLRepresentaion = "";
    for (const landmark of landmarks) {
        landmarkHTMLRepresentaion += Landmark(landmark);
    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        
            ${landmarkHTMLRepresentaion}
        
    `
}