export const Landmark = (LandmarkObj) => {
    return `
    <div class="Landmark-card">
        
        <h5> Landmark Name: ${LandmarkObj.name} </h5>
        <p> • Location: ${LandmarkObj.Location} </p>
    </div>
    `
}