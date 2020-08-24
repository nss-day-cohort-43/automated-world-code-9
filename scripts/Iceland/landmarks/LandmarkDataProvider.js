const icelandLandmarks = [
    {
        name: "Jokulsarlon Glacier Lagoon (and the Diamond Beach)",
        Location: "Breidamerkujokull",
    },
    {
        name: "Eyjafjallajokull (Star Wars!)",
        Location: "Vik" 
    },
    {
        name: "Thingvellir (Game of Thrones!)",
        Location: "Minister of Finance"
    },
    {
        name: "Geysir/Strokkur",
        Location: "Gullfoss"
    }


]

export const icelandicLandmarks = () => {
    return icelandLandmarks.slice();
}

console.log(icelandicLandmarks)