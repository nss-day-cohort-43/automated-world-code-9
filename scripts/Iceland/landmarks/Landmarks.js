export const Landmark = (LandmarkObj) => {
    return `
    <div class="Landmark-card">
        
        <p> Landmark Name: ${LandmarkObj.name} </p>
        <p> Location: ${LandmarkObj.Location} </p>
    </div>
    `
}