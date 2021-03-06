/*
    *  LeaderList which renders individual leader objects as HTML
*/

import { egyptianLeaders } from './LeaderDataProvider.js';
import { Leader } from './Leaders.js';

export const leaderList = (leaderList) => {

    const contentElement = document.querySelector(".leaderList");
    const Leaders = egyptianLeaders()


    let leaderHTMLRepresentaion = "";
    for (const leader of Leaders) {
        leaderHTMLRepresentaion += Leader(leader);
    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        
            ${leaderHTMLRepresentaion}
        
    `


    return contentElement
}