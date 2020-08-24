export const Leader = (leaderObj) => {
    return `
    <div class="leader-card">
        <div class="card-image">
            <img class="leader-image" src="/images/${leaderObj.image}" alt="${leaderObj.name} Image">
        </div>
        <p> leader Name: ${leaderObj.name} </p>
        <p> Position: ${leaderObj.position} </p>
    </div>
    `
}