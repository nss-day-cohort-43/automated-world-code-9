export const Leader = (leaderObj) => {
    return `
    <div class="leader-card">
        <h5> Leader Name: ${leaderObj.name} </h5>
        <p>• Position: ${leaderObj.position} </p>
    </div>
    `
}