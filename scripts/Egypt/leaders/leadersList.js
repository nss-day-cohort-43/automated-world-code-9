export const Leader = (leaderObj) => {
    // console.log("what is the leaderObj", leaderObj);
	return `
		<div class="LeaderList-card">
			<div class="card-image">
                <img class="Leader-image" src="images/${leaderObj.image}" alt="${leaderObj.species}">
			</div>
			<ul>
                <li>Pharoh: ${leaderObj.pharoh}</li>
                <li>Parents: ${leaderObj.parents}</li>
                <li>Dynasty: ${leaderObj.dynasty}</li>
                <li>Years Ruled: ${leaderObj.yearsRuled}</li>
			</ul>
		</div>
	`
}