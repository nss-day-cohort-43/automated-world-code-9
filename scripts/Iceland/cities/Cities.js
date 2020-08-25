export const City = (cityObj) => {
    return `
    <div class="city-card">
       
        <h5> City Name: ${cityObj.name} </h5>
        <p>• Population: ${cityObj.population} </p>
    </div>
    `
}