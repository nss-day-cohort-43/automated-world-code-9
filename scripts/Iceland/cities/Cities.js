export const City = (cityObj) => {
    return `
    <div class="city-card">
       
        <p> City Name: ${cityObj.name} </p>
        <p> Population: ${cityObj.population} </p>
    </div>
    `
}