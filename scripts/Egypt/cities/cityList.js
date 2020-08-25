export const City = (cityObj) => {
    // console.log("what is the cityObj", cityObj);
	return `
		<div class="CityList-card">
			<div class="card-image">
                <img class="City-image" src="images/${cityObj.image}" alt="${cityObj.species}">
			</div>
			<ul>
                <li>city: ${cityObj.city}</li>
                <li>location: ${cityObj.location}</li>
                <li>longitude: ${cityObj.longitude}</li>
                <li>latitude: ${cityObj.latitude}</li>
			</ul>
		</div>
	`
}

