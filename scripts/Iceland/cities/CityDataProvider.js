const icelandCities = [
    {
        name: "Reykjavik",
        population: "128,793",
    },
    {
        name: "Kópavogur",
        population: "36,975" 
    },
    {
        name: "Hafnarfjörður",
        population: "29,799"
    },
    {
        name: "Reykjanesbær",
        population: "18,920"
    }


]

export const icelandicCities = () => {
    return icelandCities.slice();
}

console.log(icelandicCities)