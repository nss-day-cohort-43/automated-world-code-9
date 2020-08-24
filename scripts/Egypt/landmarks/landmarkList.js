export const Landmark = (landmarkObj) => {
    // console.log("what is the landmarkObj", landmarkObj);
	return `
		<div class="LandmarkList-card">
			<div class="card-image">
                <img class="Landmark-image" src="images/${landmarkObj.image}" alt="${landmarkObj.species}">
			</div>
			<ul>
                <li>Landmark: ${landmarkObj.landmark}</li>
                <li>Location: ${landmarkObj.location}</li>
                <li>Founder: ${landmarkObj.founder}</li>
                <li>Year Erected: ${landmarkObj.yearErected}</li>
			</ul>
		</div>
	`
}