export const Landmark = (LandmarkObj) => {
    return `
    <div class="Landmark-card">
        <div class="card-image">
            <img class="Landmark-image" src="/images/${LandmarkObj.image}" alt="${LandmarkObj.name} Image">
        </div>
        <p> Landmark Name: ${LandmarkObj.name} </p>
        <p> Location: ${LandmarkObj.Location} </p>
    </div>
    `
}