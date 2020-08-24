export const City = (cityObj) => {
    return `
    <div class="city-card">
        <div class="card-image">
            <img class="city-image" src="/images/${cityObj.image}" alt="${cityObj.name} Image">
        </div>
        <p> City Name: ${cityObj.name} </p>
        <p> Population: ${cityObj.population} </p>
    </div>
    `
}